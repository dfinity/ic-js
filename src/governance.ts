import { Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory as certifiedIdlFactory } from "../candid/governance.certified.idl";
import { GovernanceService, idlFactory } from "../candid/governance.idl";
import { RequestConverters } from "./canisters/governance/request.converters";
import { ResponseConverters } from "./canisters/governance/response.converters";
import { MAINNET_GOVERNANCE_CANISTER_ID } from "./constants/canister_ids";
import { NeuronId } from "./types/common";
import { GovernanceCanisterOptions } from "./types/governance";
import {
  ClaimOrRefreshNeuronFromAccount,
  KnownNeuron,
  ListProposalsRequest,
  ListProposalsResponse,
  NeuronInfo,
} from "./types/governance_converters";
import { defaultAgent } from "./utils/agent.utils";

// TODO: Should this be renamed to something like GovernanceClient or GovernanceApi or GovernanceService?  The governance canister is something running wasm on the IC, not this code which runs in a browser.
export class GovernanceCanister {
  canisterId: Principal;
  myPrincipal: Principal | undefined;

  private constructor(
    private readonly service: GovernanceService,
    private readonly certifiedService: GovernanceService,
    private readonly requestConverters: RequestConverters,
    private readonly responseConverters: ResponseConverters,
    canisterId: Principal,
    myPrincipal?: Principal
  ) {
    this.service = service;
    this.certifiedService = certifiedService;
    this.requestConverters = requestConverters;
    this.responseConverters = responseConverters;
    this.canisterId = canisterId;
    this.myPrincipal = myPrincipal;
  }

  public static create(options: GovernanceCanisterOptions = {}) {
    const agent = options.agent ?? defaultAgent();
    const canisterId = options.canisterId ?? MAINNET_GOVERNANCE_CANISTER_ID;

    const service =
      options.serviceOverride ??
      Actor.createActor<GovernanceService>(idlFactory, {
        agent,
        canisterId,
      });

    const certifiedService =
      options.certifiedServiceOverride ??
      Actor.createActor<GovernanceService>(certifiedIdlFactory, {
        agent,
        canisterId,
      });

    const requestConverters = new RequestConverters();
    const responseConverters = new ResponseConverters();

    return new GovernanceCanister(
      service,
      certifiedService,
      requestConverters,
      responseConverters,
      canisterId,
      options.myPrincipal
    );
  }

  /**
   * Returns the list of neurons controlled by the caller.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   *
   * TODO: Decide: The library method is getNeurons but the raw method is list_neurons.  Do we want this inconsistency?
   * Note: In the API, an empty list is treated as an absent list and returns all.  Treating no filter in the same way as an empty filter is typically error prone.  There was a spectacular example of this in a Google datacentre where a SRE intended to format the disks on one machine, however the command had a typo, so the matching expression matched no disks, no disks was treated as all disks and all the disks in the datacentre were formatted.  Hopefully we won't have any errors as bad as this, however the same pattern of treating empty as all is used here.
   */
  public getNeurons = async ({
    certified = true,
    neuronIds, // Presumably: Get all neurons owned by the caller OR get the intersection of this with the given list.
  }: {
    certified: boolean;
    neuronIds?: NeuronId[];
  }): Promise<NeuronInfo[]> => {
    if (undefined === this.myPrincipal) {
      // An anonymous caller has no neurons.
      return new Promise(() => []);
    }
    let principal: Principal = this.myPrincipal;
    const rawRequest = this.requestConverters.fromListNeurons(neuronIds);
    const service = certified ? this.certifiedService : this.service;
    const raw_response = await service.list_neurons(rawRequest);
    return this.responseConverters.toArrayOfNeuronInfo(raw_response, principal);
  };

  /**
   * Returns the list of neurons who have been approved by the community to
   * appear as the default followee options.
   *
   * If `certified` is true, the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listKnownNeurons = async (
    certified = true
  ): Promise<KnownNeuron[]> => {
    const service = certified ? this.certifiedService : this.service;
    const response = await service.list_known_neurons();

    return response.known_neurons.map((n) => ({
      id: n.id[0]?.id ?? BigInt(0),
      name: n.known_neuron_data[0]?.name ?? "",
      description: n.known_neuron_data[0]?.description[0],
    }));
  };

  /**
   * Returns the list of proposals made for the community to vote on,
   * paginated and filtered by the request.
   *
   * If `certified` is true (default), the request is fetched as an update call, otherwise
   * it is fetched using a query call.
   */
  public listProposals = async ({
    request,
    certified = true,
  }: {
    request: ListProposalsRequest;
    certified?: boolean;
  }): Promise<ListProposalsResponse> => {
    const rawRequest = this.requestConverters.fromListProposalsRequest(request);
    const service = certified ? this.certifiedService : this.service;
    const rawResponse = await service.list_proposals(rawRequest);
    return this.responseConverters.toListProposalsResponse(rawResponse);
  };

  public claimOrRefreshNeuronFromAccount = async (
    request: ClaimOrRefreshNeuronFromAccount
  ): Promise<NeuronId> => {
    const service = this.certifiedService; // Note: This is an update call so the certified and uncertified services are identical in this case, however using the certified service provides for additional protection in case anything changes.
    const response = await service.claim_or_refresh_neuron_from_account({
      controller: request.controller ? [request.controller] : [],
      memo: request.memo,
    });

    const result = response.result;
    if (result.length && "NeuronId" in result[0]) {
      return result[0].NeuronId.id;
    }

    throw `Error claiming/refreshing neuron: ${JSON.stringify(result)}`;
  };
}
