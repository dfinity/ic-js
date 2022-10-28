import { toNullable } from "@dfinity/utils";
import type { GetAccountTransactionsArgs } from "../../candid/sns_index";
import { toCandidAccount } from "../types/ledger.responses";
import type { GetAccountTransactionsParams } from "../types/sns-index.params";

export const toGetTransactionsArgs = ({
  account,
  max_results,
  start,
}: GetAccountTransactionsParams): GetAccountTransactionsArgs => ({
  account: toCandidAccount(account),
  max_results,
  start: toNullable(start),
});
