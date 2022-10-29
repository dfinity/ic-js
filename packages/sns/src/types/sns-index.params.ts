import type { TxId } from "../../candid/sns_index";
import type { SnsAccount } from "./ledger.responses";

export interface GetAccountTransactionsParams {
  max_results: bigint;
  start?: TxId;
  account: SnsAccount;
}
