/** Is null or undefined */
export const isNullish = <T>(
  argument: T | undefined | null,
): argument is undefined | null => argument === null || argument === undefined;

/** Not null and not undefined */
export const nonNullish = <T>(
  argument: T | undefined | null,
): argument is NonNullable<T> => !isNullish(argument);

/** Not null and not undefined and not empty */
export const notEmptyString = (value: string | undefined | null): boolean =>
  nonNullish(value) && value !== "";

/**
 * Checks if a given value is null, undefined, or an empty string.
 *
 * @param {string | undefined | null} value - The value to check.
 * @returns {boolean} `true` if the value is null, undefined, or an empty string; otherwise, `false`.
 */
export const emptyString = (value: string | undefined | null): boolean =>
  !notEmptyString(value);
