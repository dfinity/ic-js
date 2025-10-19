describe("@icp-sdk/ledger-icp", () => {
  it("should not throw loading error", async () => {
    await expect(import("@icp-sdk/canisters/ledger/icp")).resolves.not.toThrow(
      "Must be overwritten by the prebuild script",
    );
  });

  it("should re-export LedgerCanister", async () => {
    const { LedgerCanister } = await import("@icp-sdk/canisters/ledger/icp");

    expect(LedgerCanister).not.toBeUndefined();
  });

  it("should re-export IndexCanister", async () => {
    const { IndexCanister } = await import("@icp-sdk/canisters/ledger/icp");

    expect(IndexCanister).not.toBeUndefined();
  });

  it("should re-export AccountIdentifier", async () => {
    const { AccountIdentifier } = await import("@icp-sdk/canisters/ledger/icp");

    expect(AccountIdentifier).not.toBeUndefined();
  });
});
