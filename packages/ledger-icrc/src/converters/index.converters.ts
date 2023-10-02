import { toNullable } from "@dfinity/utils";
import type {
  Account,
  GetAccountTransactionsArgs,
} from "../../candid/icrc_index";
import type { GetAccountTransactionsParams } from "../types/index.params";
import type { IcrcAccount } from "../types/ledger.responses";

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
