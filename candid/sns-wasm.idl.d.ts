import type { IDL } from "@dfinity/candid";
import type { Principal } from "@dfinity/principal";

export const idlFactory: IDL.InterfaceFactory;

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
export interface SnsWasmService {
  add_wasm: (arg_0: AddWasmRequest) => Promise<AddWasmResponse>;
  deploy_new_sns: (arg_0: {}) => Promise<DeployNewSnsResponse>;
  get_next_sns_version: (
    arg_0: GetNextSnsVersionRequest
  ) => Promise<GetNextSnsVersionResponse>;
  get_wasm: (arg_0: GetWasmRequest) => Promise<GetWasmResponse>;
  list_deployed_snses: (arg_0: {}) => Promise<ListDeployedSnsesResponse>;
}
