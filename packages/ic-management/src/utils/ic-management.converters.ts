import type { Principal } from "@dfinity/principal";
import { nonNullish } from "@dfinity/utils";
import type {
  CanisterStatusDid as RawCanisterStatus,
  CanisterStatusDidResponse,
} from "../types/ic-management.did";
import type { CanisterDetails } from "../types/ic-management.response";
import { CanisterStatus } from "../types/ic-management.response";

const getCanisterStatus = (status: RawCanisterStatus): CanisterStatus => {
  if ("stopped" in status) {
    return CanisterStatus.Stopped;
  } else if ("stopping" in status) {
    return CanisterStatus.Stopping;
  } else if ("running" in status) {
    return CanisterStatus.Running;
  }
  throw new Error(status);
};

export const toCanisterDetails = ({
  response: { memory_size, status, cycles, settings, module_hash },
  canisterId,
}: {
  response: CanisterStatusDidResponse;
  canisterId: Principal;
}): CanisterDetails => ({
  id: canisterId,
  status: getCanisterStatus(status),
  memorySize: memory_size,
  cycles: cycles,
  settings: {
    controllers: settings.controllers.map((principal) => principal.toText()),
    freezingThreshold: settings.freezing_threshold,
    memoryAllocation: settings.memory_allocation,
    computeAllocation: settings.compute_allocation,
  },
  moduleHash:
    module_hash.length > 0 && nonNullish(module_hash[0])
      ? new Uint8Array(module_hash[0]).buffer
      : undefined,
});
