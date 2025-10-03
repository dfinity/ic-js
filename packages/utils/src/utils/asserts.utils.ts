export class InvalidPercentageError extends Error {}
export class NullishError extends Error {}

export const assertNonNullish: <T>(
  value: T,
  message?: string,
  // eslint-disable-next-line local-rules/prefer-object-params
) => asserts value is NonNullable<T> = <T>(
  value: T,
  message?: string,
): void => {
  if (value === null || value === undefined) {
    throw new NullishError(message);
  }
};

// eslint-disable-next-line local-rules/prefer-object-params
export const asNonNullish = <T>(value: T, message?: string): NonNullable<T> => {
  assertNonNullish(value, message);
  return value;
};

export const assertPercentageNumber = (percentage: number) => {
  if (percentage < 0 || percentage > 100) {
    throw new InvalidPercentageError(
      `${percentage} is not a valid percentage number.`,
    );
  }
};

/**
 * Utility to enforce exhaustiveness checks in TypeScript.
 *
 * This function should only be called in branches of a `switch` or conditional
 * that should be unreachable if the union type has been fully handled.
 *
 * By typing the parameter as `never`, the compiler will emit an error if
 * a new variant is added to the union but not covered in the logic.
 *
 * @param _ - A value that should be of type `never`. If this is not the case,
 *            the TypeScript compiler will flag a type error.
 * @param message - Optional custom error message to include in the thrown error.
 * @throws {Error} Always throws when invoked at runtime.
 *
 */
// eslint-disable-next-line local-rules/prefer-object-params
export const assertNever = (_: never, message?: string): never => {
  throw new Error(message);
};
