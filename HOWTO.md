# How-To Test Local Changes (e.g. with nns-dapp)

**requirements**: protobuf

## using npm pack

1. Prepare the tar file (from nns-js)
   `npm run protoc && npm run build && npm pack`
2. Install the tar in the target project (nns-dapp)
   - `npm i {nns-js-directory}/nns-js/dfinity-nns-{PACKED_VERSION}.tgz`
