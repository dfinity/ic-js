import { shouldReExportAllMembers } from "../utils/test.utils";
import { BitcoinCanister, CkBTCMinterCanister } from "./index";

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
