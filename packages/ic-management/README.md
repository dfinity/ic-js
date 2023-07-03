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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L25)

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

##### :gear: create

| Method   | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| `create` | `(options: ICManagementCanisterOptions) => ICManagementCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L30)

##### :gear: createCanister

Create a new canister

| Method           | Type                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| `createCanister` | `({ settings, senderCanisterVerion, }?: CreateCanisterParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L70)

##### :gear: updateSettings

Update canister settings

| Method           | Type                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------ |
| `updateSettings` | `({ canisterId, senderCanisterVerion, settings, }: UpdateSettingsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L91)

##### :gear: installCode

Install code to a canister

| Method        | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `installCode` | `({ mode, canisterId, wasmModule, arg, senderCanisterVerion, }: InstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L113)

##### :gear: uninstallCode

Uninstall code from a canister

| Method          | Type                                                                            |
| --------------- | ------------------------------------------------------------------------------- |
| `uninstallCode` | `({ canisterId, senderCanisterVerion, }: UninstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L136)

##### :gear: startCanister

Start a canister

| Method          | Type                                       |
| --------------- | ------------------------------------------ |
| `startCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L151)

##### :gear: stopCanister

Stop a canister

| Method         | Type                                       |
| -------------- | ------------------------------------------ |
| `stopCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L160)

##### :gear: canisterStatus

Get canister details (memory size, status, etc.)

| Method           | Type                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `canisterStatus` | `(canisterId: Principal) => Promise<{ status: { stopped: null; } or { stopping: null; } | { running: null; }; memory_size: bigint; cycles: bigint; settings: definite_canister_settings; idle_cycles_burned_per_day: bigint; module_hash: [] | [...]; }>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L169)

##### :gear: canisterInfo

Get canister info (controllers, module hash, changes, etc.)

| Method         | Type                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `canisterInfo` | `({ canisterId, numRequestChanges, }: CanisterInfoParams) => Promise<{ controllers: Principal[]; module_hash: [] or [Uint8Array]; recent_changes: change[]; total_num_changes: bigint; }>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L182)

##### :gear: deleteCanister

Deletes a canister

| Method           | Type                                       |
| ---------------- | ------------------------------------------ |
| `deleteCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L197)

##### :gear: provisionalCreateCanisterWithCycles

Creates a canister. Only available on development instances.

| Method                                | Type                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `provisionalCreateCanisterWithCycles` | `({ settings, amount, canisterId, }?: ProvisionalCreateCanisterWithCyclesParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L209)

<!-- TSDOC_END -->

## Resources

- [IC Interface Specification](https://github.com/dfinity/interface-spec)
