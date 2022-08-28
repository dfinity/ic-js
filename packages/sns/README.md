# sns-js

A library for interfacing with a Service Nervous System (SNS) project.

[![npm version](https://img.shields.io/npm/v/@dfinity/sns.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/sns) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can use `sns-js` by installing it in your project.

```bash
npm i @dfinity/sns
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

`sns-js` can be used with two distinctive approaches. One explorative way, in which you only provide the `root` canister ID of your project to initialize a wrapper that takes care of routing the queries to the appropriate canister - i.e. one single entry for all functions, or another more common way in which you instantiate the canisters you need.

### Explorative way

The `explorative` approach has the advantage to simplify the code but, implies more costs as it queries the `root` canister for the list of canister IDs of the Sns project upon initialization.

```ts
const snsWrapper: SnsWrapper = await initSnsWrapper({
  rootOptions: {
    canisterId: rootCanisterId,
  },
  agent,
  certified,
});

const { metadata: meta, swapState } = wrapper;
const [metadata, token] = await meta({});

console.log("Summary data:", metadata, token);
```

### Descriptive way

The descriptive approach limits the scope of the features but, is more verbose.

```ts
const { metadata: governanceMetadata } = SnsGovernanceCanister.create({
  agent,
  canisterId: rootCanisterId,
});
const { metadata: ledgerMetadata } = SnsLedgerCanister.create({
  agent,
  canisterId: rootCanisterId,
});
const metadata = await governanceMetadata({ certified: true });
const token = await ledgerMetadata({ certified: true });

console.log("Summary data:", metadata, token);
```

## Features

`sns-js` implement following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [initSnsWrapper](#gear-initsnswrapper)

#### :gear: initSnsWrapper

Lookup for the canister ids of a Sns and initialize the wrapper to access its features.

| Function         | Type             |
| ---------------- | ---------------- |
| `initSnsWrapper` | `InitSnsWrapper` |

### :factory: SnsGovernanceCanister

#### Constructors

`public`:

Parameters:

- `id`:
- `service`:
- `certifiedService`:

#### Methods

### :factory: SnsLedgerCanister

#### Constructors

`public`:

Parameters:

- `id`:
- `service`:
- `certifiedService`:

#### Methods

### :factory: SnsRootCanister

#### Constructors

`public`:

Parameters:

- `id`:
- `service`:
- `certifiedService`:

#### Methods

### :factory: SnsSwapCanister

#### Constructors

`public`:

Parameters:

- `id`:
- `service`:
- `certifiedService`:

#### Methods

### :factory: SnsWrapper

Sns wrapper - notably used by NNS-dapp - ease the access to a particular Sns.
It knows all the Sns' canisters, wrap and enhance their available features.
A wrapper either performs query or update calls.

#### Constructors

`public`: Constructor to instantiate a Sns

Parameters:

- `__0`:

#### Methods

<!-- TSDOC_END -->
