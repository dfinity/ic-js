export class InvalidPercentageError extends Error {}
export class NullishError extends Error {}

export function assertNonNullish<T>(
  value: T,
  message?: string,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new NullishError(message);
  }
}

export function asNonNullish<T>(value: T, message?: string): NonNullable<T> {
  assertNonNullish(value, message);
  return value;
}

export const assertPercentageNumber = (percentage: number) => {
  if (percentage < 0 || percentage > 100) {
    throw new InvalidPercentageError(
      `${percentage} is not a valid percentage number.`,
    );
  }
};
