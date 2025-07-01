import { defineConfig } from "vitest/config";
import { baseConfig } from "../../vitest.config";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    setupFiles: [`../../vitest.setup.ts`],
    exclude: ["./dist"],
  },
});
