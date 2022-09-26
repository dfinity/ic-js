import type { ManageNeuron, NeuronId } from "../../candid/sns_governance";
import type {
  SnsDisburseNeuronParams,
  SnsNeuronPermissionsParams,
} from "../types/governance.params";

export const toAddPermissionsRequest = ({
  neuronId,
  permissions,
  principal,
}: SnsNeuronPermissionsParams): ManageNeuron => ({
  subaccount: neuronId.id,
  command: [
    {
      AddNeuronPermissions: {
        permissions_to_add: [{ permissions: Int32Array.from(permissions) }],
        principal_id: [principal],
      },
    },
  ],
});

export const toRemovePermissionsRequest = ({
  neuronId,
  permissions,
  principal,
}: SnsNeuronPermissionsParams): ManageNeuron => ({
  subaccount: neuronId.id,
  command: [
    {
      RemoveNeuronPermissions: {
        permissions_to_remove: [{ permissions: Int32Array.from(permissions) }],
        principal_id: [principal],
      },
    },
  ],
});

export const toDisburseNeuronRequest = ({
  neuronId: { id },
  amount,
}: SnsDisburseNeuronParams): ManageNeuron => ({
  subaccount: id,
  command: [
    {
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
  ],
});

export const toStartDissolvingNeuronRequest = ({
  id,
}: NeuronId): ManageNeuron => ({
  subaccount: id,
  command: [
    {
      Configure: {
        operation: [{ StartDissolving: {} }],
      },
    },
  ],
});

export const toStopDissolvingNeuronRequest = ({
  id,
}: NeuronId): ManageNeuron => ({
  subaccount: id,
  command: [
    {
      Configure: {
        operation: [{ StopDissolving: {} }],
      },
    },
  ],
});
