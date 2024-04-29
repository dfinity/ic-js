import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { arrayOfNumberToUint8Array } from "@dfinity/utils";
import { mock } from "jest-mock-extended";
import type {
  Account,
  _SERVICE as IcrcIndexNgService,
  Transaction,
} from "../candid/icrc_index-ng";
import { IndexError } from "./errors/index.errors";
import { IcrcIndexNgCanister } from "./index-ng.canister";
import { indexCanisterIdMock, ledgerCanisterIdMock } from "./mocks/ledger.mock";
import { IcrcAccount } from "./types/ledger.responses";

describe("Index canister", () => {
  afterEach(() => jest.clearAllMocks());

  const fakeSnsAccount: IcrcAccount = {
    owner: Principal.fromText("aaaaa-aa"),
  };

  const fakeCandidAccount: Account = {
    owner: Principal.fromText("aaaaa-aa"),
    subaccount: [],
  };

  describe("getTransactions", () => {
    it("returns transactions", async () => {
      const transaction: Transaction = {
        kind: "transfer",
        timestamp: BigInt(12354),
        burn: [],
        mint: [],
        transfer: [
          {
            to: fakeCandidAccount,
            from: fakeCandidAccount,
            memo: [],
            created_at_time: [BigInt(123)],
            amount: BigInt(33),
            fee: [BigInt(10)],
            spender: [
              {
                owner: Principal.fromText("aaaaa-aa"),
                subaccount: [],
              },
            ],
          },
        ],
        approve: [],
      };
      const transactionWithId = {
        id: BigInt(1),
        transaction: transaction,
      };
      const service = mock<ActorSubclass<IcrcIndexNgService>>();
      service.get_account_transactions.mockResolvedValue({
        Ok: {
          transactions: [transactionWithId],
          oldest_tx_id: [],
          balance: 123n,
        },
      });

      const canister = IcrcIndexNgCanister.create({
        canisterId: indexCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const res = await canister.getTransactions({
        account: fakeSnsAccount,
        max_results: BigInt(10),
      });
      expect(res.transactions).toEqual([transactionWithId]);
    });

    it("raises error when Err in response", async () => {
      const service = mock<ActorSubclass<IcrcIndexNgService>>();
      service.get_account_transactions.mockResolvedValue({
        Err: {
          message: "Test error",
        },
      });

      const canister = IcrcIndexNgCanister.create({
        canisterId: indexCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.getTransactions({
          account: fakeSnsAccount,
          max_results: BigInt(10),
        });
      expect(call).rejects.toThrowError(IndexError);
    });
  });

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<IcrcIndexNgService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = IcrcIndexNgCanister.create({
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
      const service = mock<ActorSubclass<IcrcIndexNgService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = IcrcIndexNgCanister.create({
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

  describe("balance", () => {
    it("should return the balance of main account", async () => {
      const service = mock<ActorSubclass<IcrcIndexNgService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = IcrcIndexNgCanister.create({
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
      const service = mock<ActorSubclass<IcrcIndexNgService>>();
      const balance = BigInt(100);
      service.icrc1_balance_of.mockResolvedValue(balance);

      const canister = IcrcIndexNgCanister.create({
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

  describe("ledger_id", () => {
    it("should return the balance of subaccount", async () => {
      const service = mock<ActorSubclass<IcrcIndexNgService>>();
      service.ledger_id.mockResolvedValue(ledgerCanisterIdMock);

      const canister = IcrcIndexNgCanister.create({
        canisterId: ledgerCanisterIdMock,
        certifiedServiceOverride: service,
      });

      const res = await canister.ledgerId({});
      expect(res).toEqual(ledgerCanisterIdMock);
    });
  });
});
