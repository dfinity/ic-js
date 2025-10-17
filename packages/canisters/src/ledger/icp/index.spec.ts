import { AccountIdentifier, IndexCanister, LedgerCanister } from "./index";

describe("@icp-sdk/ledger-icp", () => {
  it("should re-export LedgerCanister", () => {
    expect(LedgerCanister).not.toBeUndefined();
  });

  it("should re-export IndexCanister", () => {
    expect(IndexCanister).not.toBeUndefined();
  });

  it("should re-export AccountIdentifier", () => {
    expect(AccountIdentifier).not.toBeUndefined();
  });
});
