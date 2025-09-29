import { toNullable } from "@dfinity/utils";
import {
  mockCanisterId,
  mockSnapshotId,
  mockSnapshotIdHex,
} from "../ic-management.mock";
import { toReplaceSnapshotArgs, toSnapshotArgs } from "./snapshot.params";

describe("snapshot.params", () => {
  it("should map snapshot params to did arguments", () => {
    const args = toSnapshotArgs({
      canisterId: mockCanisterId,
      snapshotId: mockSnapshotIdHex,
    });

    expect(args).toStrictEqual({
      canister_id: mockCanisterId,
      snapshot_id: mockSnapshotId,
    });
  });

  it("should map replace snapshot params to did arguments with omitted snapshot ID", () => {
    const args = toReplaceSnapshotArgs({
      canisterId: mockCanisterId,
    });

    expect(args).toStrictEqual({
      canister_id: mockCanisterId,
      replace_snapshot: toNullable(),
    });
  });

  it("should map replace snapshot params to did arguments with snapshot ID", () => {
    const args = toReplaceSnapshotArgs({
      canisterId: mockCanisterId,
      snapshotId: mockSnapshotIdHex,
    });

    expect(args).toStrictEqual({
      canister_id: mockCanisterId,
      replace_snapshot: toNullable(mockSnapshotId),
    });
  });
});
