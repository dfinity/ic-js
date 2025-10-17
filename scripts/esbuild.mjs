import esbuild from "esbuild";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { readPackageJson, rootPeerDependencies } from "./build.utils.mjs";

const { peerDependencies: workspacePeerDependencies } = readPackageJson(
  join(process.cwd(), "package.json"),
);

const externalPeerDependencies = [
  ...Object.keys(rootPeerDependencies()),
  ...Object.keys(workspacePeerDependencies),
];

const dist = join(process.cwd(), "dist");

const createDistFolder = () => {
  if (!existsSync(dist)) {
    mkdirSync(dist);
  }
};

const entryPoints = readdirSync(join(process.cwd(), "src"))
  .filter(
    (file) =>
      !file.includes("test") &&
      !file.includes("test.utils") &&
      !file.includes("spec") &&
      !file.includes("mock") &&
      !file.endsWith(".swp") &&
      statSync(join(process.cwd(), "src", file)).isFile(),
  )
  .map((file) => `src/${file}`);

const buildBrowser = ({ multi } = { multi: false }) => {
  esbuild
    .build({
      entryPoints,
      outdir: multi === true ? process.cwd() : dist,
      bundle: true,
      sourcemap: true,
      minify: true,
      splitting: true,
      format: "esm",
      define: { global: "window" },
      target: ["esnext"],
      platform: "browser",
      conditions: ["worker", "browser"],
      external: externalPeerDependencies,
    })
    .catch(() => process.exit(1));
};

const buildNode = ({ multi, format }) => {
  esbuild
    .build({
      ...(multi === true
        ? {
            entryPoints,
            outdir: process.cwd(),
            outExtension: { ".js": ".mjs" },
          }
        : {
            entryPoints: ["src/index.ts"],
            outfile:
              format === "cjs"
                ? join(dist, "cjs", "index.cjs.js")
                : join(dist, "index.mjs"),
          }),
      bundle: true,
      sourcemap: true,
      minify: true,
      ...(format === "esm" && {
        format,
        banner: {
          js: "import { createRequire as topLevelCreateRequire } from 'module';\n const require = topLevelCreateRequire(import.meta.url);",
        },
      }),
      platform: "node",
      target: ["node20", "esnext"],
      external: externalPeerDependencies,
    })
    .catch(() => process.exit(1));
};

const writeNodeCjsRootEntry = () => {
  writeFileSync(
    join(dist, "index.cjs.js"),
    "module.exports = require('./cjs/index.cjs.js');",
  );
};

/**
 * Build the libraries for the browser and Node.
 * @param multi True to generate a subpath-only import library
 * @param nodeFormat Output format for NodeJS bundle: esm (default) or cjs
 */
export const build = (
  { multi, nodeFormat } = { multi: false, nodeFormat: "esm" },
) => {
  if (multi === undefined) {
    console.error("Missing parameter 'multi'");
    process.exit(1);
  }

  if (nodeFormat === undefined) {
    console.error("Missing parameter 'nodeFormat'");
    process.exit(1);
  }

  if (!multi) {
    createDistFolder();
  }

  buildBrowser({ multi });
  buildNode({ format: nodeFormat, multi });

  if (nodeFormat === "cjs") {
    writeNodeCjsRootEntry();
  }
};
