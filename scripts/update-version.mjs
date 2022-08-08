import { existsSync, readFileSync, writeFileSync } from "fs";
import fetch from "node-fetch";
import { join } from "path";

const nextVersion = async ({ project, currentVersion }) => {
  const nightlyVersion = `${currentVersion}-nightly-${new Date()
    .toISOString()
    .slice(0, 10)}`;

  const { versions } = await (
    await fetch(`http://registry.npmjs.org/@dfinity/${project}`)
  ).json();

  // The nightly version has never been published
  if (versions[nightlyVersion] === undefined) {
    return nightlyVersion;
  }

  // There was some nightly versions already published so, we increment the version number
  const count = Object.keys(versions).filter((v) =>
    v.includes(nightlyVersion)
  ).length;
  return `${nightlyVersion}.${count}`;
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

  // Update nightly version
  const version = await nextVersion({
    project,
    currentVersion: packageJson.version,
  });

  // Peer dependencies nightly references - e.g. @dfinity/utils@0.0.1-nightly
  const peerDependencies = Object.entries(
    packageJson.peerDependencies ?? {}
  ).reduce((acc, [key, value]) => {
    acc[key] = `${value}-nightly`;
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
