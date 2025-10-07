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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L29)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| `create` | `(options: CkETHMinterCanisterOptions<_SERVICE>) => CkETHMinterCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L30)

#### Methods

- [getSmartContractAddress](#gear-getsmartcontractaddress)
- [withdrawEth](#gear-withdraweth)
- [withdrawErc20](#gear-withdrawerc20)
- [eip1559TransactionPrice](#gear-eip1559transactionprice)
- [retrieveEthStatus](#gear-retrieveethstatus)
- [getMinterInfo](#gear-getminterinfo)

##### :gear: getSmartContractAddress

The address of the helper smart contract may change in the future when the minter is upgraded. Please verify the address of the helper contract before any important transfer by querying the minter as follows.

| Method                    | Type                                                |
| ------------------------- | --------------------------------------------------- |
| `getSmartContractAddress` | `({ certified, }?: QueryParams) => Promise<string>` |

Parameters:

- `params`: The parameters to resolve the ckETH smart contract address.
- `params.certified`: query or update call

Returns:

Address of the helper smart contract.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L48)

##### :gear: withdrawEth

Submits a request to convert ckETH to ETH after making an ICRC-2 approval.

Preconditions:

The caller allowed the minter's principal to spend its funds using
[icrc2_approve] on the ckETH ledger.

| Method        | Type                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `withdrawEth` | `({ address, fromSubaccount, ...rest }: { address: string; amount: bigint; fromSubaccount?: Subaccount or undefined; }) => Promise<RetrieveEthRequest>` |

Parameters:

- `params`: The parameters to withdrawal ckETH to ETH.
- `params.address`: The destination ETH address.
- `params.amount`: The ETH amount in wei.
- `params.fromSubaccount`: The optional subaccount to burn ckETH from.

Returns:

The successful result or the operation.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L69)

##### :gear: withdrawErc20

Submits a request to convert ckErc20 to Erc20 - e.g. ckUSDC to USDC - after making ICRC-2 approvals for the ckETH and related ckErc20 ledgers.

Preconditions:

The caller allowed the minter's principal to spend its funds using
[icrc2_approve] on the ckErc20 ledger and to burn some of the user’s ckETH tokens to pay for the transaction fees on the CkETH ledger.

| Method          | Type                                                                                                                                                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `withdrawErc20` | `({ address, ledgerCanisterId, fromCkEthSubaccount, fromCkErc20Subaccount, ...rest }: { address: string; amount: bigint; ledgerCanisterId: Principal; fromCkEthSubaccount?: Subaccount or undefined; fromCkErc20Subaccount?: Subaccount or undefined; }) => Promise<...>` |

Parameters:

- `params`: The parameters to withdrawal ckErc20 to Erc20.
- `params.address`: The destination ETH address.
- `params.amount`: The ETH amount in wei.
- `params.fromCkEthSubaccount`: The optional subaccount to burn ckETH from to pay for the transaction fee.
- `params.fromCkEthSubaccount`: The optional subaccount to burn ckERC20 from.

Returns:

The successful result or the operation.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L110)

##### :gear: eip1559TransactionPrice

Estimate the price of a transaction issued by the minter when converting ckETH to ETH and ckER20 to ERC20.

| Method                    | Type                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| `eip1559TransactionPrice` | `({ certified, ...rest }: Eip1559TransactionPriceParams) => Promise<Eip1559TransactionPrice>` |

Parameters:

- `params`: - The parameters to get the minter info.
- `params.ckErc20LedgerId`: - The optional identifier for a particular ckERC20 ledger.
- `params.certified`: - Indicates whether this is a certified query or an update call.

Returns:

- The estimated gas fee and limit.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L151)

##### :gear: retrieveEthStatus

Retrieve the status of a withdrawal request.

| Method              | Type                                                 |
| ------------------- | ---------------------------------------------------- |
| `retrieveEthStatus` | `(blockIndex: bigint) => Promise<RetrieveEthStatus>` |

Returns:

The current status of an Ethereum transaction for a block index resulting from a withdrawal.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L166)

##### :gear: getMinterInfo

Returns internal minter parameters such as the minimal withdrawal amount, the last observed block number, etc.

| Method          | Type                                                  |
| --------------- | ----------------------------------------------------- |
| `getMinterInfo` | `({ certified }: QueryParams) => Promise<MinterInfo>` |

Parameters:

- `params`: The parameters to get the minter info.
- `params.certified`: query or update call

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/minter.canister.ts#L179)

### :factory: CkETHOrchestratorCanister

Class representing the CkETH Orchestrator Canister, which manages the Ledger and Index canisters of ckERC20 tokens.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/orchestrator.canister.ts#L15)

#### Static Methods

- [create](#gear-create)

##### :gear: create

Creates an instance of CkETHOrchestratorCanister.

| Method   | Type                                                                                 |
| -------- | ------------------------------------------------------------------------------------ |
| `create` | `(options: CkETHOrchestratorCanisterOptions<_SERVICE>) => CkETHOrchestratorCanister` |

Parameters:

- `options`: - Options for creating the canister.

Returns:

A new instance of CkETHOrchestratorCanister.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/orchestrator.canister.ts#L21)

#### Methods

- [getOrchestratorInfo](#gear-getorchestratorinfo)

##### :gear: getOrchestratorInfo

Retrieves orchestrator information, which contains the list of existing ckERC20 Ledger and Index canisters.

| Method                | Type                                                          |
| --------------------- | ------------------------------------------------------------- |
| `getOrchestratorInfo` | `({ certified, }?: QueryParams) => Promise<OrchestratorInfo>` |

Parameters:

- `params`: - The query parameters.
- `params.certified`: - Whether to execute a certified (update) call.

Returns:

A promise that resolves to the orchestrator information.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cketh/src/orchestrator.canister.ts#L40)

<!-- TSDOC_END -->

## Resources

- [ckETH Minter](https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh/minter)
- ckETH [testnet deployment arguments](https://github.com/dfinity/ic/tree/master/rs/ethereum/cketh/testnet)
- [How to Acquire ckETH](https://medium.com/dfinity/how-to-acquire-cketh-02d863c835fc) blog post by [Jennifer Tran](https://twitter.com/JKim_Tran)
