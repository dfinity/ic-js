# How-To Update `payloads.did` Manually

1. Check [ic/rs/registry/canister/canister/registry.did](https://github.com/dfinity/ic/blob/master/rs/registry/canister/canister/registry.did) latest changes
2. Update `candid/payloads.did` (payloads.did consists of registry.did with a couple of exceptions marked with `// Exceptions` - in the beginning of the file and in `service: {...` section)
   1. Copy paste everything from [registry.did](https://github.com/dfinity/ic/blob/master/rs/registry/canister/canister/registry.did)
   2. Restore `// Exceptions` blocks
   3. Update commit hash in the comments
3. `npm run did`
   1. Remove `payloads.certified.idl.js` (not in use)
4. refactor `candid/payloads.idl.js` to preserve the structure
   1. add export const …
   2. import IDL …
   3. remove — return IDL.Service({…
5. format `candid/payloads.idl.js`
6. run `./scripts/update_payloads_idl_declarations.sh` to update `candid/payloads.idl.d.ts` with new types
7. Compare and update `src/canisters/governance/payloads.ts` (if new nnsFunctionNames added. [nnsFunctions index source](https://github.com/dfinity/ic/blob/master/rs/nns/governance/proto/ic_nns_governance/pb/v1/governance.proto#L349))
   1. `const getNnsFunctionName`
   2. `const convertNnsFunctionPayload`
8. Test it locally within nns-dapp (see How-To Test Local Changes)

# How-To Test Local Changes (e.g. with nns-dapp)

**requirements**: protobuf

## using npm pack

1. Prepare the tar file (from nns-js)
   1. `npm run protoc`
   2. `npm run build`
   3. `npm pack`
2. Install the tar in the target project (nns-dapp)
   - `npm i {nns-js-directory}/nns-js/dfinity-nns-{PACKED_VERSION}.tgz`
