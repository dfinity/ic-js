import { Principal } from "@dfinity/principal";
import {
  NeuronId as PbNeuronId,
  PrincipalId as PbPrincipalId,
} from "../../../proto/base_types_pb";
import { ManageNeuron as PbManageNeuron } from "../../../proto/governance_pb";
import { AddHotKeyRequest } from "../../types/governance_converters";

// Original `ts` implementation:
// nns-dapp/frontend/ts/src/canisters/governance/RequestConverters.ts /
// https://github.com/dfinity/nns-dapp/blob/main/frontend/ts/src/canisters/governance/RequestConverters.ts

export const fromAddHotKeyRequest = (
  request: AddHotKeyRequest
): PbManageNeuron => {
  const hotkeyPrincipal = new PbPrincipalId();
  hotkeyPrincipal.setSerializedId(
    Principal.fromText(request.principal).toUint8Array()
  );

  const hotkey = new PbManageNeuron.AddHotKey();
  hotkey.setNewHotKey(hotkeyPrincipal);

  const configure = new PbManageNeuron.Configure();
  configure.setAddHotKey(hotkey);

  const result = new PbManageNeuron();
  result.setConfigure(configure);
  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};
