export type Nullable<T> = [] | [T];

export type NullishNullable<T> =  (Nullable<T>) | undefined;

