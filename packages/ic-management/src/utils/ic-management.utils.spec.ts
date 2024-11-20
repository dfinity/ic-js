import { uint8ArrayToHexString } from "@dfinity/utils";
import { mockCanisterId } from "../ic-management.mock";
import { decodeSnapshotId, encodeSnapshotId } from "./ic-management.utils";

describe("ic-management.utils", () => {
  const mockLocalSubnetId = [0, 0, 0, 0, 0, 0, 0, 1];

  const mockSnapshotId = Uint8Array.from([
    ...mockCanisterId.toUint8Array(),
    ...mockLocalSubnetId,
  ]);

  it("should correctly encode a snapshot ID with encodeSnapshotId", () => {
    const expectedHex = uint8ArrayToHexString(mockSnapshotId);
    const encoded = encodeSnapshotId(mockSnapshotId);

    expect(encoded).toBe(expectedHex);
  });

  it("should correctly decode a snapshot ID with decodeSnapshotId", () => {
    const hex = uint8ArrayToHexString(mockSnapshotId);
    const decoded = decodeSnapshotId(hex);

    expect(decoded).toEqual(mockSnapshotId);
  });

  test("should encodeSnapshotId and decodeSnapshotId", () => {
    const encoded = encodeSnapshotId(mockSnapshotId);
    const decoded = decodeSnapshotId(encoded);

    expect(decoded).toEqual(mockSnapshotId);
  });
});
