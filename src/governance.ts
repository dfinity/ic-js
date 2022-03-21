import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { sha256 } from "js-sha256";
import randomBytes from "randombytes";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
import {
  ListProposalInfo,
  ProposalInfo as RawProposalInfo,
} from "../candid/governanceTypes";
import { AccountIdentifier, SubAccount } from "./account_identifier";
import {
  fromListNeurons,
  fromListProposalsRequest,
  toIncreaseDissolveDelayRequest,
  toManageNeuronsFollowRequest,
  toRegisterVoteRequest,
} from "./canisters/governance/request.converters";
import {
  toArrayOfNeuronInfo,
  toListProposalsResponse,
  toProposalInfo,
} from "./canisters/governance/response.converters";
import { manageNeuron } from "./canisters/governance/services";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { E8S_PER_ICP } from "./constants/constants";
import { ICP } from "./icp";
import { LedgerCanister } from "./ledger";
import { NeuronId } from "./types/common";
import {
  CouldNotClaimNeuronError,
  GovernanceCanisterOptions,
  InsufficientAmount,
  StakeNeuronError,
  StakeNeuronTransferError,
} from "./types/governance";
import {
  ClaimOrRefreshNeuronFromAccount,
  EmptyResponse,
  FollowRequest,
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
  NeuronInfo,
  ProposalId,
  ProposalInfo,
  Vote,
} from "./types/governance_converters";
import { defaultAgent } from "./utils/agent.utils";
import {
  asciiStringToByteArray,
  uint8ArrayToBigInt,
} from "./utils/converter.utils";

export class GovernanceCanister {
  private constructor(
    private readonly canisterId: Principal,
    private readonly service: GovernanceService,
    private readonly certifiedService: GovernanceService
  ) {
    this.canisterId = canisterId;
    this.service = service;
    this.certifiedService = certifiedService;
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

    return new GovernanceCanister(canisterId, service, certifiedService);
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
  public listNeurons = async ({
    certified = true,
    principal,
    neuronIds,
  }: {
    certified: boolean;
    principal: Principal;
    neuronIds?: NeuronId[];
  }): Promise<NeuronInfo[]> => {
    const rawRequest = fromListNeurons(neuronIds);
    const raw_response = await this.getGovernanceService(
      certified
    ).list_neurons(rawRequest);
    return toArrayOfNeuronInfo(raw_response, principal);
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
    const rawRequest: ListProposalInfo = fromListProposalsRequest(request);
    const rawResponse = await this.getGovernanceService(
      certified
    ).list_proposals(rawRequest);
    return toListProposalsResponse(rawResponse);
  };

  /**
   *
   */
  public stakeNeuron = async ({
    stake,
    principal,
    fromSubAccountId,
    ledgerCanister,
  }: {
    stake: ICP;
    principal: Principal;
    fromSubAccountId?: number;
    ledgerCanister: LedgerCanister;
  }): Promise<NeuronId | StakeNeuronError> => {
    if (stake.toE8s() < E8S_PER_ICP) {
      return new InsufficientAmount(ICP.fromString("1") as ICP);
    }

    const nonceBytes = new Uint8Array(randomBytes(8));
    const nonce = uint8ArrayToBigInt(nonceBytes);
    const toSubAccount = this.buildNeuronStakeSubAccount(nonceBytes, principal);
    const accountIdentifier = AccountIdentifier.fromPrincipal({
      principal: this.canisterId,
      subAccount: toSubAccount,
    });

    // Send amount to the ledger.
    const response = await ledgerCanister.transfer({
      memo: nonce,
      amount: stake,
      fromSubAccountId,
      to: accountIdentifier,
    });

    if (typeof response !== "bigint") {
      // TransferError
      return new StakeNeuronTransferError(response);
    }

    // Notify the governance of the transaction so that the neuron is created.
    const neuronId = this.claimOrRefreshNeuronFromAccount({
      controller: principal,
      memo: nonce,
    });

    // Typescript was complaining with `neuronId || new NeuronNotFound()`:
    // "Type 'undefined' is not assignable to type 'bigint | StakeNeuronError | TransferError'"
    // hence the explicit check.
    return neuronId === undefined ? new CouldNotClaimNeuronError() : neuronId;
  };

  /**
   * Increases dissolve delay of a neuron
   *
   * Returns whether the update succeeded or not
   */
  public increaseDissolveDelay = async ({
    neuronId,
    additionalDissolveDelaySeconds,
  }: {
    neuronId: NeuronId;
    additionalDissolveDelaySeconds: number;
  }): Promise<EmptyResponse> => {
    const request = toIncreaseDissolveDelayRequest({
      neuronId,
      additionalDissolveDelaySeconds,
    });
    const response = await manageNeuron({
      request,
      service: this.certifiedService,
    });
    if (response.Ok) {
      return { Ok: null };
    }
    return {
      Err: response.Err || {
        errorMessage: "Error updating dissolve delay",
        errorType: 0,
      },
    };
  };

  /**
   * Returns single proposal info
   *
   * If `certified` is true (default), the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public getProposal = async ({
    proposalId,
    certified = true,
  }: {
    proposalId: bigint;
    certified?: boolean;
  }): Promise<ProposalInfo | undefined> => {
    const [proposalInfo]: [] | [RawProposalInfo] =
      await this.getGovernanceService(certified).get_proposal_info(proposalId);
    return proposalInfo ? toProposalInfo(proposalInfo) : undefined;
  };

  /**
   *
   * Registers vote for a proposal from the neuron passed
   *
   * Returns whether updated succeeded or not
   */
  public registerVote = async ({
    neuronId,
    vote,
    proposalId,
  }: {
    neuronId: NeuronId;
    vote: Vote;
    proposalId: ProposalId;
  }): Promise<EmptyResponse> => {
    const request = toRegisterVoteRequest({ neuronId, vote, proposalId });
    const response = await manageNeuron({
      request,
      service: this.certifiedService,
    });
    if (response.Ok) {
      return { Ok: null };
    }
    return {
      Err: response.Err || {
        errorMessage: "Error registering vote",
        errorType: 0,
      },
    };
  };

  /**
   * Edit neuron followees per topic
   */
  public setFollowees = async (
    followRequest: FollowRequest
  ): Promise<EmptyResponse> => {
    const request = toManageNeuronsFollowRequest(followRequest);
    const response = await manageNeuron({
      request,
      service: this.certifiedService,
    });
    if (response.Ok) {
      return { Ok: null };
    }
    return {
      Err: response.Err || {
        errorMessage: "Error setting followees",
        errorType: 0,
      },
    };
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
    return SubAccount.fromBytes(new Uint8Array(shaObj.array())) as SubAccount;
  };

  private getGovernanceService(certified: boolean): GovernanceService {
    return certified ? this.certifiedService : this.service;
  }

  /**
   * Return the data of the neuron provided as id.
   */
  public getNeuron = async ({
    certified = true,
    principal,
    neuronId,
  }: {
    certified: boolean;
    principal: Principal;
    neuronId: NeuronId;
  }): Promise<NeuronInfo | undefined> => {
    // The governance canister exposes two functions "get_neuron_info" and "get_full_neuron" that could probably be used to fetch the neuron details too.
    // However historically this function has been resolved with a single call "list_neurons".

    const [neuron]: NeuronInfo[] = await this.listNeurons({
      certified,
      principal,
      neuronIds: [neuronId],
    });

    return neuron;
  };
}
