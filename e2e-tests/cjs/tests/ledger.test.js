const { testConfig, testAgent } = require("../test_agent");
const { AccountIdentifier, ICP, LedgerCanister } = require("@dfinity/nns");

test("Should be able to get a balance", () => {
  jest.setTimeout(300000);
  return testAgent()
    .then((agent) => {
      return LedgerCanister.create({ agent });
    })
    .then((ledger) => {
      let anAccount = testConfig.accounts[0];
      const accountIdentifier = AccountIdentifier.fromHex(anAccount.principal);

      return ledger.accountBalance({ accountIdentifier }).then((balance) => {
        expect(balance).toBeInstanceOf(ICP);
      });
    });
}, 5000000);
