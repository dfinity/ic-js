# Administration

Few useful bullet points to administrate [ic-js](https://github.com/dfinity/ic-js).

# Table of contents

- [Create a new library](#create-a-new-library)
- [Release](#release)

## Create a new library

1. Init a new [workspace](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

```bash
npm init -w ./packages/a
```

2. Setup the new package

Copy `package.json`, `license.md`, `esbuild.mjs`, `jest.config.js` and `tsconfig.json` files as in other libs.

For example, copy the ones from [cmc](https://github.com/dfinity/ic-js/tree/main/packages/cmc) library.

Adapt `package.json` content.

2. Configure did files (if needed)

Add did source files [import-candid](./scripts/import-candid) and [compile-idl-js](./scripts/compile-idl-js).

3. Generate did and js files (if needed)

Run the scripts modified in last steps

4. Implement the library

Implement one feature or provide a `src/index.ts` file in the new lib that contains at least an `export {};`.

5. Add empty test

Add an empty test file `index.spec.ts` to make sure the command will not fail because there are no tests.

```javaScript
import * as lib from "./index";

describe("my-lib", () => {
  it("is implemented", () => {
    expect(lib).toEqual({});
  });
});
```

You need an `import` to avoid considering it a global script file.

6. Docs

- Add new library to [docs](./scripts/docs.js) generator
- Add readme file of the new library in `package.json` script `docs` to format the generated docs with prettier.

7. Add the new library to the [build-next](./scripts/build-next) script to tweak version and make dependencies less restrictive when the "next" version is published.

8. Add to Size workflow

Add new entry in the field `size-limit` of the main [package.json](./package.json).

9. Update CI

Add new library to "nightly" and "publish" CI [workflows](https://github.com/dfinity/ic-js/tree/main/.github/workflows).

10. Build, PR and merge

11. Tag and release to npm

12. Provide a new PR that bump version of all libs to start `next` version

13. Merge and publish `next` to npm

## Release

Steps to release new versions of the libraries.

1. Create a PR bumping versions

- Upgrade `"version"` in all needed packages.
- Update intra-library dependencies.
- Run `npm install` from root directory
- Update Changelog

Example PR: https://github.com/dfinity/ic-js/pull/475

2. Create a new release in Github page.

This will start an action that build and publish the libraries.

3. Create a new PR

To open next version afterward, bump the libraries' version and add a note in [CHANGELOG](./CHANGELOG.md).
