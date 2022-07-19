#!/usr/bin/env bash
# A script for generating the JS of proto files.

# base_types.proto: https://github.com/dfinity/ic/blob/master/rs/types/base_types/proto/ic_base_types/pb/v1/types.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/" \
  --js_out="import_style=commonjs,binary:./packages/nns/" \
  --proto_path="./packages/nns/" \
  ./packages/nns/proto/base_types.proto

# types.proto: https://github.com/dfinity/ic/blob/master/rs/nns/common/proto/ic_nns_common/pb/v1/types.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns/proto/" \
  --proto_path="./packages/nns/proto" \
  ./packages/nns/proto/types.proto

# ledger.proto: TODO

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns/proto/" \
  --proto_path="./packages/nns/proto" \
  ./packages/nns/proto/ledger.proto

# governance.proto: https://github.com/dfinity/ic/blob/master/rs/nns/governance/proto/ic_nns_governance/pb/v1/governance.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns/proto/" \
  --proto_path="./packages/nns/proto" \
  ./packages/nns/proto/governance.proto

# sns_swap.proto: https://github.com/dfinity/ic/blob/master/rs/sns/swap/proto/ic_sns_swap/pb/v1/swap.proto

protoc \
  --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
  --ts_out="./packages/nns/proto/" \
  --js_out="import_style=commonjs,binary:./packages/nns/proto/" \
  --proto_path="./packages/nns/proto" \
  ./packages/nns/proto/sns_swap.proto
