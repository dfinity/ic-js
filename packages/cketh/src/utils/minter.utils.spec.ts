import { Principal } from "@dfinity/principal";
import { encodePrincipalToEthAddress } from "./minter.utils";

describe("minter-utils", () => {
  const mockPrincipalExample1 = Principal.from(
    "esd5n-wtdqq-kimdw-qrxjr-7luer-zjhez-hsauj-pu5ox-2y6ov-g53g4-xqe",
  );
  const ethExample1 =
    "0x1d638414860ed08dd31fae848e527264f20512fa75d7d63cea9bbb372f020000";

  const mockPrincipalExample2 = Principal.from(
    "auycm-ouxjf-el73p-7cfpm-73w3q-fd7xc-ubevq-ea4vt-vpe2n-rs7e5-qqe",
  );
  const ethExample2 =
    "0x1d974948bfedff115ecfeedb8147fb8a8125604072b3abc9a6c65f2761020000";

  const mockPrincipalExample3 = Principal.from(
    "ouoed-xoejt-4ssko-nf4tu-w3wbu-x2lz7-qfili-67oyv-kz4kf-nmo7q-yqe",
  );
  const ethExample3 =
    "0x1dc44cf92929cd2f274b6ec1a5f4bcfe0542d1efbb155678a2b58efc31020000";

  it("should encode principal into fixed 32-byte representation suitable for calling Ethereum smart contracts", () => {
    expect(encodePrincipalToEthAddress(mockPrincipalExample1)).toEqual(
      ethExample1,
    );

    expect(encodePrincipalToEthAddress(mockPrincipalExample2)).toEqual(
      ethExample2,
    );

    expect(encodePrincipalToEthAddress(mockPrincipalExample3)).toEqual(
      ethExample3,
    );
  });
});
