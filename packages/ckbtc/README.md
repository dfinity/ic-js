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

The features are available through the class `CkBTCMinterCanister`. It has to be instantiated with a canister ID.

```ts
import { CkBTCMinterCanister } from "@dfinity/ckbtc";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { getBtcAddress } = CkBTCMinterCanister.create({
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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/utils/btc.utils.ts#L195)

### :factory: CkBTCMinterCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L42)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                               |
| -------- | ------------------------------------------------------------------ |
| `create` | `(options: CkBTCCanisterOptions<_SERVICE>) => CkBTCMinterCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L43)

#### Methods

- [getBtcAddress](#gear-getbtcaddress)
- [updateBalance](#gear-updatebalance)
- [getWithdrawalAccount](#gear-getwithdrawalaccount)
- [retrieveBtc](#gear-retrievebtc)
- [retrieveBtcWithApproval](#gear-retrievebtcwithapproval)
- [retrieveBtcStatus](#gear-retrievebtcstatus)
- [retrieveBtcStatusV2ByAccount](#gear-retrievebtcstatusv2byaccount)
- [estimateWithdrawalFee](#gear-estimatewithdrawalfee)
- [getMinterInfo](#gear-getminterinfo)
- [getKnownUtxos](#gear-getknownutxos)

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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L64)

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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L83)

##### :gear: getWithdrawalAccount

Returns the account to which the caller should deposit ckBTC before withdrawing BTC using the [retrieveBtc] endpoint.

| Method                 | Type                     |
| ---------------------- | ------------------------ |
| `getWithdrawalAccount` | `() => Promise<Account>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L106)

##### :gear: retrieveBtc

Submits a request to convert ckBTC to BTC.

Note:

The BTC retrieval process is slow. Instead of synchronously waiting for a BTC transaction to settle, this method returns a request ([block_index]) that the caller can use to query the request status.

Preconditions:

The caller deposited the requested amount in ckBTC to the account that the [getWithdrawalAccount] endpoint returns.

| Method        | Type                                                    |
| ------------- | ------------------------------------------------------- |
| `retrieveBtc` | `(params: RetrieveBtcParams) => Promise<RetrieveBtcOk>` |

Parameters:

- `params`: The parameters are the bitcoin address and amount to convert.
- `params.address`: The bitcoin address.
- `params.amount`: The ckBTC amount.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L125)

##### :gear: retrieveBtcWithApproval

Submits a request to convert ckBTC to BTC after making an ICRC-2 approval.

# Note

The BTC retrieval process is slow. Instead of synchronously waiting for a BTC transaction to settle, this method returns a request ([block_index]) that the caller can use to query the request status.

# Preconditions

The caller allowed the minter's principal to spend its funds using
[icrc2_approve] on the ckBTC ledger.

| Method                    | Type                                                                                                                                               |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `retrieveBtcWithApproval` | `({ address, amount, fromSubaccount, }: { address: string; amount: bigint; fromSubaccount?: Uint8Array or undefined; }) => Promise<RetrieveBtcOk>` |

Parameters:

- `params.address`: The bitcoin address.
- `params.amount`: The ckBTC amount.
- `params.fromSubaccount`: An optional subaccount from which
  the ckBTC should be transferred.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L155)

##### :gear: retrieveBtcStatus

Returns the status of a specific BTC withdrawal based on the transaction ID
of the corresponding burn transaction.

| Method              | Type                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `retrieveBtcStatus` | `({ transactionId, certified, }: { transactionId: bigint; certified: boolean; }) => Promise<RetrieveBtcStatus>` |

Parameters:

- `transactionId`: The ID of the corresponding burn transaction.
- `certified`: query or update call

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L187)

##### :gear: retrieveBtcStatusV2ByAccount

Returns the status of all BTC withdrawals for an account.

| Method                         | Type                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `retrieveBtcStatusV2ByAccount` | `({ account, certified, }: RetrieveBtcStatusV2ByAccountParams) => Promise<RetrieveBtcStatusV2WithId[]>` |

Parameters:

- `certified`: query or update call
- `account`: an optional account to retrieve the statuses. If not provided, statuses for the caller are retrieved.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L205)

##### :gear: estimateWithdrawalFee

Returns an estimation of the user's fee (in Satoshi) for a retrieve_btc request based on the current status of the Bitcoin network and the fee related to the minter.

| Method                  | Type                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| `estimateWithdrawalFee` | `({ certified, amount, }: EstimateWithdrawalFeeParams) => Promise<EstimateWithdrawalFee>` |

Parameters:

- `params`: The parameters to estimate the fee.
- `params.certified`: query or update call
- `params.amount`: The optional amount for which the fee should be estimated.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L239)

##### :gear: getMinterInfo

Returns internal minter parameters such as the minimal amount to retrieve BTC, minimal number of confirmations or KYT fee.

| Method          | Type                                                  |
| --------------- | ----------------------------------------------------- |
| `getMinterInfo` | `({ certified }: QueryParams) => Promise<MinterInfo>` |

Parameters:

- `params`: The parameters to get the minter info.
- `params.certified`: query or update call

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L253)

##### :gear: getKnownUtxos

Returns UTXOs of the given account known by the minter.

| Method          | Type                                                                          |
| --------------- | ----------------------------------------------------------------------------- |
| `getKnownUtxos` | `({ owner, subaccount, certified, }: GetKnownUtxosParams) => Promise<Utxo[]>` |

Parameters:

- `params`: The parameters for which the known utxos should be resolved.
- `params.owner`: The owner of the account. Note that if not provided, the `caller` would be used by the minter instead.
- `params.subaccount`: An optional subaccount.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/minter.canister.ts#L266)

### :factory: BitcoinCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/bitcoin.canister.ts#L17)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                           |
| -------- | -------------------------------------------------------------- |
| `create` | `(options: CkBTCCanisterOptions<_SERVICE>) => BitcoinCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/bitcoin.canister.ts#L18)

#### Methods

- [getUtxosQuery](#gear-getutxosquery)
- [getBalanceQuery](#gear-getbalancequery)

##### :gear: getUtxosQuery

Given a `get_utxos_request`, which must specify a Bitcoin address and a Bitcoin network (`mainnet`, `testnet` or `regtest`), the function returns all unspent transaction outputs (UTXOs) associated with the provided address in the specified Bitcoin network based on the current view of the Bitcoin blockchain available to the Bitcoin component.

⚠️ Note that this method does not support certified calls because only canisters are allowed to get UTXOs via update calls.

| Method          | Type                                                             |
| --------------- | ---------------------------------------------------------------- |
| `getUtxosQuery` | `({ ...params }: GetUtxosParams) => Promise<get_utxos_response>` |

Parameters:

- `params.network`: Tesnet or mainnet.
- `params.filter`: The optional filter parameter can be used to restrict the set of returned UTXOs, either providing a minimum number of confirmations or a page reference when pagination is used for addresses with many UTXOs.
- `params.address`: A Bitcoin address.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/bitcoin.canister.ts#L42)

##### :gear: getBalanceQuery

Given a `get_balance_request`, which must specify a Bitcoin address and a Bitcoin network (`mainnet`, `testnet` or `regtest`), the function returns the current balance of this address in `Satoshi` (10^8 Satoshi = 1 Bitcoin) in the specified Bitcoin network.

⚠️ Note that this method does not support certified calls because only canisters are allowed to get Bitcoin balance via update calls.

| Method            | Type                                                   |
| ----------------- | ------------------------------------------------------ |
| `getBalanceQuery` | `({ ...params }: GetBalanceParams) => Promise<bigint>` |

Parameters:

- `params.network`: Tesnet or mainnet.
- `params.min_confirmations`: The optional filter parameter can be used to limit the set of considered UTXOs for the calculation of the balance to those with at least the provided number of confirmations in the same manner as for the `bitcoin_get_utxos` call.
- `params.address`: A Bitcoin address.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/ckbtc/src/bitcoin.canister.ts#L64)

<!-- TSDOC_END -->

## Resources

- [Bitcoin integration](https://internetcomputer.org/docs/current/developer-docs/integrations/#bitcoin-integration)
- [ckBTC Minter](https://github.com/dfinity/ic/tree/master/rs/bitcoin/ckbtc/minter/)
