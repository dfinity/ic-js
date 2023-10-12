const rootJestConfig = require("../../jest.config");

module.exports = {
  ...rootJestConfig,
  setupFiles: [`../../test-setup.ts`],
  modulePathIgnorePatterns: ["./dist"],
};
