# `@icp-sdk/canisters`

A modular library for interacting with canisters on the Internet Computer.

[![npm version](https://img.shields.io/npm/v/@icp-sdk/canisters.svg?logo=npm)](https://www.npmjs.com/package/@icp-sdk/canisters) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## Features

- ⚙️ **Unified interface** for interacting with core Internet Computer canisters
- 🧩 **Modular structure** with independent sub-packages
- 🔄 **Always up to date** with the latest Candid declarations
- 🧪 **Battle-tested and verified on-chain** through production dapps

## Installation

You can use the library by installing it in your project.

```bash
npm i @icp-sdk/canisters
```

This library has several peer dependencies. Make sure the following packages are also installed in your project:

```bash
npm i @dfinity/ckbtc @dfinity/cketh @dfinity/cmc @dfinity/ic-management @dfinity/ledger-icp @dfinity/ledger-icrc @dfinity/nns @dfinity/sns @dfinity/utils @icp-sdk/core
```

## Usage

The SDK re-exports modules for core Internet Computer canisters and exposes them as sub-entries. Each sub-entry corresponds to a specific canister library.

Import the desired module directly from its entry point and refer to its individual documentation for details.

| Canister(s)   | Import                             | Documentation                                                               |
| ------------- | ---------------------------------- | --------------------------------------------------------------------------- |
| CKBTC         | `@icp-sdk/canisters/ckbtc`         | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/ckbtc)         |
| CKETH         | `@icp-sdk/canisters/cketh`         | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/cketh)         |
| CMC           | `@icp-sdk/canisters/cmc`           | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/cmc)           |
| IC Management | `@icp-sdk/canisters/ic-management` | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/ic-management) |
| Ledger ICP    | `@icp-sdk/canisters/ledger/icp`    | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/ledger-icp)    |
| Ledger ICRC   | `@icp-sdk/canisters/ledger/icrc`   | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/ledger-icrc)   |
| NNS           | `@icp-sdk/canisters/nns`           | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/nns)           |
| SNS           | `@icp-sdk/canisters/sns`           | [README](https://github.com/dfinity/icp-sdk-canisters/tree/main/packages/sns)           |

## Example

Here's for example how to use the ckETH module through its sub-entry:

```typescript
import { CkETHMinterCanister } from "@icp-sdk/canisters/cketh";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { getSmartContractAddress } = CkETHMinterCanister.create({
  agent,
  canisterId: MY_CKETH_MINTER_CANISTER_ID,
});

const address = await getSmartContractAddress({});
```

Similarly, the ICP and ICRC ledgers can be used as follows, with the slight difference that their imports are nested under a common parent.

```typescript
import { IcrcLedgerCanister } from "@icp-sdk/canisters/ledger/icrc";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { metadata } = IcrcLedgerCanister.create({
  agent,
  canisterId: MY_LEDGER_CANISTER_ID,
});

const data = await metadata({});
```
