# ckbtc-js

A library for interfacing with [ckBTC](https://github.com/dfinity/ic/tree/master/rs/bitcoin/ckbtc/minter) on the Internet Computer.

[![npm version](https://img.shields.io/npm/v/@dfinity/ckbtc.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/ckbtc) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can use `ckbtc-js` by installing it in your project.

```bash
npm i @dfinity/ckbtc
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

The features are available through the class `LedgerCanister`. It has to be instantiated with a canister ID.

e.g. fetching a token metadata.

```ts
import { CkBTCCanister } from "@dfinity/ckbtc";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { getBtcAddress } = CkBTCCanister.create({
  agent,
  canisterId: MY_CKBTC_MINTER_CANISTER_ID,
});

const btcAddress = await getBtcAddress({});
```

## Features

`ckbtc-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [parseBtcAddress](#gear-parsebtcaddress)

#### :gear: parseBtcAddress

Parse a Bitcoin address.

Parse implementation follows strategy implemented in [Minter canister](https://github.com/dfinity/ic/blob/a8da3aa23dc6f8f4708cb0cb8edce84c5bd8f225/rs/bitcoin/ckbtc/minter/src/address.rs#L54).

Credits: Parts of JavaScript code and test values from [bitcoin-address-validation](https://github.com/ruigomeseu/bitcoin-address-validation).

| Function          | Type                                                    |
| ----------------- | ------------------------------------------------------- |
| `parseBtcAddress` | `({ address, network, }: BtcAddress) => BtcAddressInfo` |

Parameters:

- `params`: The Bitcoin address and network to parse
- `params.network`: Optional. Default BtcNetwork is Mainnet

### :factory: CkBTCMinterCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [getBtcAddress](#gear-getbtcaddress)
- [updateBalance](#gear-updatebalance)
- [getWithdrawalAccount](#gear-getwithdrawalaccount)
- [retrieveBtc](#gear-retrievebtc)
- [estimateWithdrawalFee](#gear-estimatewithdrawalfee)
- [getDepositFee](#gear-getdepositfee)

##### :gear: create

| Method   | Type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| `create` | `(options: CkBTCMinterCanisterOptions<_SERVICE>) => CkBTCMinterCanister` |

##### :gear: getBtcAddress

Returns a BTC address for a given account.

Note: an update call is required by the Minter canister.

| Method          | Type                                                        |
| --------------- | ----------------------------------------------------------- |
| `getBtcAddress` | `({ owner, subaccount, }: MinterParams) => Promise<string>` |

Parameters:

- `params`: The parameters for which a BTC address should be resolved.
- `params.owner`: The owner for which the BTC address should be generated. If not provided, the `caller` will be use instead.
- `params.subaccount`: An optional subaccount to compute the address.

##### :gear: updateBalance

Notify the minter about the bitcoin transfer.

Upon successful notification, new ckBTC should be available on the targeted address.

| Method          | Type                                                                 |
| --------------- | -------------------------------------------------------------------- |
| `updateBalance` | `({ owner, subaccount, }: MinterParams) => Promise<UpdateBalanceOk>` |

Parameters:

- `params`: The parameters are the address to which bitcoin where transferred.
- `params.owner`: The owner of the address. If not provided, the `caller` will be use instead.
- `params.subaccount`: An optional subaccount of the address.

##### :gear: getWithdrawalAccount

Returns the account to which the caller should deposit ckBTC before withdrawing BTC using the [retrieveBtc] endpoint.

| Method                 | Type                     |
| ---------------------- | ------------------------ |
| `getWithdrawalAccount` | `() => Promise<Account>` |

##### :gear: retrieveBtc

Submits a request to convert ckBTC to BTC.

# Note

The BTC retrieval process is slow. Instead of synchronously waiting for a BTC transaction to settle, this method returns a request ([block_index]) that the caller can use to query the request status.

# Preconditions

The caller deposited the requested amount in ckBTC to the account that the [getWithdrawalAccount] endpoint returns.

| Method        | Type                                                    |
| ------------- | ------------------------------------------------------- |
| `retrieveBtc` | `(params: RetrieveBtcParams) => Promise<RetrieveBtcOk>` |

Parameters:

- `params`: The parameters are the bitcoin address and amount to convert.
- `params.address`: The bitcoin address.
- `params.amount`: The ckBTC amount.

##### :gear: estimateWithdrawalFee

Returns an estimation of the user's fee (in Satoshi) for a retrieve_btc request based on the current status of the Bitcoin network and the fee related to the minter.

| Method                  | Type                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| `estimateWithdrawalFee` | `({ certified, amount, }: EstimateWithdrawalFeeParams) => Promise<EstimateWithdrawalFee>` |

Parameters:

- `params`: The parameters to estimate the fee.
- `params.certified`: query or update call
- `params.amount`: The optional amount for which the fee should be estimated.

##### :gear: getDepositFee

Returns the fee that the minter will charge for a bitcoin deposit.

| Method          | Type                                              |
| --------------- | ------------------------------------------------- |
| `getDepositFee` | `({ certified }: QueryParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to get the deposit fee.
- `params.certified`: query or update call

<!-- TSDOC_END -->

## Resources

- [Bitcoin integration](https://internetcomputer.org/docs/current/developer-docs/integrations/#bitcoin-integration)
- [ckBTC Minter](https://github.com/dfinity/ic/tree/master/rs/bitcoin/ckbtc/minter/)
