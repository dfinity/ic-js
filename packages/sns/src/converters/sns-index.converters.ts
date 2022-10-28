import { toNullable } from "@dfinity/utils";
import type { GetAccountTransactionsArgs } from "../../candid/sns_index";
import type { GetAccountTransactionsParams } from "../types/sns-index.params";
import { toCandidAccount } from "./ledger.converters";

export const toGetTransactionsArgs = ({
  account,
  max_results,
  start,
}: GetAccountTransactionsParams): GetAccountTransactionsArgs => ({
  account: toCandidAccount(account),
  max_results,
  start: toNullable(start),
});
