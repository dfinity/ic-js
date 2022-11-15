import { toNullable } from "@dfinity/utils";
import type {
  Command,
  ManageNeuron,
  NeuronId,
  Operation,
} from "../../candid/sns_governance";
import type {
  SnsClaimOrRefreshArgs,
  SnsDisburseNeuronParams,
  SnsIncreaseDissolveDelayParams,
  SnsNeuronPermissionsParams,
  SnsSetDissolveTimestampParams,
} from "../types/governance.params";

// Helper for building `ManageNeuron` structure
const toManageNeuronCommand = ({
  neuronId: { id },
  command,
}: {
  neuronId: NeuronId;
  command: Command;
}): ManageNeuron => ({
  subaccount: id,
  command: [command],
});

// Helper for building `ManageNeuron` structure for type `Operation` commands
const toManageNeuronConfigureCommand = ({
  neuronId,
  operation,
}: {
  neuronId: NeuronId;
  operation: Operation;
}): ManageNeuron =>
  toManageNeuronCommand({
    neuronId,
    command: {
      Configure: {
        operation: [operation],
      },
    },
  });

export const toAddPermissionsRequest = ({
  neuronId,
  permissions,
  principal,
}: SnsNeuronPermissionsParams): ManageNeuron =>
  toManageNeuronCommand({
    neuronId,
    command: {
      AddNeuronPermissions: {
        permissions_to_add: [{ permissions: Int32Array.from(permissions) }],
        principal_id: [principal],
      },
    },
  });

export const toRemovePermissionsRequest = ({
  neuronId,
  permissions,
  principal,
}: SnsNeuronPermissionsParams): ManageNeuron =>
  toManageNeuronCommand({
    neuronId,
    command: {
      RemoveNeuronPermissions: {
        permissions_to_remove: [{ permissions: Int32Array.from(permissions) }],
        principal_id: [principal],
      },
    },
  });

export const toDisburseNeuronRequest = ({
  neuronId,
  amount,
}: SnsDisburseNeuronParams): ManageNeuron =>
  toManageNeuronCommand({
    neuronId,
    command: {
      Disburse: {
        // currently there is a main account only support
        to_account: [],
        amount:
          amount === undefined
            ? []
            : [
                {
                  e8s: amount,
                },
              ],
      },
    },
  });

export const toStartDissolvingNeuronRequest = (
  neuronId: NeuronId
): ManageNeuron =>
  toManageNeuronConfigureCommand({
    neuronId,
    operation: { StartDissolving: {} },
  });

export const toStopDissolvingNeuronRequest = (
  neuronId: NeuronId
): ManageNeuron =>
  toManageNeuronConfigureCommand({
    neuronId,
    operation: { StopDissolving: {} },
  });

export const toSetDissolveTimestampRequest = ({
  neuronId,
  dissolveTimestampSeconds,
}: SnsSetDissolveTimestampParams): ManageNeuron =>
  toManageNeuronConfigureCommand({
    neuronId,
    operation: {
      SetDissolveTimestamp: {
        dissolve_timestamp_seconds: dissolveTimestampSeconds,
      },
    },
  });

export const toIncreaseDissolveDelayRequest = ({
  neuronId,
  additionalDissolveDelaySeconds,
}: SnsIncreaseDissolveDelayParams): ManageNeuron =>
  toManageNeuronConfigureCommand({
    neuronId,
    operation: {
      IncreaseDissolveDelay: {
        additional_dissolve_delay_seconds: additionalDissolveDelaySeconds,
      },
    },
  });

export const toClaimOrRefreshRequest = ({
  subaccount,
  memo,
  controller,
}: SnsClaimOrRefreshArgs): ManageNeuron => ({
  subaccount,
  command: [
    {
      ClaimOrRefresh: {
        by: [
          // If memo is not passed, we consider it a neuronId request because the memo is mandatory for MemoAndController
          memo === undefined
            ? { NeuronId: {} }
            : {
                MemoAndController: { memo, controller: toNullable(controller) },
              },
        ],
      },
    },
  ],
});
