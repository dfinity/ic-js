import esbuild from "esbuild";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const peerDependencies = (packageJson) => {
  const json = readFileSync(packageJson, "utf8");
  const { peerDependencies } = JSON.parse(json);
  return peerDependencies ?? {};
};

/** Root peerDependencies are common external dependencies for all libraries of the mono-repo */
const rootPeerDependencies = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const packageJson = join(__dirname, "../package.json");
  return peerDependencies(packageJson);
};

const commonPeerDependencies = rootPeerDependencies();
const workspacePeerDependencies = peerDependencies(
  join(process.cwd(), "package.json"),
);
const externalPeerDependencies = [
  ...Object.keys(commonPeerDependencies),
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
      outdir: multi === true ? process.cwd() : join(dist, "browser"),
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
            outfile: join(dist, "node", "index.mjs"),
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

const writeBrowserRootEntry = () => {
  // an entry for the browser as default
  writeFileSync(join(dist, "index.js"), "export * from './browser/index.js';");
};

const writeNodeCjsRootEntry = () => {
  writeFileSync(
    join(dist, "index.cjs.js"),
    "module.exports = require('./cjs/index.cjs.js');",
  );
};

/**
 * Build the libraries for the browser and Node.
 * @param multi True to generate a subpath-only import library.
 */
export const build = ({ multi, nodeFormat } = { multi: false, nodeFormat: "esm" }) => {
  createDistFolder();

  buildBrowser({ multi });
  buildNode({ format: nodeFormat, multi });

  if (!multi) {
    writeBrowserRootEntry();
  }

  if (nodeFormat === "cjs") {
    writeNodeCjsRootEntry();
  }
};
