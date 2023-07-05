import type { IcrcTxId } from "./index.types";
import type { IcrcAccount } from "./ledger.responses";
import type {QueryParams} from "@dfinity/utils/src";

export type GetAccountTransactionsParams = {
  max_results: bigint;
  start?: IcrcTxId;
  account: IcrcAccount;
} & QueryParams;
