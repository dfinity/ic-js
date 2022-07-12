import type { Principal } from "@dfinity/principal";
import type {
  Neuron,
  NeuronId,
  _SERVICE as SnsGovernanceCanister,
} from "../candid/sns_governance";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_governance.certified.idl";
import { idlFactory } from "../candid/sns_governance.idl";
import { MAX_LIST_NEURONS_RESULTS } from "./constants/governance.constants";
import { Canister } from "./services/canister";
import type { CanisterOptions } from "./types/canister.options";
import type { ListNeuronsParams } from "./types/governance.params";
import type { QueryParams } from "./types/query.params";
import { createServices } from "./utils/actor.utils";
import { toNullable } from "./utils/did.utils";

export class GovernanceCanister extends Canister<SnsGovernanceCanister> {
  static create(options: CanisterOptions<SnsGovernanceCanister>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsGovernanceCanister>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new GovernanceCanister(canisterId, service, certifiedService);
  }

  /**
   * List the neurons of the Sns
   */
  listNeurons = async (params: ListNeuronsParams): Promise<Neuron[]> => {
    const { principal, limit, beforeNeuronId } = params;

    const { neurons } = await this.caller(params).list_neurons({
      of_principal: toNullable<Principal>(principal),
      limit: limit ?? MAX_LIST_NEURONS_RESULTS,
      start_page_at: toNullable<NeuronId>(beforeNeuronId),
    });
    return neurons;
  };

  // TODO: replace with effective implementation and types to get the list of metadata once implemented in backend
  metadata = async (params: QueryParams): Promise<string> => {
    return this.caller(params).get_build_metadata();
  };
}
