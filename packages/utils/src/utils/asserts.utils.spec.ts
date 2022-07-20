import {assertNonNullish, NullishError} from "./asserts.utils";

describe("asserts-utils", () => {
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
