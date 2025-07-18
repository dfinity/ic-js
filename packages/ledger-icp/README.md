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
import { createAgent } from "@dfinity/utils";
import { LedgerCanister } from "@dfinity/ledger-icp";

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

### :factory: AccountIdentifier

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L10)

#### Static Methods

- [fromHex](#gear-fromhex)
- [fromPrincipal](#gear-fromprincipal)

##### :gear: fromHex

| Method    | Type                                 |
| --------- | ------------------------------------ |
| `fromHex` | `(hex: string) => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L13)

##### :gear: fromPrincipal

| Method          | Type                                                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| `fromPrincipal` | `({ principal, subAccount, }: { principal: Principal; subAccount?: SubAccount or undefined; }) => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L36)

#### Methods

- [toHex](#gear-tohex)
- [toUint8Array](#gear-touint8array)
- [toNumbers](#gear-tonumbers)
- [toAccountIdentifierHash](#gear-toaccountidentifierhash)

##### :gear: toHex

| Method  | Type           |
| ------- | -------------- |
| `toHex` | `() => string` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L62)

##### :gear: toUint8Array

| Method         | Type               |
| -------------- | ------------------ |
| `toUint8Array` | `() => Uint8Array` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L66)

##### :gear: toNumbers

| Method      | Type             |
| ----------- | ---------------- |
| `toNumbers` | `() => number[]` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L70)

##### :gear: toAccountIdentifierHash

| Method                    | Type                          |
| ------------------------- | ----------------------------- |
| `toAccountIdentifierHash` | `() => { hash: Uint8Array; }` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L74)

### :factory: SubAccount

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L81)

#### Static Methods

- [fromBytes](#gear-frombytes)
- [fromPrincipal](#gear-fromprincipal)
- [fromID](#gear-fromid)

##### :gear: fromBytes

| Method      | Type                                |
| ----------- | ----------------------------------- |
| `fromBytes` | `(bytes: Uint8Array) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L84)

##### :gear: fromPrincipal

| Method          | Type                                   |
| --------------- | -------------------------------------- |
| `fromPrincipal` | `(principal: Principal) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L92)

##### :gear: fromID

| Method   | Type                         |
| -------- | ---------------------------- |
| `fromID` | `(id: number) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L105)

#### Methods

- [toUint8Array](#gear-touint8array)

##### :gear: toUint8Array

| Method         | Type               |
| -------------- | ------------------ |
| `toUint8Array` | `() => Uint8Array` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/account_identifier.ts#L129)

### :factory: LedgerCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L35)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                  |
| -------- | ----------------------------------------------------- |
| `create` | `(options?: LedgerCanisterOptions) => LedgerCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L36)

#### Methods

- [accountBalance](#gear-accountbalance)
- [metadata](#gear-metadata)
- [transactionFee](#gear-transactionfee)
- [transfer](#gear-transfer)
- [icrc1Transfer](#gear-icrc1transfer)
- [icrc2Approve](#gear-icrc2approve)
- [icrc21ConsentMessage](#gear-icrc21consentmessage)

##### :gear: accountBalance

Returns the balance of the specified account identifier.

If `certified` is true, the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method           | Type                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| `accountBalance` | `({ accountIdentifier: accountIdentifierParam, certified, }: AccountBalanceParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to get the balance of an account.
- `params.accountIdentifier`: The account identifier provided either as hex string or as an AccountIdentifier.
- `params.certified`: query or update call.

Returns:

The balance of the given account.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L64)

##### :gear: metadata

Fetches the ledger metadata.

| Method     | Type                                                  |
| ---------- | ----------------------------------------------------- |
| `metadata` | `(params: QueryParams) => Promise<[string, Value][]>` |

Parameters:

- `params`: - The parameters used to fetch the metadata, notably query or certified call.

Returns:

The metadata of the ICP ledger. A promise that resolves to an array of metadata entries, where each entry is a tuple consisting of a string and a value.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L83)

##### :gear: transactionFee

Returns the transaction fee of the ICP ledger canister.

| Method           | Type                                        |
| ---------------- | ------------------------------------------- |
| `transactionFee` | `(params?: QueryParams) => Promise<bigint>` |

Parameters:

- `params`: - Optional query parameters for the request, defaulting to `{ certified: false }` for backwards compatibility reason.

Returns:

A promise that resolves to the transaction fee as a bigint.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L94)

##### :gear: transfer

Transfer ICP from the caller to the destination `accountIdentifier`.
Returns the index of the block containing the tx if it was successful.

| Method     | Type                                            |
| ---------- | ----------------------------------------------- |
| `transfer` | `(request: TransferRequest) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L112)

##### :gear: icrc1Transfer

Transfer ICP from the caller to the destination `Account`.
Returns the index of the block containing the tx if it was successful.

| Method          | Type                                                 |
| --------------- | ---------------------------------------------------- |
| `icrc1Transfer` | `(request: Icrc1TransferRequest) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L132)

##### :gear: icrc2Approve

This method entitles the `spender` to transfer token `amount` on behalf of the caller from account `{ owner = caller; subaccount = from_subaccount }`.

Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-2/README.md#icrc2_approve

| Method         | Type                                               |
| -------------- | -------------------------------------------------- |
| `icrc2Approve` | `(params: Icrc2ApproveRequest) => Promise<bigint>` |

Parameters:

- `params`: - The parameters to approve.

Returns:

The block index of the approved transaction.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L152)

##### :gear: icrc21ConsentMessage

Fetches the consent message for a specified canister call, intended to provide a human-readable message that helps users make informed decisions.

| Method                 | Type                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `icrc21ConsentMessage` | `(params: Icrc21ConsentMessageRequest) => Promise<icrc21_consent_info>` |

Parameters:

- `params`: - The request parameters containing the method name, arguments, and consent preferences (e.g., language).

Returns:

- A promise that resolves to the consent message response, which includes the consent message in the specified language and other related information.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/ledger.canister.ts#L179)

### :factory: IndexCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/index.canister.ts#L19)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                                                          |
| -------- | --------------------------------------------------------------------------------------------- |
| `create` | `({ canisterId: optionsCanisterId, ...options }: CanisterOptions<_SERVICE>) => IndexCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/index.canister.ts#L20)

#### Methods

- [accountBalance](#gear-accountbalance)
- [getTransactions](#gear-gettransactions)

##### :gear: accountBalance

Returns the balance of the specified account identifier.

| Method           | Type                                                                           |
| ---------------- | ------------------------------------------------------------------------------ |
| `accountBalance` | `({ certified, accountIdentifier, }: AccountBalanceParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to get the balance of an account.
- `params.accountIdentifier`: The account identifier provided either as hex string or as an AccountIdentifier.
- `params.certified`: query or update call.

Returns:

The balance of the given account.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/index.canister.ts#L45)

##### :gear: getTransactions

Returns the transactions and balance of an ICP account.

| Method            | Type                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getTransactions` | `({ certified, accountIdentifier, start, maxResults: max_results, }: GetTransactionsParams) => Promise<GetAccountIdentifierTransactionsResponse>` |

Parameters:

- `params`: The parameters to get the transactions.
- `params.certified`: query or update call.
- `params.accountIdentifier`: The account identifier provided either as hex string or as an AccountIdentifier.
- `params.start`: If set then the results will start from the next most recent transaction id after start (start won't be included). If not provided, then the results will start from the most recent transaction id.
- `params.maxResults`: Maximum number of transactions to fetch.

Returns:

The transactions, balance and the transaction id of the oldest transaction the account has.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icp/src/index.canister.ts#L64)

<!-- TSDOC_END -->

## Resources

- [Ledger & Tokenization Working Group Standards](https://github.com/dfinity/ICRC-1/)
- [ICP ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icp_ledger)
