import type { Principal } from "@dfinity/principal";
import type { Subaccount } from "../../candid/icrc1_ledger";
import type { QueryParams } from "./query.params";

/**
 * Params to get the balance of an SNS account.
 */
export interface BalanceParams extends QueryParams {
  owner: Principal;
  subaccount?: Subaccount;
}
