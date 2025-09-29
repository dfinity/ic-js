import { Principal } from "@dfinity/principal";
import { fromNullable, isNullish, toNullable } from "@dfinity/utils";
import type {
  canister_install_mode,
  canister_settings,
  chunk_hash,
  log_visibility,
  read_canister_snapshot_data_args,
  read_canister_snapshot_metadata_response,
  snapshot_id, upload_canister_snapshot_data_args,
  upload_canister_snapshot_metadata_args,
  upload_chunk_args
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
  wasmMemoryLimit?: bigint;
  wasmMemoryThreshold?: bigint;
}

export class UnsupportedLogVisibility extends Error {}

export const toCanisterSettings = ({
  controllers,
  freezingThreshold,
  memoryAllocation,
  computeAllocation,
  reservedCyclesLimit,
  logVisibility,
  wasmMemoryLimit,
  wasmMemoryThreshold,
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
    wasm_memory_limit: toNullable(wasmMemoryLimit),
    wasm_memory_threshold: toNullable(wasmMemoryThreshold),
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

export interface InstallCodeParams {
  mode: canister_install_mode;
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

export type SnapshotIdText = string;

export interface SnapshotParams {
  canisterId: Principal;
  snapshotId: SnapshotIdText | snapshot_id;
}

export type CanisterSnapshotMetadataKind =
  | { wasmModule: { size: bigint; offset: bigint } }
  | { wasmMemory: { size: bigint; offset: bigint } }
  | { stableMemory: { size: bigint; offset: bigint } }
  | { wasmChunk: { hash: Uint8Array | number[] } };

export interface ReadCanisterSnapshotMetadataParams extends SnapshotParams {
  kind: CanisterSnapshotMetadataKind;
}

export interface CanisterSnapshotMetadata {
  globals: (
    | { f32: number }
    | { f64: number }
    | { i32: number }
    | { i64: bigint }
    | { v128: bigint }
  )[];
  canisterVersion: bigint;
  source: { metadataUpload: unknown } | { takenFromCanister: unknown };
  certifiedData: Uint8Array | number[];
  globalTimer?: { active: bigint } | { inactive: null };
  onLowWasmMemoryHookStatus?:
    | { conditionNotSatisfied: null }
    | { executed: null }
    | { ready: null };
  wasmModuleSize: bigint;
  stableMemorySize: bigint;
  wasmChunkStore: Array<{ hash: Uint8Array | number[] }>;
  takenAtTimestamp: bigint;
  wasmMemorySize: bigint;
}

export const fromReadCanisterSnapshotMetadata = ({
  globals,
  canister_version: canisterVersion,
  source,
  certified_data: certifiedData,
  global_timer,
  on_low_wasm_memory_hook_status,
  wasm_module_size: wasmModuleSize,
  stable_memory_size: stableMemorySize,
  wasm_chunk_store: wasmChunkStore,
  taken_at_timestamp: takenAtTimestamp,
  wasm_memory_size: wasmMemorySize,
}: read_canister_snapshot_metadata_response): CanisterSnapshotMetadata => {
  const mapSource = (): CanisterSnapshotMetadata["source"] => {
    if ("metadata_upload" in source) {
      return { metadataUpload: source.metadata_upload };
    }

    if ("taken_from_canister" in source) {
      return { takenFromCanister: source.taken_from_canister };
    }

    throw new Error("Unsupported snapshot metadata source");
  };

  const mapOnLowWasmMemoryHookStatus =
    (): CanisterSnapshotMetadata["onLowWasmMemoryHookStatus"] => {
      const value = fromNullable(on_low_wasm_memory_hook_status);

      if (isNullish(value)) {
        return undefined;
      }

      if ("condition_not_satisfied" in value) {
        return { conditionNotSatisfied: value.condition_not_satisfied };
      }

      if ("executed" in value) {
        return { executed: value.executed };
      }

      if ("ready" in value) {
        return { ready: value.ready };
      }

      throw new Error(
        "Unsupported snapshot metadata on_low_wasm_memory_hook_status",
      );
    };

  return {
    globals,
    canisterVersion,
    source: mapSource(),
    certifiedData,
    globalTimer: fromNullable(global_timer),
    onLowWasmMemoryHookStatus: mapOnLowWasmMemoryHookStatus(),
    wasmModuleSize,
    stableMemorySize,
    wasmChunkStore,
    takenAtTimestamp,
    wasmMemorySize,
  };
};

export const toCanisterSnapshotMetadataKind = (
  kind: CanisterSnapshotMetadataKind,
): read_canister_snapshot_data_args["kind"] => {
  if ("wasmModule" in kind) {
    return { wasm_module: kind.wasmModule };
  }

  if ("wasmMemory" in kind) {
    return { wasm_memory: kind.wasmMemory };
  }

  if ("stableMemory" in kind) {
    return { stable_memory: kind.stableMemory };
  }

  if ("wasmChunk" in kind) {
    return { wasm_chunk: kind.wasmChunk };
  }

  throw new Error("Unsupported snapshot metadata kind");
};

export type UploadCanisterSnapshotMetadataParam = Pick<
  CanisterSnapshotMetadata,
  | "globals"
  | "certifiedData"
  | "globalTimer"
  | "onLowWasmMemoryHookStatus"
  | "wasmModuleSize"
  | "stableMemorySize"
  | "wasmMemorySize"
>;

export interface UploadCanisterSnapshotMetadataParams
  extends Pick<SnapshotParams, "canisterId"> {
  metadata: UploadCanisterSnapshotMetadataParam;
  replaceSnapshotId?: SnapshotIdText | snapshot_id;
}

export const toUploadCanisterSnapshotMetadata = ({
  globals,
  certifiedData: certified_data,
  globalTimer,
  onLowWasmMemoryHookStatus,
  wasmModuleSize: wasm_module_size,
  stableMemorySize: stable_memory_size,
  wasmMemorySize: wasm_memory_size,
}: UploadCanisterSnapshotMetadataParam): Omit<
  upload_canister_snapshot_metadata_args,
  "canister_id" | "replace_snapshot"
> => {
  const mapOnLowWasmMemoryHookStatus =
    (): upload_canister_snapshot_metadata_args["on_low_wasm_memory_hook_status"] => {
      if (isNullish(onLowWasmMemoryHookStatus)) {
        return toNullable();
      }

      if ("conditionNotSatisfied" in onLowWasmMemoryHookStatus) {
        return toNullable({
          condition_not_satisfied:
            onLowWasmMemoryHookStatus.conditionNotSatisfied,
        });
      }

      return toNullable(onLowWasmMemoryHookStatus);
    };

  return {
    globals,
    certified_data,
    global_timer: toNullable(globalTimer),
    on_low_wasm_memory_hook_status: mapOnLowWasmMemoryHookStatus(),
    wasm_module_size,
    stable_memory_size,
    wasm_memory_size,
  };
};

export type UploadCanisterSnapshotDataKind =
  | { wasmModule: { offset: bigint } }
  | { wasmMemory: { offset: bigint } }
  | { stableMemory: { offset: bigint } }
  | { wasmChunk: null };

export interface ReadCanisterSnapshotMetadataParams extends SnapshotParams {
  kind: CanisterSnapshotMetadataKind;
}

export interface UploadCanisterSnapshotDataParams extends SnapshotParams {
  chunk: Uint8Array | number[];
  kind: UploadCanisterSnapshotDataKind;
}

export const toUploadCanisterSnapshotDataKind = (
  kind: UploadCanisterSnapshotDataKind,
): upload_canister_snapshot_data_args["kind"] => {
  if ("wasmModule" in kind) {
    return { wasm_module: kind.wasmModule };
  }

  if ("wasmMemory" in kind) {
    return { wasm_memory: kind.wasmMemory };
  }

  if ("stableMemory" in kind) {
    return { stable_memory: kind.stableMemory };
  }

  if ("wasmChunk" in kind) {
    return { wasm_chunk: null };
  }

  throw new Error("Unsupported snapshot data kind");
};