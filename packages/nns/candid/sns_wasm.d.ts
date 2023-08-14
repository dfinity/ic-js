import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface AddWasmRequest {
  hash: Uint8Array;
  wasm: [] | [SnsWasm];
}
export interface AddWasmResponse {
  result: [] | [Result];
}
export interface AirdropDistribution {
  airdrop_neurons: Array<NeuronDistribution>;
}
export interface Canister {
  id: [] | [Principal];
}
export interface CfNeuron {
  nns_neuron_id: bigint;
  amount_icp_e8s: bigint;
}
export interface CfParticipant {
  hotkey_principal: string;
  cf_neurons: Array<CfNeuron>;
}
export interface Countries {
  iso_codes: Array<string>;
}
export interface DappCanisters {
  canisters: Array<Canister>;
}
export interface DappCanistersTransferResult {
  restored_dapp_canisters: Array<Canister>;
  nns_controlled_dapp_canisters: Array<Canister>;
  sns_controlled_dapp_canisters: Array<Canister>;
}
export interface DeployNewSnsRequest {
  sns_init_payload: [] | [SnsInitPayload];
}
export interface DeployNewSnsResponse {
  dapp_canisters_transfer_result: [] | [DappCanistersTransferResult];
  subnet_id: [] | [Principal];
  error: [] | [SnsWasmError];
  canisters: [] | [SnsCanisterIds];
}
export interface DeployedSns {
  root_canister_id: [] | [Principal];
  governance_canister_id: [] | [Principal];
  index_canister_id: [] | [Principal];
  swap_canister_id: [] | [Principal];
  ledger_canister_id: [] | [Principal];
}
export interface DeveloperDistribution {
  developer_neurons: Array<NeuronDistribution>;
}
export interface FractionalDeveloperVotingPower {
  treasury_distribution: [] | [TreasuryDistribution];
  developer_distribution: [] | [DeveloperDistribution];
  airdrop_distribution: [] | [AirdropDistribution];
  swap_distribution: [] | [SwapDistribution];
}
export interface GetAllowedPrincipalsResponse {
  allowed_principals: Array<Principal>;
}
export interface GetNextSnsVersionRequest {
  governance_canister_id: [] | [Principal];
  current_version: [] | [SnsVersion];
}
export interface GetNextSnsVersionResponse {
  next_version: [] | [SnsVersion];
}
export interface GetSnsSubnetIdsResponse {
  sns_subnet_ids: Array<Principal>;
}
export interface GetWasmRequest {
  hash: Uint8Array;
}
export interface GetWasmResponse {
  wasm: [] | [SnsWasm];
}
export type InitialTokenDistribution = {
  FractionalDeveloperVotingPower: FractionalDeveloperVotingPower;
};
export interface InsertUpgradePathEntriesRequest {
  upgrade_path: Array<SnsUpgrade>;
  sns_governance_canister_id: [] | [Principal];
}
export interface InsertUpgradePathEntriesResponse {
  error: [] | [SnsWasmError];
}
export interface ListDeployedSnsesResponse {
  instances: Array<DeployedSns>;
}
export interface ListUpgradeStep {
  pretty_version: [] | [PrettySnsVersion];
  version: [] | [SnsVersion];
}
export interface ListUpgradeStepsRequest {
  limit: number;
  starting_at: [] | [SnsVersion];
  sns_governance_canister_id: [] | [Principal];
}
export interface ListUpgradeStepsResponse {
  steps: Array<ListUpgradeStep>;
}
export interface NeuronBasketConstructionParameters {
  dissolve_delay_interval_seconds: bigint;
  count: bigint;
}
export interface NeuronDistribution {
  controller: [] | [Principal];
  dissolve_delay_seconds: bigint;
  memo: bigint;
  stake_e8s: bigint;
  vesting_period_seconds: [] | [bigint];
}
export interface NeuronsFundParticipants {
  participants: Array<CfParticipant>;
}
export interface PrettySnsVersion {
  archive_wasm_hash: string;
  root_wasm_hash: string;
  swap_wasm_hash: string;
  ledger_wasm_hash: string;
  governance_wasm_hash: string;
  index_wasm_hash: string;
}
export type Result = { Error: SnsWasmError } | { Hash: Uint8Array };
export interface SnsCanisterIds {
  root: [] | [Principal];
  swap: [] | [Principal];
  ledger: [] | [Principal];
  index: [] | [Principal];
  governance: [] | [Principal];
}
export interface SnsInitPayload {
  url: [] | [string];
  max_dissolve_delay_seconds: [] | [bigint];
  max_dissolve_delay_bonus_percentage: [] | [bigint];
  nns_proposal_id: [] | [bigint];
  min_participant_icp_e8s: [] | [bigint];
  neuron_basket_construction_parameters:
    | []
    | [NeuronBasketConstructionParameters];
  fallback_controller_principal_ids: Array<string>;
  token_symbol: [] | [string];
  final_reward_rate_basis_points: [] | [bigint];
  max_icp_e8s: [] | [bigint];
  neuron_minimum_stake_e8s: [] | [bigint];
  confirmation_text: [] | [string];
  logo: [] | [string];
  name: [] | [string];
  swap_start_timestamp_seconds: [] | [bigint];
  swap_due_timestamp_seconds: [] | [bigint];
  initial_voting_period_seconds: [] | [bigint];
  neuron_minimum_dissolve_delay_to_vote_seconds: [] | [bigint];
  description: [] | [string];
  max_neuron_age_seconds_for_age_bonus: [] | [bigint];
  min_participants: [] | [bigint];
  initial_reward_rate_basis_points: [] | [bigint];
  wait_for_quiet_deadline_increase_seconds: [] | [bigint];
  transaction_fee_e8s: [] | [bigint];
  dapp_canisters: [] | [DappCanisters];
  neurons_fund_participants: [] | [NeuronsFundParticipants];
  max_age_bonus_percentage: [] | [bigint];
  initial_token_distribution: [] | [InitialTokenDistribution];
  reward_rate_transition_duration_seconds: [] | [bigint];
  token_logo: [] | [string];
  token_name: [] | [string];
  max_participant_icp_e8s: [] | [bigint];
  proposal_reject_cost_e8s: [] | [bigint];
  restricted_countries: [] | [Countries];
  min_icp_e8s: [] | [bigint];
}
export interface SnsUpgrade {
  next_version: [] | [SnsVersion];
  current_version: [] | [SnsVersion];
}
export interface SnsVersion {
  archive_wasm_hash: Uint8Array;
  root_wasm_hash: Uint8Array;
  swap_wasm_hash: Uint8Array;
  ledger_wasm_hash: Uint8Array;
  governance_wasm_hash: Uint8Array;
  index_wasm_hash: Uint8Array;
}
export interface SnsWasm {
  wasm: Uint8Array;
  canister_type: number;
}
export interface SnsWasmCanisterInitPayload {
  allowed_principals: Array<Principal>;
  access_controls_enabled: boolean;
  sns_subnet_ids: Array<Principal>;
}
export interface SnsWasmError {
  message: string;
}
export interface SwapDistribution {
  total_e8s: bigint;
  initial_swap_amount_e8s: bigint;
}
export interface TreasuryDistribution {
  total_e8s: bigint;
}
export interface UpdateAllowedPrincipalsRequest {
  added_principals: Array<Principal>;
  removed_principals: Array<Principal>;
}
export interface UpdateAllowedPrincipalsResponse {
  update_allowed_principals_result: [] | [UpdateAllowedPrincipalsResult];
}
export type UpdateAllowedPrincipalsResult =
  | { Error: SnsWasmError }
  | { AllowedPrincipals: GetAllowedPrincipalsResponse };
export interface UpdateSnsSubnetListRequest {
  sns_subnet_ids_to_add: Array<Principal>;
  sns_subnet_ids_to_remove: Array<Principal>;
}
export interface UpdateSnsSubnetListResponse {
  error: [] | [SnsWasmError];
}
export interface _SERVICE {
  add_wasm: ActorMethod<[AddWasmRequest], AddWasmResponse>;
  deploy_new_sns: ActorMethod<[DeployNewSnsRequest], DeployNewSnsResponse>;
  get_allowed_principals: ActorMethod<[{}], GetAllowedPrincipalsResponse>;
  get_latest_sns_version_pretty: ActorMethod<[null], Array<[string, string]>>;
  get_next_sns_version: ActorMethod<
    [GetNextSnsVersionRequest],
    GetNextSnsVersionResponse
  >;
  get_sns_subnet_ids: ActorMethod<[{}], GetSnsSubnetIdsResponse>;
  get_wasm: ActorMethod<[GetWasmRequest], GetWasmResponse>;
  insert_upgrade_path_entries: ActorMethod<
    [InsertUpgradePathEntriesRequest],
    InsertUpgradePathEntriesResponse
  >;
  list_deployed_snses: ActorMethod<[{}], ListDeployedSnsesResponse>;
  list_upgrade_steps: ActorMethod<
    [ListUpgradeStepsRequest],
    ListUpgradeStepsResponse
  >;
  update_allowed_principals: ActorMethod<
    [UpdateAllowedPrincipalsRequest],
    UpdateAllowedPrincipalsResponse
  >;
  update_sns_subnet_list: ActorMethod<
    [UpdateSnsSubnetListRequest],
    UpdateSnsSubnetListResponse
  >;
}
