# 2024.XX.YY-hhmmZ

## Breaking Changes

- Fix typo in `ic-management` interfaces (`senderCanisterVerion` -> `senderCanisterVersion`).
- ckETH `eip1559TransactionPrice` expect a parameters which can optionally be set to execute a query (new) or update call.

## Features

- Support for new ckETH endpoint `get_minter_info` which returns internal minter parameters such as the minimal withdrawal amount, the last observed block number, etc.

## Features

- Add support for `bitcoin_get_utxos` and `bitcoin_get_utxos_query` features to `@dfinity/ic-management` library.

- Add `balance` to ICRC `IndexCanister` which returns the balance for a given account. (1)
- Extend `getTransactions` of the ICRC `IndexCanister` to support `query`. (1)

### Notes

(1) The new features supported `@dfinity/ledger-icrc` requires the related Index canister to be upgraded to the so called `index-ng` WASM.

# 2024.02.21-0835Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status              |
| ------------------------ | ------- | ------------------- |
| `@dfinity/ckbtc`         | v2.2.1  | Maintained ⚙️       |
| `@dfinity/cketh`         | v1.0.2  | Maintained ⚙️       |
| `@dfinity/cmc`           | v3.0.2  | Maintained ⚙️       |
| `@dfinity/ic-management` | v2.2.2  | Maintained ⚙️       |
| `@dfinity/ledger-icp`    | v2.2.1  | Maintained ⚙️       |
| `@dfinity/ledger-icrc`   | v2.1.3  | Maintained ⚙️       |
| `@dfinity/nns`           | v4.0.1  | Maintained ⚙️       |
| `@dfinity/nns-proto`     | v1.0.1  | Unchanged️          |
| `@dfinity/sns`           | v3.0.0  | Breaking Changes ⚠️ |
| `@dfinity/utils`         | v2.1.2  | Maintained ⚙️       |

## Breaking changes

- Update `listProposals` return type in sns governance canister.

## Build

- Bump agent-js `v1.0.1` to hook on their semantic versioning, adopt last improvements and rollout a [security patch](https://github.com/dfinity/agent-js/security/advisories/GHSA-c9vv-fhgv-cjc3)

# 2024.02.14-1600Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status              |
| ------------------------ | ------- | ------------------- |
| `@dfinity/ckbtc`         | v2.2.0  | Enhanced 🔧         |
| `@dfinity/cketh`         | v1.0.1  | Maintained ⚙️       |
| `@dfinity/cmc`           | v3.0.1  | Maintained ⚙️       |
| `@dfinity/ic-management` | v2.2.1  | Maintained ⚙️       |
| `@dfinity/ledger-icp`    | v2.2.0  | Enhanced 🔧         |
| `@dfinity/ledger-icrc`   | v2.1.2  | Maintained ⚙️       |
| `@dfinity/nns`           | v4.0.0  | Breaking Changes ⚠️ |
| `@dfinity/nns-proto`     | v1.0.1  | Unchanged️          |
| `@dfinity/sns`           | v2.1.2  | Maintained ⚙️       |
| `@dfinity/utils`         | v2.1.1  | Maintained ⚙️       |

## Breaking changes

- Replace duplicate string type `AccountIdentifier` in `@dfinity/nns` with `AccountIdentifierHex` of `@dfinity/ledger-icp`.

## Features

- Extend ckBTC `retrieveBtcStatusV2ByAccount` with optional `account` parameter.
- Remove unused Uint8Array type `SubAccount` in `@dfinity/nns`.
- Modify the `@dfinity/ledger-icp` package's `SubAccount.formID` function to support more than 256 subaccounts, enabling it to handle larger numbers.

## Build

- Bump all dev dependencies of the ic-js workspace.

# 2024.01.30-1600Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status              |
| ------------------------ | ------- | ------------------- |
| `@dfinity/ckbtc`         | v2.1.1  | Patched 🩹          |
| `@dfinity/cketh`         | v1.0.0  | Launched 🚀         |
| `@dfinity/cmc`           | v3.0.0  | Breaking Changes ⚠️ |
| `@dfinity/ic-management` | v2.2.0  | Enhanced 🔧         |
| `@dfinity/ledger-icp`    | v2.1.2  | Patched 🩹          |
| `@dfinity/ledger-icrc`   | v2.1.1  | Maintained ⚙️       |
| `@dfinity/nns`           | v3.1.1  | Maintained ⚙️       |
| `@dfinity/nns-proto`     | v1.0.1  | Maintained ⚙️       |
| `@dfinity/sns`           | v2.1.1  | Patched 🩹          |
| `@dfinity/utils`         | v2.1.0  | Enhanced 🔧         |

## Breaking changes

- Upgrade candid files for cmc canister with new fields `subnet_selection` and `settings`.

## Features

- Add support for converting ckETH to ETH through the `withdrawEth` function and integrate useful features such as `eip1559TransactionPrice`, `encodePrincipalToEthAddress`, and `retrieve_eth_status`.
- Upgrade candid files for `ic-management` canister and support new field `reserved_cycles_limit`.
- Add "API Boundary Node Management" topic support.
- Add optional field `logo` to `Token` type.
- Update `sns-js` candid files with new fields in sns canisters.
- Add public method `toE8s` to `TokenAmountV2`.

## Fix

- Various certified Candid IDL functions had their names trimmed of the keyword "query".

## Build

- Fixed script to generate certified IDL factory files to respect the keyword "query" when used in functions' names.

# 2024.01.09-1115Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status     |
| ------------------------ | ------- | ---------- |
| `@dfinity/ckbtc`         | v2.1.0  | Unchanged  |
| `@dfinity/cketh`         | v0.0.1  | Unchanged  |
| `@dfinity/cmc`           | v2.1.0  | Unchanged  |
| `@dfinity/ic-management` | v2.1.0  | Unchanged  |
| `@dfinity/ledger-icp`    | v2.1.1  | Patched 🤕 |
| `@dfinity/ledger-icrc`   | v2.1.0  | Unchanged  |
| `@dfinity/nns`           | v3.1.0  | Unchanged  |
| `@dfinity/nns-proto`     | v1.0.0  | Unchanged  |
| `@dfinity/sns`           | v2.1.0  | Unchanged  |
| `@dfinity/utils`         | v2.0.0  | Unchanged️ |

## Fix

- When `@dfinity/ledger-icp` is bundled with Rollup v4, it leads to an incompatibility issue with iOS 15.

# 2024.01.03-1115Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status     |
| ------------------------ | ------- | ---------- |
| `@dfinity/ckbtc`         | v2.1.0  | Unchanged  |
| `@dfinity/cketh`         | v0.0.1  | New 🚀     |
| `@dfinity/cmc`           | v2.1.0  | Unchanged  |
| `@dfinity/ic-management` | v2.1.0  | Unchanged  |
| `@dfinity/ledger-icp`    | v2.1.0  | Unchanged  |
| `@dfinity/ledger-icrc`   | v2.1.0  | Unchanged  |
| `@dfinity/nns`           | v3.1.0  | Unchanged  |
| `@dfinity/nns-proto`     | v1.0.0  | Unchanged  |
| `@dfinity/sns`           | v2.1.0  | Unchanged  |
| `@dfinity/utils`         | v2.0.0  | Unchanged️ |

## Features

- Introduces an early first version of `@dfinity/cketh`, which is meant to provide functions for interfacing with ckETH. The library doesn't do much at the moment, but we're releasing it to integrate it into our pipelines, and features will be added iteratively as required.

# 2023.12.20-1000Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status              |
| ------------------------ | ------- | ------------------- |
| `@dfinity/ckbtc`         | v2.1.0  | Enhanced 🔧         |
| `@dfinity/cmc`           | v2.1.0  | Enhanced 🔧         |
| `@dfinity/ic-management` | v2.1.0  | Enhanced 🔧         |
| `@dfinity/ledger-icp`    | v2.1.0  | Enhanced 🔧         |
| `@dfinity/ledger-icrc`   | v2.1.0  | Enhanced 🔧         |
| `@dfinity/nns`           | v3.1.0  | Enhanced 🔧         |
| `@dfinity/nns-proto`     | v1.0.0  | Unchanged           |
| `@dfinity/sns`           | v2.1.0  | Enhanced 🔧         |
| `@dfinity/utils`         | v2.0.0  | Breaking Changes ⚠️ |

## Breaking changes

- `decimals` mandatory field in `Token`.
- `TokenAmount` rejects tokens with `decimals !== 8`.

## Features

- Substitute `?` fields with `Option` fields in the converters related to NNS proposals.
- Add retrieveBtcStatus to ckbtc minter canister.
- Add retrieveBtcStatusV2ByAccount to ckbtc minter canister.
- Make uint8ArrayToHexString also accept `number[]` as input.
- Add a new type TokenAmountV2 which supports `decimals !== 8`.
- Fix issue when converting token amount from small numbers with `TokenAmountV2`.
- Bump agent-js to v0.20.2 in a non-breaking manner by introducing `verifyQuerySignatures` as an opt-in feature (for the time being).
- Replace `https://ic0.app` by `https://icp-api.io` as the default host for the default anonymous agent provided by `defaultAgent`.

## Fix

- Utilize ICP Index `accountBalance` and `getTransactions` with account identifier hex directly, eliminating the need for conversion with Buffer and resolving usage in non-polyfilled environments.

## Operations

- Add a cron job to periodically update IC candid files and typescript bindings.

# 2023.11.21-1400Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status      |
| ------------------------ | ------- | ----------- |
| `@dfinity/ckbtc`         | v2.0.0  | Enhanced 🔧 |
| `@dfinity/cmc`           | v2.0.0  | Enhanced 🔧 |
| `@dfinity/ic-management` | v2.0.0  | Enhanced 🔧 |
| `@dfinity/ledger-icp`    | v2.0.0  | Enhanced 🔧 |
| `@dfinity/ledger-icrc`   | v2.0.0  | Enhanced 🔧 |
| `@dfinity/nns`           | v3.0.0  | Enhanced 🔧 |
| `@dfinity/nns-proto`     | v1.0.0  | Unchanged   |
| `@dfinity/sns`           | v2.0.0  | Enhanced 🔧 |
| `@dfinity/utils`         | v1.1.0  | Unchanged   |

## Features

- Include timestamp and tags in the candid provenance record.
- Update ckbtc candid to ic commit `4de99bc27be74048f80d13200f3c75cf2a43438c`.
- Include pending UTXOs in MinterNoNewUtxosError.
- Upgrade `didc` to `0.3.5` that converts candid files into JS and TS.

# 2023.10.15-0600Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status      |
| ------------------------ | ------- | ----------- |
| `@dfinity/ckbtc`         | v1.1.0  | Enhanced 🔧 |
| `@dfinity/cmc`           | v1.0.0  | Unchanged   |
| `@dfinity/ic-management` | v1.0.0  | Unchanged   |
| `@dfinity/ledger-icp`    | v1.1.0  | Enhanced 🔧 |
| `@dfinity/ledger-icrc`   | v1.0.1  | Patched 🩹  |
| `@dfinity/nns`           | v2.1.0  | Enhanced 🔧 |
| `@dfinity/nns-proto`     | v1.0.0  | Unchanged   |
| `@dfinity/sns`           | v1.0.2  | Patched 🩹  |
| `@dfinity/utils`         | v1.1.0  | Enhanced 🔧 |

## Features

- add support for ICP Index canister to library `@dfinity/ledger-icp`. New `IndexCanister` functions: `accountBalance` and `getTransactions`
- expose few types - notably `BlockHeight` - for library `@dfinity/ledger-icp`
- support new fields from swap canister response types: `min_direct_participation_icp_e8s`, `max_direct_participation_icp_e8s` and `neurons_fund_participation`
- support new fields in the `CreateServiceNervousSystem` proposal action: `maximum_direct_participation_icp`, `minimum_direct_participation_icp` and `neurons_fund_participation`
- support new filter field `omit_large_fields` in `list_proposals`
- add support for `retrieve_btc_with_approval` in `@dfinity/ckbtc`
- new utility to convert seconds to a human-readable duration
- update `@dfinity/ledger-icrc` did files
- update `@dfinity/sns` did files

# 2023.10.02-1515Z

## Overview

The current status of the libraries at the time of the release is as follows:

| Library                  | Version | Status              |
| ------------------------ | ------- | ------------------- |
| `@dfinity/ckbtc`         | v1.0.1  | Patched             |
| `@dfinity/cmc`           | v1.0.0  | Unchanged           |
| `@dfinity/ic-management` | v1.0.0  | Unchanged           |
| `@dfinity/ledger`        | v1.0.0  | Deprecated ❌       |
| `@dfinity/ledger-icp`    | v1.0.0  | New 🚀              |
| `@dfinity/ledger-icrc`   | v1.0.0  | New 🚀              |
| `@dfinity/nns`           | v2.0.0  | Breaking Changes ⚠️ |
| `@dfinity/nns-proto`     | v1.0.0  | Unchanged           |
| `@dfinity/sns`           | v1.0.0  | Patched             |
| `@dfinity/utils`         | v1.0.0  | Unchanged           |

## Release

- ckbtc `v1.0.1`
- ledger-icp `v1.0.0`
- ledger-icrc `v1.0.0`
- nns `v2.0.0`
- sns `v1.0.1`

## Breaking Changes ⚠️

- **ICP** ledger-related features have been relocated from `@dfinity/nns` to a new dedicated library called `@dfinity/ledger-icp`
- **ICRC** ledger-related features have been moved as well. The library `@dfinity/ledger` has been deprecated, renamed, and replaced by `@dfinity/ledger-icrc`
- remove the `ICP` class, which was deprecated a long time ago, from `@dfinity/nns`. Instead, utilize the token parsers from `@dfinity/utils`

## Build

- `@dfinity/sns` inherits the changes and now requires `@dfinity/ledger-icrc` as a peer dependency
- `@dfinity/nns` inherits the changes and now requires `@dfinity/ledger-icp` as a peer dependency

## Chore

- minter params `Subaccount` declared as `Uint8Array` instead of inheriting a type

# 1.0.0 (2023-10-02)

## Release

- nns `v1.0.0`
- sns `v1.0.0`
- cmc `v1.0.0`
- ledger `v1.0.0`
- ckBTC `v1.0.0`
- ic-management `v1.0.0`
- utils `v1.0.0`
- nns-proto `v1.0.0`

## Features

- add support for `icrc2_transfer_from`, `icrc2_approve` and `icrc2_allowance` in `@dfinity/ledger`
- update index did definitions in ledger which provides more information in the transactions
- add support for icrc1_transfer on the ICP ledger canister in `@dfinity/nns`

## Build

- bump did files in Cmc
- starting from this version, we commit to adhering to [semantic versioning](https://semver.org/) for any libraries published in ic-js

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
