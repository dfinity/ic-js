import { NullishError } from "./asserts.utils";
import { fromDefinedNullable, fromNullable, toNullable } from "./did.utils";

describe("did-utils", () => {
  it("should convert from empty array to undefined", () => {
    expect(fromNullable([])).toBeUndefined();
  });

  it("should convert from array to object", () => {
    const test = { test: "1" };
    expect(fromNullable([{ test: "1" }])).toEqual(test);
  });

  it("should convert from undefined to empty array", () => {
    expect(toNullable(undefined)).toEqual([]);
  });

  it("should convert object to array", () => {
    const test = { test: "1" };
    expect(toNullable(test)).toEqual([test]);
  });

  it("should convert boolean to array", () => {
    const test = false;
    expect(toNullable(test)).toEqual([test]);
  });

  it("should convert null to array", () => {
    const test = null;
    expect(toNullable(test)).toEqual([test]);
  });

  it("should convert 0 to array", () => {
    const test = 0;
    expect(toNullable(test)).toEqual([test]);
  });

  describe("fromDefinedNullable", () => {
    it("should convert from array to object", () => {
      const test = { test: "1" };
      expect(fromDefinedNullable([{ test: "1" }])).toEqual(test);
    });

    it("should throw on undefined", () => {
      expect(() => fromDefinedNullable([])).toThrow(NullishError);
    });
  });
});
