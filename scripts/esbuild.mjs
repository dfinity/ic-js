import esbuild from "esbuild";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

/**
 * Read the package.json of the package (library) to build.
 */
const pkgJson = (packageJson) => {
  const json = readFileSync(packageJson, "utf8");
  const { peerDependencies, exports } = JSON.parse(json);
  return { peerDependencies: peerDependencies ?? {}, exports: exports ?? {} };
};

/**
 * Root peerDependencies are common external dependencies for all libraries of the mono-repo
 */
const rootPeerDependencies = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const packageJson = join(__dirname, "../package.json");
  const { peerDependencies } = pkgJson(packageJson);
  return peerDependencies;
};

const {
  peerDependencies: workspacePeerDependencies,
  exports: workspaceExports,
} = pkgJson(join(process.cwd(), "package.json"));
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

/**
 * When we build a subpaths-only library, we discover the files to build
 * based on the exports of the package.json which is the field that rules what the consumer
 * sees and what are the related bundled files.
 *
 * We assume that the name of the TypeScript source file to use to build the related
 * JavaScript file are similar.
 *
 * @returns {string[]} Absolute paths to the source files to bundle.
 */
const multiPathsLibEntryPoints = () => {
  const paths = Object.values(workspaceExports)
    .filter(({ import: i }) => typeof i === "string")
    .map(({ import: i }) => {
      // trim leading ./ otherwise join() treat the . as a folder
      // replace extension js from its corresponding ts file
      const file = i.replace(/^\.\//, "").replace(/\.js$/, ".ts");
      return join(process.cwd(), "src", file);
    });

  if (paths.length === 0) {
    console.error("No source files to bundle.");
    process.exit(1);
  }

  const unknownPaths = paths.filter((path) => !existsSync(path));

  if (unknownPaths.length > 0) {
    console.error(`Some source files are missing: ${unknownPaths.join(",")}`);
    process.exit(1);
  }

  return paths;
};

/**
 * For single entry library there is, well, a single entry which we always
 * define as index.ts
 * @type {string} The source file
 */
const singleLibEntryPoint = "src/index.ts";

const buildBrowser = ({ multi } = { multi: false }) => {
  esbuild
    .build({
      ...(multi === true
        ? {
            entryPoints: multiPathsLibEntryPoints(),
            outdir: process.cwd(),
            outExtension: { ".js": ".mjs" },
          }
        : {
            entryPoints: [singleLibEntryPoint],
            outdir: dist,
          }),
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
            entryPoints: multiPathsLibEntryPoints(),
            outdir: process.cwd(),
          }
        : {
            entryPoints: [singleLibEntryPoint],
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
    "module.exports = require('./cjs/index.js');",
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
