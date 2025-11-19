import { Canister, createServices } from "@dfinity/utils";
import type { _SERVICE as IcrcNftLedgerService } from "./candid/icrc_nft-ledger";
import { idlFactory as certifiedIdlFactory } from "./candid/icrc_nft-ledger.certified.idl";
import { idlFactory } from "./candid/icrc_nft-ledger.idl";
import type { IcrcLedgerCanisterOptions } from "./types/canister.options";
import type { IcrcTokenMetadataResponse } from "./types/ledger.responses";

export class IcrcNftLedgerCanister extends Canister<IcrcNftLedgerService> {
  static create(options: IcrcLedgerCanisterOptions<IcrcNftLedgerService>) {
    const { service, certifiedService, canisterId } =
      createServices<IcrcNftLedgerService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new IcrcNftLedgerCanister(canisterId, service, certifiedService);
  }

  /**
   * The collection metadata.
   */
  metadata = (params: QueryParams): Promise<IcrcTokenMetadataResponse> =>
    this.caller(params).icrc7_collection_metadata();
}
