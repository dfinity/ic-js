# ledger-js

A library for interfacing with an [ICRC-1 ledger](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icrc1).

[![npm version](https://img.shields.io/npm/v/@dfinity/ledger.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/ledger) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

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
import { LedgerCanister } from "@dfinity/ledger";
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


<!-- TSDOC_END -->
