import { shouldReExportAllMembers } from "../utils/test.utils";
import { CkETHMinterCanister, CkETHOrchestratorCanister } from "./index";

describe("@icp-sdk/cketh", () => {
  it("should re-export CkETHMinterCanister", () => {
    expect(CkETHMinterCanister).not.toBeUndefined();
  });

  it("should re-export CkETHOrchestratorCanister", () => {
    expect(CkETHOrchestratorCanister).not.toBeUndefined();
  });

  shouldReExportAllMembers({
    source: "@dfinity/cketh",
    reexport: "@icp-sdk/canisters/cketh",
  });
});
