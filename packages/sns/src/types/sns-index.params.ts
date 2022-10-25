import type { Account } from "../../candid/icrc1_ledger";
import type { TxId } from "../../candid/sns_index";

export interface GetAccountTransactionsParams {
  max_results: bigint;
  start?: TxId;
  account: Account;
}
