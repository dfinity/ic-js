const { testConfig, testAgent } = require("../test_agent");
const { AccountIdentifier, GovernanceCanister } = require("@dfinity/nns");

test(
  "Should be able to list known neurons",
  () =>
    testAgent().then((agent) => {
      let gov = GovernanceCanister.create({ agent });
      return gov.listKnownNeurons().then((neurons) => {
        expect(neurons).toBeInstanceOf(Array);
      });
    }),
  300000
);

test(
  "Should be able to list proposals",
  () =>
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
            expect(result).toBeInstanceOf(Object);
            expect(result.proposals).toBeInstanceOf(Array);
            expect(result.proposals.length).toBeGreaterThan(0);
          })
      ),
  30000
);
