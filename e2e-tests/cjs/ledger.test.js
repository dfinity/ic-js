/**
 * @jest-environment jsdom
 */

const network = process.env.NETWORK || "mainnet";
const config = require("../config").networks[network];

const nns = require("../../dist"); // in real use cases:  require("@dfinity/nns");
const { AccountIdentifier, LedgerCanister } = nns;

test("Should be able to get a balance", () => {
  jest.setTimeout(30000);
  const ledger = LedgerCanister.create();

  let anAccount = config.accounts[0];
  const accountIdentifier = AccountIdentifier.fromHex(anAccount);

  return ledger
    .accountBalance({ accountIdentifier })
    .then((balance) => console.log(`Balance: ${balance.toE8s()}`));
}, 5000000);
