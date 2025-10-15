import { BitcoinCanister, CkBTCMinterCanister } from "./ckbtc";
import { shouldReExportAllMembers } from "./utils/test.utils";

describe("@icp-sdk/ckbtc", () => {
  it("should re-export CkBTCMinterCanister", () => {
    expect(CkBTCMinterCanister).not.toBeUndefined();
  });

  it("should re-export BitcoinCanister", () => {
    expect(BitcoinCanister).not.toBeUndefined();
  });

  shouldReExportAllMembers({
    source: "@dfinity/ckbtc",
    reexport: "@icp-sdk/canisters/ckbtc",
  });
});
