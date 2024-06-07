import type { ServiceResponse } from "@dfinity/utils";
import type { _SERVICE as IcManagementService } from "../../candid/ic-management";

export type CanisterStatusResponse = ServiceResponse<
  IcManagementService,
  "canister_status"
>;

export type EcdsaPublicKeyResponse = {
  public_key: Uint8Array | number[];
  chain_code: Uint8Array | number[];
};
