import { readFileSync } from "fs";
import { cp } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// TODO: duplicate esbuild.mjs
const pkgJson = (packageJson) => {
  const json = readFileSync(packageJson, "utf8");
  const { peerDependencies, exports } = JSON.parse(json);
  return { peerDependencies: peerDependencies ?? {}, exports: exports ?? {} };
};

const { exports: workspaceExports } = pkgJson(
  join(process.cwd(), "package.json"),
);

export const copyCandid = async () => {
  // TODO: duplicate esbuild.mjs
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const scriptsFolder = __dirname;

  const paths = Object.entries(workspaceExports)
    .filter(([key]) => key !== ".")
    .map(([key, { import: i }]) => {
      // trim leading ./ otherwise join() treat the . as a folder
      // replace remaining / for mapping with old pattern like ledger-icrc
      const sourceFile = key.replace(/^\.\//, "").replace(/\//, "-");
      const source = join(
        scriptsFolder,
        "..",
        "packages",
        sourceFile,
        "src",
        "candid",
      );

      const destinationFile = i.replace(/^\.\//, "");
      const destination = join(
        dirname(join(process.cwd(), destinationFile)),
        "candid",
      );

      return { source, destination };
    });

  await Promise.all(
    paths.map(({ source, destination }) =>
      cp(source, destination, { recursive: true }),
    ),
  );
};
