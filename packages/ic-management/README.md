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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L33)

#### Methods

- [create](#gear-create)
- [createCanister](#gear-createcanister)
- [updateSettings](#gear-updatesettings)
- [installCode](#gear-installcode)
- [uploadChunk](#gear-uploadchunk)
- [clearChunkStore](#gear-clearchunkstore)
- [storedChunks](#gear-storedchunks)
- [installChunkedCode](#gear-installchunkedcode)
- [uninstallCode](#gear-uninstallcode)
- [startCanister](#gear-startcanister)
- [stopCanister](#gear-stopcanister)
- [canisterStatus](#gear-canisterstatus)
- [deleteCanister](#gear-deletecanister)
- [provisionalCreateCanisterWithCycles](#gear-provisionalcreatecanisterwithcycles)
- [fetchCanisterLogs](#gear-fetchcanisterlogs)

##### :gear: create

| Method   | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| `create` | `(options: ICManagementCanisterOptions) => ICManagementCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L38)

##### :gear: createCanister

Create a new canister

| Method           | Type                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------- |
| `createCanister` | `({ settings, senderCanisterVersion, }?: CreateCanisterParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L78)

##### :gear: updateSettings

Update canister settings

| Method           | Type                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `updateSettings` | `({ canisterId, senderCanisterVersion, settings, }: UpdateSettingsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L101)

##### :gear: installCode

Install code to a canister

| Method        | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `installCode` | `({ mode, canisterId, wasmModule, arg, senderCanisterVersion, }: InstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L126)

##### :gear: uploadChunk

Upload chunks of Wasm modules that are too large to fit in a single message for installation purposes.

| Method        | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| `uploadChunk` | `({ canisterId, ...rest }: UploadChunkParams) => Promise<chunk_hash>` |

Parameters:

- `params.canisterId`: The canister in which the chunks will be stored.
- `params.chunk`: A chunk of Wasm module.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L154)

##### :gear: clearChunkStore

Clear the entire chunk storage of a canister.

| Method            | Type                                                        |
| ----------------- | ----------------------------------------------------------- |
| `clearChunkStore` | `({ canisterId, }: ClearChunkStoreParams) => Promise<void>` |

Parameters:

- `params.canisterId`: The canister in which the chunks are stored.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L174)

##### :gear: storedChunks

List the hashes of chunks in the chunk storage of a canister.

| Method         | Type                                                             |
| -------------- | ---------------------------------------------------------------- |
| `storedChunks` | `({ canisterId, }: StoredChunksParams) => Promise<chunk_hash[]>` |

Parameters:

- `params.canisterId`: The canister in which the chunks are stored.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L193)

##### :gear: installChunkedCode

Installs code that had previously been uploaded in chunks.

| Method               | Type                                                                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `installChunkedCode` | `({ mode, arg, senderCanisterVersion, chunkHashesList, targetCanisterId, storeCanisterId, wasmModuleHash, }: InstallChunkedCodeParams) => Promise<void>` |

Parameters:

- `params.mode`: Installation, re-installation or upgrade.
- `params.arg`: The arguments of the canister.
- `params.senderCanisterVersion`: The optional sender_canister_version parameter can contain the caller's canister version.
- `params.chunkHashesList`: The list of chunks of the Wasm module to install.
- `params.targetCanisterId`: Specifies the canister where the code should be installed.
- `params.storeCanisterId`: Specifies the canister in whose chunk storage the chunks are stored (this parameter defaults to target_canister if not specified).
- `params.wasmModuleHash`: The Wasm module hash as hex string. Used to check that the SHA-256 hash of wasm_module is equal to the wasm_module_hash parameter and can calls install_code with parameters.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L218)

##### :gear: uninstallCode

Uninstall code from a canister

| Method          | Type                                                                             |
| --------------- | -------------------------------------------------------------------------------- |
| `uninstallCode` | `({ canisterId, senderCanisterVersion, }: UninstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L251)

##### :gear: startCanister

Start a canister

| Method          | Type                                       |
| --------------- | ------------------------------------------ |
| `startCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L269)

##### :gear: stopCanister

Stop a canister

| Method         | Type                                       |
| -------------- | ------------------------------------------ |
| `stopCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L281)

##### :gear: canisterStatus

Get canister details (memory size, status, etc.)

| Method           | Type                                                         |
| ---------------- | ------------------------------------------------------------ |
| `canisterStatus` | `(canisterId: Principal) => Promise<canister_status_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L292)

##### :gear: deleteCanister

Deletes a canister

| Method           | Type                                       |
| ---------------- | ------------------------------------------ |
| `deleteCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L306)

##### :gear: provisionalCreateCanisterWithCycles

Creates a canister. Only available on development instances.

| Method                                | Type                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `provisionalCreateCanisterWithCycles` | `({ settings, amount, canisterId, }?: ProvisionalCreateCanisterWithCyclesParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L321)

##### :gear: fetchCanisterLogs

Given a canister ID as input, this method returns a vector of logs of that canister including its trap messages. The canister logs are not collected in canister methods running in non-replicated mode (NRQ, CQ, CRy, CRt, CC, and F modes, as defined in Overview of imports). The total size of all returned logs does not exceed 4KiB. If new logs are added resulting in exceeding the maximum total log size of 4KiB, the oldest logs will be removed. Logs persist across canister upgrades and they are deleted if the canister is reinstalled or uninstalled.

| Method              | Type                                                             |
| ------------------- | ---------------------------------------------------------------- |
| `fetchCanisterLogs` | `(canisterId: Principal) => Promise<fetch_canister_logs_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L344)

<!-- TSDOC_END -->

## Resources

- [IC Interface Specification](https://github.com/dfinity/interface-spec)
