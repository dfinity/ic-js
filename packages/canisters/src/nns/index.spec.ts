import { shouldReExportAllMembers } from "../utils/test.utils";
import {
  GenesisTokenCanister,
  GovernanceCanister,
  GovernanceTestCanister,
  SnsWasmCanister,
} from "./index";

describe("@icp-sdk/nns", () => {
  it("should re-export GovernanceCanister", () => {
    expect(GovernanceCanister).not.toBeUndefined();
  });

  it("should re-export SnsWasmCanister", () => {
    expect(SnsWasmCanister).not.toBeUndefined();
  });

  it("should re-export GenesisTokenCanister", () => {
    expect(GenesisTokenCanister).not.toBeUndefined();
  });

  it("should re-export GovernanceTestCanister", () => {
    expect(GovernanceTestCanister).not.toBeUndefined();
  });

  shouldReExportAllMembers({
    source: "@dfinity/nns",
    reexport: "@icp-sdk/canisters/nns",
  });
});
