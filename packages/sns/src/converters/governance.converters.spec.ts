import { Principal } from "@dfinity/principal";
import type { Action as ActionCandid } from "../../candid/sns_governance";
import type { Action } from "../types/actions";
import { toActionOptional } from "./governance.converters";

describe("governance converters", () => {
  describe("toActionOptional", () => {
    const mockPrincipal = Principal.fromText("aaaaa-aa");

    it("converts ManageNervousSystemParameters action", () => {
      const action: ActionCandid = {
        ManageNervousSystemParameters: {
          default_followees: [
            {
              followees: [
                [BigInt(2), { followees: [{ id: new Uint8Array(0) }] }],
              ],
            },
          ],
          max_dissolve_delay_seconds: [BigInt(2)],
          max_dissolve_delay_bonus_percentage: [BigInt(2)],
          max_followees_per_function: [BigInt(2)],
          neuron_claimer_permissions: [{ permissions: new Int32Array() }],
          neuron_minimum_stake_e8s: [BigInt(2)],
          max_neuron_age_for_age_bonus: [BigInt(2)],
          initial_voting_period_seconds: [BigInt(2)],
          neuron_minimum_dissolve_delay_to_vote_seconds: [BigInt(2)],
          reject_cost_e8s: [BigInt(2)],
          max_proposals_to_keep_per_action: [2],
          wait_for_quiet_deadline_increase_seconds: [],
          max_number_of_neurons: [BigInt(2)],
          transaction_fee_e8s: [BigInt(2)],
          max_number_of_proposals_with_ballots: [],
          max_age_bonus_percentage: [BigInt(2)],
          neuron_grantable_permissions: [{ permissions: new Int32Array() }],
          voting_rewards_parameters: [
            {
              final_reward_rate_basis_points: [BigInt(3)],
              initial_reward_rate_basis_points: [BigInt(3)],
              reward_rate_transition_duration_seconds: [BigInt(3)],
              round_duration_seconds: [BigInt(3)],
            },
          ],
          max_number_of_principals_per_neuron: [BigInt(2)],
        },
      };
      const expectedAction: Action = {
        ManageNervousSystemParameters: {
          default_followees: {
            followees: [
              [BigInt(2), { followees: [{ id: new Uint8Array(0) }] }],
            ],
          },
          max_dissolve_delay_seconds: BigInt(2),
          max_dissolve_delay_bonus_percentage: BigInt(2),
          max_followees_per_function: BigInt(2),
          neuron_claimer_permissions: { permissions: new Int32Array() },
          neuron_minimum_stake_e8s: BigInt(2),
          max_neuron_age_for_age_bonus: BigInt(2),
          initial_voting_period_seconds: BigInt(2),
          neuron_minimum_dissolve_delay_to_vote_seconds: BigInt(2),
          reject_cost_e8s: BigInt(2),
          max_proposals_to_keep_per_action: 2,
          wait_for_quiet_deadline_increase_seconds: undefined,
          max_number_of_neurons: BigInt(2),
          transaction_fee_e8s: BigInt(2),
          max_number_of_proposals_with_ballots: undefined,
          max_age_bonus_percentage: BigInt(2),
          neuron_grantable_permissions: { permissions: new Int32Array() },
          voting_rewards_parameters: {
            final_reward_rate_basis_points: BigInt(3),
            initial_reward_rate_basis_points: BigInt(3),
            reward_rate_transition_duration_seconds: BigInt(3),
            round_duration_seconds: BigInt(3),
          },
          max_number_of_principals_per_neuron: BigInt(2),
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts AddGenericNervousSystemFunction action", () => {
      const action: ActionCandid = {
        AddGenericNervousSystemFunction: {
          id: BigInt(3),
          name: "test function",
          description: ["test description"],
          function_type: [
            {
              GenericNervousSystemFunction: {
                validator_canister_id: [],
                target_canister_id: [mockPrincipal],
                validator_method_name: ["validator_method_name"],
                target_method_name: ["target_method_name"],
              },
            },
          ],
        },
      };
      const expectedAction: Action = {
        AddGenericNervousSystemFunction: {
          id: BigInt(3),
          name: "test function",
          description: "test description",
          function_type: {
            GenericNervousSystemFunction: {
              validator_canister_id: undefined,
              target_canister_id: mockPrincipal,
              validator_method_name: "validator_method_name",
              target_method_name: "target_method_name",
            },
          },
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts RemoveGenericNervousSystemFunction action", () => {
      const action: ActionCandid = {
        RemoveGenericNervousSystemFunction: BigInt(3),
      };
      const expectedAction: Action = {
        RemoveGenericNervousSystemFunction: BigInt(3),
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts UpgradeSnsToNextVersion action", () => {
      const action: ActionCandid = {
        UpgradeSnsToNextVersion: {},
      };
      const expectedAction: Action = {
        UpgradeSnsToNextVersion: {},
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts RegisterDappCanisters action", () => {
      const action: ActionCandid = {
        RegisterDappCanisters: {
          canister_ids: [mockPrincipal],
        },
      };
      const expectedAction: Action = {
        RegisterDappCanisters: {
          canister_ids: [mockPrincipal],
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts TransferSnsTreasuryFunds action", () => {
      const action: ActionCandid = {
        TransferSnsTreasuryFunds: {
          from_treasury: 3,
          to_principal: [mockPrincipal],
          to_subaccount: [],
          memo: [BigInt(3)],
          amount_e8s: BigInt(3),
        },
      };
      const expectedAction: Action = {
        TransferSnsTreasuryFunds: {
          from_treasury: 3,
          to_principal: mockPrincipal,
          to_subaccount: undefined,
          memo: BigInt(3),
          amount_e8s: BigInt(3),
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts UpgradeSnsControlledCanister action", () => {
      const action: ActionCandid = {
        UpgradeSnsControlledCanister: {
          new_canister_wasm: new Uint8Array(),
          canister_id: [mockPrincipal],
          canister_upgrade_arg: [],
        },
      };
      const expectedAction: Action = {
        UpgradeSnsControlledCanister: {
          new_canister_wasm: new Uint8Array(),
          canister_id: mockPrincipal,
          canister_upgrade_arg: undefined,
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts DeregisterDappCanisters action", () => {
      const action: ActionCandid = {
        DeregisterDappCanisters: {
          canister_ids: [mockPrincipal],
          new_controllers: [mockPrincipal],
        },
      };
      const expectedAction: Action = {
        DeregisterDappCanisters: {
          canister_ids: [mockPrincipal],
          new_controllers: [mockPrincipal],
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts Unspecified action", () => {
      const action: ActionCandid = {
        Unspecified: {},
      };
      const expectedAction: Action = {
        Unspecified: {},
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts ManageSnsMetadata action", () => {
      const action: ActionCandid = {
        ManageSnsMetadata: {
          url: ["https://example.com"],
          logo: [],
          name: ["New name"],
          description: [],
        },
      };
      const expectedAction: Action = {
        ManageSnsMetadata: {
          url: "https://example.com",
          logo: undefined,
          name: "New name",
          description: undefined,
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts ExecuteGenericNervousSystemFunction action", () => {
      const action: ActionCandid = {
        ExecuteGenericNervousSystemFunction: {
          function_id: BigInt(3),
          payload: new Uint8Array(),
        },
      };
      const expectedAction: Action = {
        ExecuteGenericNervousSystemFunction: {
          function_id: BigInt(3),
          payload: new Uint8Array(),
        },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });

    it("converts Motion action", () => {
      const action: ActionCandid = {
        Motion: { motion_text: "test motion" },
      };
      const expectedAction: Action = {
        Motion: { motion_text: "test motion" },
      };
      expect(toActionOptional(action)).toEqual(expectedAction);
    });
  });
});
