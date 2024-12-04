import type { ActorSubclass, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import type { QueryParams } from "@dfinity/utils";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  _SERVICE as CMCService,
  IcpXdrConversionRateResponse,
  NotifyCreateCanisterResult,
  NotifyTopUpResult,
  SubnetTypesToSubnetsResponse,
} from "../candid/cmc";
import { CMCCanister } from "./cmc.canister";
import {
  CMCError,
  InvalidaTransactionError,
  ProcessingError,
  RefundedError,
  TransactionTooOldError,
} from "./cmc.errors";
import { mockPrincipalText } from "./cmc.mock";

describe("CyclesMintingCanister", () => {
  const mockAgent: HttpAgent = mock<HttpAgent>();

  const createCMC = async (service: CMCService) => {
    const canisterId = Principal.fromText("aaaaa-aa");

    return CMCCanister.create({
      agent: mockAgent,
      serviceOverride: service as ActorSubclass<CMCService>,
      certifiedServiceOverride: service as ActorSubclass<CMCService>,
      canisterId,
    });
  };

  describe("CMCCanister.getIcpToCyclesConversionRate", () => {
    it("should returns the conversion rate from ICP to cycles", async () => {
      const exchangeRate = BigInt(10_000);
      const response: IcpXdrConversionRateResponse = {
        certificate: arrayOfNumberToUint8Array([]),
        data: {
          xdr_permyriad_per_icp: exchangeRate,
          timestamp_seconds: BigInt(10),
        },
        hash_tree: arrayOfNumberToUint8Array([]),
      };
      const service = mock<CMCService>();
      service.get_icp_xdr_conversion_rate.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const res = await cmc.getIcpToCyclesConversionRate();

      expect(res).toEqual(exchangeRate);
    });
  });

  describe("CMCCanister.notifyCreateCanister", () => {
    it("returns principal of the new canister", async () => {
      const canisterId = Principal.fromText(
        "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe",
      );
      const response: NotifyCreateCanisterResult = {
        Ok: canisterId,
      };
      const service = mock<CMCService>();
      service.notify_create_canister.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const res = await cmc.notifyCreateCanister({
        controller: Principal.fromText("aaaaa-aa"),
        block_index: BigInt(10),
        subnet_type: [],
        subnet_selection: [],
        settings: [],
      });

      expect(res).toEqual(canisterId);
    });

    it("throws Refunded error", async () => {
      const response: NotifyCreateCanisterResult = {
        Err: { Refunded: { block_index: [], reason: "test" } },
      };
      const service = mock<CMCService>();
      service.notify_create_canister.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyCreateCanister({
          controller: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
          subnet_type: [],
          subnet_selection: [],
          settings: [],
        });

      expect(call).rejects.toThrowError(RefundedError);
    });

    it("throws InvalidaTransactionError error", async () => {
      const response: NotifyCreateCanisterResult = {
        Err: { InvalidTransaction: "test" },
      };
      const service = mock<CMCService>();
      service.notify_create_canister.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyCreateCanister({
          controller: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
          subnet_type: [],
          subnet_selection: [],
          settings: [],
        });

      expect(call).rejects.toThrowError(InvalidaTransactionError);
    });

    it("throws ProcessingError error", async () => {
      const response: NotifyCreateCanisterResult = {
        Err: { Processing: null },
      };
      const service = mock<CMCService>();
      service.notify_create_canister.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyCreateCanister({
          controller: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
          subnet_type: [],
          subnet_selection: [],
          settings: [],
        });

      expect(call).rejects.toThrowError(ProcessingError);
    });

    it("throws TransactionTooOldError error", async () => {
      const response: NotifyCreateCanisterResult = {
        Err: { TransactionTooOld: BigInt(10) },
      };
      const service = mock<CMCService>();
      service.notify_create_canister.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyCreateCanister({
          controller: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
          subnet_type: [],
          subnet_selection: [],
          settings: [],
        });

      expect(call).rejects.toThrowError(TransactionTooOldError);
    });

    it("throws CMCError error", async () => {
      const response: NotifyCreateCanisterResult = {
        Err: { Other: { error_code: BigInt(10), error_message: "test" } },
      };
      const service = mock<CMCService>();
      service.notify_create_canister.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyCreateCanister({
          controller: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
          subnet_type: [],
          subnet_selection: [],
          settings: [],
        });

      expect(call).rejects.toThrowError(CMCError);
    });
  });

  describe("CMCCanister.notifyTopUp", () => {
    it("successfully notifies top up", async () => {
      const response: NotifyTopUpResult = {
        Ok: BigInt(10),
      };
      const service = mock<CMCService>();
      service.notify_top_up.mockResolvedValue(response);

      const cmc = await createCMC(service);

      await cmc.notifyTopUp({
        canister_id: Principal.fromText("aaaaa-aa"),
        block_index: BigInt(10),
      });

      expect(service.notify_top_up).toBeCalled();
    });

    it("throws Refunded error", async () => {
      const response: NotifyTopUpResult = {
        Err: { Refunded: { block_index: [], reason: "test" } },
      };
      const service = mock<CMCService>();
      service.notify_top_up.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyTopUp({
          canister_id: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
        });

      expect(call).rejects.toThrowError(RefundedError);
    });

    it("throws InvalidaTransactionError error", async () => {
      const response: NotifyTopUpResult = {
        Err: { InvalidTransaction: "test" },
      };
      const service = mock<CMCService>();
      service.notify_top_up.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyTopUp({
          canister_id: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
        });

      expect(call).rejects.toThrowError(InvalidaTransactionError);
    });

    it("throws ProcessingError error", async () => {
      const response: NotifyTopUpResult = {
        Err: { Processing: null },
      };
      const service = mock<CMCService>();
      service.notify_top_up.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyTopUp({
          canister_id: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
        });

      expect(call).rejects.toThrowError(ProcessingError);
    });

    it("throws TransactionTooOldError error", async () => {
      const response: NotifyTopUpResult = {
        Err: { TransactionTooOld: BigInt(10) },
      };
      const service = mock<CMCService>();
      service.notify_top_up.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyTopUp({
          canister_id: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
        });

      expect(call).rejects.toThrowError(TransactionTooOldError);
    });

    it("throws CMCError error", async () => {
      const response: NotifyTopUpResult = {
        Err: { Other: { error_code: BigInt(10), error_message: "test" } },
      };
      const service = mock<CMCService>();
      service.notify_top_up.mockResolvedValue(response);

      const cmc = await createCMC(service);

      const call = () =>
        cmc.notifyTopUp({
          canister_id: Principal.fromText("aaaaa-aa"),
          block_index: BigInt(10),
        });

      expect(call).rejects.toThrowError(CMCError);
    });
  });

  describe("CMCCanister.getDefaultSubnets", () => {
    const expectedSubnets = [
      Principal.fromText(mockPrincipalText),
      Principal.fromText("aaaaa-aa"),
    ];

    it("should return a list of default subnets for a query", async () => {
      const service = mock<CMCService>();
      service.get_default_subnets.mockResolvedValue(expectedSubnets);

      const cmc = await createCMC(service);

      const callerSpy = jest.spyOn(
        cmc as unknown as {
          caller: (params: QueryParams) => Promise<CMCService>;
        },
        "caller",
      );

      const result = await cmc.getDefaultSubnets({ certified: false });

      expect(result).toEqual(expectedSubnets);
      expect(service.get_default_subnets).toHaveBeenCalledTimes(1);

      expect(callerSpy).toHaveBeenCalledWith({ certified: false });
    });

    it("should return a list of default subnets for an update", async () => {
      const service = mock<CMCService>();
      service.get_default_subnets.mockResolvedValue(expectedSubnets);

      const cmc = await createCMC(service);

      const callerSpy = jest.spyOn(
        cmc as unknown as {
          caller: (params: QueryParams) => Promise<CMCService>;
        },
        "caller",
      );

      const result = await cmc.getDefaultSubnets({ certified: true });

      expect(result).toEqual(expectedSubnets);
      expect(service.get_default_subnets).toHaveBeenCalledTimes(1);

      expect(callerSpy).toHaveBeenCalledWith({ certified: true });
    });

    it("should throw an error if the canister call ends in error", async () => {
      const service = mock<CMCService>();
      service.get_default_subnets.mockRejectedValue(new Error("Test"));

      const cmc = await createCMC(service);

      await expect(cmc.getDefaultSubnets({ certified: true })).rejects.toThrow(
        "Test",
      );
      expect(service.get_default_subnets).toHaveBeenCalledTimes(1);
    });
  });

  describe("CMCCanister.getSubnetTypesToSubnets", () => {
    const expectedSubnets: SubnetTypesToSubnetsResponse = {
      data: [
        [
          "european",
          [
            Principal.fromText(
              "bkfrj-6k62g-dycql-7h53p-atvkj-zg4to-gaogh-netha-ptybj-ntsgw-rqe",
            ),
          ],
        ],
        [
          "fiduciary",
          [
            Principal.fromText(
              "pzp6e-ekpqk-3c5x7-2h6so-njoeq-mt45d-h3h6c-q3mxf-vpeq5-fk5o7-yae",
            ),
          ],
        ],
      ],
    };

    it("should return a list of default subnets for a query", async () => {
      const service = mock<CMCService>();
      service.get_subnet_types_to_subnets.mockResolvedValue(expectedSubnets);

      const cmc = await createCMC(service);

      const callerSpy = jest.spyOn(
        cmc as unknown as {
          caller: (params: QueryParams) => Promise<CMCService>;
        },
        "caller",
      );

      const result = await cmc.getSubnetTypesToSubnets({ certified: false });

      expect(result).toEqual(expectedSubnets);
      expect(service.get_subnet_types_to_subnets).toHaveBeenCalledTimes(1);

      expect(callerSpy).toHaveBeenCalledWith({ certified: false });
    });

    it("should return a list of default subnets for an update", async () => {
      const service = mock<CMCService>();
      service.get_subnet_types_to_subnets.mockResolvedValue(expectedSubnets);

      const cmc = await createCMC(service);

      const callerSpy = jest.spyOn(
        cmc as unknown as {
          caller: (params: QueryParams) => Promise<CMCService>;
        },
        "caller",
      );

      const result = await cmc.getSubnetTypesToSubnets({ certified: true });

      expect(result).toEqual(expectedSubnets);
      expect(service.get_subnet_types_to_subnets).toHaveBeenCalledTimes(1);

      expect(callerSpy).toHaveBeenCalledWith({ certified: true });
    });

    it("should throw an error if the canister call ends in error", async () => {
      const service = mock<CMCService>();
      service.get_subnet_types_to_subnets.mockRejectedValue(new Error("Test"));

      const cmc = await createCMC(service);

      await expect(
        cmc.getSubnetTypesToSubnets({ certified: true }),
      ).rejects.toThrow("Test");
      expect(service.get_subnet_types_to_subnets).toHaveBeenCalledTimes(1);
    });
  });
});
