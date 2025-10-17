import {
  IcrcIndexCanister,
  IcrcIndexNgCanister,
  IcrcLedgerCanister,
} from "./index";

describe("@icp-sdk/ledger-icrc", () => {
  it("should re-export IcrcLedgerCanister", () => {
    expect(IcrcLedgerCanister).not.toBeUndefined();
  });

  it("should re-export IcrcIndexNgCanister", () => {
    expect(IcrcIndexNgCanister).not.toBeUndefined();
  });

  it("should re-export IcrcIndexCanister", () => {
    expect(IcrcIndexCanister).not.toBeUndefined();
  });
});
