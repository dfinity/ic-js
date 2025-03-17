import { InvalidAccountIDError } from "../errors/ledger.errors";
import { checkAccountId, isIcpAccountIdentifier } from "./accounts.utils";

describe("accounts-utils", () => {
  describe("checkAccountId", () => {
    it("should not throw if valid account id", () => {
      checkAccountId(
        "cd70bfa0f092c38a0ff8643d4617219761eb61d199b15418c0b1114d59e30f8e",
      );
    });

    it("should throw if not valid account id", () => {
      const call1 = () => checkAccountId("not-valid");
      expect(call1).toThrow(InvalidAccountIDError);
    });
  });

  describe("isIcpAccountIdentifier", () => {
    it("should return false if input is undefined", () => {
      expect(isIcpAccountIdentifier(undefined)).toBe(false);
    });

    it("should return true if valid account id", () => {
      expect(
        isIcpAccountIdentifier(
          "cd70bfa0f092c38a0ff8643d4617219761eb61d199b15418c0b1114d59e30f8e",
        ),
      ).toBe(true);
    });

    it("should return false if not valid account id", () => {
      expect(isIcpAccountIdentifier("not-valid")).toBe(false);
    });
  });
});
