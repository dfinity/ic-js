# cketh-js

A library for interfacing with [ckETH](https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh/minter) on the Internet Computer.

[![npm version](https://img.shields.io/npm/v/@dfinity/cketh.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/cketh) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can use `cketh-js` by installing it in your project.

```bash
npm i @dfinity/cketh
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

The features are available through the class `CkETHCanister`. It has to be instantiated with a canister ID.

```ts
import { CkETHCanister } from "@dfinity/cketh";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { getSmartContractAddress } = CkETHCanister.create({
  agent,
  canisterId: MY_CKETH_MINTER_CANISTER_ID,
});

const address = await getSmartContractAddress({});
```

## Features

`cketh-js` implements following features:

<!-- TSDOC_START -->

### :factory: CkETHMinterCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L12)

#### Methods

- [create](#gear-create)
- [getSmartContractAddress](#gear-getsmartcontractaddress)
- [withdrawEth](#gear-withdraweth)

##### :gear: create

| Method   | Type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| `create` | `(options: CkETHMinterCanisterOptions<_SERVICE>) => CkETHMinterCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L13)

##### :gear: getSmartContractAddress

The address of the helper smart contract may change in the future when the minter is upgraded. Please verify the address of the helper contract before any important transfer by querying the minter as follows.

| Method                    | Type                                                |
| ------------------------- | --------------------------------------------------- |
| `getSmartContractAddress` | `({ certified, }?: QueryParams) => Promise<string>` |

Parameters:

- `params`: The parameters to resolve the ckETH smart contract address.
- `params.certified`: query or update call

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L31)

##### :gear: withdrawEth

Submits a request to convert ckETH to ETH after making an ICRC-2 approval.

Preconditions:

The caller allowed the minter's principal to spend its funds using
[icrc2_approve] on the ckETH ledger.

| Method        | Type                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| `withdrawEth` | `({ address, ...rest }: { address: string; amount: bigint; }) => Promise<RetrieveEthRequest>` |

Parameters:

- `params`: The parameters to withdrawal ckETH to ETH.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L51)

<!-- TSDOC_END -->

## Resources

- [ckETH Minter](https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh/minter)
- ckETH [testnet deployment arguments](https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh/testnet)
- [How to Acquire ckETH](https://medium.com/dfinity/how-to-acquire-cketh-02d863c835fc) blog post by [Jennifer Tran](https://twitter.com/JKim_Tran)
