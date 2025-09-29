import type { Principal } from "@dfinity/principal";
import {
  fromNullable,
  isNullish,
  nonNullish,
  toNullable,
} from "@dfinity/utils";
import type {
  delete_canister_snapshot_args,
  load_canister_snapshot_args,
  read_canister_snapshot_data_args,
  read_canister_snapshot_metadata_response,
  snapshot_id,
  take_canister_snapshot_args,
  upload_canister_snapshot_data_args,
  upload_canister_snapshot_metadata_args,
} from "../../candid/ic-management";
import { mapSnapshotId } from "../utils/ic-management.utils";

export type SnapshotIdText = string;

export interface OptionSnapshotParams {
  canisterId: Principal;
  snapshotId?: SnapshotIdText | snapshot_id;
}

export type SnapshotParams = Required<OptionSnapshotParams>;

export const toSnapshotArgs = ({
  canisterId: canister_id,
  snapshotId,
}: SnapshotParams):
  | Pick<load_canister_snapshot_args, "canister_id" | "snapshot_id">
  | delete_canister_snapshot_args => ({
  canister_id,
  snapshot_id: mapSnapshotId(snapshotId),
});

export const toReplaceSnapshotArgs = ({
  canisterId: canister_id,
  snapshotId,
}: OptionSnapshotParams): take_canister_snapshot_args => ({
  canister_id,
  replace_snapshot: toNullable(
    nonNullish(snapshotId) ? mapSnapshotId(snapshotId) : undefined,
  ),
});

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
  snapshotId?: SnapshotIdText | snapshot_id;
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
