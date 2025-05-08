import type { Principal } from "@dfinity/principal";
import type { QueryParams } from "@dfinity/utils";
import type { Subaccount } from "../../candid/icrc_ledger";
import type { IcrcNgTxId } from "./index-ng.types";
import type { IcrcAccount } from "./ledger.responses";

export type GetIndexNgAccountTransactionsParams = {
  max_results: bigint;
  start?: IcrcNgTxId;
  account: IcrcAccount;
} & QueryParams;

export type ListSubaccountsParams = {
  owner: Principal;
  start?: Subaccount;
} & QueryParams;
