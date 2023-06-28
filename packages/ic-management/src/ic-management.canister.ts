import { Principal } from "@dfinity/principal";
import { createServices, toNullable } from "@dfinity/utils";
import type { _SERVICE as IcManagementService } from "../candid/ic-management";
import { idlFactory as certifiedIdlFactory } from "../candid/ic-management.certified.idl";
import { idlFactory } from "../candid/ic-management.idl";
import type { ICManagementCanisterOptions } from "./types/canister.options";
import type {
  CanisterInfoParams,
  CreateCanisterParams,
  UninstallCodeParams,
} from "./types/ic-management.params";
import {
  toCanisterSettings,
  toInstallMode,
  type InstallCodeParams,
  type UpdateSettingsParams,
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
    const { service } = createServices<IcManagementService>({
      options: {
        ...options,
        canisterId: Principal.fromText("aaaaa-aa"),
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
    senderCanisterVerion,
  }: CreateCanisterParams = {}): Promise<Principal> => {
    const { canister_id } = await this.service.create_canister({
      settings: toNullable(toCanisterSettings(settings)),
      sender_canister_version: toNullable(senderCanisterVerion),
    });

    return canister_id;
  };

  /**
   * Update canister settings
   *
   * @param {Object} params
   * @param {Principal} params.canisterId
   * @param {BigInt} params.sender_canister_version
   * @param {CanisterSettings} params.settings
   * @returns {Promise<void>}
   */
  updateSettings = ({
    canisterId,
    senderCanisterVerion,
    settings,
  }: UpdateSettingsParams): Promise<void> =>
    this.service.update_settings({
      canister_id: canisterId,
      sender_canister_version: toNullable(senderCanisterVerion),
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
    senderCanisterVerion,
  }: InstallCodeParams): Promise<void> =>
    this.service.install_code({
      mode: toInstallMode(mode),
      canister_id: canisterId,
      wasm_module: wasmModule,
      arg,
      sender_canister_version: toNullable(senderCanisterVerion),
    });

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
    senderCanisterVerion,
  }: UninstallCodeParams): Promise<void> =>
    this.service.uninstall_code({
      canister_id: canisterId,
      sender_canister_version: toNullable(senderCanisterVerion),
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
}
