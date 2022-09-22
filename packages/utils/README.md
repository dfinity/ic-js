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
- [createServices](#gear-createservices)
- [uint8ArrayToBigInt](#gear-uint8arraytobigint)
- [arrayBufferToUint8Array](#gear-arraybuffertouint8array)
- [uint8ArrayToArrayOfNumber](#gear-uint8arraytoarrayofnumber)
- [arrayOfNumberToUint8Array](#gear-arrayofnumbertouint8array)
- [asciiStringToByteArray](#gear-asciistringtobytearray)
- [assertNonNullish](#gear-assertnonnullish)
- [toNullable](#gear-tonullable)
- [fromNullable](#gear-fromnullable)
- [fromDefinedNullable](#gear-fromdefinednullable)

#### :gear: defaultAgent

| Function       | Type          |
| -------------- | ------------- |
| `defaultAgent` | `() => Agent` |

#### :gear: createServices

| Function         | Type                                                                                                                                                                                                                                                            |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createServices` | `<T>({ options: { canisterId, serviceOverride, certifiedServiceOverride, agent: agentOption, }, idlFactory, certifiedIdlFactory, }: { options: RequiredCanisterOptions<T>; idlFactory: InterfaceFactory; certifiedIdlFactory: InterfaceFactory; }) => { ...; }` |

#### :gear: uint8ArrayToBigInt

| Function             | Type                            |
| -------------------- | ------------------------------- |
| `uint8ArrayToBigInt` | `(array: Uint8Array) => bigint` |

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

#### :gear: assertNonNullish

| Function           | Type                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| `assertNonNullish` | `<T>(value: T, message?: string) => asserts value is NonNullable<T>` |

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

### :factory: NullishError

#### Constructors

`public`

Parameters:

- `message`

<!-- TSDOC_END -->
