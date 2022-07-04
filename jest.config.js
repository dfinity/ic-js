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
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
};
