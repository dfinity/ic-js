export class NullishError extends Error {}

export const assertNonNullish: <T>(
  value: T,
  message?: string
) => asserts value is NonNullable<T> = <T>(
  value: T,
  message?: string
): void => {
  if (value === null || value === undefined) {
    throw new NullishError(message);
  }
};
