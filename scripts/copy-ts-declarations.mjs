import { spawn as spawnCommand } from "child_process";
import { sourceExportPaths } from "./copy-utils.mjs";

/**
 * Generates TypeScript declaration files (`.d.ts`) for a multi-entry library
 * by running `tsc --emitDeclarationOnly` in each exported workspace package.
 *
 * @returns {Promise<void>} Resolves when all declaration files have been generated successfully.
 */
export const copyTsDeclarations = async () => {
  const paths = sourceExportPaths();

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
