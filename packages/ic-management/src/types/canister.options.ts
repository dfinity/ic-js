import type {CanisterOptions} from "@dfinity/utils/src";
import type {ManagementCanisterRecord as ManagementCanisterService} from "@dfinity/agent";

export type ICManagementCanisterOptions = Pick<
    CanisterOptions<ManagementCanisterService>,
    "agent" | "serviceOverride"
>;