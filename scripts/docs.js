#!/usr/bin/env node

const { generateDocumentation } = require("tsdoc-markdown");

const nnsInputFiles = [
  "./packages/nns/src/account_identifier.ts",
  "./packages/nns/src/genesis_token.canister.ts",
  "./packages/nns/src/governance.canister.ts",
  "./packages/nns/src/icp.ts",
  "./packages/nns/src/token.ts",
  "./packages/nns/src/ledger.canister.ts",
  "./packages/nns/src/sns_wasm.canister.ts",
  "./packages/nns/src/utils/neurons.utils.ts",
];

const snsInputFiles = [
  "./packages/sns/src/governance.canister.ts",
  "./packages/sns/src/governance.canister.ts",
  "./packages/sns/src/root.canister.ts",
  "./packages/sns/src/sns.ts",
  "./packages/sns/src/sns.wrapper.ts",
  "./packages/sns/src/swap.canister.ts",
];

const utilsInputFiles = ["./packages/utils/src/index.ts"];

const cmcInputFiles = ["./packages/cmc/src/cmc.canister.ts"];

const ledgerInputFiles = [
  "./packages/ledger/src/ledger.canister.ts",
  "./packages/ledger/src/utils/ledger.utils.ts",
  "./packages/ledger/src/index.canister.ts",
];

const ckBTCInputFiles = [
  "./packages/ckbtc/src/minter.canister.ts",
  "./packages/ckbtc/src/utils/btc.utils.ts",
];

const rosettaInputFiles = ["./packages/rosetta-client/src/index.ts"];

const icMgmtInputFiles = ["./packages/ckbtc/src/ic-management.canister.ts"];

generateDocumentation({
  inputFiles: nnsInputFiles,
  outputFile: "./packages/nns/README.md",
  markdownOptions: { headingLevel: "###" },
});

generateDocumentation({
  inputFiles: snsInputFiles,
  outputFile: "./packages/sns/README.md",
  markdownOptions: { headingLevel: "###" },
});

generateDocumentation({
  inputFiles: cmcInputFiles,
  outputFile: "./packages/cmc/README.md",
  markdownOptions: { headingLevel: "###" },
});

generateDocumentation({
  inputFiles: ledgerInputFiles,
  outputFile: "./packages/ledger/README.md",
  markdownOptions: { headingLevel: "###" },
});

generateDocumentation({
  inputFiles: ckBTCInputFiles,
  outputFile: "./packages/ckbtc/README.md",
  markdownOptions: { headingLevel: "###" },
});

generateDocumentation({
  inputFiles: utilsInputFiles,
  outputFile: "./packages/utils/README.md",
  markdownOptions: { headingLevel: "###" },
  buildOptions: { explore: true },
});

generateDocumentation({
  inputFiles: rosettaInputFiles,
  outputFile: "./packages/rosetta-client/README.md",
  markdownOptions: { headingLevel: "###" },
});

generateDocumentation({
  inputFiles: icMgmtInputFiles,
  outputFile: "./packages/ic-management/README.md",
  markdownOptions: { headingLevel: "###" },
});
