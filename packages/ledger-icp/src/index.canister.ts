import { Canister, createServices, type CanisterOptions } from "@dfinity/utils";
import type { _SERVICE as IndexService } from "../candid/index";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory } from "../candid/ledger.idl";
import { MAINNET_INDEX_CANISTER_ID } from "./constants/canister_ids";

export class IndexCanister extends Canister<IndexService> {
  static create({
    canisterId: optionsCanisterId,
    ...options
  }: CanisterOptions<IndexService>) {
    const { service, certifiedService, canisterId } =
      createServices<IndexService>({
        options: {
          ...options,
          canisterId: optionsCanisterId ?? MAINNET_INDEX_CANISTER_ID,
        },
        idlFactory,
        certifiedIdlFactory,
      });

    return new IndexCanister(canisterId, service, certifiedService);
  }
}
