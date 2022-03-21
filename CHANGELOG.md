# 0.3.0 (2022-XX-YY)

### Breaking Changes

- variant return types dropped - i.e. functions now return effective result and throw errors in case of issues
- governance function `getNeurons` to `listNeurons` renamed

### Features

- governance new functions:
  - `getProposal`
  - `stakeNeuron`
  - `registerVote`
  - `increaseDissolveDelay`
  - `getNeuron`
  - `setFollowees`
- ledger `transfer` enhanced with support for subaccount  
- new utils to filter voted neurons and proposals
- export `common` types

### Build

- nns-dapp canister types removed
- nightly build job

### Tests

- add test for protobug files
