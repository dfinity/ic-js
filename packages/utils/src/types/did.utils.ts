/**
 * A Candid-style variant representation of an optional value.
 * It is an empty array for `null` and `undefined`, or an array with the value.
 */
export type Nullable<T> = [] | [T];

/**
 * An optional Candid-style variant representation of an optional value.
 * It is an empty array for `null` and `undefined`, or an array with the value, or `undefined`.
 */
export type NullishNullable<T> = Nullable<T> | undefined;
