import type {
  RetrieveBtcError,
  RetrieveBtcOk,
  UpdateBalanceError,
  UpdateBalanceResult,
} from "../../candid/minter";

export type UpdateBalanceResponse =
  | { Ok: UpdateBalanceResult }
  | { Err: UpdateBalanceError };

export type RetrieveBtcResponse =
  | { Ok: RetrieveBtcOk }
  | { Err: RetrieveBtcError };
