import { parsePaymentCode } from "./qrcode.utils";

describe("qrcode.utils", () => {
  it("extract payment information", () => {
    expect(
      parsePaymentCode(
        "bitcoin:BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=0.00001"
      )
    ).toEqual({
      token: "bitcoin",
      identifier: "BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U",
      amount: 0.00001,
    });

    expect(
      parsePaymentCode(
        "icp:646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21?amount=1234"
      )
    ).toEqual({
      token: "icp",
      identifier:
        "646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21",
      amount: 1234,
    });

    expect(
      parsePaymentCode(
        "icp:646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21"
      )
    ).toEqual({
      token: "icp",
      identifier:
        "646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21",
    });

    expect(
      parsePaymentCode(
        "icp:646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21?amount=1234.456"
      )
    ).toEqual({
      token: "icp",
      identifier:
        "646f4d2d6fcb6fab5ba1547647526b666553467ecb5cb28c8d9ddf451c8f4c21",
      amount: 1234.456,
    });
  });

  it("cannot extract payment information if token or address not provided", () => {
    expect(
      parsePaymentCode(
        "BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=0.00001"
      )
    ).toBeUndefined();

    expect(parsePaymentCode("bitcoin:?amount=0.00001")).toBeUndefined();

    expect(
      parsePaymentCode("BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U")
    ).toBeUndefined();

    expect(
      parsePaymentCode("BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U")
    ).toBeUndefined();

    expect(parsePaymentCode("bitcoin:")).toBeUndefined();

    expect(parsePaymentCode("bitcoin")).toBeUndefined();
  });

  it("cannot extract payment information if amount is not a number", () => {
    expect(
      parsePaymentCode("BC1QYLH3U67J673H6Y6ALV70M0PL2YZ53TZHVXGG7U?amount=test")
    ).toBeUndefined();
  });
});
