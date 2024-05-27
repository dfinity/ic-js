import type {
  Account,
  Icrc1Timestamp,
  Icrc1Tokens,
  SubAccount,
} from "../../candid/ledger";
import type { AccountIdentifier } from "../account_identifier";
import type { E8s } from "./common";

export type TransferRequest = {
  to: AccountIdentifier;
  amount: bigint;
  memo?: bigint;
  fee?: E8s;
  // TODO: If didc is updated in nns-dapp as well, this array of number will become a Uint8Array
  fromSubAccount?: number[];
  // Nanoseconds since unix epoc to trigger deduplication and avoid other issues
  // See the link for more details on deduplication
  // https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/README.md#transaction_deduplication
  createdAt?: bigint;
};

// WARNING: When using the ICRC-1 interface of the ICP ledger, there is no
// relationship between the memo and the icrc1Memo of a transaction. The ICRC-1
// interface simply cannot set the memo field and the non-ICRC-1 interface
// cannot set the icrc1Memo field, even though the icrc1Memo field is called
// just "memo" in canister method params.
export type Icrc1TransferRequest = {
  to: Account;
  amount: Icrc1Tokens;
  icrc1Memo?: Uint8Array;
  fee?: Icrc1Tokens;
  fromSubAccount?: SubAccount;
  // Nanoseconds since unix epoc to trigger deduplication and avoid other issues
  // See the link for more details on deduplication
  // https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/README.md#transaction_deduplication
  createdAt?: Icrc1Timestamp;
};

/**
 * Params for an icrc2_approve.
 *
 * @param {Account} spender The account of the spender.
 * @param {Tokens} amount The amount of tokens to approve.
 * @param {Subaccount?} from_subaccount The subaccount to transfer tokens from.
 * @param {Uint8Array|number?} memo Approve memo.
 * @param {Timestamp?} created_at_time nanoseconds since unix epoc to trigger deduplication and avoid other issues
 * @param {Tokens?} fee The fee of the transfer when it's not the default fee.
 * @param {Tokens?} expected_allowance The optional allowance expected. If the expected_allowance field is set, the ledger MUST ensure that the current allowance for the spender from the caller's account is equal to the given value and return the AllowanceChanged error otherwise.
 * @param {Timestamp?} expires_at When the approval expires. If the field is set, it's greater than the current ledger time.
 */
export type Icrc2ApproveRequest = Omit<
  Icrc1TransferRequest,
  "to" | "icrc1Memo"
> & {
  memo?: Uint8Array | number[];
  expected_allowance?: Icrc1Tokens;
  expires_at?: Icrc1Timestamp;
  spender: Account;
};
