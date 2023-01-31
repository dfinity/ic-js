import {
  assertNonNullish,
  assertPercentageNumber,
  InvalidPercentageError,
  NullishError,
} from "./asserts.utils";

describe("asserts-utils", () => {
  describe("assertNonNullish", () => {
    it("should throw an exception if undefined", () => {
      const call = () => assertNonNullish(undefined);

      expect(call).toThrow();
    });

    it("should throw an exception if null", () => {
      const call = () => assertNonNullish(null);

      expect(call).toThrow();
    });

    it("should throw an exception with particular message", () => {
      const call = () => assertNonNullish(undefined, "Test error");

      expect(call).toThrow(new NullishError("Test error"));
    });

    it("should not throw an exception if valid primitive type", () => {
      const call = () => assertNonNullish(1);
      expect(call).not.toThrow();
    });

    it("should not throw an exception if valid object", () => {
      const call = () => assertNonNullish({});
      expect(call).not.toThrow();
    });
  });

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
