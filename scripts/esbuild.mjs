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

const buildBrowser = () => {
  esbuild
    .build({
      entryPoints,
      outdir: join(dist, "browser"),
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

const buildNode = ({ format }) => {
  esbuild
    .build({
      entryPoints: ["src/index.ts"],
      outfile:
        format === "cjs"
          ? join(dist, "cjs", "index.cjs.js")
          : join(dist, "node", "index.mjs"),
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

export const build = ({ nodeFormat } = { nodeFormat: "esm" }) => {
  createDistFolder();

  buildBrowser();
  buildNode({ format: nodeFormat });

  writeBrowserRootEntry();

  if (nodeFormat === "cjs") {
    writeNodeCjsRootEntry();
  }
};
