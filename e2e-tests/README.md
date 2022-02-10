# End to end tests

These tests use the API as a library user would, invoking the built cjs or esm code against a network.

# Usage
Run this in the root of the repo:
```
npm test e2e
```

# Plan:
- Basic tests of the existing query methods against mainnet, using the cjs bindings as these are the default.
- The same tests but run against any network, so that these can be used against a testnet, localhost or a network in CI.
- Extend the range of methods tested and the depth of testing.
