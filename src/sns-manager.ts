import { Actor } from "@dfinity/agent";
import { idlFactory as certifiedIdlFactory } from "../candid/sns-wasm.certified.idl";
import {
  DeployedSns,
  idlFactory,
  SnsWasmService,
} from "../candid/sns-wasm.idl";
import { MAINNET_SNS_WASM_CANISTER_ID } from "./constants/canister_ids";
import { SnsManagerCanisterOptions } from "./types/sns-manager";
import { defaultAgent } from "./utils/agent.utils";

export class SnsManagerCanister {
  private constructor(
    private readonly service: SnsWasmService,
    private readonly certifiedService: SnsWasmService
  ) {}

  public static create(options: SnsManagerCanisterOptions = {}) {
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

    return new SnsManagerCanister(service, certifiedService);
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
