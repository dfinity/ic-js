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

The features are available through the class `CkETHMinterCanister`. It has to be instantiated with a canister ID.

```ts
import { CkETHMinterCanister } from "@dfinity/cketh";
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

## Features

`cketh-js` implements following features:

<!-- TSDOC_START -->

### :factory: CkETHMinterCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L20)

#### Methods

- [create](#gear-create)
- [getSmartContractAddress](#gear-getsmartcontractaddress)
- [withdrawEth](#gear-withdraweth)
- [withdrawErc20](#gear-withdrawerc20)
- [eip1559TransactionPrice](#gear-eip1559transactionprice)
- [retrieveEthStatus](#gear-retrieveethstatus)
- [getMinterInfo](#gear-getminterinfo)

##### :gear: create

| Method   | Type                                                               |
| -------- | ------------------------------------------------------------------ |
| `create` | `(options: CkETHCanisterOptions<_SERVICE>) => CkETHMinterCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L21)

##### :gear: getSmartContractAddress

The address of the helper smart contract may change in the future when the minter is upgraded. Please verify the address of the helper contract before any important transfer by querying the minter as follows.

| Method                    | Type                                                |
| ------------------------- | --------------------------------------------------- |
| `getSmartContractAddress` | `({ certified, }?: QueryParams) => Promise<string>` |

Parameters:

- `params`: The parameters to resolve the ckETH smart contract address.
- `params.certified`: query or update call

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L39)

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
- `params.address`: The destination ETH address.
- `params.amount`: The ETH amount in wei.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L59)

##### :gear: withdrawErc20

Submits a request to convert ckErc20 to Erc20 - e.g. ckUSDC to USDC - after making ICRC-2 approvals for the ckETH and related ckErc20 ledgers.

Preconditions:

The caller allowed the minter's principal to spend its funds using
[icrc2_approve] on the ckErc20 ledger and to burn some of the user’s ckETH tokens to pay for the transaction fees on the CkETH ledger.

| Method          | Type                                                                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `withdrawErc20` | `({ address, ledgerCanisterId, ...rest }: { address: string; amount: bigint; ledgerCanisterId: Principal; }) => Promise<RetrieveErc20Request>` |

Parameters:

- `params`: The parameters to withdrawal ckErc20 to Erc20.
- `params.address`: The destination ETH address.
- `params.amount`: The ETH amount in wei.
- `params.ledgerCanisterId`: The ledger canister ID of the ckErc20.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L96)

##### :gear: eip1559TransactionPrice

Estimate the price of a transaction issued by the minter when converting ckETH to ETH.

| Method                    | Type                                                                |
| ------------------------- | ------------------------------------------------------------------- |
| `eip1559TransactionPrice` | `({ certified, }: QueryParams) => Promise<Eip1559TransactionPrice>` |

Parameters:

- `params`: The parameters to get the minter info.
- `params.certified`: query or update call

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L130)

##### :gear: retrieveEthStatus

Retrieve the status of a withdrawal request.

| Method              | Type                                                 |
| ------------------- | ---------------------------------------------------- |
| `retrieveEthStatus` | `(blockIndex: bigint) => Promise<RetrieveEthStatus>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L144)

##### :gear: getMinterInfo

Returns internal minter parameters such as the minimal withdrawal amount, the last observed block number, etc.

| Method          | Type                                                  |
| --------------- | ----------------------------------------------------- |
| `getMinterInfo` | `({ certified }: QueryParams) => Promise<MinterInfo>` |

Parameters:

- `params`: The parameters to get the minter info.
- `params.certified`: query or update call

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L157)

<!-- TSDOC_END -->

## Resources

- [ckETH Minter](https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh/minter)
- ckETH [testnet deployment arguments](https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh/testnet)
- [How to Acquire ckETH](https://medium.com/dfinity/how-to-acquire-cketh-02d863c835fc) blog post by [Jennifer Tran](https://twitter.com/JKim_Tran)
