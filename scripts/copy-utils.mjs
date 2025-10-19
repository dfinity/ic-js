import { join } from "node:path";
import { readPackageJson, SCRIPTS_PATH } from "./build.utils.mjs";

const { exports: workspaceExports } = readPackageJson(
  join(process.cwd(), "package.json"),
);

/**
 * Builds a list of path pairs mapping each single-entry legacy library
 * to its corresponding path within the multi-entry library.
 *
 * Example:
 * { source: "packages/ckbtc/src", destination: "packages/canisters/src/ckbtc" }
 *
 * The mapping is derived from the `"exports"` field of the multi-library's `package.json`.
 *
 * @returns {{source: string, destination: string}[]}
 * An array of objects, each containing the source and destination paths.
 */
export const sourceExportPaths = () =>
  Object.keys(workspaceExports)
    // The root index of the multi-paths library does not correspond to any library or logiy.
    .filter((key) => key !== ".")
    .map((key) => {
      // - trim leading ./ otherwise join() treat the . as a folder
      const lib = key.replace(/^\.\//, "");

      // e.g. ledger/icrc -> ledger-icrc
      const singlePathLib = lib.replace(/\//, "-");
      const source = join(SCRIPTS_PATH, "..", "packages", singlePathLib, "src");

      const destination = join(process.cwd(), "src", lib);

      return { source, destination };
    });
