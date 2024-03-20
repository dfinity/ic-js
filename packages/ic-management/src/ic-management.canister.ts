import type { CallConfig } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { createServices, toNullable } from "@dfinity/utils";
import { hexStringToUint8Array } from "@dfinity/utils/src";
import type {
  _SERVICE as IcManagementService,
  bitcoin_get_utxos_query_result,
  bitcoin_get_utxos_result,
  chunk_hash,
} from "../candid/ic-management";
import { idlFactory as certifiedIdlFactory } from "../candid/ic-management.certified.idl";
import { idlFactory } from "../candid/ic-management.idl";
import type { ICManagementCanisterOptions } from "./types/canister.options";
import {
  toBitcoinGetUtxosParams,
  toCanisterSettings,
  toInstallMode,
  type BitcoinGetUtxosParams,
  type BitcoinGetUtxosQueryParams,
  type CanisterInfoParams,
  type ClearChunkStoreParams,
  type CreateCanisterParams,
  type InstallChunkedCodeParams,
  type InstallCodeParams,
  type ProvisionalCreateCanisterWithCyclesParams,
  type StoredChunksParams,
  type UninstallCodeParams,
  type UpdateSettingsParams,
  type UploadChunkParams,
} from "./types/ic-management.params";
import type {
  CanisterInfoResponse,
  CanisterStatusResponse,
} from "./types/ic-management.responses";

export class ICManagementCanister {
  private constructor(private readonly service: IcManagementService) {
    this.service = service;
  }

  public static create(options: ICManagementCanisterOptions) {
    // Source getManagementCanister in agent-js.
    // Allow usage of the ICManagementCanister wrapper locally.
    const transform = (
      _methodName: string,
      args: unknown[],
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _callConfig: CallConfig,
    ) => {
      const first = args[0] as { canister_id: string };
      let effectiveCanisterId = Principal.fromHex("");
      if (first && typeof first === "object" && first.canister_id) {
        effectiveCanisterId = Principal.from(first.canister_id as unknown);
      }
      return { effectiveCanisterId };
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
    const { canister_id } = await this.service.create_canister({
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
  }: UpdateSettingsParams): Promise<void> =>
    this.service.update_settings({
      canister_id: canisterId,
      sender_canister_version: toNullable(senderCanisterVersion),
      settings: toCanisterSettings(settings),
    });

  /**
   * Install code to a canister
   *
   * @param {Object} params
   * @param {InstallMode} params.mode
   * @param {Principal} params.canisterId
   * @param {Uint8Array} params.wasmModule
   * @param {Uint8Array} params.arg
   * @param {BigInt} params.senderCanisterVersion
   * @returns {Promise<void>}
   */
  installCode = ({
    mode,
    canisterId,
    wasmModule,
    arg,
    senderCanisterVersion,
  }: InstallCodeParams): Promise<void> =>
    this.service.install_code({
      mode: toInstallMode(mode),
      canister_id: canisterId,
      wasm_module: wasmModule,
      arg,
      sender_canister_version: toNullable(senderCanisterVersion),
    });

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
   * @param {InstallMode} params.mode Installation, re-installation or upgrade.
   * @param {Uint8Array} params.arg The arguments of the canister.
   * @param {Uint8Array | undefined} params.senderCanisterVersion The optional sender_canister_version parameter can contain the caller's canister version.
   * @param {Array<chunk_hash>} params.chunkHashesList The list of chunks of the Wasm module to install.
   * @param {Principal} params.targetCanisterId Specifies the canister where the code should be installed.
   * @param {Principal | undefined} params.storeCanisterId Specifies the canister in whose chunk storage the chunks are stored (this parameter defaults to target_canister if not specified).
   * @param {String} params.wasmModuleHash The Wasm module hash as hex string. Used to check that the SHA-256 hash of wasm_module is equal to the wasm_module_hash parameter and can calls install_code with parameters.
   * @returns {Promise<void>}
   */
  installChunkedCode = async ({
    mode,
    arg,
    senderCanisterVersion,
    chunkHashesList,
    targetCanisterId,
    storeCanisterId,
    wasmModuleHash,
  }: InstallChunkedCodeParams): Promise<void> => {
    const { install_chunked_code } = this.service;

    await install_chunked_code({
      mode: toInstallMode(mode),
      target_canister: targetCanisterId,
      store_canister: toNullable(storeCanisterId),
      arg,
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
  }: UninstallCodeParams): Promise<void> =>
    this.service.uninstall_code({
      canister_id: canisterId,
      sender_canister_version: toNullable(senderCanisterVersion),
    });

  /**
   * Start a canister
   *
   * @param {Principal} canisterId
   * @returns {Promise<void>}
   */
  startCanister = (canisterId: Principal): Promise<void> =>
    this.service.start_canister({ canister_id: canisterId });

  /**
   * Stop a canister
   *
   * @param {Principal} canisterId
   * @returns {Promise<void>}
   */
  stopCanister = (canisterId: Principal): Promise<void> =>
    this.service.stop_canister({ canister_id: canisterId });

  /**
   * Get canister details (memory size, status, etc.)
   *
   * @param {Principal} canisterId
   * @returns {Promise<CanisterStatusResponse>}
   */
  canisterStatus = (canisterId: Principal): Promise<CanisterStatusResponse> =>
    this.service.canister_status({
      canister_id: canisterId,
    });

  /**
   * Get canister info (controllers, module hash, changes, etc.)
   *
   * @param {Object} params
   * @param {Principal} params.canisterId
   * @param {BigInt} params.numRequestChanges
   * @returns {Promise<CanisterInfoResponse>}
   */
  canisterInfo = ({
    canisterId,
    numRequestChanges,
  }: CanisterInfoParams): Promise<CanisterInfoResponse> =>
    this.service.canister_info({
      canister_id: canisterId,
      num_requested_changes: toNullable(numRequestChanges),
    });

  /**
   * Deletes a canister
   *
   * @param {Principal} canisterId
   * @returns {Promise<void>}
   */
  deleteCanister = (canisterId: Principal): Promise<void> =>
    this.service.delete_canister({ canister_id: canisterId });

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
    const { canister_id } =
      await this.service.provisional_create_canister_with_cycles({
        settings: toNullable(toCanisterSettings(settings)),
        amount: toNullable(amount),
        specified_id: toNullable(canisterId),
        sender_canister_version: [],
      });

    return canister_id;
  };

  /**
   * Given a `get_utxos_request`, which must specify a Bitcoin address and a Bitcoin network (`mainnet` or `testnet`), the function returns all unspent transaction outputs (UTXOs) associated with the provided address in the specified Bitcoin network based on the current view of the Bitcoin blockchain available to the Bitcoin component.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-bitcoin_get_utxos
   *
   * @param {Object} params
   * @param {BitcoinNetwork} params.network Tesnet or mainnet.
   * @param {Object} params.filter The optional filter parameter can be used to restrict the set of returned UTXOs, either providing a minimum number of confirmations or a page reference when pagination is used for addresses with many UTXOs.
   * @param {string} params.address A Bitcoin address.
   * @returns {Promise<bitcoin_get_utxos_result>} The UTXOs are returned sorted by block height in descending order.
   */
  bitcoinGetUtxos = (
    params: BitcoinGetUtxosParams,
  ): Promise<bitcoin_get_utxos_result> => {
    const { bitcoin_get_utxos } = this.service;
    return bitcoin_get_utxos(toBitcoinGetUtxosParams(params));
  };

  /**
   * This method is identical to `bitcoinGetUtxos`, but exposed as a query.
   *
   * @link https://internetcomputer.org/docs/current/references/ic-interface-spec#ic-bitcoin_get_utxos_query
   *
   * @param {Object} params
   * @param {BitcoinNetwork} params.network Tesnet or mainnet.
   * @param {Object} params.filter The optional filter parameter can be used to restrict the set of returned UTXOs, either providing a minimum number of confirmations or a page reference when pagination is used for addresses with many UTXOs.
   * @param {string} params.address A Bitcoin address.
   * @returns {Promise<bitcoin_get_utxos_result>} The UTXOs are returned sorted by block height in descending order.
   */
  bitcoinGetUtxosQuery = (
    params: BitcoinGetUtxosQueryParams,
  ): Promise<bitcoin_get_utxos_query_result> => {
    const { bitcoin_get_utxos_query } = this.service;
    return bitcoin_get_utxos_query(toBitcoinGetUtxosParams(params));
  };
}
