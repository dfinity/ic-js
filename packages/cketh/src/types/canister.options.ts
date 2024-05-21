import type { Principal } from "@dfinity/principal";
import type { CanisterOptions } from "@dfinity/utils";

export interface CkETHMinterCanisterOptions<T>
  extends Omit<CanisterOptions<T>, "canisterId"> {
  // The canister's ID is mandatory to instantiate an ckETH minter.
  canisterId: Principal;
}
