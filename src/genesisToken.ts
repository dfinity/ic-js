import { Actor, Agent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { GenesisTokenService, idlFactory } from "../candid/genesisToken.idl";
import { MAINNET_GENESIS_TOKEN_CANISTER_ID } from "./constants/canister_ids";
import { NeuronId } from "./types/common";
import { defaultAgent } from "./utils/agent.utils";

// HttpAgent options that can be used at construction.
export interface GenesisTokenCanisterOptions {
  // The agent to use when communicating with the canister.
  agent?: Agent;
  // The canister's ID.
  canisterId?: Principal;
  // The default service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: GenesisTokenService;
}

export class GenesisTokenCanister {
  private constructor(private readonly service: GenesisTokenService) {}

  public static create(options: GenesisTokenCanisterOptions = {}) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId ?? MAINNET_GENESIS_TOKEN_CANISTER_ID;
    const service =
      options.serviceOverride ??
      Actor.createActor<GenesisTokenService>(idlFactory, {
        agent,
        canisterId,
      });

    return new GenesisTokenCanister(service);
  }

  public claimNeurons = async ({
    hexPubKey,
  }: {
    hexPubKey: string;
  }): Promise<NeuronId[]> => {
    const response = await this.service.claim_neurons(hexPubKey);
    if ("Ok" in response) {
      return response.Ok.map((neuronId) => neuronId.id);
    }

    throw new Error(response.Err);
  };
}
