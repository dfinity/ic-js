import type { Icrc1Account } from "@dfinity/ledger";
import type { TxId } from "../../candid/sns_index";

export interface GetAccountTransactionsParams {
  max_results: bigint;
  start?: TxId;
  account: Icrc1Account;
}
