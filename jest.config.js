module.exports = {
  preset: "ts-jest",
  "globals": {
    "ts-jest": {
      "tsconfig": {
        "allowJs": true
      }
    }
  },
  testEnvironment: "node",
  setupFiles: [`<rootDir>/test-setup.ts`],
  modulePathIgnorePatterns: ["./dist"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "ts-jest"
  }
};
