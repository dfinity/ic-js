#!/usr/bin/env node

const { generateDocumentation } = require("tsdoc-to-markdown");

const nnsInputFiles = [
  "./packages/nns/src/account_identifier.ts",
  "./packages/nns/src/genesis_token.canister.ts",
  "./packages/nns/src/governance.canister.ts",
  "./packages/nns/src/icp.ts",
  "./packages/nns/src/ledger.canister.ts",
  "./packages/nns/src/sns_wasm.canister.ts",
];

generateDocumentation({
  inputFiles: nnsInputFiles,
  outputFile: "./packages/nns/README.md",
  markdownOptions: {headingLevel: '###'}
});
