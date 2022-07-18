import type { Principal } from "@dfinity/principal";
export interface AddWasmRequest {
  hash: Array<number>;
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
  hash: Array<number>;
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
  stake_e8s: bigint;
}
export type Result = { Error: SnsWasmError } | { Hash: Array<number> };
export interface SnsCanisterIds {
  root: [] | [Principal];
  swap: [] | [Principal];
  ledger: [] | [Principal];
  governance: [] | [Principal];
}
export interface SnsInitPayload {
  min_participant_icp_e8s: [] | [bigint];
  fallback_controller_principal_ids: Array<string>;
  token_symbol: [] | [string];
  max_icp_e8s: [] | [bigint];
  neuron_minimum_stake_e8s: [] | [bigint];
  min_participants: [] | [number];
  transaction_fee_e8s: [] | [bigint];
  initial_token_distribution: [] | [InitialTokenDistribution];
  token_name: [] | [string];
  max_participant_icp_e8s: [] | [bigint];
  proposal_reject_cost_e8s: [] | [bigint];
  min_icp_e8s: [] | [bigint];
}
export interface SnsVersion {
  root_wasm_hash: Array<number>;
  swap_wasm_hash: Array<number>;
  ledger_wasm_hash: Array<number>;
  governance_wasm_hash: Array<number>;
}
export interface SnsWasm {
  wasm: Array<number>;
  canister_type: number;
}
export interface SnsWasmCanisterInitPayload {
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
  add_wasm: (arg_0: AddWasmRequest) => Promise<AddWasmResponse>;
  deploy_new_sns: (arg_0: DeployNewSnsRequest) => Promise<DeployNewSnsResponse>;
  get_next_sns_version: (
    arg_0: GetNextSnsVersionRequest
  ) => Promise<GetNextSnsVersionResponse>;
  get_wasm: (arg_0: GetWasmRequest) => Promise<GetWasmResponse>;
  list_deployed_snses: (arg_0: {}) => Promise<ListDeployedSnsesResponse>;
}
