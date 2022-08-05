import { assertNonNullish } from "./asserts.utils";

export const toNullable = <T>(value?: T): [] | [T] => {
  return value ? [value] : [];
};

export const fromNullable = <T>(value: [] | [T]): T | undefined => {
  return value?.[0];
};

export const fromDefinedNullable = <T>(value: [] | [T]): T => {
  const result = fromNullable(value);

  assertNonNullish(result);

  return result;
};
