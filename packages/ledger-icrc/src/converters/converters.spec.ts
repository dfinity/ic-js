import { toNullable } from "@dfinity/utils";
import { mockPrincipal } from "../mocks/ledger.mock";
import { fromCandidAccount } from "./converters";

describe("converters", () => {
  describe("fromCandidAccount", () => {
    const owner = mockPrincipal;

    it("should transform a Candid Account to IcrcAccount correctly", () => {
      const subaccount = new Uint8Array([1, 2, 3]);

      expect(
        fromCandidAccount({
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
        fromCandidAccount({
          owner,
          subaccount: toNullable(),
        }),
      ).toStrictEqual({
        owner,
      });
    });
  });
});
