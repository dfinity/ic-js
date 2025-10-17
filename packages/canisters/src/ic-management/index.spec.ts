import { shouldReExportAllMembers } from "../utils/test.utils";
import { ICManagementCanister } from "./index";

describe("@icp-sdk/ic-management", () => {
  it("should re-export ICManagementCanister", () => {
    expect(ICManagementCanister).not.toBeUndefined();
  });

  shouldReExportAllMembers({
    source: "@dfinity/ic-management",
    reexport: "@icp-sdk/canisters/ic-management",
  });
});
