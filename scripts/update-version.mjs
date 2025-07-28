import { existsSync, readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import { join } from "path";
import { compare } from "semver";

// The project - name of the library in the workspace - and suffix we use to publish to npm as wip version
const [project, tag] = process.argv.slice(2);
const suffix = tag !== undefined && tag !== "" ? tag : "next";

const removeVersions = async ({ project }) => {
  const { versions } = await (
    await fetch(`https://registry.npmjs.org/@dfinity/${project}`)
  ).json();

  return versions;
};

const suffixVersion = () =>
  `${suffix}-${new Date().toISOString().slice(0, 10)}`;

const nextVersion = async ({ project, currentVersion }) => {
  const version = `${currentVersion}-${suffixVersion()}`;

  const versions = await removeVersions({ project });

  // The wip version has never been published
  if (versions[version] === undefined) {
    return version;
  }

  // There was some wip versions already published so, we increment the version number
  const count = Object.keys(versions).filter((v) => v.includes(version)).length;
  return `${version}.${count}`;
};

const latestVersion = async ({ project, currentVersion }) => {
  const version = suffixVersion();

  const versions = await removeVersions({ project });

  const [latestVersion] = Object.keys(versions)
    .filter((v) => v.includes(version))
    .sort((a, b) => compare(b, a));

  return latestVersion ?? currentVersion;
};

const updatePeerDependencies = async (peerDependencies = {}) => {
  const mapPeerDependency = async ({ key, value }) => {
    if (
      ![
        "@dfinity/utils",
        "@dfinity/ledger-icrc",
        "@dfinity/ledger-icp",
      ].includes(key)
    ) {
      return [key, value];
    }

    const version = await latestVersion({
      project: key.replace("@dfinity/", ""),
      currentVersion: value.replace("^", ""),
    });
    return [key, version];
  };

  const updatedPeerDependencies = [];

  for (const [key, value] of Object.entries(peerDependencies)) {
    updatedPeerDependencies.push(await mapPeerDependency({ key, value }));
  }

  return updatedPeerDependencies.reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {},
  );
};

const updateVersion = async () => {
  if (project === undefined || process.argv.length > 4) {
    console.log(
      "Invalid arguments: node update-version.mjs nns|sns|etc. [tag]",
    );
    process.exit(1);
  }

  const packagePath = join(process.cwd(), "packages", project, "package.json");

  if (!existsSync(packagePath)) {
    console.log(`Target ${packagePath} does not exist.`);
    return;
  }

  const packageJson = JSON.parse(readFileSync(packagePath, "utf-8"));

  // Build wip version number
  const version = await nextVersion({
    project,
    currentVersion: packageJson.version,
  });

  const peerDependencies = await updatePeerDependencies(
    packageJson.peerDependencies,
  );

  writeFileSync(
    packagePath,
    JSON.stringify(
      {
        ...packageJson,
        version,
        ...(Object.keys(peerDependencies).length > 0 && { peerDependencies }),
      },
      null,
      2,
    ),
    "utf-8",
  );
};

await updateVersion();
