import constants from "bip44-constants";

/**
 * Generates a BIP-44 derivation path to be used to derive an address.
 *
 * BIP-44 defines a specific structure for hierarchical deterministic (HD) wallets.
 * The derivation path is constructed as: m / purpose' / coin_type' / account' / change / address_index
 * where the ' indicates that the value is hardened.
 * The purpose is a constant set to 44' (or 0x8000002C) following the [BIP-43](https://github.com/bitcoin/bips/blob/master/bip-0043.mediawiki) recommendation.
 *
 * @param coinType - Type of the coin, either as a string, a symbol or number (e.g., "bitcoin" or "BTC" or 0). See [SLIP-0044](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) for a list of supported coins.
 * @param account - Account index, allows for multiple accounts (default: 0)
 * @param change - Change index, differentiates between external (0) and internal (1) addresses (default: 0)
 * @param addressIndex - Index of the address (default: 0)
 * @returns The BIP-44 derivation path as a string
 * @throws Error if the coinType is invalid
 */
export const generateDerivationPath = (
  coinType: string | number,
  account: number = 0,
  change: 0 | 1 = 0,
  addressIndex: number = 0,
): string => {
  // Purpose is a constant set to 44' (or 0x8000002C) following the BIP-43 recommendation.
  // It indicates that the subtree of the node is used according to BIP-44 specification.
  // Source: https://github.com/bitcoin/bips/blob/master/bip-0043.mediawiki
  const purpose: number = 44;

  const getCoinType = (coinType: string | number): number => {
    if (coinType === "") {
      throw new Error("coinType cannot be empty");
    }
    if (typeof coinType === "string") {
      const coinTypeEntry = Object.entries(constants).find(
        ([, [, symbol, name]]) =>
          symbol.toLowerCase() === coinType.toLowerCase() ||
          name.toLowerCase() === coinType.toLowerCase(),
      );
      if (!coinTypeEntry) {
        throw new Error(
          `Invalid coinType: ${coinType}. Valid options are: ${Object.values(
            constants,
          )
            .map(
              ([, [symbol, name]]) => `${name}${symbol ? ` (${symbol})` : ""}`,
            )
            .join(", ")}`,
        );
      }
      return Number(coinTypeEntry[0]);
    }

    if (!constants.some(row => row[0] === coinType)) {
      throw new Error(
        `Invalid coinType number: ${coinType}. Valid options are: ${Object.keys(constants).join(", ")}`,
      );
    }

    return coinType;
  };

  const coinTypeValue = getCoinType(coinType);
  return `m/${purpose}'/${coinTypeValue}'/${account}'/${change}/${addressIndex}`;
};
