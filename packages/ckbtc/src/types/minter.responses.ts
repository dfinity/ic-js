import type {
  RetrieveBtcError,
  RetrieveBtcOk,
  RetrieveBtcWithApprovalError,
  UpdateBalanceError,
  UtxoStatus,
} from "../../candid/minter";

export type UpdateBalanceOk = UtxoStatus[];

export type UpdateBalanceResponse =
  | { Ok: UpdateBalanceOk }
  | { Err: UpdateBalanceError };

export type RetrieveBtcResponse =
  | { Ok: RetrieveBtcOk }
  | { Err: RetrieveBtcError };

export type RetrieveBtcWithApprovalResponse =
  | { Ok: RetrieveBtcOk }
  | { Err: RetrieveBtcWithApprovalError };

export type EstimateWithdrawalFee = { minter_fee: bigint; bitcoin_fee: bigint };
