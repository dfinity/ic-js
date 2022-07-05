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
  packageJson.version = `${packageJson.version}-nightly-${new Date()
    .toISOString()
    .slice(0, 10)}`;
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2), "utf-8");
};

updateVersion();
