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
  setupFiles: [`<rootDir>/test-setup.ts`],
  modulePathIgnorePatterns: ["./dist"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
};
