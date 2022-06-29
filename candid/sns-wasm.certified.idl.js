export const idlFactory = ({ IDL }) => {
    const SnsWasmCanisterInitPayload = IDL.Record({
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
    const AddWasmOk = IDL.Record({ 'hash' : IDL.Vec(IDL.Nat8) });
    const AddWasmError = IDL.Record({ 'error' : IDL.Text });
    const Result = IDL.Variant({ 'Ok' : AddWasmOk, 'Error' : AddWasmError });
    const AddWasmResponse = IDL.Record({ 'result' : IDL.Opt(Result) });
    const SnsCanisterIds = IDL.Record({
        'root' : IDL.Opt(IDL.Principal),
        'swap' : IDL.Opt(IDL.Principal),
        'ledger' : IDL.Opt(IDL.Principal),
        'governance' : IDL.Opt(IDL.Principal),
    });
    const DeployNewSnsResponse = IDL.Record({
        'subnet_id' : IDL.Opt(IDL.Principal),
        'canisters' : IDL.Opt(SnsCanisterIds),
    });
    const SnsVersion = IDL.Record({
        'root_wasm_hash' : IDL.Vec(IDL.Nat8),
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
        'deploy_new_sns' : IDL.Func([IDL.Record({})], [DeployNewSnsResponse], []),
        'get_next_sns_version' : IDL.Func(
            [GetNextSnsVersionRequest],
            [GetNextSnsVersionResponse],
            [],
        ),
        'get_wasm' : IDL.Func([GetWasmRequest], [GetWasmResponse], []),
        'list_deployed_snses' : IDL.Func(
            [IDL.Record({})],
            [ListDeployedSnsesResponse],
            [],
        ),
    });
};
export const init = ({ IDL }) => {
    const SnsWasmCanisterInitPayload = IDL.Record({
        'sns_subnet_ids' : IDL.Vec(IDL.Principal),
    });
    return [SnsWasmCanisterInitPayload];
};
