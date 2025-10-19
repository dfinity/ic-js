describe("@icp-sdk/ic-management", () => {
  it("should not throw loading error", async () => {
    await expect(
      import("@icp-sdk/canisters/ic-management"),
    ).resolves.not.toThrow("Must be overwritten by the prebuild script");
  });

  it("should re-export ICManagementCanister", async () => {
    const { ICManagementCanister } = await import(
      "@icp-sdk/canisters/ic-management"
    );

    expect(ICManagementCanister).not.toBeUndefined();
  });
});
