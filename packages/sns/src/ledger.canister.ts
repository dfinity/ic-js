import type { _SERVICE as SnsLedgerCanister } from "../../../candid/ledger";
import { idlFactory as certifiedIdlFactory } from "../../../candid/sns_root.certified.idl";
import { idlFactory } from "../../../candid/sns_root.idl";
import type { CanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class LedgerCanister {
  private constructor(
    private readonly service: SnsLedgerCanister,
    private readonly certifiedService: SnsLedgerCanister
  ) {}

  public static create(options: CanisterOptions<SnsLedgerCanister>) {
    const { service, certifiedService } = createServices<SnsLedgerCanister>({
      options,
      idlFactory,
      certifiedIdlFactory,
    });

    return new LedgerCanister(service, certifiedService);
  }
}
