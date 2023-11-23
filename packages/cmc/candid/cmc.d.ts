import type { ActorMethod } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";

export interface AccountIdentifier {
  bytes: Uint8Array | number[];
}
export type BlockIndex = bigint;
export interface CanisterSettings {
  freezing_threshold: [] | [bigint];
  controllers: [] | [Array<Principal>];
  reserved_cycles_limit: [] | [bigint];
  memory_allocation: [] | [bigint];
  compute_allocation: [] | [bigint];
}
export interface CreateCanisterArg {
  subnet_selection: [] | [SubnetSelection];
  settings: [] | [CanisterSettings];
  subnet_type: [] | [string];
}
export type CreateCanisterError =
  | {
      Refunded: { create_error: string; refund_amount: bigint };
    }
  | { RefundFailed: { create_error: string; refund_error: string } };
export type CreateCanisterResult =
  | { Ok: Principal }
  | { Err: CreateCanisterError };
export type Cycles = bigint;
export interface CyclesCanisterInitPayload {
  exchange_rate_canister: [] | [ExchangeRateCanister];
  last_purged_notification: [] | [bigint];
  governance_canister_id: [] | [Principal];
  minting_account_id: [] | [AccountIdentifier];
  ledger_canister_id: [] | [Principal];
}
export type ExchangeRateCanister = { Set: Principal } | { Unset: null };
export interface IcpXdrConversionRate {
  xdr_permyriad_per_icp: bigint;
  timestamp_seconds: bigint;
}
export interface IcpXdrConversionRateResponse {
  certificate: Uint8Array | number[];
  data: IcpXdrConversionRate;
  hash_tree: Uint8Array | number[];
}
export interface NotifyCreateCanisterArg {
  controller: Principal;
  block_index: BlockIndex;
  subnet_selection: [] | [Array<SubnetSelection>];
  settings: [] | [CanisterSettings];
  subnet_type: [] | [string];
}
export type NotifyCreateCanisterResult =
  | { Ok: Principal }
  | { Err: NotifyError };
export type NotifyError =
  | {
      Refunded: { block_index: [] | [BlockIndex]; reason: string };
    }
  | { InvalidTransaction: string }
  | { Other: { error_message: string; error_code: bigint } }
  | { Processing: null }
  | { TransactionTooOld: BlockIndex };
export interface NotifyTopUpArg {
  block_index: BlockIndex;
  canister_id: Principal;
}
export type NotifyTopUpResult = { Ok: Cycles } | { Err: NotifyError };
export interface PrincipalsAuthorizedToCreateCanistersToSubnetsResponse {
  data: Array<[Principal, Array<Principal>]>;
}
export interface SubnetFilter {
  subnet_type: [] | [string];
}
export type SubnetSelection =
  | { Filter: SubnetFilter }
  | { Subnet: { subnet: Principal } };
export interface SubnetTypesToSubnetsResponse {
  data: Array<[string, Array<Principal>]>;
}
export interface _SERVICE {
  create_canister: ActorMethod<[CreateCanisterArg], CreateCanisterResult>;
  get_icp_xdr_conversion_rate: ActorMethod<[], IcpXdrConversionRateResponse>;
  get_principals_authorized_to_create_canisters_to_subnets: ActorMethod<
    [],
    PrincipalsAuthorizedToCreateCanistersToSubnetsResponse
  >;
  get_subnet_types_to_subnets: ActorMethod<[], SubnetTypesToSubnetsResponse>;
  notify_create_canister: ActorMethod<
    [NotifyCreateCanisterArg],
    NotifyCreateCanisterResult
  >;
  notify_top_up: ActorMethod<[NotifyTopUpArg], NotifyTopUpResult>;
}
