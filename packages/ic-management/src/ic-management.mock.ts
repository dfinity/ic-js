import { Identity } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import {
  CanisterSettings,
  toCanisterSettings,
} from "./types/ic-management.params";

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);

export const mockIdentity = {
  getPrincipal: () => mockPrincipal,
} as unknown as Identity;

export const mockCanisterId = Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai");

export const mockCanisterSettings: CanisterSettings = {
  freezingThreshold: BigInt(2),
  controllers: [mockPrincipalText],
  memoryAllocation: BigInt(4),
  computeAllocation: BigInt(10),
};

export const mappedMockCanisterSettings =
  toCanisterSettings(mockCanisterSettings);

export const bitcoinAddressMock =
  "bcrt1qu2aqme90t6hpac50x0xw8ljwqs250vn6tzlmsv";
