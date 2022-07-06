import type { ActorSubclass } from "@dfinity/agent";
import type { _SERVICE as GenesisTokenService } from "../candid/genesis_token";
import { idlFactory as certifiedIdlFactory } from "../candid/genesis_token.certified.idl";
import { idlFactory } from "../candid/genesis_token.idl";
import { MAINNET_GENESIS_TOKEN_CANISTER_ID } from "./constants/canister_ids";
import type { CanisterOptions } from "./types/canister.options";
import type { NeuronId } from "./types/common";
import { createServices } from "./utils/actor.utils";

export class GenesisTokenCanister {
  private constructor(
    private readonly service: ActorSubclass<GenesisTokenService>
  ) {}

  public static create(options: CanisterOptions<GenesisTokenService> = {}) {
    const { service } = createServices<GenesisTokenService>({
      options: {
        ...options,
        canisterId: options.canisterId ?? MAINNET_GENESIS_TOKEN_CANISTER_ID,
      },
      idlFactory,
      certifiedIdlFactory,
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
