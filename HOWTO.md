# How-To Test Local Changes (e.g. with nns-dapp)

**requirements**: protobuf

## using npm pack

1. Prepare the tar file (from nns)
   `npm run protoc && npm run build --workspace=packages/nns && npm pack --workspace=packages/nns`
2. Install the tar in the target project (nns-dapp)
   - `npm i {ic-js-directory}/dfinity-nns-{PACKED_VERSION}.tgz`
