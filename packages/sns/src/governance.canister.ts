import type { _SERVICE as SnsGovernanceCanister } from "../../../candid/sns_governance";
import { idlFactory as certifiedIdlFactory } from "../../../candid/sns_root.certified.idl";
import { idlFactory } from "../../../candid/sns_root.idl";
import type { CanisterOptions } from "./types/canister.options";
import { createServices } from "./utils/actor.utils";

export class GovernanceCanister {
  private constructor(
    private readonly service: SnsGovernanceCanister,
    private readonly certifiedService: SnsGovernanceCanister
  ) {}

  public static create(options: CanisterOptions<SnsGovernanceCanister>) {
    const { service, certifiedService } = createServices<SnsGovernanceCanister>(
      {
        options,
        idlFactory,
        certifiedIdlFactory,
      }
    );

    return new GovernanceCanister(service, certifiedService);
  }
}
