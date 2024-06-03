import { Principal } from "@dfinity/principal";
import { AccountIdentifier } from "../account_identifier";

export const mockAccountIdentifier = AccountIdentifier.fromHex(
  "3e8bbceef8b9338e56a1b561a127326e6614894ab9b0739df4cc3664d40a5958",
);

export const mockPrincipalText =
  "xlmdg-vkosz-ceopx-7wtgu-g3xmd-koiyc-awqaq-7modz-zf6r6-364rh-oqe";

export const mockPrincipal = Principal.fromText(mockPrincipalText);
