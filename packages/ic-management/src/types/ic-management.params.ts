import { Principal } from "@dfinity/principal";
import { toNullable, type ServiceParam } from "@dfinity/utils";
import type {
  canister_settings,
  _SERVICE as IcManagementService,
} from "../../candid/ic-management";

export interface CanisterSettings {
  controllers?: string[];
  freezingThreshold?: bigint;
  memoryAllocation?: bigint;
  computeAllocation?: bigint;
}

export const toCanisterSettings = ({
  controllers,
  freezingThreshold,
  memoryAllocation,
  computeAllocation,
}: CanisterSettings = {}): canister_settings => {
  return {
    controllers: toNullable(controllers?.map((c) => Principal.fromText(c))),
    freezing_threshold: toNullable(freezingThreshold),
    memory_allocation: toNullable(memoryAllocation),
    compute_allocation: toNullable(computeAllocation),
  };
};

export interface CreateCanisterParams {
  settings?: CanisterSettings;
  senderCanisterVerion?: bigint;
}

export interface UpdateSettingsParams {
  canisterId: Principal;
  senderCanisterVerion?: bigint;
  settings: CanisterSettings;
}

export enum InstallMode {
  Install,
  Reinstall,
  Upgrade,
}

export type InstallModeParam = ServiceParam<
  IcManagementService,
  "install_code"
>[0]["mode"];

export const toInstallMode = (installMode: InstallMode): InstallModeParam => {
  switch (installMode) {
    case InstallMode.Install:
      return { install: null };
    case InstallMode.Reinstall:
      return { reinstall: null };
    case InstallMode.Upgrade:
      return { upgrade: null };
  }
};

export interface InstallCodeParams {
  mode: InstallMode;
  canisterId: Principal;
  wasmModule: Uint8Array;
  arg: Uint8Array;
  senderCanisterVerion?: bigint;
}

export interface UninstallCodeParams {
  canisterId: Principal;
  senderCanisterVerion?: bigint;
}

export interface CanisterInfoParams {
  canisterId: Principal;
  numRequestChanges?: bigint;
}

export interface ProvisionalCreateCanisterWithCyclesParams {
  amount?: bigint;
  settings?: CanisterSettings;
  canisterId?: Principal;
}

export interface ProvisionalTopUpCanisterParams {
  canisterId: Principal;
  amount: bigint;
}
