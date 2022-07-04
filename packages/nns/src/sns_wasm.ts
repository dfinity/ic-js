import { Actor } from "@dfinity/agent";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_wasm.certified.idl";
import {
  DeployedSns,
  idlFactory,
  SnsWasmService,
} from "../candid/sns_wasm.idl";
import { MAINNET_SNS_WASM_CANISTER_ID } from "./constants/canister_ids";
import { SnsWasmCanisterOptions } from "./types/sns_wasm";
import { defaultAgent } from "./utils/agent.utils";

export class SnsWasmCanister {
  private constructor(
    private readonly service: SnsWasmService,
    private readonly certifiedService: SnsWasmService
  ) {}

  public static create(options: SnsWasmCanisterOptions = {}) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId ?? MAINNET_SNS_WASM_CANISTER_ID;

    const service =
      options.serviceOverride ??
      Actor.createActor<SnsWasmService>(idlFactory, {
        agent,
        canisterId,
      });

    const certifiedService =
      options.certifiedServiceOverride ??
      Actor.createActor<SnsWasmService>(certifiedIdlFactory, {
        agent,
        canisterId,
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
