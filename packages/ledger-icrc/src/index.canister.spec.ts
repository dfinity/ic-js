import type { ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mock } from "jest-mock-extended";
import type {
  Account,
  _SERVICE as IcrcIndexService,
  Transaction,
} from "../candid/icrc1_index";
import { IndexError } from "./errors/index.errors";
import { IcrcIndexCanister } from "./index.canister";
import { indexCanisterIdMock } from "./mocks/ledger.mock";
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
      const service = mock<ActorSubclass<IcrcIndexService>>();
      service.get_account_transactions.mockResolvedValue({
        Ok: {
          transactions: [transactionWithId],
          oldest_tx_id: [],
        },
      });

      const canister = IcrcIndexCanister.create({
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
      const service = mock<ActorSubclass<IcrcIndexService>>();
      service.get_account_transactions.mockResolvedValue({
        Err: {
          message: "Test error",
        },
      });

      const canister = IcrcIndexCanister.create({
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
});
