import { Cbor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { writeToJson } from "./utils";

const consentMessageCertificate =
  "d9d9f7a364747265658301830182045820e7819691af7d32b3b7430996762358b90001c194baf168cbf66fa4bc7b02eaa683018204582083adf0dfaa3182c16f61b7e7a93ea61a9500f4f764c40421cf72c61ec6c29ca683024e726571756573745f73746174757383018301830182045820a634cd52a537fe1472c8d715b7df4da47ae9cb1d712aa630b47d2df0dfd0c6d7830183018301830183018204582046d18fc1f1191c8f6836c8ece13c8fd9688a56f0537b95195953cade214d3a5f8302582038ea4db10868be10af596cfb1c1d557fd135d774720ac546d4df842bbefd5d4f83018302457265706c79820358ee4449444c0b6b02bc8a0104c5fed201016b04d1c4987c03a3f2efe602029a8597e60302e3c581900f026c01fc91f4f805716c02fc91f4f80571c498b1b50d7d6c02efcee7800409e29fdcc806056b029ee0b53b06fcdfd79a0f716c02f99cba840807dcec99f409716d086c02007101716c02aeaeb1cc050ad880c6d007716e760100000002656e0003066d6574686f640d69637263325f617070726f76650a746573745f6669656c641054657374206669656c642076616c75650d616e6f746865725f6669656c640d416e6f746865722076616c756517496e74656e7420746f2069637263325f617070726f76658302467374617475738203477265706c6965648204582011dd41ee7dd9b2a15fa3324e05ce4a2b5e03fba4a1d8919901927652854ffc1182045820cee39b9eaefe16c51951d684376e5284b7a79f1e746af4e0cae5a1a926b550a9820458206be70aaeb3bbe7a9308c5ef39d108685edef57c6b4e9705dd32ec00f4371b57482045820de720e89d1d92fe1d07d4bf44b57be7c6225c9056b99e3373a437ffc184faec5820458204a2d65fdde220461793ce98e9302a08ecddb7b07c5ae1116da379dc8840f842f82045820ae6934dda4d3b666b15530ab97127cc31c23ea834f061aa63ade1fde01768e9b830182045820dca3e48639d8b08e2a674f8337f76e2f5bd90b0d2ec7664627ea6a3ecf9cd10683024474696d6582034995aaa9cbd7c2dfa018697369676e6174757265583093c79c491e90989d416553a94fbdd73941e406efe81e65776db00b31a267d3a777fddb9f142b8ba953a48f3d5b67e4f66a64656c65676174696f6ea2697375626e65745f6964581d806b712f189b5651e7349743820c5f45a81592464c25048e79f25cd6026b636572746966696361746559027dd9d9f7a26474726565830182045820b63acd339116f6b01d11462ef4c0dba98d1e124737eea9038fa30c08dbecbe8d83018301820458201252cea180dcebc7baba86ad402e724d24ff040463cc6db912689789824feb078302467375626e6574830183018204582001f6986a6a6e353c4cc6ce59203166d6fcdfaea1f9f20a9dc1939219368e7a8d8301830182045820654f222a0d7785c9406b4cc30970eae4ac4e992191aa2097005a315948ace9db830182045820c809a2f71c483679ea083fca3da5837de2906de073159c766b43963e9eeeea6883018302581d806b712f189b5651e7349743820c5f45a81592464c25048e79f25cd602830183024f63616e69737465725f72616e6765738203581bd9d9f781824a0000000000b0000001014a0000000000bfffff010183024a7075626c69635f6b657982035885308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100af4f78ab97b3cdc76075f552e83842d5b07c4e35f9f83614b4976e70751f94ea1bc5ebec45892086f4344ea8fb3f7e3a053da28155c0ac501ab6a26ccfc60e729d0bbe91bf0772837cf2911fb4e952d066daf14ea45c08c2104cc69bf221a4f8820458202e465da6f8bd618119e1767791e131ce9696113a8aff5a118c28fdd4992892a082045820853cc4424d45777421ca30310ee0c7cb8c07972a997f696a9de6a242bd8f4af6820458203cf359df3cf0830ea62ec97a8be98a43a4cfde07ec1252c95609d34163bc52a383024474696d65820349bb8682d2c1c1dfa018697369676e61747572655830aff4319e113e1aa58603e08a9ad2c80992fafea6945c79c2901747a797702e5dc5d05dd0de6ae3f4d6a898e80922daf6";

// The following came from using the hw-cli to send a consent message request in the `transformRequest` method of the identity.
// Then reading the responses of the agent get the data for this vector.

const convertToArrayBuffer = (bytes: number[]) => {
  const buffer = new ArrayBuffer(bytes.length);
  const view = new Uint8Array(buffer);
  bytes.forEach((byte, index) => {
    view[index] = byte;
  });
  return buffer;
};

const callRequest = {
  arg: convertToArrayBuffer([
    68, 73, 68, 76, 6, 110, 125, 109, 123, 110, 1, 110, 120, 108, 2, 179, 176,
    218, 195, 3, 104, 173, 134, 202, 131, 5, 2, 108, 8, 198, 252, 182, 2, 0,
    186, 137, 229, 194, 4, 2, 162, 222, 148, 235, 6, 2, 130, 243, 243, 145, 12,
    3, 216, 163, 140, 168, 13, 125, 145, 156, 156, 191, 13, 0, 222, 167, 247,
    218, 13, 3, 203, 150, 220, 180, 14, 4, 1, 5, 0, 0, 0, 0, 128, 194, 215, 47,
    0, 1, 0, 194, 76, 0, 170, 204, 65, 24, 1, 10, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1,
    0,
  ]),
  canister_id: Principal.fromText("ekfwe-siaaa-aaaaf-qapta-cai"),
  ingress_expiry: BigInt("1747816980000000000"),
  method_name: "icrc2_approve",
  request_type: "call",
  sender: Principal.fromHex(
    "5h2rk-qaffr-pw6jy-pysr2-ravia-5ltfs-5jblk-l2jot-bpjm6-6yl7z-6ae",
  ),
  nonce: convertToArrayBuffer([
    57, 59, 191, 187, 156, 130, 134, 4, 160, 142, 119, 212, 98, 74, 1, 245,
  ]),
};

const consentMessageRequest = {
  arg: convertToArrayBuffer([
    68, 73, 68, 76, 7, 109, 123, 110, 118, 108, 2, 174, 174, 177, 204, 5, 1,
    216, 128, 198, 208, 7, 113, 107, 2, 139, 234, 191, 194, 6, 127, 169, 137,
    139, 143, 10, 127, 110, 3, 108, 2, 239, 206, 231, 128, 4, 2, 196, 251, 242,
    219, 5, 4, 108, 3, 214, 252, 167, 2, 0, 225, 237, 235, 74, 113, 132, 247,
    254, 232, 10, 5, 1, 6, 109, 68, 73, 68, 76, 6, 110, 125, 109, 123, 110, 1,
    110, 120, 108, 2, 179, 176, 218, 195, 3, 104, 173, 134, 202, 131, 5, 2, 108,
    8, 198, 252, 182, 2, 0, 186, 137, 229, 194, 4, 2, 162, 222, 148, 235, 6, 2,
    130, 243, 243, 145, 12, 3, 216, 163, 140, 168, 13, 125, 145, 156, 156, 191,
    13, 0, 222, 167, 247, 218, 13, 3, 203, 150, 220, 180, 14, 4, 1, 5, 0, 0, 0,
    0, 128, 194, 215, 47, 0, 1, 0, 194, 76, 0, 170, 204, 65, 24, 1, 10, 0, 0, 0,
    0, 0, 0, 0, 7, 1, 1, 0, 13, 105, 99, 114, 99, 50, 95, 97, 112, 112, 114,
    111, 118, 101, 0, 2, 101, 110, 1, 1,
  ]),
  canister_id: Principal.fromText("ekfwe-siaaa-aaaaf-qapta-cai"),
  ingress_expiry: BigInt("1747816980000000000"),
  method_name: "icrc21_canister_call_consent_message",
  nonce: convertToArrayBuffer([
    118, 133, 218, 18, 167, 170, 52, 164, 178, 64, 229, 8, 158, 142, 98, 54,
  ]),
  request_type: "call",
  sender: Principal.fromText("2vxsx-fae"),
};

const consentResponse = {
  Ok: {
    metadata: { utc_offset_minutes: [], language: "en" },
    consent_message: {
      FieldsDisplayMessage: {
        fields: [
          ["method", "icrc2_approve"],
          ["test_field", "Test field value"],
          ["another_field", "Another value"],
        ],
        intent: "Intent to icrc2_approve",
      },
    },
  },
};

const createCandidBlobs = () => {
  const callRequestBlob = Buffer.from(
    Cbor.encode({ content: callRequest }),
  ).toString("hex");
  const consentMessageRequestBlob = Buffer.from(
    Cbor.encode({ content: consentMessageRequest }),
  ).toString("hex");

  writeToJson({
    data: {
      callRequestBlob,
      callRequest,
      consentMessageRequestBlob,
      consentMessageRequest,
      consentMessageCertificate,
      consentResponse,
    },
    fileName: "icrc21-icrc2_approve.json",
  });
};

createCandidBlobs();
