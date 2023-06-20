import {
  getManagementCanister,
  type ManagementCanisterRecord,
} from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { toNullable } from "@dfinity/utils";
import { mapError } from "./errors/ic-management.errors";
import type { ICManagementCanisterOptions } from "./types/canister.options";
import type { CanisterStatusDidResponse } from "./types/ic-management.did";
import type {
  CanisterDetails,
  CanisterSettings,
} from "./types/ic-management.response";
import { toCanisterDetails } from "./utils/ic-management.converters";

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
   * @returns Promise<CanisterDetails>
   * @throws UserNotTheController, Error
   */
  public getCanisterDetails = async (
    canisterId: Principal
  ): Promise<CanisterDetails> => {
    try {
      const rawResponse: CanisterStatusDidResponse =
        await this.service.canister_status({
          canister_id: canisterId,
        });
      return toCanisterDetails({
        response: rawResponse,
        canisterId,
      });
    } catch (error: unknown) {
      throw mapError(error);
    }
  };

  /**
   * Update canister settings
   *
   * @param {Object} params
   * @param {Principal} params.canisterId
   * @param {CanisterSettings} params.settings
   * @returns Promise<void>
   * @throws UserNotTheController, Error
   */
  public updateSettings = async ({
    canisterId,
    settings: {
      controllers,
      freezingThreshold,
      memoryAllocation,
      computeAllocation,
    },
  }: {
    canisterId: Principal;
    settings: Partial<CanisterSettings>;
  }): Promise<void> => {
    try {
      // Empty array does not change the value in the settings.
      await this.service.update_settings({
        canister_id: canisterId,
        settings: {
          controllers: toNullable(
            controllers?.map((c) => Principal.fromText(c))
          ),
          freezing_threshold: toNullable(freezingThreshold),
          memory_allocation: toNullable(memoryAllocation),
          compute_allocation: toNullable(computeAllocation),
        },
      });
    } catch (error: unknown) {
      throw mapError(error);
    }
  };
}
