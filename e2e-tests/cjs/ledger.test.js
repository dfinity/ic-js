/**
 * @jest-environment jsdom
 */

const nns = require("../../dist"); // in real use cases:  require("@dfinity/nns");
const { AccountIdentifier, LedgerCanister } = nns;

test("Should be able to get a balance", () => {
  jest.setTimeout(30000);
  const ledger = LedgerCanister.create();

  const accountIdentifier = AccountIdentifier.fromHex(
    "268e03eca92149dc91993f843e29aa24b02a55f714b27a3429f40865541b74c5"
  );

  return ledger
    .accountBalance({ accountIdentifier })
    .then((balance) => console.log(`Balance: ${balance.toE8s()}`));
}, 5000000);
