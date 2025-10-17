import { cp } from "node:fs/promises";
import { join } from "node:path";
import { sourceExportPaths } from "./copy-utils.mjs";

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
  const paths = sourceExportPaths().map(({ source, destination }) => ({
    source: join(source, "src", "candid"),
    destination: join(destination, "candid"),
  }));

  await Promise.all(
    paths.map(({ source, destination }) =>
      cp(source, destination, { recursive: true }),
    ),
  );
};
