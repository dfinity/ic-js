import type { ManagementCanisterRecord as ManagementCanisterService } from "@dfinity/agent";
import type { CanisterOptions } from "@dfinity/utils/src";

export type ICManagementCanisterOptions = Pick<
  CanisterOptions<ManagementCanisterService>,
  "agent" | "serviceOverride"
>;
