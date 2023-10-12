import type { ActorSubclass } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import { createServices, type CanisterOptions } from "@dfinity/utils";
import { idlFactory } from "../candid/governance.idl";
import type { _SERVICE as GovernanceService } from "../candid/governance_test";
import { idlFactory as certifiedIdlFactory } from "../candid/governance_test.certified.idl";
import { toRawNeuron } from "./canisters/governance/response.converters";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import type { Neuron } from "./types/governance_converters";

export class GovernanceTestCanister {
  private constructor(
    private readonly certifiedService: ActorSubclass<GovernanceService>
  ) {
    this.certifiedService = certifiedService;
  }

  public static create(options: CanisterOptions<GovernanceService> = {}) {
    const canisterId: Principal =
      options.canisterId ?? MAINNET_GOVERNANCE_CANISTER_ID;

    const { certifiedService } = createServices<GovernanceService>({
      options: {
        ...options,
        canisterId,
      },
      idlFactory,
      certifiedIdlFactory,
    });

    return new GovernanceTestCanister(certifiedService);
  }

  /**
   * Test method to update fields of a neuron.
   *
   * Only available in the governance test canister.
   */
  updateNeuron(neuron: Neuron) {
    this.certifiedService.update_neuron(toRawNeuron(neuron));
  }
}
