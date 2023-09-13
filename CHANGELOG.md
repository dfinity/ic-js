# 0.18.5 (wip)

## Release

- nns `v0.16.8`
- sns `v0.0.23`
- cmc `v0.0.19`
- ledger `v0.0.16`
- ckBTC `v0.0.12`
- ic-management `v0.0.9`
- utils `v0.0.23`
- nns-proto `v0.0.9`

## Features

- add support for `icrc2_transfer_from`, `icrc2_approve` and `icrc2_allowance` in `@dfinity/ledger`
- update index did definitions in ledger which provides more information in the transactions

## Build

- bump did files in Cmc

# 0.18.4 (2023-09-05)

## Release

- nns `v0.16.7`
- sns `v0.0.22`
- cmc `v0.0.18`
- ledger `v0.0.15`
- ckBTC `v0.0.11`
- ic-management `v0.0.8`
- utils `v0.0.22`
- nns-proto `v0.0.8`

## Features

- replaces the `js-sha256` library with `@noble/hashes`

# 0.18.3 (2023-09-04)

## Release

- nns `v0.16.6`
- sns `v0.0.21`
- cmc `v0.0.17`
- ledger `v0.0.14`
- ckBTC `v0.0.10`
- ic-management `v0.0.7`
- utils `v0.0.21`
- nns-proto `v0.0.7`

## Fix

- bump agent-js `v0.19.2` to fix evaluation of subdomain when `host` is not specified

## Build

- remove unused dependencies in `@dfinity/ic-management`

# 0.18.2 (2023-08-24)

## Release

- nns `v0.16.5`
- sns `v0.0.20`
- cmc `v0.0.16`
- ledger `v0.0.13`
- ckBTC `v0.0.9`
- ic-management `v0.0.6`
- utils `v0.0.20`
- nns-proto `v0.0.6`

## Features

- Reviver and replacer to interpret `BigInt`, `Principal`, and `Uint8Array` in `JSON.stringify|parse`
- Add Sns disburse maturity function

## Build

- bump agent-js `v0.19.1`

# 0.18.1 (2023-08-07)

## Release

- nns `v0.16.4`
- sns `v0.0.19`
- cmc `v0.0.15`
- ledger `v0.0.12`
- ckBTC `v0.0.8`
- ic-management `v0.0.5`
- utils `v0.0.19`
- nns-proto `v0.0.5`

## Features

- update `nns/governance.did` and `sns_wasm.did` for 1-proposal
- update `ic.did` for `@dfinity/ic-management`
- update `icrc1_ledger.did`

## Build

- bump agent-js `v0.18.1`

## Docs

- add mention that ICRC-22 is currently a draft

# 0.18.0 (2023-07-03)

## Release

- nns `v0.16.3`
- sns `v0.0.18`
- cmc `v0.0.14`
- ledger `v0.0.11`
- ckBTC `v0.0.7`
- ic-management `v0.0.4`
- utils `v0.0.18`
- nns-proto `v0.0.4`

## Breaking Changes

- move `convertStringToE8s` and `TokenAmount` from Nns package to `@dfinity/utils`
- retire `TokenAmount.toProto()`

## Features

- add a new utils function `decodePayment` to the `@dfinity/ledger` library. Useful to decode payment through QR code that contains target address and amount
- add provisional create canister with cycles method
- `CreateServiceNervousSystem` <-> `RawCreateServiceNervousSystem` transformations for Nns proposal
- decode payment code (early support and not yet specified. see ICRC-22)

## Build

- bump `semver`

# 0.17.2 (2023-06-21)

## Release

- ic-management `v0.0.3`

## Build

No particular changes. Resolve a version conflicts in npmjs.

# 0.17.1 (2023-06-21)

## Release

- nns `v0.16.2`
- sns `v0.0.17`
- cmc `v0.0.13`
- ledger `v0.0.10`
- ckBTC `v0.0.6`
- ic-management `v0.0.2`
- utils `v0.0.17`
- nns-proto `v0.0.3`

## Fix

- redo `global` polyfill for the browser
- expose more types in new library `ic-management-js`

## Build

- fix `ic-management-js` next dependencies and version

## Docs

- various improvements in READMEs

# 0.17.0 (2023-06-20)

## Release

- nns `v0.16.1`
- sns `v0.0.16`
- cmc `v0.0.12`
- ledger `v0.0.9`
- ckBTC `v0.0.5`
- ic-management `v0.0.1`
- utils `v0.0.16`
- nns-proto `v0.0.2`

## Breaking Changes

- ckBTC `getDepositFee` has been deprecated. Instead, use the new feature `getMinterInfo`

## Features

- introducing `@dfinity/ic-management` — a new library for interfacing with IC management canister
- add `getMinterInfo` for ckBTC which returns internal minter parameters such as the minimal amount to retrieve BTC, minimal number of confirmations or KYT fee
- add fee to nns stake neuron method
- expose Sns index canister id in wrapper
- add `simulateMergeNeurons` to Nns governance

## Refactor

- use `isNullish` and `fromNullable` utils in Nns `governance.canister.ts`

## Build

- remove `global` polyfill for the browser and add `worker` conditions to bundle
- improve docs generation in the CI
- update Candid types in Nns

## Docs

- improve Sns README
- generate README docs for BTC utils

# 0.16.0 (2023-05-24)

## Release

- nns `v0.16.0`
- sns `v0.0.15`
- cmc `v0.0.11`
- ledger `v0.0.8`
- ckBTC `v0.0.4`
- utils `v0.0.15`
- nns-proto `v0.0.1`

## Breaking Changes

- the protobuf dependencies of `@dfinity/nns` have been extracted to a new peer dependency called `@dfinity/nns-proto`. In the NNS-dapp, we manually chunk the libraries. This change enables the dapp to load the required code of the hardware wallet only when necessary.

## Features

- update `sns-js` and `nns-js` candid definitions
- add `BitcoinSetConfig` to enum `NnsFunction`
- expose some more Sns types

## Build

- publish provenance to npm
- do not run size checker on main branch

## Docs

- fix sample in `nns-js` README

# 0.15.1 (2023-04-18)

## Release

- nns `v0.15.1`
- sns `v0.0.14`
- cmc `v0.0.10`
- ledger `v0.0.7`
- ckBTC `v0.0.3`
- utils `v0.0.14`

## Fix

- correct absolute `utils` import in `ledger` library

# 0.15.0 (2023-04-18)

## Release

- nns `v0.15.0`
- sns `v0.0.13`
- cmc `v0.0.9`
- ledger `v0.0.6`
- ckBTC `v0.0.2`
- utils `v0.0.13`

## Features

- new utils moved from NNS-dapp: `isNullish`, `nonNullish`, `notEmptyString` and `debounce`
- added ckBTC `updateBalance`, `getWithdrawalAccount`, `retrieveBtc`, `estimateWithdrawalFee` and `getDepositFee` functions
- parse and validate bitcoin address
- review textual encoding for ICRC-1 account as in [dfinity/ICRC-1#98](https://github.com/dfinity/ICRC-1/pull/98)
- add SNS action converters
- get latest reward event NNS Governance
- extend nnsFuncton enum with UpdateElectedReplicaVersions
- add total tokens supply endpoint
- new utils to convert hex to/from uint8array, crc and base32

## Build

- bump agent-js `v0.15.4`
- bump all dev dependencies
- hook size limit plugin to check the size of the libraries with the CI

# 0.14.0 (2023-02-07)

## Release

- nns `v0.14.0`
- sns `v0.0.12`
- cmc `v0.0.8`
- ledger `v0.0.5`
- ckBTC `v0.0.1`
- utils `v0.0.12`

### Breaking changes

- `index` canister moved from `@dfinity/sns` to `@dfinity/ledger`
- related classes and types renamed from `Sns...` to `Icrc...`

### Features

- new `@dfinity/ckbtc` library for interfacing with ckBTC on the Internet Computer
- export a constant for the Icrc1 metadata logo
- move and expose `assertPercentageNumber` to lib `@dfinity/utils`
- register Sns vote

### Build

- fix `utils` as peer dependency for `cmc`
- fix `sns` using `nns` dependencies
- bump all dev dependencies
- bump Nns dependencies
- dependabot patch for json5 v1.0.2

# 0.13.0 (2023-01-28)

## Release

- nns `v0.13.0`
- sns `v0.0.11`
- cmc `v0.0.7`
- ledger `v0.0.4`
- utils `v0.0.11`

### Features

- add fee as param in SNS Stake neuron
- extend `NnsFunction` enum with `InsertSnsWasmUpgradePathEntries`

### Fix

- encode ICRC-1 accounts

# 0.12.1 (2023-01-24)

## Release

- nns `v0.12.1`
- sns `v0.0.10`
- cmc `v0.0.6`
- ledger `v0.0.3`
- utils `v0.0.10`

### Fix

- `utils` was wrongly referenced as a dependency instead of peer-dependency in last release of `cmc`

# 0.12.0 (2023-01-24)

## Release

- nns `v0.12.0`
- sns `v0.0.9`
- cmc `v0.0.5`
- ledger `v0.0.1`
- utils `v0.0.8`

### Breaking Changes

Introducing `@dfinity/ledger` — A library for interfacing with ICRC ledgers on the Internet Computer.

An ICRC-1 ledger is not only used in Sns projects but, in ckBTC too. It can also be integrated in various other scenario need by developers on the IC.

That's why we are launching this new library and why we refactored Sns ledger related features to create this new library.

De facto, `@dfinity/ledger` becomes a peer dependency of `@dfinity/sns`.

### Features

- enable merge neurons for HW controlled neurons

# 0.11.0 (2023-01-23)

## Release

- nns `v0.11.0`
- sns `v0.0.8`
- cmc `v0.0.4`
- utils `v0.0.7`

### Features

- new Sns features: increase stake neuron, split neuron, list and get proposals
- add support for the param `to_account` when disbursing Sns neuron
- add `createAt` param for Nns ledger transfers
- more Sns voting permissions

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

- add test for protobuf files
