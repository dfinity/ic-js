import { cp } from "node:fs/promises";
import { dirname, join } from "path";
import { readPackageJson, SCRIPTS_PATH } from "./build.utils.mjs";

const { exports: workspaceExports } = readPackageJson(
  join(process.cwd(), "package.json"),
);

/**
 * Copies all Candid interface definition files from their source packages
 * into their corresponding build output folders.
 *
 * This function is designed for multi-entry (subpath) libraries, where each
 * subentry exports its own module. The `exports` field in the root
 * package.json is used to determine which submodules exist and where their
 * compiled JavaScript resides.
 *
 * The logic assumes:
 * - The root entry (`"."`) has no logic and thus no Candid files to copy.
 * - Each subentry's source Candid files are located under:
 *   `packages/<subentry>/src/candid/`
 * - The build output destination is inferred from the `import` path
 *   defined in the corresponding export entry.
 *
 * @returns {Promise<void>} A promise that resolves when all Candid files have been copied.
 */
export const copyCandid = async () => {
  const paths = Object.entries(workspaceExports)
    // The root index does not contain any logic or Candid files.
    .filter(([key]) => key !== ".")
    .map(([key, { import: i }]) => {
      // - trim leading ./ otherwise join() treat the . as a folder
      // - replace remaining "/" with "-" to match the folder naming pattern
      // used for single-path libraries (e.g., ledger/icrc -> ledger-icrc)
      const singlePathLib = key.replace(/^\.\//, "").replace(/\//, "-");
      const source = join(
        SCRIPTS_PATH,
        "..",
        "packages",
        singlePathLib,
        "src",
        "candid",
      );

      // - trim leading ./ otherwise join() treat the . as a folder
      // - example: "import": "./ckbtc/index.js" → "/ckbtc/index.js"
      // → absolute path to "packages/canisters/ckbtc"
      const multiPathsLibExport = dirname(
        join(process.cwd(), i.replace(/^\.\//, "")),
      );
      const destination = join(multiPathsLibExport, "candid");

      return { source, destination };
    });

  await Promise.all(
    paths.map(({ source, destination }) =>
      cp(source, destination, { recursive: true }),
    ),
  );
};
