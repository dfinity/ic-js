import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { readFullPackageJson } from "./build.utils.mjs";

const pkgJsonPath = join(process.cwd(), "package.json");

export const removeDfinityDependencies = async () => {
  const pkgJson = readFullPackageJson(pkgJsonPath);

  const { dependencies, ...rest } = pkgJson;

  const filteredDependencies = Object.entries(dependencies ?? {}).filter(
    ([key]) => !key.includes("@dfinity/"),
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
};
