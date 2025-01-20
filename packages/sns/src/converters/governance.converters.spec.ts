import { Principal } from "@dfinity/principal";
import type {
  Action as ActionCandid,
  DefaultFollowees,
} from "../../candid/sns_governance";
import type { Action } from "../types/actions";
import { fromCandidAction } from "./governance.converters";

describe("governance converters", () => {
  describe("fromCandidAction", () => {
    const mockPrincipal = Principal.fromText("aaaaa-aa");

    it("converts ManageNervousSystemParameters action", () => {
      const default_followees: DefaultFollowees = {
        followees: [[BigInt(20), { followees: [{ id: new Uint8Array(0) }] }]],
      };
      const max_dissolve_delay_seconds = BigInt(21);
      const max_dissolve_delay_bonus_percentage = BigInt(22);
      const max_followees_per_function = BigInt(23);
      const neuron_claimer_permissions = { permissions: new Int32Array() };
      const neuron_minimum_stake_e8s = BigInt(24);
      const max_neuron_age_for_age_bonus = BigInt(25);
      const initial_voting_period_seconds = BigInt(26);
      const neuron_minimum_dissolve_delay_to_vote_seconds = BigInt(27);
      const reject_cost_e8s = BigInt(28);
      const max_proposals_to_keep_per_action = 2;
      const max_number_of_neurons = BigInt(29);
      const transaction_fee_e8s = BigInt(30);
      const max_age_bonus_percentage = BigInt(31);
      const neuron_grantable_permissions = { permissions: new Int32Array() };
      const final_reward_rate_basis_points = BigInt(32);
      const initial_reward_rate_basis_points = BigInt(33);
      const reward_rate_transition_duration_seconds = BigInt(34);
      const round_duration_seconds = BigInt(35);
      const max_number_of_principals_per_neuron = BigInt(2);

      const action: ActionCandid = {
        ManageNervousSystemParameters: {
          default_followees: [default_followees],
          max_dissolve_delay_seconds: [max_dissolve_delay_seconds],
          max_dissolve_delay_bonus_percentage: [
            max_dissolve_delay_bonus_percentage,
          ],
          max_followees_per_function: [max_followees_per_function],
          neuron_claimer_permissions: [neuron_claimer_permissions],
          neuron_minimum_stake_e8s: [neuron_minimum_stake_e8s],
          max_neuron_age_for_age_bonus: [max_neuron_age_for_age_bonus],
          initial_voting_period_seconds: [initial_voting_period_seconds],
          neuron_minimum_dissolve_delay_to_vote_seconds: [
            neuron_minimum_dissolve_delay_to_vote_seconds,
          ],
          reject_cost_e8s: [reject_cost_e8s],
          max_proposals_to_keep_per_action: [max_proposals_to_keep_per_action],
          wait_for_quiet_deadline_increase_seconds: [],
          max_number_of_neurons: [max_number_of_neurons],
          transaction_fee_e8s: [transaction_fee_e8s],
          max_number_of_proposals_with_ballots: [],
          max_age_bonus_percentage: [max_age_bonus_percentage],
          neuron_grantable_permissions: [neuron_grantable_permissions],
          voting_rewards_parameters: [
            {
              final_reward_rate_basis_points: [final_reward_rate_basis_points],
              initial_reward_rate_basis_points: [
                initial_reward_rate_basis_points,
              ],
              reward_rate_transition_duration_seconds: [
                reward_rate_transition_duration_seconds,
              ],
              round_duration_seconds: [round_duration_seconds],
            },
          ],
          max_number_of_principals_per_neuron: [
            max_number_of_principals_per_neuron,
          ],
          maturity_modulation_disabled: [false],
        },
      };
      const expectedAction: Action = {
        ManageNervousSystemParameters: {
          default_followees,
          max_dissolve_delay_seconds,
          max_dissolve_delay_bonus_percentage,
          max_followees_per_function,
          neuron_claimer_permissions,
          neuron_minimum_stake_e8s,
          max_neuron_age_for_age_bonus,
          initial_voting_period_seconds,
          neuron_minimum_dissolve_delay_to_vote_seconds,
          reject_cost_e8s,
          max_proposals_to_keep_per_action,
          wait_for_quiet_deadline_increase_seconds: undefined,
          max_number_of_neurons,
          transaction_fee_e8s,
          max_number_of_proposals_with_ballots: undefined,
          max_age_bonus_percentage,
          neuron_grantable_permissions,
          voting_rewards_parameters: {
            final_reward_rate_basis_points,
            initial_reward_rate_basis_points,
            reward_rate_transition_duration_seconds,
            round_duration_seconds,
          },
          max_number_of_principals_per_neuron,
        },
      };
      expect(fromCandidAction(action)).toEqual(expectedAction);
    });

    it("converts AddGenericNervousSystemFunction action", () => {
      const id = BigInt(3);
      const name = "test function";
      const description = "test description";
      const validator_canister_id = mockPrincipal;
      const target_canister_id = Principal.fromHex("AB");
      const validator_method_name = "validator_method_name";
      const target_method_name = "target_method_name";
      const action: ActionCandid = {
        AddGenericNervousSystemFunction: {
          id,
          name,
          description: [description],
          function_type: [
            {
              GenericNervousSystemFunction: {
                validator_canister_id: [validator_canister_id],
                target_canister_id: [target_canister_id],
                validator_method_name: [validator_method_name],
                target_method_name: [target_method_name],
              },
            },
          ],
        },
      };
      const expectedAction: Action = {
        AddGenericNervousSystemFunction: {
          id,
          name,
          description,
          function_type: {
            GenericNervousSystemFunction: {
              validator_canister_id,
              target_canister_id,
              validator_method_name,
              target_method_name,
            },
          },
        },
      };
      expect(fromCandidAction(action)).toEqual(expectedAction);
    });

    it("converts RemoveGenericNervousSystemFunction action", () => {
      const action: ActionCandid = {
        RemoveGenericNervousSystemFunction: BigInt(3),
      };
      expect(fromCandidAction(action)).toEqual(action);
    });

    it("converts UpgradeSnsToNextVersion action", () => {
      const action: ActionCandid = {
        UpgradeSnsToNextVersion: {},
      };
      expect(fromCandidAction(action)).toEqual(action);
    });

    it("converts RegisterDappCanisters action", () => {
      const action: ActionCandid = {
        RegisterDappCanisters: {
          canister_ids: [mockPrincipal],
        },
      };
      expect(fromCandidAction(action)).toEqual(action);
    });

    it("converts TransferSnsTreasuryFunds action", () => {
      const from_treasury = 3;
      const to_principal = mockPrincipal;
      const memo = BigInt(3);
      const amount_e8s = BigInt(10_000_000_000);
      const action: ActionCandid = {
        TransferSnsTreasuryFunds: {
          from_treasury,
          to_principal: [to_principal],
          to_subaccount: [],
          memo: [memo],
          amount_e8s,
        },
      };
      const expectedAction: Action = {
        TransferSnsTreasuryFunds: {
          from_treasury,
          to_principal,
          to_subaccount: undefined,
          memo,
          amount_e8s,
        },
      };
      expect(fromCandidAction(action)).toEqual(expectedAction);
    });

    it("converts UpgradeSnsControlledCanister action", () => {
      const new_canister_wasm = new Uint8Array();
      const canister_id = mockPrincipal;
      const wasm_module_hash = new Uint8Array([1, 2, 3]);
      const store_canister_id = Principal.fromHex("123f");
      const chunk_hashes_list = [
        new Uint8Array([4, 5, 6]),
        new Uint8Array([7, 8, 9]),
      ];
      const mode = 1;
      const action: ActionCandid = {
        UpgradeSnsControlledCanister: {
          new_canister_wasm,
          chunked_canister_wasm: [
            {
              wasm_module_hash,
              store_canister_id: [store_canister_id],
              chunk_hashes_list,
            },
          ],
          canister_id: [canister_id],
          canister_upgrade_arg: [],
          mode: [mode],
        },
      };
      const expectedAction: Action = {
        UpgradeSnsControlledCanister: {
          new_canister_wasm: new Uint8Array(),
          chunked_canister_wasm: {
            wasm_module_hash,
            store_canister_id,
            chunk_hashes_list,
          },
          canister_id,
          canister_upgrade_arg: undefined,
          mode,
        },
      };
      expect(fromCandidAction(action)).toEqual(expectedAction);
    });

    it("converts DeregisterDappCanisters action", () => {
      const action: ActionCandid = {
        DeregisterDappCanisters: {
          canister_ids: [mockPrincipal],
          new_controllers: [Principal.fromHex("AB")],
        },
      };
      expect(fromCandidAction(action)).toEqual(action);
    });

    it("converts Unspecified action", () => {
      const action: ActionCandid = {
        Unspecified: {},
      };
      expect(fromCandidAction(action)).toEqual(action);
    });

    it("converts ManageSnsMetadata action", () => {
      const url = "https://example.com";
      const name = "New name";
      const action: ActionCandid = {
        ManageSnsMetadata: {
          url: [url],
          logo: [],
          name: [name],
          description: [],
        },
      };
      const expectedAction: Action = {
        ManageSnsMetadata: {
          url,
          logo: undefined,
          name,
          description: undefined,
        },
      };
      expect(fromCandidAction(action)).toEqual(expectedAction);
    });

    it("converts ExecuteGenericNervousSystemFunction action", () => {
      const action: ActionCandid = {
        ExecuteGenericNervousSystemFunction: {
          function_id: BigInt(3),
          payload: new Uint8Array(),
        },
      };
      expect(fromCandidAction(action)).toEqual(action);
    });

    it("converts Motion action", () => {
      const action: ActionCandid = {
        Motion: { motion_text: "test motion" },
      };
      expect(fromCandidAction(action)).toEqual(action);
    });
  });
});
