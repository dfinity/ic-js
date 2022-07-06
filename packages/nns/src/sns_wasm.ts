import type {
  DeployedSns,
  _SERVICE as SnsWasmService,
} from "../candid/sns_wasm";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_wasm.certified.idl";
import { idlFactory } from "../candid/sns_wasm.idl";
import { MAINNET_SNS_WASM_CANISTER_ID } from "./constants/canister_ids";
import type { CanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class SnsWasmCanister {
  private constructor(
    private readonly service: SnsWasmService,
    private readonly certifiedService: SnsWasmService
  ) {}

  public static create(options: CanisterOptions<SnsWasmService> = {}) {
    const { service, certifiedService } = createServices<SnsWasmService>({
      options: {
        ...options,
        canisterId: options.canisterId ?? MAINNET_SNS_WASM_CANISTER_ID,
      },
      idlFactory,
      certifiedIdlFactory,
    });

    return new SnsWasmCanister(service, certifiedService);
  }

  public listSns = async ({
    certified = true,
  }: {
    certified?: boolean;
  }): Promise<DeployedSns[]> => {
    const service = certified ? this.certifiedService : this.service;

    const { instances } = await service.list_deployed_snses({});
    return instances;
  };
}
