# utils-js

A collection of utilities and constants for NNS/SNS projects.

[![npm version](https://img.shields.io/npm/v/@dfinity/utils.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/utils) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Features](#features)

## Installation

You can use `utils-js` by installing it in your project.

```bash
npm i @dfinity/utils
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal
```

## Features

`utils-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [defaultAgent](#gear-defaultagent)
- [createAgent](#gear-createagent)
- [createServices](#gear-createservices)
- [uint8ArrayToBigInt](#gear-uint8arraytobigint)
- [bigIntToUint8Array](#gear-biginttouint8array)
- [numberToUint8Array](#gear-numbertouint8array)
- [arrayBufferToUint8Array](#gear-arraybuffertouint8array)
- [uint8ArrayToArrayOfNumber](#gear-uint8arraytoarrayofnumber)
- [arrayOfNumberToUint8Array](#gear-arrayofnumbertouint8array)
- [asciiStringToByteArray](#gear-asciistringtobytearray)
- [hexStringToUint8Array](#gear-hexstringtouint8array)
- [uint8ArrayToHexString](#gear-uint8arraytohexstring)
- [assertNonNullish](#gear-assertnonnullish)
- [assertPercentageNumber](#gear-assertpercentagenumber)
- [crc32](#gear-crc32)
- [bigEndianCrc32](#gear-bigendiancrc32)
- [debounce](#gear-debounce)
- [isNullish](#gear-isnullish)
- [nonNullish](#gear-nonnullish)
- [notEmptyString](#gear-notemptystring)
- [toNullable](#gear-tonullable)
- [fromNullable](#gear-fromnullable)
- [fromDefinedNullable](#gear-fromdefinednullable)
- [principalToSubAccount](#gear-principaltosubaccount)
- [smallerVersion](#gear-smallerversion)

#### :gear: defaultAgent

Get a default agent that connects to mainnet with the anonymous identity.

| Function       | Type          |
| -------------- | ------------- |
| `defaultAgent` | `() => Agent` |

#### :gear: createAgent

Create an agent for a given identity

| Function      | Type                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `createAgent` | `({ identity, host, fetchRootKey, }: { identity: Identity; host?: string; fetchRootKey?: boolean; }) => Promise<HttpAgent>` |

Parameters:

- `identity`: A mandatory identity to use for the agent
- `host`: An optional host to connect to
- `fetchRootKey`: Fetch root key for certificate validation during local development or on testnet

#### :gear: createServices

| Function         | Type                                                                                                                                                                                                                                                            |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createServices` | `<T>({ options: { canisterId, serviceOverride, certifiedServiceOverride, agent: agentOption, }, idlFactory, certifiedIdlFactory, }: { options: RequiredCanisterOptions<T>; idlFactory: InterfaceFactory; certifiedIdlFactory: InterfaceFactory; }) => { ...; }` |

#### :gear: uint8ArrayToBigInt

| Function             | Type                            |
| -------------------- | ------------------------------- |
| `uint8ArrayToBigInt` | `(array: Uint8Array) => bigint` |

#### :gear: bigIntToUint8Array

| Function             | Type                            |
| -------------------- | ------------------------------- |
| `bigIntToUint8Array` | `(value: bigint) => Uint8Array` |

#### :gear: numberToUint8Array

| Function             | Type                            |
| -------------------- | ------------------------------- |
| `numberToUint8Array` | `(value: number) => Uint8Array` |

#### :gear: arrayBufferToUint8Array

| Function                  | Type                                  |
| ------------------------- | ------------------------------------- |
| `arrayBufferToUint8Array` | `(buffer: ArrayBuffer) => Uint8Array` |

#### :gear: uint8ArrayToArrayOfNumber

| Function                    | Type                              |
| --------------------------- | --------------------------------- |
| `uint8ArrayToArrayOfNumber` | `(array: Uint8Array) => number[]` |

#### :gear: arrayOfNumberToUint8Array

| Function                    | Type                                |
| --------------------------- | ----------------------------------- |
| `arrayOfNumberToUint8Array` | `(numbers: number[]) => Uint8Array` |

#### :gear: asciiStringToByteArray

| Function                 | Type                         |
| ------------------------ | ---------------------------- |
| `asciiStringToByteArray` | `(text: string) => number[]` |

#### :gear: hexStringToUint8Array

| Function                | Type                                |
| ----------------------- | ----------------------------------- |
| `hexStringToUint8Array` | `(hexString: string) => Uint8Array` |

#### :gear: uint8ArrayToHexString

| Function                | Type                            |
| ----------------------- | ------------------------------- |
| `uint8ArrayToHexString` | `(bytes: Uint8Array) => string` |

#### :gear: assertNonNullish

| Function           | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `assertNonNullish` | `<T>(value: T, message?: string) => asserts value is NonNullable<T>` |

#### :gear: assertPercentageNumber

| Function                 | Type                           |
| ------------------------ | ------------------------------ |
| `assertPercentageNumber` | `(percentage: number) => void` |

#### :gear: crc32

Calculate the CRC32 of an ArrayBufferLike.

| Function | Type                               |
| -------- | ---------------------------------- |
| `crc32`  | `(buf: ArrayBufferLike) => number` |

Parameters:

- `buf`: The BufferLike to calculate the CRC32 of.

#### :gear: bigEndianCrc32

| Function         | Type                                |
| ---------------- | ----------------------------------- |
| `bigEndianCrc32` | `(bytes: Uint8Array) => Uint8Array` |

#### :gear: debounce

| Function   | Type                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `debounce` | `(func: Function, timeout?: number) => (...args: unknown[]) => void` |

#### :gear: isNullish

Is null or undefined

| Function    | Type                                   |
| ----------- | -------------------------------------- |
| `isNullish` | `<T>(argument: T) => argument is null` |

#### :gear: nonNullish

Not null and not undefined

| Function     | Type                                             |
| ------------ | ------------------------------------------------ |
| `nonNullish` | `<T>(argument: T) => argument is NonNullable<T>` |

#### :gear: notEmptyString

Not null and not undefined and not empty

| Function         | Type                         |
| ---------------- | ---------------------------- |
| `notEmptyString` | `(value: string) => boolean` |

#### :gear: toNullable

| Function     | Type                          |
| ------------ | ----------------------------- |
| `toNullable` | `<T>(value?: T) => [] or [T]` |

#### :gear: fromNullable

| Function       | Type                         |
| -------------- | ---------------------------- |
| `fromNullable` | `<T>(value: [] or [T]) => T` |

#### :gear: fromDefinedNullable

| Function              | Type                         |
| --------------------- | ---------------------------- |
| `fromDefinedNullable` | `<T>(value: [] or [T]) => T` |

#### :gear: principalToSubAccount

Convert a principal to a Uint8Array 32 length.
e.g. Useful to convert a canister ID when topping up cycles with the Cmc canister

| Function                | Type                                   |
| ----------------------- | -------------------------------------- |
| `principalToSubAccount` | `(principal: Principal) => Uint8Array` |

Parameters:

- `principal`: The principal that needs to be converted to Subaccount

#### :gear: smallerVersion

Returns true if the current version is smaller than the minVersion, false if equal or bigger.
Tags after patch version are ignored, e.g. 1.0.0-beta.1 is considered equal to 1.0.0.

| Function         | Type                                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `smallerVersion` | `({ minVersion, currentVersion, }: { minVersion: string; currentVersion: string; }) => boolean` |

### :factory: Canister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

### :factory: InvalidPercentageError

#### Constructors

`public`

Parameters:

- `message`

### :factory: NullishError

#### Constructors

`public`

Parameters:

- `message`

<!-- TSDOC_END -->
