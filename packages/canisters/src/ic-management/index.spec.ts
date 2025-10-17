import { ICManagementCanister } from "./index";

describe("@icp-sdk/ic-management", () => {
  it("should re-export ICManagementCanister", () => {
    expect(ICManagementCanister).not.toBeUndefined();
  });
});
