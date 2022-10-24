import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import type {
  Account,
  Transaction,
  _SERVICE as SnsIndexService,
} from "../candid/sns_index";
import { swapCanisterIdMock } from "./mocks/sns.mock";
import { SnsIndexCanister } from "./sns-index.canister";

describe("Index canister", () => {
  afterEach(() => jest.clearAllMocks());

  describe("getTransactions", () => {
    it("returns transactions", async () => {
      const fakeAccount: Account = {
        owner: Principal.fromText("aaaaa-aa"),
        subaccount: [],
      };
      const transaction: Transaction = {
        kind: "transfer",
        timestamp: BigInt(12354),
        burn: [],
        mint: [],
        transfer: [
          {
            to: fakeAccount,
            from: fakeAccount,
            memo: [],
            created_at_time: [BigInt(123)],
            amount: BigInt(33),
          },
        ],
      };
      const transactionWithId = {
        id: BigInt(1),
        transaction: transaction,
      };
      const service = mock<ActorSubclass<SnsIndexService>>();
      service.get_account_transactions.mockResolvedValue({
        Ok: {
          transactions: [transactionWithId],
          oldest_tx_id: [],
        },
      });

      const canister = SnsIndexCanister.create({
        canisterId: swapCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const res = await canister.getTransactions({
        account: fakeAccount,
        max_results: BigInt(10),
      });
      expect(res.transactions).toEqual([transactionWithId]);
    });

    it("raises error when Err in response", async () => {
      const fakeAccount: Account = {
        owner: Principal.fromText("aaaaa-aa"),
        subaccount: [],
      };
      const service = mock<ActorSubclass<SnsIndexService>>();
      service.get_account_transactions.mockResolvedValue({
        Err: {
          message: "Test error",
        },
      });

      const canister = SnsIndexCanister.create({
        canisterId: swapCanisterIdMock,
        certifiedServiceOverride: service,
      });
      const call = () =>
        canister.getTransactions({
          account: fakeAccount,
          max_results: BigInt(10),
        });
      expect(call).rejects.toThrow();
    });
  });
});
