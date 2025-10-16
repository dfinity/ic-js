import { CMCCanister } from "./index";
import { shouldReExportAllMembers } from "../utils/test.utils";

describe("@icp-sdk/cmc", () => {
  it("should re-export CMCCanister", () => {
    expect(CMCCanister).not.toBeUndefined();
  });

  shouldReExportAllMembers({
    source: "@dfinity/cmc",
    reexport: "@icp-sdk/canisters/cmc",
  });
});
