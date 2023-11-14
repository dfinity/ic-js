import { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import {
  GetAccountIdentifierTransactionsError,
  GetAccountIdentifierTransactionsResponse,
  _SERVICE as IndexService,
} from "../candid/index";
import { IndexCanister } from "./index.canister";
import { mockAccountIdentifier } from "./mocks/ledger.mock";

describe("IndexCanister", () => {
  describe("accountBalance", () => {
    const balanceMock = 30_000_000n;

    it("returns account balance with query call", async () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_balance.mockResolvedValue(balanceMock);
      const index = IndexCanister.create({
        serviceOverride: service,
      });

      const balance = await index.accountBalance({
        accountIdentifier: mockAccountIdentifier,
        certified: false,
      });
      expect(balance).toEqual(balanceMock);
      expect(service.get_account_identifier_balance).toBeCalled();
    });

    it("returns account balance with update call", async () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_balance.mockResolvedValue(balanceMock);
      const index = IndexCanister.create({
        certifiedServiceOverride: service,
      });

      const balance = await index.accountBalance({
        accountIdentifier: mockAccountIdentifier,
        certified: true,
      });
      expect(balance).toEqual(balanceMock);
      expect(service.get_account_identifier_balance).toBeCalled();
    });

    it("returns account balance with account identifier as hex", async () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_balance.mockResolvedValue(balanceMock);
      const index = IndexCanister.create({
        serviceOverride: service,
      });

      const balance = await index.accountBalance({
        accountIdentifier: mockAccountIdentifier.toHex(),
        certified: false,
      });
      expect(balance).toEqual(balanceMock);
      expect(service.get_account_identifier_balance).toBeCalled();
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_balance.mockImplementation(() => {
        throw new Error();
      });

      const index = IndexCanister.create({
        serviceOverride: service,
      });

      expect(() =>
        index.accountBalance({
          accountIdentifier: mockAccountIdentifier.toHex(),
          certified: false,
        }),
      ).toThrowError();
    });
  });

  describe("getTransactions", () => {
    const transactionsMock = {
      Ok: {
        balance: 1234n,
        transactions: [{ id: 1n }, { id: 2n }],
        oldest_tx_id: [],
      } as GetAccountIdentifierTransactionsResponse,
    };

    it("returns transactions with query call", async () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_transactions.mockResolvedValue(
        transactionsMock,
      );
      const index = IndexCanister.create({
        serviceOverride: service,
      });

      const transactions = await index.getTransactions({
        accountIdentifier: mockAccountIdentifier,
        certified: false,
        maxResults: 10n,
      });

      expect(transactions).toEqual(transactionsMock.Ok);
      expect(service.get_account_identifier_transactions).toBeCalledWith({
        account_identifier: mockAccountIdentifier.toHex(),
        max_results: 10n,
        start: [],
      });
    });

    it("returns transactions with update call", async () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_transactions.mockResolvedValue(
        transactionsMock,
      );
      const index = IndexCanister.create({
        certifiedServiceOverride: service,
      });

      const transactions = await index.getTransactions({
        accountIdentifier: mockAccountIdentifier,
        certified: true,
        maxResults: 10n,
      });

      expect(transactions).toEqual(transactionsMock.Ok);
      expect(service.get_account_identifier_transactions).toBeCalledWith({
        account_identifier: mockAccountIdentifier.toHex(),
        max_results: 10n,
        start: [],
      });
    });

    it("returns transactions with account identifier as hex", async () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_transactions.mockResolvedValue(
        transactionsMock,
      );
      const index = IndexCanister.create({
        serviceOverride: service,
      });

      const transactions = await index.getTransactions({
        accountIdentifier: mockAccountIdentifier.toHex(),
        certified: false,
        maxResults: 10n,
      });

      expect(transactions).toEqual(transactionsMock.Ok);
      expect(service.get_account_identifier_transactions).toBeCalledWith({
        account_identifier: mockAccountIdentifier.toHex(),
        max_results: 10n,
        start: [],
      });
    });

    it("query transactions from start", async () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_transactions.mockResolvedValue(
        transactionsMock,
      );
      const index = IndexCanister.create({
        serviceOverride: service,
      });

      const transactions = await index.getTransactions({
        accountIdentifier: mockAccountIdentifier.toHex(),
        certified: false,
        maxResults: 10n,
        start: 3n,
      });

      expect(transactions).toEqual(transactionsMock.Ok);
      expect(service.get_account_identifier_transactions).toBeCalledWith({
        account_identifier: mockAccountIdentifier.toHex(),
        max_results: 10n,
        start: [3n],
      });
    });

    it("throws errors", async () => {
      const transactionsErrorMock = {
        Err: {
          message: "Test error",
        } as GetAccountIdentifierTransactionsError,
      };

      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_transactions.mockResolvedValue(
        transactionsErrorMock,
      );
      const index = IndexCanister.create({
        serviceOverride: service,
      });

      expect(() =>
        index.getTransactions({
          accountIdentifier: mockAccountIdentifier.toHex(),
          certified: false,
          maxResults: 10n,
        }),
      ).rejects.toThrowError();
    });

    it("should bubble errors", () => {
      const service = mock<ActorSubclass<IndexService>>();
      service.get_account_identifier_transactions.mockImplementation(() => {
        throw new Error();
      });

      const index = IndexCanister.create({
        serviceOverride: service,
      });

      expect(() =>
        index.getTransactions({
          accountIdentifier: mockAccountIdentifier.toHex(),
          certified: false,
          maxResults: 10n,
        }),
      ).rejects.toThrowError();
    });
  });
});
