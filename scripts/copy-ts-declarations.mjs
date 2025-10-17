import { spawn as spawnCommand } from "child_process";
import { dirname, join } from "node:path";
import { readPackageJson, SCRIPTS_PATH } from "./build.utils.mjs";

const { exports: workspaceExports } = readPackageJson(
  join(process.cwd(), "package.json"),
);

/**
 * Generates TypeScript declaration files (`.d.ts`) for a multi-entry library
 * by running `tsc --emitDeclarationOnly` in each exported workspace package.
 *
 * @returns {Promise<void>} Resolves when all declaration files have been generated successfully.
 */
export const copyTsDeclarations = async () => {
  const paths = Object.entries(workspaceExports)
    // The root index does not contain any logic.
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

  for (const { source, destination } of paths) {
    await execute({
      command: "tsc",
      args: ["--emitDeclarationOnly", "--outDir", destination],
      cwd: source,
    });
  }
};

/**
 * Execute a command in the specified folder (cwd). Useful for generating
 * TypeScript declarations using the `tsconfig.json` located at the specified
 * location.
 */
const execute = async ({ command, args, cwd }) =>
  await new Promise((resolve) => {
    const childProcess = spawnCommand(command, args ?? [], {
      stdio: "inherit",
      cwd,
    });

    childProcess.on("close", (code) => {
      if (code === 0) {
        resolve(code);
        return;
      }

      process.exit(1);
    });
  });
