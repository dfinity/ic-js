# ic-management-js

A library for interfacing with the [Internet Computer (IC) management canister](https://internetcomputer.org/docs/current/developer-docs/integrations/https-outcalls/https-outcalls-how-to-use/#ic-management-canister).

[![npm version](https://img.shields.io/npm/v/@dfinity/ic-management.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/ic-management) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can use `ic-management-js` by installing it in your project.

```bash
npm i @dfinity/ic-management
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

The features are available through the class `ICMgmtCanister`. It has to be instantiated with a canister ID.

e.g. fetching a token metadata.

```ts
import { ICManagementCanister } from "@dfinity/ic-management";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { canisterStatus } = ICManagementCanister.create({
  agent,
});

const { status, memory_size, ...rest } = await canisterStatus(YOUR_CANISTER_ID);
```

## Features

`ic-management-js` implements following features:

<!-- TSDOC_START -->

### :factory: ICManagementCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L30)

#### Methods

- [create](#gear-create)
- [createCanister](#gear-createcanister)
- [updateSettings](#gear-updatesettings)
- [installCode](#gear-installcode)
- [uninstallCode](#gear-uninstallcode)
- [startCanister](#gear-startcanister)
- [stopCanister](#gear-stopcanister)
- [canisterStatus](#gear-canisterstatus)
- [canisterInfo](#gear-canisterinfo)
- [deleteCanister](#gear-deletecanister)
- [provisionalCreateCanisterWithCycles](#gear-provisionalcreatecanisterwithcycles)
- [bitcoinGetUtxos](#gear-bitcoingetutxos)
- [bitcoinGetUtxosQuery](#gear-bitcoingetutxosquery)

##### :gear: create

| Method   | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| `create` | `(options: ICManagementCanisterOptions) => ICManagementCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L35)

##### :gear: createCanister

Create a new canister

| Method           | Type                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| `createCanister` | `({ settings, senderCanisterVerion, }?: CreateCanisterParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L75)

##### :gear: updateSettings

Update canister settings

| Method           | Type                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `updateSettings` | `({ canisterId, senderCanisterVerion, settings, }: UpdateSettingsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L96)

##### :gear: installCode

Install code to a canister

| Method        | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `installCode` | `({ mode, canisterId, wasmModule, arg, senderCanisterVerion, }: InstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L118)

##### :gear: uninstallCode

Uninstall code from a canister

| Method          | Type                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| `uninstallCode` | `({ canisterId, senderCanisterVerion, }: UninstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L141)

##### :gear: startCanister

Start a canister

| Method          | Type                                       |
| --------------- | ------------------------------------------ |
| `startCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L156)

##### :gear: stopCanister

Stop a canister

| Method         | Type                                       |
| -------------- | ------------------------------------------ |
| `stopCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L165)

##### :gear: canisterStatus

Get canister details (memory size, status, etc.)

| Method           | Type                                                         |
| ---------------- | ------------------------------------------------------------ |
| `canisterStatus` | `(canisterId: Principal) => Promise<canister_status_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L174)

##### :gear: canisterInfo

Get canister info (controllers, module hash, changes, etc.)

| Method         | Type                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------- |
| `canisterInfo` | `({ canisterId, numRequestChanges, }: CanisterInfoParams) => Promise<canister_info_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L187)

##### :gear: deleteCanister

Deletes a canister

| Method           | Type                                       |
| ---------------- | ------------------------------------------ |
| `deleteCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L202)

##### :gear: provisionalCreateCanisterWithCycles

Creates a canister. Only available on development instances.

| Method                                | Type                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `provisionalCreateCanisterWithCycles` | `({ settings, amount, canisterId, }?: ProvisionalCreateCanisterWithCyclesParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L214)

##### :gear: bitcoinGetUtxos

Given a `get_utxos_request`, which must specify a Bitcoin address and a Bitcoin network (`mainnet` or `testnet`), the function returns all unspent transaction outputs (UTXOs) associated with the provided address in the specified Bitcoin network based on the current view of the Bitcoin blockchain available to the Bitcoin component.

| Method            | Type                                                                   |
| ----------------- | ---------------------------------------------------------------------- |
| `bitcoinGetUtxos` | `(params: BitcoinGetUtxosParams) => Promise<bitcoin_get_utxos_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L241)

##### :gear: bitcoinGetUtxosQuery

This method is identical to `bitcoinGetUtxos`, but exposed as a query.

| Method                 | Type                                                                              |
| ---------------------- | --------------------------------------------------------------------------------- |
| `bitcoinGetUtxosQuery` | `(params: BitcoinGetUtxosQueryParams) => Promise<bitcoin_get_utxos_query_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L259)

<!-- TSDOC_END -->

## Resources

- [IC Interface Specification](https://github.com/dfinity/interface-spec)
