import type { _SERVICE as SnsLedgerCanister } from "../candid/ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory } from "../candid/ledger.idl";
import { Canister } from "./services/canister";
import type { CanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class LedgerCanister extends Canister<SnsLedgerCanister> {
  static create(options: CanisterOptions<SnsLedgerCanister>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsLedgerCanister>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new LedgerCanister(canisterId, service, certifiedService);
  }
}
