describe("@icp-sdk/canisters/ckbtc", () => {
  it("should not throw loading error", async () => {
    await expect(import("@icp-sdk/canisters/ckbtc")).resolves.not.toThrow(
      "Must be overwritten by the prebuild script",
    );
  });

  it("should re-export CkBTCMinterCanister", async () => {
    const { CkBTCMinterCanister } = await import("@icp-sdk/canisters/ckbtc");

    expect(CkBTCMinterCanister).not.toBeUndefined();
  });

  it("should re-export BitcoinCanister", async () => {
    const { BitcoinCanister } = await import("@icp-sdk/canisters/ckbtc");

    expect(BitcoinCanister).not.toBeUndefined();
  });
});
