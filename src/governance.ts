import { Actor } from "@dfinity/agent";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
import { RequestConverters } from "./canisters/governance/request.converters";
import { ResponseConverters } from "./canisters/governance/response.converters";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { GovernanceCanisterOptions } from "./types/governance";
import {
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
} from "./types/governance_converters";
import { defaultAgent } from "./utils/agent.utils";

export class GovernanceCanister {
  private constructor(
    private readonly service: GovernanceService,
    private readonly certifiedService: GovernanceService,
    private readonly requestConverters: RequestConverters,
    private readonly responseConverters: ResponseConverters
  ) {
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
      service,
      certifiedService,
      requestConverters,
      responseConverters
    );
  }

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
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listProposals = async (
    request: ListProposalsRequest,
    certified = true
  ): Promise<ListProposalsResponse> => {
    const rawRequest = this.requestConverters.fromListProposalsRequest(request);
    const service = certified ? this.certifiedService : this.service;
    const rawResponse = await service.list_proposals(rawRequest);
    return this.responseConverters.toListProposalsResponse(rawResponse);
  };
}
