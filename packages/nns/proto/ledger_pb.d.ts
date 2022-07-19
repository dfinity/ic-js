// package: ic_ledger.pb.v1
// file: ledger.proto

import * as jspb from "google-protobuf";
import * as base_types_pb from "./base_types_pb";

export class LedgerInit extends jspb.Message {
  hasMintingAccount(): boolean;
  clearMintingAccount(): void;
  getMintingAccount(): AccountIdentifier | undefined;
  setMintingAccount(value?: AccountIdentifier): void;

  clearInitialValuesList(): void;
  getInitialValuesList(): Array<Account>;
  setInitialValuesList(value: Array<Account>): void;
  addInitialValues(value?: Account, index?: number): Account;

  hasArchiveCanister(): boolean;
  clearArchiveCanister(): void;
  getArchiveCanister(): base_types_pb.PrincipalId | undefined;
  setArchiveCanister(value?: base_types_pb.PrincipalId): void;

  getMaxMessageSizeBytes(): number;
  setMaxMessageSizeBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerInit.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerInit): LedgerInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerInit;
  static deserializeBinaryFromReader(message: LedgerInit, reader: jspb.BinaryReader): LedgerInit;
}

export namespace LedgerInit {
  export type AsObject = {
    mintingAccount?: AccountIdentifier.AsObject,
    initialValuesList: Array<Account.AsObject>,
    archiveCanister?: base_types_pb.PrincipalId.AsObject,
    maxMessageSizeBytes: number,
  }
}

export class LedgerUpgrade extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerUpgrade.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerUpgrade): LedgerUpgrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerUpgrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerUpgrade;
  static deserializeBinaryFromReader(message: LedgerUpgrade, reader: jspb.BinaryReader): LedgerUpgrade;
}

export namespace LedgerUpgrade {
  export type AsObject = {
  }
}

export class SendRequest extends jspb.Message {
  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): Memo | undefined;
  setMemo(value?: Memo): void;

  hasPayment(): boolean;
  clearPayment(): void;
  getPayment(): Payment | undefined;
  setPayment(value?: Payment): void;

  hasMaxFee(): boolean;
  clearMaxFee(): void;
  getMaxFee(): Tokens | undefined;
  setMaxFee(value?: Tokens): void;

  hasFromSubaccount(): boolean;
  clearFromSubaccount(): void;
  getFromSubaccount(): Subaccount | undefined;
  setFromSubaccount(value?: Subaccount): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): AccountIdentifier | undefined;
  setTo(value?: AccountIdentifier): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): BlockHeight | undefined;
  setCreatedAt(value?: BlockHeight): void;

  hasCreatedAtTime(): boolean;
  clearCreatedAtTime(): void;
  getCreatedAtTime(): TimeStamp | undefined;
  setCreatedAtTime(value?: TimeStamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendRequest): SendRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendRequest;
  static deserializeBinaryFromReader(message: SendRequest, reader: jspb.BinaryReader): SendRequest;
}

export namespace SendRequest {
  export type AsObject = {
    memo?: Memo.AsObject,
    payment?: Payment.AsObject,
    maxFee?: Tokens.AsObject,
    fromSubaccount?: Subaccount.AsObject,
    to?: AccountIdentifier.AsObject,
    createdAt?: BlockHeight.AsObject,
    createdAtTime?: TimeStamp.AsObject,
  }
}

export class SendResponse extends jspb.Message {
  hasResultingHeight(): boolean;
  clearResultingHeight(): void;
  getResultingHeight(): BlockHeight | undefined;
  setResultingHeight(value?: BlockHeight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendResponse): SendResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendResponse;
  static deserializeBinaryFromReader(message: SendResponse, reader: jspb.BinaryReader): SendResponse;
}

export namespace SendResponse {
  export type AsObject = {
    resultingHeight?: BlockHeight.AsObject,
  }
}

export class NotifyRequest extends jspb.Message {
  hasBlockHeight(): boolean;
  clearBlockHeight(): void;
  getBlockHeight(): BlockHeight | undefined;
  setBlockHeight(value?: BlockHeight): void;

  hasMaxFee(): boolean;
  clearMaxFee(): void;
  getMaxFee(): Tokens | undefined;
  setMaxFee(value?: Tokens): void;

  hasFromSubaccount(): boolean;
  clearFromSubaccount(): void;
  getFromSubaccount(): Subaccount | undefined;
  setFromSubaccount(value?: Subaccount): void;

  hasToCanister(): boolean;
  clearToCanister(): void;
  getToCanister(): base_types_pb.PrincipalId | undefined;
  setToCanister(value?: base_types_pb.PrincipalId): void;

  hasToSubaccount(): boolean;
  clearToSubaccount(): void;
  getToSubaccount(): Subaccount | undefined;
  setToSubaccount(value?: Subaccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyRequest): NotifyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyRequest;
  static deserializeBinaryFromReader(message: NotifyRequest, reader: jspb.BinaryReader): NotifyRequest;
}

export namespace NotifyRequest {
  export type AsObject = {
    blockHeight?: BlockHeight.AsObject,
    maxFee?: Tokens.AsObject,
    fromSubaccount?: Subaccount.AsObject,
    toCanister?: base_types_pb.PrincipalId.AsObject,
    toSubaccount?: Subaccount.AsObject,
  }
}

export class NotifyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyResponse): NotifyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyResponse;
  static deserializeBinaryFromReader(message: NotifyResponse, reader: jspb.BinaryReader): NotifyResponse;
}

export namespace NotifyResponse {
  export type AsObject = {
  }
}

export class TransactionNotificationRequest extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): base_types_pb.PrincipalId | undefined;
  setFrom(value?: base_types_pb.PrincipalId): void;

  hasFromSubaccount(): boolean;
  clearFromSubaccount(): void;
  getFromSubaccount(): Subaccount | undefined;
  setFromSubaccount(value?: Subaccount): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): base_types_pb.PrincipalId | undefined;
  setTo(value?: base_types_pb.PrincipalId): void;

  hasToSubaccount(): boolean;
  clearToSubaccount(): void;
  getToSubaccount(): Subaccount | undefined;
  setToSubaccount(value?: Subaccount): void;

  hasBlockHeight(): boolean;
  clearBlockHeight(): void;
  getBlockHeight(): BlockHeight | undefined;
  setBlockHeight(value?: BlockHeight): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): Tokens | undefined;
  setAmount(value?: Tokens): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): Memo | undefined;
  setMemo(value?: Memo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionNotificationRequest): TransactionNotificationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionNotificationRequest;
  static deserializeBinaryFromReader(message: TransactionNotificationRequest, reader: jspb.BinaryReader): TransactionNotificationRequest;
}

export namespace TransactionNotificationRequest {
  export type AsObject = {
    from?: base_types_pb.PrincipalId.AsObject,
    fromSubaccount?: Subaccount.AsObject,
    to?: base_types_pb.PrincipalId.AsObject,
    toSubaccount?: Subaccount.AsObject,
    blockHeight?: BlockHeight.AsObject,
    amount?: Tokens.AsObject,
    memo?: Memo.AsObject,
  }
}

export class TransactionNotificationResponse extends jspb.Message {
  getResponse(): Uint8Array | string;
  getResponse_asU8(): Uint8Array;
  getResponse_asB64(): string;
  setResponse(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionNotificationResponse): TransactionNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionNotificationResponse;
  static deserializeBinaryFromReader(message: TransactionNotificationResponse, reader: jspb.BinaryReader): TransactionNotificationResponse;
}

export namespace TransactionNotificationResponse {
  export type AsObject = {
    response: Uint8Array | string,
  }
}

export class CyclesNotificationResponse extends jspb.Message {
  hasCreatedCanisterId(): boolean;
  clearCreatedCanisterId(): void;
  getCreatedCanisterId(): base_types_pb.PrincipalId | undefined;
  setCreatedCanisterId(value?: base_types_pb.PrincipalId): void;

  hasRefund(): boolean;
  clearRefund(): void;
  getRefund(): Refund | undefined;
  setRefund(value?: Refund): void;

  hasToppedUp(): boolean;
  clearToppedUp(): void;
  getToppedUp(): ToppedUp | undefined;
  setToppedUp(value?: ToppedUp): void;

  getResponseCase(): CyclesNotificationResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CyclesNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CyclesNotificationResponse): CyclesNotificationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CyclesNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CyclesNotificationResponse;
  static deserializeBinaryFromReader(message: CyclesNotificationResponse, reader: jspb.BinaryReader): CyclesNotificationResponse;
}

export namespace CyclesNotificationResponse {
  export type AsObject = {
    createdCanisterId?: base_types_pb.PrincipalId.AsObject,
    refund?: Refund.AsObject,
    toppedUp?: ToppedUp.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    CREATED_CANISTER_ID = 1,
    REFUND = 2,
    TOPPED_UP = 3,
  }
}

export class AccountBalanceRequest extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): AccountIdentifier | undefined;
  setAccount(value?: AccountIdentifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBalanceRequest): AccountBalanceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBalanceRequest;
  static deserializeBinaryFromReader(message: AccountBalanceRequest, reader: jspb.BinaryReader): AccountBalanceRequest;
}

export namespace AccountBalanceRequest {
  export type AsObject = {
    account?: AccountIdentifier.AsObject,
  }
}

export class AccountBalanceResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): Tokens | undefined;
  setBalance(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBalanceResponse): AccountBalanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBalanceResponse;
  static deserializeBinaryFromReader(message: AccountBalanceResponse, reader: jspb.BinaryReader): AccountBalanceResponse;
}

export namespace AccountBalanceResponse {
  export type AsObject = {
    balance?: Tokens.AsObject,
  }
}

export class TipOfChainRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TipOfChainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TipOfChainRequest): TipOfChainRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TipOfChainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TipOfChainRequest;
  static deserializeBinaryFromReader(message: TipOfChainRequest, reader: jspb.BinaryReader): TipOfChainRequest;
}

export namespace TipOfChainRequest {
  export type AsObject = {
  }
}

export class TipOfChainResponse extends jspb.Message {
  hasCertification(): boolean;
  clearCertification(): void;
  getCertification(): Certification | undefined;
  setCertification(value?: Certification): void;

  hasChainLength(): boolean;
  clearChainLength(): void;
  getChainLength(): BlockHeight | undefined;
  setChainLength(value?: BlockHeight): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TipOfChainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TipOfChainResponse): TipOfChainResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TipOfChainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TipOfChainResponse;
  static deserializeBinaryFromReader(message: TipOfChainResponse, reader: jspb.BinaryReader): TipOfChainResponse;
}

export namespace TipOfChainResponse {
  export type AsObject = {
    certification?: Certification.AsObject,
    chainLength?: BlockHeight.AsObject,
  }
}

export class TotalSupplyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TotalSupplyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TotalSupplyRequest): TotalSupplyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TotalSupplyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TotalSupplyRequest;
  static deserializeBinaryFromReader(message: TotalSupplyRequest, reader: jspb.BinaryReader): TotalSupplyRequest;
}

export namespace TotalSupplyRequest {
  export type AsObject = {
  }
}

export class TotalSupplyResponse extends jspb.Message {
  hasTotalSupply(): boolean;
  clearTotalSupply(): void;
  getTotalSupply(): Tokens | undefined;
  setTotalSupply(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TotalSupplyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TotalSupplyResponse): TotalSupplyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TotalSupplyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TotalSupplyResponse;
  static deserializeBinaryFromReader(message: TotalSupplyResponse, reader: jspb.BinaryReader): TotalSupplyResponse;
}

export namespace TotalSupplyResponse {
  export type AsObject = {
    totalSupply?: Tokens.AsObject,
  }
}

export class LedgerArchiveRequest extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): TimeStamp | undefined;
  setTimestamp(value?: TimeStamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerArchiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerArchiveRequest): LedgerArchiveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerArchiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerArchiveRequest;
  static deserializeBinaryFromReader(message: LedgerArchiveRequest, reader: jspb.BinaryReader): LedgerArchiveRequest;
}

export namespace LedgerArchiveRequest {
  export type AsObject = {
    timestamp?: TimeStamp.AsObject,
  }
}

export class BlockRequest extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRequest): BlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRequest;
  static deserializeBinaryFromReader(message: BlockRequest, reader: jspb.BinaryReader): BlockRequest;
}

export namespace BlockRequest {
  export type AsObject = {
    blockHeight: number,
  }
}

export class EncodedBlock extends jspb.Message {
  getBlock(): Uint8Array | string;
  getBlock_asU8(): Uint8Array;
  getBlock_asB64(): string;
  setBlock(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncodedBlock.AsObject;
  static toObject(includeInstance: boolean, msg: EncodedBlock): EncodedBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncodedBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncodedBlock;
  static deserializeBinaryFromReader(message: EncodedBlock, reader: jspb.BinaryReader): EncodedBlock;
}

export namespace EncodedBlock {
  export type AsObject = {
    block: Uint8Array | string,
  }
}

export class BlockResponse extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): EncodedBlock | undefined;
  setBlock(value?: EncodedBlock): void;

  hasCanisterId(): boolean;
  clearCanisterId(): void;
  getCanisterId(): base_types_pb.PrincipalId | undefined;
  setCanisterId(value?: base_types_pb.PrincipalId): void;

  getBlockContentCase(): BlockResponse.BlockContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockResponse;
  static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
  export type AsObject = {
    block?: EncodedBlock.AsObject,
    canisterId?: base_types_pb.PrincipalId.AsObject,
  }

  export enum BlockContentCase {
    BLOCK_CONTENT_NOT_SET = 0,
    BLOCK = 1,
    CANISTER_ID = 2,
  }
}

export class GetBlocksRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksRequest): GetBlocksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksRequest;
  static deserializeBinaryFromReader(message: GetBlocksRequest, reader: jspb.BinaryReader): GetBlocksRequest;
}

export namespace GetBlocksRequest {
  export type AsObject = {
    start: number,
    length: number,
  }
}

export class Refund extends jspb.Message {
  hasRefund(): boolean;
  clearRefund(): void;
  getRefund(): BlockHeight | undefined;
  setRefund(value?: BlockHeight): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Refund.AsObject;
  static toObject(includeInstance: boolean, msg: Refund): Refund.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Refund, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Refund;
  static deserializeBinaryFromReader(message: Refund, reader: jspb.BinaryReader): Refund;
}

export namespace Refund {
  export type AsObject = {
    refund?: BlockHeight.AsObject,
    error: string,
  }
}

export class ToppedUp extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToppedUp.AsObject;
  static toObject(includeInstance: boolean, msg: ToppedUp): ToppedUp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToppedUp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToppedUp;
  static deserializeBinaryFromReader(message: ToppedUp, reader: jspb.BinaryReader): ToppedUp;
}

export namespace ToppedUp {
  export type AsObject = {
  }
}

export class EncodedBlocks extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<EncodedBlock>;
  setBlocksList(value: Array<EncodedBlock>): void;
  addBlocks(value?: EncodedBlock, index?: number): EncodedBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncodedBlocks.AsObject;
  static toObject(includeInstance: boolean, msg: EncodedBlocks): EncodedBlocks.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncodedBlocks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncodedBlocks;
  static deserializeBinaryFromReader(message: EncodedBlocks, reader: jspb.BinaryReader): EncodedBlocks;
}

export namespace EncodedBlocks {
  export type AsObject = {
    blocksList: Array<EncodedBlock.AsObject>,
  }
}

export class GetBlocksResponse extends jspb.Message {
  hasBlocks(): boolean;
  clearBlocks(): void;
  getBlocks(): EncodedBlocks | undefined;
  setBlocks(value?: EncodedBlocks): void;

  hasError(): boolean;
  clearError(): void;
  getError(): string;
  setError(value: string): void;

  getGetBlocksContentCase(): GetBlocksResponse.GetBlocksContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlocksResponse): GetBlocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlocksResponse;
  static deserializeBinaryFromReader(message: GetBlocksResponse, reader: jspb.BinaryReader): GetBlocksResponse;
}

export namespace GetBlocksResponse {
  export type AsObject = {
    blocks?: EncodedBlocks.AsObject,
    error: string,
  }

  export enum GetBlocksContentCase {
    GET_BLOCKS_CONTENT_NOT_SET = 0,
    BLOCKS = 1,
    ERROR = 2,
  }
}

export class IterBlocksRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): void;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IterBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IterBlocksRequest): IterBlocksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IterBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IterBlocksRequest;
  static deserializeBinaryFromReader(message: IterBlocksRequest, reader: jspb.BinaryReader): IterBlocksRequest;
}

export namespace IterBlocksRequest {
  export type AsObject = {
    start: number,
    length: number,
  }
}

export class IterBlocksResponse extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<EncodedBlock>;
  setBlocksList(value: Array<EncodedBlock>): void;
  addBlocks(value?: EncodedBlock, index?: number): EncodedBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IterBlocksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IterBlocksResponse): IterBlocksResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IterBlocksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IterBlocksResponse;
  static deserializeBinaryFromReader(message: IterBlocksResponse, reader: jspb.BinaryReader): IterBlocksResponse;
}

export namespace IterBlocksResponse {
  export type AsObject = {
    blocksList: Array<EncodedBlock.AsObject>,
  }
}

export class ArchiveIndexEntry extends jspb.Message {
  getHeightFrom(): number;
  setHeightFrom(value: number): void;

  getHeightTo(): number;
  setHeightTo(value: number): void;

  hasCanisterId(): boolean;
  clearCanisterId(): void;
  getCanisterId(): base_types_pb.PrincipalId | undefined;
  setCanisterId(value?: base_types_pb.PrincipalId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveIndexEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveIndexEntry): ArchiveIndexEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveIndexEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveIndexEntry;
  static deserializeBinaryFromReader(message: ArchiveIndexEntry, reader: jspb.BinaryReader): ArchiveIndexEntry;
}

export namespace ArchiveIndexEntry {
  export type AsObject = {
    heightFrom: number,
    heightTo: number,
    canisterId?: base_types_pb.PrincipalId.AsObject,
  }
}

export class ArchiveIndexResponse extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<ArchiveIndexEntry>;
  setEntriesList(value: Array<ArchiveIndexEntry>): void;
  addEntries(value?: ArchiveIndexEntry, index?: number): ArchiveIndexEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveIndexResponse): ArchiveIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveIndexResponse;
  static deserializeBinaryFromReader(message: ArchiveIndexResponse, reader: jspb.BinaryReader): ArchiveIndexResponse;
}

export namespace ArchiveIndexResponse {
  export type AsObject = {
    entriesList: Array<ArchiveIndexEntry.AsObject>,
  }
}

export class ArchiveInit extends jspb.Message {
  getNodeMaxMemorySizeBytes(): number;
  setNodeMaxMemorySizeBytes(value: number): void;

  getMaxMessageSizeBytes(): number;
  setMaxMessageSizeBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveInit.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveInit): ArchiveInit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveInit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveInit;
  static deserializeBinaryFromReader(message: ArchiveInit, reader: jspb.BinaryReader): ArchiveInit;
}

export namespace ArchiveInit {
  export type AsObject = {
    nodeMaxMemorySizeBytes: number,
    maxMessageSizeBytes: number,
  }
}

export class ArchiveAddRequest extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveAddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveAddRequest): ArchiveAddRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveAddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveAddRequest;
  static deserializeBinaryFromReader(message: ArchiveAddRequest, reader: jspb.BinaryReader): ArchiveAddRequest;
}

export namespace ArchiveAddRequest {
  export type AsObject = {
    blocksList: Array<Block.AsObject>,
  }
}

export class ArchiveAddResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveAddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveAddResponse): ArchiveAddResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArchiveAddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveAddResponse;
  static deserializeBinaryFromReader(message: ArchiveAddResponse, reader: jspb.BinaryReader): ArchiveAddResponse;
}

export namespace ArchiveAddResponse {
  export type AsObject = {
  }
}

export class GetNodesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodesRequest): GetNodesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodesRequest;
  static deserializeBinaryFromReader(message: GetNodesRequest, reader: jspb.BinaryReader): GetNodesRequest;
}

export namespace GetNodesRequest {
  export type AsObject = {
  }
}

export class GetNodesResponse extends jspb.Message {
  clearNodesList(): void;
  getNodesList(): Array<base_types_pb.PrincipalId>;
  setNodesList(value: Array<base_types_pb.PrincipalId>): void;
  addNodes(value?: base_types_pb.PrincipalId, index?: number): base_types_pb.PrincipalId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNodesResponse): GetNodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNodesResponse;
  static deserializeBinaryFromReader(message: GetNodesResponse, reader: jspb.BinaryReader): GetNodesResponse;
}

export namespace GetNodesResponse {
  export type AsObject = {
    nodesList: Array<base_types_pb.PrincipalId.AsObject>,
  }
}

export class Tokens extends jspb.Message {
  getE8s(): number;
  setE8s(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tokens.AsObject;
  static toObject(includeInstance: boolean, msg: Tokens): Tokens.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tokens;
  static deserializeBinaryFromReader(message: Tokens, reader: jspb.BinaryReader): Tokens;
}

export namespace Tokens {
  export type AsObject = {
    e8s: number,
  }
}

export class Payment extends jspb.Message {
  hasReceiverGets(): boolean;
  clearReceiverGets(): void;
  getReceiverGets(): Tokens | undefined;
  setReceiverGets(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payment.AsObject;
  static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payment;
  static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
}

export namespace Payment {
  export type AsObject = {
    receiverGets?: Tokens.AsObject,
  }
}

export class BlockHeight extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeight.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeight): BlockHeight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockHeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeight;
  static deserializeBinaryFromReader(message: BlockHeight, reader: jspb.BinaryReader): BlockHeight;
}

export namespace BlockHeight {
  export type AsObject = {
    height: number,
  }
}

export class Block extends jspb.Message {
  hasParentHash(): boolean;
  clearParentHash(): void;
  getParentHash(): Hash | undefined;
  setParentHash(value?: Hash): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): TimeStamp | undefined;
  setTimestamp(value?: TimeStamp): void;

  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    parentHash?: Hash.AsObject,
    timestamp?: TimeStamp.AsObject,
    transaction?: Transaction.AsObject,
  }
}

export class Hash extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hash.AsObject;
  static toObject(includeInstance: boolean, msg: Hash): Hash.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hash;
  static deserializeBinaryFromReader(message: Hash, reader: jspb.BinaryReader): Hash;
}

export namespace Hash {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class Account extends jspb.Message {
  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): AccountIdentifier | undefined;
  setIdentifier(value?: AccountIdentifier): void;

  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): Tokens | undefined;
  setBalance(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    identifier?: AccountIdentifier.AsObject,
    balance?: Tokens.AsObject,
  }
}

export class Transaction extends jspb.Message {
  hasBurn(): boolean;
  clearBurn(): void;
  getBurn(): Burn | undefined;
  setBurn(value?: Burn): void;

  hasMint(): boolean;
  clearMint(): void;
  getMint(): Mint | undefined;
  setMint(value?: Mint): void;

  hasSend(): boolean;
  clearSend(): void;
  getSend(): Send | undefined;
  setSend(value?: Send): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): Memo | undefined;
  setMemo(value?: Memo): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): BlockHeight | undefined;
  setCreatedAt(value?: BlockHeight): void;

  hasCreatedAtTime(): boolean;
  clearCreatedAtTime(): void;
  getCreatedAtTime(): TimeStamp | undefined;
  setCreatedAtTime(value?: TimeStamp): void;

  getTransferCase(): Transaction.TransferCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    burn?: Burn.AsObject,
    mint?: Mint.AsObject,
    send?: Send.AsObject,
    memo?: Memo.AsObject,
    createdAt?: BlockHeight.AsObject,
    createdAtTime?: TimeStamp.AsObject,
  }

  export enum TransferCase {
    TRANSFER_NOT_SET = 0,
    BURN = 1,
    MINT = 2,
    SEND = 3,
  }
}

export class Send extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): AccountIdentifier | undefined;
  setFrom(value?: AccountIdentifier): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): AccountIdentifier | undefined;
  setTo(value?: AccountIdentifier): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): Tokens | undefined;
  setAmount(value?: Tokens): void;

  hasMaxFee(): boolean;
  clearMaxFee(): void;
  getMaxFee(): Tokens | undefined;
  setMaxFee(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Send.AsObject;
  static toObject(includeInstance: boolean, msg: Send): Send.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Send, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Send;
  static deserializeBinaryFromReader(message: Send, reader: jspb.BinaryReader): Send;
}

export namespace Send {
  export type AsObject = {
    from?: AccountIdentifier.AsObject,
    to?: AccountIdentifier.AsObject,
    amount?: Tokens.AsObject,
    maxFee?: Tokens.AsObject,
  }
}

export class Mint extends jspb.Message {
  hasTo(): boolean;
  clearTo(): void;
  getTo(): AccountIdentifier | undefined;
  setTo(value?: AccountIdentifier): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): Tokens | undefined;
  setAmount(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mint.AsObject;
  static toObject(includeInstance: boolean, msg: Mint): Mint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mint;
  static deserializeBinaryFromReader(message: Mint, reader: jspb.BinaryReader): Mint;
}

export namespace Mint {
  export type AsObject = {
    to?: AccountIdentifier.AsObject,
    amount?: Tokens.AsObject,
  }
}

export class Burn extends jspb.Message {
  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): AccountIdentifier | undefined;
  setFrom(value?: AccountIdentifier): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): Tokens | undefined;
  setAmount(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Burn.AsObject;
  static toObject(includeInstance: boolean, msg: Burn): Burn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Burn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Burn;
  static deserializeBinaryFromReader(message: Burn, reader: jspb.BinaryReader): Burn;
}

export namespace Burn {
  export type AsObject = {
    from?: AccountIdentifier.AsObject,
    amount?: Tokens.AsObject,
  }
}

export class AccountIdentifier extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: AccountIdentifier): AccountIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountIdentifier;
  static deserializeBinaryFromReader(message: AccountIdentifier, reader: jspb.BinaryReader): AccountIdentifier;
}

export namespace AccountIdentifier {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class Subaccount extends jspb.Message {
  getSubAccount(): Uint8Array | string;
  getSubAccount_asU8(): Uint8Array;
  getSubAccount_asB64(): string;
  setSubAccount(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subaccount.AsObject;
  static toObject(includeInstance: boolean, msg: Subaccount): Subaccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subaccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subaccount;
  static deserializeBinaryFromReader(message: Subaccount, reader: jspb.BinaryReader): Subaccount;
}

export namespace Subaccount {
  export type AsObject = {
    subAccount: Uint8Array | string,
  }
}

export class Memo extends jspb.Message {
  getMemo(): number;
  setMemo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Memo.AsObject;
  static toObject(includeInstance: boolean, msg: Memo): Memo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Memo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Memo;
  static deserializeBinaryFromReader(message: Memo, reader: jspb.BinaryReader): Memo;
}

export namespace Memo {
  export type AsObject = {
    memo: number,
  }
}

export class TimeStamp extends jspb.Message {
  getTimestampNanos(): number;
  setTimestampNanos(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeStamp.AsObject;
  static toObject(includeInstance: boolean, msg: TimeStamp): TimeStamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeStamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeStamp;
  static deserializeBinaryFromReader(message: TimeStamp, reader: jspb.BinaryReader): TimeStamp;
}

export namespace TimeStamp {
  export type AsObject = {
    timestampNanos: number,
  }
}

export class Certification extends jspb.Message {
  getCertification(): Uint8Array | string;
  getCertification_asU8(): Uint8Array;
  getCertification_asB64(): string;
  setCertification(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Certification.AsObject;
  static toObject(includeInstance: boolean, msg: Certification): Certification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Certification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Certification;
  static deserializeBinaryFromReader(message: Certification, reader: jspb.BinaryReader): Certification;
}

export namespace Certification {
  export type AsObject = {
    certification: Uint8Array | string,
  }
}

export class TransferFeeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferFeeRequest): TransferFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferFeeRequest;
  static deserializeBinaryFromReader(message: TransferFeeRequest, reader: jspb.BinaryReader): TransferFeeRequest;
}

export namespace TransferFeeRequest {
  export type AsObject = {
  }
}

export class TransferFeeResponse extends jspb.Message {
  hasTransferFee(): boolean;
  clearTransferFee(): void;
  getTransferFee(): Tokens | undefined;
  setTransferFee(value?: Tokens): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransferFeeResponse): TransferFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferFeeResponse;
  static deserializeBinaryFromReader(message: TransferFeeResponse, reader: jspb.BinaryReader): TransferFeeResponse;
}

export namespace TransferFeeResponse {
  export type AsObject = {
    transferFee?: Tokens.AsObject,
  }
}

