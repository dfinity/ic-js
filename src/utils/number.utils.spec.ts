import { InvalidPercentageError } from "../errors/governance.errors";
import { assertPercentageNumber } from "./number.utils";

describe("accounts-utils", () => {
  describe("assertPercentageNumber", () => {
    it("should not throw if valid percentage", () => {
      assertPercentageNumber(30);
    });

    it("should throw if not valid account id", () => {
      const call1 = () => assertPercentageNumber(300);
      expect(call1).toThrow(InvalidPercentageError);
    });
  });
});
