import { Principal } from "@dfinity/principal";
import {
  NeuronId as PbNeuronId,
  PrincipalId as PbPrincipalId,
} from "../../../proto/base_types_pb";
import { ManageNeuron as PbManageNeuron } from "../../../proto/governance_pb";
import { AccountIdentifier as PbAccountIdentifier } from "../../../proto/ledger_pb";
import { NeuronId } from "../../types/common";
import {
  AddHotKeyRequest,
  DisburseRequest,
  MergeMaturityRequest,
  MergeRequest,
  RemoveHotKeyRequest,
  SpawnRequest,
} from "../../types/governance_converters";

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

export const fromRemoveHotKeyRequest = (
  request: RemoveHotKeyRequest
): PbManageNeuron => {
  const hotkeyPrincipal = new PbPrincipalId();
  hotkeyPrincipal.setSerializedId(
    Principal.fromText(request.principal).toUint8Array()
  );

  const command = new PbManageNeuron.RemoveHotKey();
  command.setHotKeyToRemove(hotkeyPrincipal);

  const configure = new PbManageNeuron.Configure();
  configure.setRemoveHotKey(command);

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};

export const fromIncreaseDissolveDelayRequest = ({
  neuronId,
  additionalDissolveDelaySeconds,
}: {
  neuronId: NeuronId;
  additionalDissolveDelaySeconds: number;
}): PbManageNeuron => {
  const command = new PbManageNeuron.IncreaseDissolveDelay();
  command.setAdditionalDissolveDelaySeconds(additionalDissolveDelaySeconds);

  const configure = new PbManageNeuron.Configure();
  configure.setIncreaseDissolveDelay(command);

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const pbNeuronId = new PbNeuronId();
  pbNeuronId.setId(neuronId.toString());
  result.setNeuronId(pbNeuronId);

  return result;
};

export const fromStartDissolvingRequest = (
  neuronId: NeuronId
): PbManageNeuron => {
  const configure = new PbManageNeuron.Configure();
  configure.setStartDissolving(new PbManageNeuron.StartDissolving());

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const pbNeuronId = new PbNeuronId();
  pbNeuronId.setId(neuronId.toString());
  result.setNeuronId(pbNeuronId);

  return result;
};

export const fromStopDissolvingRequest = (
  neuronId: NeuronId
): PbManageNeuron => {
  const configure = new PbManageNeuron.Configure();
  configure.setStopDissolving(new PbManageNeuron.StopDissolving());

  const result = new PbManageNeuron();
  result.setConfigure(configure);

  const pbNeuronId = new PbNeuronId();
  pbNeuronId.setId(neuronId.toString());
  result.setNeuronId(pbNeuronId);

  return result;
};

export const fromDisburseRequest = (
  request: DisburseRequest
): PbManageNeuron => {
  const disburse = new PbManageNeuron.Disburse();

  if (request.toAccountId) {
    const toAccountIdentifier = new PbAccountIdentifier();
    toAccountIdentifier.setHash(
      Uint8Array.from(Buffer.from(request.toAccountId, "hex"))
    );
    disburse.setToAccount(toAccountIdentifier);
  }

  if (request.amount != null) {
    const amount = new PbManageNeuron.Disburse.Amount();
    amount.setE8s(request.amount.toString());
    disburse.setAmount(amount);
  }

  const manageNeuron = new PbManageNeuron();
  manageNeuron.setDisburse(disburse);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  return manageNeuron;
};

export const fromMergeMaturityRequest = (
  request: MergeMaturityRequest
): PbManageNeuron => {
  const mergeMaturity = new PbManageNeuron.MergeMaturity();
  mergeMaturity.setPercentageToMerge(request.percentageToMerge);
  const manageNeuron = new PbManageNeuron();
  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  manageNeuron.setMergeMaturity(mergeMaturity);
  return manageNeuron;
};

export const fromSpawnRequest = (request: SpawnRequest): PbManageNeuron => {
  const spawn = new PbManageNeuron.Spawn();

  if (request.newController) {
    const newController = new PbPrincipalId();
    newController.setSerializedId(
      Principal.fromText(request.newController).toUint8Array().slice(4)
    );
    spawn.setNewController(newController);
  }

  if (request.percentageToSpawn !== undefined) {
    spawn.setPercentageToSpawn(request.percentageToSpawn);
  }

  const manageNeuron = new PbManageNeuron();
  manageNeuron.setSpawn(spawn);

  const neuronId = new PbNeuronId();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  return manageNeuron;
};

export const fromMergeRequest = (request: MergeRequest): PbManageNeuron => {
  const merge = new PbManageNeuron.Merge();
  const sourceNeuronId = new PbNeuronId();
  sourceNeuronId.setId(request.sourceNeuronId.toString());
  merge.setSourceNeuronId(sourceNeuronId);
  const manageNeuron = new PbManageNeuron();
  const neuronId = new PbNeuronId();
  neuronId.setId(request.targetNeuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  manageNeuron.setMerge(merge);
  return manageNeuron;
};
