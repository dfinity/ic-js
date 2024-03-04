import { Principal } from "@dfinity/principal";
import { toNullable, type ServiceParam } from "@dfinity/utils";
import type {
  _SERVICE as IcManagementService,
  canister_settings,
} from "../../candid/ic-management";

export interface CanisterSettings {
  controllers?: string[];
  freezingThreshold?: bigint;
  memoryAllocation?: bigint;
  computeAllocation?: bigint;
  reservedCyclesLimit?: bigint;
}

export const toCanisterSettings = ({
  controllers,
  freezingThreshold,
  memoryAllocation,
  computeAllocation,
  reservedCyclesLimit,
}: CanisterSettings = {}): canister_settings => {
  return {
    controllers: toNullable(controllers?.map((c) => Principal.fromText(c))),
    freezing_threshold: toNullable(freezingThreshold),
    memory_allocation: toNullable(memoryAllocation),
    compute_allocation: toNullable(computeAllocation),
    reserved_cycles_limit: toNullable(reservedCyclesLimit),
  };
};

export interface CreateCanisterParams {
  settings?: CanisterSettings;
  senderCanisterVersion?: bigint;
}

export interface UpdateSettingsParams {
  canisterId: Principal;
  senderCanisterVersion?: bigint;
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
      // TODO: Support Upgrade mode skipping pre-upgrade
      // `upgrade` can also have `[{ skip_pre_upgrade: [] | [boolean] }]`
      return { upgrade: [] };
  }
};

export interface InstallCodeParams {
  mode: InstallMode;
  canisterId: Principal;
  wasmModule: Uint8Array;
  arg: Uint8Array;
  senderCanisterVersion?: bigint;
}

export interface UninstallCodeParams {
  canisterId: Principal;
  senderCanisterVersion?: bigint;
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
