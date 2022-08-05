import type { ManageNeuron } from "../../candid/sns_governance";
import type { SnsNeuronPermissionsParams } from "../types/governance.params";

export const toAddPermissionsRequest = ({
  neuronId,
  permissions,
  principal,
}: SnsNeuronPermissionsParams): ManageNeuron => ({
  subaccount: neuronId.id,
  command: [
    {
      AddNeuronPermissions: {
        permissions_to_add: [{ permissions }],
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
        permissions_to_remove: [{ permissions }],
        principal_id: [principal],
      },
    },
  ],
});
