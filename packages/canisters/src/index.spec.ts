describe("@icp-sdk/canisters", () => {
  it("should throw loading error", async () => {
    await expect(import("@icp-sdk/canisters")).rejects.toThrow(
      "This package has no default entry point. Please import from a subpath.",
    );
  });
});
