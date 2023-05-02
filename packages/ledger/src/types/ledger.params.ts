import type { QueryParams } from "@dfinity/utils";
import type {
  Account,
  Subaccount,
  Timestamp,
  Tokens,
} from "../../candid/icrc1_ledger";
import type { IcrcAccount } from "./ledger.responses";

/**
 * Params to get the balance of an ICRC-1 account.
 */
export type BalanceParams = IcrcAccount & QueryParams;

/**
 * Params to make a transfer in an ICRC-1 ledger
 *
 * @param {Account} to The account to transfer tokens to.
 * @param {Tokens} amount The Amount of tokens to transfer.
 * @param {Subaccount?} from_subaccount The subaccount to transfer tokens to.
 * @param {Uint8Array?} memo Transfer memo.
 * @param {Timestamp?} created_at_time nanoseconds since unix epoc to trigger deduplication and avoid other issues
 * See the link for more details on deduplication
 * https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/README.md#transaction_deduplication
 * @param {Tokens?} fee The fee of the transfer when it's not the default fee.
 */
export interface TransferParams {
  to: Account;
  fee?: Tokens;
  memo?: Uint8Array;
  from_subaccount?: Subaccount;
  created_at_time?: Timestamp;
  amount: Tokens;
}
