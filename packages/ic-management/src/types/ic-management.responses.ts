import type { ServiceResponse } from "@dfinity/utils";
import type { _SERVICE as IcManagementService } from "../../candid/ic-management";

export type CanisterStatusResponse = ServiceResponse<
  IcManagementService,
  "canister_status"
>;

export type CanisterInfoResponse = ServiceResponse<
  IcManagementService,
  "canister_info"
>;
