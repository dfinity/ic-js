# Administration

Few useful bullet points to administrate [ic-js](https://github.com/dfinity/ic-js).

# Table of contents

- [Create a new library](#create-a-new-library)

## Create a new library

1. Init a new [workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

```bash
npm init -w ./packages/a
```

2. Setup the new package

Copy `package.json`, `license.md`, `esbuild.mjs` etc. files as in other libs. As for example from the [cmc](https://github.com/dfinity/ic-js/tree/main/packages/cmc) library.

Adapt `package.json` content.

2. Configure did files

Add did source files [import-candid](./scripts/import-candid) and [compile-idl-js](./scripts/compile-idl-js).

3. Generate did and js files

Run the scripts modified in last steps

4. Implement

Implement a feature or at least provide a `src/index.ts` file in the new lib that contains at least an `export {};`.

5. Docs

Add new library to [docs](./scripts/docs.js) generator and in `package.json` script `docs` to format the generated docs with prettier at the ends of the process.

6. Update CI

Add new library to various CI [workflows](https://github.com/dfinity/ic-js/tree/main/.github/workflows).

5. Build, PR and merge

6. Tags and release to npm

7. Provide a new PR that bump version of all libs to start `next` version

8. Merge and publish `next` to npm
