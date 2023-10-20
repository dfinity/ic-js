import type { TxId } from "../../candid/icrc_index";
import type { IcrcAccount } from "./ledger.responses";

export interface GetAccountTransactionsParams {
  max_results: bigint;
  start?: TxId;
  account: IcrcAccount;
}
