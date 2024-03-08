import { assertNonNullish } from "./asserts.utils";
import { nonNullish } from "./nullish.utils";

export const toNullable = <T>(value?: T | null): [] | [T] => {
  return nonNullish(value) ? [value] : [];
};

export const fromNullable = <T>(value: undefined | [] | [T]): T | undefined => {
  return value?.[0];
};

export const fromDefinedNullable = <T>(value: undefined | [] | [T]): T => {
  const result = fromNullable(value);

  assertNonNullish(result);

  return result;
};
