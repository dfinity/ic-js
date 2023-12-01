import { E8S_PER_TOKEN } from "../constants/constants";
import { FromStringToTokenError } from "../enums/token.enums";

/**
 * Receives a string representing a number and returns the big int or error.
 *
 * @param amount - in string format
 * @returns bigint | FromStringToTokenError
 */
export const convertStringToE8s = (
  value: string,
): bigint | FromStringToTokenError => {
  // replace exponential format (1e-4) with plain (0.0001)
  // doesn't support decimals for values >= ~1e16
  let amount = value.includes("e")
    ? Number(value).toLocaleString("en", {
        useGrouping: false,
        maximumFractionDigits: 20,
      })
    : value;

  // Remove all instances of "," and "'".
  amount = amount.trim().replace(/[,']/g, "");

  // Verify that the string is of the format 1234.5678
  const regexMatch = amount.match(/\d*(\.\d*)?/);
  if (!regexMatch || regexMatch[0] !== amount) {
    return FromStringToTokenError.InvalidFormat;
  }

  const [integral, fractional] = amount.split(".");

  let e8s = BigInt(0);

  if (integral) {
    try {
      e8s += BigInt(integral) * E8S_PER_TOKEN;
    } catch {
      return FromStringToTokenError.InvalidFormat;
    }
  }

  if (fractional) {
    if (fractional.length > 8) {
      return FromStringToTokenError.FractionalMoreThan8Decimals;
    }
    try {
      e8s += BigInt(fractional.padEnd(8, "0"));
    } catch {
      return FromStringToTokenError.InvalidFormat;
    }
  }

  return e8s;
};

/**
 * Receives a string representing a number and returns the big int or error.
 *
 * @param amount - in string format
 * @returns bigint | FromStringToTokenError
 */
const convertStringToUlps = ({
  amount,
  decimals,
}: {
  amount: string;
  decimals: number;
}): bigint | FromStringToTokenError => {
  // Remove all instances of "," and "'".
  amount = amount.trim().replace(/[,']/g, "");

  // Verify that the string is of the format 1234.5678
  const regexMatch = amount.match(/\d*(\.\d*)?/);
  if (!regexMatch || regexMatch[0] !== amount) {
    return FromStringToTokenError.InvalidFormat;
  }

  const [integral, fractional] = amount.split(".");

  let ulps = 0n;
  const ulpsPerToken = 10n ** BigInt(decimals);

  if (integral) {
    try {
      ulps += BigInt(integral) * ulpsPerToken;
    } catch {
      return FromStringToTokenError.InvalidFormat;
    }
  }

  if (fractional) {
    if (fractional.length > decimals) {
      return FromStringToTokenError.FractionalTooManyDecimals;
    }
    try {
      ulps += BigInt(fractional.padEnd(decimals, "0"));
    } catch {
      return FromStringToTokenError.InvalidFormat;
    }
  }

  return ulps;
};

export interface Token {
  symbol: string;
  name: string;
  decimals: number;
}

// TODO: Remove this token and use the value from ICP ledger
export const ICPToken: Token = {
  symbol: "ICP",
  name: "Internet Computer",
  decimals: 8,
};

/**
 * Deprecated. Use TokenAmountV2 instead which supports decimals !== 8.
 *
 * Represents an amount of tokens.
 *
 * @param e8s - The amount of tokens in bigint.
 * @param token - The token type.
 */
export class TokenAmount {
  private constructor(
    protected e8s: bigint,
    public token: Token,
  ) {
    if (token.decimals !== 8) {
      throw new Error("Use TokenAmountV2 for number of decimals other than 8");
    }
  }

  /**
   * Initialize from a bigint. Bigint are considered e8s.
   *
   * @param {amount: bigint; token?: Token;} params
   * @param {bigint} params.amount The amount in bigint format.
   * @param {Token} params.token The token type.
   */
  public static fromE8s({
    amount,
    token,
  }: {
    amount: bigint;
    token: Token;
  }): TokenAmount {
    return new TokenAmount(amount, token);
  }

  /**
   * Initialize from a string. Accepted formats:
   *
   * 1234567.8901
   * 1'234'567.8901
   * 1,234,567.8901
   *
   * @param {amount: string; token?: Token;} params
   * @param {string} params.amount The amount in string format.
   * @param {Token} params.token The token type.
   */
  public static fromString({
    amount,
    token,
  }: {
    amount: string;
    token: Token;
  }): TokenAmount | FromStringToTokenError {
    // If parsing the number fails because of the number of decimals, we still
    // want the error to be about the number of decimals and not about the
    // parsing.
    if (token.decimals !== 8) {
      throw new Error("Use TokenAmountV2 for number of decimals other than 8");
    }
    const e8s = convertStringToE8s(amount);

    if (typeof e8s === "bigint") {
      return new TokenAmount(e8s, token);
    }
    return e8s;
  }

  /**
   * Initialize from a number.
   *
   * 1 integer is considered E8S_PER_TOKEN
   *
   * @param {amount: number; token?: Token;} params
   * @param {string} params.amount The amount in number format.
   * @param {Token} params.token The token type.
   */
  public static fromNumber({
    amount,
    token,
  }: {
    amount: number;
    token: Token;
  }): TokenAmount {
    const tokenAmount = TokenAmount.fromString({
      amount: amount.toString(),
      token,
    });
    if (tokenAmount instanceof TokenAmount) {
      return tokenAmount;
    }
    if (tokenAmount === FromStringToTokenError.FractionalMoreThan8Decimals) {
      throw new Error(`Number ${amount} has more than 8 decimals`);
    }

    // This should never happen
    throw new Error(`Invalid number ${amount}`);
  }

  /**
   *
   * @returns The amount of e8s.
   */
  public toE8s(): bigint {
    return this.e8s;
  }
}

/**
 * Represents an amount of tokens.
 *
 * @param upls - The amount of tokens in units in the last place. If the token
 *               supports N decimals, 10^N ulp = 1 token.
 * @param token - The token type.
 */
export class TokenAmountV2 {
  private constructor(
    protected ulps: bigint,
    public token: Token,
  ) {}

  /**
   * Initialize from a bigint. Bigint are considered ulps.
   *
   * @param {amount: bigint; token?: Token;} params
   * @param {bigint} params.amount The amount in bigint format.
   * @param {Token} params.token The token type.
   */
  public static fromE8s({
    amount,
    token,
  }: {
    amount: bigint;
    token: Token;
  }): TokenAmountV2 {
    return new TokenAmountV2(amount, token);
  }

  /**
   * Initialize from a string. Accepted formats:
   *
   * 1234567.8901
   * 1'234'567.8901
   * 1,234,567.8901
   *
   * @param {amount: string; token?: Token;} params
   * @param {string} params.amount The amount in string format.
   * @param {Token} params.token The token type.
   */
  public static fromString({
    amount,
    token,
  }: {
    amount: string;
    token: Token;
  }): TokenAmountV2 | FromStringToTokenError {
    const ulps = convertStringToUlps({ amount, decimals: token.decimals });

    if (typeof ulps === "bigint") {
      return new TokenAmountV2(ulps, token);
    }
    return ulps;
  }

  /**
   * Initialize from a number.
   *
   * 1 integer is considered 10^{token.decimals} ulps
   *
   * @param {amount: number; token?: Token;} params
   * @param {string} params.amount The amount in number format.
   * @param {Token} params.token The token type.
   */
  public static fromNumber({
    amount,
    token,
  }: {
    amount: number;
    token: Token;
  }): TokenAmountV2 {
    const tokenAmount = TokenAmountV2.fromString({
      amount: amount.toString(),
      token,
    });
    if (tokenAmount instanceof TokenAmountV2) {
      return tokenAmount;
    }
    if (tokenAmount === FromStringToTokenError.FractionalTooManyDecimals) {
      throw new Error(
        `Number ${amount} has more than ${token.decimals} decimals`,
      );
    }

    // This should never happen
    throw new Error(`Invalid number ${amount}`);
  }

  /**
   *
   * @returns The amount of ulps.
   */
  public toUlps(): bigint {
    return this.ulps;
  }
}
