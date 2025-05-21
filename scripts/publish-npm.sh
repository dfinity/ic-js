#!/usr/bin/env bash

# Reference: NPM RRFC --if-needed https://github.com/npm/rfcs/issues/466

function publish_npm() {
  local lib=$1

  LOCAL_SHASUM=$(npm --silent pack -w packages/"$lib" --json | jq '.[] | .shasum' | sed -r 's/^"|"$//g')

  NPM_TARBALL=$(npm show @dfinity/"$lib" dist.tarball)
  NPM_SHASUM=$(curl -s "$NPM_TARBALL" 2>&1 | shasum | cut -f1 -d' ')

  if [ "$LOCAL_SHASUM" == "$NPM_SHASUM" ]; then
    echo "No changes in @dfinity/$lib need to be published to NPM."
  else
    npm publish --workspace=packages/"$lib" --provenance --access public
  fi
}

# Tips: libs use by other libs first
LIBS=utils,zod-schemas,ledger-icrc,ledger-icp,nns-proto,nns,sns,cmc,ckbtc,cketh,ic-management

for lib in $(echo $LIBS | sed "s/,/ /g"); do
  publish_npm "$lib"
done
