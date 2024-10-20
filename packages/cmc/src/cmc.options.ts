import type { Principal } from "@dfinity/principal";
import type { CanisterOptions } from "@dfinity/utils";
import type { _SERVICE as CanisterService } from "../candid/cmc";

export interface CMCCanisterOptions
  extends Omit<CanisterOptions<CanisterService>, "canisterId"> {
  canisterId: Principal;
}
