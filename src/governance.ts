import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
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
    const service = certified ? this.certifiedService : this.service;
    const raw_response = await service.list_neurons(rawRequest);
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
    const service = certified ? this.certifiedService : this.service;
    const response = await service.list_known_neurons();

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
    const service = certified ? this.certifiedService : this.service;
    const rawResponse = await service.list_proposals(rawRequest);
    return this.responseConverters.toListProposalsResponse(rawResponse);
  };

  /**
   * Returns the proposal
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
  }): Promise<ProposalInfo | null> => {
    const service = certified ? this.certifiedService : this.service;
    const rawResponse = await service.get_proposal_info(proposalId);
    return rawResponse.length
      ? this.responseConverters.toProposalInfo(rawResponse[0])
      : null;
  };

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
}
