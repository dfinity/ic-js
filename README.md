# ic-js

A collection of library for interfacing with the Internet Computer

The libraries are still in active development, and new features will incrementally be available.

## Libraries

- [nns](/packages/nns): interfacing with the **ledger** and **governance** canisters of the IC
- [sns](/packages/sns): interacting with a Service Nervous System (SNS) project
- cmc: querying the Cmc canister (_coming soon_)
- [utils](/packages/utils): a collection of utilities and constants for NNS/SNS projects.

## Installation

Install [nns](/packages/nns) and/or [sns](/packages/sns) in your project from [npm](https://www.npmjs.com):

```bash
npm i @dfinity/nns
npm i @dfinity/sns
```

You may be using both [nns](/packages/nns) and [sns](/packages/sns) in your project - as we do in [NNS-dapp](https://github.com/dfinity/nns-dapp/).
That is s why, to help tree-shaking and avoid duplication of code, the libraries of this project are referencing [agent-js](https://github.com/dfinity/agent-js) and [utils](/packages/utils) as peer dependencies.

Therefore, be sure that the needed `agent-js` and [utils](/packages/utils) dependencies are available in your project or install these as following:

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Links

Here are some useful links:

- See the [HACKING](/HACKING.md) document for some information about local development
