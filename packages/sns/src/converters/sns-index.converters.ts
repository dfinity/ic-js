import type { IcrcAccount } from "@dfinity/ledger/src";
import { toNullable } from "@dfinity/utils";
import type {
  Account,
  GetAccountTransactionsArgs,
} from "../../candid/sns_index";
import type { GetAccountTransactionsParams } from "../types/sns-index.params";

const toCandidAccount = ({ owner, subaccount }: IcrcAccount): Account => ({
  owner,
  subaccount: toNullable(subaccount),
});

export const toGetTransactionsArgs = ({
  account,
  max_results,
  start,
}: GetAccountTransactionsParams): GetAccountTransactionsArgs => ({
  account: toCandidAccount(account),
  max_results,
  start: toNullable(start),
});
