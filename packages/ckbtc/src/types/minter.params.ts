import type { Subaccount } from "@dfinity/ledger/candid/icrc1_ledger";
import type { Principal } from "@dfinity/principal";
import type { QueryParams } from "@dfinity/utils";
import type { RetrieveBtcArgs } from "../../candid/minter";

export interface MinterParams extends Omit<QueryParams, "certified"> {
  owner?: Principal;
  subaccount?: Subaccount;
}

/**
 * Params to get a BTC address.
 */
export type GetBTCAddressParams = MinterParams;

/**
 * Params to update ckBTC balance after a bitcoin transfer.
 */
export type UpdateBalanceParams = MinterParams;

/**
 * Params to convert ckBTC to Bitcoin.
 */
export type RetrieveBtcParams = RetrieveBtcArgs &
  Omit<QueryParams, "certified">;

/**
 * Params to estimate the fee of the Bitcoin network.
 */
export type EstimateFeeParams = QueryParams & { amount?: bigint };
