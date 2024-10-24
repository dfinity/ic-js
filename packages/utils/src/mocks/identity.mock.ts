import type { Identity } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);

export const mockIdentity = {
  getPrincipal: () => mockPrincipal,
} as unknown as Identity;

export const mockPrincipalText2 =
  "5uuwe-ggtgm-fonrs-rblmx-cfc23-pb3dg-iyfk2-dle5w-j5uev-ggmep-6ae";

export const mockPrincipal2 = Principal.fromText(mockPrincipalText2);

export const mockIdentity2 = {
  getPrincipal: () => mockPrincipal2,
} as unknown as Identity;
