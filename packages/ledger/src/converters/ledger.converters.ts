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

// WARNING: When using the ICRC-1 interface of the ICP ledger, there is no
// relationship between the memo and the icrc1Memo of a transaction. The ICRC-1
// interface simply cannot set the memo field and the non-ICRC-1 interface
// cannot set the icrc1Memo field, even though the icrc1Memo field is called
// just "memo" in canister method params.
export const toTransferArg = ({
  from_subaccount,
  fee,
  created_at_time,
  icrc1Memo,
  ...rest
}: TransferParams): TransferArg => ({
  ...rest,
  fee: toNullable(fee),
  memo: toNullable(icrc1Memo),
  from_subaccount: toNullable(from_subaccount),
  created_at_time: toNullable(created_at_time),
});

export const toTransferFromArgs = ({
  spender_subaccount,
  fee,
  created_at_time,
  icrc1Memo,
  ...rest
}: TransferFromParams): TransferFromArgs => ({
  ...rest,
  fee: toNullable(fee),
  memo: toNullable(icrc1Memo),
  spender_subaccount: toNullable(spender_subaccount),
  created_at_time: toNullable(created_at_time),
});

export const toApproveArgs = ({
  fee,
  created_at_time,
  icrc1Memo,
  from_subaccount,
  expected_allowance,
  expires_at,
  ...rest
}: ApproveParams): ApproveArgs => ({
  ...rest,
  fee: toNullable(fee),
  memo: toNullable(icrc1Memo),
  from_subaccount: toNullable(from_subaccount),
  created_at_time: toNullable(created_at_time),
  expected_allowance: toNullable(expected_allowance),
  expires_at: toNullable(expires_at),
});
