#!/usr/bin/env node

const { generateDocumentation } = require("tsdoc-markdown");

const nnsInputFiles = [
  "./packages/nns/src/genesis_token.canister.ts",
  "./packages/nns/src/governance.canister.ts",
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

const ledgerIcrcInputFiles = [
  "./packages/ledger-icrc/src/ledger.canister.ts",
  "./packages/ledger-icrc/src/utils/ledger.utils.ts",
  "./packages/ledger-icrc/src/utils/payment.utils.ts",
  "./packages/ledger-icrc/src/index.canister.ts",
];

const ledgerICPInputFiles = [
  "./packages/ledger-icp/src/ledger.canister.ts",
  "./packages/ledger-icp/src/index.canister.ts",
  "./packages/ledger-icp/src/account_identifier.ts",
];

const ckBTCInputFiles = [
  "./packages/ckbtc/src/minter.canister.ts",
  "./packages/ckbtc/src/utils/btc.utils.ts",
];

const ckETHInputFiles = ["./packages/cketh/src/minter.canister.ts"];

const icMgmtInputFiles = [
  "./packages/ic-management/src/ic-management.canister.ts",
];

const buildOptions = {
  repo: { url: "https://github.com/dfinity/ic-js" },
};

const markdownOptions = {
  headingLevel: "###",
};

generateDocumentation({
  inputFiles: nnsInputFiles,
  outputFile: "./packages/nns/README.md",
  markdownOptions,
  buildOptions,
});

generateDocumentation({
  inputFiles: snsInputFiles,
  outputFile: "./packages/sns/README.md",
  markdownOptions,
  buildOptions,
});

generateDocumentation({
  inputFiles: cmcInputFiles,
  outputFile: "./packages/cmc/README.md",
  markdownOptions,
  buildOptions,
});

generateDocumentation({
  inputFiles: ledgerIcrcInputFiles,
  outputFile: "./packages/ledger-icrc/README.md",
  markdownOptions,
  buildOptions,
});

generateDocumentation({
  inputFiles: ledgerICPInputFiles,
  outputFile: "./packages/ledger-icp/README.md",
  markdownOptions,
  buildOptions,
});

generateDocumentation({
  inputFiles: ckBTCInputFiles,
  outputFile: "./packages/ckbtc/README.md",
  markdownOptions,
  buildOptions,
});

generateDocumentation({
  inputFiles: ckETHInputFiles,
  outputFile: "./packages/cketh/README.md",
  markdownOptions,
  buildOptions,
});

generateDocumentation({
  inputFiles: utilsInputFiles,
  outputFile: "./packages/utils/README.md",
  markdownOptions,
  buildOptions: { ...buildOptions, explore: true },
});

generateDocumentation({
  inputFiles: icMgmtInputFiles,
  outputFile: "./packages/ic-management/README.md",
  markdownOptions,
  buildOptions,
});
