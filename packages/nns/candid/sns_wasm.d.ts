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
export interface DeployNewSnsRequest {
  sns_init_payload: [] | [SnsInitPayload];
}
export interface DeployNewSnsResponse {
  subnet_id: [] | [Principal];
  error: [] | [SnsWasmError];
  canisters: [] | [SnsCanisterIds];
}
export interface DeployedSns {
  root_canister_id: [] | [Principal];
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
export interface GetNextSnsVersionRequest {
  current_version: [] | [SnsVersion];
}
export interface GetNextSnsVersionResponse {
  next_version: [] | [SnsVersion];
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
export interface ListDeployedSnsesResponse {
  instances: Array<DeployedSns>;
}
export interface NeuronDistribution {
  controller: [] | [Principal];
  dissolve_delay_seconds: bigint;
  memo: bigint;
  stake_e8s: bigint;
}
export type Result = { Error: SnsWasmError } | { Hash: Uint8Array };
export interface SnsCanisterIds {
  root: [] | [Principal];
  swap: [] | [Principal];
  ledger: [] | [Principal];
  governance: [] | [Principal];
}
export interface SnsInitPayload {
  url: [] | [string];
  fallback_controller_principal_ids: Array<string>;
  token_symbol: [] | [string];
  neuron_minimum_stake_e8s: [] | [bigint];
  logo: [] | [string];
  name: [] | [string];
  neuron_minimum_dissolve_delay_to_vote_seconds: [] | [bigint];
  description: [] | [string];
  transaction_fee_e8s: [] | [bigint];
  sns_initialization_parameters: [] | [string];
  initial_token_distribution: [] | [InitialTokenDistribution];
  token_name: [] | [string];
  proposal_reject_cost_e8s: [] | [bigint];
}
export interface SnsVersion {
  archive_wasm_hash: Uint8Array;
  root_wasm_hash: Uint8Array;
  swap_wasm_hash: Uint8Array;
  ledger_wasm_hash: Uint8Array;
  governance_wasm_hash: Uint8Array;
}
export interface SnsWasm {
  wasm: Uint8Array;
  canister_type: number;
}
export interface SnsWasmCanisterInitPayload {
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
export interface _SERVICE {
  add_wasm: ActorMethod<[AddWasmRequest], AddWasmResponse>;
  deploy_new_sns: ActorMethod<[DeployNewSnsRequest], DeployNewSnsResponse>;
  get_latest_sns_version_pretty: ActorMethod<[null], Array<[string, string]>>;
  get_next_sns_version: ActorMethod<
    [GetNextSnsVersionRequest],
    GetNextSnsVersionResponse
  >;
  get_wasm: ActorMethod<[GetWasmRequest], GetWasmResponse>;
  list_deployed_snses: ActorMethod<[{}], ListDeployedSnsesResponse>;
}
