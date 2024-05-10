// package: ic_nns_common.pb.v1
// file: nns_common.proto

import * as jspb from "google-protobuf";
import * as base_types_pb from "./base_types_pb";

export class NeuronId extends jspb.Message {
  getId(): number;
  setId(value: number): void;

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
    id: number,
  }
}

export class ProposalId extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalId.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalId): ProposalId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalId;
  static deserializeBinaryFromReader(message: ProposalId, reader: jspb.BinaryReader): ProposalId;
}

export namespace ProposalId {
  export type AsObject = {
    id: number,
  }
}

