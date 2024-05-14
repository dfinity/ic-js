// package: ic_sns_swap.pb.v1
// file: swap.proto

import * as jspb from "google-protobuf";
import * as base_types_pb from "./base_types_pb";
import * as nervous_system_pb from "./nervous_system_pb";

export class Swap extends jspb.Message {
  getLifecycle(): LifecycleMap[keyof LifecycleMap];
  setLifecycle(value: LifecycleMap[keyof LifecycleMap]): void;

  hasInit(): boolean;
  clearInit(): void;
  getInit(): Init | undefined;
  setInit(value?: Init): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  clearCfParticipantsList(): void;
  getCfParticipantsList(): Array<CfParticipant>;
  setCfParticipantsList(value: Array<CfParticipant>): void;
  addCfParticipants(value?: CfParticipant, index?: number): CfParticipant;

  getBuyersMap(): jspb.Map<string, BuyerState>;
  clearBuyersMap(): void;
  clearNeuronRecipesList(): void;
  getNeuronRecipesList(): Array<SnsNeuronRecipe>;
  setNeuronRecipesList(value: Array<SnsNeuronRecipe>): void;
  addNeuronRecipes(value?: SnsNeuronRecipe, index?: number): SnsNeuronRecipe;

  hasOpenSnsTokenSwapProposalId(): boolean;
  clearOpenSnsTokenSwapProposalId(): void;
  getOpenSnsTokenSwapProposalId(): number;
  setOpenSnsTokenSwapProposalId(value: number): void;

  hasFinalizeSwapInProgress(): boolean;
  clearFinalizeSwapInProgress(): void;
  getFinalizeSwapInProgress(): boolean;
  setFinalizeSwapInProgress(value: boolean): void;

  hasDecentralizationSaleOpenTimestampSeconds(): boolean;
  clearDecentralizationSaleOpenTimestampSeconds(): void;
  getDecentralizationSaleOpenTimestampSeconds(): number;
  setDecentralizationSaleOpenTimestampSeconds(value: number): void;

  hasDecentralizationSwapTerminationTimestampSeconds(): boolean;
  clearDecentralizationSwapTerminationTimestampSeconds(): void;
  getDecentralizationSwapTerminationTimestampSeconds(): number;
  setDecentralizationSwapTerminationTimestampSeconds(value: number): void;

  hasNextTicketId(): boolean;
  clearNextTicketId(): void;
  getNextTicketId(): number;
  setNextTicketId(value: number): void;

  hasPurgeOldTicketsLastCompletionTimestampNanoseconds(): boolean;
  clearPurgeOldTicketsLastCompletionTimestampNanoseconds(): void;
  getPurgeOldTicketsLastCompletionTimestampNanoseconds(): number;
  setPurgeOldTicketsLastCompletionTimestampNanoseconds(value: number): void;

  hasPurgeOldTicketsNextPrincipal(): boolean;
  clearPurgeOldTicketsNextPrincipal(): void;
  getPurgeOldTicketsNextPrincipal(): Uint8Array | string;
  getPurgeOldTicketsNextPrincipal_asU8(): Uint8Array;
  getPurgeOldTicketsNextPrincipal_asB64(): string;
  setPurgeOldTicketsNextPrincipal(value: Uint8Array | string): void;

  hasAlreadyTriedToAutoFinalize(): boolean;
  clearAlreadyTriedToAutoFinalize(): void;
  getAlreadyTriedToAutoFinalize(): boolean;
  setAlreadyTriedToAutoFinalize(value: boolean): void;

  hasAutoFinalizeSwapResponse(): boolean;
  clearAutoFinalizeSwapResponse(): void;
  getAutoFinalizeSwapResponse(): FinalizeSwapResponse | undefined;
  setAutoFinalizeSwapResponse(value?: FinalizeSwapResponse): void;

  hasDirectParticipationIcpE8s(): boolean;
  clearDirectParticipationIcpE8s(): void;
  getDirectParticipationIcpE8s(): number;
  setDirectParticipationIcpE8s(value: number): void;

  hasNeuronsFundParticipationIcpE8s(): boolean;
  clearNeuronsFundParticipationIcpE8s(): void;
  getNeuronsFundParticipationIcpE8s(): number;
  setNeuronsFundParticipationIcpE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Swap.AsObject;
  static toObject(includeInstance: boolean, msg: Swap): Swap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Swap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Swap;
  static deserializeBinaryFromReader(message: Swap, reader: jspb.BinaryReader): Swap;
}

export namespace Swap {
  export type AsObject = {
    lifecycle: LifecycleMap[keyof LifecycleMap],
    init?: Init.AsObject,
    params?: Params.AsObject,
    cfParticipantsList: Array<CfParticipant.AsObject>,
    buyersMap: Array<[string, BuyerState.AsObject]>,
    neuronRecipesList: Array<SnsNeuronRecipe.AsObject>,
    openSnsTokenSwapProposalId: number,
    finalizeSwapInProgress: boolean,
    decentralizationSaleOpenTimestampSeconds: number,
    decentralizationSwapTerminationTimestampSeconds: number,
    nextTicketId: number,
    purgeOldTicketsLastCompletionTimestampNanoseconds: number,
    purgeOldTicketsNextPrincipal: Uint8Array | string,
    alreadyTriedToAutoFinalize: boolean,
    autoFinalizeSwapResponse?: FinalizeSwapResponse.AsObject,
    directParticipationIcpE8s: number,
    neuronsFundParticipationIcpE8s: number,
  }
}

export class Init extends jspb.Message {
  getNnsGovernanceCanisterId(): string;
  setNnsGovernanceCanisterId(value: string): void;

  getSnsGovernanceCanisterId(): string;
  setSnsGovernanceCanisterId(value: string): void;

  getSnsLedgerCanisterId(): string;
  setSnsLedgerCanisterId(value: string): void;

  getIcpLedgerCanisterId(): string;
  setIcpLedgerCanisterId(value: string): void;

  getSnsRootCanisterId(): string;
  setSnsRootCanisterId(value: string): void;

  clearFallbackControllerPrincipalIdsList(): void;
  getFallbackControllerPrincipalIdsList(): Array<string>;
  setFallbackControllerPrincipalIdsList(value: Array<string>): void;
  addFallbackControllerPrincipalIds(value: string, index?: number): string;

  hasTransactionFeeE8s(): boolean;
  clearTransactionFeeE8s(): void;
  getTransactionFeeE8s(): number;
  setTransactionFeeE8s(value: number): void;

  hasNeuronMinimumStakeE8s(): boolean;
  clearNeuronMinimumStakeE8s(): void;
  getNeuronMinimumStakeE8s(): number;
  setNeuronMinimumStakeE8s(value: number): void;

  hasConfirmationText(): boolean;
  clearConfirmationText(): void;
  getConfirmationText(): string;
  setConfirmationText(value: string): void;

  hasRestrictedCountries(): boolean;
  clearRestrictedCountries(): void;
  getRestrictedCountries(): nervous_system_pb.Countries | undefined;
  setRestrictedCountries(value?: nervous_system_pb.Countries): void;

  hasMinParticipants(): boolean;
  clearMinParticipants(): void;
  getMinParticipants(): number;
  setMinParticipants(value: number): void;

  hasMinIcpE8s(): boolean;
  clearMinIcpE8s(): void;
  getMinIcpE8s(): number;
  setMinIcpE8s(value: number): void;

  hasMaxIcpE8s(): boolean;
  clearMaxIcpE8s(): void;
  getMaxIcpE8s(): number;
  setMaxIcpE8s(value: number): void;

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

  hasSwapStartTimestampSeconds(): boolean;
  clearSwapStartTimestampSeconds(): void;
  getSwapStartTimestampSeconds(): number;
  setSwapStartTimestampSeconds(value: number): void;

  hasSwapDueTimestampSeconds(): boolean;
  clearSwapDueTimestampSeconds(): void;
  getSwapDueTimestampSeconds(): number;
  setSwapDueTimestampSeconds(value: number): void;

  hasSnsTokenE8s(): boolean;
  clearSnsTokenE8s(): void;
  getSnsTokenE8s(): number;
  setSnsTokenE8s(value: number): void;

  hasNeuronBasketConstructionParameters(): boolean;
  clearNeuronBasketConstructionParameters(): void;
  getNeuronBasketConstructionParameters(): NeuronBasketConstructionParameters | undefined;
  setNeuronBasketConstructionParameters(value?: NeuronBasketConstructionParameters): void;

  hasNnsProposalId(): boolean;
  clearNnsProposalId(): void;
  getNnsProposalId(): number;
  setNnsProposalId(value: number): void;

  hasNeuronsFundParticipants(): boolean;
  clearNeuronsFundParticipants(): void;
  getNeuronsFundParticipants(): NeuronsFundParticipants | undefined;
  setNeuronsFundParticipants(value?: NeuronsFundParticipants): void;

  hasShouldAutoFinalize(): boolean;
  clearShouldAutoFinalize(): void;
  getShouldAutoFinalize(): boolean;
  setShouldAutoFinalize(value: boolean): void;

  hasNeuronsFundParticipationConstraints(): boolean;
  clearNeuronsFundParticipationConstraints(): void;
  getNeuronsFundParticipationConstraints(): NeuronsFundParticipationConstraints | undefined;
  setNeuronsFundParticipationConstraints(value?: NeuronsFundParticipationConstraints): void;

  hasNeuronsFundParticipation(): boolean;
  clearNeuronsFundParticipation(): void;
  getNeuronsFundParticipation(): boolean;
  setNeuronsFundParticipation(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Init.AsObject;
  static toObject(includeInstance: boolean, msg: Init): Init.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Init, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Init;
  static deserializeBinaryFromReader(message: Init, reader: jspb.BinaryReader): Init;
}

export namespace Init {
  export type AsObject = {
    nnsGovernanceCanisterId: string,
    snsGovernanceCanisterId: string,
    snsLedgerCanisterId: string,
    icpLedgerCanisterId: string,
    snsRootCanisterId: string,
    fallbackControllerPrincipalIdsList: Array<string>,
    transactionFeeE8s: number,
    neuronMinimumStakeE8s: number,
    confirmationText: string,
    restrictedCountries?: nervous_system_pb.Countries.AsObject,
    minParticipants: number,
    minIcpE8s: number,
    maxIcpE8s: number,
    minDirectParticipationIcpE8s: number,
    maxDirectParticipationIcpE8s: number,
    minParticipantIcpE8s: number,
    maxParticipantIcpE8s: number,
    swapStartTimestampSeconds: number,
    swapDueTimestampSeconds: number,
    snsTokenE8s: number,
    neuronBasketConstructionParameters?: NeuronBasketConstructionParameters.AsObject,
    nnsProposalId: number,
    neuronsFundParticipants?: NeuronsFundParticipants.AsObject,
    shouldAutoFinalize: boolean,
    neuronsFundParticipationConstraints?: NeuronsFundParticipationConstraints.AsObject,
    neuronsFundParticipation: boolean,
  }
}

export class NeuronsFundParticipationConstraints extends jspb.Message {
  hasMinDirectParticipationThresholdIcpE8s(): boolean;
  clearMinDirectParticipationThresholdIcpE8s(): void;
  getMinDirectParticipationThresholdIcpE8s(): number;
  setMinDirectParticipationThresholdIcpE8s(value: number): void;

  hasMaxNeuronsFundParticipationIcpE8s(): boolean;
  clearMaxNeuronsFundParticipationIcpE8s(): void;
  getMaxNeuronsFundParticipationIcpE8s(): number;
  setMaxNeuronsFundParticipationIcpE8s(value: number): void;

  clearCoefficientIntervalsList(): void;
  getCoefficientIntervalsList(): Array<LinearScalingCoefficient>;
  setCoefficientIntervalsList(value: Array<LinearScalingCoefficient>): void;
  addCoefficientIntervals(value?: LinearScalingCoefficient, index?: number): LinearScalingCoefficient;

  hasIdealMatchedParticipationFunction(): boolean;
  clearIdealMatchedParticipationFunction(): void;
  getIdealMatchedParticipationFunction(): IdealMatchedParticipationFunction | undefined;
  setIdealMatchedParticipationFunction(value?: IdealMatchedParticipationFunction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundParticipationConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundParticipationConstraints): NeuronsFundParticipationConstraints.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundParticipationConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundParticipationConstraints;
  static deserializeBinaryFromReader(message: NeuronsFundParticipationConstraints, reader: jspb.BinaryReader): NeuronsFundParticipationConstraints;
}

export namespace NeuronsFundParticipationConstraints {
  export type AsObject = {
    minDirectParticipationThresholdIcpE8s: number,
    maxNeuronsFundParticipationIcpE8s: number,
    coefficientIntervalsList: Array<LinearScalingCoefficient.AsObject>,
    idealMatchedParticipationFunction?: IdealMatchedParticipationFunction.AsObject,
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

export class LinearScalingCoefficient extends jspb.Message {
  hasFromDirectParticipationIcpE8s(): boolean;
  clearFromDirectParticipationIcpE8s(): void;
  getFromDirectParticipationIcpE8s(): number;
  setFromDirectParticipationIcpE8s(value: number): void;

  hasToDirectParticipationIcpE8s(): boolean;
  clearToDirectParticipationIcpE8s(): void;
  getToDirectParticipationIcpE8s(): number;
  setToDirectParticipationIcpE8s(value: number): void;

  hasSlopeNumerator(): boolean;
  clearSlopeNumerator(): void;
  getSlopeNumerator(): number;
  setSlopeNumerator(value: number): void;

  hasSlopeDenominator(): boolean;
  clearSlopeDenominator(): void;
  getSlopeDenominator(): number;
  setSlopeDenominator(value: number): void;

  hasInterceptIcpE8s(): boolean;
  clearInterceptIcpE8s(): void;
  getInterceptIcpE8s(): number;
  setInterceptIcpE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearScalingCoefficient.AsObject;
  static toObject(includeInstance: boolean, msg: LinearScalingCoefficient): LinearScalingCoefficient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinearScalingCoefficient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearScalingCoefficient;
  static deserializeBinaryFromReader(message: LinearScalingCoefficient, reader: jspb.BinaryReader): LinearScalingCoefficient;
}

export namespace LinearScalingCoefficient {
  export type AsObject = {
    fromDirectParticipationIcpE8s: number,
    toDirectParticipationIcpE8s: number,
    slopeNumerator: number,
    slopeDenominator: number,
    interceptIcpE8s: number,
  }
}

export class NeuronsFundParticipants extends jspb.Message {
  clearCfParticipantsList(): void;
  getCfParticipantsList(): Array<CfParticipant>;
  setCfParticipantsList(value: Array<CfParticipant>): void;
  addCfParticipants(value?: CfParticipant, index?: number): CfParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronsFundParticipants.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronsFundParticipants): NeuronsFundParticipants.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronsFundParticipants, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronsFundParticipants;
  static deserializeBinaryFromReader(message: NeuronsFundParticipants, reader: jspb.BinaryReader): NeuronsFundParticipants;
}

export namespace NeuronsFundParticipants {
  export type AsObject = {
    cfParticipantsList: Array<CfParticipant.AsObject>,
  }
}

export class CfNeuron extends jspb.Message {
  getNnsNeuronId(): number;
  setNnsNeuronId(value: number): void;

  getAmountIcpE8s(): number;
  setAmountIcpE8s(value: number): void;

  hasHasCreatedNeuronRecipes(): boolean;
  clearHasCreatedNeuronRecipes(): void;
  getHasCreatedNeuronRecipes(): boolean;
  setHasCreatedNeuronRecipes(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CfNeuron.AsObject;
  static toObject(includeInstance: boolean, msg: CfNeuron): CfNeuron.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CfNeuron, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CfNeuron;
  static deserializeBinaryFromReader(message: CfNeuron, reader: jspb.BinaryReader): CfNeuron;
}

export namespace CfNeuron {
  export type AsObject = {
    nnsNeuronId: number,
    amountIcpE8s: number,
    hasCreatedNeuronRecipes: boolean,
  }
}

export class CfParticipant extends jspb.Message {
  getHotkeyPrincipal(): string;
  setHotkeyPrincipal(value: string): void;

  clearCfNeuronsList(): void;
  getCfNeuronsList(): Array<CfNeuron>;
  setCfNeuronsList(value: Array<CfNeuron>): void;
  addCfNeurons(value?: CfNeuron, index?: number): CfNeuron;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CfParticipant.AsObject;
  static toObject(includeInstance: boolean, msg: CfParticipant): CfParticipant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CfParticipant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CfParticipant;
  static deserializeBinaryFromReader(message: CfParticipant, reader: jspb.BinaryReader): CfParticipant;
}

export namespace CfParticipant {
  export type AsObject = {
    hotkeyPrincipal: string,
    cfNeuronsList: Array<CfNeuron.AsObject>,
  }
}

export class NeuronBasketConstructionParameters extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getDissolveDelayIntervalSeconds(): number;
  setDissolveDelayIntervalSeconds(value: number): void;

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
    dissolveDelayIntervalSeconds: number,
  }
}

export class Params extends jspb.Message {
  getMinParticipants(): number;
  setMinParticipants(value: number): void;

  getMinIcpE8s(): number;
  setMinIcpE8s(value: number): void;

  getMaxIcpE8s(): number;
  setMaxIcpE8s(value: number): void;

  hasMinDirectParticipationIcpE8s(): boolean;
  clearMinDirectParticipationIcpE8s(): void;
  getMinDirectParticipationIcpE8s(): number;
  setMinDirectParticipationIcpE8s(value: number): void;

  hasMaxDirectParticipationIcpE8s(): boolean;
  clearMaxDirectParticipationIcpE8s(): void;
  getMaxDirectParticipationIcpE8s(): number;
  setMaxDirectParticipationIcpE8s(value: number): void;

  getMinParticipantIcpE8s(): number;
  setMinParticipantIcpE8s(value: number): void;

  getMaxParticipantIcpE8s(): number;
  setMaxParticipantIcpE8s(value: number): void;

  getSwapDueTimestampSeconds(): number;
  setSwapDueTimestampSeconds(value: number): void;

  getSnsTokenE8s(): number;
  setSnsTokenE8s(value: number): void;

  hasNeuronBasketConstructionParameters(): boolean;
  clearNeuronBasketConstructionParameters(): void;
  getNeuronBasketConstructionParameters(): NeuronBasketConstructionParameters | undefined;
  setNeuronBasketConstructionParameters(value?: NeuronBasketConstructionParameters): void;

  hasSaleDelaySeconds(): boolean;
  clearSaleDelaySeconds(): void;
  getSaleDelaySeconds(): number;
  setSaleDelaySeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Params.AsObject;
  static toObject(includeInstance: boolean, msg: Params): Params.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Params, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Params;
  static deserializeBinaryFromReader(message: Params, reader: jspb.BinaryReader): Params;
}

export namespace Params {
  export type AsObject = {
    minParticipants: number,
    minIcpE8s: number,
    maxIcpE8s: number,
    minDirectParticipationIcpE8s: number,
    maxDirectParticipationIcpE8s: number,
    minParticipantIcpE8s: number,
    maxParticipantIcpE8s: number,
    swapDueTimestampSeconds: number,
    snsTokenE8s: number,
    neuronBasketConstructionParameters?: NeuronBasketConstructionParameters.AsObject,
    saleDelaySeconds: number,
  }
}

export class TransferableAmount extends jspb.Message {
  getAmountE8s(): number;
  setAmountE8s(value: number): void;

  getTransferStartTimestampSeconds(): number;
  setTransferStartTimestampSeconds(value: number): void;

  getTransferSuccessTimestampSeconds(): number;
  setTransferSuccessTimestampSeconds(value: number): void;

  hasAmountTransferredE8s(): boolean;
  clearAmountTransferredE8s(): void;
  getAmountTransferredE8s(): number;
  setAmountTransferredE8s(value: number): void;

  hasTransferFeePaidE8s(): boolean;
  clearTransferFeePaidE8s(): void;
  getTransferFeePaidE8s(): number;
  setTransferFeePaidE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferableAmount.AsObject;
  static toObject(includeInstance: boolean, msg: TransferableAmount): TransferableAmount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferableAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferableAmount;
  static deserializeBinaryFromReader(message: TransferableAmount, reader: jspb.BinaryReader): TransferableAmount;
}

export namespace TransferableAmount {
  export type AsObject = {
    amountE8s: number,
    transferStartTimestampSeconds: number,
    transferSuccessTimestampSeconds: number,
    amountTransferredE8s: number,
    transferFeePaidE8s: number,
  }
}

export class BuyerState extends jspb.Message {
  hasIcp(): boolean;
  clearIcp(): void;
  getIcp(): TransferableAmount | undefined;
  setIcp(value?: TransferableAmount): void;

  hasHasCreatedNeuronRecipes(): boolean;
  clearHasCreatedNeuronRecipes(): void;
  getHasCreatedNeuronRecipes(): boolean;
  setHasCreatedNeuronRecipes(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyerState.AsObject;
  static toObject(includeInstance: boolean, msg: BuyerState): BuyerState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuyerState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyerState;
  static deserializeBinaryFromReader(message: BuyerState, reader: jspb.BinaryReader): BuyerState;
}

export namespace BuyerState {
  export type AsObject = {
    icp?: TransferableAmount.AsObject,
    hasCreatedNeuronRecipes: boolean,
  }
}

export class DirectInvestment extends jspb.Message {
  getBuyerPrincipal(): string;
  setBuyerPrincipal(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectInvestment.AsObject;
  static toObject(includeInstance: boolean, msg: DirectInvestment): DirectInvestment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectInvestment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectInvestment;
  static deserializeBinaryFromReader(message: DirectInvestment, reader: jspb.BinaryReader): DirectInvestment;
}

export namespace DirectInvestment {
  export type AsObject = {
    buyerPrincipal: string,
  }
}

export class CfInvestment extends jspb.Message {
  getHotkeyPrincipal(): string;
  setHotkeyPrincipal(value: string): void;

  getNnsNeuronId(): number;
  setNnsNeuronId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CfInvestment.AsObject;
  static toObject(includeInstance: boolean, msg: CfInvestment): CfInvestment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CfInvestment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CfInvestment;
  static deserializeBinaryFromReader(message: CfInvestment, reader: jspb.BinaryReader): CfInvestment;
}

export namespace CfInvestment {
  export type AsObject = {
    hotkeyPrincipal: string,
    nnsNeuronId: number,
  }
}

export class TimeWindow extends jspb.Message {
  getStartTimestampSeconds(): number;
  setStartTimestampSeconds(value: number): void;

  getEndTimestampSeconds(): number;
  setEndTimestampSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeWindow.AsObject;
  static toObject(includeInstance: boolean, msg: TimeWindow): TimeWindow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeWindow;
  static deserializeBinaryFromReader(message: TimeWindow, reader: jspb.BinaryReader): TimeWindow;
}

export namespace TimeWindow {
  export type AsObject = {
    startTimestampSeconds: number,
    endTimestampSeconds: number,
  }
}

export class SnsNeuronRecipe extends jspb.Message {
  hasSns(): boolean;
  clearSns(): void;
  getSns(): TransferableAmount | undefined;
  setSns(value?: TransferableAmount): void;

  hasDirect(): boolean;
  clearDirect(): void;
  getDirect(): DirectInvestment | undefined;
  setDirect(value?: DirectInvestment): void;

  hasCommunityFund(): boolean;
  clearCommunityFund(): void;
  getCommunityFund(): CfInvestment | undefined;
  setCommunityFund(value?: CfInvestment): void;

  hasNeuronAttributes(): boolean;
  clearNeuronAttributes(): void;
  getNeuronAttributes(): SnsNeuronRecipe.NeuronAttributes | undefined;
  setNeuronAttributes(value?: SnsNeuronRecipe.NeuronAttributes): void;

  hasClaimedStatus(): boolean;
  clearClaimedStatus(): void;
  getClaimedStatus(): SnsNeuronRecipe.ClaimedStatusMap[keyof SnsNeuronRecipe.ClaimedStatusMap];
  setClaimedStatus(value: SnsNeuronRecipe.ClaimedStatusMap[keyof SnsNeuronRecipe.ClaimedStatusMap]): void;

  getInvestorCase(): SnsNeuronRecipe.InvestorCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnsNeuronRecipe.AsObject;
  static toObject(includeInstance: boolean, msg: SnsNeuronRecipe): SnsNeuronRecipe.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnsNeuronRecipe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnsNeuronRecipe;
  static deserializeBinaryFromReader(message: SnsNeuronRecipe, reader: jspb.BinaryReader): SnsNeuronRecipe;
}

export namespace SnsNeuronRecipe {
  export type AsObject = {
    sns?: TransferableAmount.AsObject,
    direct?: DirectInvestment.AsObject,
    communityFund?: CfInvestment.AsObject,
    neuronAttributes?: SnsNeuronRecipe.NeuronAttributes.AsObject,
    claimedStatus: SnsNeuronRecipe.ClaimedStatusMap[keyof SnsNeuronRecipe.ClaimedStatusMap],
  }

  export class NeuronAttributes extends jspb.Message {
    getMemo(): number;
    setMemo(value: number): void;

    getDissolveDelaySeconds(): number;
    setDissolveDelaySeconds(value: number): void;

    clearFolloweesList(): void;
    getFolloweesList(): Array<NeuronId>;
    setFolloweesList(value: Array<NeuronId>): void;
    addFollowees(value?: NeuronId, index?: number): NeuronId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NeuronAttributes.AsObject;
    static toObject(includeInstance: boolean, msg: NeuronAttributes): NeuronAttributes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NeuronAttributes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NeuronAttributes;
    static deserializeBinaryFromReader(message: NeuronAttributes, reader: jspb.BinaryReader): NeuronAttributes;
  }

  export namespace NeuronAttributes {
    export type AsObject = {
      memo: number,
      dissolveDelaySeconds: number,
      followeesList: Array<NeuronId.AsObject>,
    }
  }

  export interface ClaimedStatusMap {
    CLAIMED_STATUS_UNSPECIFIED: 0;
    CLAIMED_STATUS_PENDING: 1;
    CLAIMED_STATUS_SUCCESS: 2;
    CLAIMED_STATUS_FAILED: 3;
    CLAIMED_STATUS_INVALID: 4;
  }

  export const ClaimedStatus: ClaimedStatusMap;

  export enum InvestorCase {
    INVESTOR_NOT_SET = 0,
    DIRECT = 2,
    COMMUNITY_FUND = 3,
  }
}

export class OpenRequest extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  clearCfParticipantsList(): void;
  getCfParticipantsList(): Array<CfParticipant>;
  setCfParticipantsList(value: Array<CfParticipant>): void;
  addCfParticipants(value?: CfParticipant, index?: number): CfParticipant;

  hasOpenSnsTokenSwapProposalId(): boolean;
  clearOpenSnsTokenSwapProposalId(): void;
  getOpenSnsTokenSwapProposalId(): number;
  setOpenSnsTokenSwapProposalId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenRequest): OpenRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenRequest;
  static deserializeBinaryFromReader(message: OpenRequest, reader: jspb.BinaryReader): OpenRequest;
}

export namespace OpenRequest {
  export type AsObject = {
    params?: Params.AsObject,
    cfParticipantsList: Array<CfParticipant.AsObject>,
    openSnsTokenSwapProposalId: number,
  }
}

export class OpenResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenResponse): OpenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenResponse;
  static deserializeBinaryFromReader(message: OpenResponse, reader: jspb.BinaryReader): OpenResponse;
}

export namespace OpenResponse {
  export type AsObject = {
  }
}

export class GetCanisterStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCanisterStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCanisterStatusRequest): GetCanisterStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCanisterStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCanisterStatusRequest;
  static deserializeBinaryFromReader(message: GetCanisterStatusRequest, reader: jspb.BinaryReader): GetCanisterStatusRequest;
}

export namespace GetCanisterStatusRequest {
  export type AsObject = {
  }
}

export class GetStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStateRequest): GetStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStateRequest;
  static deserializeBinaryFromReader(message: GetStateRequest, reader: jspb.BinaryReader): GetStateRequest;
}

export namespace GetStateRequest {
  export type AsObject = {
  }
}

export class GetStateResponse extends jspb.Message {
  hasSwap(): boolean;
  clearSwap(): void;
  getSwap(): Swap | undefined;
  setSwap(value?: Swap): void;

  hasDerived(): boolean;
  clearDerived(): void;
  getDerived(): DerivedState | undefined;
  setDerived(value?: DerivedState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStateResponse): GetStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStateResponse;
  static deserializeBinaryFromReader(message: GetStateResponse, reader: jspb.BinaryReader): GetStateResponse;
}

export namespace GetStateResponse {
  export type AsObject = {
    swap?: Swap.AsObject,
    derived?: DerivedState.AsObject,
  }
}

export class GetBuyerStateRequest extends jspb.Message {
  hasPrincipalId(): boolean;
  clearPrincipalId(): void;
  getPrincipalId(): base_types_pb.PrincipalId | undefined;
  setPrincipalId(value?: base_types_pb.PrincipalId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuyerStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuyerStateRequest): GetBuyerStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuyerStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuyerStateRequest;
  static deserializeBinaryFromReader(message: GetBuyerStateRequest, reader: jspb.BinaryReader): GetBuyerStateRequest;
}

export namespace GetBuyerStateRequest {
  export type AsObject = {
    principalId?: base_types_pb.PrincipalId.AsObject,
  }
}

export class GetBuyerStateResponse extends jspb.Message {
  hasBuyerState(): boolean;
  clearBuyerState(): void;
  getBuyerState(): BuyerState | undefined;
  setBuyerState(value?: BuyerState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuyerStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuyerStateResponse): GetBuyerStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuyerStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuyerStateResponse;
  static deserializeBinaryFromReader(message: GetBuyerStateResponse, reader: jspb.BinaryReader): GetBuyerStateResponse;
}

export namespace GetBuyerStateResponse {
  export type AsObject = {
    buyerState?: BuyerState.AsObject,
  }
}

export class GetBuyersTotalRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuyersTotalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuyersTotalRequest): GetBuyersTotalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuyersTotalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuyersTotalRequest;
  static deserializeBinaryFromReader(message: GetBuyersTotalRequest, reader: jspb.BinaryReader): GetBuyersTotalRequest;
}

export namespace GetBuyersTotalRequest {
  export type AsObject = {
  }
}

export class GetBuyersTotalResponse extends jspb.Message {
  getBuyersTotal(): number;
  setBuyersTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuyersTotalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuyersTotalResponse): GetBuyersTotalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuyersTotalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuyersTotalResponse;
  static deserializeBinaryFromReader(message: GetBuyersTotalResponse, reader: jspb.BinaryReader): GetBuyersTotalResponse;
}

export namespace GetBuyersTotalResponse {
  export type AsObject = {
    buyersTotal: number,
  }
}

export class DerivedState extends jspb.Message {
  getBuyerTotalIcpE8s(): number;
  setBuyerTotalIcpE8s(value: number): void;

  hasDirectParticipantCount(): boolean;
  clearDirectParticipantCount(): void;
  getDirectParticipantCount(): number;
  setDirectParticipantCount(value: number): void;

  hasCfParticipantCount(): boolean;
  clearCfParticipantCount(): void;
  getCfParticipantCount(): number;
  setCfParticipantCount(value: number): void;

  hasCfNeuronCount(): boolean;
  clearCfNeuronCount(): void;
  getCfNeuronCount(): number;
  setCfNeuronCount(value: number): void;

  getSnsTokensPerIcp(): number;
  setSnsTokensPerIcp(value: number): void;

  hasDirectParticipationIcpE8s(): boolean;
  clearDirectParticipationIcpE8s(): void;
  getDirectParticipationIcpE8s(): number;
  setDirectParticipationIcpE8s(value: number): void;

  hasNeuronsFundParticipationIcpE8s(): boolean;
  clearNeuronsFundParticipationIcpE8s(): void;
  getNeuronsFundParticipationIcpE8s(): number;
  setNeuronsFundParticipationIcpE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DerivedState.AsObject;
  static toObject(includeInstance: boolean, msg: DerivedState): DerivedState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DerivedState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DerivedState;
  static deserializeBinaryFromReader(message: DerivedState, reader: jspb.BinaryReader): DerivedState;
}

export namespace DerivedState {
  export type AsObject = {
    buyerTotalIcpE8s: number,
    directParticipantCount: number,
    cfParticipantCount: number,
    cfNeuronCount: number,
    snsTokensPerIcp: number,
    directParticipationIcpE8s: number,
    neuronsFundParticipationIcpE8s: number,
  }
}

export class SetOpenTimeWindowRequest extends jspb.Message {
  hasOpenTimeWindow(): boolean;
  clearOpenTimeWindow(): void;
  getOpenTimeWindow(): TimeWindow | undefined;
  setOpenTimeWindow(value?: TimeWindow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOpenTimeWindowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOpenTimeWindowRequest): SetOpenTimeWindowRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOpenTimeWindowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOpenTimeWindowRequest;
  static deserializeBinaryFromReader(message: SetOpenTimeWindowRequest, reader: jspb.BinaryReader): SetOpenTimeWindowRequest;
}

export namespace SetOpenTimeWindowRequest {
  export type AsObject = {
    openTimeWindow?: TimeWindow.AsObject,
  }
}

export class SetOpenTimeWindowResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOpenTimeWindowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetOpenTimeWindowResponse): SetOpenTimeWindowResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOpenTimeWindowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOpenTimeWindowResponse;
  static deserializeBinaryFromReader(message: SetOpenTimeWindowResponse, reader: jspb.BinaryReader): SetOpenTimeWindowResponse;
}

export namespace SetOpenTimeWindowResponse {
  export type AsObject = {
  }
}

export class RefreshBuyerTokensRequest extends jspb.Message {
  getBuyer(): string;
  setBuyer(value: string): void;

  hasConfirmationText(): boolean;
  clearConfirmationText(): void;
  getConfirmationText(): string;
  setConfirmationText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshBuyerTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshBuyerTokensRequest): RefreshBuyerTokensRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshBuyerTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshBuyerTokensRequest;
  static deserializeBinaryFromReader(message: RefreshBuyerTokensRequest, reader: jspb.BinaryReader): RefreshBuyerTokensRequest;
}

export namespace RefreshBuyerTokensRequest {
  export type AsObject = {
    buyer: string,
    confirmationText: string,
  }
}

export class RefreshBuyerTokensResponse extends jspb.Message {
  getIcpAcceptedParticipationE8s(): number;
  setIcpAcceptedParticipationE8s(value: number): void;

  getIcpLedgerAccountBalanceE8s(): number;
  setIcpLedgerAccountBalanceE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshBuyerTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshBuyerTokensResponse): RefreshBuyerTokensResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshBuyerTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshBuyerTokensResponse;
  static deserializeBinaryFromReader(message: RefreshBuyerTokensResponse, reader: jspb.BinaryReader): RefreshBuyerTokensResponse;
}

export namespace RefreshBuyerTokensResponse {
  export type AsObject = {
    icpAcceptedParticipationE8s: number,
    icpLedgerAccountBalanceE8s: number,
  }
}

export class FinalizeSwapRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeSwapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeSwapRequest): FinalizeSwapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeSwapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeSwapRequest;
  static deserializeBinaryFromReader(message: FinalizeSwapRequest, reader: jspb.BinaryReader): FinalizeSwapRequest;
}

export namespace FinalizeSwapRequest {
  export type AsObject = {
  }
}

export class FinalizeSwapResponse extends jspb.Message {
  hasSweepIcpResult(): boolean;
  clearSweepIcpResult(): void;
  getSweepIcpResult(): SweepResult | undefined;
  setSweepIcpResult(value?: SweepResult): void;

  hasSweepSnsResult(): boolean;
  clearSweepSnsResult(): void;
  getSweepSnsResult(): SweepResult | undefined;
  setSweepSnsResult(value?: SweepResult): void;

  hasClaimNeuronResult(): boolean;
  clearClaimNeuronResult(): void;
  getClaimNeuronResult(): SweepResult | undefined;
  setClaimNeuronResult(value?: SweepResult): void;

  hasSetModeCallResult(): boolean;
  clearSetModeCallResult(): void;
  getSetModeCallResult(): SetModeCallResult | undefined;
  setSetModeCallResult(value?: SetModeCallResult): void;

  hasSetDappControllersCallResult(): boolean;
  clearSetDappControllersCallResult(): void;
  getSetDappControllersCallResult(): SetDappControllersCallResult | undefined;
  setSetDappControllersCallResult(value?: SetDappControllersCallResult): void;

  hasSettleCommunityFundParticipationResult(): boolean;
  clearSettleCommunityFundParticipationResult(): void;
  getSettleCommunityFundParticipationResult(): SettleCommunityFundParticipationResult | undefined;
  setSettleCommunityFundParticipationResult(value?: SettleCommunityFundParticipationResult): void;

  hasCreateSnsNeuronRecipesResult(): boolean;
  clearCreateSnsNeuronRecipesResult(): void;
  getCreateSnsNeuronRecipesResult(): SweepResult | undefined;
  setCreateSnsNeuronRecipesResult(value?: SweepResult): void;

  hasSettleNeuronsFundParticipationResult(): boolean;
  clearSettleNeuronsFundParticipationResult(): void;
  getSettleNeuronsFundParticipationResult(): SettleNeuronsFundParticipationResult | undefined;
  setSettleNeuronsFundParticipationResult(value?: SettleNeuronsFundParticipationResult): void;

  hasErrorMessage(): boolean;
  clearErrorMessage(): void;
  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeSwapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeSwapResponse): FinalizeSwapResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalizeSwapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeSwapResponse;
  static deserializeBinaryFromReader(message: FinalizeSwapResponse, reader: jspb.BinaryReader): FinalizeSwapResponse;
}

export namespace FinalizeSwapResponse {
  export type AsObject = {
    sweepIcpResult?: SweepResult.AsObject,
    sweepSnsResult?: SweepResult.AsObject,
    claimNeuronResult?: SweepResult.AsObject,
    setModeCallResult?: SetModeCallResult.AsObject,
    setDappControllersCallResult?: SetDappControllersCallResult.AsObject,
    settleCommunityFundParticipationResult?: SettleCommunityFundParticipationResult.AsObject,
    createSnsNeuronRecipesResult?: SweepResult.AsObject,
    settleNeuronsFundParticipationResult?: SettleNeuronsFundParticipationResult.AsObject,
    errorMessage: string,
  }
}

export class SweepResult extends jspb.Message {
  getSuccess(): number;
  setSuccess(value: number): void;

  getFailure(): number;
  setFailure(value: number): void;

  getSkipped(): number;
  setSkipped(value: number): void;

  getInvalid(): number;
  setInvalid(value: number): void;

  getGlobalFailures(): number;
  setGlobalFailures(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SweepResult.AsObject;
  static toObject(includeInstance: boolean, msg: SweepResult): SweepResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SweepResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SweepResult;
  static deserializeBinaryFromReader(message: SweepResult, reader: jspb.BinaryReader): SweepResult;
}

export namespace SweepResult {
  export type AsObject = {
    success: number,
    failure: number,
    skipped: number,
    invalid: number,
    globalFailures: number,
  }
}

export class SetModeCallResult extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): SetModeCallResult.SetModeResult | undefined;
  setOk(value?: SetModeCallResult.SetModeResult): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): CanisterCallError | undefined;
  setErr(value?: CanisterCallError): void;

  getPossibilityCase(): SetModeCallResult.PossibilityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetModeCallResult.AsObject;
  static toObject(includeInstance: boolean, msg: SetModeCallResult): SetModeCallResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetModeCallResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetModeCallResult;
  static deserializeBinaryFromReader(message: SetModeCallResult, reader: jspb.BinaryReader): SetModeCallResult;
}

export namespace SetModeCallResult {
  export type AsObject = {
    ok?: SetModeCallResult.SetModeResult.AsObject,
    err?: CanisterCallError.AsObject,
  }

  export class SetModeResult extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetModeResult.AsObject;
    static toObject(includeInstance: boolean, msg: SetModeResult): SetModeResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetModeResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetModeResult;
    static deserializeBinaryFromReader(message: SetModeResult, reader: jspb.BinaryReader): SetModeResult;
  }

  export namespace SetModeResult {
    export type AsObject = {
    }
  }

  export enum PossibilityCase {
    POSSIBILITY_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class RestoreDappControllersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreDappControllersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreDappControllersRequest): RestoreDappControllersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreDappControllersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreDappControllersRequest;
  static deserializeBinaryFromReader(message: RestoreDappControllersRequest, reader: jspb.BinaryReader): RestoreDappControllersRequest;
}

export namespace RestoreDappControllersRequest {
  export type AsObject = {
  }
}

export class RestoreDappControllersResponse extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): SetDappControllersResponse | undefined;
  setOk(value?: SetDappControllersResponse): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): CanisterCallError | undefined;
  setErr(value?: CanisterCallError): void;

  getPossibilityCase(): RestoreDappControllersResponse.PossibilityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreDappControllersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreDappControllersResponse): RestoreDappControllersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreDappControllersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreDappControllersResponse;
  static deserializeBinaryFromReader(message: RestoreDappControllersResponse, reader: jspb.BinaryReader): RestoreDappControllersResponse;
}

export namespace RestoreDappControllersResponse {
  export type AsObject = {
    ok?: SetDappControllersResponse.AsObject,
    err?: CanisterCallError.AsObject,
  }

  export enum PossibilityCase {
    POSSIBILITY_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class SetDappControllersCallResult extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): SetDappControllersResponse | undefined;
  setOk(value?: SetDappControllersResponse): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): CanisterCallError | undefined;
  setErr(value?: CanisterCallError): void;

  getPossibilityCase(): SetDappControllersCallResult.PossibilityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDappControllersCallResult.AsObject;
  static toObject(includeInstance: boolean, msg: SetDappControllersCallResult): SetDappControllersCallResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDappControllersCallResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDappControllersCallResult;
  static deserializeBinaryFromReader(message: SetDappControllersCallResult, reader: jspb.BinaryReader): SetDappControllersCallResult;
}

export namespace SetDappControllersCallResult {
  export type AsObject = {
    ok?: SetDappControllersResponse.AsObject,
    err?: CanisterCallError.AsObject,
  }

  export enum PossibilityCase {
    POSSIBILITY_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class SettleCommunityFundParticipationResult extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): SettleCommunityFundParticipationResult.Response | undefined;
  setOk(value?: SettleCommunityFundParticipationResult.Response): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): CanisterCallError | undefined;
  setErr(value?: CanisterCallError): void;

  getPossibilityCase(): SettleCommunityFundParticipationResult.PossibilityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleCommunityFundParticipationResult.AsObject;
  static toObject(includeInstance: boolean, msg: SettleCommunityFundParticipationResult): SettleCommunityFundParticipationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleCommunityFundParticipationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleCommunityFundParticipationResult;
  static deserializeBinaryFromReader(message: SettleCommunityFundParticipationResult, reader: jspb.BinaryReader): SettleCommunityFundParticipationResult;
}

export namespace SettleCommunityFundParticipationResult {
  export type AsObject = {
    ok?: SettleCommunityFundParticipationResult.Response.AsObject,
    err?: CanisterCallError.AsObject,
  }

  export class Response extends jspb.Message {
    hasGovernanceError(): boolean;
    clearGovernanceError(): void;
    getGovernanceError(): GovernanceError | undefined;
    setGovernanceError(value?: GovernanceError): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      governanceError?: GovernanceError.AsObject,
    }
  }

  export enum PossibilityCase {
    POSSIBILITY_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class SettleNeuronsFundParticipationResult extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): SettleNeuronsFundParticipationResult.Ok | undefined;
  setOk(value?: SettleNeuronsFundParticipationResult.Ok): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): SettleNeuronsFundParticipationResult.Error | undefined;
  setErr(value?: SettleNeuronsFundParticipationResult.Error): void;

  getPossibilityCase(): SettleNeuronsFundParticipationResult.PossibilityCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleNeuronsFundParticipationResult.AsObject;
  static toObject(includeInstance: boolean, msg: SettleNeuronsFundParticipationResult): SettleNeuronsFundParticipationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleNeuronsFundParticipationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleNeuronsFundParticipationResult;
  static deserializeBinaryFromReader(message: SettleNeuronsFundParticipationResult, reader: jspb.BinaryReader): SettleNeuronsFundParticipationResult;
}

export namespace SettleNeuronsFundParticipationResult {
  export type AsObject = {
    ok?: SettleNeuronsFundParticipationResult.Ok.AsObject,
    err?: SettleNeuronsFundParticipationResult.Error.AsObject,
  }

  export class Ok extends jspb.Message {
    hasNeuronsFundParticipationIcpE8s(): boolean;
    clearNeuronsFundParticipationIcpE8s(): void;
    getNeuronsFundParticipationIcpE8s(): number;
    setNeuronsFundParticipationIcpE8s(value: number): void;

    hasNeuronsFundNeuronsCount(): boolean;
    clearNeuronsFundNeuronsCount(): void;
    getNeuronsFundNeuronsCount(): number;
    setNeuronsFundNeuronsCount(value: number): void;

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
      neuronsFundParticipationIcpE8s: number,
      neuronsFundNeuronsCount: number,
    }
  }

  export class Error extends jspb.Message {
    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): string;
    setMessage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      message: string,
    }
  }

  export enum PossibilityCase {
    POSSIBILITY_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class SetDappControllersRequest extends jspb.Message {
  hasCanisterIds(): boolean;
  clearCanisterIds(): void;
  getCanisterIds(): SetDappControllersRequest.CanisterIds | undefined;
  setCanisterIds(value?: SetDappControllersRequest.CanisterIds): void;

  clearControllerPrincipalIdsList(): void;
  getControllerPrincipalIdsList(): Array<base_types_pb.PrincipalId>;
  setControllerPrincipalIdsList(value: Array<base_types_pb.PrincipalId>): void;
  addControllerPrincipalIds(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDappControllersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDappControllersRequest): SetDappControllersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDappControllersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDappControllersRequest;
  static deserializeBinaryFromReader(message: SetDappControllersRequest, reader: jspb.BinaryReader): SetDappControllersRequest;
}

export namespace SetDappControllersRequest {
  export type AsObject = {
    canisterIds?: SetDappControllersRequest.CanisterIds.AsObject,
    controllerPrincipalIdsList: Array<base_types_pb.PrincipalId.AsObject>,
  }

  export class CanisterIds extends jspb.Message {
    clearCanisterIdsList(): void;
    getCanisterIdsList(): Array<base_types_pb.PrincipalId>;
    setCanisterIdsList(value: Array<base_types_pb.PrincipalId>): void;
    addCanisterIds(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CanisterIds.AsObject;
    static toObject(includeInstance: boolean, msg: CanisterIds): CanisterIds.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CanisterIds, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CanisterIds;
    static deserializeBinaryFromReader(message: CanisterIds, reader: jspb.BinaryReader): CanisterIds;
  }

  export namespace CanisterIds {
    export type AsObject = {
      canisterIdsList: Array<base_types_pb.PrincipalId.AsObject>,
    }
  }
}

export class SetDappControllersResponse extends jspb.Message {
  clearFailedUpdatesList(): void;
  getFailedUpdatesList(): Array<SetDappControllersResponse.FailedUpdate>;
  setFailedUpdatesList(value: Array<SetDappControllersResponse.FailedUpdate>): void;
  addFailedUpdates(value?: SetDappControllersResponse.FailedUpdate, index?: number): SetDappControllersResponse.FailedUpdate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDappControllersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetDappControllersResponse): SetDappControllersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDappControllersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDappControllersResponse;
  static deserializeBinaryFromReader(message: SetDappControllersResponse, reader: jspb.BinaryReader): SetDappControllersResponse;
}

export namespace SetDappControllersResponse {
  export type AsObject = {
    failedUpdatesList: Array<SetDappControllersResponse.FailedUpdate.AsObject>,
  }

  export class FailedUpdate extends jspb.Message {
    hasDappCanisterId(): boolean;
    clearDappCanisterId(): void;
    getDappCanisterId(): base_types_pb.PrincipalId | undefined;
    setDappCanisterId(value?: base_types_pb.PrincipalId): void;

    hasErr(): boolean;
    clearErr(): void;
    getErr(): CanisterCallError | undefined;
    setErr(value?: CanisterCallError): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FailedUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: FailedUpdate): FailedUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FailedUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FailedUpdate;
    static deserializeBinaryFromReader(message: FailedUpdate, reader: jspb.BinaryReader): FailedUpdate;
  }

  export namespace FailedUpdate {
    export type AsObject = {
      dappCanisterId?: base_types_pb.PrincipalId.AsObject,
      err?: CanisterCallError.AsObject,
    }
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

export class NeuronId extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeuronId.AsObject;
  static toObject(includeInstance: boolean, msg: NeuronId): NeuronId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeuronId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeuronId;
  static deserializeBinaryFromReader(message: NeuronId, reader: jspb.BinaryReader): NeuronId;
}

export namespace NeuronId {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class CanisterCallError extends jspb.Message {
  hasCode(): boolean;
  clearCode(): void;
  getCode(): number;
  setCode(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanisterCallError.AsObject;
  static toObject(includeInstance: boolean, msg: CanisterCallError): CanisterCallError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CanisterCallError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanisterCallError;
  static deserializeBinaryFromReader(message: CanisterCallError, reader: jspb.BinaryReader): CanisterCallError;
}

export namespace CanisterCallError {
  export type AsObject = {
    code: number,
    description: string,
  }
}

export class ErrorRefundIcpRequest extends jspb.Message {
  hasSourcePrincipalId(): boolean;
  clearSourcePrincipalId(): void;
  getSourcePrincipalId(): base_types_pb.PrincipalId | undefined;
  setSourcePrincipalId(value?: base_types_pb.PrincipalId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorRefundIcpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorRefundIcpRequest): ErrorRefundIcpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorRefundIcpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorRefundIcpRequest;
  static deserializeBinaryFromReader(message: ErrorRefundIcpRequest, reader: jspb.BinaryReader): ErrorRefundIcpRequest;
}

export namespace ErrorRefundIcpRequest {
  export type AsObject = {
    sourcePrincipalId?: base_types_pb.PrincipalId.AsObject,
  }
}

export class ErrorRefundIcpResponse extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): ErrorRefundIcpResponse.Ok | undefined;
  setOk(value?: ErrorRefundIcpResponse.Ok): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): ErrorRefundIcpResponse.Err | undefined;
  setErr(value?: ErrorRefundIcpResponse.Err): void;

  getResultCase(): ErrorRefundIcpResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorRefundIcpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorRefundIcpResponse): ErrorRefundIcpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorRefundIcpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorRefundIcpResponse;
  static deserializeBinaryFromReader(message: ErrorRefundIcpResponse, reader: jspb.BinaryReader): ErrorRefundIcpResponse;
}

export namespace ErrorRefundIcpResponse {
  export type AsObject = {
    ok?: ErrorRefundIcpResponse.Ok.AsObject,
    err?: ErrorRefundIcpResponse.Err.AsObject,
  }

  export class Ok extends jspb.Message {
    hasBlockHeight(): boolean;
    clearBlockHeight(): void;
    getBlockHeight(): number;
    setBlockHeight(value: number): void;

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
      blockHeight: number,
    }
  }

  export class Err extends jspb.Message {
    hasErrorType(): boolean;
    clearErrorType(): void;
    getErrorType(): ErrorRefundIcpResponse.Err.TypeMap[keyof ErrorRefundIcpResponse.Err.TypeMap];
    setErrorType(value: ErrorRefundIcpResponse.Err.TypeMap[keyof ErrorRefundIcpResponse.Err.TypeMap]): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Err.AsObject;
    static toObject(includeInstance: boolean, msg: Err): Err.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Err, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Err;
    static deserializeBinaryFromReader(message: Err, reader: jspb.BinaryReader): Err;
  }

  export namespace Err {
    export type AsObject = {
      errorType: ErrorRefundIcpResponse.Err.TypeMap[keyof ErrorRefundIcpResponse.Err.TypeMap],
      description: string,
    }

    export interface TypeMap {
      TYPE_UNSPECIFIED: 0;
      TYPE_INVALID_REQUEST: 1;
      TYPE_PRECONDITION: 2;
      TYPE_EXTERNAL: 3;
    }

    export const Type: TypeMap;
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class GetLifecycleRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLifecycleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLifecycleRequest): GetLifecycleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLifecycleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLifecycleRequest;
  static deserializeBinaryFromReader(message: GetLifecycleRequest, reader: jspb.BinaryReader): GetLifecycleRequest;
}

export namespace GetLifecycleRequest {
  export type AsObject = {
  }
}

export class GetLifecycleResponse extends jspb.Message {
  hasLifecycle(): boolean;
  clearLifecycle(): void;
  getLifecycle(): LifecycleMap[keyof LifecycleMap];
  setLifecycle(value: LifecycleMap[keyof LifecycleMap]): void;

  hasDecentralizationSaleOpenTimestampSeconds(): boolean;
  clearDecentralizationSaleOpenTimestampSeconds(): void;
  getDecentralizationSaleOpenTimestampSeconds(): number;
  setDecentralizationSaleOpenTimestampSeconds(value: number): void;

  hasDecentralizationSwapTerminationTimestampSeconds(): boolean;
  clearDecentralizationSwapTerminationTimestampSeconds(): void;
  getDecentralizationSwapTerminationTimestampSeconds(): number;
  setDecentralizationSwapTerminationTimestampSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLifecycleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLifecycleResponse): GetLifecycleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLifecycleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLifecycleResponse;
  static deserializeBinaryFromReader(message: GetLifecycleResponse, reader: jspb.BinaryReader): GetLifecycleResponse;
}

export namespace GetLifecycleResponse {
  export type AsObject = {
    lifecycle: LifecycleMap[keyof LifecycleMap],
    decentralizationSaleOpenTimestampSeconds: number,
    decentralizationSwapTerminationTimestampSeconds: number,
  }
}

export class GetAutoFinalizationStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoFinalizationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoFinalizationStatusRequest): GetAutoFinalizationStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoFinalizationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoFinalizationStatusRequest;
  static deserializeBinaryFromReader(message: GetAutoFinalizationStatusRequest, reader: jspb.BinaryReader): GetAutoFinalizationStatusRequest;
}

export namespace GetAutoFinalizationStatusRequest {
  export type AsObject = {
  }
}

export class GetAutoFinalizationStatusResponse extends jspb.Message {
  hasIsAutoFinalizeEnabled(): boolean;
  clearIsAutoFinalizeEnabled(): void;
  getIsAutoFinalizeEnabled(): boolean;
  setIsAutoFinalizeEnabled(value: boolean): void;

  hasHasAutoFinalizeBeenAttempted(): boolean;
  clearHasAutoFinalizeBeenAttempted(): void;
  getHasAutoFinalizeBeenAttempted(): boolean;
  setHasAutoFinalizeBeenAttempted(value: boolean): void;

  hasAutoFinalizeSwapResponse(): boolean;
  clearAutoFinalizeSwapResponse(): void;
  getAutoFinalizeSwapResponse(): FinalizeSwapResponse | undefined;
  setAutoFinalizeSwapResponse(value?: FinalizeSwapResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAutoFinalizationStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAutoFinalizationStatusResponse): GetAutoFinalizationStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAutoFinalizationStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAutoFinalizationStatusResponse;
  static deserializeBinaryFromReader(message: GetAutoFinalizationStatusResponse, reader: jspb.BinaryReader): GetAutoFinalizationStatusResponse;
}

export namespace GetAutoFinalizationStatusResponse {
  export type AsObject = {
    isAutoFinalizeEnabled: boolean,
    hasAutoFinalizeBeenAttempted: boolean,
    autoFinalizeSwapResponse?: FinalizeSwapResponse.AsObject,
  }
}

export class GetInitRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInitRequest): GetInitRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInitRequest;
  static deserializeBinaryFromReader(message: GetInitRequest, reader: jspb.BinaryReader): GetInitRequest;
}

export namespace GetInitRequest {
  export type AsObject = {
  }
}

export class GetInitResponse extends jspb.Message {
  hasInit(): boolean;
  clearInit(): void;
  getInit(): Init | undefined;
  setInit(value?: Init): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInitResponse): GetInitResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInitResponse;
  static deserializeBinaryFromReader(message: GetInitResponse, reader: jspb.BinaryReader): GetInitResponse;
}

export namespace GetInitResponse {
  export type AsObject = {
    init?: Init.AsObject,
  }
}

export class GetDerivedStateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDerivedStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDerivedStateRequest): GetDerivedStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDerivedStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDerivedStateRequest;
  static deserializeBinaryFromReader(message: GetDerivedStateRequest, reader: jspb.BinaryReader): GetDerivedStateRequest;
}

export namespace GetDerivedStateRequest {
  export type AsObject = {
  }
}

export class GetDerivedStateResponse extends jspb.Message {
  hasBuyerTotalIcpE8s(): boolean;
  clearBuyerTotalIcpE8s(): void;
  getBuyerTotalIcpE8s(): number;
  setBuyerTotalIcpE8s(value: number): void;

  hasDirectParticipantCount(): boolean;
  clearDirectParticipantCount(): void;
  getDirectParticipantCount(): number;
  setDirectParticipantCount(value: number): void;

  hasCfParticipantCount(): boolean;
  clearCfParticipantCount(): void;
  getCfParticipantCount(): number;
  setCfParticipantCount(value: number): void;

  hasCfNeuronCount(): boolean;
  clearCfNeuronCount(): void;
  getCfNeuronCount(): number;
  setCfNeuronCount(value: number): void;

  hasSnsTokensPerIcp(): boolean;
  clearSnsTokensPerIcp(): void;
  getSnsTokensPerIcp(): number;
  setSnsTokensPerIcp(value: number): void;

  hasDirectParticipationIcpE8s(): boolean;
  clearDirectParticipationIcpE8s(): void;
  getDirectParticipationIcpE8s(): number;
  setDirectParticipationIcpE8s(value: number): void;

  hasNeuronsFundParticipationIcpE8s(): boolean;
  clearNeuronsFundParticipationIcpE8s(): void;
  getNeuronsFundParticipationIcpE8s(): number;
  setNeuronsFundParticipationIcpE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDerivedStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDerivedStateResponse): GetDerivedStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDerivedStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDerivedStateResponse;
  static deserializeBinaryFromReader(message: GetDerivedStateResponse, reader: jspb.BinaryReader): GetDerivedStateResponse;
}

export namespace GetDerivedStateResponse {
  export type AsObject = {
    buyerTotalIcpE8s: number,
    directParticipantCount: number,
    cfParticipantCount: number,
    cfNeuronCount: number,
    snsTokensPerIcp: number,
    directParticipationIcpE8s: number,
    neuronsFundParticipationIcpE8s: number,
  }
}

export class ICRC1Account extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): base_types_pb.PrincipalId | undefined;
  setOwner(value?: base_types_pb.PrincipalId): void;

  hasSubaccount(): boolean;
  clearSubaccount(): void;
  getSubaccount(): Uint8Array | string;
  getSubaccount_asU8(): Uint8Array;
  getSubaccount_asB64(): string;
  setSubaccount(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICRC1Account.AsObject;
  static toObject(includeInstance: boolean, msg: ICRC1Account): ICRC1Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ICRC1Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICRC1Account;
  static deserializeBinaryFromReader(message: ICRC1Account, reader: jspb.BinaryReader): ICRC1Account;
}

export namespace ICRC1Account {
  export type AsObject = {
    owner?: base_types_pb.PrincipalId.AsObject,
    subaccount: Uint8Array | string,
  }
}

export class Ticket extends jspb.Message {
  getTicketId(): number;
  setTicketId(value: number): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): ICRC1Account | undefined;
  setAccount(value?: ICRC1Account): void;

  getAmountIcpE8s(): number;
  setAmountIcpE8s(value: number): void;

  getCreationTime(): number;
  setCreationTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ticket.AsObject;
  static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ticket;
  static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
  export type AsObject = {
    ticketId: number,
    account?: ICRC1Account.AsObject,
    amountIcpE8s: number,
    creationTime: number,
  }
}

export class GetOpenTicketRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenTicketRequest): GetOpenTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOpenTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenTicketRequest;
  static deserializeBinaryFromReader(message: GetOpenTicketRequest, reader: jspb.BinaryReader): GetOpenTicketRequest;
}

export namespace GetOpenTicketRequest {
  export type AsObject = {
  }
}

export class GetOpenTicketResponse extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): GetOpenTicketResponse.Ok | undefined;
  setOk(value?: GetOpenTicketResponse.Ok): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): GetOpenTicketResponse.Err | undefined;
  setErr(value?: GetOpenTicketResponse.Err): void;

  getResultCase(): GetOpenTicketResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOpenTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOpenTicketResponse): GetOpenTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOpenTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOpenTicketResponse;
  static deserializeBinaryFromReader(message: GetOpenTicketResponse, reader: jspb.BinaryReader): GetOpenTicketResponse;
}

export namespace GetOpenTicketResponse {
  export type AsObject = {
    ok?: GetOpenTicketResponse.Ok.AsObject,
    err?: GetOpenTicketResponse.Err.AsObject,
  }

  export class Ok extends jspb.Message {
    hasTicket(): boolean;
    clearTicket(): void;
    getTicket(): Ticket | undefined;
    setTicket(value?: Ticket): void;

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
      ticket?: Ticket.AsObject,
    }
  }

  export class Err extends jspb.Message {
    hasErrorType(): boolean;
    clearErrorType(): void;
    getErrorType(): GetOpenTicketResponse.Err.TypeMap[keyof GetOpenTicketResponse.Err.TypeMap];
    setErrorType(value: GetOpenTicketResponse.Err.TypeMap[keyof GetOpenTicketResponse.Err.TypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Err.AsObject;
    static toObject(includeInstance: boolean, msg: Err): Err.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Err, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Err;
    static deserializeBinaryFromReader(message: Err, reader: jspb.BinaryReader): Err;
  }

  export namespace Err {
    export type AsObject = {
      errorType: GetOpenTicketResponse.Err.TypeMap[keyof GetOpenTicketResponse.Err.TypeMap],
    }

    export interface TypeMap {
      TYPE_UNSPECIFIED: 0;
      TYPE_SALE_NOT_OPEN: 1;
      TYPE_SALE_CLOSED: 2;
    }

    export const Type: TypeMap;
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class NewSaleTicketRequest extends jspb.Message {
  getAmountIcpE8s(): number;
  setAmountIcpE8s(value: number): void;

  hasSubaccount(): boolean;
  clearSubaccount(): void;
  getSubaccount(): Uint8Array | string;
  getSubaccount_asU8(): Uint8Array;
  getSubaccount_asB64(): string;
  setSubaccount(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSaleTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewSaleTicketRequest): NewSaleTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewSaleTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSaleTicketRequest;
  static deserializeBinaryFromReader(message: NewSaleTicketRequest, reader: jspb.BinaryReader): NewSaleTicketRequest;
}

export namespace NewSaleTicketRequest {
  export type AsObject = {
    amountIcpE8s: number,
    subaccount: Uint8Array | string,
  }
}

export class NewSaleTicketResponse extends jspb.Message {
  hasOk(): boolean;
  clearOk(): void;
  getOk(): NewSaleTicketResponse.Ok | undefined;
  setOk(value?: NewSaleTicketResponse.Ok): void;

  hasErr(): boolean;
  clearErr(): void;
  getErr(): NewSaleTicketResponse.Err | undefined;
  setErr(value?: NewSaleTicketResponse.Err): void;

  getResultCase(): NewSaleTicketResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSaleTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewSaleTicketResponse): NewSaleTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewSaleTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSaleTicketResponse;
  static deserializeBinaryFromReader(message: NewSaleTicketResponse, reader: jspb.BinaryReader): NewSaleTicketResponse;
}

export namespace NewSaleTicketResponse {
  export type AsObject = {
    ok?: NewSaleTicketResponse.Ok.AsObject,
    err?: NewSaleTicketResponse.Err.AsObject,
  }

  export class Ok extends jspb.Message {
    hasTicket(): boolean;
    clearTicket(): void;
    getTicket(): Ticket | undefined;
    setTicket(value?: Ticket): void;

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
      ticket?: Ticket.AsObject,
    }
  }

  export class Err extends jspb.Message {
    getErrorType(): NewSaleTicketResponse.Err.TypeMap[keyof NewSaleTicketResponse.Err.TypeMap];
    setErrorType(value: NewSaleTicketResponse.Err.TypeMap[keyof NewSaleTicketResponse.Err.TypeMap]): void;

    hasInvalidUserAmount(): boolean;
    clearInvalidUserAmount(): void;
    getInvalidUserAmount(): NewSaleTicketResponse.Err.InvalidUserAmount | undefined;
    setInvalidUserAmount(value?: NewSaleTicketResponse.Err.InvalidUserAmount): void;

    hasExistingTicket(): boolean;
    clearExistingTicket(): void;
    getExistingTicket(): Ticket | undefined;
    setExistingTicket(value?: Ticket): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Err.AsObject;
    static toObject(includeInstance: boolean, msg: Err): Err.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Err, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Err;
    static deserializeBinaryFromReader(message: Err, reader: jspb.BinaryReader): Err;
  }

  export namespace Err {
    export type AsObject = {
      errorType: NewSaleTicketResponse.Err.TypeMap[keyof NewSaleTicketResponse.Err.TypeMap],
      invalidUserAmount?: NewSaleTicketResponse.Err.InvalidUserAmount.AsObject,
      existingTicket?: Ticket.AsObject,
    }

    export class InvalidUserAmount extends jspb.Message {
      getMinAmountIcpE8sIncluded(): number;
      setMinAmountIcpE8sIncluded(value: number): void;

      getMaxAmountIcpE8sIncluded(): number;
      setMaxAmountIcpE8sIncluded(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): InvalidUserAmount.AsObject;
      static toObject(includeInstance: boolean, msg: InvalidUserAmount): InvalidUserAmount.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: InvalidUserAmount, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): InvalidUserAmount;
      static deserializeBinaryFromReader(message: InvalidUserAmount, reader: jspb.BinaryReader): InvalidUserAmount;
    }

    export namespace InvalidUserAmount {
      export type AsObject = {
        minAmountIcpE8sIncluded: number,
        maxAmountIcpE8sIncluded: number,
      }
    }

    export interface TypeMap {
      TYPE_UNSPECIFIED: 0;
      TYPE_SALE_NOT_OPEN: 1;
      TYPE_SALE_CLOSED: 2;
      TYPE_TICKET_EXISTS: 3;
      TYPE_INVALID_USER_AMOUNT: 4;
      TYPE_INVALID_SUBACCOUNT: 5;
      TYPE_INVALID_PRINCIPAL: 6;
    }

    export const Type: TypeMap;
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    OK = 1,
    ERR = 2,
  }
}

export class ListDirectParticipantsRequest extends jspb.Message {
  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): number;
  setLimit(value: number): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDirectParticipantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDirectParticipantsRequest): ListDirectParticipantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDirectParticipantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDirectParticipantsRequest;
  static deserializeBinaryFromReader(message: ListDirectParticipantsRequest, reader: jspb.BinaryReader): ListDirectParticipantsRequest;
}

export namespace ListDirectParticipantsRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class ListDirectParticipantsResponse extends jspb.Message {
  clearParticipantsList(): void;
  getParticipantsList(): Array<Participant>;
  setParticipantsList(value: Array<Participant>): void;
  addParticipants(value?: Participant, index?: number): Participant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDirectParticipantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDirectParticipantsResponse): ListDirectParticipantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDirectParticipantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDirectParticipantsResponse;
  static deserializeBinaryFromReader(message: ListDirectParticipantsResponse, reader: jspb.BinaryReader): ListDirectParticipantsResponse;
}

export namespace ListDirectParticipantsResponse {
  export type AsObject = {
    participantsList: Array<Participant.AsObject>,
  }
}

export class Participant extends jspb.Message {
  hasParticipantId(): boolean;
  clearParticipantId(): void;
  getParticipantId(): base_types_pb.PrincipalId | undefined;
  setParticipantId(value?: base_types_pb.PrincipalId): void;

  hasParticipation(): boolean;
  clearParticipation(): void;
  getParticipation(): BuyerState | undefined;
  setParticipation(value?: BuyerState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Participant.AsObject;
  static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Participant;
  static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
}

export namespace Participant {
  export type AsObject = {
    participantId?: base_types_pb.PrincipalId.AsObject,
    participation?: BuyerState.AsObject,
  }
}

export class GetSaleParametersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSaleParametersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSaleParametersRequest): GetSaleParametersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSaleParametersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSaleParametersRequest;
  static deserializeBinaryFromReader(message: GetSaleParametersRequest, reader: jspb.BinaryReader): GetSaleParametersRequest;
}

export namespace GetSaleParametersRequest {
  export type AsObject = {
  }
}

export class GetSaleParametersResponse extends jspb.Message {
  hasParams(): boolean;
  clearParams(): void;
  getParams(): Params | undefined;
  setParams(value?: Params): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSaleParametersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSaleParametersResponse): GetSaleParametersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSaleParametersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSaleParametersResponse;
  static deserializeBinaryFromReader(message: GetSaleParametersResponse, reader: jspb.BinaryReader): GetSaleParametersResponse;
}

export namespace GetSaleParametersResponse {
  export type AsObject = {
    params?: Params.AsObject,
  }
}

export class ListCommunityFundParticipantsRequest extends jspb.Message {
  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): number;
  setLimit(value: number): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommunityFundParticipantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommunityFundParticipantsRequest): ListCommunityFundParticipantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCommunityFundParticipantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommunityFundParticipantsRequest;
  static deserializeBinaryFromReader(message: ListCommunityFundParticipantsRequest, reader: jspb.BinaryReader): ListCommunityFundParticipantsRequest;
}

export namespace ListCommunityFundParticipantsRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class ListCommunityFundParticipantsResponse extends jspb.Message {
  clearCfParticipantsList(): void;
  getCfParticipantsList(): Array<CfParticipant>;
  setCfParticipantsList(value: Array<CfParticipant>): void;
  addCfParticipants(value?: CfParticipant, index?: number): CfParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommunityFundParticipantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommunityFundParticipantsResponse): ListCommunityFundParticipantsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCommunityFundParticipantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommunityFundParticipantsResponse;
  static deserializeBinaryFromReader(message: ListCommunityFundParticipantsResponse, reader: jspb.BinaryReader): ListCommunityFundParticipantsResponse;
}

export namespace ListCommunityFundParticipantsResponse {
  export type AsObject = {
    cfParticipantsList: Array<CfParticipant.AsObject>,
  }
}

export class ListSnsNeuronRecipesRequest extends jspb.Message {
  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): number;
  setLimit(value: number): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnsNeuronRecipesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnsNeuronRecipesRequest): ListSnsNeuronRecipesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSnsNeuronRecipesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnsNeuronRecipesRequest;
  static deserializeBinaryFromReader(message: ListSnsNeuronRecipesRequest, reader: jspb.BinaryReader): ListSnsNeuronRecipesRequest;
}

export namespace ListSnsNeuronRecipesRequest {
  export type AsObject = {
    limit: number,
    offset: number,
  }
}

export class ListSnsNeuronRecipesResponse extends jspb.Message {
  clearSnsNeuronRecipesList(): void;
  getSnsNeuronRecipesList(): Array<SnsNeuronRecipe>;
  setSnsNeuronRecipesList(value: Array<SnsNeuronRecipe>): void;
  addSnsNeuronRecipes(value?: SnsNeuronRecipe, index?: number): SnsNeuronRecipe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSnsNeuronRecipesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSnsNeuronRecipesResponse): ListSnsNeuronRecipesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListSnsNeuronRecipesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSnsNeuronRecipesResponse;
  static deserializeBinaryFromReader(message: ListSnsNeuronRecipesResponse, reader: jspb.BinaryReader): ListSnsNeuronRecipesResponse;
}

export namespace ListSnsNeuronRecipesResponse {
  export type AsObject = {
    snsNeuronRecipesList: Array<SnsNeuronRecipe.AsObject>,
  }
}

export class NotifyPaymentFailureRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyPaymentFailureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyPaymentFailureRequest): NotifyPaymentFailureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotifyPaymentFailureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyPaymentFailureRequest;
  static deserializeBinaryFromReader(message: NotifyPaymentFailureRequest, reader: jspb.BinaryReader): NotifyPaymentFailureRequest;
}

export namespace NotifyPaymentFailureRequest {
  export type AsObject = {
  }
}

export class NotifyPaymentFailureResponse extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyPaymentFailureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyPaymentFailureResponse): NotifyPaymentFailureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotifyPaymentFailureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyPaymentFailureResponse;
  static deserializeBinaryFromReader(message: NotifyPaymentFailureResponse, reader: jspb.BinaryReader): NotifyPaymentFailureResponse;
}

export namespace NotifyPaymentFailureResponse {
  export type AsObject = {
    ticket?: Ticket.AsObject,
  }
}

export interface LifecycleMap {
  LIFECYCLE_UNSPECIFIED: 0;
  LIFECYCLE_PENDING: 1;
  LIFECYCLE_ADOPTED: 5;
  LIFECYCLE_OPEN: 2;
  LIFECYCLE_COMMITTED: 3;
  LIFECYCLE_ABORTED: 4;
}

export const Lifecycle: LifecycleMap;

