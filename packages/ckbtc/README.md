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

`ckbtc-js` implements following features:

<!-- TSDOC_START -->

<!-- TSDOC_END -->
