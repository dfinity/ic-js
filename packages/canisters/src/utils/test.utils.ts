import { expect, it } from "vitest";

export const shouldReExportAllMembers = ({
  source,
  reexport,
}: {
  source: string;
  reexport: string;
}) => {
  it("should re-export all members", async () => {
    const sourceModule = { ...(await import(source)) };
    const reexportModule = { ...(await import(reexport)) };

    const sourceKeys = Object.keys(sourceModule);
    const reexportKeys = Object.keys(reexportModule);

    expect(reexportKeys).toHaveLength(sourceKeys.length);

    for (const key of Object.keys(sourceModule)) {
      expect(reexportModule).toHaveProperty(key);
      expect(reexportModule[key]).toBe(sourceModule[key]);
    }
  });
};
