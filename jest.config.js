module.exports = {
  testEnvironment: "node",
  setupFiles: [`<rootDir>/test-setup.ts`],
  transform: {
    "^.+\\.(t|j)s$": [
      "ts-jest",
      {
        tsconfig: {
          allowJs: true,
        },
      },
    ],
  },
};
