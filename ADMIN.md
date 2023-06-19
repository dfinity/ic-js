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

describe("rosetta-client", () => {
  it("is implemented", () => {
    expect(lib).toEqual({});
  });
});
```

You need an `import` to avoid considering it a global script file.

6. Docs

- Add new library to [docs](./scripts/docs.js) generator
- Add readme file of the new library in `package.json` script `docs` to format the generated docs with prettier.

7. Add to Size workflow

Add new entry in the field `size-limit` of the main [package.json](./package.json).

8. Update CI

Add new library to "nightly" and "publish" CI [workflows](https://github.com/dfinity/ic-js/tree/main/.github/workflows).

9. Build, PR and merge

10. Tag and release to npm

11. Provide a new PR that bump version of all libs to start `next` version

12. Merge and publish `next` to npm

## Release

To release a version to npm, create a release in GitHub. This will start an action that build and publish the libraries.

To open next version afterward, bump the libraries' version and add a note in [CHANGELOG](./CHANGELOG.md).
