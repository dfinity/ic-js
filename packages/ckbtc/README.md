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

### :factory: CkBTCMinterCanister

#### Constructors

`public`

#### Methods

- [create](#gear-create)
- [getBtcAddress](#gear-getbtcaddress)

##### :gear: create

| Method   | Type                                                                     |
| -------- | ------------------------------------------------------------------------ |
| `create` | `(options: CkBTCMinterCanisterOptions<_SERVICE>) => CkBTCMinterCanister` |

##### :gear: getBtcAddress

Returns a BTC address for a given account.

Note: an update call is required by the Minter canister.

| Method          | Type                                               |
| --------------- | -------------------------------------------------- |
| `getBtcAddress` | `(params: GetBTCAddressParams) => Promise<string>` |

Parameters:

- `params`: The parameters for which a BTC address should be resolved.
- `params.owner`: The owner for which the BTC address should be generated. If not provided, the `caller` will be use instead.
- `params.subaccount`: An optional subaccount to compute the address.

<!-- TSDOC_END -->
