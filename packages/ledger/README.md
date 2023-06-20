# ledger-js

A library for interfacing with [ICRC ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icrc1) on the Internet Computer.

[![npm version](https://img.shields.io/npm/v/@dfinity/ledger.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/ledger) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Resources](#resources)

## Installation

You can use `ledger-js` by installing it in your project.

```bash
npm i @dfinity/ledger
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

The features are available through the class `LedgerCanister`. It has to be instantiated with a canister ID.

e.g. fetching a token metadata.

```ts
import { IcrcLedgerCanister } from "@dfinity/ledger";
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

`ledger-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [encodeIcrcAccount](#gear-encodeicrcaccount)
- [decodeIcrcAccount](#gear-decodeicrcaccount)
- [parsePaymentCode](#gear-parsepaymentcode)

#### :gear: encodeIcrcAccount

Encodes an Icrc-1 account compatible into a string.
Formatting Reference: https://github.com/dfinity/ICRC-1/pull/55/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R238

| Function            | Type                                              |
| ------------------- | ------------------------------------------------- |
| `encodeIcrcAccount` | `({ owner, subaccount, }: IcrcAccount) => string` |

Parameters:

- `account`: : Principal, subaccount?: Uint8Array }

#### :gear: decodeIcrcAccount

Decodes a string into an Icrc-1 compatible account.
Formatting Reference: https://github.com/dfinity/ICRC-1/pull/98

| Function            | Type                                     |
| ------------------- | ---------------------------------------- |
| `decodeIcrcAccount` | `(accountString: string) => IcrcAccount` |

Parameters:

- `accountString`: string

#### :gear: parsePaymentCode

A naive implementation of a payment parser. Given a code, the function attempts to extract a token name, account identifier (textual representation), and an optional amount.

If the code doesn't match the expected pattern, `undefined` is returned for simplicity.
Similarly, if an optional amount is provided but it's not a valid number, the parser will not throw an exception and returns `undefined`.

Please note that this function doesn't perform any validity checks on the extracted information.
It doesn't verify if the token is known or if the identifier is a valid address.

| Function           | Type                                                                        |
| ------------------ | --------------------------------------------------------------------------- |
| `parsePaymentCode` | `(code: string) => { token: string; identifier: string; amount?: number; }` |

Parameters:

- `code`: string

### :factory: IcrcLedgerCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [metadata](#gear-metadata)
- [transactionFee](#gear-transactionfee)
- [balance](#gear-balance)
- [transfer](#gear-transfer)
- [totalTokensSupply](#gear-totaltokenssupply)

##### :gear: create

| Method   | Type                                                                   |
| -------- | ---------------------------------------------------------------------- |
| `create` | `(options: IcrcLedgerCanisterOptions<_SERVICE>) => IcrcLedgerCanister` |

##### :gear: metadata

The token metadata (name, symbol, etc.).

| Method     | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| `metadata` | `(params: QueryParams) => Promise<IcrcTokenMetadataResponse>` |

##### :gear: transactionFee

The ledger transaction fees.

| Method           | Type                                       |
| ---------------- | ------------------------------------------ |
| `transactionFee` | `(params: QueryParams) => Promise<bigint>` |

##### :gear: balance

Returns the balance for a given account provided as owner and with optional subaccount.

| Method    | Type                                         |
| --------- | -------------------------------------------- |
| `balance` | `(params: BalanceParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to get the balance of an account.

##### :gear: transfer

Transfers tokens from the sender to the given account.

| Method     | Type                                          |
| ---------- | --------------------------------------------- |
| `transfer` | `(params: TransferParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to transfer tokens.

##### :gear: totalTokensSupply

Returns the total supply of tokens.

| Method              | Type                                       |
| ------------------- | ------------------------------------------ |
| `totalTokensSupply` | `(params: QueryParams) => Promise<bigint>` |

### :factory: IcrcIndexCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [getTransactions](#gear-gettransactions)

##### :gear: create

| Method   | Type                                                                  |
| -------- | --------------------------------------------------------------------- |
| `create` | `(options: IcrcLedgerCanisterOptions<_SERVICE>) => IcrcIndexCanister` |

##### :gear: getTransactions

Get the transactions of an account

Always certified.
`get_account_transactions` needs to be called with an update
because the index canisters makes a call to the ledger canister to get the transaction data.
Index Canister only holds the transactions ids in state, not the whole transaction data.

| Method            | Type                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| `getTransactions` | `(params: GetAccountTransactionsParams) => Promise<GetTransactions>` |

<!-- TSDOC_END -->

## Resources

- [Ledger & Tokenization Working Group Standards](https://github.com/dfinity/ICRC-1/)
- [ICRC-1 Ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icrc1)
