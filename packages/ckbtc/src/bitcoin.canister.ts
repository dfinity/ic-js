import { Canister, createServices } from "@dfinity/utils";
import type { _SERVICE as BitcoinService } from "../candid/bitcoin";
import { idlFactory as certifiedIdlFactory } from "../candid/minter.certified.idl";
import { idlFactory } from "../candid/minter.idl";
import type { CkBTCCanisterOptions } from "./types/canister.options";

export class BitcoinCanister extends Canister<BitcoinService> {
  static create(options: CkBTCCanisterOptions<BitcoinService>) {
    const { service, certifiedService, canisterId } =
      createServices<BitcoinService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new BitcoinCanister(canisterId, service, certifiedService);
  }
}
