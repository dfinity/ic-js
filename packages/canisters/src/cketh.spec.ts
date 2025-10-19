describe("@icp-sdk/cketh", () => {
  it("should not throw loading error", async () => {
    await expect(import("@icp-sdk/canisters/cketh")).resolves.not.toThrow(
      "Must be overwritten by the prebuild script",
    );
  });

  it("should re-export CkETHMinterCanister", async () => {
    const { CkETHMinterCanister } = await import("@icp-sdk/canisters/cketh");

    expect(CkETHMinterCanister).not.toBeUndefined();
  });

  it("should re-export CkETHOrchestratorCanister", async () => {
    const { CkETHOrchestratorCanister } = await import(
      "@icp-sdk/canisters/cketh"
    );

    expect(CkETHOrchestratorCanister).not.toBeUndefined();
  });
});
