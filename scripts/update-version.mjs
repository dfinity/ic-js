import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const updateVersion = () => {
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
  const version = `${packageJson.version}-nightly-${new Date()
    .toISOString()
    .slice(0, 10)}`;

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

updateVersion();
