import { type ViteUserConfig, defineConfig } from "vitest/config";

export const baseConfig: ViteUserConfig = {
  test: {
    environment: "node",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
};

export default defineConfig({
  ...baseConfig,
});
