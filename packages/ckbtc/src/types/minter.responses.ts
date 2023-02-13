import type {
  UpdateBalanceError,
  UpdateBalanceResult,
} from "../../candid/minter";

export type UpdateBalanceResponse =
  | { Ok: UpdateBalanceResult }
  | { Err: UpdateBalanceError };
