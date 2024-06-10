import constants from "bip44-constants";
import { generateDerivationPath } from "./bitcoin.utils";

describe("generateDerivationPath", () => {
  it("should generate a valid path for a known coin type as a string", () => {
    const coinType = constants[0][2];
    const path = generateDerivationPath(coinType);
    const expectedCoinTypeValue = Object.entries(constants).find(
      ([, [, , name]]) => name.toLowerCase() === coinType.toLowerCase(),
    )?.[0];

    expect(path).toBe(`m/44'/${expectedCoinTypeValue}'/0'/0/0`);
  });

  it("should generate a valid path for a known coin type as a number", () => {
    const coinType = constants[0][0];
    const path = generateDerivationPath(coinType);

    expect(path).toBe(`m/44'/${coinType}'/0'/0/0`);
  });

  it("should generate a valid path with custom account, change, and address index", () => {
    const coinType = constants[0][2];
    const account = 1;
    const change = 1;
    const addressIndex = 5;
    const path = generateDerivationPath(
      coinType,
      account,
      change,
      addressIndex,
    );
    const expectedCoinTypeValue = Object.entries(constants).find(
      ([, [, , name]]) => name.toLowerCase() === coinType.toLowerCase(),
    )?.[0];

    expect(path).toBe(
      `m/44'/${expectedCoinTypeValue}'/${account}'/${change}/${addressIndex}`,
    );
  });

  it("should throw an error if coinType is an empty string", () => {
    expect(() => {
      generateDerivationPath("");
    }).toThrow("coinType cannot be empty");
  });

  it("should throw an error for an invalid coin type as a string", () => {
    let invalidCoinType = "11111111111";
    while (constants.some((row) => row[1] === invalidCoinType)) {
      invalidCoinType = (parseInt(invalidCoinType) + 1).toString();
    }

    expect(() => {
      generateDerivationPath(invalidCoinType);
    }).toThrow(
      new RegExp(`^Invalid coinType: ${invalidCoinType}. Valid options are:`),
    );
  });

  it("should throw an error for an invalid coin type as a number", () => {
    const invalidCoinType = constants.length + 1;

    expect(() => {
      generateDerivationPath(invalidCoinType);
    }).toThrow(
      new RegExp(
        `^Invalid coinType number: ${invalidCoinType}. Valid options are:`,
      ),
    );
  });
});
