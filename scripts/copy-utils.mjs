import { dirname, join } from "node:path";
import { readPackageJson, SCRIPTS_PATH } from "./build.utils.mjs";

const { exports: workspaceExports } = readPackageJson(
  join(process.cwd(), "package.json"),
);

/**
 * Builds a list of path pairs mapping each single-entry legacy library
 * to its corresponding path within the multi-entry library.
 *
 * Example:
 * { source: "packages/ckbtc", destination: "packages/canisters/ckbtc" }
 *
 * The mapping is derived from the `"exports"` field of the multi-library's `package.json`.
 *
 * @returns {{source: string, destination: string}[]}
 * An array of objects, each containing the source and destination paths.
 */
export const sourceExportPaths = () =>
  Object.entries(workspaceExports)
    // The root index does not contain any logic or Candid files.
    .filter(([key]) => key !== ".")
    .map(([key, { import: i }]) => {
      // - trim leading ./ otherwise join() treat the . as a folder
      // - replace remaining "/" with "-" to match the folder naming pattern
      // used for single-path libraries (e.g., ledger/icrc -> ledger-icrc)
      const singlePathLib = key.replace(/^\.\//, "").replace(/\//, "-");
      const source = join(SCRIPTS_PATH, "..", "packages", singlePathLib);

      // - trim leading ./ otherwise join() treat the . as a folder
      // - example: "import": "./ckbtc/index.js" → "/ckbtc/index.js"
      // → absolute path to "packages/canisters/ckbtc"
      const multiPathsLibExport = dirname(
        join(process.cwd(), i.replace(/^\.\//, "")),
      );

      return { source, destination: multiPathsLibExport };
    });
