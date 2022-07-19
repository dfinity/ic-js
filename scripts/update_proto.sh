#!/usr/bin/env bash
# A script for generating the JS of proto files.
protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/" \
  --js_out="import_style=commonjs,binary:./packages/nns/" \
  --proto_path="./packages/nns/" \
  ./packages/nns/proto/base_types.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns/proto/" \
  --proto_path="./packages/nns/proto" \
  ./packages/nns/proto/ledger.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns/proto/" \
  --proto_path="./packages/nns/proto" \
  ./packages/nns/proto/governance.proto
