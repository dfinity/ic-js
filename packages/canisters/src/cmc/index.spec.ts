import { shouldReExportAllMembers } from "../utils/test.utils";
import { CMCCanister } from "./index";

describe("@icp-sdk/cmc", () => {
  it("should re-export CMCCanister", () => {
    expect(CMCCanister).not.toBeUndefined();
  });

  shouldReExportAllMembers({
    source: "@dfinity/cmc",
    reexport: "@icp-sdk/canisters/cmc",
  });
});
