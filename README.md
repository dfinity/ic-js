# nns-js

A library for interfacing with the ledger and governance canisters of the Internet Computer's Network Nervous System.

This library is still in active development, and new features will incrementally be available.

## Example Usage

```ts
import { AccountIdentifier, LedgerCanister } from "@dfinity/nns";

// If not running in browser, add polyfill of `window.fetch` for agent-js to work.
import fetch from "cross-fetch";
global.fetch = fetch;

async function main() {
  const ledger = LedgerCanister.create();

  const accountIdentifier = AccountIdentifier.fromHex(
    "efa01544f509c56dd85449edf2381244a48fad1ede5183836229c00ab00d52df"
  );

  const balance = await ledger.accountBalance({ accountIdentifier });

  console.log(`Balance: ${balance.toE8s()}`);
}

main();
```

# [How-To](/HOWTO.md)
