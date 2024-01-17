import { Principal } from "@dfinity/principal";
import { encodePrincipalToEthAddress } from "./minter.utils";

describe("minter-utils", () => {
  const mockPrincipal = Principal.from(
    "esd5n-wtdqq-kimdw-qrxjr-7luer-zjhez-hsauj-pu5ox-2y6ov-g53g4-xqe",
  );
  const ethEncodedPrincipal =
    "0x1d638414860ed08dd31fae848e527264f20512fa75d7d63cea9bbb372f020000";

  it("should encode a principal into into a fixed 32-byte representation suitable for calling Ethereum smart contracts", () => {
    expect(encodePrincipalToEthAddress(mockPrincipal)).toEqual(
      ethEncodedPrincipal,
    );
  });
});
