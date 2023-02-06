import type { Subaccount } from "@dfinity/ledger/candid/icrc1_ledger";
import type { Principal } from "@dfinity/principal";
import type { QueryParams } from "@dfinity/utils";

/**
 * Params to get a BTC address.
 */
export interface GetBTCAddressParams extends Omit<QueryParams, "certified"> {
  owner?: Principal;
  subaccount?: Subaccount;
}
