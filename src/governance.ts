import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { sha256 } from "js-sha256";
import randomBytes from "randombytes";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
import { ProposalInfo as RawProposalInfo } from "../candid/governanceTypes";
import { AccountIdentifier, SubAccount } from "./account_identifier";
import { RequestConverters } from "./canisters/governance/request.converters";
import { ResponseConverters } from "./canisters/governance/response.converters";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { E8S_PER_ICP } from "./constants/constants";
import { ICP } from "./icp";
import { LedgerCanister } from "./ledger";
import { NeuronId } from "./types/common";
import {
  GovernanceCanisterOptions,
  InsufficientAmount,
  NeuronNotFound,
  StakeNeuronError,
} from "./types/governance";
import {
  ClaimOrRefreshNeuronFromAccount,
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
  NeuronInfo,
  ProposalInfo,
} from "./types/governance_converters";
import { TransferError } from "./types/ledger";
import { defaultAgent } from "./utils/agent.utils";
import {
  asciiStringToByteArray,
  uint8ArrayToBigInt,
} from "./utils/converter.utils";

export class GovernanceCanister {
  private constructor(
    private readonly canisterId: Principal,
    private readonly service: GovernanceService,
    private readonly certifiedService: GovernanceService,
    private readonly requestConverters: RequestConverters,
    private readonly responseConverters: ResponseConverters
  ) {
    this.canisterId = canisterId;
    this.service = service;
    this.certifiedService = certifiedService;
    this.requestConverters = requestConverters;
    this.responseConverters = responseConverters;
  }

  public static create(options: GovernanceCanisterOptions = {}) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId ?? MAINNET_GOVERNANCE_CANISTER_ID;

    const service =
      options.serviceOverride ??
      Actor.createActor<GovernanceService>(idlFactory, {
        agent,
        canisterId,
      });

    const certifiedService =
      options.certifiedServiceOverride ??
      Actor.createActor<GovernanceService>(certifiedIdlFactory, {
        agent,
        canisterId,
      });

    const requestConverters = new RequestConverters();
    const responseConverters = new ResponseConverters();

    return new GovernanceCanister(
      canisterId,
      service,
      certifiedService,
      requestConverters,
      responseConverters
    );
  }

  /**
   * Returns the list of neurons controlled by the caller.
   *
   * If an array of neuron IDs is provided, precisely those neurons will be fetched.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   *
   * TODO: Decide: The library method is getNeurons but the raw method is list_neurons.  Do we want this inconsistency?
   */
  public getNeurons = async ({
    certified = true,
    principal,
    neuronIds,
  }: {
    certified: boolean;
    principal: Principal;
    neuronIds?: NeuronId[];
  }): Promise<NeuronInfo[]> => {
    const rawRequest = this.requestConverters.fromListNeurons(neuronIds);
    const raw_response = await this.getGovernanceService(
      certified
    ).list_neurons(rawRequest);
    return this.responseConverters.toArrayOfNeuronInfo(raw_response, principal);
  };

  /**
   * Returns the list of neurons who have been approved by the community to
   * appear as the default followee options.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listKnownNeurons = async (
    certified = true
  ): Promise<KnownNeuron[]> => {
    const response = await this.getGovernanceService(
      certified
    ).list_known_neurons();

    return response.known_neurons.map((n) => ({
      id: n.id[0]?.id ?? BigInt(0),
      name: n.known_neuron_data[0]?.name ?? "",
      description: n.known_neuron_data[0]?.description[0],
    }));
  };

  /**
   * Returns the list of proposals made for the community to vote on,
   * paginated and filtered by the request.
   *
   * If `certified` is true (default), the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listProposals = async ({
    request,
    certified = true,
  }: {
    request: ListProposalsRequest;
    certified?: boolean;
  }): Promise<ListProposalsResponse> => {
    const rawRequest = this.requestConverters.fromListProposalsRequest(request);
    const rawResponse = await this.getGovernanceService(
      certified
    ).list_proposals(rawRequest);
    return this.responseConverters.toListProposalsResponse(rawResponse);
  };

  public stakeNeuron = async ({
    stake,
    principal,
    ledgerCanister,
  }: {
    stake: ICP;
    principal: Principal;
    ledgerCanister: LedgerCanister;
  }): Promise<NeuronId | StakeNeuronError | TransferError> => {
    if (stake.toE8s() < E8S_PER_ICP) {
      return new InsufficientAmount(ICP.fromString("1") as ICP);
    }

    try {
      const nonceBytes = new Uint8Array(randomBytes(8));
      const nonce = uint8ArrayToBigInt(nonceBytes);
      const toSubAccount = this.buildNeuronStakeSubAccount(
        nonceBytes,
        principal
      );
      const accountIdentifier = AccountIdentifier.fromPrincipal({
        principal: this.canisterId,
        subAccount: toSubAccount,
      });

      // Send amount to the ledger.
      const response = await ledgerCanister.transfer({
        memo: nonce,
        amount: stake,
        to: accountIdentifier,
        // TODO: Support subaccounts
      });

      if (typeof response !== "bigint") {
        // TransferError
        return response;
      }

      // Notify the governance of the transaction so that the neuron is created.
      const neuronId = this.claimOrRefreshNeuronFromAccount({
        controller: principal,
        memo: nonce,
      });

      // Typescript was complaining with `neuronId || new NeuronNotFound()`:
      // "Type 'undefined' is not assignable to type 'bigint | StakeNeuronError | TransferError'"
      // hence the explicit check.
      return neuronId === undefined ? new NeuronNotFound() : neuronId;
    } catch (err) {
      return new StakeNeuronError();
    }
  };

  /**
   * Returns single proposal info
   *
   * If `certified` is true (default), the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public getProposalInfo = async ({
    proposalId,
    certified = true,
  }: {
    proposalId: bigint;
    certified?: boolean;
  }): Promise<ProposalInfo | undefined> => {
    const [proposalInfo]: [] | [RawProposalInfo] =
      await this.getGovernanceService(certified).get_proposal_info(proposalId);
    return proposalInfo
      ? this.responseConverters.toProposalInfo(proposalInfo)
      : undefined;
  };

  /**
   * Gets the NeuronID of a newly created neuron.
   */
  public claimOrRefreshNeuronFromAccount = async (
    request: ClaimOrRefreshNeuronFromAccount
  ): Promise<NeuronId | undefined> => {
    // Note: This is an update call so the certified and uncertified services are identical in this case,
    // however using the certified service provides protection in case that changes.
    const service = this.certifiedService;
    const response = await service.claim_or_refresh_neuron_from_account({
      controller: request.controller ? [request.controller] : [],
      memo: request.memo,
    });

    const result = response.result;
    if (result.length && "NeuronId" in result[0]) {
      return result[0].NeuronId.id;
    }
  };

  private buildNeuronStakeSubAccount = (
    nonce: Uint8Array,
    principal: Principal
  ): SubAccount => {
    const padding = asciiStringToByteArray("neuron-stake");
    const shaObj = sha256.create();
    shaObj.update([0x0c, ...padding, ...principal.toUint8Array(), ...nonce]);
    try {
      return SubAccount.fromBytes(new Uint8Array(shaObj.array())) as SubAccount;
    } catch (err) {
      console.error(`Error building subaccount for ${principal.toText()}`);
      throw err;
    }
  };

  private getGovernanceService(certified: boolean): GovernanceService {
    return certified ? this.certifiedService : this.service;
  }
}
