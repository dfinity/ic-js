import { ActorSubclass, HttpAgent } from "@dfinity/agent";
import { ServiceResponse } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type { _SERVICE as IcManagementService } from "../candid/ic-management";
import { ICManagementCanister } from "./ic-management.canister";
import {
  mappedMockCanisterSettings,
  mockCanisterId,
  mockCanisterSettings,
  mockPrincipal,
  mockPrincipalText,
} from "./ic-management.mock";
import {
  CanisterSettings,
  InstallCodeParams,
  InstallMode,
  toInstallMode,
} from "./types/ic-management.params";
import {
  CanisterInfoResponse,
  CanisterStatusResponse,
} from "./types/ic-management.responses";

describe("ICManagementCanister", () => {
  const mockAgent: HttpAgent = mock<HttpAgent>();

  const createICManagement = async (service: IcManagementService) => {
    return ICManagementCanister.create({
      agent: mockAgent,
      serviceOverride: service as ActorSubclass<IcManagementService>,
    });
  };

  describe("createCanister", () => {
    it("returns canister id when success", async () => {
      const response: ServiceResponse<IcManagementService, "create_canister"> =
        {
          canister_id: mockCanisterId,
        };
      const service = mock<IcManagementService>();
      service.create_canister.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.createCanister({
        settings: mockCanisterSettings,
      });

      expect(res).toEqual(response.canister_id);
      expect(service.create_canister).toHaveBeenCalledWith({
        settings: [mappedMockCanisterSettings],
        sender_canister_version: [],
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.create_canister.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.createCanister();

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("updateSettings", () => {
    it("calls update_settings with new settings", async () => {
      const service = mock<IcManagementService>();
      service.update_settings.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.updateSettings({
        canisterId: mockCanisterId,
        settings: mockCanisterSettings,
      });

      expect(service.update_settings).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
        settings: mappedMockCanisterSettings,
        sender_canister_version: [],
      });
    });

    it("works when passed partial settings", async () => {
      const partialSettings: CanisterSettings = {
        controllers: [mockPrincipalText],
      };
      const service = mock<IcManagementService>();
      service.update_settings.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.updateSettings({
        canisterId: mockCanisterId,
        settings: partialSettings,
      });
      expect(service.update_settings).toBeCalledWith({
        canister_id: mockCanisterId,
        sender_canister_version: [],
        settings: {
          compute_allocation: [],
          controllers: [[mockPrincipal]],
          freezing_threshold: [],
          memory_allocation: [],
        },
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.update_settings.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () =>
        icManagement.updateSettings({
          canisterId: mockCanisterId,
          settings: mockCanisterSettings,
        });

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("installCode", () => {
    it.each([InstallMode.Install, InstallMode.Reinstall, InstallMode.Upgrade])(
      "calls install_code with mode %s",
      async (mode) => {
        const params: InstallCodeParams = {
          wasmModule: new Uint8Array([1, 2, 3]),
          mode,
          arg: new Uint8Array(),
          canisterId: mockCanisterId,
        };
        const service = mock<IcManagementService>();
        service.install_code.mockResolvedValue(undefined);

        const icManagement = await createICManagement(service);

        await icManagement.installCode(params);

        expect(service.install_code).toHaveBeenCalledWith({
          wasm_module: params.wasmModule,
          mode: toInstallMode(params.mode),
          canister_id: params.canisterId,
          arg: params.arg,
          sender_canister_version: [],
        });
      },
    );

    it("throws Error", async () => {
      const params: InstallCodeParams = {
        wasmModule: new Uint8Array([1, 2, 3]),
        mode: InstallMode.Install,
        arg: new Uint8Array(),
        canisterId: mockCanisterId,
      };
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.install_code.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.installCode(params);

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("uninstallCode", () => {
    it("calls uninstall_code", async () => {
      const service = mock<IcManagementService>();
      service.uninstall_code.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.uninstallCode({ canisterId: mockCanisterId });

      expect(service.uninstall_code).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
        sender_canister_version: [],
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.uninstall_code.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () =>
        icManagement.uninstallCode({ canisterId: mockCanisterId });

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("startCanister", () => {
    it("calls start_canister", async () => {
      const service = mock<IcManagementService>();
      service.start_canister.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.startCanister(mockCanisterId);

      expect(service.start_canister).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.start_canister.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.startCanister(mockCanisterId);

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("stopCanister", () => {
    it("calls stop_canister", async () => {
      const service = mock<IcManagementService>();
      service.stop_canister.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.stopCanister(mockCanisterId);

      expect(service.stop_canister).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.stop_canister.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.stopCanister(mockCanisterId);

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("canisterStatus", () => {
    it("returns canister status when success", async () => {
      const settings = {
        freezing_threshold: BigInt(2),
        controllers: [mockPrincipal],
        memory_allocation: BigInt(4),
        compute_allocation: BigInt(10),
      };
      const response: CanisterStatusResponse = {
        status: { running: null },
        memory_size: BigInt(1000),
        cycles: BigInt(10_000),
        settings,
        idle_cycles_burned_per_day: BigInt(0),
        module_hash: [],
      };
      const service = mock<IcManagementService>();
      service.canister_status.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.canisterStatus(mockCanisterId);

      expect(res).toEqual(response);
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.canister_status.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.canisterStatus(mockCanisterId);

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("canisterInfo", () => {
    it("returns canister info when success", async () => {
      const response: CanisterInfoResponse = {
        controllers: [mockPrincipal],
        module_hash: [new Uint8Array([1, 2, 3])],
        recent_changes: [],
        total_num_changes: BigInt(0),
      };
      const service = mock<IcManagementService>();
      service.canister_info.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.canisterInfo({
        canisterId: mockCanisterId,
      });

      expect(res).toEqual(response);
      expect(service.canister_info).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
        num_requested_changes: [],
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.canister_info.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () =>
        icManagement.canisterInfo({
          canisterId: mockCanisterId,
        });

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("deleteCanister", () => {
    it("calls delete_canister", async () => {
      const service = mock<IcManagementService>();
      service.delete_canister.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.deleteCanister(mockCanisterId);

      expect(service.delete_canister).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.delete_canister.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.deleteCanister(mockCanisterId);

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("provisionalCreateCanisterWithCycles", () => {
    it("calls provisional_create_canister_with_cycles", async () => {
      const response: ServiceResponse<
        IcManagementService,
        "provisional_create_canister_with_cycles"
      > = {
        canister_id: mockCanisterId,
      };
      const service = mock<IcManagementService>();
      service.provisional_create_canister_with_cycles.mockResolvedValue(
        response,
      );

      const icManagement = await createICManagement(service);

      await icManagement.provisionalCreateCanisterWithCycles({
        amount: BigInt(100_000),
        canisterId: mockCanisterId,
        settings: mockCanisterSettings,
      });

      expect(
        service.provisional_create_canister_with_cycles,
      ).toHaveBeenCalledWith({
        amount: [BigInt(100_000)],
        settings: [mappedMockCanisterSettings],
        specified_id: [mockCanisterId],
        sender_canister_version: [],
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.delete_canister.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.provisionalCreateCanisterWithCycles();

      expect(call).rejects.toThrowError(Error);
    });
  });
});
