import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  TransferArg,
  _SERVICE as Icrc1LedgerService,
} from "../candid/icrc1_ledger";
import { Icrc1TransferError } from "./errors/ledger.errors";
import { Icrc1LedgerCanister } from "./ledger.canister";
import {
  ledgerCanisterIdMock,
  tokeMetadataResponseMock,
} from "./mocks/ledger.mock";
import { TransferParams } from "./types/ledger.params";

describe("Ledger canister", () => {
  it("should return the token metadata", async () => {
    const service = mock<ActorSubclass<Icrc1LedgerService>>();
    service.icrc1_metadata.mockResolvedValue(tokeMetadataResponseMock);

    const canister = Icrc1LedgerCanister.create({
      canisterId: ledgerCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.metadata({});
    expect(res).toEqual(tokeMetadataResponseMock);
  });

  it("should return the transaction fee", async () => {
    const service = mock<ActorSubclass<Icrc1LedgerService>>();
    const fee = BigInt(10_000);
    service.icrc1_fee.mockResolvedValue(fee);

    const canister = Icrc1LedgerCanister.create({
      canisterId: ledgerCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.transactionFee({});
    expect(res).toEqual(fee);
  });

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<Icrc1LedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = Icrc1LedgerCanister.create({
        canisterId: ledgerCanisterIdMock,
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
      const service = mock<ActorSubclass<Icrc1LedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = Icrc1LedgerCanister.create({
        canisterId: ledgerCanisterIdMock,
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
      const service = mock<ActorSubclass<Icrc1LedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc1_transfer.mockResolvedValue({ Ok: blockHeight });

      const canister = Icrc1LedgerCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const res = await canister.transfer(transferParams);
      expect(res).toEqual(blockHeight);
      expect(service.icrc1_transfer).toBeCalledWith(transferArg);
    });

    it("should raise Icrc1TransferError error", async () => {
      const service = mock<ActorSubclass<Icrc1LedgerService>>();
      const errorResponse = {
        Err: {
          InsufficientFunds: {
            balance: BigInt(0),
          },
        },
      };
      service.icrc1_transfer.mockResolvedValue(errorResponse);

      const canister = Icrc1LedgerCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const call = () => canister.transfer(transferParams);
      expect(call).rejects.toThrow(Icrc1TransferError);
    });
  });
});
