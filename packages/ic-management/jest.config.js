const rootJestConfig = require("../../jest.config");

module.exports = {
  ...rootJestConfig,

  modulePathIgnorePatterns: ["./dist"],
};
