import * as source from "@dfinity/ckbtc";
import * as reexport from "./ckbtc";
import { BitcoinCanister, CkBTCMinterCanister } from "./ckbtc";

describe("@icp-sdk/ckbtc", () => {
  it("should re-export CkBTCMinterCanister", () => {
    expect(CkBTCMinterCanister).not.toBeUndefined();
  });

  it("should re-export BitcoinCanister", () => {
    expect(BitcoinCanister).not.toBeUndefined();
  });

  it("should re-export all members", () => {
    const sourceKeys = Object.keys(source);
    const reexportKeys = Object.keys(reexport);

    expect(reexportKeys).toHaveLength(sourceKeys.length);

    for (const key of Object.keys(source)) {
      expect(reexport).toHaveProperty(key);
      expect(reexport[key]).toBe(source[key]);
    }
  });
});
