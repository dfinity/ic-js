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
import { createServices } from "./utils/actor.utils";
import { toNullable } from "./utils/did.utils";

export class GovernanceCanister extends Canister<SnsGovernanceCanister> {
  public static create(options: CanisterOptions<SnsGovernanceCanister>) {
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
   * @param {ListNeuronsParams} params
   * @param {certified} [params.certified=true] - Query (false) or update (true) call
   * @param {principal} params.principal - Scope the query to a particular principal
   * @param {limit} [params.limit=MAX_LIST_NEURONS_RESULTS] - The maximum number of neurons returned by the method `list_neurons`
   * @param {beforeNeuronId} params.beforeNeuronId - Index the search to returns a list that starts after specified neuron id
   */
  public listNeurons = async (params: ListNeuronsParams): Promise<Neuron[]> => {
    const { principal, limit, beforeNeuronId } = params;

    const { neurons } = await this.caller(params).list_neurons({
      of_principal: toNullable<Principal>(principal),
      limit: limit ?? MAX_LIST_NEURONS_RESULTS,
      start_page_at: toNullable<NeuronId>(beforeNeuronId),
    });
    return neurons;
  };
}
