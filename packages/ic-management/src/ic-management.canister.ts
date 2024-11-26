import type { CallConfig } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import {
  createServices,
  hexStringToUint8Array,
  nonNullish,
  toNullable,
} from "@dfinity/utils";
import type {
  _SERVICE as IcManagementService,
  chunk_hash,
  list_canister_snapshots_result,
  snapshot_id,
  take_canister_snapshot_result,
} from "../candid/ic-management";
import { idlFactory as certifiedIdlFactory } from "../candid/ic-management.certified.idl";
import { idlFactory } from "../candid/ic-management.idl";
import type { ICManagementCanisterOptions } from "./types/canister.options";
import {
  toCanisterSettings,
  type ClearChunkStoreParams,
  type CreateCanisterParams,
  type InstallChunkedCodeParams,
  type InstallCodeParams,
  type ProvisionalCreateCanisterWithCyclesParams,
  type SnapshotIdText,
  type StoredChunksParams,
  type UninstallCodeParams,
  type UpdateSettingsParams,
  type UploadChunkParams,
} from "./types/ic-management.params";
import type {
  CanisterStatusResponse,
  FetchCanisterLogsResponse,
} from "./types/ic-management.responses";
import { mapSnapshotId } from "./utils/ic-management.utils";

export class ICManagementCanister {
  private constructor(private readonly service: IcManagementService) {
    this.service = service;
  }

  public static create(options: ICManagementCanisterOptions) {
    /**
     * Original source getManagementCanister in agent-js.
     * Providing a transformer is required to determine the effective_canister_id when the request is an update call to the Management Canister (aaaaa-aa).
     * @link https://internetcomputer.org/docs/current/references/ic-interface-spec/#http-effective-canister-id
     */
    const transform = (
      _methodName: string,
      args: Record<string, unknown> &
        { canister_id?: unknown; target_canister_id?: unknown }[],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _callConfig: CallConfig,
    ): { effectiveCanisterId: Principal } => {
      const first = args[0];

      if (nonNullish(first) && typeof first === "object") {
        if (nonNullish(first.canister_id)) {
          return { effectiveCanisterId: Principal.from(first.canister_id) };
        }

        if (nonNullish(first.target_canister_id)) {
          return {
            effectiveCanisterId: Principal.from(first.target_canister_id),
          };
        }
      }

      return {
        effectiveCanisterId: Principal.fromHex(""),
      };
    };

    const { service } = createServices<IcManagementService>({
      options: {
        ...options,
        // Resolve to "aaaaa-aa" on mainnet
        canisterId: Principal.fromHex(""),
        callTransform: transform,
        queryTransform: transform,
      },
      idlFactory,
      certifiedIdlFactory,
    });

    return new ICManagementCanister(service);
  }

  /**
   * Create a new canister
   *
   * @param {Object} params
   * @param {CanisterSettings} params.settings
   * @param {BigInt} params.senderCanisterVersion
   * @returns {Promise<Principal>}
   */
  createCanister = async ({
    settings,
    senderCanisterVersion,
  }: CreateCanisterParams = {}): Promise<Principal> => {
    const { create_canister } = this.service;

    const { canister_id } = await create_canister({
      settings: toNullable(toCanisterSettings(settings)),
      sender_canister_version: toNullable(senderCanisterVersion),
    });

    return canister_id;
  };

  /**
   * Update canister settings
   *
   * @param {Object} params
   * @param {Principal} params.canisterId
   * @param {BigInt} params.senderCanisterVersion
   * @param {CanisterSettings} params.settings
   * @returns {Promise<void>}
   */
  updateSettings = ({
    canisterId,
    senderCanisterVersion,
    settings,
  }: UpdateSettingsParams): Promise<void> => {
    const { update_settings } = this.service;

    return update_settings({
      canister_id: canisterId,
      sender_canister_version: toNullable(senderCanisterVersion),
      settings: toCanisterSettings(settings),
    });
  };

  /**
   * Install code to a canister
   *
   * @param {Object} params
   * @param {canister_install_mode} params.mode
   * @param {Principal} params.canisterId
   * @param {Uint8Array} params.wasmModule
   * @param {Uint8Array} params.arg
   * @param {BigInt} params.senderCanisterVersion
   * @returns {Promise<void>}
   */
  installCode = ({
    canisterId,
    wasmModule,
    senderCanisterVersion,
    ...rest
  }: InstallCodeParams): Promise<void> => {
    const { install_code } = this.service;

    return install_code({
      ...rest,
      canister_id: canisterId,
      wasm_module: wasmModule,
      sender_canister_version: toNullable(senderCanisterVersion),
    });
  };

  /**
   * Upload chunks of Wasm modules that are too large to fit in a single message for installation purposes.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec/#ic-upload_chunk
   *
   * @param {UploadChunkParams} params
   * @param {canisterId} params.canisterId The canister in which the chunks will be stored.
   * @param {Uint8Array | number[]} params.chunk A chunk of Wasm module.
   * @returns {Promise<chunk_hash>} The hash of the stored chunk.
   */
  uploadChunk = ({
    canisterId,
    ...rest
  }: UploadChunkParams): Promise<chunk_hash> => {
    const { upload_chunk } = this.service;

    return upload_chunk({
      canister_id: canisterId,
      ...rest,
    });
  };

  /**
   * Clear the entire chunk storage of a canister.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec/#ic-clear_chunk_store
   *
   * @param {ClearChunkStoreParams} params
   * @param {canisterId} params.canisterId The canister in which the chunks are stored.
   */
  clearChunkStore = async ({
    canisterId,
  }: ClearChunkStoreParams): Promise<void> => {
    const { clear_chunk_store } = this.service;

    await clear_chunk_store({
      canister_id: canisterId,
    });
  };

  /**
   * List the hashes of chunks in the chunk storage of a canister.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec/#ic-stored_chunks
   *
   * @param {StoredChunksParams} params
   * @param {canisterId} params.canisterId The canister in which the chunks are stored.
   * @returns {Promise<chunk_hash[]>} The list of hash of the stored chunks.
   */
  storedChunks = async ({
    canisterId,
  }: StoredChunksParams): Promise<chunk_hash[]> => {
    const { stored_chunks } = this.service;

    return stored_chunks({
      canister_id: canisterId,
    });
  };

  /**
   * Installs code that had previously been uploaded in chunks.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec/#ic-install_chunked_code
   *
   * @param {InstallChunkedCodeParams} params
   * @param {canister_install_mode} params.mode Installation, re-installation or upgrade.
   * @param {Uint8Array} params.arg The arguments of the canister.
   * @param {Uint8Array | undefined} params.senderCanisterVersion The optional sender_canister_version parameter can contain the caller's canister version.
   * @param {Array<chunk_hash>} params.chunkHashesList The list of chunks of the Wasm module to install.
   * @param {Principal} params.targetCanisterId Specifies the canister where the code should be installed.
   * @param {Principal | undefined} params.storeCanisterId Specifies the canister in whose chunk storage the chunks are stored (this parameter defaults to target_canister if not specified).
   * @param {String} params.wasmModuleHash The Wasm module hash as hex string. Used to check that the SHA-256 hash of wasm_module is equal to the wasm_module_hash parameter and can calls install_code with parameters.
   * @returns {Promise<void>}
   */
  installChunkedCode = async ({
    senderCanisterVersion,
    chunkHashesList,
    targetCanisterId,
    storeCanisterId,
    wasmModuleHash,
    ...rest
  }: InstallChunkedCodeParams): Promise<void> => {
    const { install_chunked_code } = this.service;

    await install_chunked_code({
      ...rest,
      target_canister: targetCanisterId,
      store_canister: toNullable(storeCanisterId),
      sender_canister_version: toNullable(senderCanisterVersion),
      chunk_hashes_list: chunkHashesList,
      wasm_module_hash:
        typeof wasmModuleHash === "string"
          ? hexStringToUint8Array(wasmModuleHash)
          : wasmModuleHash,
    });
  };

  /**
   * Uninstall code from a canister
   *
   * @param {Object} params
   * @param {Principal} params.canisterId
   * @param {BigInt} params.senderCanisterVersion
   * @returns {Promise<void>}
   */
  uninstallCode = ({
    canisterId,
    senderCanisterVersion,
  }: UninstallCodeParams): Promise<void> => {
    const { uninstall_code } = this.service;

    return uninstall_code({
      canister_id: canisterId,
      sender_canister_version: toNullable(senderCanisterVersion),
    });
  };

  /**
   * Start a canister
   *
   * @param {Principal} canisterId
   * @returns {Promise<void>}
   */
  startCanister = (canisterId: Principal): Promise<void> => {
    const { start_canister } = this.service;

    return start_canister({ canister_id: canisterId });
  };

  /**
   * Stop a canister
   *
   * @param {Principal} canisterId
   * @returns {Promise<void>}
   */
  stopCanister = (canisterId: Principal): Promise<void> => {
    const { stop_canister } = this.service;
    return stop_canister({ canister_id: canisterId });
  };

  /**
   * Get canister details (memory size, status, etc.)
   *
   * @param {Principal} canisterId
   * @returns {Promise<CanisterStatusResponse>}
   */
  canisterStatus = (canisterId: Principal): Promise<CanisterStatusResponse> => {
    const { canister_status } = this.service;

    return canister_status({
      canister_id: canisterId,
    });
  };

  /**
   * Deletes a canister
   *
   * @param {Principal} canisterId
   * @returns {Promise<void>}
   */
  deleteCanister = (canisterId: Principal): Promise<void> => {
    const { delete_canister } = this.service;

    return delete_canister({ canister_id: canisterId });
  };

  /**
   * Creates a canister. Only available on development instances.
   *
   * @param {Object} params
   * @param {Principal} params.canisterId
   * @param {BigInt} params.amount
   * @param {CanisterSettings} params.settings
   * @returns {Promise<Principal>}
   */
  provisionalCreateCanisterWithCycles = async ({
    settings,
    amount,
    canisterId,
  }: ProvisionalCreateCanisterWithCyclesParams = {}): Promise<Principal> => {
    const { provisional_create_canister_with_cycles } = this.service;

    const { canister_id } = await provisional_create_canister_with_cycles({
      settings: toNullable(toCanisterSettings(settings)),
      amount: toNullable(amount),
      specified_id: toNullable(canisterId),
      sender_canister_version: [],
    });

    return canister_id;
  };

  /**
   * Given a canister ID as input, this method returns a vector of logs of that canister including its trap messages. The canister logs are not collected in canister methods running in non-replicated mode (NRQ, CQ, CRy, CRt, CC, and F modes, as defined in Overview of imports). The total size of all returned logs does not exceed 4KiB. If new logs are added resulting in exceeding the maximum total log size of 4KiB, the oldest logs will be removed. Logs persist across canister upgrades and they are deleted if the canister is reinstalled or uninstalled.
   *
   * @param {Principal} canisterId
   * @returns {Promise<FetchCanisterLogsResponse>}
   */
  fetchCanisterLogs = (
    canisterId: Principal,
  ): Promise<FetchCanisterLogsResponse> => {
    const { fetch_canister_logs } = this.service;

    return fetch_canister_logs({
      canister_id: canisterId,
    });
  };

  /**
   * This method takes a snapshot of the specified canister. A snapshot consists of the wasm memory, stable memory, certified variables, wasm chunk store and wasm binary.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-take_canister_snapshot
   *
   * @param {Object} params - Parameters for the snapshot operation.
   * @param {Principal} params.canisterId - The ID of the canister for which the snapshot will be taken.
   * @param {SnapshotIdText | snapshot_id} [params.snapshotId] - The ID of the snapshot to replace, if applicable.
   * Can be provided as a `string` or a `Uint8Array`.
   * If not provided, a new snapshot will be created.
   *
   * @returns {Promise<take_canister_snapshot_result>} A promise that resolves with the snapshot details,
   * including the snapshot ID, total size, and timestamp.
   *
   * @throws {Error} If the snapshot operation fails.
   */
  takeCanisterSnapshot = ({
    canisterId,
    snapshotId,
  }: {
    canisterId: Principal;
    snapshotId?: SnapshotIdText | snapshot_id;
  }): Promise<take_canister_snapshot_result> => {
    const { take_canister_snapshot } = this.service;

    return take_canister_snapshot({
      canister_id: canisterId,
      replace_snapshot: toNullable(
        nonNullish(snapshotId) ? mapSnapshotId(snapshotId) : undefined,
      ),
    });
  };

  /**
   * Lists the snapshots of a canister.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-list_canister_snapshots
   *
   * @param {Object} params - Parameters for the listing operation.
   * @param {Principal} params.canisterId - The ID of the canister for which snapshots will be listed.
   *
   * @returns {Promise<list_canister_snapshots_result>} A promise that resolves with the list of snapshots.
   *
   * @throws {Error} If the operation fails.
   */
  listCanisterSnapshots = async ({
    canisterId,
  }: {
    canisterId: Principal;
  }): Promise<list_canister_snapshots_result> => {
    const { list_canister_snapshots } = this.service;

    return list_canister_snapshots({
      canister_id: canisterId,
    });
  };

  /**
   * Loads a snapshot of a canister's state.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-load_canister_snapshot
   *
   * @param {Object} params - Parameters for the snapshot loading operation.
   * @param {Principal} params.canisterId - The ID of the canister for which the snapshot will be loaded.
   * @param {snapshot_id} params.snapshotId - The ID of the snapshot to load.
   * @param {BigInt} [params.senderCanisterVersion] - The optional sender canister version. If provided, its value must be equal to ic0.canister_version.
   *
   * @returns {Promise<void>} A promise that resolves when the snapshot is successfully loaded.
   *
   * @throws {Error} If the snapshot loading operation fails.
   */
  loadCanisterSnapshot = async ({
    canisterId,
    snapshotId,
    senderCanisterVersion,
  }: {
    canisterId: Principal;
    snapshotId: SnapshotIdText | snapshot_id;
    senderCanisterVersion?: bigint;
  }): Promise<void> => {
    const { load_canister_snapshot } = this.service;

    await load_canister_snapshot({
      canister_id: canisterId,
      snapshot_id: mapSnapshotId(snapshotId),
      sender_canister_version: toNullable(senderCanisterVersion),
    });
  };

  /**
   * Deletes a specific snapshot of a canister.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-delete_canister_snapshot
   *
   * @param {Object} params - Parameters for the deletion operation.
   * @param {Principal} params.canisterId - The ID of the canister for which the snapshot will be deleted.
   * @param {snapshot_id} params.snapshotId - The ID of the snapshot to delete.
   *
   * @returns {Promise<void>} A promise that resolves when the snapshot is successfully deleted.
   *
   * @throws {Error} If the deletion operation fails.
   */
  deleteCanisterSnapshot = async ({
    canisterId,
    snapshotId,
  }: {
    canisterId: Principal;
    snapshotId: SnapshotIdText | snapshot_id;
  }): Promise<void> => {
    const { delete_canister_snapshot } = this.service;

    await delete_canister_snapshot({
      canister_id: canisterId,
      snapshot_id: mapSnapshotId(snapshotId),
    });
  };
}
