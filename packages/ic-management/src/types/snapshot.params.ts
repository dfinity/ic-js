import type { Principal } from "@dfinity/principal";
import { nonNullish, toNullable } from "@dfinity/utils";
import type {
  delete_canister_snapshot_args,
  load_canister_snapshot_args,
  snapshot_id,
  take_canister_snapshot_args,
} from "../../candid/ic-management";
import { mapSnapshotId } from "../utils/ic-management.utils";

export type SnapshotIdText = string;

export interface OptionSnapshotParams {
  canisterId: Principal;
  snapshotId?: SnapshotIdText | snapshot_id;
}

export type SnapshotParams = Required<OptionSnapshotParams>;

export const toSnapshotArgs = ({
  canisterId: canister_id,
  snapshotId,
}: SnapshotParams):
  | Pick<load_canister_snapshot_args, "canister_id" | "snapshot_id">
  | delete_canister_snapshot_args => ({
  canister_id,
  snapshot_id: mapSnapshotId(snapshotId),
});

export const toReplaceSnapshotArgs = ({
  canisterId: canister_id,
  snapshotId,
}: OptionSnapshotParams): take_canister_snapshot_args => ({
  canister_id,
  replace_snapshot: toNullable(
    nonNullish(snapshotId) ? mapSnapshotId(snapshotId) : undefined,
  ),
});
