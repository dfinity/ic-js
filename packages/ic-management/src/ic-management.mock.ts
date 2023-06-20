import { Identity } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import {
  CanisterDetails,
  CanisterStatus,
} from "./types/ic-management.response";

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);

export const mockIdentity = {
  getPrincipal: () => mockPrincipal,
} as unknown as Identity;

export const mockCanisterId = Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai");

export const mockCanisterDetails: CanisterDetails = {
  id: mockCanisterId,
  status: CanisterStatus.Running,
  memorySize: BigInt(10),
  cycles: BigInt(30),
  settings: {
    controllers: [mockIdentity.getPrincipal().toText()],
    freezingThreshold: BigInt(30),
    memoryAllocation: BigInt(1000),
    computeAllocation: BigInt(2000),
  },
};

export const mockCanisterSettings = {
  freezing_threshold: BigInt(2),
  controllers: [
    "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe",
  ],
  memory_allocation: BigInt(4),
  compute_allocation: BigInt(10),
};
