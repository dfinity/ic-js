/**
 * An error used to ensure at compile-time that it's never reached.
 */
export class UnsupportedValueError extends Error {
    constructor(value: never) {
        super('Unsupported value: ' + value);
    }
}

export enum FromICPStringError {
    FRACTIONAL_MORE_THAN_8_DECIMALS,
    INVALID_FORMAT,
}
