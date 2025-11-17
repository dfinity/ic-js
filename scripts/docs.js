#!/usr/bin/env node

const { generateDocumentation } = require("tsdoc-markdown");

const utilsInputFiles = ["./packages/utils/src/index.ts"];

const zodSchemasInputFiles = ["./packages/zod-schemas/src/index.ts"];

const buildOptions = {
  repo: { url: "https://github.com/dfinity/icp-js-canisters" },
};

const markdownOptions = {
  headingLevel: "###",
};

generateDocumentation({
  inputFiles: utilsInputFiles,
  outputFile: "./packages/utils/README.md",
  markdownOptions,
  buildOptions: { ...buildOptions, explore: true },
});

generateDocumentation({
  inputFiles: zodSchemasInputFiles,
  outputFile: "./packages/zod-schemas/README.md",
  markdownOptions,
  buildOptions: { ...buildOptions, explore: true },
});
