import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
import { ProposalInfo as RawProposalInfo } from "../candid/governanceTypes";
import { RequestConverters } from "./canisters/governance/request.converters";
import { ResponseConverters } from "./canisters/governance/response.converters";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { NeuronId } from "./types/common";
import { GovernanceCanisterOptions } from "./types/governance";
import {
  ClaimOrRefreshNeuronFromAccount,
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
  NeuronInfo,
  ProposalInfo,
} from "./types/governance_converters";
import { defaultAgent } from "./utils/agent.utils";

export class GovernanceCanister {
  private constructor(
    private readonly service: GovernanceService,
    private readonly certifiedService: GovernanceService,
    private readonly requestConverters: RequestConverters,
    private readonly responseConverters: ResponseConverters,
    private readonly myPrincipal?: Principal
  ) {
    this.service = service;
    this.certifiedService = certifiedService;
    this.requestConverters = requestConverters;
    this.responseConverters = responseConverters;
    this.myPrincipal = myPrincipal;
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
    neuronIds,
  }: {
    certified: boolean;
    neuronIds?: NeuronId[];
  }): Promise<NeuronInfo[]> => {
    if (undefined === this.myPrincipal) {
      // An anonymous caller has no neurons.
      return new Promise(() => []);
    }
    const principal: Principal = this.myPrincipal;
    const rawRequest = this.requestConverters.fromListNeurons(neuronIds);
    const raw_response = await this.getGovernanceService(certified).list_neurons(rawRequest);
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
    const response = await this.getGovernanceService(certified).list_known_neurons();

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
    const rawResponse = await this.getGovernanceService(certified).list_proposals(rawRequest);
    return this.responseConverters.toListProposalsResponse(rawResponse);
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
    const [proposalInfo]: [] | [RawProposalInfo] = await this.getGovernanceService(certified).get_proposal_info(proposalId);
    return proposalInfo ? this.responseConverters.toProposalInfo(proposalInfo) : undefined;
  }

  /**
   * Gets the NeuronID of a newly created neuron.
   */
  public claimOrRefreshNeuronFromAccount = async (
    request: ClaimOrRefreshNeuronFromAccount
  ): Promise<NeuronId> => {
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
    } else {
      throw new Error(
        `Error claiming/refreshing neuron: ${JSON.stringify(result)}`
      );
    }
  };

  private getGovernanceService(certified: boolean): GovernanceService {
    return certified ? this.certifiedService : this.service;
  }
}
