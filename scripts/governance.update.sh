#!/usr/bin/env bash
set -ueo pipefail

IC_DIR="$(realpath "$1")"
IC_SUBDIR=rs/nns/governance/canister/governance.did
IC_COMMIT="$(cd "${IC_DIR}" && git rev-parse HEAD)"

cd "$(dirname "$(realpath "$0")")/.."

{
  echo "// Generated from IC repo commit ${IC_COMMIT} by $(basename "${0}")"
  cat "$IC_DIR/$IC_SUBDIR"
} >candid/governance.did
