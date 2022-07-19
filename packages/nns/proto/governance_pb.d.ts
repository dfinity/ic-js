// package: ic_nns_governance.pb.v1
// file: governance.proto

import * as jspb from "google-protobuf";
import * as types_pb from "./types_pb";
import * as base_types_pb from "./base_types_pb";
import * as ledger_pb from "./ledger_pb";
import * as sns_swap_pb from "./sns_swap_pb";

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
  getProposalId(): types_pb.ProposalId | undefined;
  setProposalId(value?: types_pb.ProposalId): void;

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
    proposalId?: types_pb.ProposalId.AsObject,
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
  getId(): types_pb.NeuronId | undefined;
  setId(value?: types_pb.NeuronId): void;

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
    id?: types_pb.NeuronId.AsObject,
    account: Uint8Array | string,
    controller?: base_types_pb.PrincipalId.AsObject,
    hotKeysList: Array<base_types_pb.PrincipalId.AsObject>,
    cachedNeuronStakeE8s: number,
    neuronFeesE8s: number,
    createdTimestampSeconds: number,
    agingSinceTimestampSeconds: number,
    whenDissolvedTimestampSeconds: number,
    dissolveDelaySeconds: number,
    followeesMap: Array<[number, Neuron.Followees.AsObject]>,
    recentBallotsList: Array<BallotInfo.AsObject>,
    kycVerified: boolean,
    transfer?: NeuronStakeTransfer.AsObject,
    maturityE8sEquivalent: number,
    notForProfit: boolean,
    joinedCommunityFundTimestampSeconds: number,
    knownNeuronData?: KnownNeuronData.AsObject,
  }

  export class Followees extends jspb.Message {
    clearFolloweesList(): void;
    getFolloweesList(): Array<types_pb.NeuronId>;
    setFolloweesList(value: Array<types_pb.NeuronId>): void;
    addFollowees(value?: types_pb.NeuronId, index?: number): types_pb.NeuronId;

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
      followeesList: Array<types_pb.NeuronId.AsObject>,
    }
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
  getRequest(): sns_swap_pb.SetOpenTimeWindowRequest | undefined;
  setRequest(value?: sns_swap_pb.SetOpenTimeWindowRequest): void;

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
    request?: sns_swap_pb.SetOpenTimeWindowRequest.AsObject,
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
  getId(): types_pb.NeuronId | undefined;
  setId(value?: types_pb.NeuronId): void;

  hasSubaccount(): boolean;
  clearSubaccount(): void;
  getSubaccount(): Uint8Array | string;
  getSubaccount_asU8(): Uint8Array;
  getSubaccount_asB64(): string;
  setSubaccount(value: Uint8Array | string): void;

  hasNeuronId(): boolean;
  clearNeuronId(): void;
  getNeuronId(): types_pb.NeuronId | undefined;
  setNeuronId(value?: types_pb.NeuronId): void;

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
    id?: types_pb.NeuronId.AsObject,
    subaccount: Uint8Array | string,
    neuronId?: types_pb.NeuronId.AsObject,
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
    getSourceNeuronId(): types_pb.NeuronId | undefined;
    setSourceNeuronId(value?: types_pb.NeuronId): void;

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
      sourceNeuronId?: types_pb.NeuronId.AsObject,
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
    getFolloweesList(): Array<types_pb.NeuronId>;
    setFolloweesList(value: Array<types_pb.NeuronId>): void;
    addFollowees(value?: types_pb.NeuronId, index?: number): types_pb.NeuronId;

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
      followeesList: Array<types_pb.NeuronId.AsObject>,
    }
  }

  export class RegisterVote extends jspb.Message {
    hasProposal(): boolean;
    clearProposal(): void;
    getProposal(): types_pb.ProposalId | undefined;
    setProposal(value?: types_pb.ProposalId): void;

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
      proposal?: types_pb.ProposalId.AsObject,
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
    getCreatedNeuronId(): types_pb.NeuronId | undefined;
    setCreatedNeuronId(value?: types_pb.NeuronId): void;

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
      createdNeuronId?: types_pb.NeuronId.AsObject,
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
    getProposalId(): types_pb.ProposalId | undefined;
    setProposalId(value?: types_pb.ProposalId): void;

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
      proposalId?: types_pb.ProposalId.AsObject,
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
    getCreatedNeuronId(): types_pb.NeuronId | undefined;
    setCreatedNeuronId(value?: types_pb.NeuronId): void;

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
      createdNeuronId?: types_pb.NeuronId.AsObject,
    }
  }

  export class MergeResponse extends jspb.Message {
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
    }
  }

  export class DisburseToNeuronResponse extends jspb.Message {
    hasCreatedNeuronId(): boolean;
    clearCreatedNeuronId(): void;
    getCreatedNeuronId(): types_pb.NeuronId | undefined;
    setCreatedNeuronId(value?: types_pb.NeuronId): void;

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
      createdNeuronId?: types_pb.NeuronId.AsObject,
    }
  }

  export class ClaimOrRefreshResponse extends jspb.Message {
    hasRefreshedNeuronId(): boolean;
    clearRefreshedNeuronId(): void;
    getRefreshedNeuronId(): types_pb.NeuronId | undefined;
    setRefreshedNeuronId(value?: types_pb.NeuronId): void;

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
      refreshedNeuronId?: types_pb.NeuronId.AsObject,
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
  getId(): types_pb.ProposalId | undefined;
  setId(value?: types_pb.ProposalId): void;

  hasProposer(): boolean;
  clearProposer(): void;
  getProposer(): types_pb.NeuronId | undefined;
  setProposer(value?: types_pb.NeuronId): void;

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
    id?: types_pb.ProposalId.AsObject,
    proposer?: types_pb.NeuronId.AsObject,
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
  }
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
  getId(): types_pb.ProposalId | undefined;
  setId(value?: types_pb.ProposalId): void;

  hasProposer(): boolean;
  clearProposer(): void;
  getProposer(): types_pb.NeuronId | undefined;
  setProposer(value?: types_pb.NeuronId): void;

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
    id?: types_pb.ProposalId.AsObject,
    proposer?: types_pb.NeuronId.AsObject,
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
  }
}

export class RewardEvent extends jspb.Message {
  getDayAfterGenesis(): number;
  setDayAfterGenesis(value: number): void;

  getActualTimestampSeconds(): number;
  setActualTimestampSeconds(value: number): void;

  clearSettledProposalsList(): void;
  getSettledProposalsList(): Array<types_pb.ProposalId>;
  setSettledProposalsList(value: Array<types_pb.ProposalId>): void;
  addSettledProposals(value?: types_pb.ProposalId, index?: number): types_pb.ProposalId;

  getDistributedE8sEquivalent(): number;
  setDistributedE8sEquivalent(value: number): void;

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
    settledProposalsList: Array<types_pb.ProposalId.AsObject>,
    distributedE8sEquivalent: number,
  }
}

export class KnownNeuron extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): types_pb.NeuronId | undefined;
  setId(value?: types_pb.NeuronId): void;

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
    id?: types_pb.NeuronId.AsObject,
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

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): Governance.GovernanceCachedMetrics | undefined;
  setMetrics(value?: Governance.GovernanceCachedMetrics): void;

  hasMostRecentMonthlyNodeProviderRewards(): boolean;
  clearMostRecentMonthlyNodeProviderRewards(): void;
  getMostRecentMonthlyNodeProviderRewards(): MostRecentMonthlyNodeProviderRewards | undefined;
  setMostRecentMonthlyNodeProviderRewards(value?: MostRecentMonthlyNodeProviderRewards): void;

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
    metrics?: Governance.GovernanceCachedMetrics.AsObject,
    mostRecentMonthlyNodeProviderRewards?: MostRecentMonthlyNodeProviderRewards.AsObject,
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

    hasSpawn(): boolean;
    clearSpawn(): void;
    getSpawn(): ManageNeuron.Spawn | undefined;
    setSpawn(value?: ManageNeuron.Spawn): void;

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
      spawn?: ManageNeuron.Spawn.AsObject,
      disburseToNeuron?: ManageNeuron.DisburseToNeuron.AsObject,
      mergeMaturity?: ManageNeuron.MergeMaturity.AsObject,
      claimOrRefreshNeuron?: ManageNeuron.ClaimOrRefresh.AsObject,
      configure?: ManageNeuron.Configure.AsObject,
      merge?: ManageNeuron.Merge.AsObject,
    }

    export enum CommandCase {
      COMMAND_NOT_SET = 0,
      DISBURSE = 2,
      SPLIT = 3,
      SPAWN = 4,
      DISBURSE_TO_NEURON = 5,
      MERGE_MATURITY = 7,
      CLAIM_OR_REFRESH_NEURON = 8,
      CONFIGURE = 9,
      MERGE = 10,
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
    }
  }
}

export class ListProposalInfo extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  hasBeforeProposal(): boolean;
  clearBeforeProposal(): void;
  getBeforeProposal(): types_pb.ProposalId | undefined;
  setBeforeProposal(value?: types_pb.ProposalId): void;

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
    beforeProposal?: types_pb.ProposalId.AsObject,
    excludeTopicList: Array<TopicMap[keyof TopicMap]>,
    includeRewardStatusList: Array<ProposalRewardStatusMap[keyof ProposalRewardStatusMap]>,
    includeStatusList: Array<ProposalStatusMap[keyof ProposalStatusMap]>,
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
  getNeuronId(): types_pb.NeuronId | undefined;
  setNeuronId(value?: types_pb.NeuronId): void;

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
    neuronId?: types_pb.NeuronId.AsObject,
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
  TOPIC_SNS_DECENTRALIZATION_SALE: 11;
}

export const Topic: TopicMap;

export interface NeuronStateMap {
  NEURON_STATE_UNSPECIFIED: 0;
  NEURON_STATE_NOT_DISSOLVING: 1;
  NEURON_STATE_DISSOLVING: 2;
  NEURON_STATE_DISSOLVED: 3;
}

export const NeuronState: NeuronStateMap;

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
  NNS_FUNCTION_UPDATE_SUBNET_REPLICA_VERSION: 11;
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

