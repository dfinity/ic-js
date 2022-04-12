import { ICPTs, Subaccount } from "../../../proto/ledger_pb";
import { SUB_ACCOUNT_BYTE_LENGTH } from "../../constants/constants";
import { numberToArrayBuffer } from "../../utils/converter.utils";

export const subAccountIdToSubaccount = (subAccountId: number): Subaccount => {
  const bytes = numberToArrayBuffer(subAccountId, SUB_ACCOUNT_BYTE_LENGTH);
  const subaccount: Subaccount = new Subaccount();
  subaccount.setSubAccount(new Uint8Array(bytes));
  return subaccount;
};

export const toICPTs = (amount: bigint): ICPTs => {
  const result = new ICPTs();
  result.setE8s(amount.toString(10));
  return result;
};
