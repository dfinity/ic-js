#!/usr/bin/env bash
# A script for generating the JS of proto files.
protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./" \
  --js_out="import_style=commonjs,binary:./" \
  --proto_path="./packages/nns-js/" \
  ./packages/nns-js/proto/base_types.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./proto" \
  --js_out="import_style=commonjs,binary:./proto" \
  --proto_path="./packages/nns-js/proto" \
  ./packages/nns-js/proto/ledger.proto
