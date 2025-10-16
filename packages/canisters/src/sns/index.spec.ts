import {
  initSnsWrapper,
  SnsGovernanceCanister,
  SnsGovernanceTestCanister,
  SnsRootCanister,
  SnsSwapCanister,
  SnsWrapper,
} from "./index";
import { shouldReExportAllMembers } from "../utils/test.utils";

describe("@icp-sdk/sns", () => {
  it("should re-export SnsGovernanceCanister", () => {
    expect(SnsGovernanceCanister).not.toBeUndefined();
  });

  it("should re-export SnsGovernanceTestCanister", () => {
    expect(SnsGovernanceTestCanister).not.toBeUndefined();
  });

  it("should re-export SnsRootCanister", () => {
    expect(SnsRootCanister).not.toBeUndefined();
  });

  it("should re-export initSnsWrapper", () => {
    expect(initSnsWrapper).not.toBeUndefined();
  });

  it("should re-export SnsWrapper", () => {
    expect(SnsWrapper).not.toBeUndefined();
  });

  it("should re-export SnsSwapCanister", () => {
    expect(SnsSwapCanister).not.toBeUndefined();
  });

  shouldReExportAllMembers({
    source: "@dfinity/sns",
    reexport: "@icp-sdk/canisters/sns",
  });
});
