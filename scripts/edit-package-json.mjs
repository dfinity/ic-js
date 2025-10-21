import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { major } from "semver";
import { readFullPackageJson } from "./build.utils.mjs";
import { sourceExportPaths } from "./copy-utils.mjs";

const pkgJsonPath = join(process.cwd(), "package.json");

export const removeDependencies = async (
  { key: keyToReplace } = { key: "@dfinity/" },
) => {
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
};

export const redoDependencies = async () => {
  const libs = sourceExportPaths().map(({ source }) => {
    const { name, version } = readFullPackageJson(join(source, "package.json"));
    return { name, version: `^${major(version)}` };
  });

  const pkgJson = readFullPackageJson(pkgJsonPath);

  const redoPkgJson = {
    ...pkgJson,
    ...(libs.length > 0 && {
      dependencies: libs.reduce(
        (acc, { name, version }) => ({
          ...acc,
          [name]: version,
        }),
        {},
      ),
    }),
  };

  await writeFile(pkgJsonPath, JSON.stringify(redoPkgJson, null, 2));
};
