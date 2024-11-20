import { hexStringToUint8Array, uint8ArrayToHexString } from "@dfinity/utils";
import type { snapshot_id } from "../../candid/ic-management";
import type { SnapshotIdText } from "../types/ic-management.params";

/**
 * Encodes a snapshot ID into a hex string representation.
 *
 * A snapshot ID is a tuple `(CanisterId, u64)`, where:
 * - `CanisterId` is a unique identifier for a canister.
 * - `u64` is a subnet-local number (incremented for each new snapshot).
 *
 * @param {snapshot_id} snapshotId - The snapshot ID to encode, represented as a `Uint8Array` or an array of numbers.
 * @returns {string} The hex string representation of the snapshot ID.
 */
export const encodeSnapshotId = (snapshotId: snapshot_id): SnapshotIdText =>
  uint8ArrayToHexString(snapshotId);

/**
 * Decodes a hex string representation of a snapshot ID back into its original format.
 *
 * A snapshot ID is a tuple `(CanisterId, u64)`, where:
 * - `CanisterId` is a unique identifier for a canister.
 * - `u64` is a subnet-local number (incremented for each new snapshot).
 *
 * @param {string} snapshotId - The hex string representation of the snapshot ID.
 * @returns {snapshot_id} The decoded snapshot ID as a `Uint8Array`.
 */
export const decodeSnapshotId = (snapshotId: SnapshotIdText): snapshot_id =>
  hexStringToUint8Array(snapshotId);
