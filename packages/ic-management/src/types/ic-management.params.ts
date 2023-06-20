import type { Principal } from "@dfinity/principal";
import type { QueryParams } from "@dfinity/utils/src";

export interface CanisterSettings {
  controllers?: string[];
  freezingThreshold?: bigint;
  memoryAllocation?: bigint;
  computeAllocation?: bigint;
}

export type UpdateSettingsParams = {
  canisterId: Principal;
  settings: CanisterSettings;
} & Omit<QueryParams, "certified">;
