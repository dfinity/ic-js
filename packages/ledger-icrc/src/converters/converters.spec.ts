import { toNullable } from "@dfinity/utils";
import { mockPrincipal } from "../mocks/ledger.mock";
import { toIcrcAccount } from "./converters";

describe("converters", () => {
  describe("toIcrcAccount", () => {
    const owner = mockPrincipal;

    it("should transform a Candid Account to IcrcAccount correctly", () => {
      const subaccount = new Uint8Array([1, 2, 3]);

      expect(
        toIcrcAccount({
          owner,
          subaccount: toNullable(subaccount),
        }),
      ).toStrictEqual({
        owner,
        subaccount,
      });
    });

    it("should handle nullish subaccount", () => {
      expect(
        toIcrcAccount({
          owner,
          subaccount: toNullable(),
        }),
      ).toStrictEqual({
        owner,
      });
    });
  });
});
