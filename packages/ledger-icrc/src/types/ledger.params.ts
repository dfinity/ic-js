import type { QueryParams } from "@dfinity/utils";
import type {
  Account,
  AllowanceArgs,
  Subaccount,
  Timestamp,
  Tokens,
} from "../../candid/icrc_ledger";
import type { IcrcAccount } from "./ledger.responses";

/**
 * Params to get the balance of an ICRC-1 account.
 */
export type BalanceParams = IcrcAccount & QueryParams;

// WARNING: When using the ICRC-1 interface of the ICP ledger, there is no
// relationship between the memo and the icrc1Memo of a transaction. The ICRC-1
// interface simply cannot set the memo field and the non-ICRC-1 interface
// cannot set the icrc1Memo field, even though the icrc1Memo field is called
// just "memo" in canister method params.
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

/**
 * Params for an icrc2_transfer_from.
 *
 * @param {Account} to The account to transfer tokens to.
 * @param {Account} from The account to transfer tokens from.
 * @param {Subaccount?} spender_subaccount A spender subaccount.
 * @param {Tokens} amount The Amount of tokens to transfer.
 * @param {Uint8Array?} memo Transfer memo.
 * @param {Timestamp?} created_at_time nanoseconds since unix epoc to trigger deduplication and avoid other issues
 * @param {Tokens?} fee The fee of the transfer when it's not the default fee.
 */
export type TransferFromParams = Omit<TransferParams, "from_subaccount"> & {
  spender_subaccount?: Subaccount;
  from: Account;
};

/**
 * Params for an icrc2_approve.
 *
 * @param {Account} spender The account of the spender.
 * @param {Tokens} amount The Amount of tokens to approve.
 * @param {Subaccount?} from_subaccount The subaccount to transfer tokens from.
 * @param {Uint8Array?} memo Transfer memo.
 * @param {Timestamp?} created_at_time nanoseconds since unix epoc to trigger deduplication and avoid other issues
 * @param {Tokens?} fee The fee of the transfer when it's not the default fee.
 * @param {Tokens?} expected_allowance The optional allowance expected. If the expected_allowance field is set, the ledger MUST ensure that the current allowance for the spender from the caller's account is equal to the given value and return the AllowanceChanged error otherwise.
 * @param {Timestamp?} expires_at When the approval expires. If the field is set, it's greater than the current ledger time.
 */
export type ApproveParams = Omit<TransferParams, "to"> & {
  expected_allowance?: Tokens;
  expires_at?: Timestamp;
  spender: Account;
};

/**
 * Params to get the token allowance that the spender account can transfer from the specified account
 */
export type AllowanceParams = AllowanceArgs & QueryParams;
