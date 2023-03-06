# Hacking

This document list a couple of useful information to develop locally libraries of this repo.

## Prerequisite

Make sure you have a recent version of [Node.js installed](https://nodejs.org/en/) (LTS recommended).

You will also need `npm` v7+ as this repo is configured with [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Build and test

From root directory, to build or test all packages:

```bash
npm run build/test --workspaces
```

To build or test a particular package - e.g. `sns`:

```bash
npm run build/test --workspace=packages/sns
```

## nns-js: How-to test local changes with nns-dapp

### In this directory

Build the libraries you want to test:

```bash
npm run build --workspace=packages/the-library-you-want-to-test
```

**Note: Try building all the workspaces at once if you get any problem.**

### In NNS-Dapp

```bash
# navigate to frontend directory
cd frontend
# remove node modules
rm -r node_modules
# reinstall modules
npm ci
# remove the library you want to test
npm rm @dfinity/the-library-you-want-to-test
# install the library pointing to local ic-js
npm i /User/path/to/packages/the-library-you-want-to-test
```

**Note: Don't commit the changes in package.json nor in package-lock.json**

## Candid files

The `did` files, related `.js` and `.d.ts` are generated automatically.

1. [import-candid](./scripts/import-candid) generates the `.did` files
2. [compile-idl-js](./scripts/compile-idl-js) extract and write the related `.js` and `.d.ts`

The files of the [candid](./candid) folders are shared across packages. Their architecture is the following:

- `something.did`: the candid definition
- `something.d.ts`: the typescript definition for the types and service of the did files (1)
- `something.idl.js`: the factory js file (1)
- `something.idl.d.ts`: the typescript definition of the above factory file
- `something.certified.idl.js`: the factory js file for the certified calls (1)
- `something.certified.idl.d.ts`: the typescript definition of the above factory file

(1) auto-generated with [didc](https://github.com/dfinity/candid)

# Update peer dependencies

Saving peer dependencies in `package-lock.json` needs npm >= v7.

```bash
npm rm @dfinity/agent @dfinity/candid @dfinity/principal --workspaces
npm i @dfinity/agent @dfinity/candid @dfinity/principal --save-peer --workspaces
```
