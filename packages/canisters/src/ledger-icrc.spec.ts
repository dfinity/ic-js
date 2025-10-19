describe("@icp-sdk/ledger-icrc", () => {
  it("should not throw loading error", async () => {
    await expect(import("@icp-sdk/canisters/ledger/icrc")).resolves.not.toThrow(
      "Must be overwritten by the prebuild script",
    );
  });

  it("should re-export IcrcLedgerCanister", async () => {
    const { IcrcLedgerCanister } = await import(
      "@icp-sdk/canisters/ledger/icrc"
    );

    expect(IcrcLedgerCanister).not.toBeUndefined();
  });

  it("should re-export IcrcIndexNgCanister", async () => {
    const { IcrcIndexNgCanister } = await import(
      "@icp-sdk/canisters/ledger/icrc"
    );

    expect(IcrcIndexNgCanister).not.toBeUndefined();
  });

  it("should re-export IcrcIndexCanister", async () => {
    const { IcrcIndexCanister } = await import(
      "@icp-sdk/canisters/ledger/icrc"
    );

    expect(IcrcIndexCanister).not.toBeUndefined();
  });
});
