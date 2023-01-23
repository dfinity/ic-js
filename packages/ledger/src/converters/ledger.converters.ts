import { toNullable } from "@dfinity/utils";
import type { Account, TransferArg } from "../../candid/icrc1_ledger";
import type { TransferParams } from "../types/ledger.params";
import type { Icrc1Account } from "../types/ledger.responses";

export const toTransferArg = ({
  to,
  from_subaccount,
  fee,
  amount,
  created_at_time,
  memo,
}: TransferParams): TransferArg => ({
  to,
  amount,
  fee: toNullable(fee),
  memo: toNullable(memo),
  from_subaccount: toNullable(from_subaccount),
  created_at_time: toNullable(created_at_time),
});

export const toCandidAccount = ({
  owner,
  subaccount,
}: Icrc1Account): Account => ({
  owner,
  subaccount: toNullable(subaccount),
});
