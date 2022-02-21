module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: {
        allowJs: true,
      },
    },
  },
  testEnvironment: "node",
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)", "!e2e-tests/**"],
  setupFiles: [`<rootDir>/test-setup.ts`],
  modulePathIgnorePatterns: ["./dist"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
};
