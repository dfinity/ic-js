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

const dist = join(process.cwd(), "dist");

const createDistFolder = () => {
  if (!existsSync(dist)) {
    mkdirSync(dist);
  }
};

const buildEsmCjs = () => {
  const entryPoints = readdirSync(join(process.cwd(), "src"))
    .filter(
      (file) =>
        !file.includes("test") &&
        !file.includes("spec") &&
        !file.endsWith(".swp") &&
        statSync(join(process.cwd(), "src", file)).isFile(),
    )
    .map((file) => `src/${file}`);

  // esm output bundles with code splitting
  esbuild
    .build({
      entryPoints,
      outdir: "dist/esm",
      bundle: true,
      sourcemap: true,
      minify: true,
      splitting: true,
      format: "esm",
      define: { global: "window" },
      target: ["esnext"],
      platform: "browser",
      conditions: ["worker", "browser"],
      external: [
        ...Object.keys(commonPeerDependencies),
        ...Object.keys(workspacePeerDependencies),
      ],
    })
    .catch(() => process.exit(1));

  // cjs output bundle
  esbuild
    .build({
      entryPoints: ["src/index.ts"],
      outfile: "dist/cjs/index.cjs.js",
      bundle: true,
      sourcemap: true,
      minify: true,
      platform: "node",
      target: ["node16"],
      external: [
        ...Object.keys(commonPeerDependencies),
        ...Object.keys(workspacePeerDependencies),
      ],
    })
    .catch(() => process.exit(1));
};

const writeEntries = () => {
  // an entry file for cjs at the root of the bundle
  writeFileSync(join(dist, "index.js"), "export * from './esm/index.js';");

  // an entry file for esm at the root of the bundle
  writeFileSync(
    join(dist, "index.cjs.js"),
    "module.exports = require('./cjs/index.cjs.js');",
  );
};

export const build = () => {
  createDistFolder();
  buildEsmCjs();
  writeEntries();
};
