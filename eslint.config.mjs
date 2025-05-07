import { default as config } from "@dfinity/eslint-config-oisy-wallet";

export default [
  ...config,
  {
    rules: {
      "require-await": "off",
      "@typescript-eslint/no-empty-object-type": "off",
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
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "no-else-return": "off",
      "@typescript-eslint/consistent-type-imports": "off",
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
