# ledger-icp-js

A library for interfacing with the [ICP ledger](https://internetcomputer.org/icp-tokens/) on the Internet Computer.

[![npm version](https://img.shields.io/npm/v/@dfinity/ledger-icp.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/ledger-icp) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

> ℹ️ This library is meant to interface with the ICP ledger only. If you are looking to interact with Snses, ckBTC, or other ICRC tokens, use the [ledger-icrc-js](../ledger-icrc) library.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Resources](#resources)

## Installation

You can use `ledger-icp-js` by installing it in your project.

```bash
npm i @dfinity/ledger-icp
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

The features are available through the class `LedgerCanister`. It has to be instantiated with a canister ID.

e.g. fetching a token metadata.

```ts
import { IcrcLedgerCanister } from "@dfinity/ledger-icp";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { metadata } = LedgerCanister.create({
  agent,
  canisterId: MY_LEDGER_CANISTER_ID,
});

const data = await metadata();
```

## Features

`ledger-icp-js` implements following features:

<!-- TSDOC_START -->

### :factory: IcrcLedgerCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L27)

#### Methods

- [create](#gear-create)
- [metadata](#gear-metadata)
- [transactionFee](#gear-transactionfee)
- [balance](#gear-balance)
- [transfer](#gear-transfer)
- [totalTokensSupply](#gear-totaltokenssupply)
- [transferFrom](#gear-transferfrom)
- [approve](#gear-approve)
- [allowance](#gear-allowance)

##### :gear: create

| Method | Type |
| ---------- | ---------- |
| `create` | `(options: IcrcLedgerCanisterOptions<_SERVICE>) => IcrcLedgerCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L28)

##### :gear: metadata

The token metadata (name, symbol, etc.).

| Method | Type |
| ---------- | ---------- |
| `metadata` | `(params: QueryParams) => Promise<IcrcTokenMetadataResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L42)

##### :gear: transactionFee

The ledger transaction fees.

| Method | Type |
| ---------- | ---------- |
| `transactionFee` | `(params: QueryParams) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L50)

##### :gear: balance

Returns the balance for a given account provided as owner and with optional subaccount.

| Method | Type |
| ---------- | ---------- |
| `balance` | `(params: BalanceParams) => Promise<bigint>` |

Parameters:

* `params`: The parameters to get the balance of an account.


[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L59)

##### :gear: transfer

Transfers tokens from the sender to the given account.

| Method | Type |
| ---------- | ---------- |
| `transfer` | `(params: TransferParams) => Promise<bigint>` |

Parameters:

* `params`: The parameters to transfer tokens.


[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L72)

##### :gear: totalTokensSupply

Returns the total supply of tokens.

| Method | Type |
| ---------- | ---------- |
| `totalTokensSupply` | `(params: QueryParams) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L88)

##### :gear: transferFrom

Transfers a token amount from the `from` account to the `to` account using the allowance of the spender's account (`SpenderAccount = { owner = caller; subaccount = spender_subaccount }`). The ledger draws the fees from the `from` account.

Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-2/README.md#icrc2_transfer_from

| Method | Type |
| ---------- | ---------- |
| `transferFrom` | `(params: TransferFromParams) => Promise<bigint>` |

Parameters:

* `params`: The parameters to transfer tokens from to.


[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L101)

##### :gear: approve

This method entitles the `spender` to transfer token `amount` on behalf of the caller from account `{ owner = caller; subaccount = from_subaccount }`.

Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-2/README.md#icrc2_approve

| Method | Type |
| ---------- | ---------- |
| `approve` | `(params: ApproveParams) => Promise<bigint>` |

Parameters:

* `params`: The parameters to approve.


[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L123)

##### :gear: allowance

Returns the token allowance that the `spender` account can transfer from the specified `account`, and the expiration time for that allowance, if any.

Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-2/README.md#icrc2_allowance

| Method | Type |
| ---------- | ---------- |
| `allowance` | `(params: AllowanceParams) => Promise<Allowance>` |

Parameters:

* `params`: The parameters to call the allowance.


[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger/src/ledger.canister.ts#L145)


<!-- TSDOC_END -->

## Resources

- [Ledger & Tokenization Working Group Standards](https://github.com/dfinity/ICRC-1/)
- [ICP ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icp_ledger)
