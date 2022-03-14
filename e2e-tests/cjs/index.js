const { AccountIdentifier, LedgerCanister } = require("@dfinity/nns");
const { testAgent } = require("./test_agent");

/**
 * Example of the @dfinity/nns library in use.
 */
async function main() {
  const agent = await testAgent();
  const ledger = LedgerCanister.create(agent);

  const accountIdentifier = AccountIdentifier.fromHex(
    "efa01544f509c56dd85449edf2381244a48fad1ede5183836229c00ab00d52df"
  );

  const balance = await ledger.accountBalance({ accountIdentifier });

  console.log(`Balance: ${balance.toE8s()}`);
}

main();
