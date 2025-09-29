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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L52)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                             |
| -------- | ---------------------------------------------------------------- |
| `create` | `(options: ICManagementCanisterOptions) => ICManagementCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L57)

#### Methods

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
- [takeCanisterSnapshot](#gear-takecanistersnapshot)
- [listCanisterSnapshots](#gear-listcanistersnapshots)
- [loadCanisterSnapshot](#gear-loadcanistersnapshot)
- [deleteCanisterSnapshot](#gear-deletecanistersnapshot)
- [readCanisterSnapshotMetadata](#gear-readcanistersnapshotmetadata)
- [readCanisterSnapshotData](#gear-readcanistersnapshotdata)
- [uploadCanisterSnapshotMetadata](#gear-uploadcanistersnapshotmetadata)
- [uploadCanisterSnapshotData](#gear-uploadcanistersnapshotdata)

##### :gear: createCanister

Create a new canister

| Method           | Type                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------- |
| `createCanister` | `({ settings, senderCanisterVersion, }?: CreateCanisterParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L81)

##### :gear: updateSettings

Update canister settings

| Method           | Type                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `updateSettings` | `({ canisterId, senderCanisterVersion, settings, }: UpdateSettingsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L104)

##### :gear: installCode

Install code to a canister

| Method        | Type                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `installCode` | `({ canisterId, wasmModule, senderCanisterVersion, ...rest }: InstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L129)

##### :gear: uploadChunk

Upload chunks of Wasm modules that are too large to fit in a single message for installation purposes.

| Method        | Type                                                                  |
| ------------- | --------------------------------------------------------------------- |
| `uploadChunk` | `({ canisterId, ...rest }: UploadChunkParams) => Promise<chunk_hash>` |

Parameters:

- `params.canisterId`: The canister in which the chunks will be stored.
- `params.chunk`: A chunk of Wasm module.

Returns:

The hash of the stored chunk.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L155)

##### :gear: clearChunkStore

Clear the entire chunk storage of a canister.

| Method            | Type                                                        |
| ----------------- | ----------------------------------------------------------- |
| `clearChunkStore` | `({ canisterId, }: ClearChunkStoreParams) => Promise<void>` |

Parameters:

- `params.canisterId`: The canister in which the chunks are stored.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L175)

##### :gear: storedChunks

List the hashes of chunks in the chunk storage of a canister.

| Method         | Type                                                             |
| -------------- | ---------------------------------------------------------------- |
| `storedChunks` | `({ canisterId, }: StoredChunksParams) => Promise<chunk_hash[]>` |

Parameters:

- `params.canisterId`: The canister in which the chunks are stored.

Returns:

The list of hash of the stored chunks.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L194)

##### :gear: installChunkedCode

Installs code that had previously been uploaded in chunks.

| Method               | Type                                                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `installChunkedCode` | `({ senderCanisterVersion, chunkHashesList, targetCanisterId, storeCanisterId, wasmModuleHash, ...rest }: InstallChunkedCodeParams) => Promise<void>` |

Parameters:

- `params.mode`: Installation, re-installation or upgrade.
- `params.arg`: The arguments of the canister.
- `params.senderCanisterVersion`: The optional sender_canister_version parameter can contain the caller's canister version.
- `params.chunkHashesList`: The list of chunks of the Wasm module to install.
- `params.targetCanisterId`: Specifies the canister where the code should be installed.
- `params.storeCanisterId`: Specifies the canister in whose chunk storage the chunks are stored (this parameter defaults to target_canister if not specified).
- `params.wasmModuleHash`: The Wasm module hash as hex string. Used to check that the SHA-256 hash of wasm_module is equal to the wasm_module_hash parameter and can calls install_code with parameters.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L219)

##### :gear: uninstallCode

Uninstall code from a canister

| Method          | Type                                                                             |
| --------------- | -------------------------------------------------------------------------------- |
| `uninstallCode` | `({ canisterId, senderCanisterVersion, }: UninstallCodeParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L250)

##### :gear: startCanister

Start a canister

| Method          | Type                                       |
| --------------- | ------------------------------------------ |
| `startCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L268)

##### :gear: stopCanister

Stop a canister

| Method         | Type                                       |
| -------------- | ------------------------------------------ |
| `stopCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L280)

##### :gear: canisterStatus

Get canister details (memory size, status, etc.)

| Method           | Type                                                         |
| ---------------- | ------------------------------------------------------------ |
| `canisterStatus` | `(canisterId: Principal) => Promise<canister_status_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L291)

##### :gear: deleteCanister

Deletes a canister

| Method           | Type                                       |
| ---------------- | ------------------------------------------ |
| `deleteCanister` | `(canisterId: Principal) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L305)

##### :gear: provisionalCreateCanisterWithCycles

Creates a canister. Only available on development instances.

| Method                                | Type                                                                                                    |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `provisionalCreateCanisterWithCycles` | `({ settings, amount, canisterId, }?: ProvisionalCreateCanisterWithCyclesParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L320)

##### :gear: fetchCanisterLogs

Given a canister ID as input, this method returns a vector of logs of that canister including its trap messages. The canister logs are not collected in canister methods running in non-replicated mode (NRQ, CQ, CRy, CRt, CC, and F modes, as defined in Overview of imports). The total size of all returned logs does not exceed 4KiB. If new logs are added resulting in exceeding the maximum total log size of 4KiB, the oldest logs will be removed. Logs persist across canister upgrades and they are deleted if the canister is reinstalled or uninstalled.

| Method              | Type                                                             |
| ------------------- | ---------------------------------------------------------------- |
| `fetchCanisterLogs` | `(canisterId: Principal) => Promise<fetch_canister_logs_result>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L343)

##### :gear: takeCanisterSnapshot

This method takes a snapshot of the specified canister. A snapshot consists of the wasm memory, stable memory, certified variables, wasm chunk store and wasm binary.

| Method                 | Type                                                  |
| ---------------------- | ----------------------------------------------------- |
| `takeCanisterSnapshot` | `(params: OptionSnapshotParams) => Promise<snapshot>` |

Parameters:

- `params`: - Parameters for the snapshot operation.
- `params.canisterId`: - The ID of the canister for which the snapshot will be taken.
- `params.snapshotId`: - The ID of the snapshot to replace, if applicable.
  Can be provided as a `string` or a `Uint8Array`.
  If not provided, a new snapshot will be created.

Returns:

A promise that resolves with the snapshot details,
including the snapshot ID, total size, and timestamp.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L369)

##### :gear: listCanisterSnapshots

Lists the snapshots of a canister.

| Method                  | Type                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| `listCanisterSnapshots` | `({ canisterId, }: { canisterId: Principal; }) => Promise<list_canister_snapshots_result>` |

Parameters:

- `params`: - Parameters for the listing operation.
- `params.canisterId`: - The ID of the canister for which snapshots will be listed.

Returns:

A promise that resolves with the list of snapshots.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L389)

##### :gear: loadCanisterSnapshot

Loads a snapshot of a canister's state.

| Method                 | Type                                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `loadCanisterSnapshot` | `({ senderCanisterVersion, ...rest }: Required<OptionSnapshotParams> and { senderCanisterVersion?: bigint or undefined; }) => Promise<void>` |

Parameters:

- `params`: - Parameters for the snapshot loading operation.
- `params.canisterId`: - The ID of the canister for which the snapshot will be loaded.
- `params.snapshotId`: - The ID of the snapshot to load.
- `params.senderCanisterVersion`: - The optional sender canister version. If provided, its value must be equal to ic0.canister_version.

Returns:

A promise that resolves when the snapshot is successfully loaded.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L415)

##### :gear: deleteCanisterSnapshot

Deletes a specific snapshot of a canister.

| Method                   | Type                                                        |
| ------------------------ | ----------------------------------------------------------- |
| `deleteCanisterSnapshot` | `(params: Required<OptionSnapshotParams>) => Promise<void>` |

Parameters:

- `params`: - Parameters for the deletion operation.
- `params.canisterId`: - The ID of the canister for which the snapshot will be deleted.
- `params.snapshotId`: - The ID of the snapshot to delete.

Returns:

A promise that resolves when the snapshot is successfully deleted.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L442)

##### :gear: readCanisterSnapshotMetadata

Reads metadata for a specific canister snapshot.

| Method                         | Type                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------- |
| `readCanisterSnapshotMetadata` | `(params: Required<OptionSnapshotParams>) => Promise<ReadCanisterSnapshotMetadataResponse>` |

Parameters:

- `params`: - Parameters for the metadata read operation.
- `params.canisterId`: - The ID of the canister whose snapshot metadata will be read.
- `params.snapshotId`: - The ID of the snapshot to read metadata from.

Returns:

A promise that resolves with the snapshot metadata.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L461)

##### :gear: readCanisterSnapshotData

Reads snapshot data for a specific canister snapshot and kind.

| Method                     | Type                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `readCanisterSnapshotData` | `({ kind, ...params }: ReadCanisterSnapshotMetadataParams) => Promise<read_canister_snapshot_data_response>` |

Parameters:

- `params`: - Parameters for the data read operation.
- `params.canisterId`: - The ID of the canister whose snapshot data will be read.
- `params.snapshotId`: - The ID of the snapshot to read data from.
- `params.kind`: - The kind of data to read.

Returns:

A promise that resolves with the snapshot data payload.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L487)

##### :gear: uploadCanisterSnapshotMetadata

Uploads snapshot metadata for a canister.

| Method                           | Type                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `uploadCanisterSnapshotMetadata` | `({ metadata, ...params }: UploadCanisterSnapshotMetadataParams) => Promise<upload_canister_snapshot_metadata_response>` |

Parameters:

- `params`: - Parameters for the metadata upload operation.
- `params.canisterId`: - The ID of the canister the snapshot metadata belongs to.
- `params.metadata`: - The metadata payload to upload.
- `params.replaceSnapshotId`: - If provided, replace the metadata for this snapshot instead of creating a new one.

Returns:

A promise that resolves with the upload response.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L513)

##### :gear: uploadCanisterSnapshotData

Uploads a chunk of snapshot data for a canister snapshot.

| Method                       | Type                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------- |
| `uploadCanisterSnapshotData` | `({ kind, chunk, ...params }: UploadCanisterSnapshotDataParams) => Promise<void>` |

Parameters:

- `params`: - Parameters for the data upload operation.
- `params.canisterId`: - The ID of the canister the snapshot belongs to.
- `params.snapshotId`: - The ID of the snapshot to which data is uploaded.
- `params.kind`: - The target to upload to.
- `params.chunk`: - The raw bytes to upload.

Returns:

A promise that resolves when the data is successfully uploaded.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ic-management/src/ic-management.canister.ts#L540)

<!-- TSDOC_END -->

## Resources

- [IC Interface Specification](https://github.com/dfinity/interface-spec)
