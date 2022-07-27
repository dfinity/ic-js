import type { _SERVICE as SnsLedgerService } from "../candid/ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/ledger.certified.idl";
import { idlFactory } from "../candid/ledger.idl";
import { Canister } from "./services/canister";
import type { SnsCanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class SnsLedgerCanister extends Canister<SnsLedgerService> {
  static create(options: SnsCanisterOptions<SnsLedgerService>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsLedgerService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new SnsLedgerCanister(canisterId, service, certifiedService);
  }
}
