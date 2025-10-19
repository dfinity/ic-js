describe("@icp-sdk/cmc", () => {
  it("should not throw loading error", async () => {
    await expect(import("@icp-sdk/canisters/cmc")).resolves.not.toThrow(
      "Must be overwritten by the prebuild script",
    );
  });

  it("should re-export CMCCanister", async () => {
    const { CMCCanister } = await import("@icp-sdk/canisters/cmc");

    expect(CMCCanister).not.toBeUndefined();
  });
});
