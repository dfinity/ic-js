import { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import { _SERVICE as IndexService } from "../candid/index";
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
});
