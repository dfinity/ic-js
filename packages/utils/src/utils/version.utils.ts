const AMOUNT_VERSION_PARTS = 3;
const addZeros = ({
  nums,
  amountZeros,
}: {
  nums: number[];
  amountZeros: number;
}): number[] =>
  amountZeros > nums.length
    ? [...nums, ...[...Array(amountZeros - nums.length).keys()].map(() => 0)]
    : nums;

const convertToNumber = (versionStringPart: string): number => {
  if (!Number.isNaN(Number(versionStringPart))) {
    return Number(versionStringPart);
  }
  const strippedVersion = versionStringPart.split("").reduce((acc, char) => {
    if (Number.isNaN(Number(char))) {
      return acc;
    }
    return acc + char;
  }, "");
  return Number(strippedVersion);
};
/**
 * Returns true if the current version is smaller than the minVersion, false if equal or bigger.
 * Tags after patch version are ignored, e.g. 1.0.0-beta.1 is considered equal to 1.0.0.
 *
 * @param {Object} params
 * @param {string} params.minVersion Ex: "1.0.0"
 * @param {string} params.currentVersion Ex: "2.0.0"
 * @returns boolean
 */
export const smallerVersion = ({
  minVersion,
  currentVersion,
}: {
  minVersion: string;
  currentVersion: string;
}): boolean => {
  const minVersionStandarized = addZeros({
    nums: minVersion.split(".").map(convertToNumber),
    amountZeros: AMOUNT_VERSION_PARTS,
  }).join(".");
  const currentVersionStandarized = addZeros({
    nums: currentVersion.split(".").map(convertToNumber),
    amountZeros: AMOUNT_VERSION_PARTS,
  }).join(".");
  // Versions need to have the same number of parts to be comparable
  // Source: https://stackoverflow.com/a/65687141
  return (
    currentVersionStandarized.localeCompare(minVersionStandarized, undefined, {
      numeric: true,
      sensitivity: "base",
    }) < 0
  );
};
