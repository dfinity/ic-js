import { describe, expect, it } from "@jest/globals";
import { FromStringToTokenError } from "./enums/token.enums";
import { TokenAmount } from "./token";

describe("ICP", () => {
  it("can be initialized from a whole number string", () => {
    expect(TokenAmount.fromString({ amount: "1" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(100000000) })
    );
    expect(TokenAmount.fromString({ amount: "1234" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(123400000000) })
    );
    expect(TokenAmount.fromString({ amount: "000001234" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(123400000000) })
    );
    expect(TokenAmount.fromString({ amount: " 1" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(100000000) })
    );
    expect(TokenAmount.fromString({ amount: "1,000" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(100000000000) })
    );
    expect(TokenAmount.fromString({ amount: "1'000" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(100000000000) })
    );
    expect(TokenAmount.fromString({ amount: "1'000'000" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(100000000000000) })
    );
    expect(TokenAmount.fromString({ amount: "1'000'000" })).toEqual(
      TokenAmount.fromNumber({ amount: 1_000_000 })
    );
    expect(TokenAmount.fromString({ amount: "1'000'000" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(100000000000000) })
    );
    expect(TokenAmount.fromString({ amount: "1'000" })).toEqual(
      TokenAmount.fromNumber({ amount: 1_000 })
    );
  });

  it("can be initialized from a fractional number string", () => {
    expect(TokenAmount.fromString({ amount: "0.1" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(10000000) })
    );
    expect(TokenAmount.fromString({ amount: "0.1" })).toEqual(
      TokenAmount.fromNumber({ amount: 0.1 })
    );
    expect(TokenAmount.fromString({ amount: "45.1231" })).toEqual(
      TokenAmount.fromNumber({ amount: 45.1231 })
    );
    expect(TokenAmount.fromString({ amount: "0.0001" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(10000) })
    );
    expect(TokenAmount.fromString({ amount: "0.00000001" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(1) })
    );
    expect(TokenAmount.fromString({ amount: "0.0000000001" })).toEqual(
      FromStringToTokenError.FractionalMoreThan8Decimals
    );
    expect(TokenAmount.fromNumber({ amount: 0.0000000001 })).toEqual(
      TokenAmount.fromNumber({ amount: 0 })
    );
    expect(TokenAmount.fromString({ amount: ".01" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(1000000) })
    );
  });

  it("can be initialized from a mixed string", () => {
    expect(TokenAmount.fromString({ amount: "1.1" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(110000000) })
    );
    expect(TokenAmount.fromString({ amount: "1.1" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(110000000) })
    );
    expect(TokenAmount.fromString({ amount: "12,345.00000001" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(1234500000001) })
    );
    expect(TokenAmount.fromString({ amount: "12'345.00000001" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(1234500000001) })
    );
    expect(TokenAmount.fromString({ amount: "12345.00000001" })).toEqual(
      TokenAmount.fromE8s({ amount: BigInt(1234500000001) })
    );
  });

  it("returns an error on invalid formats", () => {
    expect(TokenAmount.fromString({ amount: "1.1.1" })).toBe(
      FromStringToTokenError.InvalidFormat
    );
    expect(TokenAmount.fromString({ amount: "a" })).toBe(
      FromStringToTokenError.InvalidFormat
    );
    expect(TokenAmount.fromString({ amount: "3.a" })).toBe(
      FromStringToTokenError.InvalidFormat
    );
    expect(TokenAmount.fromString({ amount: "123asdf$#@~!" })).toBe(
      FromStringToTokenError.InvalidFormat
    );
  });

  it("rejects negative numbers", () => {
    expect(TokenAmount.fromString({ amount: "-1" })).toBe(
      FromStringToTokenError.InvalidFormat
    );
  });
});
