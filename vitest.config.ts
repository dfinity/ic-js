import { defineConfig, type ViteUserConfig } from "vitest/config";

export const baseConfig: ViteUserConfig = {
  test: {
    environment: "node",
    globals: true,
    watch: false,
  },
};

export default defineConfig({
  ...baseConfig,
});
