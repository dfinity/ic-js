import type { QueryParams } from "@dfinity/utils/src";
import type { IcrcTxId } from "./index.types";
import type { IcrcAccount } from "./ledger.responses";

export type GetAccountTransactionsParams = {
  max_results: bigint;
  start?: IcrcTxId;
  account: IcrcAccount;
} & QueryParams;
