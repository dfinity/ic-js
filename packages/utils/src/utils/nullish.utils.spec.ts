import {
  isEmptyString,
  isNullish,
  nonNullish,
  notEmptyString,
} from "./nullish.utils";

describe("nullish-utils", () => {
  describe("isNullish", () => {
    it("should determine nullable", () => {
      expect(isNullish(null)).toBeTruthy();
      expect(isNullish(undefined)).toBeTruthy();
      expect(isNullish(0)).toBeFalsy();
      expect(isNullish(1)).toBeFalsy();
      expect(isNullish("")).toBeFalsy();
      expect(isNullish([])).toBeFalsy();
    });
  });

  describe("nonNullish", () => {
    it("should determine not nullable", () => {
      expect(nonNullish(null)).toBeFalsy();
      expect(nonNullish(undefined)).toBeFalsy();
      expect(nonNullish(0)).toBeTruthy();
      expect(nonNullish(1)).toBeTruthy();
      expect(nonNullish("")).toBeTruthy();
      expect(nonNullish([])).toBeTruthy();
    });
  });

  describe("isNullish", () => {
    it("should determine nullable", () => {
      expect(isNullish(null)).toBeTruthy();
      expect(isNullish(undefined)).toBeTruthy();
      expect(isNullish(0)).toBeFalsy();
      expect(isNullish(1)).toBeFalsy();
      expect(isNullish("")).toBeFalsy();
      expect(isNullish([])).toBeFalsy();
    });
  });

  describe("notEmptyString", () => {
    it("should determine not empty", () => {
      expect(notEmptyString(null)).toBeFalsy();
      expect(notEmptyString(undefined)).toBeFalsy();
      expect(notEmptyString("")).toBeFalsy();
      expect(notEmptyString("test")).toBeTruthy();
    });
  });

  describe("emptyString", () => {
    it("should determine empty", () => {
      expect(isEmptyString(null)).toBeTruthy();
      expect(isEmptyString(undefined)).toBeTruthy();
      expect(isEmptyString("")).toBeTruthy();
      expect(isEmptyString("test")).toBeFalsy();
    });
  });
});
