import type { Principal } from "@dfinity/principal";
import type {
  DefaultFollowees,
  DeregisterDappCanisters,
  ExecuteGenericNervousSystemFunction,
  Motion,
  NeuronPermissionList,
  RegisterDappCanisters,
  Subaccount,
  Topic,
} from "../../candid/sns_governance";
import type { Option } from "./common";

export type Action =
  | {
      ManageNervousSystemParameters: NervousSystemParameters;
    }
  | { AddGenericNervousSystemFunction: NervousSystemFunction }
  | { SetTopicsForCustomProposals: SetTopicsForCustomProposals }
  | { RemoveGenericNervousSystemFunction: bigint }
  | { UpgradeSnsToNextVersion: Record<string, never> }
  | { RegisterDappCanisters: RegisterDappCanisters }
  | { TransferSnsTreasuryFunds: TransferSnsTreasuryFunds }
  | { UpgradeSnsControlledCanister: UpgradeSnsControlledCanister }
  | { DeregisterDappCanisters: DeregisterDappCanisters }
  | { Unspecified: Record<string, never> }
  | { ManageSnsMetadata: ManageSnsMetadata }
  | {
      ExecuteGenericNervousSystemFunction: ExecuteGenericNervousSystemFunction;
    }
  | { Motion: Motion };

export interface NervousSystemParameters {
  default_followees: Option<DefaultFollowees>;
  max_dissolve_delay_seconds: Option<bigint>;
  max_dissolve_delay_bonus_percentage: Option<bigint>;
  max_followees_per_function: Option<bigint>;
  neuron_claimer_permissions: Option<NeuronPermissionList>;
  neuron_minimum_stake_e8s: Option<bigint>;
  max_neuron_age_for_age_bonus: Option<bigint>;
  initial_voting_period_seconds: Option<bigint>;
  neuron_minimum_dissolve_delay_to_vote_seconds: Option<bigint>;
  reject_cost_e8s: Option<bigint>;
  max_proposals_to_keep_per_action: Option<number>;
  wait_for_quiet_deadline_increase_seconds: Option<bigint>;
  max_number_of_neurons: Option<bigint>;
  transaction_fee_e8s: Option<bigint>;
  max_number_of_proposals_with_ballots: Option<bigint>;
  max_age_bonus_percentage: Option<bigint>;
  neuron_grantable_permissions: Option<NeuronPermissionList>;
  voting_rewards_parameters: Option<VotingRewardsParameters>;
  max_number_of_principals_per_neuron: Option<bigint>;
  automatically_advance_target_version: Option<boolean>;
}

export interface VotingRewardsParameters {
  final_reward_rate_basis_points: Option<bigint>;
  initial_reward_rate_basis_points: Option<bigint>;
  reward_rate_transition_duration_seconds: Option<bigint>;
  round_duration_seconds: Option<bigint>;
}

export interface NervousSystemFunction {
  id: bigint;
  name: string;
  description: Option<string>;
  function_type: Option<FunctionType>;
}

export interface SetTopicsForCustomProposals {
  custom_function_id_to_topic: Array<[bigint, Topic]>;
}

export type FunctionType =
  | { NativeNervousSystemFunction: Record<string, never> }
  | { GenericNervousSystemFunction: GenericNervousSystemFunction };

export interface GenericNervousSystemFunction {
  validator_canister_id: Option<Principal>;
  target_canister_id: Option<Principal>;
  validator_method_name: Option<string>;
  target_method_name: Option<string>;
  topic: Option<Topic>;
}

export interface TransferSnsTreasuryFunds {
  from_treasury: number;
  to_principal: Option<Principal>;
  to_subaccount: Option<Subaccount>;
  memo: Option<bigint>;
  amount_e8s: bigint;
}

export interface ChunkedCanisterWasm {
  wasm_module_hash: Uint8Array | number[];
  store_canister_id: Option<Principal>;
  chunk_hashes_list: Array<Uint8Array | number[]>;
}

export interface UpgradeSnsControlledCanister {
  new_canister_wasm: Uint8Array | number[];
  chunked_canister_wasm: Option<ChunkedCanisterWasm>;
  canister_id: Option<Principal>;
  canister_upgrade_arg: Option<Uint8Array | number[]>;
  mode: Option<number>;
}

export interface ManageSnsMetadata {
  url: Option<string>;
  logo: Option<string>;
  name: Option<string>;
  description: Option<string>;
}
