# 0.5.0 (2022-06-23)
- ???

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
