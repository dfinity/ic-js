import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const SCRIPTS_PATH = __dirname;

/**
 * Read the package.json of the package (library) to build.
 */
export const readPackageJson = (packageJson) => {
  const json = readFileSync(packageJson, "utf8");
  const { peerDependencies } = JSON.parse(json);
  return { peerDependencies: peerDependencies ?? {} };
};

/**
 * Root peerDependencies are common external dependencies for all libraries of the mono-repo.
 */
export const rootPeerDependencies = () => {
  const packageJson = join(SCRIPTS_PATH, "../package.json");
  const { peerDependencies } = readPackageJson(packageJson);
  return peerDependencies;
};
