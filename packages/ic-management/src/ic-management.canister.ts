import {
  getManagementCanister,
  type ManagementCanisterRecord,
} from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { toNullable } from "@dfinity/utils";
import type { ICManagementCanisterOptions } from "./types/canister.options";
import type { UpdateSettingsParams } from "./types/ic-management.params";
import type { CanisterStatusResponse } from "./types/ic-management.responses";

export class ICManagementCanister {
  private constructor(private readonly service: ManagementCanisterRecord) {
    this.service = service;
  }

  public static create(options: ICManagementCanisterOptions) {
    const agent = options.agent;

    const service = options.serviceOverride ?? getManagementCanister({ agent });

    return new ICManagementCanister(service);
  }

  /**
   * Returns canister details (memory size, status, etc.)
   *
   * @param {Principal} canisterId
   * @returns Promise<CanisterStatusResponse>
   */
  canisterStatus = (canisterId: Principal): Promise<CanisterStatusResponse> =>
    this.service.canister_status({
      canister_id: canisterId,
    });

  /**
   * Update canister settings
   *
   * @param {Object} params
   * @param {Principal} params.canisterId
   * @param {CanisterSettings} params.settings
   */
  updateSettings = async ({
    canisterId,
    settings: {
      controllers,
      freezingThreshold,
      memoryAllocation,
      computeAllocation,
    },
  }: UpdateSettingsParams): Promise<void> =>
    this.service.update_settings({
      canister_id: canisterId,
      settings: {
        controllers: toNullable(controllers?.map((c) => Principal.fromText(c))),
        freezing_threshold: toNullable(freezingThreshold),
        memory_allocation: toNullable(memoryAllocation),
        compute_allocation: toNullable(computeAllocation),
      },
    });
}
