import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

// The project - name of the library in the workspace -, organisation and suffix we use to publish to npm as wip version
const [project, org, tag] = process.argv.slice(2);

const assertOrg = () => {
  if (org === undefined || org === "") {
    console.error(
      "Missing organization. Please provide either 'dfinity' or 'icp-sdk'.",
    );
    process.exit(1);
  }

  if (!["dfinity", "icp-sdk"].includes(org)) {
    console.error(
      `Invalid organization '${org}'. Expected 'dfinity' or 'icp-sdk'.`,
    );
    process.exit(1);
  }
};

assertOrg();

const suffix = tag !== undefined && tag !== "" ? tag : "next";

const nextVersion = async ({ project, currentVersion }) => {
  const version = `${currentVersion}-${suffix}-${new Date()
    .toISOString()
    .slice(0, 10)}`;

  const { versions } = await (
    await fetch(`https://registry.npmjs.org/@${org}/${project}`)
  ).json();

  // The wip version has never been published
  if (versions?.[version] === undefined) {
    return version;
  }

  // There was some wip versions already published so, we increment the version number
  const count = Object.keys(versions).filter((v) => v.includes(version)).length;
  return `${version}.${count}`;
};

const updateVersion = async () => {
  if (project === undefined || process.argv.length > 5) {
    console.log(
      "Invalid arguments: node update-version.mjs nns|sns|etc. dfinity|icp-sdk [tag]",
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

  // Peer dependencies need to reference WIP versions (e.g. @dfinity/utils@0.0.1-next),
  // which is why the specific tag is used.
  //
  // Other foundation packages, like @icp-sdk/core, are referenced with a wildcard.
  // This has proven useful when developing new features, as it allows more flexibility.
  const peerDependencies = Object.entries(
    packageJson.peerDependencies ?? {},
  ).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: key.startsWith("@dfinity")
        ? suffix
        : key.startsWith("@icp-sdk")
          ? "*"
          : value,
    }),
    {},
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
