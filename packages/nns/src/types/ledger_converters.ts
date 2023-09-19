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

export type Icrc1TransferRequest = {
  to: Account;
  amount: Icrc1Tokens;
  memo?: Uint8Array;
  fee?: Icrc1Tokens;
  fromSubAccount?: SubAccount;
  // Nanoseconds since unix epoc to trigger deduplication and avoid other issues
  // See the link for more details on deduplication
  // https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/README.md#transaction_deduplication
  createdAt?: Icrc1Timestamp;
};
