import { cp } from "node:fs/promises";
import { join } from "node:path";
import { sourceExportPaths } from "./copy-utils.mjs";

/**
 * Copies the source code of a **single-entry** library into every
 * subpath of a **multi-entry (subpaths)** library.
 *
 * The multi-entry targets are discovered from the root `package.json`'s
 * `exports` field. For each export entry, this function mirrors the single
 * library's `src/` into the corresponding destination path.
 *
 * The logic assumes:
 * - The root entry (`"."`) has no logic and thus no files to copy.
 * - Each source files are located under:
 *   `packages/<subentry>/src/`
 * - The output destination is inferred from the `import` path
 *   defined in the corresponding export entry.
 *
 * @returns {Promise<void>} A promise that resolves when all files have been copied.
 */
export const copyLibs = async () => {
  const paths = sourceExportPaths().map(({ source, destination }) => ({
    source: join(source, "src"),
    destination: join(destination, "candid"),
  }));

  await Promise.all(
    paths.map(({ source, destination }) =>
      cp(source, destination, { recursive: true }),
    ),
  );
};
