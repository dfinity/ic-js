import { Principal } from "@dfinity/principal";
import { mockPrincipal } from "../mocks/ledger.mock";
import { decodeIcrcAccount, encodeIcrcAccount } from "./ledger.utils";

describe("ledger-utils", () => {
  describe("encodeIcrcAccount", () => {
    it("should return the principal text for main accounts", () => {
      const owner = mockPrincipal;
      expect(encodeIcrcAccount({ owner })).toEqual(owner.toText());
    });

    it("should return the principal text for subaccount 0", () => {
      const owner = mockPrincipal;
      const account = {
        owner,
        subaccount: new Uint8Array(32).fill(0),
      };
      expect(encodeIcrcAccount(account)).toEqual(owner.toText());
    });

    it("should return a string representation for subaccounts", () => {
      const subaccount = new Uint8Array(32).fill(0);
      subaccount[31] = 1;
      const account = {
        owner: Principal.fromText("2vxsx-fae"),
        subaccount: subaccount,
      };
      expect(encodeIcrcAccount(account)).toEqual(
        Principal.fromHex("040101ff").toText()
      );
    });
  });

  describe("decodeIcrcAccount", () => {
    it("should return the owner only for main accounts", () => {
      const owner = mockPrincipal;
      expect(decodeIcrcAccount(mockPrincipal.toText())).toEqual({ owner });
    });

    it("should return the account with subaccounts", () => {
      const subaccount = new Uint8Array(32).fill(0);
      subaccount[31] = 1;
      const account1 = {
        owner: Principal.fromText("2vxsx-fae"),
        subaccount,
      };
      expect(decodeIcrcAccount(encodeIcrcAccount(account1))).toEqual(account1);
    });

    it("should raise an error if incorrect subaccount", () => {
      const call1 = () => decodeIcrcAccount(Principal.fromHex("ff").toText());
      expect(call1).toThrow();

      const call2 = () =>
        decodeIcrcAccount(Principal.fromHex("040001ff").toText());
      expect(call2).toThrow();

      const call3 = () =>
        decodeIcrcAccount(Principal.fromHex("040103ff").toText());
      expect(call3).toThrow();

      const call4 = () => decodeIcrcAccount(Principal.fromHex("00ff").toText());
      expect(call4).toThrow();
    });
  });

  describe("encode and decode should match", () => {
    it("decodes, decodes doesn't change the account", () => {
      const subaccount1 = new Uint8Array(32).fill(0);
      subaccount1[31] = 1;
      const account1 = {
        owner: Principal.fromText("2vxsx-fae"),
        subaccount: subaccount1,
      };
      expect(decodeIcrcAccount(encodeIcrcAccount(account1))).toEqual(account1);

      const subaccount2 = new Uint8Array(32).fill(0);
      subaccount2[31] = 1;
      subaccount2[29] = 4;
      const account2 = {
        owner: mockPrincipal,
        subaccount: subaccount2,
      };
      expect(decodeIcrcAccount(encodeIcrcAccount(account2))).toEqual(account2);

      const account3 = {
        owner: mockPrincipal,
      };
      expect(decodeIcrcAccount(encodeIcrcAccount(account3))).toEqual(account3);
    });
  });
});
