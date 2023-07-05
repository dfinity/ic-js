import type { IcrcTxId } from "./index.types";
import type { IcrcAccount } from "./ledger.responses";

export interface GetAccountTransactionsParams {
  max_results: bigint;
  start?: IcrcTxId;
  account: IcrcAccount;
}
