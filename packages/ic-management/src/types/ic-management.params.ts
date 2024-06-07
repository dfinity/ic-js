import { Principal } from "@dfinity/principal";
import { isNullish, toNullable } from "@dfinity/utils";
import type {
  canister_install_mode,
  canister_settings,
  chunk_hash,
  log_visibility,
  upload_chunk_args,
} from "../../candid/ic-management";

export enum LogVisibility {
  Controllers,
  Public,
}

export interface CanisterSettings {
  controllers?: string[];
  freezingThreshold?: bigint;
  memoryAllocation?: bigint;
  computeAllocation?: bigint;
  reservedCyclesLimit?: bigint;
  logVisibility?: LogVisibility;
}

export class UnsupportedLogVisibility extends Error {}

export const toCanisterSettings = ({
  controllers,
  freezingThreshold,
  memoryAllocation,
  computeAllocation,
  reservedCyclesLimit,
  logVisibility,
}: CanisterSettings = {}): canister_settings => {
  const toLogVisibility = (): log_visibility => {
    switch (logVisibility) {
      case LogVisibility.Controllers:
        return { controllers: null };
      case LogVisibility.Public:
        return { public: null };
      default:
        throw new UnsupportedLogVisibility();
    }
  };

  return {
    controllers: toNullable(controllers?.map((c) => Principal.fromText(c))),
    freezing_threshold: toNullable(freezingThreshold),
    memory_allocation: toNullable(memoryAllocation),
    compute_allocation: toNullable(computeAllocation),
    reserved_cycles_limit: toNullable(reservedCyclesLimit),
    log_visibility: isNullish(logVisibility) ? [] : [toLogVisibility()],
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

export const toInstallMode = (
  installMode: InstallMode,
): canister_install_mode => {
  switch (installMode) {
    case InstallMode.Install:
      return { install: null };
    case InstallMode.Reinstall:
      return { reinstall: null };
    case InstallMode.Upgrade:
      // TODO: Support Upgrade mode skipping pre-upgrade and wasm_memory_persistence
      // `upgrade` can also have `[{ skip_pre_upgrade: [] | [boolean] }]`
      // or wasm_memory_persistence : opt variant {  keep;  replace;  };
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

export interface UploadChunkParams extends Pick<upload_chunk_args, "chunk"> {
  canisterId: Principal;
}

export interface ClearChunkStoreParams {
  canisterId: Principal;
}

export interface StoredChunksParams {
  canisterId: Principal;
}

export interface InstallChunkedCodeParams
  extends Omit<InstallCodeParams, "canisterId" | "wasmModule"> {
  chunkHashesList: Array<chunk_hash>;
  targetCanisterId: Principal;
  storeCanisterId?: Principal;
  wasmModuleHash: string | Uint8Array | number[];
}

export interface UninstallCodeParams {
  canisterId: Principal;
  senderCanisterVersion?: bigint;
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

export type EcdsaCurve = { secp256k1: null };

export type KeyId = {
  name: string;
  curve: EcdsaCurve;
};

export interface EcdsaPublicKeyParams {
  keyId: KeyId;
  canisterId?: Principal;
  derivationPath: Array<Uint8Array | number[]>;
}
