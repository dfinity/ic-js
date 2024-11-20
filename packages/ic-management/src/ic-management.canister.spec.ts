import { ActorSubclass, HttpAgent } from "@dfinity/agent";
import { ServiceResponse, toNullable } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  _SERVICE as IcManagementService,
  chunk_hash,
  take_canister_snapshot_result,
} from "../candid/ic-management";
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
  LogVisibility,
  UnsupportedLogVisibility,
  toInstallMode,
  type ClearChunkStoreParams,
  type InstallChunkedCodeParams,
  type StoredChunksParams,
  type UploadChunkParams,
} from "./types/ic-management.params";
import {
  CanisterStatusResponse,
  type FetchCanisterLogsResponse,
} from "./types/ic-management.responses";
import { decodeSnapshotId } from "./utils/ic-management.utils";

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

      await expect(call).rejects.toThrow(error);
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
          reserved_cycles_limit: [],
          log_visibility: [],
          wasm_memory_limit: [],
        },
      });
    });

    it("calls update_settings with mapped log_visibility controllers", async () => {
      const service = mock<IcManagementService>();
      service.update_settings.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.updateSettings({
        canisterId: mockCanisterId,
        settings: {
          ...mockCanisterSettings,
          logVisibility: LogVisibility.Controllers,
        },
      });

      expect(service.update_settings).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
        settings: {
          ...mappedMockCanisterSettings,
          log_visibility: [{ controllers: null }],
        },
        sender_canister_version: [],
      });
    });

    it("calls update_settings with mapped log_visibility public", async () => {
      const service = mock<IcManagementService>();
      service.update_settings.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.updateSettings({
        canisterId: mockCanisterId,
        settings: {
          ...mockCanisterSettings,
          logVisibility: LogVisibility.Public,
        },
      });

      expect(service.update_settings).toHaveBeenCalledWith({
        canister_id: mockCanisterId,
        settings: {
          ...mappedMockCanisterSettings,
          log_visibility: [{ public: null }],
        },
        sender_canister_version: [],
      });
    });

    it("throws Error for unsupported log visibility", async () => {
      const service = mock<IcManagementService>();
      service.update_settings.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      const call = () =>
        icManagement.updateSettings({
          canisterId: mockCanisterId,
          settings: {
            ...mockCanisterSettings,
            logVisibility: 2 as unknown as LogVisibility,
          },
        });

      expect(call).toThrow(UnsupportedLogVisibility);
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

      await expect(call).rejects.toThrow(error);
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

      await expect(call).rejects.toThrow(error);
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

      await expect(call).rejects.toThrow(error);
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

      await expect(call).rejects.toThrow(error);
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

      await expect(call).rejects.toThrow(error);
    });
  });

  describe("canisterStatus", () => {
    it("returns canister status when success", async () => {
      const settings = {
        freezing_threshold: BigInt(2),
        controllers: [mockPrincipal],
        memory_allocation: BigInt(4),
        compute_allocation: BigInt(10),
        reserved_cycles_limit: BigInt(11),
        log_visibility: { controllers: null },
        wasm_memory_limit: BigInt(500_00),
      };
      const response: CanisterStatusResponse = {
        status: { running: null },
        memory_size: BigInt(1000),
        cycles: BigInt(10_000),
        settings,
        idle_cycles_burned_per_day: BigInt(0),
        module_hash: [],
        reserved_cycles: BigInt(11),
        query_stats: {
          num_calls_total: 100n,
          num_instructions_total: 100_000n,
          response_payload_bytes_total: 200n,
          request_payload_bytes_total: 300n,
        },
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

      await expect(call).rejects.toThrow(error);
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

      await expect(call).rejects.toThrow(error);
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
      service.provisional_create_canister_with_cycles.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.provisionalCreateCanisterWithCycles();

      await expect(call).rejects.toThrow(error);
    });
  });

  describe("uploadChunk", () => {
    const params: UploadChunkParams = {
      canisterId: mockCanisterId,
      chunk: [4, 5, 6],
    };

    it("returns hash when success", async () => {
      const response: chunk_hash = {
        hash: [1, 2, 3, 4],
      };
      const service = mock<IcManagementService>();
      service.upload_chunk.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.uploadChunk(params);

      expect(res).toEqual(response);
      expect(service.upload_chunk).toHaveBeenCalledWith({
        canister_id: params.canisterId,
        chunk: params.chunk,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.upload_chunk.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.uploadChunk(params);

      await expect(call).rejects.toThrow(error);
    });
  });

  describe("clearChunkStore", () => {
    const params: ClearChunkStoreParams = {
      canisterId: mockCanisterId,
    };

    it("returns void when success", async () => {
      const service = mock<IcManagementService>();
      service.clear_chunk_store.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      const res = await icManagement.clearChunkStore(params);

      expect(service.clear_chunk_store).toHaveBeenCalledWith({
        canister_id: params.canisterId,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.clear_chunk_store.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.clearChunkStore(params);

      await expect(call).rejects.toThrow(error);
    });
  });

  describe("storedChunks", () => {
    const params: StoredChunksParams = {
      canisterId: mockCanisterId,
    };

    it("returns list of hash when success", async () => {
      const response: chunk_hash[] = [
        { hash: [1, 2, 3, 4] },
        { hash: [5, 6, 7] },
        { hash: [8, 9, 10] },
      ];

      const service = mock<IcManagementService>();
      service.stored_chunks.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.storedChunks(params);

      expect(res).toEqual(response);
      expect(service.stored_chunks).toHaveBeenCalledWith({
        canister_id: params.canisterId,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.stored_chunks.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.storedChunks(params);

      await expect(call).rejects.toThrow(error);
    });
  });

  describe("installChunkedCode", () => {
    const sha256HashHex =
      "1327d331fb07bfbc295bd8fd9dd6addd0e3260107f02505bd4972b91e0af6d75";
    const sha256HashUint8Array = Uint8Array.from([
      19, 39, 211, 49, 251, 7, 191, 188, 41, 91, 216, 253, 157, 214, 173, 221,
      14, 50, 96, 16, 127, 2, 80, 91, 212, 151, 43, 145, 224, 175, 109, 117,
    ]);

    const installParams: Omit<
      InstallChunkedCodeParams,
      "mode" | "wasmModuleHash"
    > = {
      arg: new Uint8Array(),
      targetCanisterId: mockCanisterId,
      chunkHashesList: [{ hash: [1, 2, 3] }, { hash: [4, 5, 6] }],
    };

    it.each([InstallMode.Install, InstallMode.Reinstall, InstallMode.Upgrade])(
      "calls install_chunked_code with mode %s",
      async (mode) => {
        const params: InstallChunkedCodeParams = {
          ...installParams,
          mode,
          wasmModuleHash: sha256HashUint8Array,
        };
        const service = mock<IcManagementService>();
        service.install_chunked_code.mockResolvedValue(undefined);

        const icManagement = await createICManagement(service);

        await icManagement.installChunkedCode(params);

        expect(service.install_chunked_code).toHaveBeenCalledWith({
          wasm_module_hash: params.wasmModuleHash,
          mode: toInstallMode(params.mode),
          target_canister: params.targetCanisterId,
          store_canister: toNullable(),
          arg: params.arg,
          sender_canister_version: [],
          chunk_hashes_list: params.chunkHashesList,
        });
      },
    );

    it("should accept sha256 as hex string parameter", async () => {
      const params: InstallChunkedCodeParams = {
        ...installParams,
        mode: InstallMode.Upgrade,
        wasmModuleHash: sha256HashHex,
      };
      const service = mock<IcManagementService>();
      service.install_chunked_code.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.installChunkedCode(params);

      expect(service.install_chunked_code).toHaveBeenCalledWith({
        wasm_module_hash: sha256HashUint8Array,
        mode: toInstallMode(params.mode),
        target_canister: params.targetCanisterId,
        store_canister: toNullable(),
        arg: params.arg,
        sender_canister_version: [],
        chunk_hashes_list: params.chunkHashesList,
      });
    });

    it("should optionally target a particular store canister", async () => {
      const params: InstallChunkedCodeParams = {
        ...installParams,
        mode: InstallMode.Upgrade,
        wasmModuleHash: sha256HashHex,
        storeCanisterId: mockCanisterId,
      };
      const service = mock<IcManagementService>();
      service.install_chunked_code.mockResolvedValue(undefined);

      const icManagement = await createICManagement(service);

      await icManagement.installChunkedCode(params);

      expect(service.install_chunked_code).toHaveBeenCalledWith({
        wasm_module_hash: sha256HashUint8Array,
        mode: toInstallMode(params.mode),
        target_canister: params.targetCanisterId,
        store_canister: toNullable(mockCanisterId),
        arg: params.arg,
        sender_canister_version: [],
        chunk_hashes_list: params.chunkHashesList,
      });
    });

    it("throws Error", async () => {
      const params: InstallChunkedCodeParams = {
        ...installParams,
        mode: InstallMode.Install,
        wasmModuleHash: sha256HashUint8Array,
      };
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.install_chunked_code.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.installChunkedCode(params);

      await expect(call).rejects.toThrow(error);
    });
  });

  describe("fetchCanisterLogs", () => {
    it("returns canister logs when success", async () => {
      const settings = {
        freezing_threshold: BigInt(2),
        controllers: [mockPrincipal],
        memory_allocation: BigInt(4),
        compute_allocation: BigInt(10),
        reserved_cycles_limit: BigInt(11),
        log_visibility: { controllers: null },
        wasm_memory_limit: BigInt(500_00),
      };
      const response: FetchCanisterLogsResponse = {
        canister_log_records: [
          {
            idx: 123n,
            content: [1, 2, 3],
            timestamp_nanos: 12345n,
          },
          {
            idx: 456n,
            content: [9, 8, 7],
            timestamp_nanos: 12346n,
          },
        ],
      };
      const service = mock<IcManagementService>();
      service.fetch_canister_logs.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.fetchCanisterLogs(mockCanisterId);

      expect(res).toEqual(response);
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.fetch_canister_logs.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.fetchCanisterLogs(mockCanisterId);

      await expect(call).rejects.toThrow(error);
    });
  });

  describe("takeCanisterSnapshot", () => {
    const mockResponse: take_canister_snapshot_result = {
      id: Uint8Array.from([1, 2, 3, 4]),
      total_size: BigInt(5000),
      taken_at_timestamp: BigInt(1680000000000),
    };

    it("should call take_canister_snapshot without snapshotId", async () => {
      const service = mock<IcManagementService>();
      service.take_canister_snapshot.mockResolvedValue(mockResponse);

      const icManagement = await createICManagement(service);

      const params = {
        canisterId: mockCanisterId,
      };

      const res = await icManagement.takeCanisterSnapshot(params);

      expect(res).toEqual(mockResponse);

      expect(service.take_canister_snapshot).toHaveBeenCalledWith({
        canister_id: params.canisterId,
        replace_snapshot: [],
      });
    });

    it("should call take_canister_snapshot with Uint8Array snapshotId", async () => {
      const service = mock<IcManagementService>();
      service.take_canister_snapshot.mockResolvedValue(mockResponse);

      const icManagement = await createICManagement(service);

      const params = {
        canisterId: mockCanisterId,
        snapshotId: Uint8Array.from([1, 2, 3, 4]),
      };

      const res = await icManagement.takeCanisterSnapshot(params);

      expect(res).toEqual(mockResponse);

      expect(service.take_canister_snapshot).toHaveBeenCalledWith({
        canister_id: params.canisterId,
        replace_snapshot: [params.snapshotId],
      });
    });

    it("calls take_canister_snapshot with string snapshotId", async () => {
      const service = mock<IcManagementService>();
      service.take_canister_snapshot.mockResolvedValue(mockResponse);

      const icManagement = await createICManagement(service);

      const params = {
        canisterId: mockCanisterId,
        snapshotId: "000000000000000201010000000000000001",
      };

      const res = await icManagement.takeCanisterSnapshot(params);

      expect(res).toEqual(mockResponse);

      expect(service.take_canister_snapshot).toHaveBeenCalledWith({
        canister_id: params.canisterId,
        replace_snapshot: [decodeSnapshotId(params.snapshotId)],
      });
    });

    it("should throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.take_canister_snapshot.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () =>
        icManagement.takeCanisterSnapshot({
          canisterId: mockCanisterId,
        });

      await expect(call).rejects.toThrow(error);
    });
  });
});
