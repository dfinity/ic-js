import { idlFactory as certifiedIdlFactory } from "@dfinity/ckbtc/candid/minter.certified.idl";
import { idlFactory } from "@dfinity/ckbtc/candid/minter.idl";
import { Canister, createServices } from "@dfinity/utils";
import type { _SERVICE as CkETHMinterService } from "../candid/minter";
import type { CkETHMinterCanisterOptions } from "./types/canister.options";

export class CkETHMinterCanister extends Canister<CkETHMinterService> {
  static create(options: CkETHMinterCanisterOptions<CkETHMinterService>) {
    const { service, certifiedService, canisterId } =
      createServices<CkETHMinterService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new CkETHMinterCanister(canisterId, service, certifiedService);
  }
}
