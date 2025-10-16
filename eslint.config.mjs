import { default as config } from "@dfinity/eslint-config-oisy-wallet";
import { default as vitestConfig } from "@dfinity/eslint-config-oisy-wallet/vitest";

export default [
  ...config,
  ...vitestConfig,
  {
    rules: {
      // This rule is disabled because the candid declarations folder is referenced by the canisters and indexes
      // using relative parent paths. Resolving this would require either restructuring the folder
      // (which impacts the build pipeline) or setting up path aliases (which requires configuration).
      // Since neither is a current priority, the rule remains off.
      "import/no-relative-parent-imports": "off",
    },
  },
  {
    ignores: [
      "**/dist/",
      "**/candid/",
      "*.did.js",
      "*_pb.d.ts",
      "scripts",
      "**/vitest.config.ts",
      "**/esbuild.mjs",
      "packages/nns-proto/proto",
      "eslint-local-rules.cjs",
    ],
  },
  {
    ignores: [
      "packages/**/*.js",
      "packages/**/*.mjs",
      "packages/**/*.d.ts",

      "!packages/**/declarations/**/*.js",
      "!packages/**/declarations/**/*.mjs",
      "!packages/**/declarations/**/*.d.ts",

      "!packages/**/global.d.ts",
    ],
  },
];
