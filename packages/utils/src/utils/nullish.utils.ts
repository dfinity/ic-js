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
