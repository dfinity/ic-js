import { Actor, Agent, AnonymousIdentity, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { RequestConverters } from "./canisters/governance/RequestConverters";
import { ResponseConverters } from "./canisters/governance/ResponseConverters";
import {
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
} from "./canisters/governance/model";
export * from "./canisters/governance/model";

const MAINNET_GOVERNANCE_CANISTER_ID = Principal.fromText(
  "rrkah-fqaaa-aaaaa-aaaaq-cai"
);

// HttpAgent options that can be used at construction.
export interface GovernanceCanisterOptions {
  // The agent to use when communicating with the governance canister.
  agent?: Agent;
  // The governance canister's ID.
  canisterId?: Principal;
  // The default service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: GovernanceService;
  // The service to use when making 'certified' calls into the IC (as in, using
  // update calls in place of queries). Primarily overridden in test for
  // mocking.
  certifiedServiceOverride?: GovernanceService;
}

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

/**
 * @returns The default agent to use. An agent that connects to mainnet with the anonymous identity.
 */
function defaultAgent(): Agent {
  return new HttpAgent({
    host: "https://ic0.app",
    identity: new AnonymousIdentity(),
  });
}
