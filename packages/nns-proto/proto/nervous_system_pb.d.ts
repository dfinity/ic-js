// package: ic_nervous_system.pb.v1
// file: nervous_system.proto

import * as jspb from "google-protobuf";
import * as base_types_pb from "./base_types_pb";

export class Duration extends jspb.Message {
  hasSeconds(): boolean;
  clearSeconds(): void;
  getSeconds(): number;
  setSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
  export type AsObject = {
    seconds: number,
  }
}

export class GlobalTimeOfDay extends jspb.Message {
  hasSecondsAfterUtcMidnight(): boolean;
  clearSecondsAfterUtcMidnight(): void;
  getSecondsAfterUtcMidnight(): number;
  setSecondsAfterUtcMidnight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalTimeOfDay.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalTimeOfDay): GlobalTimeOfDay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalTimeOfDay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalTimeOfDay;
  static deserializeBinaryFromReader(message: GlobalTimeOfDay, reader: jspb.BinaryReader): GlobalTimeOfDay;
}

export namespace GlobalTimeOfDay {
  export type AsObject = {
    secondsAfterUtcMidnight: number,
  }
}

export class Tokens extends jspb.Message {
  hasE8s(): boolean;
  clearE8s(): void;
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

export class Image extends jspb.Message {
  hasBase64Encoding(): boolean;
  clearBase64Encoding(): void;
  getBase64Encoding(): string;
  setBase64Encoding(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    base64Encoding: string,
  }
}

export class Percentage extends jspb.Message {
  hasBasisPoints(): boolean;
  clearBasisPoints(): void;
  getBasisPoints(): number;
  setBasisPoints(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Percentage.AsObject;
  static toObject(includeInstance: boolean, msg: Percentage): Percentage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Percentage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Percentage;
  static deserializeBinaryFromReader(message: Percentage, reader: jspb.BinaryReader): Percentage;
}

export namespace Percentage {
  export type AsObject = {
    basisPoints: number,
  }
}

export class Canister extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): base_types_pb.PrincipalId | undefined;
  setId(value?: base_types_pb.PrincipalId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Canister.AsObject;
  static toObject(includeInstance: boolean, msg: Canister): Canister.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Canister, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Canister;
  static deserializeBinaryFromReader(message: Canister, reader: jspb.BinaryReader): Canister;
}

export namespace Canister {
  export type AsObject = {
    id?: base_types_pb.PrincipalId.AsObject,
  }
}

export class Countries extends jspb.Message {
  clearIsoCodesList(): void;
  getIsoCodesList(): Array<string>;
  setIsoCodesList(value: Array<string>): void;
  addIsoCodes(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Countries.AsObject;
  static toObject(includeInstance: boolean, msg: Countries): Countries.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Countries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Countries;
  static deserializeBinaryFromReader(message: Countries, reader: jspb.BinaryReader): Countries;
}

export namespace Countries {
  export type AsObject = {
    isoCodesList: Array<string>,
  }
}

export class Decimal extends jspb.Message {
  hasHumanReadable(): boolean;
  clearHumanReadable(): void;
  getHumanReadable(): string;
  setHumanReadable(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decimal.AsObject;
  static toObject(includeInstance: boolean, msg: Decimal): Decimal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Decimal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decimal;
  static deserializeBinaryFromReader(message: Decimal, reader: jspb.BinaryReader): Decimal;
}

export namespace Decimal {
  export type AsObject = {
    humanReadable: string,
  }
}

