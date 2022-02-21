/**
 * @jest-environment jsdom
 */

const { testConfig, testAgent } = require("./test_agent");
const nns = require("../../dist"); // in real use cases:  require("@dfinity/nns");
const { AccountIdentifier, GovernanceCanister } = nns;

test("Should be able to list known neurons", () =>
  testAgent().then((agent) => {
    let gov = GovernanceCanister.create({ agent });
    return gov.listKnownNeurons().then(console.log);
  })
, 300000);

test("Should be able to list proposals", () =>
  testAgent()
    .then((agent) => GovernanceCanister.create({ agent }))
    .then((gov) =>
      gov
        .listProposals({
          request: {
            limit: 5,
            includeRewardStatus: [],
            excludeTopic: [],
            includeStatus: [],
          },
        })
        .then((result) => {
          console.log(result);
          expect(result.proposals.length).toBe(5);
        })
    )
, 30000);
