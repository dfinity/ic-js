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
      // Enforcing Option<Type> for nullish values would require every library to define or depend on such a wrapper.
      // This rule is more appropriate in applications where null and undefined have distinct meanings.
      // That is why, for now, it's disabled in this repo.
      "local-rules/use-option-type-wrapper": "off",
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
];
