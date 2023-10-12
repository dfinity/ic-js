import { Principal } from "@dfinity/principal";
import { mockPrincipal } from "../mocks/ledger.mock";
import { decodeIcrcAccount, encodeIcrcAccount } from "./ledger.utils";

describe("ledger-utils", () => {
  const ownerText =
    "k2t6j-2nvnp-4zjm3-25dtz-6xhaa-c7boj-5gayf-oj3xs-i43lp-teztq-6ae";
  const owner = Principal.fromText(ownerText);
  const subaccount = Uint8Array.from([...Array(32)].map((_, i) => i + 1));
  const subaccountHex =
    "102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f20";
  const checksum = "dfxgiyy";

  describe("encodeIcrcAccount", () => {
    it("should return the principal text for main accounts", () => {
      expect(encodeIcrcAccount({ owner })).toEqual(ownerText);
    });

    it("should return the principal text for subaccount 0", () => {
      const account = {
        owner,
        subaccount: new Uint8Array(32).fill(0),
      };
      expect(encodeIcrcAccount(account)).toEqual(ownerText);
    });

    it("should return a string representation for owner and subaccount", () => {
      const account = {
        owner,
        subaccount,
      };

      expect(encodeIcrcAccount(account)).toEqual(
        `${ownerText}-${checksum}.${subaccountHex}`
      );
    });
  });
  describe("decodeIcrcAccount", () => {
    it("should return the owner only for main accounts", () => {
      expect(decodeIcrcAccount(ownerText)).toEqual({ owner });
    });

    it("should return the account with subaccounts", () => {
      const account1 = {
        owner,
        subaccount,
      };
      expect(decodeIcrcAccount(encodeIcrcAccount(account1))).toEqual(account1);
    });

    it("should return the account for owner and subaccount as string", () => {
      expect(
        decodeIcrcAccount(`${ownerText}-${checksum}.${subaccountHex}`)
      ).toEqual({
        owner,
        subaccount,
      });
    });

    it("should raise an error if invalid input", () => {
      const call1 = () => decodeIcrcAccount("");
      expect(call1).toThrowError(
        new Error("Invalid account. No string provided.")
      );

      const call2 = () => decodeIcrcAccount("aaa");
      expect(call2).toThrow();

      const call3 = () => decodeIcrcAccount("aaa.");
      expect(call3).toThrow();

      const call4 = () => decodeIcrcAccount("aaa.bbb");
      expect(call4).toThrow();

      const call5 = () => decodeIcrcAccount(".bbb");
      expect(call5).toThrow();
    });

    it("should raise an error if input is provided with an invalid checksum", () => {
      const call = () =>
        decodeIcrcAccount(`${ownerText}-abcdef.${subaccountHex}`);
      expect(call).toThrow();
    });
  });

  describe("encode and decode should match", () => {
    it("decodes, decodes doesn't change the account", () => {
      const subaccount1 = new Uint8Array(32).fill(0);
      subaccount1[31] = 1;
      const account1 = {
        owner: Principal.fromText("2vxsx-fae"),
        subaccount: subaccount,
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

      const account4 = {
        owner,
        subaccount,
      };
      expect(decodeIcrcAccount(encodeIcrcAccount(account4))).toEqual(account4);
    });
  });
});
