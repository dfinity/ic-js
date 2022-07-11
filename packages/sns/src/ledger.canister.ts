import type { Principal } from "@dfinity/principal";
import type { _SERVICE as SnsLedgerCanister } from "../candid/ledger";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_root.certified.idl";
import { idlFactory } from "../candid/sns_root.idl";
import type { Canister } from "./types/canister";
import type { CanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class LedgerCanister implements Canister {
  private constructor(
    private readonly ledgerCanisterId: Principal,
    private readonly service: SnsLedgerCanister,
    private readonly certifiedService: SnsLedgerCanister
  ) {}

  public static create(options: CanisterOptions<SnsLedgerCanister>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsLedgerCanister>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new LedgerCanister(canisterId, service, certifiedService);
  }

  get canisterId(): Principal {
    return this.ledgerCanisterId;
  }
}
