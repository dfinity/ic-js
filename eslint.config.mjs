import { default as config } from "@dfinity/eslint-config-oisy-wallet";

export default [
  ...config,
  {
    rules: {
      "require-await": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      // This rule is disabled because the candid declarations folder is referenced by the canisters and indexes
      // using relative parent paths. Resolving this would require either restructuring the folder
      // (which impacts the build pipeline) or setting up path aliases (which requires configuration).
      // Since neither is a current priority, the rule remains off.
      "import/no-relative-parent-imports": "off",
      "local-rules/use-option-type-wrapper": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "arrow-body-style": "off",
      "local-rules/prefer-object-params": "off",
      "prefer-arrow/prefer-arrow-functions": "off",
      "func-style": "off",
      "object-shorthand": "off",
      "import/no-duplicates": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "no-useless-rename": "off",
      "prefer-destructuring": "off",
    },
  },
  {
    ignores: [
      "**/dist/",
      "**/candid/",
      "*.did.js",
      "*_pb.d.ts",
      "scripts",
      "test-setup.ts",
      "**/jest.config.js",
      "**/esbuild.mjs",
      "packages/nns-proto/proto",
      "eslint-local-rules.cjs",
    ],
  },
];
