import { ICPTs, Subaccount } from "@dfinity/nns-proto";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import type {
  Tokens,
  TransferArgs as TransferRawRequest,
} from "../../../candid/ledger";
import { TRANSACTION_FEE } from "../../constants/constants";
import type { TransferRequest } from "../../types/ledger_converters";

export const subAccountNumbersToSubaccount = (
  subAccountNumbers: number[]
): Subaccount => {
  const bytes = new Uint8Array(subAccountNumbers).buffer;
  const subaccount: Subaccount = new Subaccount();
  subaccount.setSubAccount(new Uint8Array(bytes));
  return subaccount;
};

export const toICPTs = (amount: bigint): ICPTs => {
  const result = new ICPTs();
  result.setE8s(amount.toString(10));
  return result;
};

const e8sToTokens = (e8s: bigint): Tokens => ({ e8s });

export const toTransferRawRequest = ({
  to,
  amount,
  memo,
  fee,
  fromSubAccount,
  createdAt,
}: TransferRequest): TransferRawRequest => ({
  to: to.toUint8Array(),
  fee: e8sToTokens(fee ?? TRANSACTION_FEE),
  amount: e8sToTokens(amount),
  // Always explicitly set the memo for compatibility with ledger wallet - hardware wallet
  memo: memo ?? BigInt(0),
  created_at_time:
    createdAt !== undefined ? [{ timestamp_nanos: createdAt }] : [],
  from_subaccount:
    fromSubAccount === undefined
      ? []
      : [arrayOfNumberToUint8Array(fromSubAccount)],
});
