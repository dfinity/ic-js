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
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils @dfinity/nns-proto
```

## Usage

The features are available through the class `LedgerCanister`. It has to be instantiated with a canister ID.

e.g. fetching a token metadata.

```ts
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

### :factory: AccountIdentifier

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L13)

#### Methods

- [fromHex](#gear-fromhex)
- [fromPrincipal](#gear-fromprincipal)
- [toProto](#gear-toproto)
- [toHex](#gear-tohex)
- [toUint8Array](#gear-touint8array)
- [toNumbers](#gear-tonumbers)
- [toAccountIdentifierHash](#gear-toaccountidentifierhash)

##### :gear: fromHex

| Method    | Type                                 |
| --------- | ------------------------------------ |
| `fromHex` | `(hex: string) => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L16)

##### :gear: fromPrincipal

| Method          | Type                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| `fromPrincipal` | `({ principal, subAccount, }: { principal: Principal; subAccount?: SubAccount; }) => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L20)

##### :gear: toProto

| Method    | Type                               |
| --------- | ---------------------------------- |
| `toProto` | `() => Promise<AccountIdentifier>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L49)

##### :gear: toHex

| Method  | Type           |
| ------- | -------------- |
| `toHex` | `() => string` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L57)

##### :gear: toUint8Array

| Method         | Type               |
| -------------- | ------------------ |
| `toUint8Array` | `() => Uint8Array` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L61)

##### :gear: toNumbers

| Method      | Type             |
| ----------- | ---------------- |
| `toNumbers` | `() => number[]` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L65)

##### :gear: toAccountIdentifierHash

| Method                    | Type                      |
| ------------------------- | ------------------------- |
| `toAccountIdentifierHash` | `() => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L69)

### :factory: SubAccount

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L76)

#### Methods

- [fromBytes](#gear-frombytes)
- [fromPrincipal](#gear-fromprincipal)
- [fromID](#gear-fromid)
- [toUint8Array](#gear-touint8array)

##### :gear: fromBytes

| Method      | Type                                         |
| ----------- | -------------------------------------------- |
| `fromBytes` | `(bytes: Uint8Array) => SubAccount or Error` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L79)

##### :gear: fromPrincipal

| Method          | Type                                   |
| --------------- | -------------------------------------- |
| `fromPrincipal` | `(principal: Principal) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L87)

##### :gear: fromID

| Method   | Type                         |
| -------- | ---------------------------- |
| `fromID` | `(id: number) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L100)

##### :gear: toUint8Array

| Method         | Type               |
| -------------- | ------------------ |
| `toUint8Array` | `() => Uint8Array` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L112)

### :factory: LedgerCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L32)

#### Methods

- [create](#gear-create)
- [accountBalance](#gear-accountbalance)
- [transactionFee](#gear-transactionfee)
- [transfer](#gear-transfer)
- [icrc1Transfer](#gear-icrc1transfer)

##### :gear: create

| Method   | Type                                                  |
| -------- | ----------------------------------------------------- |
| `create` | `(options?: LedgerCanisterOptions) => LedgerCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L43)

##### :gear: accountBalance

Returns the balance of the specified account identifier.

If `certified` is true, the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method           | Type                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `accountBalance` | `({ accountIdentifier, certified, }: { accountIdentifier: AccountIdentifier; certified?: boolean; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L75)

##### :gear: transactionFee

Returns the transaction fee of the ledger canister

| Method           | Type                    |
| ---------------- | ----------------------- |
| `transactionFee` | `() => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L99)

##### :gear: transfer

Transfer ICP from the caller to the destination `accountIdentifier`.
Returns the index of the block containing the tx if it was successful.

| Method     | Type                                            |
| ---------- | ----------------------------------------------- |
| `transfer` | `(request: TransferRequest) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L112)

##### :gear: icrc1Transfer

Transfer ICP from the caller to the destination `Account`.
Returns the index of the block containing the tx if it was successful.

| Method          | Type                                                 |
| --------------- | ---------------------------------------------------- |
| `icrc1Transfer` | `(request: Icrc1TransferRequest) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L142)

<!-- TSDOC_END -->

## Resources

- [Ledger & Tokenization Working Group Standards](https://github.com/dfinity/ICRC-1/)
- [ICP ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icp_ledger)
