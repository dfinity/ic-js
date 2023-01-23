import type { ActorSubclass } from "@dfinity/agent";
import { Icrc1Account } from "@dfinity/ledger";
import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import type {
  Account,
  Transaction,
  _SERVICE as SnsIndexService,
} from "../candid/sns_index";
import { SnsIndexError } from "./errors/sns-index.errors";
import { swapCanisterIdMock } from "./mocks/sns.mock";
import { SnsIndexCanister } from "./sns-index.canister";

describe("Index canister", () => {
  afterEach(() => jest.clearAllMocks());

  const fakeSnsAccount: Icrc1Account = {
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
        account: fakeSnsAccount,
        max_results: BigInt(10),
      });
      expect(res.transactions).toEqual([transactionWithId]);
    });

    it("raises error when Err in response", async () => {
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
          account: fakeSnsAccount,
          max_results: BigInt(10),
        });
      expect(call).rejects.toThrowError(SnsIndexError);
    });
  });
});
