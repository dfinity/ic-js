import { Actor, Agent, AnonymousIdentity, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { GovernanceService, idlFactory } from "../candid/governance.idl";

const MAINNET_GOVERNANCE_CANISTER_ID = Principal.fromText(
  "rrkah-fqaaa-aaaaa-aaaaq-cai"
);

type NeuronId = bigint;

export type KnownNeuron = {
  id: NeuronId,
  name: string,
  description: string | undefined
};

// HttpAgent options that can be used at construction.
export interface GovernanceCanisterOptions {
  // The agent to use when communicating with the governance canister.
  agent?: Agent;
  // The governance canister's ID.
  canisterId?: Principal;
}

export class GovernanceCanister {
  private constructor(
    private readonly service: GovernanceService
  ) {}

  public static create(options: GovernanceCanisterOptions = {}) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId ?? MAINNET_GOVERNANCE_CANISTER_ID;
    const service = Actor.createActor<GovernanceService>(idlFactory, {
      agent,
      canisterId,
    });
    return new GovernanceCanister(service);
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
    const response = await this.service.list_known_neurons();
    return response.known_neurons.map(n => ({
      id: n.id[0]?.id ?? BigInt(0),
      name: n.known_neuron_data[0]?.name ?? "",
      description: n.known_neuron_data[0]?.description[0]
    }));
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
