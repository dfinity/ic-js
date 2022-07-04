import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface AddWasmError {
  error: string;
}
export interface AddWasmOk {
  hash: Array<number>;
}
export interface AddWasmRequest {
  hash: Array<number>;
  wasm: [] | [SnsWasm];
}
export interface AddWasmResponse {
  result: [] | [Result];
}
export interface DeployNewSnsRequest {
  sns_init_payload: [] | [SnsInitPayload];
}
export interface DeployNewSnsResponse {
  subnet_id: [] | [Principal];
  canisters: [] | [SnsCanisterIds];
}
export interface DeployedSns {
  root_canister_id: [] | [Principal];
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
export interface InitialTokenDistribution {
  swap: bigint;
  developers: [] | [TokenDistribution];
  treasury: [] | [TokenDistribution];
}
export interface ListDeployedSnsesResponse {
  instances: Array<DeployedSns>;
}
export type Result = { Ok: AddWasmOk } | { Error: AddWasmError };
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
export interface TokenDistribution {
  distributions: Array<[string, bigint]>;
  total_e8s: bigint;
}
export interface _SERVICE {
  add_wasm: ActorMethod<[AddWasmRequest], AddWasmResponse>;
  deploy_new_sns: ActorMethod<[DeployNewSnsRequest], DeployNewSnsResponse>;
  get_next_sns_version: ActorMethod<
    [GetNextSnsVersionRequest],
    GetNextSnsVersionResponse
  >;
  get_wasm: ActorMethod<[GetWasmRequest], GetWasmResponse>;
  list_deployed_snses: ActorMethod<[{}], ListDeployedSnsesResponse>;
}
