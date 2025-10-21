import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const SCRIPTS_PATH = __dirname;

// TODO: readFullPackageJson -> readPackageJson and readPackageJson -> readPackageJsonPeerAndExports
/**
 * Read the package.json of the package (library) to build.
 */
export const readFullPackageJson = (packageJson) => {
  const json = readFileSync(packageJson, "utf8");
  return JSON.parse(json);
};

/**
 * Read the peer dependencies and exports of the package.json of the package (library) to build.
 */
export const readPackageJson = (packageJson) => {
  const json = readFileSync(packageJson, "utf8");
  const { peerDependencies, exports } = JSON.parse(json);
  return { peerDependencies: peerDependencies ?? {}, exports: exports ?? {} };
};

/**
 * Root peerDependencies are common external dependencies for all libraries of the mono-repo.
 */
export const rootPeerDependencies = () => {
  const packageJson = join(SCRIPTS_PATH, "../package.json");
  const { peerDependencies } = readPackageJson(packageJson);
  return peerDependencies;
};
