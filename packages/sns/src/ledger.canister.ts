import type { _SERVICE as SnsLedgerService } from "../candid/icrc1_ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/icrc1_ledger.certified.idl";
import { idlFactory } from "../candid/icrc1_ledger.idl";
import { Canister } from "./services/canister";
import type { SnsCanisterOptions } from "./types/canister.options";
import { SnsTokenMetadataResponse } from "./types/ledger.responses";
import type { QueryParams } from "./types/query.params";
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

  /**
   * The token metadata (name, symbol, etc.).
   */
  metadata = (params: QueryParams): Promise<SnsTokenMetadataResponse> =>
    this.caller(params).icrc1_metadata();
}
