import { toNullable } from "@dfinity/utils";
import type {
  ApproveArgs,
  TransferArg,
  TransferFromArgs,
} from "../../candid/icrc1_ledger";
import type {
  ApproveParams,
  TransferFromParams,
  TransferParams,
} from "../types/ledger.params";

export const toTransferArg = ({
  from_subaccount,
  fee,
  created_at_time,
  memo,
  ...rest
}: TransferParams): TransferArg => ({
  ...rest,
  fee: toNullable(fee),
  memo: toNullable(memo),
  from_subaccount: toNullable(from_subaccount),
  created_at_time: toNullable(created_at_time),
});

export const toTransferFromArgs = ({
  spender_subaccount,
  fee,
  created_at_time,
  memo,
  ...rest
}: TransferFromParams): TransferFromArgs => ({
  ...rest,
  fee: toNullable(fee),
  memo: toNullable(memo),
  spender_subaccount: toNullable(spender_subaccount),
  created_at_time: toNullable(created_at_time),
});

export const toApproveArgs = ({
  fee,
  created_at_time,
  memo,
  from_subaccount,
  expected_allowance,
  expires_at,
  ...rest
}: ApproveParams): ApproveArgs => ({
  ...rest,
  fee: toNullable(fee),
  memo: toNullable(memo),
  from_subaccount: toNullable(from_subaccount),
  created_at_time: toNullable(created_at_time),
  expected_allowance: toNullable(expected_allowance),
  expires_at: toNullable(expires_at),
});
