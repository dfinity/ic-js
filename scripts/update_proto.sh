#!/usr/bin/env bash
# A script for generating the JS of proto files.
protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns-proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns-proto/" \
  --proto_path="./packages/nns-proto/" \
  ./packages/nns-proto/proto/base_types.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns-proto/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns-proto/proto/" \
  --proto_path="./packages/nns-proto/proto" \
  ./packages/nns-proto/proto/nervous_system.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns-proto/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns-proto/proto/" \
  --proto_path="./packages/nns-proto/proto" \
  ./packages/nns-proto/proto/nns_common.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns-proto/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns-proto/proto/" \
  --proto_path="./packages/nns-proto/proto" \
  ./packages/nns-proto/proto/ledger.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns-proto/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns-proto/proto/" \
  --proto_path="./packages/nns-proto/proto" \
  ./packages/nns-proto/proto/governance.proto
