import { ActorSubclass, HttpAgent } from "@dfinity/agent";
import { ServiceResponse, toNullable } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  _SERVICE as IcManagementService,
  bitcoin_get_utxos_query_result,
  bitcoin_get_utxos_result,
  chunk_hash,
} from "../candid/ic-management";
import { ICManagementCanister } from "./ic-management.canister";
import {
  bitcoinAddressMock,
  mappedMockCanisterSettings,
  mockCanisterId,
  mockCanisterSettings,
  mockPrincipal,
  mockPrincipalText,
} from "./ic-management.mock";
import {
  BitcoinGetUtxosQueryParams,
  CanisterSettings,
  InstallCodeParams,
  InstallMode,
  toInstallMode,
  type BitcoinGetUtxosParams,
  type ClearChunkStoreParams,
  type InstallChunkedCodeParams,
  type StoredChunksParams,
  type UploadChunkParams,
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
          reserved_cycles_limit: [],
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
        reserved_cycles_limit: BigInt(11),
      };
      const response: CanisterStatusResponse = {
        status: { running: null },
        memory_size: BigInt(1000),
        cycles: BigInt(10_000),
        settings,
        idle_cycles_burned_per_day: BigInt(0),
        module_hash: [],
        reserved_cycles: BigInt(11),
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

  describe("bitcoinGetUtxos", () => {
    const params: BitcoinGetUtxosParams = {
      network: "testnet",
      filter: { min_confirmations: 2 },
      address: bitcoinAddressMock,
    };

    it("returns get utxos result when success", async () => {
      const response: bitcoin_get_utxos_result = {
        next_page: [],
        tip_height: 123,
        tip_block_hash: new Uint8Array([1, 2, 3]),
        utxos: [
          {
            height: 456,
            value: 789n,
            outpoint: {
              txid: new Uint8Array([4, 5, 6]),
              vout: 1,
            },
          },
          {
            height: 789,
            value: 7n,
            outpoint: {
              txid: new Uint8Array([7, 8, 9]),
              vout: 2,
            },
          },
        ],
      };
      const service = mock<IcManagementService>();
      service.bitcoin_get_utxos.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.bitcoinGetUtxos(params);

      expect(res).toEqual(response);
      expect(service.bitcoin_get_utxos).toHaveBeenCalledWith({
        network: { testnet: null },
        filter: [{ min_confirmations: 2 }],
        address: bitcoinAddressMock,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.bitcoin_get_utxos.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.bitcoinGetUtxos(params);

      expect(call).rejects.toThrowError(Error);
    });
  });

  describe("bitcoinGetUtxosQuery", () => {
    const params: BitcoinGetUtxosQueryParams = {
      network: "testnet",
      filter: { min_confirmations: 2 },
      address: bitcoinAddressMock,
    };

    it("returns get utxos query result when success", async () => {
      const response: bitcoin_get_utxos_query_result = {
        next_page: [],
        tip_height: 123,
        tip_block_hash: new Uint8Array([1, 2, 3]),
        utxos: [
          {
            height: 456,
            value: 789n,
            outpoint: {
              txid: new Uint8Array([4, 5, 6]),
              vout: 1,
            },
          },
          {
            height: 789,
            value: 7n,
            outpoint: {
              txid: new Uint8Array([7, 8, 9]),
              vout: 2,
            },
          },
        ],
      };
      const service = mock<IcManagementService>();
      service.bitcoin_get_utxos_query.mockResolvedValue(response);

      const icManagement = await createICManagement(service);

      const res = await icManagement.bitcoinGetUtxosQuery(params);

      expect(res).toEqual(response);
      expect(service.bitcoin_get_utxos_query).toHaveBeenCalledWith({
        network: { testnet: null },
        filter: [{ min_confirmations: 2 }],
        address: bitcoinAddressMock,
      });
    });

    it("throws Error", async () => {
      const error = new Error("Test");
      const service = mock<IcManagementService>();
      service.bitcoin_get_utxos_query.mockRejectedValue(error);

      const icManagement = await createICManagement(service);

      const call = () => icManagement.bitcoinGetUtxosQuery(params);

      expect(call).rejects.toThrowError(Error);
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

      expect(call).rejects.toThrowError(Error);
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

      expect(call).rejects.toThrowError(Error);
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

      expect(call).rejects.toThrowError(Error);
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

      expect(call).rejects.toThrowError(Error);
    });
  });
});
