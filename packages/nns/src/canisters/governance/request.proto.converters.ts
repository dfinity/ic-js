import type { ManageNeuron as PbManageNeuron } from "@dfinity/nns-proto";
import { Principal } from "@dfinity/principal";
import type { NeuronId } from "../../types/common";
import type {
  AddHotKeyRequest,
  DisburseRequest,
  FollowRequest,
  MergeMaturityRequest,
  RemoveHotKeyRequest,
  SpawnRequest,
} from "../../types/governance_converters";
import { importNnsProto } from "../../utils/proto.utils";

// Original `ts` implementation:
// nns-dapp/frontend/ts/src/canisters/governance/RequestConverters.ts /
// https://github.com/dfinity/nns-dapp/blob/main/frontend/ts/src/canisters/governance/RequestConverters.ts

export const fromAddHotKeyRequest = async (
  request: AddHotKeyRequest
): Promise<PbManageNeuron> => {
  const {
    PrincipalId: PrincipalIdConstructor,
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const hotkeyPrincipal = new PrincipalIdConstructor();
  hotkeyPrincipal.setSerializedId(
    Principal.fromText(request.principal).toUint8Array()
  );

  const hotkey = new ManageNeuronConstructor.AddHotKey();
  hotkey.setNewHotKey(hotkeyPrincipal);

  const configure = new ManageNeuronConstructor.Configure();
  configure.setAddHotKey(hotkey);

  const result = new ManageNeuronConstructor();
  result.setConfigure(configure);
  const neuronId = new NeuronIdConstructor();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};

export const fromRemoveHotKeyRequest = async (
  request: RemoveHotKeyRequest
): Promise<PbManageNeuron> => {
  const {
    PrincipalId: PrincipalIdConstructor,
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const hotkeyPrincipal = new PrincipalIdConstructor();
  hotkeyPrincipal.setSerializedId(
    Principal.fromText(request.principal).toUint8Array()
  );

  const command = new ManageNeuronConstructor.RemoveHotKey();
  command.setHotKeyToRemove(hotkeyPrincipal);

  const configure = new ManageNeuronConstructor.Configure();
  configure.setRemoveHotKey(command);

  const result = new ManageNeuronConstructor();
  result.setConfigure(configure);

  const neuronId = new NeuronIdConstructor();
  neuronId.setId(request.neuronId.toString());
  result.setNeuronId(neuronId);

  return result;
};

export const fromIncreaseDissolveDelayRequest = async ({
  neuronId,
  additionalDissolveDelaySeconds,
}: {
  neuronId: NeuronId;
  additionalDissolveDelaySeconds: number;
}): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const command = new ManageNeuronConstructor.IncreaseDissolveDelay();
  command.setAdditionalDissolveDelaySeconds(additionalDissolveDelaySeconds);

  const configure = new ManageNeuronConstructor.Configure();
  configure.setIncreaseDissolveDelay(command);

  const result = new ManageNeuronConstructor();
  result.setConfigure(configure);

  const pbNeuronId = new NeuronIdConstructor();
  pbNeuronId.setId(neuronId.toString());
  result.setNeuronId(pbNeuronId);

  return result;
};

export const fromStartDissolvingRequest = async (
  neuronId: NeuronId
): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const configure = new ManageNeuronConstructor.Configure();
  configure.setStartDissolving(new ManageNeuronConstructor.StartDissolving());

  const result = new ManageNeuronConstructor();
  result.setConfigure(configure);

  const pbNeuronId = new NeuronIdConstructor();
  pbNeuronId.setId(neuronId.toString());
  result.setNeuronId(pbNeuronId);

  return result;
};

export const fromStopDissolvingRequest = async (
  neuronId: NeuronId
): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const configure = new ManageNeuronConstructor.Configure();
  configure.setStopDissolving(new ManageNeuronConstructor.StopDissolving());

  const result = new ManageNeuronConstructor();
  result.setConfigure(configure);

  const pbNeuronId = new NeuronIdConstructor();
  pbNeuronId.setId(neuronId.toString());
  result.setNeuronId(pbNeuronId);

  return result;
};

export const fromCommunityFundRequest = async (
  neuronId: NeuronId
): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const configure = new ManageNeuronConstructor.Configure();
  configure.setJoinCommunityFund(
    new ManageNeuronConstructor.JoinCommunityFund()
  );

  const result = new ManageNeuronConstructor();
  result.setConfigure(configure);

  const pbNeuronId = new NeuronIdConstructor();
  pbNeuronId.setId(neuronId.toString());
  result.setNeuronId(pbNeuronId);

  return result;
};

export const fromDisburseRequest = async (
  request: DisburseRequest
): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
    AccountIdentifier: AccountIdentifierConstructor,
  } = await importNnsProto();

  const disburse = new ManageNeuronConstructor.Disburse();

  if (request.toAccountId) {
    const toAccountIdentifier = new AccountIdentifierConstructor();
    toAccountIdentifier.setHash(
      Uint8Array.from(Buffer.from(request.toAccountId, "hex"))
    );
    disburse.setToAccount(toAccountIdentifier);
  }

  if (request.amount != null) {
    const amount = new ManageNeuronConstructor.Disburse.Amount();
    amount.setE8s(request.amount.toString());
    disburse.setAmount(amount);
  }

  const manageNeuron = new ManageNeuronConstructor();
  manageNeuron.setDisburse(disburse);

  const neuronId = new NeuronIdConstructor();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  return manageNeuron;
};

export const fromMergeMaturityRequest = async (
  request: MergeMaturityRequest
): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const mergeMaturity = new ManageNeuronConstructor.MergeMaturity();
  mergeMaturity.setPercentageToMerge(request.percentageToMerge);
  const manageNeuron = new ManageNeuronConstructor();
  const neuronId = new NeuronIdConstructor();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  manageNeuron.setMergeMaturity(mergeMaturity);
  return manageNeuron;
};

export const fromSpawnRequest = async (
  request: SpawnRequest
): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
    PrincipalId: PrincipalIdConstructor,
  } = await importNnsProto();

  const spawn = new ManageNeuronConstructor.Spawn();

  if (request.newController) {
    const newController = new PrincipalIdConstructor();
    newController.setSerializedId(
      Principal.fromText(request.newController).toUint8Array().slice(4)
    );
    spawn.setNewController(newController);
  }

  if (request.percentageToSpawn !== undefined) {
    spawn.setPercentageToSpawn(request.percentageToSpawn);
  }

  const manageNeuron = new ManageNeuronConstructor();
  manageNeuron.setSpawn(spawn);

  const neuronId = new NeuronIdConstructor();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  return manageNeuron;
};

export const fromFollowRequest = async (
  request: FollowRequest
): Promise<PbManageNeuron> => {
  const {
    ManageNeuron: ManageNeuronConstructor,
    NeuronId: NeuronIdConstructor,
  } = await importNnsProto();

  const follow = new ManageNeuronConstructor.Follow();
  follow.setTopic(request.topic);
  follow.setFolloweesList(
    request.followees.map((followee) => {
      const neuronId = new NeuronIdConstructor();
      neuronId.setId(followee.toString());
      return neuronId;
    })
  );
  const manageNeuron = new ManageNeuronConstructor();
  const neuronId = new NeuronIdConstructor();
  neuronId.setId(request.neuronId.toString());
  manageNeuron.setNeuronId(neuronId);
  manageNeuron.setFollow(follow);
  return manageNeuron;
};
