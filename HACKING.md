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

Build the libraries:

```bash
npm pack --workspaces
```

Because nns-js and sns-js have dependency on util, you better build them all at once.

This will create some tarballs you'll use to link in your application:

```
dfinity-<library>-<version>.tgz
```

For example:

```
dfinity-cmc-0.0.3.tgz
dfinity-nns-0.10.0.tgz
dfinity-sns-0.0.7.tgz
dfinity-utils-0.0.6.tgz
```

### In You App

```bash
# OPTIONAL
# remove node modules
rm -r node_modules
# reinstall modules
npm ci

# remove the library you want to test
npm rm @dfinity/the-library-you-want-to-test
# and dependencies
npm rm @dfinity/the-library-dependencies
# install the dependency library pointing to the tarball
npm i /User/path/to/ic-js/dfinity-<library-dependecy>-<version>.tgz
# install the library pointing to the tarball
npm i /User/path/to/ic-js/dfinity-<library>-<version>.tgz
```

It's important to install first the dependencies and then the library you want to test.

**Note: Don't commit the changes in package.json nor in package-lock.json**

### Example flow

For example, to test changes in sns-js the flow would be the following:

In ic-js:

```bash
npm pack --workspaces
```

In the app directory:

```bash
# Remove libraries
npm rm @dfinity/sns
npm rm @dfinity/utils

# Install libraries
npm i /User/path/to/ic-js/dfinity-utils-0.0.6.tgz
npm i /User/path/to/ic-js/dfinity-sns-0.0.7.tgz
```

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
npm rm @dfinity/principal @dfinity/agent @dfinity/candid
npm i @dfinity/principal@latest @dfinity/agent@latest @dfinity/candid@latest --save-peer
```
