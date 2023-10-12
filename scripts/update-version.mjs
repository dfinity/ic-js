import { existsSync, readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import { join } from "path";

// The suffix we use to publish to npm wip version of the libs
const SUFFIX = "next";

const nextVersion = async ({ project, currentVersion }) => {
  const version = `${currentVersion}-${SUFFIX}-${new Date()
    .toISOString()
    .slice(0, 10)}`;

  const { versions } = await (
    await fetch(`http://registry.npmjs.org/@dfinity/${project}`)
  ).json();

  // The wip version has never been published
  if (versions[version] === undefined) {
    return version;
  }

  // There was some wip versions already published so, we increment the version number
  const count = Object.keys(versions).filter((v) => v.includes(version)).length;
  return `${version}.${count}`;
};

const updateVersion = async () => {
  if (process.argv.length !== 3) {
    console.log("Invalid arguments: node update-version.mjs nns|sns|etc.");
    return;
  }

  const project = process.argv[2];

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

  // Peer dependencies need to point to wip references - e.g. @dfinity/utils@0.0.1-next
  const peerDependencies = Object.entries(
    packageJson.peerDependencies ?? {}
  ).reduce((acc, [key, _value]) => {
    acc[key] = `*`;
    return acc;
  }, {});

  writeFileSync(
    packagePath,
    JSON.stringify(
      {
        ...packageJson,
        version,
        ...(Object.keys(peerDependencies).length > 0 && { peerDependencies }),
      },
      null,
      2
    ),
    "utf-8"
  );
};

await updateVersion();
