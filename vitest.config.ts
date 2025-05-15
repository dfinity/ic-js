import type { UserConfig } from "vite";
import { defineConfig } from "vitest/config";

export const baseConfig: UserConfig = {
  test: {
    environment: "node",
    setupFiles: ["./vitest.setup.ts"],
  },
};

export default defineConfig(
  (): UserConfig => ({
    ...baseConfig,
  }),
);
