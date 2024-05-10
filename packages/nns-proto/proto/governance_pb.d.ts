// package: ic_nns_governance.pb.v1
// file: governance.proto

import * as jspb from "google-protobuf";
import * as base_types_pb from "./base_types_pb";
import * as ledger_pb from "./ledger_pb";
import * as nervous_system_pb from "./nervous_system_pb";
import * as nns_common_pb from "./nns_common_pb";
import * as swap_pb from "./swap_pb";

export class NodeProvider extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): base_types_pb.PrincipalId | undefined;
  setId(value?: base_types_pb.PrincipalId): void;

  hasRewardAccount(): boolean;
  clearRewardAccount(): void;
  getRewardAccount(): ledger_pb.AccountIdentifier | undefined;
  setRewardAccount(value?: ledger_pb.AccountIdentifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeProvider.AsObject;
  static toObject(includeInstance: boolean, msg: NodeProvider): NodeProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeProvider;
  static deserializeBinaryFromReader(message: NodeProvider, reader: jspb.BinaryReader): NodeProvider;
}

export namespace NodeProvider {
  export type AsObject = {
    id?: base_types_pb.PrincipalId.AsObject,
    rewardAccount?: ledger_pb.AccountIdentifier.AsObject,
  }
}

export class UpdateNodeProvider extends jspb.Message {
  hasRewardAccount(): boolean;
  clearRewardAccount(): void;
  getRewardAccount(): ledger_pb.AccountIdentifier | undefined;
  setRewardAccount(value?: ledger_pb.AccountIdentifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNodeProvider.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNodeProvider): UpdateNodeProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNodeProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNodeProvider;
  static deserializeBinaryFromReader(message: UpdateNodeProvider, reader: jspb.BinaryReader): UpdateNodeProvider;
}

export namespace UpdateNodeProvider {
  export type AsObject = {
    rewardAccount?: ledger_pb.AccountIdentifier.AsObject,
  }
}

export class BallotInfo extends jspb.Message {
  hasProposalId(): boolean;
  clearProposalId(): void;
  getProposalId(): nns_common_pb.ProposalId | undefined;
  setProposalId(value?: nns_common_pb.ProposalId): void;

  getVote(): VoteMap[keyof VoteMap];
  setVote(value: VoteMap[keyof VoteMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BallotInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BallotInfo): BallotInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BallotInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BallotInfo;
  static deserializeBinaryFromReader(message: BallotInfo, reader: jspb.BinaryReader): BallotInfo;
}

export namespace BallotInfo {
  export type AsObject = {
    proposalId?: nns_common_pb.ProposalId.AsObject,
    vote: VoteMap[keyof VoteMap],
  }
}

export class NeuronInfo extends jspb.Message {
  getRetrievedAtTimestampSeconds(): number;
  setRetrievedAtTimestampSeconds(value: number): void;

  getState(): NeuronStateMap[keyof NeuronStateMap];
  setState(value: NeuronStateMap[keyof NeuronStateMap]): void;

  getAgeSeconds(): number;
  setAgeSeconds(value: number): void;

  getDissolveDelaySeconds(): number;
  setDissolveDelaySeconds(value: number): void;

  clearRecentBallotsList(): void;
  getRecentBallotsList(): Array<BallotInfo>;
  setRecentBallotsList(value: Array<BallotInfo>): void;
  addRecentBallots(value?: BallotInfo, index?: number): BallotInfo;

  getVotingPower(): number;
  setVotingPower(value: number): void;

  getCreatedTimestampSeconds(): number;
  setCreatedTimestampSeconds(value: number): void;

  getStakeE8s(): number;
  setStakeE8s(value: number): void;

  hasJoinedCommunityFundTimestampSeconds(): boolean;
  clearJoinedCommunityFundTimestampSeconds(): void;
  getJoinedCommunityFundTimestampSeconds(): number;
  setJoinedCommunityFundTimestampSeconds(value: number): void;

  hasKnownNeuronData(): boolean;
  clearKnownNeuronData(): void;
  getKnownNeuronData(): KnownNeuronData | undefined;
  setKnownNeuronData(value?: KnownNeuronData): void;

  hasNeuronType(): boolean;
  clearNeuronType(): void;
  getNeuronType(): NeuronTypeMap[keyof NeuronTypeMap];
  setNeuronType(value: NeuronTypeMap[keyof NeuronTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronInfo): NeuronInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronInfo;
  static deserializeBinaryFromReader(message: NeuronInfo, reader: jspb.BinaryReader): NeuronInfo;
}

export namespace NeuronInfo {
  export type AsObject = {
    retrievedAtTimestampSeconds: number,
    state: NeuronStateMap[keyof NeuronStateMap],
    ageSeconds: number,
    dissolveDelaySeconds: number,
    recentBallotsList: Array<BallotInfo.AsObject>,
    votingPower: number,
    createdTimestampSeconds: number,
    stakeE8s: number,
    joinedCommunityFundTimestampSeconds: number,
    knownNeuronData?: KnownNeuronData.AsObject,
    neuronType: NeuronTypeMap[keyof NeuronTypeMap],
  }
}

export class NeuronStakeTransfer extends jspb.Message {
  getTransferTimestamp(): number;
  setTransferTimestamp(value: number): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): base_types_pb.PrincipalId | undefined;
  setFrom(value?: base_types_pb.PrincipalId): void;

  getFromSubaccount(): Uint8Array | string;
  getFromSubaccount_asU8(): Uint8Array;
  getFromSubaccount_asB64(): string;
  setFromSubaccount(value: Uint8Array | string): void;

  getToSubaccount(): Uint8Array | string;
  getToSubaccount_asU8(): Uint8Array;
  getToSubaccount_asB64(): string;
  setToSubaccount(value: Uint8Array | string): void;

  getNeuronStakeE8s(): number;
  setNeuronStakeE8s(value: number): void;

  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  getMemo(): number;
  setMemo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronStakeTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronStakeTransfer): NeuronStakeTransfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronStakeTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronStakeTransfer;
  static deserializeBinaryFromReader(message: NeuronStakeTransfer, reader: jspb.BinaryReader): NeuronStakeTransfer;
}

export namespace NeuronStakeTransfer {
  export type AsObject = {
    transferTimestamp: number,
    from?: base_types_pb.PrincipalId.AsObject,
    fromSubaccount: Uint8Array | string,
    toSubaccount: Uint8Array | string,
    neuronStakeE8s: number,
    blockHeight: number,
    memo: number,
  }
}

export class Neuron extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): nns_common_pb.NeuronId | undefined;
  setId(value?: nns_common_pb.NeuronId): void;

  getAccount(): Uint8Array | string;
  getAccount_asU8(): Uint8Array;
  getAccount_asB64(): string;
  setAccount(value: Uint8Array | string): void;

  hasController(): boolean;
  clearController(): void;
  getController(): base_types_pb.PrincipalId | undefined;
  setController(value?: base_types_pb.PrincipalId): void;

  clearHotKeysList(): void;
  getHotKeysList(): Array<base_types_pb.PrincipalId>;
  setHotKeysList(value: Array<base_types_pb.PrincipalId>): void;
  addHotKeys(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

  getCachedNeuronStakeE8s(): number;
  setCachedNeuronStakeE8s(value: number): void;

  getNeuronFeesE8s(): number;
  setNeuronFeesE8s(value: number): void;

  getCreatedTimestampSeconds(): number;
  setCreatedTimestampSeconds(value: number): void;

  getAgingSinceTimestampSeconds(): number;
  setAgingSinceTimestampSeconds(value: number): void;

  hasSpawnAtTimestampSeconds(): boolean;
  clearSpawnAtTimestampSeconds(): void;
  getSpawnAtTimestampSeconds(): number;
  setSpawnAtTimestampSeconds(value: number): void;

  hasWhenDissolvedTimestampSeconds(): boolean;
  clearWhenDissolvedTimestampSeconds(): void;
  getWhenDissolvedTimestampSeconds(): number;
  setWhenDissolvedTimestampSeconds(value: number): void;

  hasDissolveDelaySeconds(): boolean;
  clearDissolveDelaySeconds(): void;
  getDissolveDelaySeconds(): number;
  setDissolveDelaySeconds(value: number): void;

  getFolloweesMap(): jspb.Map<number, Neuron.Followees>;
  clearFolloweesMap(): void;
  clearRecentBallotsList(): void;
  getRecentBallotsList(): Array<BallotInfo>;
  setRecentBallotsList(value: Array<BallotInfo>): void;
  addRecentBallots(value?: BallotInfo, index?: number): BallotInfo;

  getKycVerified(): boolean;
  setKycVerified(value: boolean): void;

  hasTransfer(): boolean;
  clearTransfer(): void;
  getTransfer(): NeuronStakeTransfer | undefined;
  setTransfer(value?: NeuronStakeTransfer): void;

  getMaturityE8sEquivalent(): number;
  setMaturityE8sEquivalent(value: number): void;

  hasStakedMaturityE8sEquivalent(): boolean;
  clearStakedMaturityE8sEquivalent(): void;
  getStakedMaturityE8sEquivalent(): number;
  setStakedMaturityE8sEquivalent(value: number): void;

  hasAutoStakeMaturity(): boolean;
  clearAutoStakeMaturity(): void;
  getAutoStakeMaturity(): boolean;
  setAutoStakeMaturity(value: boolean): void;

  getNotForProfit(): boolean;
  setNotForProfit(value: boolean): void;

  hasJoinedCommunityFundTimestampSeconds(): boolean;
  clearJoinedCommunityFundTimestampSeconds(): void;
  getJoinedCommunityFundTimestampSeconds(): number;
  setJoinedCommunityFundTimestampSeconds(value: number): void;

  hasKnownNeuronData(): boolean;
  clearKnownNeuronData(): void;
  getKnownNeuronData(): KnownNeuronData | undefined;
  setKnownNeuronData(value?: KnownNeuronData): void;

  hasNeuronType(): boolean;
  clearNeuronType(): void;
  getNeuronType(): NeuronTypeMap[keyof NeuronTypeMap];
  setNeuronType(value: NeuronTypeMap[keyof NeuronTypeMap]): void;

  getDissolveStateCase(): Neuron.DissolveStateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Neuron.AsObject;
  static toObject(includeInstance: boolean, msg: Neuron): Neuron.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Neuron, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Neuron;
  static deserializeBinaryFromReader(message: Neuron, reader: jspb.BinaryReader): Neuron;
}

export namespace Neuron {
  export type AsObject = {
    id?: nns_common_pb.NeuronId.AsObject,
    account: Uint8Array | string,
    controller?: base_types_pb.PrincipalId.AsObject,
    hotKeysList: Array<base_types_pb.PrincipalId.AsObject>,
    cachedNeuronStakeE8s: number,
    neuronFeesE8s: number,
    createdTimestampSeconds: number,
    agingSinceTimestampSeconds: number,
    spawnAtTimestampSeconds: number,
    whenDissolvedTimestampSeconds: number,
    dissolveDelaySeconds: number,
    followeesMap: Array<[number, Neuron.Followees.AsObject]>,
    recentBallotsList: Array<BallotInfo.AsObject>,
    kycVerified: boolean,
    transfer?: NeuronStakeTransfer.AsObject,
    maturityE8sEquivalent: number,
    stakedMaturityE8sEquivalent: number,
    autoStakeMaturity: boolean,
    notForProfit: boolean,
    joinedCommunityFundTimestampSeconds: number,
    knownNeuronData?: KnownNeuronData.AsObject,
    neuronType: NeuronTypeMap[keyof NeuronTypeMap],
  }

  export class Followees extends jspb.Message {
    clearFolloweesList(): void;
    getFolloweesList(): Array<nns_common_pb.NeuronId>;
    setFolloweesList(value: Array<nns_common_pb.NeuronId>): void;
    addFollowees(value?: nns_common_pb.NeuronId, index?: number): nns_common_pb.NeuronId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Followees.AsObject;
    static toObject(includeInstance: boolean, msg: Followees): Followees.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Followees, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Followees;
    static deserializeBinaryFromReader(message: Followees, reader: jspb.BinaryReader): Followees;
  }

  export namespace Followees {
    export type AsObject = {
      followeesList: Array<nns_common_pb.NeuronId.AsObject>,
    }
  }

  export enum DissolveStateCase {
    DISSOLVE_STATE_NOT_SET = 0,
    WHEN_DISSOLVED_TIMESTAMP_SECONDS = 9,
    DISSOLVE_DELAY_SECONDS = 10,
  }
}

export class AbridgedNeuron extends jspb.Message {
  getAccount(): Uint8Array | string;
  getAccount_asU8(): Uint8Array;
  getAccount_asB64(): string;
  setAccount(value: Uint8Array | string): void;

  hasController(): boolean;
  clearController(): void;
  getController(): base_types_pb.PrincipalId | undefined;
  setController(value?: base_types_pb.PrincipalId): void;

  getCachedNeuronStakeE8s(): number;
  setCachedNeuronStakeE8s(value: number): void;

  getNeuronFeesE8s(): number;
  setNeuronFeesE8s(value: number): void;

  getCreatedTimestampSeconds(): number;
  setCreatedTimestampSeconds(value: number): void;

  getAgingSinceTimestampSeconds(): number;
  setAgingSinceTimestampSeconds(value: number): void;

  hasSpawnAtTimestampSeconds(): boolean;
  clearSpawnAtTimestampSeconds(): void;
  getSpawnAtTimestampSeconds(): number;
  setSpawnAtTimestampSeconds(value: number): void;

  hasWhenDissolvedTimestampSeconds(): boolean;
  clearWhenDissolvedTimestampSeconds(): void;
  getWhenDissolvedTimestampSeconds(): number;
  setWhenDissolvedTimestampSeconds(value: number): void;

  hasDissolveDelaySeconds(): boolean;
  clearDissolveDelaySeconds(): void;
  getDissolveDelaySeconds(): number;
  setDissolveDelaySeconds(value: number): void;

  getKycVerified(): boolean;
  setKycVerified(value: boolean): void;

  getMaturityE8sEquivalent(): number;
  setMaturityE8sEquivalent(value: number): void;

  hasStakedMaturityE8sEquivalent(): boolean;
  clearStakedMaturityE8sEquivalent(): void;
  getStakedMaturityE8sEquivalent(): number;
  setStakedMaturityE8sEquivalent(value: number): void;

  hasAutoStakeMaturity(): boolean;
  clearAutoStakeMaturity(): void;
  getAutoStakeMaturity(): boolean;
  setAutoStakeMaturity(value: boolean): void;

  getNotForProfit(): boolean;
  setNotForProfit(value: boolean): void;

  hasJoinedCommunityFundTimestampSeconds(): boolean;
  clearJoinedCommunityFundTimestampSeconds(): void;
  getJoinedCommunityFundTimestampSeconds(): number;
  setJoinedCommunityFundTimestampSeconds(value: number): void;

  hasNeuronType(): boolean;
  clearNeuronType(): void;
  getNeuronType(): NeuronTypeMap[keyof NeuronTypeMap];
  setNeuronType(value: NeuronTypeMap[keyof NeuronTypeMap]): void;

  getDissolveStateCase(): AbridgedNeuron.DissolveStateCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbridgedNeuron.AsObject;
  static toObject(includeInstance: boolean, msg: AbridgedNeuron): AbridgedNeuron.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AbridgedNeuron, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbridgedNeuron;
  static deserializeBinaryFromReader(message: AbridgedNeuron, reader: jspb.BinaryReader): AbridgedNeuron;
}

export namespace AbridgedNeuron {
  export type AsObject = {
    account: Uint8Array | string,
    controller?: base_types_pb.PrincipalId.AsObject,
    cachedNeuronStakeE8s: number,
    neuronFeesE8s: number,
    createdTimestampSeconds: number,
    agingSinceTimestampSeconds: number,
    spawnAtTimestampSeconds: number,
    whenDissolvedTimestampSeconds: number,
    dissolveDelaySeconds: number,
    kycVerified: boolean,
    maturityE8sEquivalent: number,
    stakedMaturityE8sEquivalent: number,
    autoStakeMaturity: boolean,
    notForProfit: boolean,
    joinedCommunityFundTimestampSeconds: number,
    neuronType: NeuronTypeMap[keyof NeuronTypeMap],
  }

  export enum DissolveStateCase {
    DISSOLVE_STATE_NOT_SET = 0,
    WHEN_DISSOLVED_TIMESTAMP_SECONDS = 9,
    DISSOLVE_DELAY_SECONDS = 10,
  }
}

export class ExecuteNnsFunction extends jspb.Message {
  getNnsFunction(): NnsFunctionMap[keyof NnsFunctionMap];
  setNnsFunction(value: NnsFunctionMap[keyof NnsFunctionMap]): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteNnsFunction.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteNnsFunction): ExecuteNnsFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteNnsFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteNnsFunction;
  static deserializeBinaryFromReader(message: ExecuteNnsFunction, reader: jspb.BinaryReader): ExecuteNnsFunction;
}

export namespace ExecuteNnsFunction {
  export type AsObject = {
    nnsFunction: NnsFunctionMap[keyof NnsFunctionMap],
    payload: Uint8Array | string,
  }
}

export class Motion extends jspb.Message {
  getMotionText(): string;
  setMotionText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Motion.AsObject;
  static toObject(includeInstance: boolean, msg: Motion): Motion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Motion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Motion;
  static deserializeBinaryFromReader(message: Motion, reader: jspb.BinaryReader): Motion;
}

export namespace Motion {
  export type AsObject = {
    motionText: string,
  }
}

export class ApproveGenesisKYC extends jspb.Message {
  clearPrincipalsList(): void;
  getPrincipalsList(): Array<base_types_pb.PrincipalId>;
  setPrincipalsList(value: Array<base_types_pb.PrincipalId>): void;
  addPrincipals(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproveGenesisKYC.AsObject;
  static toObject(includeInstance: boolean, msg: ApproveGenesisKYC): ApproveGenesisKYC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApproveGenesisKYC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproveGenesisKYC;
  static deserializeBinaryFromReader(message: ApproveGenesisKYC, reader: jspb.BinaryReader): ApproveGenesisKYC;
}

export namespace ApproveGenesisKYC {
  export type AsObject = {
    principalsList: Array<base_types_pb.PrincipalId.AsObject>,
  }
}

export class AddOrRemoveNodeProvider extends jspb.Message {
  hasToAdd(): boolean;
  clearToAdd(): void;
  getToAdd(): NodeProvider | undefined;
  setToAdd(value?: NodeProvider): void;

  hasToRemove(): boolean;
  clearToRemove(): void;
  getToRemove(): NodeProvider | undefined;
  setToRemove(value?: NodeProvider): void;

  getChangeCase(): AddOrRemoveNodeProvider.ChangeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrRemoveNodeProvider.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrRemoveNodeProvider): AddOrRemoveNodeProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrRemoveNodeProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrRemoveNodeProvider;
  static deserializeBinaryFromReader(message: AddOrRemoveNodeProvider, reader: jspb.BinaryReader): AddOrRemoveNodeProvider;
}

export namespace AddOrRemoveNodeProvider {
  export type AsObject = {
    toAdd?: NodeProvider.AsObject,
    toRemove?: NodeProvider.AsObject,
  }

  export enum ChangeCase {
    CHANGE_NOT_SET = 0,
    TO_ADD = 1,
    TO_REMOVE = 2,
  }
}

export class RewardNodeProvider extends jspb.Message {
  hasNodeProvider(): boolean;
  clearNodeProvider(): void;
  getNodeProvider(): NodeProvider | undefined;
  setNodeProvider(value?: NodeProvider): void;

  getAmountE8s(): number;
  setAmountE8s(value: number): void;

  hasRewardToNeuron(): boolean;
  clearRewardToNeuron(): void;
  getRewardToNeuron(): RewardNodeProvider.RewardToNeuron | undefined;
  setRewardToNeuron(value?: RewardNodeProvider.RewardToNeuron): void;

  hasRewardToAccount(): boolean;
  clearRewardToAccount(): void;
  getRewardToAccount(): RewardNodeProvider.RewardToAccount | undefined;
  setRewardToAccount(value?: RewardNodeProvider.RewardToAccount): void;

  getRewardModeCase(): RewardNodeProvider.RewardModeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardNodeProvider.AsObject;
  static toObject(includeInstance: boolean, msg: RewardNodeProvider): RewardNodeProvider.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RewardNodeProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardNodeProvider;
  static deserializeBinaryFromReader(message: RewardNodeProvider, reader: jspb.BinaryReader): RewardNodeProvider;
}

export namespace RewardNodeProvider {
  export type AsObject = {
    nodeProvider?: NodeProvider.AsObject,
    amountE8s: number,
    rewardToNeuron?: RewardNodeProvider.RewardToNeuron.AsObject,
    rewardToAccount?: RewardNodeProvider.RewardToAccount.AsObject,
  }

  export class RewardToNeuron extends jspb.Message {
    getDissolveDelaySeconds(): number;
    setDissolveDelaySeconds(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardToNeuron.AsObject;
    static toObject(includeInstance: boolean, msg: RewardToNeuron): RewardToNeuron.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardToNeuron, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardToNeuron;
    static deserializeBinaryFromReader(message: RewardToNeuron, reader: jspb.BinaryReader): RewardToNeuron;
  }

  export namespace RewardToNeuron {
    export type AsObject = {
      dissolveDelaySeconds: number,
    }
  }

  export class RewardToAccount extends jspb.Message {
    hasToAccount(): boolean;
    clearToAccount(): void;
    getToAccount(): ledger_pb.AccountIdentifier | undefined;
    setToAccount(value?: ledger_pb.AccountIdentifier): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardToAccount.AsObject;
    static toObject(includeInstance: boolean, msg: RewardToAccount): RewardToAccount.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardToAccount, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardToAccount;
    static deserializeBinaryFromReader(message: RewardToAccount, reader: jspb.BinaryReader): RewardToAccount;
  }

  export namespace RewardToAccount {
    export type AsObject = {
      toAccount?: ledger_pb.AccountIdentifier.AsObject,
    }
  }

  export enum RewardModeCase {
    REWARD_MODE_NOT_SET = 0,
    REWARD_TO_NEURON = 4,
    REWARD_TO_ACCOUNT = 5,
  }
}

export class RewardNodeProviders extends jspb.Message {
  clearRewardsList(): void;
  getRewardsList(): Array<RewardNodeProvider>;
  setRewardsList(value: Array<RewardNodeProvider>): void;
  addRewards(value?: RewardNodeProvider, index?: number): RewardNodeProvider;

  hasUseRegistryDerivedRewards(): boolean;
  clearUseRegistryDerivedRewards(): void;
  getUseRegistryDerivedRewards(): boolean;
  setUseRegistryDerivedRewards(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardNodeProviders.AsObject;
  static toObject(includeInstance: boolean, msg: RewardNodeProviders): RewardNodeProviders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RewardNodeProviders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardNodeProviders;
  static deserializeBinaryFromReader(message: RewardNodeProviders, reader: jspb.BinaryReader): RewardNodeProviders;
}

export namespace RewardNodeProviders {
  export type AsObject = {
    rewardsList: Array<RewardNodeProvider.AsObject>,
    useRegistryDerivedRewards: boolean,
  }
}

export class SetDefaultFollowees extends jspb.Message {
  getDefaultFolloweesMap(): jspb.Map<number, Neuron.Followees>;
  clearDefaultFolloweesMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDefaultFollowees.AsObject;
  static toObject(includeInstance: boolean, msg: SetDefaultFollowees): SetDefaultFollowees.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDefaultFollowees, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDefaultFollowees;
  static deserializeBinaryFromReader(message: SetDefaultFollowees, reader: jspb.BinaryReader): SetDefaultFollowees;
}

export namespace SetDefaultFollowees {
  export type AsObject = {
    defaultFolloweesMap: Array<[number, Neuron.Followees.AsObject]>,
  }
}

export class SetSnsTokenSwapOpenTimeWindow extends jspb.Message {
  hasSwapCanisterId(): boolean;
  clearSwapCanisterId(): void;
  getSwapCanisterId(): base_types_pb.PrincipalId | undefined;
  setSwapCanisterId(value?: base_types_pb.PrincipalId): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): swap_pb.SetOpenTimeWindowRequest | undefined;
  setRequest(value?: swap_pb.SetOpenTimeWindowRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSnsTokenSwapOpenTimeWindow.AsObject;
  static toObject(includeInstance: boolean, msg: SetSnsTokenSwapOpenTimeWindow): SetSnsTokenSwapOpenTimeWindow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSnsTokenSwapOpenTimeWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSnsTokenSwapOpenTimeWindow;
  static deserializeBinaryFromReader(message: SetSnsTokenSwapOpenTimeWindow, reader: jspb.BinaryReader): SetSnsTokenSwapOpenTimeWindow;
}

export namespace SetSnsTokenSwapOpenTimeWindow {
  export type AsObject = {
    swapCanisterId?: base_types_pb.PrincipalId.AsObject,
    request?: swap_pb.SetOpenTimeWindowRequest.AsObject,
  }
}

export class Proposal extends jspb.Message {
  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string;
  setTitle(value: string): void;

  getSummary(): string;
  setSummary(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  hasManageNeuron(): boolean;
  clearManageNeuron(): void;
  getManageNeuron(): ManageNeuron | undefined;
  setManageNeuron(value?: ManageNeuron): void;

  hasManageNetworkEconomics(): boolean;
  clearManageNetworkEconomics(): void;
  getManageNetworkEconomics(): NetworkEconomics | undefined;
  setManageNetworkEconomics(value?: NetworkEconomics): void;

  hasMotion(): boolean;
  clearMotion(): void;
  getMotion(): Motion | undefined;
  setMotion(value?: Motion): void;

  hasExecuteNnsFunction(): boolean;
  clearExecuteNnsFunction(): void;
  getExecuteNnsFunction(): ExecuteNnsFunction | undefined;
  setExecuteNnsFunction(value?: ExecuteNnsFunction): void;

  hasApproveGenesisKyc(): boolean;
  clearApproveGenesisKyc(): void;
  getApproveGenesisKyc(): ApproveGenesisKYC | undefined;
  setApproveGenesisKyc(value?: ApproveGenesisKYC): void;

  hasAddOrRemoveNodeProvider(): boolean;
  clearAddOrRemoveNodeProvider(): void;
  getAddOrRemoveNodeProvider(): AddOrRemoveNodeProvider | undefined;
  setAddOrRemoveNodeProvider(value?: AddOrRemoveNodeProvider): void;

  hasRewardNodeProvider(): boolean;
  clearRewardNodeProvider(): void;
  getRewardNodeProvider(): RewardNodeProvider | undefined;
  setRewardNodeProvider(value?: RewardNodeProvider): void;

  hasSetDefaultFollowees(): boolean;
  clearSetDefaultFollowees(): void;
  getSetDefaultFollowees(): SetDefaultFollowees | undefined;
  setSetDefaultFollowees(value?: SetDefaultFollowees): void;

  hasRewardNodeProviders(): boolean;
  clearRewardNodeProviders(): void;
  getRewardNodeProviders(): RewardNodeProviders | undefined;
  setRewardNodeProviders(value?: RewardNodeProviders): void;

  hasRegisterKnownNeuron(): boolean;
  clearRegisterKnownNeuron(): void;
  getRegisterKnownNeuron(): KnownNeuron | undefined;
  setRegisterKnownNeuron(value?: KnownNeuron): void;

  hasSetSnsTokenSwapOpenTimeWindow(): boolean;
  clearSetSnsTokenSwapOpenTimeWindow(): void;
  getSetSnsTokenSwapOpenTimeWindow(): SetSnsTokenSwapOpenTimeWindow | undefined;
  setSetSnsTokenSwapOpenTimeWindow(value?: SetSnsTokenSwapOpenTimeWindow): void;

  hasOpenSnsTokenSwap(): boolean;
  clearOpenSnsTokenSwap(): void;
  getOpenSnsTokenSwap(): OpenSnsTokenSwap | undefined;
  setOpenSnsTokenSwap(value?: OpenSnsTokenSwap): void;

  hasCreateServiceNervousSystem(): boolean;
  clearCreateServiceNervousSystem(): void;
  getCreateServiceNervousSystem(): CreateServiceNervousSystem | undefined;
  setCreateServiceNervousSystem(value?: CreateServiceNervousSystem): void;

  getActionCase(): Proposal.ActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    title: string,
    summary: string,
    url: string,
    manageNeuron?: ManageNeuron.AsObject,
    manageNetworkEconomics?: NetworkEconomics.AsObject,
    motion?: Motion.AsObject,
    executeNnsFunction?: ExecuteNnsFunction.AsObject,
    approveGenesisKyc?: ApproveGenesisKYC.AsObject,
    addOrRemoveNodeProvider?: AddOrRemoveNodeProvider.AsObject,
    rewardNodeProvider?: RewardNodeProvider.AsObject,
    setDefaultFollowees?: SetDefaultFollowees.AsObject,
    rewardNodeProviders?: RewardNodeProviders.AsObject,
    registerKnownNeuron?: KnownNeuron.AsObject,
    setSnsTokenSwapOpenTimeWindow?: SetSnsTokenSwapOpenTimeWindow.AsObject,
    openSnsTokenSwap?: OpenSnsTokenSwap.AsObject,
    createServiceNervousSystem?: CreateServiceNervousSystem.AsObject,
  }

  export enum ActionCase {
    ACTION_NOT_SET = 0,
    MANAGE_NEURON = 10,
    MANAGE_NETWORK_ECONOMICS = 12,
    MOTION = 13,
    EXECUTE_NNS_FUNCTION = 14,
    APPROVE_GENESIS_KYC = 15,
    ADD_OR_REMOVE_NODE_PROVIDER = 16,
    REWARD_NODE_PROVIDER = 17,
    SET_DEFAULT_FOLLOWEES = 18,
    REWARD_NODE_PROVIDERS = 19,
    REGISTER_KNOWN_NEURON = 21,
    SET_SNS_TOKEN_SWAP_OPEN_TIME_WINDOW = 22,
    OPEN_SNS_TOKEN_SWAP = 23,
    CREATE_SERVICE_NERVOUS_SYSTEM = 24,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class ManageNeuron extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): nns_common_pb.NeuronId | undefined;
  setId(value?: nns_common_pb.NeuronId): void;

  hasSubaccount(): boolean;
  clearSubaccount(): void;
  getSubaccount(): Uint8Array | string;
  getSubaccount_asU8(): Uint8Array;
  getSubaccount_asB64(): string;
  setSubaccount(value: Uint8Array | string): void;

  hasNeuronId(): boolean;
  clearNeuronId(): void;
  getNeuronId(): nns_common_pb.NeuronId | undefined;
  setNeuronId(value?: nns_common_pb.NeuronId): void;

  hasConfigure(): boolean;
  clearConfigure(): void;
  getConfigure(): ManageNeuron.Configure | undefined;
  setConfigure(value?: ManageNeuron.Configure): void;

  hasDisburse(): boolean;
  clearDisburse(): void;
  getDisburse(): ManageNeuron.Disburse | undefined;
  setDisburse(value?: ManageNeuron.Disburse): void;

  hasSpawn(): boolean;
  clearSpawn(): void;
  getSpawn(): ManageNeuron.Spawn | undefined;
  setSpawn(value?: ManageNeuron.Spawn): void;

  hasFollow(): boolean;
  clearFollow(): void;
  getFollow(): ManageNeuron.Follow | undefined;
  setFollow(value?: ManageNeuron.Follow): void;

  hasMakeProposal(): boolean;
  clearMakeProposal(): void;
  getMakeProposal(): Proposal | undefined;
  setMakeProposal(value?: Proposal): void;

  hasRegisterVote(): boolean;
  clearRegisterVote(): void;
  getRegisterVote(): ManageNeuron.RegisterVote | undefined;
  setRegisterVote(value?: ManageNeuron.RegisterVote): void;

  hasSplit(): boolean;
  clearSplit(): void;
  getSplit(): ManageNeuron.Split | undefined;
  setSplit(value?: ManageNeuron.Split): void;

  hasDisburseToNeuron(): boolean;
  clearDisburseToNeuron(): void;
  getDisburseToNeuron(): ManageNeuron.DisburseToNeuron | undefined;
  setDisburseToNeuron(value?: ManageNeuron.DisburseToNeuron): void;

  hasClaimOrRefresh(): boolean;
  clearClaimOrRefresh(): void;
  getClaimOrRefresh(): ManageNeuron.ClaimOrRefresh | undefined;
  setClaimOrRefresh(value?: ManageNeuron.ClaimOrRefresh): void;

  hasMergeMaturity(): boolean;
  clearMergeMaturity(): void;
  getMergeMaturity(): ManageNeuron.MergeMaturity | undefined;
  setMergeMaturity(value?: ManageNeuron.MergeMaturity): void;

  hasMerge(): boolean;
  clearMerge(): void;
  getMerge(): ManageNeuron.Merge | undefined;
  setMerge(value?: ManageNeuron.Merge): void;

  hasStakeMaturity(): boolean;
  clearStakeMaturity(): void;
  getStakeMaturity(): ManageNeuron.StakeMaturity | undefined;
  setStakeMaturity(value?: ManageNeuron.StakeMaturity): void;

  getNeuronIdOrSubaccountCase(): ManageNeuron.NeuronIdOrSubaccountCase;
  getCommandCase(): ManageNeuron.CommandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageNeuron.AsObject;
  static toObject(includeInstance: boolean, msg: ManageNeuron): ManageNeuron.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManageNeuron, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageNeuron;
  static deserializeBinaryFromReader(message: ManageNeuron, reader: jspb.BinaryReader): ManageNeuron;
}

export namespace ManageNeuron {
  export type AsObject = {
    id?: nns_common_pb.NeuronId.AsObject,
    subaccount: Uint8Array | string,
    neuronId?: nns_common_pb.NeuronId.AsObject,
    configure?: ManageNeuron.Configure.AsObject,
    disburse?: ManageNeuron.Disburse.AsObject,
    spawn?: ManageNeuron.Spawn.AsObject,
    follow?: ManageNeuron.Follow.AsObject,
    makeProposal?: Proposal.AsObject,
    registerVote?: ManageNeuron.RegisterVote.AsObject,
    split?: ManageNeuron.Split.AsObject,
    disburseToNeuron?: ManageNeuron.DisburseToNeuron.AsObject,
    claimOrRefresh?: ManageNeuron.ClaimOrRefresh.AsObject,
    mergeMaturity?: ManageNeuron.MergeMaturity.AsObject,
    merge?: ManageNeuron.Merge.AsObject,
    stakeMaturity?: ManageNeuron.StakeMaturity.AsObject,
  }

  export class IncreaseDissolveDelay extends jspb.Message {
    getAdditionalDissolveDelaySeconds(): number;
    setAdditionalDissolveDelaySeconds(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IncreaseDissolveDelay.AsObject;
    static toObject(includeInstance: boolean, msg: IncreaseDissolveDelay): IncreaseDissolveDelay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IncreaseDissolveDelay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IncreaseDissolveDelay;
    static deserializeBinaryFromReader(message: IncreaseDissolveDelay, reader: jspb.BinaryReader): IncreaseDissolveDelay;
  }

  export namespace IncreaseDissolveDelay {
    export type AsObject = {
      additionalDissolveDelaySeconds: number,
    }
  }

  export class StartDissolving extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartDissolving.AsObject;
    static toObject(includeInstance: boolean, msg: StartDissolving): StartDissolving.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartDissolving, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartDissolving;
    static deserializeBinaryFromReader(message: StartDissolving, reader: jspb.BinaryReader): StartDissolving;
  }

  export namespace StartDissolving {
    export type AsObject = {
    }
  }

  export class StopDissolving extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopDissolving.AsObject;
    static toObject(includeInstance: boolean, msg: StopDissolving): StopDissolving.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopDissolving, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopDissolving;
    static deserializeBinaryFromReader(message: StopDissolving, reader: jspb.BinaryReader): StopDissolving;
  }

  export namespace StopDissolving {
    export type AsObject = {
    }
  }

  export class AddHotKey extends jspb.Message {
    hasNewHotKey(): boolean;
    clearNewHotKey(): void;
    getNewHotKey(): base_types_pb.PrincipalId | undefined;
    setNewHotKey(value?: base_types_pb.PrincipalId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddHotKey.AsObject;
    static toObject(includeInstance: boolean, msg: AddHotKey): AddHotKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddHotKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddHotKey;
    static deserializeBinaryFromReader(message: AddHotKey, reader: jspb.BinaryReader): AddHotKey;
  }

  export namespace AddHotKey {
    export type AsObject = {
      newHotKey?: base_types_pb.PrincipalId.AsObject,
    }
  }

  export class RemoveHotKey extends jspb.Message {
    hasHotKeyToRemove(): boolean;
    clearHotKeyToRemove(): void;
    getHotKeyToRemove(): base_types_pb.PrincipalId | undefined;
    setHotKeyToRemove(value?: base_types_pb.PrincipalId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveHotKey.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveHotKey): RemoveHotKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveHotKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveHotKey;
    static deserializeBinaryFromReader(message: RemoveHotKey, reader: jspb.BinaryReader): RemoveHotKey;
  }

  export namespace RemoveHotKey {
    export type AsObject = {
      hotKeyToRemove?: base_types_pb.PrincipalId.AsObject,
    }
  }

  export class SetDissolveTimestamp extends jspb.Message {
    getDissolveTimestampSeconds(): number;
    setDissolveTimestampSeconds(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDissolveTimestamp.AsObject;
    static toObject(includeInstance: boolean, msg: SetDissolveTimestamp): SetDissolveTimestamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDissolveTimestamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDissolveTimestamp;
    static deserializeBinaryFromReader(message: SetDissolveTimestamp, reader: jspb.BinaryReader): SetDissolveTimestamp;
  }

  export namespace SetDissolveTimestamp {
    export type AsObject = {
      dissolveTimestampSeconds: number,
    }
  }

  export class JoinCommunityFund extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinCommunityFund.AsObject;
    static toObject(includeInstance: boolean, msg: JoinCommunityFund): JoinCommunityFund.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinCommunityFund, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinCommunityFund;
    static deserializeBinaryFromReader(message: JoinCommunityFund, reader: jspb.BinaryReader): JoinCommunityFund;
  }

  export namespace JoinCommunityFund {
    export type AsObject = {
    }
  }

  export class LeaveCommunityFund extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveCommunityFund.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveCommunityFund): LeaveCommunityFund.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveCommunityFund, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveCommunityFund;
    static deserializeBinaryFromReader(message: LeaveCommunityFund, reader: jspb.BinaryReader): LeaveCommunityFund;
  }

  export namespace LeaveCommunityFund {
    export type AsObject = {
    }
  }

  export class ChangeAutoStakeMaturity extends jspb.Message {
    getRequestedSettingForAutoStakeMaturity(): boolean;
    setRequestedSettingForAutoStakeMaturity(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangeAutoStakeMaturity.AsObject;
    static toObject(includeInstance: boolean, msg: ChangeAutoStakeMaturity): ChangeAutoStakeMaturity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangeAutoStakeMaturity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangeAutoStakeMaturity;
    static deserializeBinaryFromReader(message: ChangeAutoStakeMaturity, reader: jspb.BinaryReader): ChangeAutoStakeMaturity;
  }

  export namespace ChangeAutoStakeMaturity {
    export type AsObject = {
      requestedSettingForAutoStakeMaturity: boolean,
    }
  }

  export class Configure extends jspb.Message {
    hasIncreaseDissolveDelay(): boolean;
    clearIncreaseDissolveDelay(): void;
    getIncreaseDissolveDelay(): ManageNeuron.IncreaseDissolveDelay | undefined;
    setIncreaseDissolveDelay(value?: ManageNeuron.IncreaseDissolveDelay): void;

    hasStartDissolving(): boolean;
    clearStartDissolving(): void;
    getStartDissolving(): ManageNeuron.StartDissolving | undefined;
    setStartDissolving(value?: ManageNeuron.StartDissolving): void;

    hasStopDissolving(): boolean;
    clearStopDissolving(): void;
    getStopDissolving(): ManageNeuron.StopDissolving | undefined;
    setStopDissolving(value?: ManageNeuron.StopDissolving): void;

    hasAddHotKey(): boolean;
    clearAddHotKey(): void;
    getAddHotKey(): ManageNeuron.AddHotKey | undefined;
    setAddHotKey(value?: ManageNeuron.AddHotKey): void;

    hasRemoveHotKey(): boolean;
    clearRemoveHotKey(): void;
    getRemoveHotKey(): ManageNeuron.RemoveHotKey | undefined;
    setRemoveHotKey(value?: ManageNeuron.RemoveHotKey): void;

    hasSetDissolveTimestamp(): boolean;
    clearSetDissolveTimestamp(): void;
    getSetDissolveTimestamp(): ManageNeuron.SetDissolveTimestamp | undefined;
    setSetDissolveTimestamp(value?: ManageNeuron.SetDissolveTimestamp): void;

    hasJoinCommunityFund(): boolean;
    clearJoinCommunityFund(): void;
    getJoinCommunityFund(): ManageNeuron.JoinCommunityFund | undefined;
    setJoinCommunityFund(value?: ManageNeuron.JoinCommunityFund): void;

    hasLeaveCommunityFund(): boolean;
    clearLeaveCommunityFund(): void;
    getLeaveCommunityFund(): ManageNeuron.LeaveCommunityFund | undefined;
    setLeaveCommunityFund(value?: ManageNeuron.LeaveCommunityFund): void;

    hasChangeAutoStakeMaturity(): boolean;
    clearChangeAutoStakeMaturity(): void;
    getChangeAutoStakeMaturity(): ManageNeuron.ChangeAutoStakeMaturity | undefined;
    setChangeAutoStakeMaturity(value?: ManageNeuron.ChangeAutoStakeMaturity): void;

    getOperationCase(): Configure.OperationCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Configure.AsObject;
    static toObject(includeInstance: boolean, msg: Configure): Configure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Configure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Configure;
    static deserializeBinaryFromReader(message: Configure, reader: jspb.BinaryReader): Configure;
  }

  export namespace Configure {
    export type AsObject = {
      increaseDissolveDelay?: ManageNeuron.IncreaseDissolveDelay.AsObject,
      startDissolving?: ManageNeuron.StartDissolving.AsObject,
      stopDissolving?: ManageNeuron.StopDissolving.AsObject,
      addHotKey?: ManageNeuron.AddHotKey.AsObject,
      removeHotKey?: ManageNeuron.RemoveHotKey.AsObject,
      setDissolveTimestamp?: ManageNeuron.SetDissolveTimestamp.AsObject,
      joinCommunityFund?: ManageNeuron.JoinCommunityFund.AsObject,
      leaveCommunityFund?: ManageNeuron.LeaveCommunityFund.AsObject,
      changeAutoStakeMaturity?: ManageNeuron.ChangeAutoStakeMaturity.AsObject,
    }

    export enum OperationCase {
      OPERATION_NOT_SET = 0,
      INCREASE_DISSOLVE_DELAY = 1,
      START_DISSOLVING = 2,
      STOP_DISSOLVING = 3,
      ADD_HOT_KEY = 4,
      REMOVE_HOT_KEY = 5,
      SET_DISSOLVE_TIMESTAMP = 6,
      JOIN_COMMUNITY_FUND = 7,
      LEAVE_COMMUNITY_FUND = 8,
      CHANGE_AUTO_STAKE_MATURITY = 9,
    }
  }

  export class Disburse extends jspb.Message {
    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): ManageNeuron.Disburse.Amount | undefined;
    setAmount(value?: ManageNeuron.Disburse.Amount): void;

    hasToAccount(): boolean;
    clearToAccount(): void;
    getToAccount(): ledger_pb.AccountIdentifier | undefined;
    setToAccount(value?: ledger_pb.AccountIdentifier): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Disburse.AsObject;
    static toObject(includeInstance: boolean, msg: Disburse): Disburse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Disburse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Disburse;
    static deserializeBinaryFromReader(message: Disburse, reader: jspb.BinaryReader): Disburse;
  }

  export namespace Disburse {
    export type AsObject = {
      amount?: ManageNeuron.Disburse.Amount.AsObject,
      toAccount?: ledger_pb.AccountIdentifier.AsObject,
    }

    export class Amount extends jspb.Message {
      getE8s(): number;
      setE8s(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Amount.AsObject;
      static toObject(includeInstance: boolean, msg: Amount): Amount.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Amount, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Amount;
      static deserializeBinaryFromReader(message: Amount, reader: jspb.BinaryReader): Amount;
    }

    export namespace Amount {
      export type AsObject = {
        e8s: number,
      }
    }
  }

  export class Split extends jspb.Message {
    getAmountE8s(): number;
    setAmountE8s(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Split.AsObject;
    static toObject(includeInstance: boolean, msg: Split): Split.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Split, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Split;
    static deserializeBinaryFromReader(message: Split, reader: jspb.BinaryReader): Split;
  }

  export namespace Split {
    export type AsObject = {
      amountE8s: number,
    }
  }

  export class Merge extends jspb.Message {
    hasSourceNeuronId(): boolean;
    clearSourceNeuronId(): void;
    getSourceNeuronId(): nns_common_pb.NeuronId | undefined;
    setSourceNeuronId(value?: nns_common_pb.NeuronId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Merge.AsObject;
    static toObject(includeInstance: boolean, msg: Merge): Merge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Merge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Merge;
    static deserializeBinaryFromReader(message: Merge, reader: jspb.BinaryReader): Merge;
  }

  export namespace Merge {
    export type AsObject = {
      sourceNeuronId?: nns_common_pb.NeuronId.AsObject,
    }
  }

  export class Spawn extends jspb.Message {
    hasNewController(): boolean;
    clearNewController(): void;
    getNewController(): base_types_pb.PrincipalId | undefined;
    setNewController(value?: base_types_pb.PrincipalId): void;

    hasNonce(): boolean;
    clearNonce(): void;
    getNonce(): number;
    setNonce(value: number): void;

    hasPercentageToSpawn(): boolean;
    clearPercentageToSpawn(): void;
    getPercentageToSpawn(): number;
    setPercentageToSpawn(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spawn.AsObject;
    static toObject(includeInstance: boolean, msg: Spawn): Spawn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spawn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spawn;
    static deserializeBinaryFromReader(message: Spawn, reader: jspb.BinaryReader): Spawn;
  }

  export namespace Spawn {
    export type AsObject = {
      newController?: base_types_pb.PrincipalId.AsObject,
      nonce: number,
      percentageToSpawn: number,
    }
  }

  export class MergeMaturity extends jspb.Message {
    getPercentageToMerge(): number;
    setPercentageToMerge(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MergeMaturity.AsObject;
    static toObject(includeInstance: boolean, msg: MergeMaturity): MergeMaturity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MergeMaturity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MergeMaturity;
    static deserializeBinaryFromReader(message: MergeMaturity, reader: jspb.BinaryReader): MergeMaturity;
  }

  export namespace MergeMaturity {
    export type AsObject = {
      percentageToMerge: number,
    }
  }

  export class StakeMaturity extends jspb.Message {
    hasPercentageToStake(): boolean;
    clearPercentageToStake(): void;
    getPercentageToStake(): number;
    setPercentageToStake(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeMaturity.AsObject;
    static toObject(includeInstance: boolean, msg: StakeMaturity): StakeMaturity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeMaturity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeMaturity;
    static deserializeBinaryFromReader(message: StakeMaturity, reader: jspb.BinaryReader): StakeMaturity;
  }

  export namespace StakeMaturity {
    export type AsObject = {
      percentageToStake: number,
    }
  }

  export class DisburseToNeuron extends jspb.Message {
    hasNewController(): boolean;
    clearNewController(): void;
    getNewController(): base_types_pb.PrincipalId | undefined;
    setNewController(value?: base_types_pb.PrincipalId): void;

    getAmountE8s(): number;
    setAmountE8s(value: number): void;

    getDissolveDelaySeconds(): number;
    setDissolveDelaySeconds(value: number): void;

    getKycVerified(): boolean;
    setKycVerified(value: boolean): void;

    getNonce(): number;
    setNonce(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisburseToNeuron.AsObject;
    static toObject(includeInstance: boolean, msg: DisburseToNeuron): DisburseToNeuron.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisburseToNeuron, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisburseToNeuron;
    static deserializeBinaryFromReader(message: DisburseToNeuron, reader: jspb.BinaryReader): DisburseToNeuron;
  }

  export namespace DisburseToNeuron {
    export type AsObject = {
      newController?: base_types_pb.PrincipalId.AsObject,
      amountE8s: number,
      dissolveDelaySeconds: number,
      kycVerified: boolean,
      nonce: number,
    }
  }

  export class Follow extends jspb.Message {
    getTopic(): TopicMap[keyof TopicMap];
    setTopic(value: TopicMap[keyof TopicMap]): void;

    clearFolloweesList(): void;
    getFolloweesList(): Array<nns_common_pb.NeuronId>;
    setFolloweesList(value: Array<nns_common_pb.NeuronId>): void;
    addFollowees(value?: nns_common_pb.NeuronId, index?: number): nns_common_pb.NeuronId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Follow.AsObject;
    static toObject(includeInstance: boolean, msg: Follow): Follow.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Follow, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Follow;
    static deserializeBinaryFromReader(message: Follow, reader: jspb.BinaryReader): Follow;
  }

  export namespace Follow {
    export type AsObject = {
      topic: TopicMap[keyof TopicMap],
      followeesList: Array<nns_common_pb.NeuronId.AsObject>,
    }
  }

  export class RegisterVote extends jspb.Message {
    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): nns_common_pb.ProposalId | undefined;
    setProposal(value?: nns_common_pb.ProposalId): void;

    getVote(): VoteMap[keyof VoteMap];
    setVote(value: VoteMap[keyof VoteMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterVote.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterVote): RegisterVote.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterVote, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterVote;
    static deserializeBinaryFromReader(message: RegisterVote, reader: jspb.BinaryReader): RegisterVote;
  }

  export namespace RegisterVote {
    export type AsObject = {
      proposal?: nns_common_pb.ProposalId.AsObject,
      vote: VoteMap[keyof VoteMap],
    }
  }

  export class ClaimOrRefresh extends jspb.Message {
    hasMemo(): boolean;
    clearMemo(): void;
    getMemo(): number;
    setMemo(value: number): void;

    hasMemoAndController(): boolean;
    clearMemoAndController(): void;
    getMemoAndController(): ManageNeuron.ClaimOrRefresh.MemoAndController | undefined;
    setMemoAndController(value?: ManageNeuron.ClaimOrRefresh.MemoAndController): void;

    hasNeuronIdOrSubaccount(): boolean;
    clearNeuronIdOrSubaccount(): void;
    getNeuronIdOrSubaccount(): Empty | undefined;
    setNeuronIdOrSubaccount(value?: Empty): void;

    getByCase(): ClaimOrRefresh.ByCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClaimOrRefresh.AsObject;
    static toObject(includeInstance: boolean, msg: ClaimOrRefresh): ClaimOrRefresh.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClaimOrRefresh, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClaimOrRefresh;
    static deserializeBinaryFromReader(message: ClaimOrRefresh, reader: jspb.BinaryReader): ClaimOrRefresh;
  }

  export namespace ClaimOrRefresh {
    export type AsObject = {
      memo: number,
      memoAndController?: ManageNeuron.ClaimOrRefresh.MemoAndController.AsObject,
      neuronIdOrSubaccount?: Empty.AsObject,
    }

    export class MemoAndController extends jspb.Message {
      getMemo(): number;
      setMemo(value: number): void;

      hasController(): boolean;
      clearController(): void;
      getController(): base_types_pb.PrincipalId | undefined;
      setController(value?: base_types_pb.PrincipalId): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MemoAndController.AsObject;
      static toObject(includeInstance: boolean, msg: MemoAndController): MemoAndController.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MemoAndController, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MemoAndController;
      static deserializeBinaryFromReader(message: MemoAndController, reader: jspb.BinaryReader): MemoAndController;
    }

    export namespace MemoAndController {
      export type AsObject = {
        memo: number,
        controller?: base_types_pb.PrincipalId.AsObject,
      }
    }

    export enum ByCase {
      BY_NOT_SET = 0,
      MEMO = 1,
      MEMO_AND_CONTROLLER = 2,
      NEURON_ID_OR_SUBACCOUNT = 3,
    }
  }

  export enum NeuronIdOrSubaccountCase {
    NEURON_ID_OR_SUBACCOUNT_NOT_SET = 0,
    SUBACCOUNT = 11,
    NEURON_ID = 12,
  }

  export enum CommandCase {
    COMMAND_NOT_SET = 0,
    CONFIGURE = 2,
    DISBURSE = 3,
    SPAWN = 4,
    FOLLOW = 5,
    MAKE_PROPOSAL = 6,
    REGISTER_VOTE = 7,
    SPLIT = 8,
    DISBURSE_TO_NEURON = 9,
    CLAIM_OR_REFRESH = 10,
    MERGE_MATURITY = 13,
    MERGE = 14,
    STAKE_MATURITY = 15,
  }
}

export class ManageNeuronResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): GovernanceError | undefined;
  setError(value?: GovernanceError): void;

  hasConfigure(): boolean;
  clearConfigure(): void;
  getConfigure(): ManageNeuronResponse.ConfigureResponse | undefined;
  setConfigure(value?: ManageNeuronResponse.ConfigureResponse): void;

  hasDisburse(): boolean;
  clearDisburse(): void;
  getDisburse(): ManageNeuronResponse.DisburseResponse | undefined;
  setDisburse(value?: ManageNeuronResponse.DisburseResponse): void;

  hasSpawn(): boolean;
  clearSpawn(): void;
  getSpawn(): ManageNeuronResponse.SpawnResponse | undefined;
  setSpawn(value?: ManageNeuronResponse.SpawnResponse): void;

  hasFollow(): boolean;
  clearFollow(): void;
  getFollow(): ManageNeuronResponse.FollowResponse | undefined;
  setFollow(value?: ManageNeuronResponse.FollowResponse): void;

  hasMakeProposal(): boolean;
  clearMakeProposal(): void;
  getMakeProposal(): ManageNeuronResponse.MakeProposalResponse | undefined;
  setMakeProposal(value?: ManageNeuronResponse.MakeProposalResponse): void;

  hasRegisterVote(): boolean;
  clearRegisterVote(): void;
  getRegisterVote(): ManageNeuronResponse.RegisterVoteResponse | undefined;
  setRegisterVote(value?: ManageNeuronResponse.RegisterVoteResponse): void;

  hasSplit(): boolean;
  clearSplit(): void;
  getSplit(): ManageNeuronResponse.SplitResponse | undefined;
  setSplit(value?: ManageNeuronResponse.SplitResponse): void;

  hasDisburseToNeuron(): boolean;
  clearDisburseToNeuron(): void;
  getDisburseToNeuron(): ManageNeuronResponse.DisburseToNeuronResponse | undefined;
  setDisburseToNeuron(value?: ManageNeuronResponse.DisburseToNeuronResponse): void;

  hasClaimOrRefresh(): boolean;
  clearClaimOrRefresh(): void;
  getClaimOrRefresh(): ManageNeuronResponse.ClaimOrRefreshResponse | undefined;
  setClaimOrRefresh(value?: ManageNeuronResponse.ClaimOrRefreshResponse): void;

  hasMergeMaturity(): boolean;
  clearMergeMaturity(): void;
  getMergeMaturity(): ManageNeuronResponse.MergeMaturityResponse | undefined;
  setMergeMaturity(value?: ManageNeuronResponse.MergeMaturityResponse): void;

  hasMerge(): boolean;
  clearMerge(): void;
  getMerge(): ManageNeuronResponse.MergeResponse | undefined;
  setMerge(value?: ManageNeuronResponse.MergeResponse): void;

  hasStakeMaturity(): boolean;
  clearStakeMaturity(): void;
  getStakeMaturity(): ManageNeuronResponse.StakeMaturityResponse | undefined;
  setStakeMaturity(value?: ManageNeuronResponse.StakeMaturityResponse): void;

  getCommandCase(): ManageNeuronResponse.CommandCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManageNeuronResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ManageNeuronResponse): ManageNeuronResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManageNeuronResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManageNeuronResponse;
  static deserializeBinaryFromReader(message: ManageNeuronResponse, reader: jspb.BinaryReader): ManageNeuronResponse;
}

export namespace ManageNeuronResponse {
  export type AsObject = {
    error?: GovernanceError.AsObject,
    configure?: ManageNeuronResponse.ConfigureResponse.AsObject,
    disburse?: ManageNeuronResponse.DisburseResponse.AsObject,
    spawn?: ManageNeuronResponse.SpawnResponse.AsObject,
    follow?: ManageNeuronResponse.FollowResponse.AsObject,
    makeProposal?: ManageNeuronResponse.MakeProposalResponse.AsObject,
    registerVote?: ManageNeuronResponse.RegisterVoteResponse.AsObject,
    split?: ManageNeuronResponse.SplitResponse.AsObject,
    disburseToNeuron?: ManageNeuronResponse.DisburseToNeuronResponse.AsObject,
    claimOrRefresh?: ManageNeuronResponse.ClaimOrRefreshResponse.AsObject,
    mergeMaturity?: ManageNeuronResponse.MergeMaturityResponse.AsObject,
    merge?: ManageNeuronResponse.MergeResponse.AsObject,
    stakeMaturity?: ManageNeuronResponse.StakeMaturityResponse.AsObject,
  }

  export class ConfigureResponse extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfigureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConfigureResponse): ConfigureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfigureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfigureResponse;
    static deserializeBinaryFromReader(message: ConfigureResponse, reader: jspb.BinaryReader): ConfigureResponse;
  }

  export namespace ConfigureResponse {
    export type AsObject = {
    }
  }

  export class DisburseResponse extends jspb.Message {
    getTransferBlockHeight(): number;
    setTransferBlockHeight(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisburseResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DisburseResponse): DisburseResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisburseResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisburseResponse;
    static deserializeBinaryFromReader(message: DisburseResponse, reader: jspb.BinaryReader): DisburseResponse;
  }

  export namespace DisburseResponse {
    export type AsObject = {
      transferBlockHeight: number,
    }
  }

  export class SpawnResponse extends jspb.Message {
    hasCreatedNeuronId(): boolean;
    clearCreatedNeuronId(): void;
    getCreatedNeuronId(): nns_common_pb.NeuronId | undefined;
    setCreatedNeuronId(value?: nns_common_pb.NeuronId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpawnResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SpawnResponse): SpawnResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpawnResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpawnResponse;
    static deserializeBinaryFromReader(message: SpawnResponse, reader: jspb.BinaryReader): SpawnResponse;
  }

  export namespace SpawnResponse {
    export type AsObject = {
      createdNeuronId?: nns_common_pb.NeuronId.AsObject,
    }
  }

  export class MergeMaturityResponse extends jspb.Message {
    getMergedMaturityE8s(): number;
    setMergedMaturityE8s(value: number): void;

    getNewStakeE8s(): number;
    setNewStakeE8s(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MergeMaturityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MergeMaturityResponse): MergeMaturityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MergeMaturityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MergeMaturityResponse;
    static deserializeBinaryFromReader(message: MergeMaturityResponse, reader: jspb.BinaryReader): MergeMaturityResponse;
  }

  export namespace MergeMaturityResponse {
    export type AsObject = {
      mergedMaturityE8s: number,
      newStakeE8s: number,
    }
  }

  export class StakeMaturityResponse extends jspb.Message {
    getMaturityE8s(): number;
    setMaturityE8s(value: number): void;

    getStakedMaturityE8s(): number;
    setStakedMaturityE8s(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeMaturityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StakeMaturityResponse): StakeMaturityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeMaturityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeMaturityResponse;
    static deserializeBinaryFromReader(message: StakeMaturityResponse, reader: jspb.BinaryReader): StakeMaturityResponse;
  }

  export namespace StakeMaturityResponse {
    export type AsObject = {
      maturityE8s: number,
      stakedMaturityE8s: number,
    }
  }

  export class FollowResponse extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FollowResponse): FollowResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowResponse;
    static deserializeBinaryFromReader(message: FollowResponse, reader: jspb.BinaryReader): FollowResponse;
  }

  export namespace FollowResponse {
    export type AsObject = {
    }
  }

  export class MakeProposalResponse extends jspb.Message {
    hasProposalId(): boolean;
    clearProposalId(): void;
    getProposalId(): nns_common_pb.ProposalId | undefined;
    setProposalId(value?: nns_common_pb.ProposalId): void;

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MakeProposalResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MakeProposalResponse): MakeProposalResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MakeProposalResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MakeProposalResponse;
    static deserializeBinaryFromReader(message: MakeProposalResponse, reader: jspb.BinaryReader): MakeProposalResponse;
  }

  export namespace MakeProposalResponse {
    export type AsObject = {
      proposalId?: nns_common_pb.ProposalId.AsObject,
      message: string,
    }
  }

  export class RegisterVoteResponse extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterVoteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterVoteResponse): RegisterVoteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterVoteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterVoteResponse;
    static deserializeBinaryFromReader(message: RegisterVoteResponse, reader: jspb.BinaryReader): RegisterVoteResponse;
  }

  export namespace RegisterVoteResponse {
    export type AsObject = {
    }
  }

  export class SplitResponse extends jspb.Message {
    hasCreatedNeuronId(): boolean;
    clearCreatedNeuronId(): void;
    getCreatedNeuronId(): nns_common_pb.NeuronId | undefined;
    setCreatedNeuronId(value?: nns_common_pb.NeuronId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SplitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SplitResponse): SplitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SplitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SplitResponse;
    static deserializeBinaryFromReader(message: SplitResponse, reader: jspb.BinaryReader): SplitResponse;
  }

  export namespace SplitResponse {
    export type AsObject = {
      createdNeuronId?: nns_common_pb.NeuronId.AsObject,
    }
  }

  export class MergeResponse extends jspb.Message {
    hasSourceNeuron(): boolean;
    clearSourceNeuron(): void;
    getSourceNeuron(): Neuron | undefined;
    setSourceNeuron(value?: Neuron): void;

    hasTargetNeuron(): boolean;
    clearTargetNeuron(): void;
    getTargetNeuron(): Neuron | undefined;
    setTargetNeuron(value?: Neuron): void;

    hasSourceNeuronInfo(): boolean;
    clearSourceNeuronInfo(): void;
    getSourceNeuronInfo(): NeuronInfo | undefined;
    setSourceNeuronInfo(value?: NeuronInfo): void;

    hasTargetNeuronInfo(): boolean;
    clearTargetNeuronInfo(): void;
    getTargetNeuronInfo(): NeuronInfo | undefined;
    setTargetNeuronInfo(value?: NeuronInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MergeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MergeResponse): MergeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MergeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MergeResponse;
    static deserializeBinaryFromReader(message: MergeResponse, reader: jspb.BinaryReader): MergeResponse;
  }

  export namespace MergeResponse {
    export type AsObject = {
      sourceNeuron?: Neuron.AsObject,
      targetNeuron?: Neuron.AsObject,
      sourceNeuronInfo?: NeuronInfo.AsObject,
      targetNeuronInfo?: NeuronInfo.AsObject,
    }
  }

  export class DisburseToNeuronResponse extends jspb.Message {
    hasCreatedNeuronId(): boolean;
    clearCreatedNeuronId(): void;
    getCreatedNeuronId(): nns_common_pb.NeuronId | undefined;
    setCreatedNeuronId(value?: nns_common_pb.NeuronId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DisburseToNeuronResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DisburseToNeuronResponse): DisburseToNeuronResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DisburseToNeuronResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DisburseToNeuronResponse;
    static deserializeBinaryFromReader(message: DisburseToNeuronResponse, reader: jspb.BinaryReader): DisburseToNeuronResponse;
  }

  export namespace DisburseToNeuronResponse {
    export type AsObject = {
      createdNeuronId?: nns_common_pb.NeuronId.AsObject,
    }
  }

  export class ClaimOrRefreshResponse extends jspb.Message {
    hasRefreshedNeuronId(): boolean;
    clearRefreshedNeuronId(): void;
    getRefreshedNeuronId(): nns_common_pb.NeuronId | undefined;
    setRefreshedNeuronId(value?: nns_common_pb.NeuronId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClaimOrRefreshResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClaimOrRefreshResponse): ClaimOrRefreshResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClaimOrRefreshResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClaimOrRefreshResponse;
    static deserializeBinaryFromReader(message: ClaimOrRefreshResponse, reader: jspb.BinaryReader): ClaimOrRefreshResponse;
  }

  export namespace ClaimOrRefreshResponse {
    export type AsObject = {
      refreshedNeuronId?: nns_common_pb.NeuronId.AsObject,
    }
  }

  export enum CommandCase {
    COMMAND_NOT_SET = 0,
    ERROR = 1,
    CONFIGURE = 2,
    DISBURSE = 3,
    SPAWN = 4,
    FOLLOW = 5,
    MAKE_PROPOSAL = 6,
    REGISTER_VOTE = 7,
    SPLIT = 8,
    DISBURSE_TO_NEURON = 9,
    CLAIM_OR_REFRESH = 10,
    MERGE_MATURITY = 11,
    MERGE = 12,
    STAKE_MATURITY = 13,
  }
}

export class GovernanceError extends jspb.Message {
  getErrorType(): GovernanceError.ErrorTypeMap[keyof GovernanceError.ErrorTypeMap];
  setErrorType(value: GovernanceError.ErrorTypeMap[keyof GovernanceError.ErrorTypeMap]): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GovernanceError.AsObject;
  static toObject(includeInstance: boolean, msg: GovernanceError): GovernanceError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GovernanceError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GovernanceError;
  static deserializeBinaryFromReader(message: GovernanceError, reader: jspb.BinaryReader): GovernanceError;
}

export namespace GovernanceError {
  export type AsObject = {
    errorType: GovernanceError.ErrorTypeMap[keyof GovernanceError.ErrorTypeMap],
    errorMessage: string,
  }

  export interface ErrorTypeMap {
    ERROR_TYPE_UNSPECIFIED: 0;
    ERROR_TYPE_OK: 1;
    ERROR_TYPE_UNAVAILABLE: 2;
    ERROR_TYPE_NOT_AUTHORIZED: 3;
    ERROR_TYPE_NOT_FOUND: 4;
    ERROR_TYPE_INVALID_COMMAND: 5;
    ERROR_TYPE_REQUIRES_NOT_DISSOLVING: 6;
    ERROR_TYPE_REQUIRES_DISSOLVING: 7;
    ERROR_TYPE_REQUIRES_DISSOLVED: 8;
    ERROR_TYPE_HOT_KEY: 9;
    ERROR_TYPE_RESOURCE_EXHAUSTED: 10;
    ERROR_TYPE_PRECONDITION_FAILED: 11;
    ERROR_TYPE_EXTERNAL: 12;
    ERROR_TYPE_LEDGER_UPDATE_ONGOING: 13;
    ERROR_TYPE_INSUFFICIENT_FUNDS: 14;
    ERROR_TYPE_INVALID_PRINCIPAL: 15;
    ERROR_TYPE_INVALID_PROPOSAL: 16;
    ERROR_TYPE_ALREADY_JOINED_COMMUNITY_FUND: 17;
    ERROR_TYPE_NOT_IN_THE_COMMUNITY_FUND: 18;
  }

  export const ErrorType: ErrorTypeMap;
}

export class Ballot extends jspb.Message {
  getVote(): VoteMap[keyof VoteMap];
  setVote(value: VoteMap[keyof VoteMap]): void;

  getVotingPower(): number;
  setVotingPower(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ballot.AsObject;
  static toObject(includeInstance: boolean, msg: Ballot): Ballot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ballot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ballot;
  static deserializeBinaryFromReader(message: Ballot, reader: jspb.BinaryReader): Ballot;
}

export namespace Ballot {
  export type AsObject = {
    vote: VoteMap[keyof VoteMap],
    votingPower: number,
  }
}

export class Tally extends jspb.Message {
  getTimestampSeconds(): number;
  setTimestampSeconds(value: number): void;

  getYes(): number;
  setYes(value: number): void;

  getNo(): number;
  setNo(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tally.AsObject;
  static toObject(includeInstance: boolean, msg: Tally): Tally.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tally, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tally;
  static deserializeBinaryFromReader(message: Tally, reader: jspb.BinaryReader): Tally;
}

export namespace Tally {
  export type AsObject = {
    timestampSeconds: number,
    yes: number,
    no: number,
    total: number,
  }
}

export class ProposalData extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): nns_common_pb.ProposalId | undefined;
  setId(value?: nns_common_pb.ProposalId): void;

  hasProposer(): boolean;
  clearProposer(): void;
  getProposer(): nns_common_pb.NeuronId | undefined;
  setProposer(value?: nns_common_pb.NeuronId): void;

  getRejectCostE8s(): number;
  setRejectCostE8s(value: number): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): Proposal | undefined;
  setProposal(value?: Proposal): void;

  getProposalTimestampSeconds(): number;
  setProposalTimestampSeconds(value: number): void;

  getBallotsMap(): jspb.Map<number, Ballot>;
  clearBallotsMap(): void;
  hasLatestTally(): boolean;
  clearLatestTally(): void;
  getLatestTally(): Tally | undefined;
  setLatestTally(value?: Tally): void;

  getDecidedTimestampSeconds(): number;
  setDecidedTimestampSeconds(value: number): void;

  getExecutedTimestampSeconds(): number;
  setExecutedTimestampSeconds(value: number): void;

  getFailedTimestampSeconds(): number;
  setFailedTimestampSeconds(value: number): void;

  hasFailureReason(): boolean;
  clearFailureReason(): void;
  getFailureReason(): GovernanceError | undefined;
  setFailureReason(value?: GovernanceError): void;

  getRewardEventRound(): number;
  setRewardEventRound(value: number): void;

  hasWaitForQuietState(): boolean;
  clearWaitForQuietState(): void;
  getWaitForQuietState(): WaitForQuietState | undefined;
  setWaitForQuietState(value?: WaitForQuietState): void;

  hasOriginalTotalCommunityFundMaturityE8sEquivalent(): boolean;
  clearOriginalTotalCommunityFundMaturityE8sEquivalent(): void;
  getOriginalTotalCommunityFundMaturityE8sEquivalent(): number;
  setOriginalTotalCommunityFundMaturityE8sEquivalent(value: number): void;

  clearCfParticipantsList(): void;
  getCfParticipantsList(): Array<swap_pb.CfParticipant>;
  setCfParticipantsList(value: Array<swap_pb.CfParticipant>): void;
  addCfParticipants(value?: swap_pb.CfParticipant, index?: number): swap_pb.CfParticipant;

  hasSnsTokenSwapLifecycle(): boolean;
  clearSnsTokenSwapLifecycle(): void;
  getSnsTokenSwapLifecycle(): swap_pb.LifecycleMap[keyof swap_pb.LifecycleMap];
  setSnsTokenSwapLifecycle(value: swap_pb.LifecycleMap[keyof swap_pb.LifecycleMap]): void;

  hasDerivedProposalInformation(): boolean;
  clearDerivedProposalInformation(): void;
  getDerivedProposalInformation(): DerivedProposalInformation | undefined;
  setDerivedProposalInformation(value?: DerivedProposalInformation): void;

  hasNeuronsFundData(): boolean;
  clearNeuronsFundData(): void;
  getNeuronsFundData(): NeuronsFundData | undefined;
  setNeuronsFundData(value?: NeuronsFundData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalData.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalData): ProposalData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalData;
  static deserializeBinaryFromReader(message: ProposalData, reader: jspb.BinaryReader): ProposalData;
}

export namespace ProposalData {
  export type AsObject = {
    id?: nns_common_pb.ProposalId.AsObject,
    proposer?: nns_common_pb.NeuronId.AsObject,
    rejectCostE8s: number,
    proposal?: Proposal.AsObject,
    proposalTimestampSeconds: number,
    ballotsMap: Array<[number, Ballot.AsObject]>,
    latestTally?: Tally.AsObject,
    decidedTimestampSeconds: number,
    executedTimestampSeconds: number,
    failedTimestampSeconds: number,
    failureReason?: GovernanceError.AsObject,
    rewardEventRound: number,
    waitForQuietState?: WaitForQuietState.AsObject,
    originalTotalCommunityFundMaturityE8sEquivalent: number,
    cfParticipantsList: Array<swap_pb.CfParticipant.AsObject>,
    snsTokenSwapLifecycle: swap_pb.LifecycleMap[keyof swap_pb.LifecycleMap],
    derivedProposalInformation?: DerivedProposalInformation.AsObject,
    neuronsFundData?: NeuronsFundData.AsObject,
  }
}

export class NeuronsFundData extends jspb.Message {
  hasInitialNeuronsFundParticipation(): boolean;
  clearInitialNeuronsFundParticipation(): void;
  getInitialNeuronsFundParticipation(): NeuronsFundParticipation | undefined;
  setInitialNeuronsFundParticipation(value?: NeuronsFundParticipation): void;

  hasFinalNeuronsFundParticipation(): boolean;
  clearFinalNeuronsFundParticipation(): void;
  getFinalNeuronsFundParticipation(): NeuronsFundParticipation | undefined;
  setFinalNeuronsFundParticipation(value?: NeuronsFundParticipation): void;

  hasNeuronsFundRefunds(): boolean;
  clearNeuronsFundRefunds(): void;
  getNeuronsFundRefunds(): NeuronsFundSnapshot | undefined;
  setNeuronsFundRefunds(value?: NeuronsFundSnapshot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundData.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundData): NeuronsFundData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundData;
  static deserializeBinaryFromReader(message: NeuronsFundData, reader: jspb.BinaryReader): NeuronsFundData;
}

export namespace NeuronsFundData {
  export type AsObject = {
    initialNeuronsFundParticipation?: NeuronsFundParticipation.AsObject,
    finalNeuronsFundParticipation?: NeuronsFundParticipation.AsObject,
    neuronsFundRefunds?: NeuronsFundSnapshot.AsObject,
  }
}

export class NeuronsFundAuditInfo extends jspb.Message {
  hasInitialNeuronsFundParticipation(): boolean;
  clearInitialNeuronsFundParticipation(): void;
  getInitialNeuronsFundParticipation(): NeuronsFundParticipation | undefined;
  setInitialNeuronsFundParticipation(value?: NeuronsFundParticipation): void;

  hasFinalNeuronsFundParticipation(): boolean;
  clearFinalNeuronsFundParticipation(): void;
  getFinalNeuronsFundParticipation(): NeuronsFundParticipation | undefined;
  setFinalNeuronsFundParticipation(value?: NeuronsFundParticipation): void;

  hasNeuronsFundRefunds(): boolean;
  clearNeuronsFundRefunds(): void;
  getNeuronsFundRefunds(): NeuronsFundSnapshot | undefined;
  setNeuronsFundRefunds(value?: NeuronsFundSnapshot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundAuditInfo.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundAuditInfo): NeuronsFundAuditInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundAuditInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundAuditInfo;
  static deserializeBinaryFromReader(message: NeuronsFundAuditInfo, reader: jspb.BinaryReader): NeuronsFundAuditInfo;
}

export namespace NeuronsFundAuditInfo {
  export type AsObject = {
    initialNeuronsFundParticipation?: NeuronsFundParticipation.AsObject,
    finalNeuronsFundParticipation?: NeuronsFundParticipation.AsObject,
    neuronsFundRefunds?: NeuronsFundSnapshot.AsObject,
  }
}

export class GetNeuronsFundAuditInfoRequest extends jspb.Message {
  hasNnsProposalId(): boolean;
  clearNnsProposalId(): void;
  getNnsProposalId(): nns_common_pb.ProposalId | undefined;
  setNnsProposalId(value?: nns_common_pb.ProposalId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNeuronsFundAuditInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNeuronsFundAuditInfoRequest): GetNeuronsFundAuditInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNeuronsFundAuditInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNeuronsFundAuditInfoRequest;
  static deserializeBinaryFromReader(message: GetNeuronsFundAuditInfoRequest, reader: jspb.BinaryReader): GetNeuronsFundAuditInfoRequest;
}

export namespace GetNeuronsFundAuditInfoRequest {
  export type AsObject = {
    nnsProposalId?: nns_common_pb.ProposalId.AsObject,
  }
}

export class GetNeuronsFundAuditInfoResponse extends jspb.Message {
  hasErr(): boolean;
  clearErr(): void;
  getErr(): GovernanceError | undefined;
  setErr(value?: GovernanceError): void;

  hasOk(): boolean;
  clearOk(): void;
  getOk(): GetNeuronsFundAuditInfoResponse.Ok | undefined;
  setOk(value?: GetNeuronsFundAuditInfoResponse.Ok): void;

  getResultCase(): GetNeuronsFundAuditInfoResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNeuronsFundAuditInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNeuronsFundAuditInfoResponse): GetNeuronsFundAuditInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNeuronsFundAuditInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNeuronsFundAuditInfoResponse;
  static deserializeBinaryFromReader(message: GetNeuronsFundAuditInfoResponse, reader: jspb.BinaryReader): GetNeuronsFundAuditInfoResponse;
}

export namespace GetNeuronsFundAuditInfoResponse {
  export type AsObject = {
    err?: GovernanceError.AsObject,
    ok?: GetNeuronsFundAuditInfoResponse.Ok.AsObject,
  }

  export class Ok extends jspb.Message {
    hasNeuronsFundAuditInfo(): boolean;
    clearNeuronsFundAuditInfo(): void;
    getNeuronsFundAuditInfo(): NeuronsFundAuditInfo | undefined;
    setNeuronsFundAuditInfo(value?: NeuronsFundAuditInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ok.AsObject;
    static toObject(includeInstance: boolean, msg: Ok): Ok.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ok, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ok;
    static deserializeBinaryFromReader(message: Ok, reader: jspb.BinaryReader): Ok;
  }

  export namespace Ok {
    export type AsObject = {
      neuronsFundAuditInfo?: NeuronsFundAuditInfo.AsObject,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    ERR = 1,
    OK = 2,
  }
}

export class NeuronsFundParticipation extends jspb.Message {
  hasIdealMatchedParticipationFunction(): boolean;
  clearIdealMatchedParticipationFunction(): void;
  getIdealMatchedParticipationFunction(): IdealMatchedParticipationFunction | undefined;
  setIdealMatchedParticipationFunction(value?: IdealMatchedParticipationFunction): void;

  hasNeuronsFundReserves(): boolean;
  clearNeuronsFundReserves(): void;
  getNeuronsFundReserves(): NeuronsFundSnapshot | undefined;
  setNeuronsFundReserves(value?: NeuronsFundSnapshot): void;

  hasSwapParticipationLimits(): boolean;
  clearSwapParticipationLimits(): void;
  getSwapParticipationLimits(): SwapParticipationLimits | undefined;
  setSwapParticipationLimits(value?: SwapParticipationLimits): void;

  hasDirectParticipationIcpE8s(): boolean;
  clearDirectParticipationIcpE8s(): void;
  getDirectParticipationIcpE8s(): number;
  setDirectParticipationIcpE8s(value: number): void;

  hasTotalMaturityEquivalentIcpE8s(): boolean;
  clearTotalMaturityEquivalentIcpE8s(): void;
  getTotalMaturityEquivalentIcpE8s(): number;
  setTotalMaturityEquivalentIcpE8s(value: number): void;

  hasMaxNeuronsFundSwapParticipationIcpE8s(): boolean;
  clearMaxNeuronsFundSwapParticipationIcpE8s(): void;
  getMaxNeuronsFundSwapParticipationIcpE8s(): number;
  setMaxNeuronsFundSwapParticipationIcpE8s(value: number): void;

  hasIntendedNeuronsFundParticipationIcpE8s(): boolean;
  clearIntendedNeuronsFundParticipationIcpE8s(): void;
  getIntendedNeuronsFundParticipationIcpE8s(): number;
  setIntendedNeuronsFundParticipationIcpE8s(value: number): void;

  hasAllocatedNeuronsFundParticipationIcpE8s(): boolean;
  clearAllocatedNeuronsFundParticipationIcpE8s(): void;
  getAllocatedNeuronsFundParticipationIcpE8s(): number;
  setAllocatedNeuronsFundParticipationIcpE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundParticipation.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundParticipation): NeuronsFundParticipation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundParticipation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundParticipation;
  static deserializeBinaryFromReader(message: NeuronsFundParticipation, reader: jspb.BinaryReader): NeuronsFundParticipation;
}

export namespace NeuronsFundParticipation {
  export type AsObject = {
    idealMatchedParticipationFunction?: IdealMatchedParticipationFunction.AsObject,
    neuronsFundReserves?: NeuronsFundSnapshot.AsObject,
    swapParticipationLimits?: SwapParticipationLimits.AsObject,
    directParticipationIcpE8s: number,
    totalMaturityEquivalentIcpE8s: number,
    maxNeuronsFundSwapParticipationIcpE8s: number,
    intendedNeuronsFundParticipationIcpE8s: number,
    allocatedNeuronsFundParticipationIcpE8s: number,
  }
}

export class IdealMatchedParticipationFunction extends jspb.Message {
  hasSerializedRepresentation(): boolean;
  clearSerializedRepresentation(): void;
  getSerializedRepresentation(): string;
  setSerializedRepresentation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdealMatchedParticipationFunction.AsObject;
  static toObject(includeInstance: boolean, msg: IdealMatchedParticipationFunction): IdealMatchedParticipationFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdealMatchedParticipationFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdealMatchedParticipationFunction;
  static deserializeBinaryFromReader(message: IdealMatchedParticipationFunction, reader: jspb.BinaryReader): IdealMatchedParticipationFunction;
}

export namespace IdealMatchedParticipationFunction {
  export type AsObject = {
    serializedRepresentation: string,
  }
}

export class NeuronsFundSnapshot extends jspb.Message {
  clearNeuronsFundNeuronPortionsList(): void;
  getNeuronsFundNeuronPortionsList(): Array<NeuronsFundSnapshot.NeuronsFundNeuronPortion>;
  setNeuronsFundNeuronPortionsList(value: Array<NeuronsFundSnapshot.NeuronsFundNeuronPortion>): void;
  addNeuronsFundNeuronPortions(value?: NeuronsFundSnapshot.NeuronsFundNeuronPortion, index?: number): NeuronsFundSnapshot.NeuronsFundNeuronPortion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundSnapshot): NeuronsFundSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundSnapshot;
  static deserializeBinaryFromReader(message: NeuronsFundSnapshot, reader: jspb.BinaryReader): NeuronsFundSnapshot;
}

export namespace NeuronsFundSnapshot {
  export type AsObject = {
    neuronsFundNeuronPortionsList: Array<NeuronsFundSnapshot.NeuronsFundNeuronPortion.AsObject>,
  }

  export class NeuronsFundNeuronPortion extends jspb.Message {
    hasNnsNeuronId(): boolean;
    clearNnsNeuronId(): void;
    getNnsNeuronId(): nns_common_pb.NeuronId | undefined;
    setNnsNeuronId(value?: nns_common_pb.NeuronId): void;

    hasAmountIcpE8s(): boolean;
    clearAmountIcpE8s(): void;
    getAmountIcpE8s(): number;
    setAmountIcpE8s(value: number): void;

    hasMaturityEquivalentIcpE8s(): boolean;
    clearMaturityEquivalentIcpE8s(): void;
    getMaturityEquivalentIcpE8s(): number;
    setMaturityEquivalentIcpE8s(value: number): void;

    hasHotkeyPrincipal(): boolean;
    clearHotkeyPrincipal(): void;
    getHotkeyPrincipal(): base_types_pb.PrincipalId | undefined;
    setHotkeyPrincipal(value?: base_types_pb.PrincipalId): void;

    hasIsCapped(): boolean;
    clearIsCapped(): void;
    getIsCapped(): boolean;
    setIsCapped(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NeuronsFundNeuronPortion.AsObject;
    static toObject(includeInstance: boolean, msg: NeuronsFundNeuronPortion): NeuronsFundNeuronPortion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NeuronsFundNeuronPortion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NeuronsFundNeuronPortion;
    static deserializeBinaryFromReader(message: NeuronsFundNeuronPortion, reader: jspb.BinaryReader): NeuronsFundNeuronPortion;
  }

  export namespace NeuronsFundNeuronPortion {
    export type AsObject = {
      nnsNeuronId?: nns_common_pb.NeuronId.AsObject,
      amountIcpE8s: number,
      maturityEquivalentIcpE8s: number,
      hotkeyPrincipal?: base_types_pb.PrincipalId.AsObject,
      isCapped: boolean,
    }
  }
}

export class SwapParticipationLimits extends jspb.Message {
  hasMinDirectParticipationIcpE8s(): boolean;
  clearMinDirectParticipationIcpE8s(): void;
  getMinDirectParticipationIcpE8s(): number;
  setMinDirectParticipationIcpE8s(value: number): void;

  hasMaxDirectParticipationIcpE8s(): boolean;
  clearMaxDirectParticipationIcpE8s(): void;
  getMaxDirectParticipationIcpE8s(): number;
  setMaxDirectParticipationIcpE8s(value: number): void;

  hasMinParticipantIcpE8s(): boolean;
  clearMinParticipantIcpE8s(): void;
  getMinParticipantIcpE8s(): number;
  setMinParticipantIcpE8s(value: number): void;

  hasMaxParticipantIcpE8s(): boolean;
  clearMaxParticipantIcpE8s(): void;
  getMaxParticipantIcpE8s(): number;
  setMaxParticipantIcpE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapParticipationLimits.AsObject;
  static toObject(includeInstance: boolean, msg: SwapParticipationLimits): SwapParticipationLimits.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwapParticipationLimits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapParticipationLimits;
  static deserializeBinaryFromReader(message: SwapParticipationLimits, reader: jspb.BinaryReader): SwapParticipationLimits;
}

export namespace SwapParticipationLimits {
  export type AsObject = {
    minDirectParticipationIcpE8s: number,
    maxDirectParticipationIcpE8s: number,
    minParticipantIcpE8s: number,
    maxParticipantIcpE8s: number,
  }
}

export class DerivedProposalInformation extends jspb.Message {
  hasSwapBackgroundInformation(): boolean;
  clearSwapBackgroundInformation(): void;
  getSwapBackgroundInformation(): SwapBackgroundInformation | undefined;
  setSwapBackgroundInformation(value?: SwapBackgroundInformation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivedProposalInformation.AsObject;
  static toObject(includeInstance: boolean, msg: DerivedProposalInformation): DerivedProposalInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivedProposalInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivedProposalInformation;
  static deserializeBinaryFromReader(message: DerivedProposalInformation, reader: jspb.BinaryReader): DerivedProposalInformation;
}

export namespace DerivedProposalInformation {
  export type AsObject = {
    swapBackgroundInformation?: SwapBackgroundInformation.AsObject,
  }
}

export class SwapBackgroundInformation extends jspb.Message {
  clearFallbackControllerPrincipalIdsList(): void;
  getFallbackControllerPrincipalIdsList(): Array<base_types_pb.PrincipalId>;
  setFallbackControllerPrincipalIdsList(value: Array<base_types_pb.PrincipalId>): void;
  addFallbackControllerPrincipalIds(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

  hasRootCanisterSummary(): boolean;
  clearRootCanisterSummary(): void;
  getRootCanisterSummary(): SwapBackgroundInformation.CanisterSummary | undefined;
  setRootCanisterSummary(value?: SwapBackgroundInformation.CanisterSummary): void;

  hasGovernanceCanisterSummary(): boolean;
  clearGovernanceCanisterSummary(): void;
  getGovernanceCanisterSummary(): SwapBackgroundInformation.CanisterSummary | undefined;
  setGovernanceCanisterSummary(value?: SwapBackgroundInformation.CanisterSummary): void;

  hasLedgerCanisterSummary(): boolean;
  clearLedgerCanisterSummary(): void;
  getLedgerCanisterSummary(): SwapBackgroundInformation.CanisterSummary | undefined;
  setLedgerCanisterSummary(value?: SwapBackgroundInformation.CanisterSummary): void;

  hasSwapCanisterSummary(): boolean;
  clearSwapCanisterSummary(): void;
  getSwapCanisterSummary(): SwapBackgroundInformation.CanisterSummary | undefined;
  setSwapCanisterSummary(value?: SwapBackgroundInformation.CanisterSummary): void;

  clearLedgerArchiveCanisterSummariesList(): void;
  getLedgerArchiveCanisterSummariesList(): Array<SwapBackgroundInformation.CanisterSummary>;
  setLedgerArchiveCanisterSummariesList(value: Array<SwapBackgroundInformation.CanisterSummary>): void;
  addLedgerArchiveCanisterSummaries(value?: SwapBackgroundInformation.CanisterSummary, index?: number): SwapBackgroundInformation.CanisterSummary;

  hasLedgerIndexCanisterSummary(): boolean;
  clearLedgerIndexCanisterSummary(): void;
  getLedgerIndexCanisterSummary(): SwapBackgroundInformation.CanisterSummary | undefined;
  setLedgerIndexCanisterSummary(value?: SwapBackgroundInformation.CanisterSummary): void;

  clearDappCanisterSummariesList(): void;
  getDappCanisterSummariesList(): Array<SwapBackgroundInformation.CanisterSummary>;
  setDappCanisterSummariesList(value: Array<SwapBackgroundInformation.CanisterSummary>): void;
  addDappCanisterSummaries(value?: SwapBackgroundInformation.CanisterSummary, index?: number): SwapBackgroundInformation.CanisterSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapBackgroundInformation.AsObject;
  static toObject(includeInstance: boolean, msg: SwapBackgroundInformation): SwapBackgroundInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwapBackgroundInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapBackgroundInformation;
  static deserializeBinaryFromReader(message: SwapBackgroundInformation, reader: jspb.BinaryReader): SwapBackgroundInformation;
}

export namespace SwapBackgroundInformation {
  export type AsObject = {
    fallbackControllerPrincipalIdsList: Array<base_types_pb.PrincipalId.AsObject>,
    rootCanisterSummary?: SwapBackgroundInformation.CanisterSummary.AsObject,
    governanceCanisterSummary?: SwapBackgroundInformation.CanisterSummary.AsObject,
    ledgerCanisterSummary?: SwapBackgroundInformation.CanisterSummary.AsObject,
    swapCanisterSummary?: SwapBackgroundInformation.CanisterSummary.AsObject,
    ledgerArchiveCanisterSummariesList: Array<SwapBackgroundInformation.CanisterSummary.AsObject>,
    ledgerIndexCanisterSummary?: SwapBackgroundInformation.CanisterSummary.AsObject,
    dappCanisterSummariesList: Array<SwapBackgroundInformation.CanisterSummary.AsObject>,
  }

  export class CanisterSummary extends jspb.Message {
    hasCanisterId(): boolean;
    clearCanisterId(): void;
    getCanisterId(): base_types_pb.PrincipalId | undefined;
    setCanisterId(value?: base_types_pb.PrincipalId): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): SwapBackgroundInformation.CanisterStatusResultV2 | undefined;
    setStatus(value?: SwapBackgroundInformation.CanisterStatusResultV2): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CanisterSummary.AsObject;
    static toObject(includeInstance: boolean, msg: CanisterSummary): CanisterSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CanisterSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CanisterSummary;
    static deserializeBinaryFromReader(message: CanisterSummary, reader: jspb.BinaryReader): CanisterSummary;
  }

  export namespace CanisterSummary {
    export type AsObject = {
      canisterId?: base_types_pb.PrincipalId.AsObject,
      status?: SwapBackgroundInformation.CanisterStatusResultV2.AsObject,
    }
  }

  export class CanisterStatusResultV2 extends jspb.Message {
    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): SwapBackgroundInformation.CanisterStatusTypeMap[keyof SwapBackgroundInformation.CanisterStatusTypeMap];
    setStatus(value: SwapBackgroundInformation.CanisterStatusTypeMap[keyof SwapBackgroundInformation.CanisterStatusTypeMap]): void;

    getModuleHash(): Uint8Array | string;
    getModuleHash_asU8(): Uint8Array;
    getModuleHash_asB64(): string;
    setModuleHash(value: Uint8Array | string): void;

    clearControllersList(): void;
    getControllersList(): Array<base_types_pb.PrincipalId>;
    setControllersList(value: Array<base_types_pb.PrincipalId>): void;
    addControllers(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

    hasMemorySize(): boolean;
    clearMemorySize(): void;
    getMemorySize(): number;
    setMemorySize(value: number): void;

    hasCycles(): boolean;
    clearCycles(): void;
    getCycles(): number;
    setCycles(value: number): void;

    hasFreezingThreshold(): boolean;
    clearFreezingThreshold(): void;
    getFreezingThreshold(): number;
    setFreezingThreshold(value: number): void;

    hasIdleCyclesBurnedPerDay(): boolean;
    clearIdleCyclesBurnedPerDay(): void;
    getIdleCyclesBurnedPerDay(): number;
    setIdleCyclesBurnedPerDay(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CanisterStatusResultV2.AsObject;
    static toObject(includeInstance: boolean, msg: CanisterStatusResultV2): CanisterStatusResultV2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CanisterStatusResultV2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CanisterStatusResultV2;
    static deserializeBinaryFromReader(message: CanisterStatusResultV2, reader: jspb.BinaryReader): CanisterStatusResultV2;
  }

  export namespace CanisterStatusResultV2 {
    export type AsObject = {
      status: SwapBackgroundInformation.CanisterStatusTypeMap[keyof SwapBackgroundInformation.CanisterStatusTypeMap],
      moduleHash: Uint8Array | string,
      controllersList: Array<base_types_pb.PrincipalId.AsObject>,
      memorySize: number,
      cycles: number,
      freezingThreshold: number,
      idleCyclesBurnedPerDay: number,
    }
  }

  export interface CanisterStatusTypeMap {
    CANISTER_STATUS_TYPE_UNSPECIFIED: 0;
    CANISTER_STATUS_TYPE_RUNNING: 1;
    CANISTER_STATUS_TYPE_STOPPING: 2;
    CANISTER_STATUS_TYPE_STOPPED: 3;
  }

  export const CanisterStatusType: CanisterStatusTypeMap;
}

export class WaitForQuietState extends jspb.Message {
  getCurrentDeadlineTimestampSeconds(): number;
  setCurrentDeadlineTimestampSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitForQuietState.AsObject;
  static toObject(includeInstance: boolean, msg: WaitForQuietState): WaitForQuietState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaitForQuietState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaitForQuietState;
  static deserializeBinaryFromReader(message: WaitForQuietState, reader: jspb.BinaryReader): WaitForQuietState;
}

export namespace WaitForQuietState {
  export type AsObject = {
    currentDeadlineTimestampSeconds: number,
  }
}

export class ProposalInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): nns_common_pb.ProposalId | undefined;
  setId(value?: nns_common_pb.ProposalId): void;

  hasProposer(): boolean;
  clearProposer(): void;
  getProposer(): nns_common_pb.NeuronId | undefined;
  setProposer(value?: nns_common_pb.NeuronId): void;

  getRejectCostE8s(): number;
  setRejectCostE8s(value: number): void;

  hasProposal(): boolean;
  clearProposal(): void;
  getProposal(): Proposal | undefined;
  setProposal(value?: Proposal): void;

  getProposalTimestampSeconds(): number;
  setProposalTimestampSeconds(value: number): void;

  getBallotsMap(): jspb.Map<number, Ballot>;
  clearBallotsMap(): void;
  hasLatestTally(): boolean;
  clearLatestTally(): void;
  getLatestTally(): Tally | undefined;
  setLatestTally(value?: Tally): void;

  getDecidedTimestampSeconds(): number;
  setDecidedTimestampSeconds(value: number): void;

  getExecutedTimestampSeconds(): number;
  setExecutedTimestampSeconds(value: number): void;

  getFailedTimestampSeconds(): number;
  setFailedTimestampSeconds(value: number): void;

  hasFailureReason(): boolean;
  clearFailureReason(): void;
  getFailureReason(): GovernanceError | undefined;
  setFailureReason(value?: GovernanceError): void;

  getRewardEventRound(): number;
  setRewardEventRound(value: number): void;

  getTopic(): TopicMap[keyof TopicMap];
  setTopic(value: TopicMap[keyof TopicMap]): void;

  getStatus(): ProposalStatusMap[keyof ProposalStatusMap];
  setStatus(value: ProposalStatusMap[keyof ProposalStatusMap]): void;

  getRewardStatus(): ProposalRewardStatusMap[keyof ProposalRewardStatusMap];
  setRewardStatus(value: ProposalRewardStatusMap[keyof ProposalRewardStatusMap]): void;

  hasDeadlineTimestampSeconds(): boolean;
  clearDeadlineTimestampSeconds(): void;
  getDeadlineTimestampSeconds(): number;
  setDeadlineTimestampSeconds(value: number): void;

  hasDerivedProposalInformation(): boolean;
  clearDerivedProposalInformation(): void;
  getDerivedProposalInformation(): DerivedProposalInformation | undefined;
  setDerivedProposalInformation(value?: DerivedProposalInformation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalInfo): ProposalInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalInfo;
  static deserializeBinaryFromReader(message: ProposalInfo, reader: jspb.BinaryReader): ProposalInfo;
}

export namespace ProposalInfo {
  export type AsObject = {
    id?: nns_common_pb.ProposalId.AsObject,
    proposer?: nns_common_pb.NeuronId.AsObject,
    rejectCostE8s: number,
    proposal?: Proposal.AsObject,
    proposalTimestampSeconds: number,
    ballotsMap: Array<[number, Ballot.AsObject]>,
    latestTally?: Tally.AsObject,
    decidedTimestampSeconds: number,
    executedTimestampSeconds: number,
    failedTimestampSeconds: number,
    failureReason?: GovernanceError.AsObject,
    rewardEventRound: number,
    topic: TopicMap[keyof TopicMap],
    status: ProposalStatusMap[keyof ProposalStatusMap],
    rewardStatus: ProposalRewardStatusMap[keyof ProposalRewardStatusMap],
    deadlineTimestampSeconds: number,
    derivedProposalInformation?: DerivedProposalInformation.AsObject,
  }
}

export class NetworkEconomics extends jspb.Message {
  getRejectCostE8s(): number;
  setRejectCostE8s(value: number): void;

  getNeuronMinimumStakeE8s(): number;
  setNeuronMinimumStakeE8s(value: number): void;

  getNeuronManagementFeePerProposalE8s(): number;
  setNeuronManagementFeePerProposalE8s(value: number): void;

  getMinimumIcpXdrRate(): number;
  setMinimumIcpXdrRate(value: number): void;

  getNeuronSpawnDissolveDelaySeconds(): number;
  setNeuronSpawnDissolveDelaySeconds(value: number): void;

  getMaximumNodeProviderRewardsE8s(): number;
  setMaximumNodeProviderRewardsE8s(value: number): void;

  getTransactionFeeE8s(): number;
  setTransactionFeeE8s(value: number): void;

  getMaxProposalsToKeepPerTopic(): number;
  setMaxProposalsToKeepPerTopic(value: number): void;

  hasNeuronsFundEconomics(): boolean;
  clearNeuronsFundEconomics(): void;
  getNeuronsFundEconomics(): NeuronsFundEconomics | undefined;
  setNeuronsFundEconomics(value?: NeuronsFundEconomics): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkEconomics.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkEconomics): NetworkEconomics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkEconomics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkEconomics;
  static deserializeBinaryFromReader(message: NetworkEconomics, reader: jspb.BinaryReader): NetworkEconomics;
}

export namespace NetworkEconomics {
  export type AsObject = {
    rejectCostE8s: number,
    neuronMinimumStakeE8s: number,
    neuronManagementFeePerProposalE8s: number,
    minimumIcpXdrRate: number,
    neuronSpawnDissolveDelaySeconds: number,
    maximumNodeProviderRewardsE8s: number,
    transactionFeeE8s: number,
    maxProposalsToKeepPerTopic: number,
    neuronsFundEconomics?: NeuronsFundEconomics.AsObject,
  }
}

export class NeuronsFundMatchedFundingCurveCoefficients extends jspb.Message {
  hasContributionThresholdXdr(): boolean;
  clearContributionThresholdXdr(): void;
  getContributionThresholdXdr(): nervous_system_pb.Decimal | undefined;
  setContributionThresholdXdr(value?: nervous_system_pb.Decimal): void;

  hasOneThirdParticipationMilestoneXdr(): boolean;
  clearOneThirdParticipationMilestoneXdr(): void;
  getOneThirdParticipationMilestoneXdr(): nervous_system_pb.Decimal | undefined;
  setOneThirdParticipationMilestoneXdr(value?: nervous_system_pb.Decimal): void;

  hasFullParticipationMilestoneXdr(): boolean;
  clearFullParticipationMilestoneXdr(): void;
  getFullParticipationMilestoneXdr(): nervous_system_pb.Decimal | undefined;
  setFullParticipationMilestoneXdr(value?: nervous_system_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundMatchedFundingCurveCoefficients.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundMatchedFundingCurveCoefficients): NeuronsFundMatchedFundingCurveCoefficients.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundMatchedFundingCurveCoefficients, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundMatchedFundingCurveCoefficients;
  static deserializeBinaryFromReader(message: NeuronsFundMatchedFundingCurveCoefficients, reader: jspb.BinaryReader): NeuronsFundMatchedFundingCurveCoefficients;
}

export namespace NeuronsFundMatchedFundingCurveCoefficients {
  export type AsObject = {
    contributionThresholdXdr?: nervous_system_pb.Decimal.AsObject,
    oneThirdParticipationMilestoneXdr?: nervous_system_pb.Decimal.AsObject,
    fullParticipationMilestoneXdr?: nervous_system_pb.Decimal.AsObject,
  }
}

export class NeuronsFundEconomics extends jspb.Message {
  hasMaxTheoreticalNeuronsFundParticipationAmountXdr(): boolean;
  clearMaxTheoreticalNeuronsFundParticipationAmountXdr(): void;
  getMaxTheoreticalNeuronsFundParticipationAmountXdr(): nervous_system_pb.Decimal | undefined;
  setMaxTheoreticalNeuronsFundParticipationAmountXdr(value?: nervous_system_pb.Decimal): void;

  hasNeuronsFundMatchedFundingCurveCoefficients(): boolean;
  clearNeuronsFundMatchedFundingCurveCoefficients(): void;
  getNeuronsFundMatchedFundingCurveCoefficients(): NeuronsFundMatchedFundingCurveCoefficients | undefined;
  setNeuronsFundMatchedFundingCurveCoefficients(value?: NeuronsFundMatchedFundingCurveCoefficients): void;

  hasMinimumIcpXdrRate(): boolean;
  clearMinimumIcpXdrRate(): void;
  getMinimumIcpXdrRate(): nervous_system_pb.Percentage | undefined;
  setMinimumIcpXdrRate(value?: nervous_system_pb.Percentage): void;

  hasMaximumIcpXdrRate(): boolean;
  clearMaximumIcpXdrRate(): void;
  getMaximumIcpXdrRate(): nervous_system_pb.Percentage | undefined;
  setMaximumIcpXdrRate(value?: nervous_system_pb.Percentage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundEconomics.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundEconomics): NeuronsFundEconomics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundEconomics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundEconomics;
  static deserializeBinaryFromReader(message: NeuronsFundEconomics, reader: jspb.BinaryReader): NeuronsFundEconomics;
}

export namespace NeuronsFundEconomics {
  export type AsObject = {
    maxTheoreticalNeuronsFundParticipationAmountXdr?: nervous_system_pb.Decimal.AsObject,
    neuronsFundMatchedFundingCurveCoefficients?: NeuronsFundMatchedFundingCurveCoefficients.AsObject,
    minimumIcpXdrRate?: nervous_system_pb.Percentage.AsObject,
    maximumIcpXdrRate?: nervous_system_pb.Percentage.AsObject,
  }
}

export class RewardEvent extends jspb.Message {
  getDayAfterGenesis(): number;
  setDayAfterGenesis(value: number): void;

  getActualTimestampSeconds(): number;
  setActualTimestampSeconds(value: number): void;

  clearSettledProposalsList(): void;
  getSettledProposalsList(): Array<nns_common_pb.ProposalId>;
  setSettledProposalsList(value: Array<nns_common_pb.ProposalId>): void;
  addSettledProposals(value?: nns_common_pb.ProposalId, index?: number): nns_common_pb.ProposalId;

  getDistributedE8sEquivalent(): number;
  setDistributedE8sEquivalent(value: number): void;

  getTotalAvailableE8sEquivalent(): number;
  setTotalAvailableE8sEquivalent(value: number): void;

  hasLatestRoundAvailableE8sEquivalent(): boolean;
  clearLatestRoundAvailableE8sEquivalent(): void;
  getLatestRoundAvailableE8sEquivalent(): number;
  setLatestRoundAvailableE8sEquivalent(value: number): void;

  hasRoundsSinceLastDistribution(): boolean;
  clearRoundsSinceLastDistribution(): void;
  getRoundsSinceLastDistribution(): number;
  setRoundsSinceLastDistribution(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RewardEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RewardEvent): RewardEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RewardEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RewardEvent;
  static deserializeBinaryFromReader(message: RewardEvent, reader: jspb.BinaryReader): RewardEvent;
}

export namespace RewardEvent {
  export type AsObject = {
    dayAfterGenesis: number,
    actualTimestampSeconds: number,
    settledProposalsList: Array<nns_common_pb.ProposalId.AsObject>,
    distributedE8sEquivalent: number,
    totalAvailableE8sEquivalent: number,
    latestRoundAvailableE8sEquivalent: number,
    roundsSinceLastDistribution: number,
  }
}

export class KnownNeuron extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): nns_common_pb.NeuronId | undefined;
  setId(value?: nns_common_pb.NeuronId): void;

  hasKnownNeuronData(): boolean;
  clearKnownNeuronData(): void;
  getKnownNeuronData(): KnownNeuronData | undefined;
  setKnownNeuronData(value?: KnownNeuronData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnownNeuron.AsObject;
  static toObject(includeInstance: boolean, msg: KnownNeuron): KnownNeuron.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnownNeuron, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnownNeuron;
  static deserializeBinaryFromReader(message: KnownNeuron, reader: jspb.BinaryReader): KnownNeuron;
}

export namespace KnownNeuron {
  export type AsObject = {
    id?: nns_common_pb.NeuronId.AsObject,
    knownNeuronData?: KnownNeuronData.AsObject,
  }
}

export class KnownNeuronData extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnownNeuronData.AsObject;
  static toObject(includeInstance: boolean, msg: KnownNeuronData): KnownNeuronData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnownNeuronData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnownNeuronData;
  static deserializeBinaryFromReader(message: KnownNeuronData, reader: jspb.BinaryReader): KnownNeuronData;
}

export namespace KnownNeuronData {
  export type AsObject = {
    name: string,
    description: string,
  }
}

export class OpenSnsTokenSwap extends jspb.Message {
  hasTargetSwapCanisterId(): boolean;
  clearTargetSwapCanisterId(): void;
  getTargetSwapCanisterId(): base_types_pb.PrincipalId | undefined;
  setTargetSwapCanisterId(value?: base_types_pb.PrincipalId): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): swap_pb.Params | undefined;
  setParams(value?: swap_pb.Params): void;

  hasCommunityFundInvestmentE8s(): boolean;
  clearCommunityFundInvestmentE8s(): void;
  getCommunityFundInvestmentE8s(): number;
  setCommunityFundInvestmentE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenSnsTokenSwap.AsObject;
  static toObject(includeInstance: boolean, msg: OpenSnsTokenSwap): OpenSnsTokenSwap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenSnsTokenSwap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenSnsTokenSwap;
  static deserializeBinaryFromReader(message: OpenSnsTokenSwap, reader: jspb.BinaryReader): OpenSnsTokenSwap;
}

export namespace OpenSnsTokenSwap {
  export type AsObject = {
    targetSwapCanisterId?: base_types_pb.PrincipalId.AsObject,
    params?: swap_pb.Params.AsObject,
    communityFundInvestmentE8s: number,
  }
}

export class CreateServiceNervousSystem extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): string;
  setDescription(value: string): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string;
  setUrl(value: string): void;

  hasLogo(): boolean;
  clearLogo(): void;
  getLogo(): nervous_system_pb.Image | undefined;
  setLogo(value?: nervous_system_pb.Image): void;

  clearFallbackControllerPrincipalIdsList(): void;
  getFallbackControllerPrincipalIdsList(): Array<base_types_pb.PrincipalId>;
  setFallbackControllerPrincipalIdsList(value: Array<base_types_pb.PrincipalId>): void;
  addFallbackControllerPrincipalIds(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

  clearDappCanistersList(): void;
  getDappCanistersList(): Array<nervous_system_pb.Canister>;
  setDappCanistersList(value: Array<nervous_system_pb.Canister>): void;
  addDappCanisters(value?: nervous_system_pb.Canister, index?: number): nervous_system_pb.Canister;

  hasInitialTokenDistribution(): boolean;
  clearInitialTokenDistribution(): void;
  getInitialTokenDistribution(): CreateServiceNervousSystem.InitialTokenDistribution | undefined;
  setInitialTokenDistribution(value?: CreateServiceNervousSystem.InitialTokenDistribution): void;

  hasSwapParameters(): boolean;
  clearSwapParameters(): void;
  getSwapParameters(): CreateServiceNervousSystem.SwapParameters | undefined;
  setSwapParameters(value?: CreateServiceNervousSystem.SwapParameters): void;

  hasLedgerParameters(): boolean;
  clearLedgerParameters(): void;
  getLedgerParameters(): CreateServiceNervousSystem.LedgerParameters | undefined;
  setLedgerParameters(value?: CreateServiceNervousSystem.LedgerParameters): void;

  hasGovernanceParameters(): boolean;
  clearGovernanceParameters(): void;
  getGovernanceParameters(): CreateServiceNervousSystem.GovernanceParameters | undefined;
  setGovernanceParameters(value?: CreateServiceNervousSystem.GovernanceParameters): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceNervousSystem.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceNervousSystem): CreateServiceNervousSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceNervousSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceNervousSystem;
  static deserializeBinaryFromReader(message: CreateServiceNervousSystem, reader: jspb.BinaryReader): CreateServiceNervousSystem;
}

export namespace CreateServiceNervousSystem {
  export type AsObject = {
    name: string,
    description: string,
    url: string,
    logo?: nervous_system_pb.Image.AsObject,
    fallbackControllerPrincipalIdsList: Array<base_types_pb.PrincipalId.AsObject>,
    dappCanistersList: Array<nervous_system_pb.Canister.AsObject>,
    initialTokenDistribution?: CreateServiceNervousSystem.InitialTokenDistribution.AsObject,
    swapParameters?: CreateServiceNervousSystem.SwapParameters.AsObject,
    ledgerParameters?: CreateServiceNervousSystem.LedgerParameters.AsObject,
    governanceParameters?: CreateServiceNervousSystem.GovernanceParameters.AsObject,
  }

  export class InitialTokenDistribution extends jspb.Message {
    hasDeveloperDistribution(): boolean;
    clearDeveloperDistribution(): void;
    getDeveloperDistribution(): CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution | undefined;
    setDeveloperDistribution(value?: CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution): void;

    hasTreasuryDistribution(): boolean;
    clearTreasuryDistribution(): void;
    getTreasuryDistribution(): CreateServiceNervousSystem.InitialTokenDistribution.TreasuryDistribution | undefined;
    setTreasuryDistribution(value?: CreateServiceNervousSystem.InitialTokenDistribution.TreasuryDistribution): void;

    hasSwapDistribution(): boolean;
    clearSwapDistribution(): void;
    getSwapDistribution(): CreateServiceNervousSystem.InitialTokenDistribution.SwapDistribution | undefined;
    setSwapDistribution(value?: CreateServiceNervousSystem.InitialTokenDistribution.SwapDistribution): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InitialTokenDistribution.AsObject;
    static toObject(includeInstance: boolean, msg: InitialTokenDistribution): InitialTokenDistribution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InitialTokenDistribution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InitialTokenDistribution;
    static deserializeBinaryFromReader(message: InitialTokenDistribution, reader: jspb.BinaryReader): InitialTokenDistribution;
  }

  export namespace InitialTokenDistribution {
    export type AsObject = {
      developerDistribution?: CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution.AsObject,
      treasuryDistribution?: CreateServiceNervousSystem.InitialTokenDistribution.TreasuryDistribution.AsObject,
      swapDistribution?: CreateServiceNervousSystem.InitialTokenDistribution.SwapDistribution.AsObject,
    }

    export class DeveloperDistribution extends jspb.Message {
      clearDeveloperNeuronsList(): void;
      getDeveloperNeuronsList(): Array<CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution.NeuronDistribution>;
      setDeveloperNeuronsList(value: Array<CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution.NeuronDistribution>): void;
      addDeveloperNeurons(value?: CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution.NeuronDistribution, index?: number): CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution.NeuronDistribution;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeveloperDistribution.AsObject;
      static toObject(includeInstance: boolean, msg: DeveloperDistribution): DeveloperDistribution.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeveloperDistribution, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeveloperDistribution;
      static deserializeBinaryFromReader(message: DeveloperDistribution, reader: jspb.BinaryReader): DeveloperDistribution;
    }

    export namespace DeveloperDistribution {
      export type AsObject = {
        developerNeuronsList: Array<CreateServiceNervousSystem.InitialTokenDistribution.DeveloperDistribution.NeuronDistribution.AsObject>,
      }

      export class NeuronDistribution extends jspb.Message {
        hasController(): boolean;
        clearController(): void;
        getController(): base_types_pb.PrincipalId | undefined;
        setController(value?: base_types_pb.PrincipalId): void;

        hasDissolveDelay(): boolean;
        clearDissolveDelay(): void;
        getDissolveDelay(): nervous_system_pb.Duration | undefined;
        setDissolveDelay(value?: nervous_system_pb.Duration): void;

        hasMemo(): boolean;
        clearMemo(): void;
        getMemo(): number;
        setMemo(value: number): void;

        hasStake(): boolean;
        clearStake(): void;
        getStake(): nervous_system_pb.Tokens | undefined;
        setStake(value?: nervous_system_pb.Tokens): void;

        hasVestingPeriod(): boolean;
        clearVestingPeriod(): void;
        getVestingPeriod(): nervous_system_pb.Duration | undefined;
        setVestingPeriod(value?: nervous_system_pb.Duration): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NeuronDistribution.AsObject;
        static toObject(includeInstance: boolean, msg: NeuronDistribution): NeuronDistribution.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NeuronDistribution, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NeuronDistribution;
        static deserializeBinaryFromReader(message: NeuronDistribution, reader: jspb.BinaryReader): NeuronDistribution;
      }

      export namespace NeuronDistribution {
        export type AsObject = {
          controller?: base_types_pb.PrincipalId.AsObject,
          dissolveDelay?: nervous_system_pb.Duration.AsObject,
          memo: number,
          stake?: nervous_system_pb.Tokens.AsObject,
          vestingPeriod?: nervous_system_pb.Duration.AsObject,
        }
      }
    }

    export class TreasuryDistribution extends jspb.Message {
      hasTotal(): boolean;
      clearTotal(): void;
      getTotal(): nervous_system_pb.Tokens | undefined;
      setTotal(value?: nervous_system_pb.Tokens): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TreasuryDistribution.AsObject;
      static toObject(includeInstance: boolean, msg: TreasuryDistribution): TreasuryDistribution.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TreasuryDistribution, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TreasuryDistribution;
      static deserializeBinaryFromReader(message: TreasuryDistribution, reader: jspb.BinaryReader): TreasuryDistribution;
    }

    export namespace TreasuryDistribution {
      export type AsObject = {
        total?: nervous_system_pb.Tokens.AsObject,
      }
    }

    export class SwapDistribution extends jspb.Message {
      hasTotal(): boolean;
      clearTotal(): void;
      getTotal(): nervous_system_pb.Tokens | undefined;
      setTotal(value?: nervous_system_pb.Tokens): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SwapDistribution.AsObject;
      static toObject(includeInstance: boolean, msg: SwapDistribution): SwapDistribution.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SwapDistribution, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SwapDistribution;
      static deserializeBinaryFromReader(message: SwapDistribution, reader: jspb.BinaryReader): SwapDistribution;
    }

    export namespace SwapDistribution {
      export type AsObject = {
        total?: nervous_system_pb.Tokens.AsObject,
      }
    }
  }

  export class SwapParameters extends jspb.Message {
    hasMinimumParticipants(): boolean;
    clearMinimumParticipants(): void;
    getMinimumParticipants(): number;
    setMinimumParticipants(value: number): void;

    hasMinimumIcp(): boolean;
    clearMinimumIcp(): void;
    getMinimumIcp(): nervous_system_pb.Tokens | undefined;
    setMinimumIcp(value?: nervous_system_pb.Tokens): void;

    hasMaximumIcp(): boolean;
    clearMaximumIcp(): void;
    getMaximumIcp(): nervous_system_pb.Tokens | undefined;
    setMaximumIcp(value?: nervous_system_pb.Tokens): void;

    hasMinimumDirectParticipationIcp(): boolean;
    clearMinimumDirectParticipationIcp(): void;
    getMinimumDirectParticipationIcp(): nervous_system_pb.Tokens | undefined;
    setMinimumDirectParticipationIcp(value?: nervous_system_pb.Tokens): void;

    hasMaximumDirectParticipationIcp(): boolean;
    clearMaximumDirectParticipationIcp(): void;
    getMaximumDirectParticipationIcp(): nervous_system_pb.Tokens | undefined;
    setMaximumDirectParticipationIcp(value?: nervous_system_pb.Tokens): void;

    hasMinimumParticipantIcp(): boolean;
    clearMinimumParticipantIcp(): void;
    getMinimumParticipantIcp(): nervous_system_pb.Tokens | undefined;
    setMinimumParticipantIcp(value?: nervous_system_pb.Tokens): void;

    hasMaximumParticipantIcp(): boolean;
    clearMaximumParticipantIcp(): void;
    getMaximumParticipantIcp(): nervous_system_pb.Tokens | undefined;
    setMaximumParticipantIcp(value?: nervous_system_pb.Tokens): void;

    hasNeuronBasketConstructionParameters(): boolean;
    clearNeuronBasketConstructionParameters(): void;
    getNeuronBasketConstructionParameters(): CreateServiceNervousSystem.SwapParameters.NeuronBasketConstructionParameters | undefined;
    setNeuronBasketConstructionParameters(value?: CreateServiceNervousSystem.SwapParameters.NeuronBasketConstructionParameters): void;

    hasConfirmationText(): boolean;
    clearConfirmationText(): void;
    getConfirmationText(): string;
    setConfirmationText(value: string): void;

    hasRestrictedCountries(): boolean;
    clearRestrictedCountries(): void;
    getRestrictedCountries(): nervous_system_pb.Countries | undefined;
    setRestrictedCountries(value?: nervous_system_pb.Countries): void;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): nervous_system_pb.GlobalTimeOfDay | undefined;
    setStartTime(value?: nervous_system_pb.GlobalTimeOfDay): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): nervous_system_pb.Duration | undefined;
    setDuration(value?: nervous_system_pb.Duration): void;

    hasNeuronsFundInvestmentIcp(): boolean;
    clearNeuronsFundInvestmentIcp(): void;
    getNeuronsFundInvestmentIcp(): nervous_system_pb.Tokens | undefined;
    setNeuronsFundInvestmentIcp(value?: nervous_system_pb.Tokens): void;

    hasNeuronsFundParticipation(): boolean;
    clearNeuronsFundParticipation(): void;
    getNeuronsFundParticipation(): boolean;
    setNeuronsFundParticipation(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapParameters.AsObject;
    static toObject(includeInstance: boolean, msg: SwapParameters): SwapParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapParameters;
    static deserializeBinaryFromReader(message: SwapParameters, reader: jspb.BinaryReader): SwapParameters;
  }

  export namespace SwapParameters {
    export type AsObject = {
      minimumParticipants: number,
      minimumIcp?: nervous_system_pb.Tokens.AsObject,
      maximumIcp?: nervous_system_pb.Tokens.AsObject,
      minimumDirectParticipationIcp?: nervous_system_pb.Tokens.AsObject,
      maximumDirectParticipationIcp?: nervous_system_pb.Tokens.AsObject,
      minimumParticipantIcp?: nervous_system_pb.Tokens.AsObject,
      maximumParticipantIcp?: nervous_system_pb.Tokens.AsObject,
      neuronBasketConstructionParameters?: CreateServiceNervousSystem.SwapParameters.NeuronBasketConstructionParameters.AsObject,
      confirmationText: string,
      restrictedCountries?: nervous_system_pb.Countries.AsObject,
      startTime?: nervous_system_pb.GlobalTimeOfDay.AsObject,
      duration?: nervous_system_pb.Duration.AsObject,
      neuronsFundInvestmentIcp?: nervous_system_pb.Tokens.AsObject,
      neuronsFundParticipation: boolean,
    }

    export class NeuronBasketConstructionParameters extends jspb.Message {
      hasCount(): boolean;
      clearCount(): void;
      getCount(): number;
      setCount(value: number): void;

      hasDissolveDelayInterval(): boolean;
      clearDissolveDelayInterval(): void;
      getDissolveDelayInterval(): nervous_system_pb.Duration | undefined;
      setDissolveDelayInterval(value?: nervous_system_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): NeuronBasketConstructionParameters.AsObject;
      static toObject(includeInstance: boolean, msg: NeuronBasketConstructionParameters): NeuronBasketConstructionParameters.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: NeuronBasketConstructionParameters, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): NeuronBasketConstructionParameters;
      static deserializeBinaryFromReader(message: NeuronBasketConstructionParameters, reader: jspb.BinaryReader): NeuronBasketConstructionParameters;
    }

    export namespace NeuronBasketConstructionParameters {
      export type AsObject = {
        count: number,
        dissolveDelayInterval?: nervous_system_pb.Duration.AsObject,
      }
    }
  }

  export class LedgerParameters extends jspb.Message {
    hasTransactionFee(): boolean;
    clearTransactionFee(): void;
    getTransactionFee(): nervous_system_pb.Tokens | undefined;
    setTransactionFee(value?: nervous_system_pb.Tokens): void;

    hasTokenName(): boolean;
    clearTokenName(): void;
    getTokenName(): string;
    setTokenName(value: string): void;

    hasTokenSymbol(): boolean;
    clearTokenSymbol(): void;
    getTokenSymbol(): string;
    setTokenSymbol(value: string): void;

    hasTokenLogo(): boolean;
    clearTokenLogo(): void;
    getTokenLogo(): nervous_system_pb.Image | undefined;
    setTokenLogo(value?: nervous_system_pb.Image): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LedgerParameters.AsObject;
    static toObject(includeInstance: boolean, msg: LedgerParameters): LedgerParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LedgerParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LedgerParameters;
    static deserializeBinaryFromReader(message: LedgerParameters, reader: jspb.BinaryReader): LedgerParameters;
  }

  export namespace LedgerParameters {
    export type AsObject = {
      transactionFee?: nervous_system_pb.Tokens.AsObject,
      tokenName: string,
      tokenSymbol: string,
      tokenLogo?: nervous_system_pb.Image.AsObject,
    }
  }

  export class GovernanceParameters extends jspb.Message {
    hasProposalRejectionFee(): boolean;
    clearProposalRejectionFee(): void;
    getProposalRejectionFee(): nervous_system_pb.Tokens | undefined;
    setProposalRejectionFee(value?: nervous_system_pb.Tokens): void;

    hasProposalInitialVotingPeriod(): boolean;
    clearProposalInitialVotingPeriod(): void;
    getProposalInitialVotingPeriod(): nervous_system_pb.Duration | undefined;
    setProposalInitialVotingPeriod(value?: nervous_system_pb.Duration): void;

    hasProposalWaitForQuietDeadlineIncrease(): boolean;
    clearProposalWaitForQuietDeadlineIncrease(): void;
    getProposalWaitForQuietDeadlineIncrease(): nervous_system_pb.Duration | undefined;
    setProposalWaitForQuietDeadlineIncrease(value?: nervous_system_pb.Duration): void;

    hasNeuronMinimumStake(): boolean;
    clearNeuronMinimumStake(): void;
    getNeuronMinimumStake(): nervous_system_pb.Tokens | undefined;
    setNeuronMinimumStake(value?: nervous_system_pb.Tokens): void;

    hasNeuronMinimumDissolveDelayToVote(): boolean;
    clearNeuronMinimumDissolveDelayToVote(): void;
    getNeuronMinimumDissolveDelayToVote(): nervous_system_pb.Duration | undefined;
    setNeuronMinimumDissolveDelayToVote(value?: nervous_system_pb.Duration): void;

    hasNeuronMaximumDissolveDelay(): boolean;
    clearNeuronMaximumDissolveDelay(): void;
    getNeuronMaximumDissolveDelay(): nervous_system_pb.Duration | undefined;
    setNeuronMaximumDissolveDelay(value?: nervous_system_pb.Duration): void;

    hasNeuronMaximumDissolveDelayBonus(): boolean;
    clearNeuronMaximumDissolveDelayBonus(): void;
    getNeuronMaximumDissolveDelayBonus(): nervous_system_pb.Percentage | undefined;
    setNeuronMaximumDissolveDelayBonus(value?: nervous_system_pb.Percentage): void;

    hasNeuronMaximumAgeForAgeBonus(): boolean;
    clearNeuronMaximumAgeForAgeBonus(): void;
    getNeuronMaximumAgeForAgeBonus(): nervous_system_pb.Duration | undefined;
    setNeuronMaximumAgeForAgeBonus(value?: nervous_system_pb.Duration): void;

    hasNeuronMaximumAgeBonus(): boolean;
    clearNeuronMaximumAgeBonus(): void;
    getNeuronMaximumAgeBonus(): nervous_system_pb.Percentage | undefined;
    setNeuronMaximumAgeBonus(value?: nervous_system_pb.Percentage): void;

    hasVotingRewardParameters(): boolean;
    clearVotingRewardParameters(): void;
    getVotingRewardParameters(): CreateServiceNervousSystem.GovernanceParameters.VotingRewardParameters | undefined;
    setVotingRewardParameters(value?: CreateServiceNervousSystem.GovernanceParameters.VotingRewardParameters): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GovernanceParameters.AsObject;
    static toObject(includeInstance: boolean, msg: GovernanceParameters): GovernanceParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GovernanceParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GovernanceParameters;
    static deserializeBinaryFromReader(message: GovernanceParameters, reader: jspb.BinaryReader): GovernanceParameters;
  }

  export namespace GovernanceParameters {
    export type AsObject = {
      proposalRejectionFee?: nervous_system_pb.Tokens.AsObject,
      proposalInitialVotingPeriod?: nervous_system_pb.Duration.AsObject,
      proposalWaitForQuietDeadlineIncrease?: nervous_system_pb.Duration.AsObject,
      neuronMinimumStake?: nervous_system_pb.Tokens.AsObject,
      neuronMinimumDissolveDelayToVote?: nervous_system_pb.Duration.AsObject,
      neuronMaximumDissolveDelay?: nervous_system_pb.Duration.AsObject,
      neuronMaximumDissolveDelayBonus?: nervous_system_pb.Percentage.AsObject,
      neuronMaximumAgeForAgeBonus?: nervous_system_pb.Duration.AsObject,
      neuronMaximumAgeBonus?: nervous_system_pb.Percentage.AsObject,
      votingRewardParameters?: CreateServiceNervousSystem.GovernanceParameters.VotingRewardParameters.AsObject,
    }

    export class VotingRewardParameters extends jspb.Message {
      hasInitialRewardRate(): boolean;
      clearInitialRewardRate(): void;
      getInitialRewardRate(): nervous_system_pb.Percentage | undefined;
      setInitialRewardRate(value?: nervous_system_pb.Percentage): void;

      hasFinalRewardRate(): boolean;
      clearFinalRewardRate(): void;
      getFinalRewardRate(): nervous_system_pb.Percentage | undefined;
      setFinalRewardRate(value?: nervous_system_pb.Percentage): void;

      hasRewardRateTransitionDuration(): boolean;
      clearRewardRateTransitionDuration(): void;
      getRewardRateTransitionDuration(): nervous_system_pb.Duration | undefined;
      setRewardRateTransitionDuration(value?: nervous_system_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): VotingRewardParameters.AsObject;
      static toObject(includeInstance: boolean, msg: VotingRewardParameters): VotingRewardParameters.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: VotingRewardParameters, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): VotingRewardParameters;
      static deserializeBinaryFromReader(message: VotingRewardParameters, reader: jspb.BinaryReader): VotingRewardParameters;
    }

    export namespace VotingRewardParameters {
      export type AsObject = {
        initialRewardRate?: nervous_system_pb.Percentage.AsObject,
        finalRewardRate?: nervous_system_pb.Percentage.AsObject,
        rewardRateTransitionDuration?: nervous_system_pb.Duration.AsObject,
      }
    }
  }
}

export class Governance extends jspb.Message {
  getNeuronsMap(): jspb.Map<number, Neuron>;
  clearNeuronsMap(): void;
  getProposalsMap(): jspb.Map<number, ProposalData>;
  clearProposalsMap(): void;
  clearToClaimTransfersList(): void;
  getToClaimTransfersList(): Array<NeuronStakeTransfer>;
  setToClaimTransfersList(value: Array<NeuronStakeTransfer>): void;
  addToClaimTransfers(value?: NeuronStakeTransfer, index?: number): NeuronStakeTransfer;

  getWaitForQuietThresholdSeconds(): number;
  setWaitForQuietThresholdSeconds(value: number): void;

  hasEconomics(): boolean;
  clearEconomics(): void;
  getEconomics(): NetworkEconomics | undefined;
  setEconomics(value?: NetworkEconomics): void;

  hasLatestRewardEvent(): boolean;
  clearLatestRewardEvent(): void;
  getLatestRewardEvent(): RewardEvent | undefined;
  setLatestRewardEvent(value?: RewardEvent): void;

  getInFlightCommandsMap(): jspb.Map<number, Governance.NeuronInFlightCommand>;
  clearInFlightCommandsMap(): void;
  getGenesisTimestampSeconds(): number;
  setGenesisTimestampSeconds(value: number): void;

  clearNodeProvidersList(): void;
  getNodeProvidersList(): Array<NodeProvider>;
  setNodeProvidersList(value: Array<NodeProvider>): void;
  addNodeProviders(value?: NodeProvider, index?: number): NodeProvider;

  getDefaultFolloweesMap(): jspb.Map<number, Neuron.Followees>;
  clearDefaultFolloweesMap(): void;
  getShortVotingPeriodSeconds(): number;
  setShortVotingPeriodSeconds(value: number): void;

  hasNeuronManagementVotingPeriodSeconds(): boolean;
  clearNeuronManagementVotingPeriodSeconds(): void;
  getNeuronManagementVotingPeriodSeconds(): number;
  setNeuronManagementVotingPeriodSeconds(value: number): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): Governance.GovernanceCachedMetrics | undefined;
  setMetrics(value?: Governance.GovernanceCachedMetrics): void;

  hasMostRecentMonthlyNodeProviderRewards(): boolean;
  clearMostRecentMonthlyNodeProviderRewards(): void;
  getMostRecentMonthlyNodeProviderRewards(): MostRecentMonthlyNodeProviderRewards | undefined;
  setMostRecentMonthlyNodeProviderRewards(value?: MostRecentMonthlyNodeProviderRewards): void;

  hasCachedDailyMaturityModulationBasisPoints(): boolean;
  clearCachedDailyMaturityModulationBasisPoints(): void;
  getCachedDailyMaturityModulationBasisPoints(): number;
  setCachedDailyMaturityModulationBasisPoints(value: number): void;

  hasMaturityModulationLastUpdatedAtTimestampSeconds(): boolean;
  clearMaturityModulationLastUpdatedAtTimestampSeconds(): void;
  getMaturityModulationLastUpdatedAtTimestampSeconds(): number;
  setMaturityModulationLastUpdatedAtTimestampSeconds(value: number): void;

  hasSpawningNeurons(): boolean;
  clearSpawningNeurons(): void;
  getSpawningNeurons(): boolean;
  setSpawningNeurons(value: boolean): void;

  hasMakingSnsProposal(): boolean;
  clearMakingSnsProposal(): void;
  getMakingSnsProposal(): Governance.MakingSnsProposal | undefined;
  setMakingSnsProposal(value?: Governance.MakingSnsProposal): void;

  hasMigrations(): boolean;
  clearMigrations(): void;
  getMigrations(): Governance.Migrations | undefined;
  setMigrations(value?: Governance.Migrations): void;

  getTopicFolloweeIndexMap(): jspb.Map<number, Governance.FollowersMap>;
  clearTopicFolloweeIndexMap(): void;
  hasXdrConversionRate(): boolean;
  clearXdrConversionRate(): void;
  getXdrConversionRate(): XdrConversionRate | undefined;
  setXdrConversionRate(value?: XdrConversionRate): void;

  hasRestoreAgingSummary(): boolean;
  clearRestoreAgingSummary(): void;
  getRestoreAgingSummary(): RestoreAgingSummary | undefined;
  setRestoreAgingSummary(value?: RestoreAgingSummary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Governance.AsObject;
  static toObject(includeInstance: boolean, msg: Governance): Governance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Governance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Governance;
  static deserializeBinaryFromReader(message: Governance, reader: jspb.BinaryReader): Governance;
}

export namespace Governance {
  export type AsObject = {
    neuronsMap: Array<[number, Neuron.AsObject]>,
    proposalsMap: Array<[number, ProposalData.AsObject]>,
    toClaimTransfersList: Array<NeuronStakeTransfer.AsObject>,
    waitForQuietThresholdSeconds: number,
    economics?: NetworkEconomics.AsObject,
    latestRewardEvent?: RewardEvent.AsObject,
    inFlightCommandsMap: Array<[number, Governance.NeuronInFlightCommand.AsObject]>,
    genesisTimestampSeconds: number,
    nodeProvidersList: Array<NodeProvider.AsObject>,
    defaultFolloweesMap: Array<[number, Neuron.Followees.AsObject]>,
    shortVotingPeriodSeconds: number,
    neuronManagementVotingPeriodSeconds: number,
    metrics?: Governance.GovernanceCachedMetrics.AsObject,
    mostRecentMonthlyNodeProviderRewards?: MostRecentMonthlyNodeProviderRewards.AsObject,
    cachedDailyMaturityModulationBasisPoints: number,
    maturityModulationLastUpdatedAtTimestampSeconds: number,
    spawningNeurons: boolean,
    makingSnsProposal?: Governance.MakingSnsProposal.AsObject,
    migrations?: Governance.Migrations.AsObject,
    topicFolloweeIndexMap: Array<[number, Governance.FollowersMap.AsObject]>,
    xdrConversionRate?: XdrConversionRate.AsObject,
    restoreAgingSummary?: RestoreAgingSummary.AsObject,
  }

  export class NeuronInFlightCommand extends jspb.Message {
    getTimestamp(): number;
    setTimestamp(value: number): void;

    hasDisburse(): boolean;
    clearDisburse(): void;
    getDisburse(): ManageNeuron.Disburse | undefined;
    setDisburse(value?: ManageNeuron.Disburse): void;

    hasSplit(): boolean;
    clearSplit(): void;
    getSplit(): ManageNeuron.Split | undefined;
    setSplit(value?: ManageNeuron.Split): void;

    hasDisburseToNeuron(): boolean;
    clearDisburseToNeuron(): void;
    getDisburseToNeuron(): ManageNeuron.DisburseToNeuron | undefined;
    setDisburseToNeuron(value?: ManageNeuron.DisburseToNeuron): void;

    hasMergeMaturity(): boolean;
    clearMergeMaturity(): void;
    getMergeMaturity(): ManageNeuron.MergeMaturity | undefined;
    setMergeMaturity(value?: ManageNeuron.MergeMaturity): void;

    hasClaimOrRefreshNeuron(): boolean;
    clearClaimOrRefreshNeuron(): void;
    getClaimOrRefreshNeuron(): ManageNeuron.ClaimOrRefresh | undefined;
    setClaimOrRefreshNeuron(value?: ManageNeuron.ClaimOrRefresh): void;

    hasConfigure(): boolean;
    clearConfigure(): void;
    getConfigure(): ManageNeuron.Configure | undefined;
    setConfigure(value?: ManageNeuron.Configure): void;

    hasMerge(): boolean;
    clearMerge(): void;
    getMerge(): ManageNeuron.Merge | undefined;
    setMerge(value?: ManageNeuron.Merge): void;

    hasSpawn(): boolean;
    clearSpawn(): void;
    getSpawn(): nns_common_pb.NeuronId | undefined;
    setSpawn(value?: nns_common_pb.NeuronId): void;

    hasSyncCommand(): boolean;
    clearSyncCommand(): void;
    getSyncCommand(): Governance.NeuronInFlightCommand.SyncCommand | undefined;
    setSyncCommand(value?: Governance.NeuronInFlightCommand.SyncCommand): void;

    getCommandCase(): NeuronInFlightCommand.CommandCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NeuronInFlightCommand.AsObject;
    static toObject(includeInstance: boolean, msg: NeuronInFlightCommand): NeuronInFlightCommand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NeuronInFlightCommand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NeuronInFlightCommand;
    static deserializeBinaryFromReader(message: NeuronInFlightCommand, reader: jspb.BinaryReader): NeuronInFlightCommand;
  }

  export namespace NeuronInFlightCommand {
    export type AsObject = {
      timestamp: number,
      disburse?: ManageNeuron.Disburse.AsObject,
      split?: ManageNeuron.Split.AsObject,
      disburseToNeuron?: ManageNeuron.DisburseToNeuron.AsObject,
      mergeMaturity?: ManageNeuron.MergeMaturity.AsObject,
      claimOrRefreshNeuron?: ManageNeuron.ClaimOrRefresh.AsObject,
      configure?: ManageNeuron.Configure.AsObject,
      merge?: ManageNeuron.Merge.AsObject,
      spawn?: nns_common_pb.NeuronId.AsObject,
      syncCommand?: Governance.NeuronInFlightCommand.SyncCommand.AsObject,
    }

    export class SyncCommand extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SyncCommand.AsObject;
      static toObject(includeInstance: boolean, msg: SyncCommand): SyncCommand.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SyncCommand, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SyncCommand;
      static deserializeBinaryFromReader(message: SyncCommand, reader: jspb.BinaryReader): SyncCommand;
    }

    export namespace SyncCommand {
      export type AsObject = {
      }
    }

    export enum CommandCase {
      COMMAND_NOT_SET = 0,
      DISBURSE = 2,
      SPLIT = 3,
      DISBURSE_TO_NEURON = 5,
      MERGE_MATURITY = 7,
      CLAIM_OR_REFRESH_NEURON = 8,
      CONFIGURE = 9,
      MERGE = 10,
      SPAWN = 20,
      SYNC_COMMAND = 21,
    }
  }

  export class GovernanceCachedMetrics extends jspb.Message {
    getTimestampSeconds(): number;
    setTimestampSeconds(value: number): void;

    getTotalSupplyIcp(): number;
    setTotalSupplyIcp(value: number): void;

    getDissolvingNeuronsCount(): number;
    setDissolvingNeuronsCount(value: number): void;

    getDissolvingNeuronsE8sBucketsMap(): jspb.Map<number, number>;
    clearDissolvingNeuronsE8sBucketsMap(): void;
    getDissolvingNeuronsCountBucketsMap(): jspb.Map<number, number>;
    clearDissolvingNeuronsCountBucketsMap(): void;
    getNotDissolvingNeuronsCount(): number;
    setNotDissolvingNeuronsCount(value: number): void;

    getNotDissolvingNeuronsE8sBucketsMap(): jspb.Map<number, number>;
    clearNotDissolvingNeuronsE8sBucketsMap(): void;
    getNotDissolvingNeuronsCountBucketsMap(): jspb.Map<number, number>;
    clearNotDissolvingNeuronsCountBucketsMap(): void;
    getDissolvedNeuronsCount(): number;
    setDissolvedNeuronsCount(value: number): void;

    getDissolvedNeuronsE8s(): number;
    setDissolvedNeuronsE8s(value: number): void;

    getGarbageCollectableNeuronsCount(): number;
    setGarbageCollectableNeuronsCount(value: number): void;

    getNeuronsWithInvalidStakeCount(): number;
    setNeuronsWithInvalidStakeCount(value: number): void;

    getTotalStakedE8s(): number;
    setTotalStakedE8s(value: number): void;

    getNeuronsWithLessThan6MonthsDissolveDelayCount(): number;
    setNeuronsWithLessThan6MonthsDissolveDelayCount(value: number): void;

    getNeuronsWithLessThan6MonthsDissolveDelayE8s(): number;
    setNeuronsWithLessThan6MonthsDissolveDelayE8s(value: number): void;

    getCommunityFundTotalStakedE8s(): number;
    setCommunityFundTotalStakedE8s(value: number): void;

    getCommunityFundTotalMaturityE8sEquivalent(): number;
    setCommunityFundTotalMaturityE8sEquivalent(value: number): void;

    getNeuronsFundTotalActiveNeurons(): number;
    setNeuronsFundTotalActiveNeurons(value: number): void;

    getTotalLockedE8s(): number;
    setTotalLockedE8s(value: number): void;

    getTotalMaturityE8sEquivalent(): number;
    setTotalMaturityE8sEquivalent(value: number): void;

    getTotalStakedMaturityE8sEquivalent(): number;
    setTotalStakedMaturityE8sEquivalent(value: number): void;

    getDissolvingNeuronsStakedMaturityE8sEquivalentBucketsMap(): jspb.Map<number, number>;
    clearDissolvingNeuronsStakedMaturityE8sEquivalentBucketsMap(): void;
    getDissolvingNeuronsStakedMaturityE8sEquivalentSum(): number;
    setDissolvingNeuronsStakedMaturityE8sEquivalentSum(value: number): void;

    getNotDissolvingNeuronsStakedMaturityE8sEquivalentBucketsMap(): jspb.Map<number, number>;
    clearNotDissolvingNeuronsStakedMaturityE8sEquivalentBucketsMap(): void;
    getNotDissolvingNeuronsStakedMaturityE8sEquivalentSum(): number;
    setNotDissolvingNeuronsStakedMaturityE8sEquivalentSum(value: number): void;

    getSeedNeuronCount(): number;
    setSeedNeuronCount(value: number): void;

    getEctNeuronCount(): number;
    setEctNeuronCount(value: number): void;

    getTotalStakedE8sSeed(): number;
    setTotalStakedE8sSeed(value: number): void;

    getTotalStakedE8sEct(): number;
    setTotalStakedE8sEct(value: number): void;

    getTotalStakedMaturityE8sEquivalentSeed(): number;
    setTotalStakedMaturityE8sEquivalentSeed(value: number): void;

    getTotalStakedMaturityE8sEquivalentEct(): number;
    setTotalStakedMaturityE8sEquivalentEct(value: number): void;

    getDissolvingNeuronsE8sBucketsSeedMap(): jspb.Map<number, number>;
    clearDissolvingNeuronsE8sBucketsSeedMap(): void;
    getDissolvingNeuronsE8sBucketsEctMap(): jspb.Map<number, number>;
    clearDissolvingNeuronsE8sBucketsEctMap(): void;
    getNotDissolvingNeuronsE8sBucketsSeedMap(): jspb.Map<number, number>;
    clearNotDissolvingNeuronsE8sBucketsSeedMap(): void;
    getNotDissolvingNeuronsE8sBucketsEctMap(): jspb.Map<number, number>;
    clearNotDissolvingNeuronsE8sBucketsEctMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GovernanceCachedMetrics.AsObject;
    static toObject(includeInstance: boolean, msg: GovernanceCachedMetrics): GovernanceCachedMetrics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GovernanceCachedMetrics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GovernanceCachedMetrics;
    static deserializeBinaryFromReader(message: GovernanceCachedMetrics, reader: jspb.BinaryReader): GovernanceCachedMetrics;
  }

  export namespace GovernanceCachedMetrics {
    export type AsObject = {
      timestampSeconds: number,
      totalSupplyIcp: number,
      dissolvingNeuronsCount: number,
      dissolvingNeuronsE8sBucketsMap: Array<[number, number]>,
      dissolvingNeuronsCountBucketsMap: Array<[number, number]>,
      notDissolvingNeuronsCount: number,
      notDissolvingNeuronsE8sBucketsMap: Array<[number, number]>,
      notDissolvingNeuronsCountBucketsMap: Array<[number, number]>,
      dissolvedNeuronsCount: number,
      dissolvedNeuronsE8s: number,
      garbageCollectableNeuronsCount: number,
      neuronsWithInvalidStakeCount: number,
      totalStakedE8s: number,
      neuronsWithLessThan6MonthsDissolveDelayCount: number,
      neuronsWithLessThan6MonthsDissolveDelayE8s: number,
      communityFundTotalStakedE8s: number,
      communityFundTotalMaturityE8sEquivalent: number,
      neuronsFundTotalActiveNeurons: number,
      totalLockedE8s: number,
      totalMaturityE8sEquivalent: number,
      totalStakedMaturityE8sEquivalent: number,
      dissolvingNeuronsStakedMaturityE8sEquivalentBucketsMap: Array<[number, number]>,
      dissolvingNeuronsStakedMaturityE8sEquivalentSum: number,
      notDissolvingNeuronsStakedMaturityE8sEquivalentBucketsMap: Array<[number, number]>,
      notDissolvingNeuronsStakedMaturityE8sEquivalentSum: number,
      seedNeuronCount: number,
      ectNeuronCount: number,
      totalStakedE8sSeed: number,
      totalStakedE8sEct: number,
      totalStakedMaturityE8sEquivalentSeed: number,
      totalStakedMaturityE8sEquivalentEct: number,
      dissolvingNeuronsE8sBucketsSeedMap: Array<[number, number]>,
      dissolvingNeuronsE8sBucketsEctMap: Array<[number, number]>,
      notDissolvingNeuronsE8sBucketsSeedMap: Array<[number, number]>,
      notDissolvingNeuronsE8sBucketsEctMap: Array<[number, number]>,
    }
  }

  export class MakingSnsProposal extends jspb.Message {
    hasProposerId(): boolean;
    clearProposerId(): void;
    getProposerId(): nns_common_pb.NeuronId | undefined;
    setProposerId(value?: nns_common_pb.NeuronId): void;

    hasCaller(): boolean;
    clearCaller(): void;
    getCaller(): base_types_pb.PrincipalId | undefined;
    setCaller(value?: base_types_pb.PrincipalId): void;

    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): Proposal | undefined;
    setProposal(value?: Proposal): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MakingSnsProposal.AsObject;
    static toObject(includeInstance: boolean, msg: MakingSnsProposal): MakingSnsProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MakingSnsProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MakingSnsProposal;
    static deserializeBinaryFromReader(message: MakingSnsProposal, reader: jspb.BinaryReader): MakingSnsProposal;
  }

  export namespace MakingSnsProposal {
    export type AsObject = {
      proposerId?: nns_common_pb.NeuronId.AsObject,
      caller?: base_types_pb.PrincipalId.AsObject,
      proposal?: Proposal.AsObject,
    }
  }

  export class Migration extends jspb.Message {
    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Governance.Migration.MigrationStatusMap[keyof Governance.Migration.MigrationStatusMap];
    setStatus(value: Governance.Migration.MigrationStatusMap[keyof Governance.Migration.MigrationStatusMap]): void;

    hasFailureReason(): boolean;
    clearFailureReason(): void;
    getFailureReason(): string;
    setFailureReason(value: string): void;

    hasLastNeuronId(): boolean;
    clearLastNeuronId(): void;
    getLastNeuronId(): nns_common_pb.NeuronId | undefined;
    setLastNeuronId(value?: nns_common_pb.NeuronId): void;

    getProgressCase(): Migration.ProgressCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Migration.AsObject;
    static toObject(includeInstance: boolean, msg: Migration): Migration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Migration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Migration;
    static deserializeBinaryFromReader(message: Migration, reader: jspb.BinaryReader): Migration;
  }

  export namespace Migration {
    export type AsObject = {
      status: Governance.Migration.MigrationStatusMap[keyof Governance.Migration.MigrationStatusMap],
      failureReason: string,
      lastNeuronId?: nns_common_pb.NeuronId.AsObject,
    }

    export interface MigrationStatusMap {
      MIGRATION_STATUS_UNSPECIFIED: 0;
      MIGRATION_STATUS_IN_PROGRESS: 1;
      MIGRATION_STATUS_SUCCEEDED: 2;
      MIGRATION_STATUS_FAILED: 3;
    }

    export const MigrationStatus: MigrationStatusMap;

    export enum ProgressCase {
      PROGRESS_NOT_SET = 0,
      LAST_NEURON_ID = 3,
    }
  }

  export class Migrations extends jspb.Message {
    hasNeuronIndexesMigration(): boolean;
    clearNeuronIndexesMigration(): void;
    getNeuronIndexesMigration(): Governance.Migration | undefined;
    setNeuronIndexesMigration(value?: Governance.Migration): void;

    hasCopyInactiveNeuronsToStableMemoryMigration(): boolean;
    clearCopyInactiveNeuronsToStableMemoryMigration(): void;
    getCopyInactiveNeuronsToStableMemoryMigration(): Governance.Migration | undefined;
    setCopyInactiveNeuronsToStableMemoryMigration(value?: Governance.Migration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Migrations.AsObject;
    static toObject(includeInstance: boolean, msg: Migrations): Migrations.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Migrations, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Migrations;
    static deserializeBinaryFromReader(message: Migrations, reader: jspb.BinaryReader): Migrations;
  }

  export namespace Migrations {
    export type AsObject = {
      neuronIndexesMigration?: Governance.Migration.AsObject,
      copyInactiveNeuronsToStableMemoryMigration?: Governance.Migration.AsObject,
    }
  }

  export class FollowersMap extends jspb.Message {
    getFollowersMapMap(): jspb.Map<number, Governance.FollowersMap.Followers>;
    clearFollowersMapMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FollowersMap.AsObject;
    static toObject(includeInstance: boolean, msg: FollowersMap): FollowersMap.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FollowersMap, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FollowersMap;
    static deserializeBinaryFromReader(message: FollowersMap, reader: jspb.BinaryReader): FollowersMap;
  }

  export namespace FollowersMap {
    export type AsObject = {
      followersMapMap: Array<[number, Governance.FollowersMap.Followers.AsObject]>,
    }

    export class Followers extends jspb.Message {
      clearFollowersList(): void;
      getFollowersList(): Array<nns_common_pb.NeuronId>;
      setFollowersList(value: Array<nns_common_pb.NeuronId>): void;
      addFollowers(value?: nns_common_pb.NeuronId, index?: number): nns_common_pb.NeuronId;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Followers.AsObject;
      static toObject(includeInstance: boolean, msg: Followers): Followers.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Followers, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Followers;
      static deserializeBinaryFromReader(message: Followers, reader: jspb.BinaryReader): Followers;
    }

    export namespace Followers {
      export type AsObject = {
        followersList: Array<nns_common_pb.NeuronId.AsObject>,
      }
    }
  }
}

export class XdrConversionRate extends jspb.Message {
  hasTimestampSeconds(): boolean;
  clearTimestampSeconds(): void;
  getTimestampSeconds(): number;
  setTimestampSeconds(value: number): void;

  hasXdrPermyriadPerIcp(): boolean;
  clearXdrPermyriadPerIcp(): void;
  getXdrPermyriadPerIcp(): number;
  setXdrPermyriadPerIcp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XdrConversionRate.AsObject;
  static toObject(includeInstance: boolean, msg: XdrConversionRate): XdrConversionRate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: XdrConversionRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XdrConversionRate;
  static deserializeBinaryFromReader(message: XdrConversionRate, reader: jspb.BinaryReader): XdrConversionRate;
}

export namespace XdrConversionRate {
  export type AsObject = {
    timestampSeconds: number,
    xdrPermyriadPerIcp: number,
  }
}

export class ListProposalInfo extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  hasBeforeProposal(): boolean;
  clearBeforeProposal(): void;
  getBeforeProposal(): nns_common_pb.ProposalId | undefined;
  setBeforeProposal(value?: nns_common_pb.ProposalId): void;

  clearExcludeTopicList(): void;
  getExcludeTopicList(): Array<TopicMap[keyof TopicMap]>;
  setExcludeTopicList(value: Array<TopicMap[keyof TopicMap]>): void;
  addExcludeTopic(value: TopicMap[keyof TopicMap], index?: number): TopicMap[keyof TopicMap];

  clearIncludeRewardStatusList(): void;
  getIncludeRewardStatusList(): Array<ProposalRewardStatusMap[keyof ProposalRewardStatusMap]>;
  setIncludeRewardStatusList(value: Array<ProposalRewardStatusMap[keyof ProposalRewardStatusMap]>): void;
  addIncludeRewardStatus(value: ProposalRewardStatusMap[keyof ProposalRewardStatusMap], index?: number): ProposalRewardStatusMap[keyof ProposalRewardStatusMap];

  clearIncludeStatusList(): void;
  getIncludeStatusList(): Array<ProposalStatusMap[keyof ProposalStatusMap]>;
  setIncludeStatusList(value: Array<ProposalStatusMap[keyof ProposalStatusMap]>): void;
  addIncludeStatus(value: ProposalStatusMap[keyof ProposalStatusMap], index?: number): ProposalStatusMap[keyof ProposalStatusMap];

  hasIncludeAllManageNeuronProposals(): boolean;
  clearIncludeAllManageNeuronProposals(): void;
  getIncludeAllManageNeuronProposals(): boolean;
  setIncludeAllManageNeuronProposals(value: boolean): void;

  hasOmitLargeFields(): boolean;
  clearOmitLargeFields(): void;
  getOmitLargeFields(): boolean;
  setOmitLargeFields(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProposalInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListProposalInfo): ListProposalInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProposalInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProposalInfo;
  static deserializeBinaryFromReader(message: ListProposalInfo, reader: jspb.BinaryReader): ListProposalInfo;
}

export namespace ListProposalInfo {
  export type AsObject = {
    limit: number,
    beforeProposal?: nns_common_pb.ProposalId.AsObject,
    excludeTopicList: Array<TopicMap[keyof TopicMap]>,
    includeRewardStatusList: Array<ProposalRewardStatusMap[keyof ProposalRewardStatusMap]>,
    includeStatusList: Array<ProposalStatusMap[keyof ProposalStatusMap]>,
    includeAllManageNeuronProposals: boolean,
    omitLargeFields: boolean,
  }
}

export class ListProposalInfoResponse extends jspb.Message {
  clearProposalInfoList(): void;
  getProposalInfoList(): Array<ProposalInfo>;
  setProposalInfoList(value: Array<ProposalInfo>): void;
  addProposalInfo(value?: ProposalInfo, index?: number): ProposalInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProposalInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProposalInfoResponse): ListProposalInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProposalInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProposalInfoResponse;
  static deserializeBinaryFromReader(message: ListProposalInfoResponse, reader: jspb.BinaryReader): ListProposalInfoResponse;
}

export namespace ListProposalInfoResponse {
  export type AsObject = {
    proposalInfoList: Array<ProposalInfo.AsObject>,
  }
}

export class ListNeurons extends jspb.Message {
  clearNeuronIdsList(): void;
  getNeuronIdsList(): Array<number>;
  setNeuronIdsList(value: Array<number>): void;
  addNeuronIds(value: number, index?: number): number;

  getIncludeNeuronsReadableByCaller(): boolean;
  setIncludeNeuronsReadableByCaller(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNeurons.AsObject;
  static toObject(includeInstance: boolean, msg: ListNeurons): ListNeurons.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNeurons, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNeurons;
  static deserializeBinaryFromReader(message: ListNeurons, reader: jspb.BinaryReader): ListNeurons;
}

export namespace ListNeurons {
  export type AsObject = {
    neuronIdsList: Array<number>,
    includeNeuronsReadableByCaller: boolean,
  }
}

export class ListNeuronsResponse extends jspb.Message {
  getNeuronInfosMap(): jspb.Map<number, NeuronInfo>;
  clearNeuronInfosMap(): void;
  clearFullNeuronsList(): void;
  getFullNeuronsList(): Array<Neuron>;
  setFullNeuronsList(value: Array<Neuron>): void;
  addFullNeurons(value?: Neuron, index?: number): Neuron;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNeuronsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNeuronsResponse): ListNeuronsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNeuronsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNeuronsResponse;
  static deserializeBinaryFromReader(message: ListNeuronsResponse, reader: jspb.BinaryReader): ListNeuronsResponse;
}

export namespace ListNeuronsResponse {
  export type AsObject = {
    neuronInfosMap: Array<[number, NeuronInfo.AsObject]>,
    fullNeuronsList: Array<Neuron.AsObject>,
  }
}

export class ListKnownNeuronsResponse extends jspb.Message {
  clearKnownNeuronsList(): void;
  getKnownNeuronsList(): Array<KnownNeuron>;
  setKnownNeuronsList(value: Array<KnownNeuron>): void;
  addKnownNeurons(value?: KnownNeuron, index?: number): KnownNeuron;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKnownNeuronsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKnownNeuronsResponse): ListKnownNeuronsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListKnownNeuronsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKnownNeuronsResponse;
  static deserializeBinaryFromReader(message: ListKnownNeuronsResponse, reader: jspb.BinaryReader): ListKnownNeuronsResponse;
}

export namespace ListKnownNeuronsResponse {
  export type AsObject = {
    knownNeuronsList: Array<KnownNeuron.AsObject>,
  }
}

export class ListNodeProvidersResponse extends jspb.Message {
  clearNodeProvidersList(): void;
  getNodeProvidersList(): Array<NodeProvider>;
  setNodeProvidersList(value: Array<NodeProvider>): void;
  addNodeProviders(value?: NodeProvider, index?: number): NodeProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNodeProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNodeProvidersResponse): ListNodeProvidersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNodeProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNodeProvidersResponse;
  static deserializeBinaryFromReader(message: ListNodeProvidersResponse, reader: jspb.BinaryReader): ListNodeProvidersResponse;
}

export namespace ListNodeProvidersResponse {
  export type AsObject = {
    nodeProvidersList: Array<NodeProvider.AsObject>,
  }
}

export class ClaimOrRefreshNeuronFromAccount extends jspb.Message {
  hasController(): boolean;
  clearController(): void;
  getController(): base_types_pb.PrincipalId | undefined;
  setController(value?: base_types_pb.PrincipalId): void;

  getMemo(): number;
  setMemo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimOrRefreshNeuronFromAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimOrRefreshNeuronFromAccount): ClaimOrRefreshNeuronFromAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimOrRefreshNeuronFromAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimOrRefreshNeuronFromAccount;
  static deserializeBinaryFromReader(message: ClaimOrRefreshNeuronFromAccount, reader: jspb.BinaryReader): ClaimOrRefreshNeuronFromAccount;
}

export namespace ClaimOrRefreshNeuronFromAccount {
  export type AsObject = {
    controller?: base_types_pb.PrincipalId.AsObject,
    memo: number,
  }
}

export class ClaimOrRefreshNeuronFromAccountResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): GovernanceError | undefined;
  setError(value?: GovernanceError): void;

  hasNeuronId(): boolean;
  clearNeuronId(): void;
  getNeuronId(): nns_common_pb.NeuronId | undefined;
  setNeuronId(value?: nns_common_pb.NeuronId): void;

  getResultCase(): ClaimOrRefreshNeuronFromAccountResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimOrRefreshNeuronFromAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimOrRefreshNeuronFromAccountResponse): ClaimOrRefreshNeuronFromAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimOrRefreshNeuronFromAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimOrRefreshNeuronFromAccountResponse;
  static deserializeBinaryFromReader(message: ClaimOrRefreshNeuronFromAccountResponse, reader: jspb.BinaryReader): ClaimOrRefreshNeuronFromAccountResponse;
}

export namespace ClaimOrRefreshNeuronFromAccountResponse {
  export type AsObject = {
    error?: GovernanceError.AsObject,
    neuronId?: nns_common_pb.NeuronId.AsObject,
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    ERROR = 1,
    NEURON_ID = 2,
  }
}

export class MostRecentMonthlyNodeProviderRewards extends jspb.Message {
  getTimestamp(): number;
  setTimestamp(value: number): void;

  clearRewardsList(): void;
  getRewardsList(): Array<RewardNodeProvider>;
  setRewardsList(value: Array<RewardNodeProvider>): void;
  addRewards(value?: RewardNodeProvider, index?: number): RewardNodeProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MostRecentMonthlyNodeProviderRewards.AsObject;
  static toObject(includeInstance: boolean, msg: MostRecentMonthlyNodeProviderRewards): MostRecentMonthlyNodeProviderRewards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MostRecentMonthlyNodeProviderRewards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MostRecentMonthlyNodeProviderRewards;
  static deserializeBinaryFromReader(message: MostRecentMonthlyNodeProviderRewards, reader: jspb.BinaryReader): MostRecentMonthlyNodeProviderRewards;
}

export namespace MostRecentMonthlyNodeProviderRewards {
  export type AsObject = {
    timestamp: number,
    rewardsList: Array<RewardNodeProvider.AsObject>,
  }
}

export class SettleCommunityFundParticipation extends jspb.Message {
  hasOpenSnsTokenSwapProposalId(): boolean;
  clearOpenSnsTokenSwapProposalId(): void;
  getOpenSnsTokenSwapProposalId(): number;
  setOpenSnsTokenSwapProposalId(value: number): void;

  hasCommitted(): boolean;
  clearCommitted(): void;
  getCommitted(): SettleCommunityFundParticipation.Committed | undefined;
  setCommitted(value?: SettleCommunityFundParticipation.Committed): void;

  hasAborted(): boolean;
  clearAborted(): void;
  getAborted(): SettleCommunityFundParticipation.Aborted | undefined;
  setAborted(value?: SettleCommunityFundParticipation.Aborted): void;

  getResultCase(): SettleCommunityFundParticipation.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleCommunityFundParticipation.AsObject;
  static toObject(includeInstance: boolean, msg: SettleCommunityFundParticipation): SettleCommunityFundParticipation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleCommunityFundParticipation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleCommunityFundParticipation;
  static deserializeBinaryFromReader(message: SettleCommunityFundParticipation, reader: jspb.BinaryReader): SettleCommunityFundParticipation;
}

export namespace SettleCommunityFundParticipation {
  export type AsObject = {
    openSnsTokenSwapProposalId: number,
    committed?: SettleCommunityFundParticipation.Committed.AsObject,
    aborted?: SettleCommunityFundParticipation.Aborted.AsObject,
  }

  export class Committed extends jspb.Message {
    hasSnsGovernanceCanisterId(): boolean;
    clearSnsGovernanceCanisterId(): void;
    getSnsGovernanceCanisterId(): base_types_pb.PrincipalId | undefined;
    setSnsGovernanceCanisterId(value?: base_types_pb.PrincipalId): void;

    hasTotalDirectContributionIcpE8s(): boolean;
    clearTotalDirectContributionIcpE8s(): void;
    getTotalDirectContributionIcpE8s(): number;
    setTotalDirectContributionIcpE8s(value: number): void;

    hasTotalNeuronsFundContributionIcpE8s(): boolean;
    clearTotalNeuronsFundContributionIcpE8s(): void;
    getTotalNeuronsFundContributionIcpE8s(): number;
    setTotalNeuronsFundContributionIcpE8s(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Committed.AsObject;
    static toObject(includeInstance: boolean, msg: Committed): Committed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Committed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Committed;
    static deserializeBinaryFromReader(message: Committed, reader: jspb.BinaryReader): Committed;
  }

  export namespace Committed {
    export type AsObject = {
      snsGovernanceCanisterId?: base_types_pb.PrincipalId.AsObject,
      totalDirectContributionIcpE8s: number,
      totalNeuronsFundContributionIcpE8s: number,
    }
  }

  export class Aborted extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Aborted.AsObject;
    static toObject(includeInstance: boolean, msg: Aborted): Aborted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Aborted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Aborted;
    static deserializeBinaryFromReader(message: Aborted, reader: jspb.BinaryReader): Aborted;
  }

  export namespace Aborted {
    export type AsObject = {
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    COMMITTED = 2,
    ABORTED = 3,
  }
}

export class SettleNeuronsFundParticipationRequest extends jspb.Message {
  hasNnsProposalId(): boolean;
  clearNnsProposalId(): void;
  getNnsProposalId(): number;
  setNnsProposalId(value: number): void;

  hasCommitted(): boolean;
  clearCommitted(): void;
  getCommitted(): SettleNeuronsFundParticipationRequest.Committed | undefined;
  setCommitted(value?: SettleNeuronsFundParticipationRequest.Committed): void;

  hasAborted(): boolean;
  clearAborted(): void;
  getAborted(): SettleNeuronsFundParticipationRequest.Aborted | undefined;
  setAborted(value?: SettleNeuronsFundParticipationRequest.Aborted): void;

  getResultCase(): SettleNeuronsFundParticipationRequest.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleNeuronsFundParticipationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SettleNeuronsFundParticipationRequest): SettleNeuronsFundParticipationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleNeuronsFundParticipationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleNeuronsFundParticipationRequest;
  static deserializeBinaryFromReader(message: SettleNeuronsFundParticipationRequest, reader: jspb.BinaryReader): SettleNeuronsFundParticipationRequest;
}

export namespace SettleNeuronsFundParticipationRequest {
  export type AsObject = {
    nnsProposalId: number,
    committed?: SettleNeuronsFundParticipationRequest.Committed.AsObject,
    aborted?: SettleNeuronsFundParticipationRequest.Aborted.AsObject,
  }

  export class Committed extends jspb.Message {
    hasSnsGovernanceCanisterId(): boolean;
    clearSnsGovernanceCanisterId(): void;
    getSnsGovernanceCanisterId(): base_types_pb.PrincipalId | undefined;
    setSnsGovernanceCanisterId(value?: base_types_pb.PrincipalId): void;

    hasTotalDirectParticipationIcpE8s(): boolean;
    clearTotalDirectParticipationIcpE8s(): void;
    getTotalDirectParticipationIcpE8s(): number;
    setTotalDirectParticipationIcpE8s(value: number): void;

    hasTotalNeuronsFundParticipationIcpE8s(): boolean;
    clearTotalNeuronsFundParticipationIcpE8s(): void;
    getTotalNeuronsFundParticipationIcpE8s(): number;
    setTotalNeuronsFundParticipationIcpE8s(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Committed.AsObject;
    static toObject(includeInstance: boolean, msg: Committed): Committed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Committed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Committed;
    static deserializeBinaryFromReader(message: Committed, reader: jspb.BinaryReader): Committed;
  }

  export namespace Committed {
    export type AsObject = {
      snsGovernanceCanisterId?: base_types_pb.PrincipalId.AsObject,
      totalDirectParticipationIcpE8s: number,
      totalNeuronsFundParticipationIcpE8s: number,
    }
  }

  export class Aborted extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Aborted.AsObject;
    static toObject(includeInstance: boolean, msg: Aborted): Aborted.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Aborted, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Aborted;
    static deserializeBinaryFromReader(message: Aborted, reader: jspb.BinaryReader): Aborted;
  }

  export namespace Aborted {
    export type AsObject = {
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    COMMITTED = 2,
    ABORTED = 3,
  }
}

export class SettleNeuronsFundParticipationResponse extends jspb.Message {
  hasErr(): boolean;
  clearErr(): void;
  getErr(): GovernanceError | undefined;
  setErr(value?: GovernanceError): void;

  hasOk(): boolean;
  clearOk(): void;
  getOk(): SettleNeuronsFundParticipationResponse.Ok | undefined;
  setOk(value?: SettleNeuronsFundParticipationResponse.Ok): void;

  getResultCase(): SettleNeuronsFundParticipationResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleNeuronsFundParticipationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SettleNeuronsFundParticipationResponse): SettleNeuronsFundParticipationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleNeuronsFundParticipationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleNeuronsFundParticipationResponse;
  static deserializeBinaryFromReader(message: SettleNeuronsFundParticipationResponse, reader: jspb.BinaryReader): SettleNeuronsFundParticipationResponse;
}

export namespace SettleNeuronsFundParticipationResponse {
  export type AsObject = {
    err?: GovernanceError.AsObject,
    ok?: SettleNeuronsFundParticipationResponse.Ok.AsObject,
  }

  export class NeuronsFundNeuron extends jspb.Message {
    hasNnsNeuronId(): boolean;
    clearNnsNeuronId(): void;
    getNnsNeuronId(): number;
    setNnsNeuronId(value: number): void;

    hasAmountIcpE8s(): boolean;
    clearAmountIcpE8s(): void;
    getAmountIcpE8s(): number;
    setAmountIcpE8s(value: number): void;

    hasHotkeyPrincipal(): boolean;
    clearHotkeyPrincipal(): void;
    getHotkeyPrincipal(): string;
    setHotkeyPrincipal(value: string): void;

    hasIsCapped(): boolean;
    clearIsCapped(): void;
    getIsCapped(): boolean;
    setIsCapped(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NeuronsFundNeuron.AsObject;
    static toObject(includeInstance: boolean, msg: NeuronsFundNeuron): NeuronsFundNeuron.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NeuronsFundNeuron, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NeuronsFundNeuron;
    static deserializeBinaryFromReader(message: NeuronsFundNeuron, reader: jspb.BinaryReader): NeuronsFundNeuron;
  }

  export namespace NeuronsFundNeuron {
    export type AsObject = {
      nnsNeuronId: number,
      amountIcpE8s: number,
      hotkeyPrincipal: string,
      isCapped: boolean,
    }
  }

  export class Ok extends jspb.Message {
    clearNeuronsFundNeuronPortionsList(): void;
    getNeuronsFundNeuronPortionsList(): Array<SettleNeuronsFundParticipationResponse.NeuronsFundNeuron>;
    setNeuronsFundNeuronPortionsList(value: Array<SettleNeuronsFundParticipationResponse.NeuronsFundNeuron>): void;
    addNeuronsFundNeuronPortions(value?: SettleNeuronsFundParticipationResponse.NeuronsFundNeuron, index?: number): SettleNeuronsFundParticipationResponse.NeuronsFundNeuron;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ok.AsObject;
    static toObject(includeInstance: boolean, msg: Ok): Ok.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ok, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ok;
    static deserializeBinaryFromReader(message: Ok, reader: jspb.BinaryReader): Ok;
  }

  export namespace Ok {
    export type AsObject = {
      neuronsFundNeuronPortionsList: Array<SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.AsObject>,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    ERR = 1,
    OK = 2,
  }
}

export class AuditEvent extends jspb.Message {
  getTimestampSeconds(): number;
  setTimestampSeconds(value: number): void;

  hasResetAging(): boolean;
  clearResetAging(): void;
  getResetAging(): AuditEvent.ResetAging | undefined;
  setResetAging(value?: AuditEvent.ResetAging): void;

  hasRestoreAging(): boolean;
  clearRestoreAging(): void;
  getRestoreAging(): AuditEvent.RestoreAging | undefined;
  setRestoreAging(value?: AuditEvent.RestoreAging): void;

  getPayloadCase(): AuditEvent.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEvent): AuditEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEvent;
  static deserializeBinaryFromReader(message: AuditEvent, reader: jspb.BinaryReader): AuditEvent;
}

export namespace AuditEvent {
  export type AsObject = {
    timestampSeconds: number,
    resetAging?: AuditEvent.ResetAging.AsObject,
    restoreAging?: AuditEvent.RestoreAging.AsObject,
  }

  export class ResetAging extends jspb.Message {
    getNeuronId(): number;
    setNeuronId(value: number): void;

    getPreviousAgingSinceTimestampSeconds(): number;
    setPreviousAgingSinceTimestampSeconds(value: number): void;

    getNewAgingSinceTimestampSeconds(): number;
    setNewAgingSinceTimestampSeconds(value: number): void;

    hasWhenDissolvedTimestampSeconds(): boolean;
    clearWhenDissolvedTimestampSeconds(): void;
    getWhenDissolvedTimestampSeconds(): number;
    setWhenDissolvedTimestampSeconds(value: number): void;

    hasDissolveDelaySeconds(): boolean;
    clearDissolveDelaySeconds(): void;
    getDissolveDelaySeconds(): number;
    setDissolveDelaySeconds(value: number): void;

    getNeuronStakeE8s(): number;
    setNeuronStakeE8s(value: number): void;

    getNeuronDissolveStateCase(): ResetAging.NeuronDissolveStateCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetAging.AsObject;
    static toObject(includeInstance: boolean, msg: ResetAging): ResetAging.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetAging, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetAging;
    static deserializeBinaryFromReader(message: ResetAging, reader: jspb.BinaryReader): ResetAging;
  }

  export namespace ResetAging {
    export type AsObject = {
      neuronId: number,
      previousAgingSinceTimestampSeconds: number,
      newAgingSinceTimestampSeconds: number,
      whenDissolvedTimestampSeconds: number,
      dissolveDelaySeconds: number,
      neuronStakeE8s: number,
    }

    export enum NeuronDissolveStateCase {
      NEURON_DISSOLVE_STATE_NOT_SET = 0,
      WHEN_DISSOLVED_TIMESTAMP_SECONDS = 4,
      DISSOLVE_DELAY_SECONDS = 5,
    }
  }

  export class RestoreAging extends jspb.Message {
    hasNeuronId(): boolean;
    clearNeuronId(): void;
    getNeuronId(): number;
    setNeuronId(value: number): void;

    hasPreviousAgingSinceTimestampSeconds(): boolean;
    clearPreviousAgingSinceTimestampSeconds(): void;
    getPreviousAgingSinceTimestampSeconds(): number;
    setPreviousAgingSinceTimestampSeconds(value: number): void;

    hasNewAgingSinceTimestampSeconds(): boolean;
    clearNewAgingSinceTimestampSeconds(): void;
    getNewAgingSinceTimestampSeconds(): number;
    setNewAgingSinceTimestampSeconds(value: number): void;

    hasWhenDissolvedTimestampSeconds(): boolean;
    clearWhenDissolvedTimestampSeconds(): void;
    getWhenDissolvedTimestampSeconds(): number;
    setWhenDissolvedTimestampSeconds(value: number): void;

    hasDissolveDelaySeconds(): boolean;
    clearDissolveDelaySeconds(): void;
    getDissolveDelaySeconds(): number;
    setDissolveDelaySeconds(value: number): void;

    hasNeuronStakeE8s(): boolean;
    clearNeuronStakeE8s(): void;
    getNeuronStakeE8s(): number;
    setNeuronStakeE8s(value: number): void;

    getNeuronDissolveStateCase(): RestoreAging.NeuronDissolveStateCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreAging.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreAging): RestoreAging.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreAging, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreAging;
    static deserializeBinaryFromReader(message: RestoreAging, reader: jspb.BinaryReader): RestoreAging;
  }

  export namespace RestoreAging {
    export type AsObject = {
      neuronId: number,
      previousAgingSinceTimestampSeconds: number,
      newAgingSinceTimestampSeconds: number,
      whenDissolvedTimestampSeconds: number,
      dissolveDelaySeconds: number,
      neuronStakeE8s: number,
    }

    export enum NeuronDissolveStateCase {
      NEURON_DISSOLVE_STATE_NOT_SET = 0,
      WHEN_DISSOLVED_TIMESTAMP_SECONDS = 4,
      DISSOLVE_DELAY_SECONDS = 5,
    }
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    RESET_AGING = 2,
    RESTORE_AGING = 3,
  }
}

export class RestoreAgingSummary extends jspb.Message {
  hasTimestampSeconds(): boolean;
  clearTimestampSeconds(): void;
  getTimestampSeconds(): number;
  setTimestampSeconds(value: number): void;

  clearGroupsList(): void;
  getGroupsList(): Array<RestoreAgingSummary.RestoreAgingNeuronGroup>;
  setGroupsList(value: Array<RestoreAgingSummary.RestoreAgingNeuronGroup>): void;
  addGroups(value?: RestoreAgingSummary.RestoreAgingNeuronGroup, index?: number): RestoreAgingSummary.RestoreAgingNeuronGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAgingSummary.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAgingSummary): RestoreAgingSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreAgingSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAgingSummary;
  static deserializeBinaryFromReader(message: RestoreAgingSummary, reader: jspb.BinaryReader): RestoreAgingSummary;
}

export namespace RestoreAgingSummary {
  export type AsObject = {
    timestampSeconds: number,
    groupsList: Array<RestoreAgingSummary.RestoreAgingNeuronGroup.AsObject>,
  }

  export class RestoreAgingNeuronGroup extends jspb.Message {
    getGroupType(): RestoreAgingSummary.NeuronGroupTypeMap[keyof RestoreAgingSummary.NeuronGroupTypeMap];
    setGroupType(value: RestoreAgingSummary.NeuronGroupTypeMap[keyof RestoreAgingSummary.NeuronGroupTypeMap]): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): number;
    setCount(value: number): void;

    hasPreviousTotalStakeE8s(): boolean;
    clearPreviousTotalStakeE8s(): void;
    getPreviousTotalStakeE8s(): number;
    setPreviousTotalStakeE8s(value: number): void;

    hasCurrentTotalStakeE8s(): boolean;
    clearCurrentTotalStakeE8s(): void;
    getCurrentTotalStakeE8s(): number;
    setCurrentTotalStakeE8s(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RestoreAgingNeuronGroup.AsObject;
    static toObject(includeInstance: boolean, msg: RestoreAgingNeuronGroup): RestoreAgingNeuronGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RestoreAgingNeuronGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RestoreAgingNeuronGroup;
    static deserializeBinaryFromReader(message: RestoreAgingNeuronGroup, reader: jspb.BinaryReader): RestoreAgingNeuronGroup;
  }

  export namespace RestoreAgingNeuronGroup {
    export type AsObject = {
      groupType: RestoreAgingSummary.NeuronGroupTypeMap[keyof RestoreAgingSummary.NeuronGroupTypeMap],
      count: number,
      previousTotalStakeE8s: number,
      currentTotalStakeE8s: number,
    }
  }

  export interface NeuronGroupTypeMap {
    NEURON_GROUP_TYPE_UNSPECIFIED: 0;
    NEURON_GROUP_TYPE_NOT_PRE_AGING: 1;
    NEURON_GROUP_TYPE_DISSOLVING_OR_DISSOLVED: 2;
    NEURON_GROUP_TYPE_STAKE_CHANGED: 3;
    NEURON_GROUP_TYPE_STAKE_SAME_AGING_CHANGED: 4;
    NEURON_GROUP_TYPE_STAKE_SAME_AGING_SAME: 5;
  }

  export const NeuronGroupType: NeuronGroupTypeMap;
}

export interface TopicMap {
  TOPIC_UNSPECIFIED: 0;
  TOPIC_NEURON_MANAGEMENT: 1;
  TOPIC_EXCHANGE_RATE: 2;
  TOPIC_NETWORK_ECONOMICS: 3;
  TOPIC_GOVERNANCE: 4;
  TOPIC_NODE_ADMIN: 5;
  TOPIC_PARTICIPANT_MANAGEMENT: 6;
  TOPIC_SUBNET_MANAGEMENT: 7;
  TOPIC_NETWORK_CANISTER_MANAGEMENT: 8;
  TOPIC_KYC: 9;
  TOPIC_NODE_PROVIDER_REWARDS: 10;
  TOPIC_IC_OS_VERSION_DEPLOYMENT: 12;
  TOPIC_IC_OS_VERSION_ELECTION: 13;
  TOPIC_SNS_AND_COMMUNITY_FUND: 14;
  TOPIC_API_BOUNDARY_NODE_MANAGEMENT: 15;
}

export const Topic: TopicMap;

export interface NeuronStateMap {
  NEURON_STATE_UNSPECIFIED: 0;
  NEURON_STATE_NOT_DISSOLVING: 1;
  NEURON_STATE_DISSOLVING: 2;
  NEURON_STATE_DISSOLVED: 3;
  NEURON_STATE_SPAWNING: 4;
}

export const NeuronState: NeuronStateMap;

export interface NeuronTypeMap {
  NEURON_TYPE_UNSPECIFIED: 0;
  NEURON_TYPE_SEED: 1;
  NEURON_TYPE_ECT: 2;
}

export const NeuronType: NeuronTypeMap;

export interface VoteMap {
  VOTE_UNSPECIFIED: 0;
  VOTE_YES: 1;
  VOTE_NO: 2;
}

export const Vote: VoteMap;

export interface NnsFunctionMap {
  NNS_FUNCTION_UNSPECIFIED: 0;
  NNS_FUNCTION_CREATE_SUBNET: 1;
  NNS_FUNCTION_ADD_NODE_TO_SUBNET: 2;
  NNS_FUNCTION_NNS_CANISTER_INSTALL: 3;
  NNS_FUNCTION_NNS_CANISTER_UPGRADE: 4;
  NNS_FUNCTION_BLESS_REPLICA_VERSION: 5;
  NNS_FUNCTION_RECOVER_SUBNET: 6;
  NNS_FUNCTION_UPDATE_CONFIG_OF_SUBNET: 7;
  NNS_FUNCTION_ASSIGN_NOID: 8;
  NNS_FUNCTION_NNS_ROOT_UPGRADE: 9;
  NNS_FUNCTION_ICP_XDR_CONVERSION_RATE: 10;
  NNS_FUNCTION_DEPLOY_GUESTOS_TO_ALL_SUBNET_NODES: 11;
  NNS_FUNCTION_CLEAR_PROVISIONAL_WHITELIST: 12;
  NNS_FUNCTION_REMOVE_NODES_FROM_SUBNET: 13;
  NNS_FUNCTION_SET_AUTHORIZED_SUBNETWORKS: 14;
  NNS_FUNCTION_SET_FIREWALL_CONFIG: 15;
  NNS_FUNCTION_UPDATE_NODE_OPERATOR_CONFIG: 16;
  NNS_FUNCTION_STOP_OR_START_NNS_CANISTER: 17;
  NNS_FUNCTION_REMOVE_NODES: 18;
  NNS_FUNCTION_UNINSTALL_CODE: 19;
  NNS_FUNCTION_UPDATE_NODE_REWARDS_TABLE: 20;
  NNS_FUNCTION_ADD_OR_REMOVE_DATA_CENTERS: 21;
  NNS_FUNCTION_UPDATE_UNASSIGNED_NODES_CONFIG: 22;
  NNS_FUNCTION_REMOVE_NODE_OPERATORS: 23;
  NNS_FUNCTION_REROUTE_CANISTER_RANGES: 24;
  NNS_FUNCTION_ADD_FIREWALL_RULES: 25;
  NNS_FUNCTION_REMOVE_FIREWALL_RULES: 26;
  NNS_FUNCTION_UPDATE_FIREWALL_RULES: 27;
  NNS_FUNCTION_PREPARE_CANISTER_MIGRATION: 28;
  NNS_FUNCTION_COMPLETE_CANISTER_MIGRATION: 29;
  NNS_FUNCTION_ADD_SNS_WASM: 30;
  NNS_FUNCTION_CHANGE_SUBNET_MEMBERSHIP: 31;
  NNS_FUNCTION_UPDATE_SUBNET_TYPE: 32;
  NNS_FUNCTION_CHANGE_SUBNET_TYPE_ASSIGNMENT: 33;
  NNS_FUNCTION_UPDATE_SNS_WASM_SNS_SUBNET_IDS: 34;
  NNS_FUNCTION_UPDATE_ALLOWED_PRINCIPALS: 35;
  NNS_FUNCTION_RETIRE_REPLICA_VERSION: 36;
  NNS_FUNCTION_INSERT_SNS_WASM_UPGRADE_PATH_ENTRIES: 37;
  NNS_FUNCTION_REVISE_ELECTED_GUESTOS_VERSIONS: 38;
  NNS_FUNCTION_BITCOIN_SET_CONFIG: 39;
  NNS_FUNCTION_UPDATE_ELECTED_HOSTOS_VERSIONS: 40;
  NNS_FUNCTION_UPDATE_NODES_HOSTOS_VERSION: 41;
  NNS_FUNCTION_HARD_RESET_NNS_ROOT_TO_VERSION: 42;
  NNS_FUNCTION_ADD_API_BOUNDARY_NODES: 43;
  NNS_FUNCTION_REMOVE_API_BOUNDARY_NODES: 44;
  NNS_FUNCTION_UPDATE_API_BOUNDARY_NODES_VERSION: 46;
  NNS_FUNCTION_DEPLOY_GUESTOS_TO_SOME_API_BOUNDARY_NODES: 47;
  NNS_FUNCTION_DEPLOY_GUESTOS_TO_ALL_UNASSIGNED_NODES: 48;
  NNS_FUNCTION_UPDATE_SSH_READONLY_ACCESS_FOR_ALL_UNASSIGNED_NODES: 49;
  NNS_FUNCTION_REVISE_ELECTED_HOSTOS_VERSIONS: 50;
  NNS_FUNCTION_DEPLOY_HOSTOS_TO_SOME_NODES: 51;
}

export const NnsFunction: NnsFunctionMap;

export interface ProposalStatusMap {
  PROPOSAL_STATUS_UNSPECIFIED: 0;
  PROPOSAL_STATUS_OPEN: 1;
  PROPOSAL_STATUS_REJECTED: 2;
  PROPOSAL_STATUS_ADOPTED: 3;
  PROPOSAL_STATUS_EXECUTED: 4;
  PROPOSAL_STATUS_FAILED: 5;
}

export const ProposalStatus: ProposalStatusMap;

export interface ProposalRewardStatusMap {
  PROPOSAL_REWARD_STATUS_UNSPECIFIED: 0;
  PROPOSAL_REWARD_STATUS_ACCEPT_VOTES: 1;
  PROPOSAL_REWARD_STATUS_READY_TO_SETTLE: 2;
  PROPOSAL_REWARD_STATUS_SETTLED: 3;
  PROPOSAL_REWARD_STATUS_INELIGIBLE: 4;
}

export const ProposalRewardStatus: ProposalRewardStatusMap;

