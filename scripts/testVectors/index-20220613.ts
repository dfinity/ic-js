import {
  AnonymousIdentity,
  CallRequest,
  Cbor,
  Expiry,
  ReadRequest,
  SubmitRequestType,
} from "@dfinity/agent";
import { IDL } from "@dfinity/candid";
import { Principal } from "@dfinity/principal";
import { writeFileSync } from "fs";
import { NeuronId as PbNeuronId } from "../../proto/base_types_pb";
import {
  ListNeurons as PbListNeurons,
  ManageNeuron as PbManageNeuron,
  Topic,
} from "../../proto/governance_pb";
import {
  fromListNeurons,
  toAddHotkeyRequest,
  toDisburseNeuronRequest,
  toIncreaseDissolveDelayRequest,
  toJoinCommunityFundRequest,
  toManageNeuronsFollowRequest,
  toMergeMaturityRequest,
  toRemoveHotkeyRequest,
  toSpawnNeuronRequest,
  toStartDissolvingRequest,
  toStopDissolvingRequest,
} from "../../src/canisters/governance/request.converters";
import {
  fromAddHotKeyRequest,
  fromDisburseRequest,
  fromFollowRequest,
  fromIncreaseDissolveDelayRequest,
  fromMergeMaturityRequest,
  fromRemoveHotKeyRequest,
  fromSpawnRequest,
  fromStartDissolvingRequest,
  fromStopDissolvingRequest,
} from "../../src/canisters/governance/request.proto.converters";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "../../src/constants/canister_ids";
import { ListNeuronsFn, ManageNeuronFn } from "./candid";

/**
 * Changes needed to match the `arg` inside the blob_proto with the Hardware Wallet CLI blob.
 *
 * In this file
 * - Change `sender` in the `createCallRequest` to the one commented.
 *
 * In the hardware-wallet-cli
 * - `disableNonce: true` in `getAgent` when creating the `new HttpAgent(...)`.
 * - `console.log(Buffer.from(blob).toString("hex"));` inside the `sign` method in LedgerIdentity
 *
 * Go to cbor.me and decode both blobs.
 * The `arg` property should match.
 */

/**
 * Extra change to check for `candid`.
 *
 * In the hardware-wallet-cli
 * - `hardwareWallet: false` in the method.
 */

function _prepareCborForLedger(
  request: ReadRequest | CallRequest
): ArrayBuffer {
  return Cbor.encode({ content: request });
}

// Default delta for ingress expiry is 5 minutes.
const DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS = 5 * 60 * 1000;
const mockNeuronId = BigInt(15374508381553347371);
const mockNeuronId2 = BigInt(8836564053576662908);
const mockAccountId =
  "d4685b31b51450508aff0331584df7692a84467b680326f5c5f7d30ae711682f";
const mockPrincipal = Principal.fromText(
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe"
);

const createCallRequest = ({
  arg,
  methodName,
}: {
  arg: ArrayBuffer;
  methodName: string;
}): CallRequest => ({
  request_type: SubmitRequestType.Call,
  canister_id: MAINNET_GOVERNANCE_CANISTER_ID,
  method_name: methodName,
  arg,
  sender: new AnonymousIdentity().getPrincipal(),
  // sender: Principal.fromText(
  //   "q2fbu-chrgb-o7dmd-u5cfn-xgo4f-5lpcl-ldeca-wl4sn-5j7gb-ltm63-hqe"
  // ),
  ingress_expiry: new Expiry(DEFAULT_INGRESS_EXPIRY_DELTA_IN_MSECS),
});

const createBlob = ({
  arg,
  methodName,
}: {
  arg: ArrayBuffer;
  methodName: string;
}): string => {
  const callRequestCandid = createCallRequest({
    arg,
    methodName,
  });
  const candidBlob = _prepareCborForLedger(callRequestCandid);
  return Buffer.from(candidBlob).toString("hex");
};

const createListNeuronsVector = () => {
  // CANDID
  const rawRequestBody = fromListNeurons();
  // PROTO
  const request = new PbListNeurons();
  request.setIncludeNeuronsReadableByCaller(true);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ListNeuronsFn.argTypes, [rawRequestBody]),
      methodName: "list_neurons",
    }),
    blob_proto: createBlob({
      arg: request.serializeBinary(),
      methodName: "list_neurons_pb",
    }),
    name: "List Neurons",
    candid_request: rawRequestBody,
  };
};

const createMergeMaturityVector = () => {
  const params = {
    neuronId: mockNeuronId,
    percentageToMerge: 100,
  };
  const rawRequestBody = toMergeMaturityRequest(params);
  const rawRequestPb = fromMergeMaturityRequest(params);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Merge Maturity",
    candid_request: rawRequestBody,
  };
};

const createIncreaseDissolveDelayVector = () => {
  const params = {
    neuronId: mockNeuronId,
    additionalDissolveDelaySeconds: 3600,
  };
  const rawRequestBody = toIncreaseDissolveDelayRequest(params);
  const rawRequestPb = fromIncreaseDissolveDelayRequest(params);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Increase Dissolve Delay",
    candid_request: rawRequestBody,
  };
};

const createDisburseVector = () => {
  const params = {
    neuronId: mockNeuronId,
    toAccountId: mockAccountId,
  };
  const rawRequestBody = toDisburseNeuronRequest(params);
  const rawRequestPb = fromDisburseRequest(params);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Disburse Neuron",
    candid_request: rawRequestBody,
  };
};

const createSpawnVector = () => {
  const params = {
    neuronId: mockNeuronId,
    newController: undefined,
  };
  const rawRequestBody = toSpawnNeuronRequest(params);
  const rawRequestPb = fromSpawnRequest(params);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Spawn Neuron",
    candid_request: rawRequestBody,
  };
};

const createStopDissolvingVector = () => {
  const params = mockNeuronId;
  const rawRequestBody = toStopDissolvingRequest(params);
  const rawRequestPb = fromStopDissolvingRequest(params);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Stop Dissolving",
    candid_request: rawRequestBody,
  };
};

const createStartDissolvingVector = () => {
  const params = mockNeuronId;
  const rawRequestBody = toStartDissolvingRequest(params);
  const rawRequestPb = fromStartDissolvingRequest(params);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Start Dissolving",
    candid_request: rawRequestBody,
  };
};

const createRemoveHotkeyVector = () => {
  const params = {
    neuronId: mockNeuronId,
    principal: mockPrincipal,
  };
  const rawRequestBody = toRemoveHotkeyRequest(params);
  const rawRequestPb = fromRemoveHotKeyRequest({
    neuronId: mockNeuronId,
    principal: mockPrincipal.toText(),
  });
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Remove Hotkey",
    candid_request: rawRequestBody,
  };
};

const createAddHotkeyVector = () => {
  const params = {
    neuronId: mockNeuronId,
    principal: mockPrincipal,
  };
  const rawRequestBody = toAddHotkeyRequest(params);
  const rawRequestPb = fromAddHotKeyRequest({
    neuronId: mockNeuronId,
    principal: mockPrincipal.toText(),
  });
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Add Hotkey",
    candid_request: rawRequestBody,
  };
};

const createJoinCommunityFundVector = () => {
  const params = mockNeuronId;
  const rawRequestBody = toJoinCommunityFundRequest(params);
  const configure = new PbManageNeuron.Configure();
  configure.setJoinCommunityFund(new PbManageNeuron.JoinCommunityFund());
  const rawRequestPb = new PbManageNeuron();
  rawRequestPb.setConfigure(configure);
  const neuronId = new PbNeuronId();
  neuronId.setId(mockNeuronId.toString());
  rawRequestPb.setNeuronId(neuronId);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Join Community Fund",
    candid_request: rawRequestBody,
  };
};

const createEditFolloweesVector = () => {
  const params = {
    neuronId: mockNeuronId,
    topic: Topic.TOPIC_EXCHANGE_RATE,
    followees: [mockNeuronId2],
  };
  const rawRequestBody = toManageNeuronsFollowRequest(params);
  const rawRequestPb = fromFollowRequest(params);
  return {
    blob_candid: createBlob({
      arg: IDL.encode(ManageNeuronFn.argTypes, [rawRequestBody]),
      methodName: "manage_neuron",
    }),
    blob_proto: createBlob({
      arg: rawRequestPb.serializeBinary(),
      methodName: "manage_neuron_pb",
    }),
    name: "Follow",
    candid_request: rawRequestBody,
  };
};

const main = () => {
  try {
    const vectors = [
      createListNeuronsVector(),
      createMergeMaturityVector(),
      createIncreaseDissolveDelayVector(),
      createDisburseVector(),
      createSpawnVector(),
      createStopDissolvingVector(),
      createStartDissolvingVector(),
      createRemoveHotkeyVector(),
      createAddHotkeyVector(),
      createJoinCommunityFundVector(),
      createEditFolloweesVector(),
    ];

    writeFileSync(
      "test-vectors-20220613.json",
      JSON.stringify(vectors, (key, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        if (value instanceof Principal) {
          return value.toText();
        }
        return value;
      })
    );
    console.log("File created successfully");
  } catch (error) {
    console.log("There was an error");
    console.log(error);
  }
};

main();
