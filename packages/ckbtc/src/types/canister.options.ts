import type { Principal } from "@dfinity/principal";
import type { CanisterOptions } from "@dfinity/utils";

export interface CkBTCCanisterOptions<T>
  extends Omit<CanisterOptions<T>, "canisterId"> {
  // The canister's ID is mandatory to instantiate a ckBTC related canister.
  canisterId: Principal;
}
