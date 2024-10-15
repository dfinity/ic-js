# cmc-js

A library for interfacing with the cycle minting canister.

[![npm version](https://img.shields.io/npm/v/@dfinity/cmc.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/cmc) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can use `cmc-js` by installing it in your project.

```bash
npm i @dfinity/cmc
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

The features are available through the class `CMCCanister`. It has to be instantiated with the canister ID of the cycles minting canister. On `mainnet`, its ID is `rkp4c-7iaaa-aaaaa-aaaca-cai`.

e.g. querying the current Icp to cycles conversion rate.

```ts
import { CMCCanister } from "@dfinity/cmc";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { getIcpToCyclesConversionRate } = CMCCanister.create({
  agent,
  canisterId: CYCLES_MINTING_CANISTER_ID,
});

const rate = await getIcpToCyclesConversionRate();
```

## Features

`cmc-js` implements following features:

<!-- TSDOC_START -->

### :factory: CMCCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cmc/src/cmc.canister.ts#L14)

#### Methods

- [create](#gear-create)
- [getIcpToCyclesConversionRate](#gear-geticptocyclesconversionrate)
- [notifyCreateCanister](#gear-notifycreatecanister)
- [notifyTopUp](#gear-notifytopup)
- [getDefaultSubnets](#gear-getdefaultsubnets)

##### :gear: create

| Method   | Type                                           |
| -------- | ---------------------------------------------- |
| `create` | `(options: CMCCanisterOptions) => CMCCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cmc/src/cmc.canister.ts#L15)

##### :gear: getIcpToCyclesConversionRate

Returns conversion rate of ICP to Cycles

| Method                         | Type                    |
| ------------------------------ | ----------------------- |
| `getIcpToCyclesConversionRate` | `() => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cmc/src/cmc.canister.ts#L31)

##### :gear: notifyCreateCanister

Notifies Cycles Minting Canister of the creation of a new canister.
It returns the new canister principal.

| Method                 | Type                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `notifyCreateCanister` | `(request: NotifyCreateCanisterArg) => Promise<Principal>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cmc/src/cmc.canister.ts#L48)

##### :gear: notifyTopUp

Notifies Cycles Minting Canister of new cycles being added to canister.
It returns the new Cycles of the canister.

| Method        | Type                                           |
| ------------- | ---------------------------------------------- |
| `notifyTopUp` | `(request: NotifyTopUpArg) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cmc/src/cmc.canister.ts#L76)

##### :gear: getDefaultSubnets

This function calls the `get_default_subnets` method of the CMC canister, which returns a list of
default subnets as `Principal` objects. It can be called as query or update.

| Method              | Type                                                    |
| ------------------- | ------------------------------------------------------- |
| `getDefaultSubnets` | `({ certified }?: QueryParams) => Promise<Principal[]>` |

Parameters:

- `params`: - The query parameters for the call.
- `params.certified`: - Determines whether the response should be certified
  (default: non-certified if not specified).

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/cmc/src/cmc.canister.ts#L101)

<!-- TSDOC_END -->
