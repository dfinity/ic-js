describe("@icp-sdk/nns", () => {
  it("should not throw loading error", async () => {
    await expect(import("@icp-sdk/canisters/nns")).resolves.not.toThrow(
      "Must be overwritten by the prebuild script",
    );
  });

  it("should re-export GovernanceCanister", async () => {
    const { GovernanceCanister } = await import("@icp-sdk/canisters/nns");

    expect(GovernanceCanister).not.toBeUndefined();
  });

  it("should re-export SnsWasmCanister", async () => {
    const { SnsWasmCanister } = await import("@icp-sdk/canisters/nns");

    expect(SnsWasmCanister).not.toBeUndefined();
  });

  it("should re-export GenesisTokenCanister", async () => {
    const { GenesisTokenCanister } = await import("@icp-sdk/canisters/nns");

    expect(GenesisTokenCanister).not.toBeUndefined();
  });

  it("should re-export GovernanceTestCanister", async () => {
    const { GovernanceTestCanister } = await import("@icp-sdk/canisters/nns");

    expect(GovernanceTestCanister).not.toBeUndefined();
  });
});
