import { Identity } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);

export const mockIdentity = {
  getPrincipal: () => mockPrincipal,
} as unknown as Identity;

export const mockCanisterId = Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai");

export const mockCanisterSettings = {
  freezing_threshold: BigInt(2),
  controllers: [
    "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe",
  ],
  memory_allocation: BigInt(4),
  compute_allocation: BigInt(10),
};
