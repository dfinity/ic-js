describe("@icp-sdk/sns", () => {
  it("should not throw loading error", async () => {
    await expect(import("@icp-sdk/canisters/sns")).resolves.not.toThrow(
      "Must be overwritten by the prebuild script",
    );
  });

  it("should re-export SnsGovernanceCanister", async () => {
    const { SnsGovernanceCanister } = await import("@icp-sdk/canisters/sns");

    expect(SnsGovernanceCanister).not.toBeUndefined();
  });

  it("should re-export SnsGovernanceTestCanister", async () => {
    const { SnsGovernanceTestCanister } = await import(
      "@icp-sdk/canisters/sns"
    );

    expect(SnsGovernanceTestCanister).not.toBeUndefined();
  });

  it("should re-export SnsRootCanister", async () => {
    const { SnsRootCanister } = await import("@icp-sdk/canisters/sns");

    expect(SnsRootCanister).not.toBeUndefined();
  });

  it("should re-export initSnsWrapper", async () => {
    const { initSnsWrapper } = await import("@icp-sdk/canisters/sns");

    expect(initSnsWrapper).not.toBeUndefined();
  });

  it("should re-export SnsWrapper", async () => {
    const { SnsWrapper } = await import("@icp-sdk/canisters/sns");

    expect(SnsWrapper).not.toBeUndefined();
  });

  it("should re-export SnsSwapCanister", async () => {
    const { SnsSwapCanister } = await import("@icp-sdk/canisters/sns");

    expect(SnsSwapCanister).not.toBeUndefined();
  });
});
