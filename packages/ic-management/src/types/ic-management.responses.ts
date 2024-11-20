import type { ServiceResponse } from "@dfinity/utils";
import type { _SERVICE as IcManagementService } from "../../candid/ic-management";

export type CanisterStatusResponse = ServiceResponse<
  IcManagementService,
  "canister_status"
>;

export type FetchCanisterLogsResponse = ServiceResponse<
  IcManagementService,
  "fetch_canister_logs"
>;
