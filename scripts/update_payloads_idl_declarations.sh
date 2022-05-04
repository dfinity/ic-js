#!/usr/bin/env bash

JS_FILE="candid/payloads.idl.js"
TMP_FILE="candid/payloads.idl.tmp"
D_TS_FILE="candid/payloads.idl.d.ts"

cat $JS_FILE | grep "^export const " | sed -E "s/(export const .*) =.*/\1: IDL.RecordClass;/" > $TMP_FILE
echo "import type { IDL } from \"@dfinity/candid\";" > $D_TS_FILE
echo "" >> $D_TS_FILE
cat $TMP_FILE >> $D_TS_FILE

rm $TMP_FILE