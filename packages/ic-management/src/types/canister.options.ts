import type { CanisterOptions } from "@dfinity/utils";
import type { _SERVICE as IcManagementService } from "../../candid/ic-management";

export type ICManagementCanisterOptions = Pick<
  CanisterOptions<IcManagementService>,
  "agent" | "serviceOverride"
>;
