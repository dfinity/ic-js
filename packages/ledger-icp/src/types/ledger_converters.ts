import type {
  Account,
  Icrc1Timestamp,
  Icrc1Tokens,
  icrc21_consent_message_request,
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
 * @param {SubAccount?} from_subaccount The subaccount to transfer tokens from.
 * @param {Uint8Array?} icrc1Memo Approve memo.
 * @param {Icrc1Timestamp?} createdAt nanoseconds since unix epoc to trigger deduplication and avoid other issues
 * @param {Icrc1Tokens?} fee The fee of the transfer when it's not the default fee.
 * @param {Icrc1Tokens?} expected_allowance The optional allowance expected. If the expected_allowance field is set, the ledger MUST ensure that the current allowance for the spender from the caller's account is equal to the given value and return the AllowanceChanged error otherwise.
 * @param {Icrc1Timestamp?} expires_at When the approval expires. If the field is set, it's greater than the current ledger time.
 */
export type Icrc2ApproveRequest = Omit<Icrc1TransferRequest, "to"> & {
  expected_allowance?: Icrc1Tokens;
  expires_at?: Icrc1Timestamp;
  spender: Account;
};
/**
 * Metadata for the consent message in ICRC-21 specification.
 * @param {number} [utcOffsetMinutes] - The user's local timezone offset in minutes from UTC. If absent, the default is UTC.
 * @param {string} language - BCP-47 language tag. See https://www.rfc-editor.org/rfc/bcp/bcp47.txt
 */
export type Icrc21ConsentMessageMetadata = {
  utcOffsetMinutes?: number;
  language: string;
};

/**
 * Device specification for displaying the consent message.
 *
 * @param {null} [GenericDisplay] -  A generic display able to handle large documents and do line wrapping and pagination / scrolling.  Text must be Markdown formatted, no external resources (e.g. images) are allowed.
 * @param {Object} [LineDisplay] - Simple display able to handle lines of text with a maximum number of characters per line.
 * @param {number} LineDisplay.charactersPerLine - Maximum number of characters that can be displayed per line.
 * @param {number} LineDisplay.linesPerPage - Maximum number of lines that can be displayed at once on a single page.
 */
export type Icrc21ConsentMessageDeviceSpec =
  | { GenericDisplay: null }
  | {
      LineDisplay: {
        charactersPerLine: number;
        linesPerPage: number;
      };
    };

/**
 * Specification for the consent message, including metadata and device preferences.
 *
 * @param {Icrc21ConsentMessageMetadata} metadata - Metadata of the consent message.
 * @param {Icrc21ConsentMessageDeviceSpec} [deviceSpec] - Information about the device responsible for presenting the consent message to the user.
 */
export type Icrc21ConsentMessageSpec = {
  metadata: Icrc21ConsentMessageMetadata;
  deriveSpec?: Icrc21ConsentMessageDeviceSpec;
};

/**
 * Parameters for the consent message request.
 *
 * @param {string} method - Method name of the canister call.
 * @param {Uint8Array} arg - Argument of the canister call.
 * @param {Icrc21ConsentMessageSpec} userPreferences - User preferences with regards to the consent message presented to the end-user.
 */
export type Icrc21ConsentMessageRequest = Omit<
  icrc21_consent_message_request,
  "user_preferences"
> & {
  userPreferences: Icrc21ConsentMessageSpec;
};
