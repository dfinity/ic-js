// package: ic_sns_swap.pb.v1
// file: sns_swap.proto

import * as jspb from "google-protobuf";

export class Init extends jspb.Message {
  getNnsGovernanceCanisterId(): string;
  setNnsGovernanceCanisterId(value: string): void;

  getSnsGovernanceCanisterId(): string;
  setSnsGovernanceCanisterId(value: string): void;

  getSnsLedgerCanisterId(): string;
  setSnsLedgerCanisterId(value: string): void;

  getIcpLedgerCanisterId(): string;
  setIcpLedgerCanisterId(value: string): void;

  getMaxIcpE8s(): number;
  setMaxIcpE8s(value: number): void;

  getMinParticipants(): number;
  setMinParticipants(value: number): void;

  getMinParticipantIcpE8s(): number;
  setMinParticipantIcpE8s(value: number): void;

  getMaxParticipantIcpE8s(): number;
  setMaxParticipantIcpE8s(value: number): void;

  getMinIcpE8s(): number;
  setMinIcpE8s(value: number): void;

  clearFallbackControllerPrincipalIdsList(): void;
  getFallbackControllerPrincipalIdsList(): Array<string>;
  setFallbackControllerPrincipalIdsList(value: Array<string>): void;
  addFallbackControllerPrincipalIds(value: string, index?: number): string;

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
    maxIcpE8s: number,
    minParticipants: number,
    minParticipantIcpE8s: number,
    maxParticipantIcpE8s: number,
    minIcpE8s: number,
    fallbackControllerPrincipalIdsList: Array<string>,
  }
}

export class BuyerState extends jspb.Message {
  getAmountIcpE8s(): number;
  setAmountIcpE8s(value: number): void;

  getAmountSnsE8s(): number;
  setAmountSnsE8s(value: number): void;

  getIcpDisbursing(): boolean;
  setIcpDisbursing(value: boolean): void;

  getSnsDisbursing(): boolean;
  setSnsDisbursing(value: boolean): void;

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
    amountIcpE8s: number,
    amountSnsE8s: number,
    icpDisbursing: boolean,
    snsDisbursing: boolean,
  }
}

export class State extends jspb.Message {
  getSnsTokenE8s(): number;
  setSnsTokenE8s(value: number): void;

  getBuyersMap(): jspb.Map<string, BuyerState>;
  clearBuyersMap(): void;
  getLifecycle(): LifecycleMap[keyof LifecycleMap];
  setLifecycle(value: LifecycleMap[keyof LifecycleMap]): void;

  hasOpenTimeWindow(): boolean;
  clearOpenTimeWindow(): void;
  getOpenTimeWindow(): TimeWindow | undefined;
  setOpenTimeWindow(value?: TimeWindow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): State.AsObject;
  static toObject(includeInstance: boolean, msg: State): State.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): State;
  static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
}

export namespace State {
  export type AsObject = {
    snsTokenE8s: number,
    buyersMap: Array<[string, BuyerState.AsObject]>,
    lifecycle: LifecycleMap[keyof LifecycleMap],
    openTimeWindow?: TimeWindow.AsObject,
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

export class Swap extends jspb.Message {
  hasInit(): boolean;
  clearInit(): void;
  getInit(): Init | undefined;
  setInit(value?: Init): void;

  hasState(): boolean;
  clearState(): void;
  getState(): State | undefined;
  setState(value?: State): void;

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
    init?: Init.AsObject,
    state?: State.AsObject,
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

export class DerivedState extends jspb.Message {
  getBuyerTotalIcpE8s(): number;
  setBuyerTotalIcpE8s(value: number): void;

  getSnsTokensPerIcp(): number;
  setSnsTokensPerIcp(value: number): void;

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
    snsTokensPerIcp: number,
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

export class RefreshSnsTokensRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshSnsTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshSnsTokensRequest): RefreshSnsTokensRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshSnsTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshSnsTokensRequest;
  static deserializeBinaryFromReader(message: RefreshSnsTokensRequest, reader: jspb.BinaryReader): RefreshSnsTokensRequest;
}

export namespace RefreshSnsTokensRequest {
  export type AsObject = {
  }
}

export class RefreshSnsTokensResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshSnsTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshSnsTokensResponse): RefreshSnsTokensResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshSnsTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshSnsTokensResponse;
  static deserializeBinaryFromReader(message: RefreshSnsTokensResponse, reader: jspb.BinaryReader): RefreshSnsTokensResponse;
}

export namespace RefreshSnsTokensResponse {
  export type AsObject = {
  }
}

export class RefreshBuyerTokensRequest extends jspb.Message {
  getBuyer(): string;
  setBuyer(value: string): void;

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
  }
}

export class RefreshBuyerTokensResponse extends jspb.Message {
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
  hasSweepIcp(): boolean;
  clearSweepIcp(): void;
  getSweepIcp(): SweepResult | undefined;
  setSweepIcp(value?: SweepResult): void;

  hasSweepSns(): boolean;
  clearSweepSns(): void;
  getSweepSns(): SweepResult | undefined;
  setSweepSns(value?: SweepResult): void;

  hasCreateNeuron(): boolean;
  clearCreateNeuron(): void;
  getCreateNeuron(): SweepResult | undefined;
  setCreateNeuron(value?: SweepResult): void;

  hasSnsGovernanceNormalModeEnabled(): boolean;
  clearSnsGovernanceNormalModeEnabled(): void;
  getSnsGovernanceNormalModeEnabled(): SetModeCallResult | undefined;
  setSnsGovernanceNormalModeEnabled(value?: SetModeCallResult): void;

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
    sweepIcp?: SweepResult.AsObject,
    sweepSns?: SweepResult.AsObject,
    createNeuron?: SweepResult.AsObject,
    snsGovernanceNormalModeEnabled?: SetModeCallResult.AsObject,
  }
}

export class SweepResult extends jspb.Message {
  getSuccess(): number;
  setSuccess(value: number): void;

  getFailure(): number;
  setFailure(value: number): void;

  getSkipped(): number;
  setSkipped(value: number): void;

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
  }
}

export class SetModeCallResult extends jspb.Message {
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
    err?: CanisterCallError.AsObject,
  }

  export enum PossibilityCase {
    POSSIBILITY_NOT_SET = 0,
    ERR = 2,
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
  getIcpE8s(): number;
  setIcpE8s(value: number): void;

  getFeeOverrideE8s(): number;
  setFeeOverrideE8s(value: number): void;

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
    icpE8s: number,
    feeOverrideE8s: number,
  }
}

export class ErrorRefundIcpResponse extends jspb.Message {
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
  }
}

export interface LifecycleMap {
  LIFECYCLE_UNSPECIFIED: 0;
  LIFECYCLE_PENDING: 1;
  LIFECYCLE_OPEN: 2;
  LIFECYCLE_COMMITTED: 3;
  LIFECYCLE_ABORTED: 4;
}

export const Lifecycle: LifecycleMap;

