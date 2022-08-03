import type { Principal } from "@dfinity/principal";
import type {
  Neuron,
  NeuronId,
  _SERVICE as SnsGovernanceService,
} from "../candid/sns_governance";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_governance.certified.idl";
import { idlFactory } from "../candid/sns_governance.idl";
import { MAX_LIST_NEURONS_RESULTS } from "./constants/governance.constants";
import { SnsGovernanceError } from "./errors/governance.errors";
import { Canister } from "./services/canister";
import type { SnsCanisterOptions } from "./types/canister.options";
import type {
  SnsGetNeuronParams,
  SnsListNeuronsParams,
} from "./types/governance.params";
import type { QueryParams } from "./types/query.params";
import { createServices } from "./utils/actor.utils";
import { fromNullable, toNullable } from "./utils/did.utils";

export class SnsGovernanceCanister extends Canister<SnsGovernanceService> {
  static create(options: SnsCanisterOptions<SnsGovernanceService>) {
    const { service, certifiedService, canisterId } =
      createServices<SnsGovernanceService>({
        options,
        idlFactory,
        certifiedIdlFactory,
      });

    return new SnsGovernanceCanister(canisterId, service, certifiedService);
  }

  /**
   * List the neurons of the Sns
   */
  listNeurons = async (params: SnsListNeuronsParams): Promise<Neuron[]> => {
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

  /**
   * Get the neuron of the Sns
   */
  getNeuron = async (
    params: SnsGetNeuronParams & QueryParams
  ): Promise<Neuron> => {
    const { neuronId } = params;

    const { result } = await this.caller(params).get_neuron({
      neuron_id: toNullable(neuronId),
    });
    const data = fromNullable(result);
    if (data === undefined || "Error" in data) {
      throw new SnsGovernanceError(
        data?.Error.error_message ?? "Response type not supported"
      );
    }
    return data.Neuron;
  };
}
