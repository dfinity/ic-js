import { defineConfig } from "vitest/config";

export const baseConfig = {
  test: {
    environment: "node",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
};

export default defineConfig({
  ...baseConfig,
});
