/* Do not edit.  Compiled with ./scripts/compile-idl-js from packages/nns/candid/sns_wasm.did */
export const idlFactory = ({ IDL }) => {
  const SnsWasmCanisterInitPayload = IDL.Record({
    'access_controls_enabled' : IDL.Bool,
    'sns_subnet_ids' : IDL.Vec(IDL.Principal),
  });
  const SnsWasm = IDL.Record({
    'wasm' : IDL.Vec(IDL.Nat8),
    'canister_type' : IDL.Int32,
  });
  const AddWasmRequest = IDL.Record({
    'hash' : IDL.Vec(IDL.Nat8),
    'wasm' : IDL.Opt(SnsWasm),
  });
  const SnsWasmError = IDL.Record({ 'message' : IDL.Text });
  const Result = IDL.Variant({
    'Error' : SnsWasmError,
    'Hash' : IDL.Vec(IDL.Nat8),
  });
  const AddWasmResponse = IDL.Record({ 'result' : IDL.Opt(Result) });
  const TreasuryDistribution = IDL.Record({ 'total_e8s' : IDL.Nat64 });
  const NeuronDistribution = IDL.Record({
    'controller' : IDL.Opt(IDL.Principal),
    'dissolve_delay_seconds' : IDL.Nat64,
    'memo' : IDL.Nat64,
    'stake_e8s' : IDL.Nat64,
  });
  const DeveloperDistribution = IDL.Record({
    'developer_neurons' : IDL.Vec(NeuronDistribution),
  });
  const AirdropDistribution = IDL.Record({
    'airdrop_neurons' : IDL.Vec(NeuronDistribution),
  });
  const SwapDistribution = IDL.Record({
    'total_e8s' : IDL.Nat64,
    'initial_swap_amount_e8s' : IDL.Nat64,
  });
  const FractionalDeveloperVotingPower = IDL.Record({
    'treasury_distribution' : IDL.Opt(TreasuryDistribution),
    'developer_distribution' : IDL.Opt(DeveloperDistribution),
    'airdrop_distribution' : IDL.Opt(AirdropDistribution),
    'swap_distribution' : IDL.Opt(SwapDistribution),
  });
  const InitialTokenDistribution = IDL.Variant({
    'FractionalDeveloperVotingPower' : FractionalDeveloperVotingPower,
  });
  const SnsInitPayload = IDL.Record({
    'url' : IDL.Opt(IDL.Text),
    'fallback_controller_principal_ids' : IDL.Vec(IDL.Text),
    'token_symbol' : IDL.Opt(IDL.Text),
    'neuron_minimum_stake_e8s' : IDL.Opt(IDL.Nat64),
    'logo' : IDL.Opt(IDL.Text),
    'name' : IDL.Opt(IDL.Text),
    'neuron_minimum_dissolve_delay_to_vote_seconds' : IDL.Opt(IDL.Nat64),
    'description' : IDL.Opt(IDL.Text),
    'transaction_fee_e8s' : IDL.Opt(IDL.Nat64),
    'sns_initialization_parameters' : IDL.Opt(IDL.Text),
    'initial_token_distribution' : IDL.Opt(InitialTokenDistribution),
    'token_name' : IDL.Opt(IDL.Text),
    'proposal_reject_cost_e8s' : IDL.Opt(IDL.Nat64),
  });
  const DeployNewSnsRequest = IDL.Record({
    'sns_init_payload' : IDL.Opt(SnsInitPayload),
  });
  const SnsCanisterIds = IDL.Record({
    'root' : IDL.Opt(IDL.Principal),
    'swap' : IDL.Opt(IDL.Principal),
    'ledger' : IDL.Opt(IDL.Principal),
    'governance' : IDL.Opt(IDL.Principal),
  });
  const DeployNewSnsResponse = IDL.Record({
    'subnet_id' : IDL.Opt(IDL.Principal),
    'error' : IDL.Opt(SnsWasmError),
    'canisters' : IDL.Opt(SnsCanisterIds),
  });
  const SnsVersion = IDL.Record({
    'archive_wasm_hash' : IDL.Vec(IDL.Nat8),
    'root_wasm_hash' : IDL.Vec(IDL.Nat8),
    'swap_wasm_hash' : IDL.Vec(IDL.Nat8),
    'ledger_wasm_hash' : IDL.Vec(IDL.Nat8),
    'governance_wasm_hash' : IDL.Vec(IDL.Nat8),
  });
  const GetNextSnsVersionRequest = IDL.Record({
    'current_version' : IDL.Opt(SnsVersion),
  });
  const GetNextSnsVersionResponse = IDL.Record({
    'next_version' : IDL.Opt(SnsVersion),
  });
  const GetWasmRequest = IDL.Record({ 'hash' : IDL.Vec(IDL.Nat8) });
  const GetWasmResponse = IDL.Record({ 'wasm' : IDL.Opt(SnsWasm) });
  const DeployedSns = IDL.Record({
    'root_canister_id' : IDL.Opt(IDL.Principal),
  });
  const ListDeployedSnsesResponse = IDL.Record({
    'instances' : IDL.Vec(DeployedSns),
  });
  return IDL.Service({
    'add_wasm' : IDL.Func([AddWasmRequest], [AddWasmResponse], []),
    'deploy_new_sns' : IDL.Func(
        [DeployNewSnsRequest],
        [DeployNewSnsResponse],
        [],
      ),
    'get_latest_sns_version_pretty' : IDL.Func(
        [IDL.Null],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'get_next_sns_version' : IDL.Func(
        [GetNextSnsVersionRequest],
        [GetNextSnsVersionResponse],
        ['query'],
      ),
    'get_wasm' : IDL.Func([GetWasmRequest], [GetWasmResponse], ['query']),
    'list_deployed_snses' : IDL.Func(
        [IDL.Record({})],
        [ListDeployedSnsesResponse],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => {
  const SnsWasmCanisterInitPayload = IDL.Record({
    'access_controls_enabled' : IDL.Bool,
    'sns_subnet_ids' : IDL.Vec(IDL.Principal),
  });
  return [SnsWasmCanisterInitPayload];
};
