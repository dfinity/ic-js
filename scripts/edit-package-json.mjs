import { existsSync } from "node:fs";
import { cp, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { readFullPackageJson } from "./build.utils.mjs";

const pkgJsonPath = join(process.cwd(), "package.json");
const pkgJsonBackupPath = join(process.cwd(), "package.json.backup");

/**
 * Remove dependencies from the package.json of a library matching a given key.
 * @param {{ key?: string }} [opts] - Key to match (default: "@dfinity/").
 */
export const removeDependencies = async (
  { key: keyToReplace } = { key: "@dfinity/" },
) => {
  await cp(pkgJsonPath, pkgJsonBackupPath);

  console.log("package.json.backup saved");

  const pkgJson = readFullPackageJson(pkgJsonPath);

  const { dependencies, ...rest } = pkgJson;

  const filteredDependencies = Object.entries(dependencies ?? {}).filter(
    ([key]) => !key.includes(keyToReplace),
  );

  const pkgJsonForPublishing = {
    ...rest,
    ...(filteredDependencies.length > 0 &&
      filteredDependencies.reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }))),
  };

  await writeFile(pkgJsonPath, JSON.stringify(pkgJsonForPublishing, null, 2));

  console.log("dependencies filtered from package.json");
};

/**
 * Re-add dependencies by overwritting the package.json
 * of a lib with its backup.
 */
export const redoDependencies = async () => {
  if (!existsSync(pkgJsonBackupPath)) {
    console.error("No package.json.backup found");
    process.exit(1);
  }

  await cp(pkgJsonBackupPath, pkgJsonPath);

  await rm(pkgJsonBackupPath);

  console.log("package.json restored");
};
