import { toNullable } from "@dfinity/utils";
import type { TransferArg } from "../../candid/icrc1_ledger";
import type { TransferParams } from "../types/ledger.params";

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
