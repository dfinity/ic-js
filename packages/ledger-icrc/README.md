# ledger-icrc-js

A library for interfacing with [ICRC ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icrc1) on the Internet Computer.

[![npm version](https://img.shields.io/npm/v/@dfinity/ledger-icrc.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/ledger-icrc) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Resources](#resources)

## Installation

You can use `ledger-icrc-js` by installing it in your project.

```bash
npm i @dfinity/ledger-icrc
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

The features are available through the class `IcrcLedgerCanister`. It has to be instantiated with a canister ID.

e.g. fetching a token metadata.

```ts
import { IcrcLedgerCanister } from "@dfinity/ledger-icrc";
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

## Features

`ledger-icrc-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [encodeIcrcAccount](#gear-encodeicrcaccount)
- [decodeIcrcAccount](#gear-decodeicrcaccount)
- [mapTokenMetadata](#gear-maptokenmetadata)
- [decodePayment](#gear-decodepayment)

#### :gear: encodeIcrcAccount

Encodes an Icrc-1 account compatible into a string.
Formatting Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/TextualEncoding.md

| Function            | Type                                              |
| ------------------- | ------------------------------------------------- |
| `encodeIcrcAccount` | `({ owner, subaccount, }: IcrcAccount) => string` |

Parameters:

- `account`: : Principal, subaccount?: Uint8Array }

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/utils/ledger.utils.ts#L27)

#### :gear: decodeIcrcAccount

Decodes a string into an Icrc-1 compatible account.
Formatting Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-1/TextualEncoding.md

| Function            | Type                                     |
| ------------------- | ---------------------------------------- |
| `decodeIcrcAccount` | `(accountString: string) => IcrcAccount` |

Parameters:

- `accountString`: string

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/utils/ledger.utils.ts#L67)

#### :gear: mapTokenMetadata

Maps the token metadata information from a ledger response into a structured record.

This utility processes an array of metadata key-value pairs provided by the ledger
and extracts specific fields, such as symbol, name, fee, decimals, and logo. It then
constructs a `IcrcTokenMetadata` record. If any required fields are missing,
the function returns `undefined`.

| Function           | Type                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| `mapTokenMetadata` | `(response: IcrcTokenMetadataResponse) => IcrcTokenMetadata or undefined` |

Parameters:

- `response`: - An array of key-value pairs representing token metadata.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/utils/ledger.utils.ts#L118)

#### :gear: decodePayment

👀 This feature is currently in draft. You can find more information about it at https://github.com/dfinity/ICRC/issues/22.

A naive implementation of a payment parser. Given a code, the function attempts to extract a token name, account identifier (textual representation), and an optional amount.

If the code doesn't match the expected pattern, `undefined` is returned for simplicity.
Similarly, if an optional amount is provided but it's not a valid number, the parser will not throw an exception and returns `undefined`.

Please note that this function doesn't perform any validity checks on the extracted information.
It does not verify if the token is known or if the identifier is a valid address.

```
urn            = token ":" address [ "?" params]
token         = [ ckbtc / icp / chat / bitcoin / ethereum ... ]
address       = STRING
params        = param [ "&" params ]
param         = [ amountparam ]
amountparam   = "amount=" *digit [ "." *digit ]
```

| Function        | Type                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| `decodePayment` | `(code: string) => { token: string; identifier: string; amount?: number or undefined; } or undefined` |

Parameters:

- `code`: string

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/utils/payment.utils.ts#L26)

### :factory: IcrcCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/canister.ts#L9)

#### Methods

- [balance](#gear-balance)

##### :gear: balance

Returns the balance for a given account provided as owner and with optional subaccount.

| Method    | Type                                         |
| --------- | -------------------------------------------- |
| `balance` | `(params: BalanceParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to get the balance of an account.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/canister.ts#L18)

### :factory: IcrcLedgerCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L39)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                                   |
| -------- | ---------------------------------------------------------------------- |
| `create` | `(options: IcrcLedgerCanisterOptions<_SERVICE>) => IcrcLedgerCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L40)

#### Methods

- [metadata](#gear-metadata)
- [transactionFee](#gear-transactionfee)
- [balance](#gear-balance)
- [transfer](#gear-transfer)
- [totalTokensSupply](#gear-totaltokenssupply)
- [transferFrom](#gear-transferfrom)
- [approve](#gear-approve)
- [allowance](#gear-allowance)
- [consentMessage](#gear-consentmessage)
- [getBlocks](#gear-getblocks)

##### :gear: metadata

The token metadata (name, symbol, etc.).

| Method     | Type                                                          |
| ---------- | ------------------------------------------------------------- |
| `metadata` | `(params: QueryParams) => Promise<IcrcTokenMetadataResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L54)

##### :gear: transactionFee

The ledger transaction fees.

| Method           | Type                                       |
| ---------------- | ------------------------------------------ |
| `transactionFee` | `(params: QueryParams) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L62)

##### :gear: balance

Returns the balance for a given account provided as owner and with optional subaccount.

| Method    | Type                                         |
| --------- | -------------------------------------------- |
| `balance` | `(params: BalanceParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to get the balance of an account.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L71)

##### :gear: transfer

Transfers tokens from the sender to the given account.

| Method     | Type                                          |
| ---------- | --------------------------------------------- |
| `transfer` | `(params: TransferParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to transfer tokens.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L84)

##### :gear: totalTokensSupply

Returns the total supply of tokens.

| Method              | Type                                       |
| ------------------- | ------------------------------------------ |
| `totalTokensSupply` | `(params: QueryParams) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L100)

##### :gear: transferFrom

Transfers a token amount from the `from` account to the `to` account using the allowance of the spender's account (`SpenderAccount = { owner = caller; subaccount = spender_subaccount }`). The ledger draws the fees from the `from` account.

Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-2/README.md#icrc2_transfer_from

| Method         | Type                                              |
| -------------- | ------------------------------------------------- |
| `transferFrom` | `(params: TransferFromParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to transfer tokens from to.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L112)

##### :gear: approve

This method entitles the `spender` to transfer token `amount` on behalf of the caller from account `{ owner = caller; subaccount = from_subaccount }`.

Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-2/README.md#icrc2_approve

| Method    | Type                                         |
| --------- | -------------------------------------------- |
| `approve` | `(params: ApproveParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to approve.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L134)

##### :gear: allowance

Returns the token allowance that the `spender` account can transfer from the specified `account`, and the expiration time for that allowance, if any.

Reference: https://github.com/dfinity/ICRC-1/blob/main/standards/ICRC-2/README.md#icrc2_allowance

| Method      | Type                                              |
| ----------- | ------------------------------------------------- |
| `allowance` | `(params: AllowanceParams) => Promise<Allowance>` |

Parameters:

- `params`: The parameters to call the allowance.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L156)

##### :gear: consentMessage

Fetches the consent message for a specified canister call, intended to provide a human-readable message that helps users make informed decisions.

| Method           | Type                                                                   |
| ---------------- | ---------------------------------------------------------------------- |
| `consentMessage` | `(params: Icrc21ConsentMessageParams) => Promise<icrc21_consent_info>` |

Parameters:

- `params`: - The request parameters containing the method name, arguments, and consent preferences (e.g., language).

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L174)

##### :gear: getBlocks

Fetches the blocks information from the ledger canister,

| Method      | Type                                                    |
| ----------- | ------------------------------------------------------- |
| `getBlocks` | `(params: GetBlocksParams) => Promise<GetBlocksResult>` |

Parameters:

- `params`: The parameters to get the blocks.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/ledger.canister.ts#L198)

### :factory: IcrcIndexCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index.canister.ts#L14)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                                  |
| -------- | --------------------------------------------------------------------- |
| `create` | `(options: IcrcLedgerCanisterOptions<_SERVICE>) => IcrcIndexCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index.canister.ts#L15)

#### Methods

- [getTransactions](#gear-gettransactions)
- [ledgerId](#gear-ledgerid)

##### :gear: getTransactions

Get the transactions of an account

Always certified.
`get_account_transactions` needs to be called with an update
because the index canisters makes a call to the ledger canister to get the transaction data.
Index Canister only holds the transactions ids in state, not the whole transaction data.

| Method            | Type                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| `getTransactions` | `(params: GetAccountTransactionsParams) => Promise<GetTransactions>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index.canister.ts#L34)

##### :gear: ledgerId

Returns the ledger canister ID related to the index canister.

| Method     | Type                                          |
| ---------- | --------------------------------------------- |
| `ledgerId` | `(params: QueryParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index.canister.ts#L51)

### :factory: IcrcIndexNgCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index-ng.canister.ts#L23)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                                    |
| -------- | ----------------------------------------------------------------------- |
| `create` | `(options: IcrcLedgerCanisterOptions<_SERVICE>) => IcrcIndexNgCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index-ng.canister.ts#L24)

#### Methods

- [getTransactions](#gear-gettransactions)
- [ledgerId](#gear-ledgerid)
- [status](#gear-status)
- [listSubaccounts](#gear-listsubaccounts)

##### :gear: getTransactions

Get the transactions of an account.

| Method            | Type                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `getTransactions` | `({ certified, ...rest }: GetIndexNgAccountTransactionsParams) => Promise<GetTransactions>` |

Parameters:

- `params`: The parameters to get the transactions of an account.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index-ng.canister.ts#L49)

##### :gear: ledgerId

Returns the ledger canister ID related to the index canister.

| Method     | Type                                          |
| ---------- | --------------------------------------------- |
| `ledgerId` | `(params: QueryParams) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index-ng.canister.ts#L67)

##### :gear: status

Returns the status of the index canister.

| Method   | Type                                       |
| -------- | ------------------------------------------ |
| `status` | `(params: QueryParams) => Promise<Status>` |

Parameters:

- `params`: The parameters to get the status of the index canister.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index-ng.canister.ts#L78)

##### :gear: listSubaccounts

Returns the list of subaccounts for a given owner.

| Method            | Type                                                                       |
| ----------------- | -------------------------------------------------------------------------- |
| `listSubaccounts` | `({ certified, ...rest }: ListSubaccountsParams) => Promise<SubAccount[]>` |

Parameters:

- `params`: The parameters to get the list of subaccounts.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc/src/index-ng.canister.ts#L87)

<!-- TSDOC_END -->

## Resources

- [Ledger & Tokenization Working Group Standards](https://github.com/dfinity/ICRC-1/)
- [ICRC-1 Ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icrc1)
