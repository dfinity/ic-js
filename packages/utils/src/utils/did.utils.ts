import { assertNonNullish } from "./asserts.utils";
import { nonNullish } from "./nullish.utils";
import { Nullable, NullishNullable } from "../types/did.utils";

/**
 * Converts a value into a Candid-style variant representation of an optional value.
 *
 * @template T The type of the value.
 * @param {T | null | undefined} value - The value to convert into a Candid-style variant.
 * @returns {Nullable<T>} A Candid-style variant representation: an empty array for `null` and `undefined` or an array with the value.
 */
export const toNullable = <T>(value?: T | null): Nullable<T> =>
  nonNullish(value) ? [value] : [];

/**
 * Extracts the value from a Candid-style variant representation of an optional value.
 *
 * @template T The type of the value.
 * @param {Nullable<T>} value - A Candid-style variant representing an optional value.
 * @returns {T | undefined} The extracted value, or `undefined` if the array is empty.
 */
export const fromNullable = <T>(value: Nullable<T>): T | undefined => value?.[0];

/**
 * Extracts the value from a Candid-style variant representation of an optional value,
 * ensuring the value is defined. Throws an error if the array is empty or the value is nullish.
 *
 * @template T The type of the value.
 * @param {Nullable<T>} value - A Candid-style variant representing an optional value.
 * @returns {T} The extracted value.
 * @throws {Error} If the array is empty or the value is nullish.
 */
export const fromDefinedNullable = <T>(value: Nullable<T>): T => {
  const result = fromNullable(value);

  assertNonNullish(result);

  return result;
};

/**
 * Extracts the value from a nullish Candid-style variant representation.
 *
 * @template T The type of the value.
 * @param {NullishNullable<T>} value - A Candid-style variant or `undefined`.
 * @returns {T | undefined} The extracted value, or `undefined` if the input is nullish or the array is empty.
 */
export const fromNullishNullable = <T>(
  value: NullishNullable<T>,
): T | undefined => fromNullable(value ?? []);
