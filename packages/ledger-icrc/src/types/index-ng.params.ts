import type { QueryParams } from "@dfinity/utils";
import type { IcrcNgTxId } from "./index-ng.types";
import type { IcrcAccount } from "./ledger.responses";

export type GetIndexNgAccountTransactionsParams = {
  max_results: bigint;
  start?: IcrcNgTxId;
  account: IcrcAccount;
} & QueryParams;
