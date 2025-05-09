import { default as config } from "@dfinity/eslint-config-oisy-wallet";

export default [
  ...config,
  {
    rules: {
      "require-await": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "import/no-relative-parent-imports": "off",
      // Enforcing Option<Type> for nullish values would require every library to define or depend on such a wrapper.
      // This rule is more appropriate in applications where null and undefined have distinct meanings.
      // That is why, for now, it's disabled in this repo.
      "local-rules/use-option-type-wrapper": "off",
      "arrow-body-style": "off",
      "local-rules/prefer-object-params": "off",
      "prefer-arrow/prefer-arrow-functions": "off",
      "func-style": "off",
      "import/no-duplicates": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "no-useless-rename": "off",
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
