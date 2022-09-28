import type { Principal } from "@dfinity/principal";
import { createServices, fromNullable, toNullable } from "@dfinity/utils";
import type {
  GetMetadataResponse,
  ManageNeuron,
  ManageNeuronResponse,
  Neuron,
  NeuronId,
  _SERVICE as SnsGovernanceService,
} from "../candid/sns_governance";
import { idlFactory as certifiedIdlFactory } from "../candid/sns_governance.certified.idl";
import { idlFactory } from "../candid/sns_governance.idl";
import { MAX_LIST_NEURONS_RESULTS } from "./constants/governance.constants";
import {
  toAddPermissionsRequest,
  toDisburseNeuronRequest,
  toRemovePermissionsRequest,
  toStartDissolvingNeuronRequest,
  toStopDissolvingNeuronRequest,
} from "./converters/governance.converters";
import { SnsGovernanceError } from "./errors/governance.errors";
import { Canister } from "./services/canister";
import type { SnsCanisterOptions } from "./types/canister.options";
import type {
  SnsDisburseNeuronParams,
  SnsGetNeuronParams,
  SnsListNeuronsParams,
  SnsNeuronPermissionsParams,
} from "./types/governance.params";
import type { QueryParams } from "./types/query.params";

export class SnsGovernanceCanister extends Canister<SnsGovernanceService> {
  /**
   * Instantiate a canister to interact with the governance of a Sns project.
   *
   * @param {SnsCanisterOptions} options Miscellaneous options to initialize the canister. Its ID being the only mandatory parammeter.
   */
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

  /**
   * Get the Sns metadata (title, description, etc.)
   */
  metadata = (params: QueryParams): Promise<GetMetadataResponse> =>
    this.caller(params).get_metadata({});

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

  /**
   * Manage neuron. For advanced users.
   */
  manageNeuron = async (
    request: ManageNeuron
  ): Promise<ManageNeuronResponse> => {
    const response = await this.caller({ certified: true }).manage_neuron(
      request
    );
    this.assertManageNeuronError(response);
    return response;
  };

  /**
   * Add permissions to a neuron for a specific principal
   */
  addNeuronPermissions = async (
    params: SnsNeuronPermissionsParams
  ): Promise<void> => {
    const request: ManageNeuron = toAddPermissionsRequest(params);
    await this.manageNeuron(request);
  };

  /**
   * Remove permissions to a neuron for a specific principal
   */
  removeNeuronPermissions = async (
    params: SnsNeuronPermissionsParams
  ): Promise<void> => {
    const request: ManageNeuron = toRemovePermissionsRequest(params);
    await this.manageNeuron(request);
  };

  /**
   * Disburse neuron on Account
   */
  public disburse = async (params: SnsDisburseNeuronParams): Promise<void> => {
    const request: ManageNeuron = toDisburseNeuronRequest(params);
    await this.manageNeuron(request);
  };

  /**
   * Start dissolving process of a neuron
   */
  public startDissolving = async (neuronId: NeuronId): Promise<void> => {
    const request: ManageNeuron = toStartDissolvingNeuronRequest(neuronId);
    await this.manageNeuron(request);
  };

  /**
   * Stop dissolving process of a neuron
   */
  public stopDissolving = async (neuronId: NeuronId): Promise<void> => {
    const request: ManageNeuron = toStopDissolvingNeuronRequest(neuronId);
    await this.manageNeuron(request);
  };

  /**
   *
   * @param response ManageNeuronResponse
   * @throws SnsGovernanceError
   */
  private assertManageNeuronError = ({
    command,
  }: ManageNeuronResponse): void => {
    // TODO: use upcoming fromDefinedNullable
    const firstCommand = command[0];
    if (firstCommand !== undefined && "Error" in firstCommand) {
      throw new SnsGovernanceError(firstCommand.Error.error_message);
    }
  };
}
