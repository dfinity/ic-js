import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  TransferArg,
  _SERVICE as SnsLedgerService,
} from "../candid/icrc1_ledger";
import { SnsTransferError } from "./errors/ledger.errors";
import { SnsLedgerCanister } from "./ledger.canister";
import { tokeMetadataResponseMock } from "./mocks/ledger.mock";
import { rootCanisterIdMock } from "./mocks/sns.mock";
import { TransferParams } from "./types/ledger.params";

describe("Ledger canister", () => {
  it("should return the token metadata", async () => {
    const service = mock<ActorSubclass<SnsLedgerService>>();
    service.icrc1_metadata.mockResolvedValue(tokeMetadataResponseMock);

    const canister = SnsLedgerCanister.create({
      canisterId: rootCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.metadata({});
    expect(res).toEqual(tokeMetadataResponseMock);
  });

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<SnsLedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = SnsLedgerCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const res = await canister.balance({
        owner,
      });
      expect(service.icrc1_balance_of).toBeCalled();
      expect(res).toEqual(balance);
    });

    it("should return the balance of subaccount", async () => {
      const service = mock<ActorSubclass<SnsLedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = SnsLedgerCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const owner = Principal.fromText("aaaaa-aa");
      const subaccount = arrayOfNumberToUint8Array([0, 0, 1]);
      const res = await canister.balance({
        owner,
        subaccount,
      });
      expect(res).toEqual(balance);
    });
  });

  describe("transfer", () => {
    const transferParams: TransferParams = {
      to: {
        owner: Principal.fromText("aaaaa-aa"),
        subaccount: [],
      },
      amount: BigInt(100_000_000),
    };
    const transferArg: TransferArg = {
      to: {
        owner: Principal.fromText("aaaaa-aa"),
        subaccount: [],
      },
      fee: [],
      memo: [],
      from_subaccount: [],
      created_at_time: [],
      amount: BigInt(100_000_000),
    };
    it("should return the block height successfully", async () => {
      const service = mock<ActorSubclass<SnsLedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc1_transfer.mockResolvedValue({ Ok: blockHeight });

      const canister = SnsLedgerCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const res = await canister.transfer(transferParams);
      expect(res).toEqual(blockHeight);
      expect(service.icrc1_transfer).toBeCalledWith(transferArg);
    });

    it("should raise SnsTransferError error", async () => {
      const service = mock<ActorSubclass<SnsLedgerService>>();
      const errorResponse = {
        Err: {
          InsufficientFunds: {
            balance: BigInt(0),
          },
        },
      };
      service.icrc1_transfer.mockResolvedValue(errorResponse);

      const canister = SnsLedgerCanister.create({
        canisterId: rootCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const call = () => canister.transfer(transferParams);
      expect(call).rejects.toThrow(SnsTransferError);
    });
  });
});
