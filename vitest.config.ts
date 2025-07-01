import { defineConfig, type ViteUserConfig } from "vitest/config";

export const baseConfig: ViteUserConfig = {
  test: {
    environment: "node",
    globals: true,
  },
};

export default defineConfig({
  ...baseConfig,
});
