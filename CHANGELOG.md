# 0.12.0 (wip)

## Release

- nns `v0.12.0`
- sns `v0.0.9`
- cmc `v0.0.5`
- utils `v0.0.8`

# 0.11.0 (wip)

## Release

- nns `v0.11.0`
- sns `v0.0.8`
- cmc `v0.0.4`
- utils `v0.0.7`

### Features

- new Sns features: increase stake neuron

### Build

- bump `agent-js` peer dependencies to `v0.15.1`
- bump Nns (`crc` and `google-protobuf`) dependencies
- bump dev dependencies

# 0.10.0 (2022-12-06)

## Release

- nns `v0.10.0`
- sns `v0.0.7`
- cmc `v0.0.3`
- utils `v0.0.6`

### Features

- various neuron features for Sns - e.g. stake neuron, list and set followees, set dissolve delay, stake maturity etc.
- array utilities `bigIntToUint8Array` and `numberToUint8Array`
- semantic version comparator `smallerVersion`

### Fix

- rounding conversion from `number` to `Token`

# 0.9.0 (2022-10-31)

## Release

- nns `v0.9.0`
- sns `v0.0.6`
- cmc `v0.0.2`
- utils `v0.0.5`

### Breaking changes

- `token` param in `TokenAmount` factory methods is mandatory instead of using ICPToken as default.
- `TokenAmount.fromNumber` does not return `FromStringToTokenError`, only `TokenAmount`.

### Features

- new NNS governance features: `stakeMaturity` and `autoStakeMaturity`
- various additional new NNS functions and proposal types
- new SNS `index` canister
- new SNS ledger and wrapper feature: `transfer` and `transactionFee`
- SNS did files updated with most recent commit in IC repo
- support join community fund for neurons controlled by Hardware Wallet.

### Build

- bump dev dependencies
- bump `agent-js` peer dependencies v0.14.0

### Docs

- refreshed [HACKING.md](/HACKING.md)

# 0.8.0 (2022-09-26)

## Release

- nns `v0.8.1`
- sns `v0.0.5`
- cmc `v0.0.1`
- utils `v0.0.4`

### Breaking changes

- the development dependency `didc` has been bumped which leads to some types having to be converted from `number[]` to `Uint8Array`
- new fields `stakedMaturityE8sEquivalent` and `autoStakeMaturity` in `Neuron`

### Features

- new library `@dfinity/cmc`
- new nns governance commands and actions: `ChangeAutoStakeMaturity`, `SetSnsTokenSwapOpenTimeWindow` and `OpenSnsTokenSwap`
- some new utilities added to transform arrays from various format to `Uint8Array`
- new Sns utilities to encode and decode accounts to and from strings
- `disburse` Sns neurons
- `createAgent` and `principalToSubAccount` added to utils

# 0.7.0 (2022-09-19)

## Release

- nns `v0.7.0`
- sns `v0.0.3`
- utils `v0.0.2`

### Breaking changes

- `agent-js` dependencies set as `peerDependencies`
- Sns canisters' classes renamed with prefix `Sns`
- enums renamed with Pascal case for consistency reason

### Features

- new library `@dfinity/utils`
- more Sns related features: `notifyParticipation`, `getUserCommitment`, some Sns neurons related features and governance `metadata`
- new nns governance features: `setDissolveDelay` and `setNodeProviderAccount`
- new generic interface `Token` and class `TokenAmount`
- class `ICP` set as deprecated

### Build

- bump agent-js `v0.13.1`
- publish `next` instead of `nightly-build` working versions
- add manual trigger to GitHub Actions for npm publish

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
