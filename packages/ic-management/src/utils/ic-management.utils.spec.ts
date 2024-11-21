import { mockCanisterId } from "../ic-management.mock";
import {
  decodeSnapshotId,
  encodeSnapshotId,
  mapSnapshotId,
} from "./ic-management.utils";

describe("ic-management.utils", () => {
  const mockLocalSubnetId = [0, 0, 0, 0, 0, 0, 0, 1];

  const mockSnapshotId = Uint8Array.from([
    ...mockCanisterId.toUint8Array(),
    ...mockLocalSubnetId,
  ]);

  const snapshotIdHex = "000000000000000201010000000000000001";

  it("should correctly encode a snapshot ID with encodeSnapshotId", () => {
    const encoded = encodeSnapshotId(mockSnapshotId);

    expect(encoded).toBe(snapshotIdHex);
  });

  it("should correctly decode a snapshot ID with decodeSnapshotId", () => {
    const decoded = decodeSnapshotId(snapshotIdHex);

    expect(decoded).toEqual(mockSnapshotId);
  });

  it("should encodeSnapshotId and decodeSnapshotId", () => {
    const encoded = encodeSnapshotId(mockSnapshotId);
    const decoded = decodeSnapshotId(encoded);

    expect(decoded).toEqual(mockSnapshotId);
  });

  describe("mapSnapshotId", () => {
    it("should map a Uint8Array snapshot ID without changes", () => {
      const result = mapSnapshotId(mockSnapshotId);

      expect(result).toEqual(mockSnapshotId);
    });

    it("should map a string snapshot ID by decoding it", () => {
      const result = mapSnapshotId(snapshotIdHex);
      expect(result).toEqual(mockSnapshotId);
    });
  });
});
