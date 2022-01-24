module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: [`<rootDir>/test-setup.ts`],
  modulePathIgnorePatterns: ["./dist"],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
  },
};
