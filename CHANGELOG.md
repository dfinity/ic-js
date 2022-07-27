# 0.x.y (2022-aa-bb)

## Release

- nns `v0.x.y`
- sns `v0.x.y`
- utils `v0.x.y`

### Breaking changes

- Sns canisters' classes renamed with prefix `Sns`

### Features

- more Sns related features such as `notifyParticipation`

# 0.6.0 (2022-07-20)

## Release

- nns `v0.6.0`
- sns `v0.0.2`

### Breaking Changes

- `nns` library `esm` canisters chunks renamed with suffix `.canister`

### Features

- new library `@dfinity/sns`
- add `SetSnsTokenSwapOpenTimeWindow` proposal action support to request and response converters
- add new property in Neuron type: `spawn_at_timestamp_seconds`
- use the governance canister id of the class in converters. This allows to also have proper conversion on testnets.
- add `leaveCommunityFund` functionality to governance canister in `@dfinity/nns`.
- map `deadline_timestamp_seconds` to proposal object
- new NNS proposal topic `SnsDecentralizationSale`

### Fix

- fix how the neuron account was converted to a `string` for `proto`.

### Build

- bump dependencies including agent-js v0.12.0
- rename repo from `nns-js` to `ic-js`
- transform repo into a mono-repo for packages `nns`, `sns` and in the future more libraries

# 0.5.0 (2022-06-23)

## Breaking

- Change "fromSubAccountId: string" param to "fromSubAccount: number[]"

## Features

- Remove payload, payloadBytes and nnsFunctionName fields from proposal of type ExecuteNnsFunction action (moved to nns-dapp)
- Use Candid interface by default for ledger canister and proto for hardware wallet
- New function transactionFee to query the current transaction fee

# 0.4.3 (2022-06-01)

### Features

- update most recent candid payloads

### Build

- bump agent-js `v0.11.3` with `setBigUint64` for iOS < v15

# 0.4.1 - 0.4.2 (2022-05-23)

### Features

- new methods `disburse`, `mergeMaturity` and `spawnNeuron`
- expose account utilities
- expose account identifier utilities
- update most recent candid payloads
- remove principal toJSON workaround
- Hardware wallet compatibility with protobuf
- add support for `GenesisTokenCanister::claim_neurons`

### Build

- bump dependencies

# 0.4.0 (2022-04-22)

### Breaking Changes

- Replace `notVotedNeurons` with `votableNeurons` [#77]
- Serialize Principal rather than a byte array in JSON.
- Allow neurons with zero stake to pass through the filter.

### Features

- New methods splitNeuron, mergeNeurons, addHotkey and removeHotkey in Governance Service.
- Add options `memo` and `fee` to ledger `transfer` function for hardware wallet compatibility.
- Add `votableNeurons(..)` utility function.
- Update dependencies and stop using now deprecated functions.

# 0.3.0 (2022-04-07)

### Breaking Changes

- variant return types dropped - i.e. functions now return effective result and throw errors in case of issues [#59]
- governance function `getNeurons` to `listNeurons` renamed [#55]
- governance functions `getNeurons` and `listNeurons` change signature [#69]
- Drop `isCurrentUserController` property from `Neuron` type [#69]
- remove some converters that were not use internally [#62]

### Features

- governance new functions:
  - `getProposal`
  - `stakeNeuron`
  - `registerVote`
  - `increaseDissolveDelay`
  - `getNeuron`
  - `setFollowees`
- ledger `transfer` enhanced with support for subaccount
- new utils to filter voted neurons and proposals
- export `common` types

### Build

- nns-dapp canister types removed
- nightly build job

### Tests

- add test for protobug files
