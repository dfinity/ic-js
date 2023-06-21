import { decodePayment } from "./payment.utils";

describe("payment.utils", () => {
  it("extract payment information", () => {
    expect(
      decodePayment(
        "bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=0.00001"
      )
    ).toEqual({
      token: "bitcoin",
      identifier: "BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U",
      amount: 0.00001,
    });

    expect(
      decodePayment(
        "icp:646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21?amount=1234"
      )
    ).toEqual({
      token: "icp",
      identifier:
        "646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21",
      amount: 1234,
    });

    expect(
      decodePayment(
        "icp:646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21"
      )
    ).toEqual({
      token: "icp",
      identifier:
        "646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21",
    });

    expect(
      decodePayment(
        "icp:646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21?amount=1234.456"
      )
    ).toEqual({
      token: "icp",
      identifier:
        "646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21",
      amount: 1234.456,
    });
  });

  it("extract payment amount information with value keyword", () => {
    expect(
      decodePayment(
        "ethereum:0xdAC17F958D2ee523a2206206994597C13D831ec7?value=987.321"
      )
    ).toEqual({
      token: "ethereum",
      identifier: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      amount: 987.321,
    });
  });

  it("should ignore content between address and parameters", () => {
    expect(
      decodePayment(
        "ethereum:0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7/transfer?address=0x8e23ee67d1332ad560396262c48ffbb01f93d052&uint256=1"
      )
    ).toEqual({
      token: "ethereum",
      identifier: "0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7",
    });

    expect(
      decodePayment(
        "ethereum:0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7/transfer?address=0x8e23ee67d1332ad560396262c48ffbb01f93d052&uint256=1?value=444.555"
      )
    ).toEqual({
      token: "ethereum",
      identifier: "0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7",
      amount: 444.555,
    });
  });

  it("cannot extract payment information if token or address not provided", () => {
    expect(
      decodePayment("BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=0.00001")
    ).toBeUndefined();

    expect(decodePayment("bitcoin:?amount=0.00001")).toBeUndefined();

    expect(
      decodePayment("BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U")
    ).toBeUndefined();

    expect(
      decodePayment("BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U")
    ).toBeUndefined();

    expect(decodePayment("bitcoin:")).toBeUndefined();

    expect(decodePayment("bitcoin")).toBeUndefined();
  });

  it("cannot extract payment information if amount is not a number", () => {
    expect(
      decodePayment("BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=test")
    ).toBeUndefined();
  });

  it("should extract amount even if multiple parameters", () => {
    expect(
      decodePayment(
        "ethereum:0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7/transfer?address=0x8e23ee67d1332ad560396262c48ffbb01f93d052&uint256=1&value=444.555"
      )
    ).toEqual({
      token: "ethereum",
      identifier: "0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7",
      amount: 444.555,
    });
  });
});
