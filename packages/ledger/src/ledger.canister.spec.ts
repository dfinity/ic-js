import { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  TransferArg,
  _SERVICE as IcrcLedgerService,
} from "../candid/icrc1_ledger";
import { IcrcTransferError } from "./errors/ledger.errors";
import { IcrcLedgerCanister } from "./ledger.canister";
import {
  ledgerCanisterIdMock,
  tokeMetadataResponseMock,
} from "./mocks/ledger.mock";
import { TransferParams } from "./types/ledger.params";

describe("Ledger canister", () => {
  it("should return the token metadata", async () => {
    const service = mock<ActorSubclass<IcrcLedgerService>>();
    service.icrc1_metadata.mockResolvedValue(tokeMetadataResponseMock);

    const canister = IcrcLedgerCanister.create({
      canisterId: ledgerCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.metadata({});
    expect(res).toEqual(tokeMetadataResponseMock);
  });

  it("should return the transaction fee", async () => {
    const service = mock<ActorSubclass<IcrcLedgerService>>();
    const fee = BigInt(10_000);
    service.icrc1_fee.mockResolvedValue(fee);

    const canister = IcrcLedgerCanister.create({
      canisterId: ledgerCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.transactionFee({});
    expect(res).toEqual(fee);
  });

  it("should return the total tokens supply", async () => {
    const service = mock<ActorSubclass<IcrcLedgerService>>();
    const totalTokens = BigInt(1000_000_000_000);
    service.icrc1_total_supply.mockResolvedValue(totalTokens);

    const canister = IcrcLedgerCanister.create({
      canisterId: ledgerCanisterIdMock,
      certifiedServiceOverride: service,
    });

    const res = await canister.totalTokensSupply({});
    expect(res).toEqual(totalTokens);
  });

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<IcrcLedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = IcrcLedgerCanister.create({
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
      const service = mock<ActorSubclass<IcrcLedgerService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = IcrcLedgerCanister.create({
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
      const service = mock<ActorSubclass<IcrcLedgerService>>();
      const blockHeight = BigInt(100);
      service.icrc1_transfer.mockResolvedValue({ Ok: blockHeight });

      const canister = IcrcLedgerCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const res = await canister.transfer(transferParams);
      expect(res).toEqual(blockHeight);
      expect(service.icrc1_transfer).toBeCalledWith(transferArg);
    });

    it("should raise IcrcTransferError error", async () => {
      const service = mock<ActorSubclass<IcrcLedgerService>>();
      const errorResponse = {
        Err: {
          InsufficientFunds: {
            balance: BigInt(0),
          },
        },
      };
      service.icrc1_transfer.mockResolvedValue(errorResponse);

      const canister = IcrcLedgerCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const call = () => canister.transfer(transferParams);
      expect(call).rejects.toThrow(IcrcTransferError);
    });
  });
});
