import { Vote } from "../enums/governance.enums";
import { NeuronInfo, ProposalInfo } from "../types/governance_converters";
import {
  ineligibleNeurons,
  votableNeurons,
  votedNeurons,
} from "./neurons.utils";

describe("neurons-utils", () => {
  const proposalTimestampSeconds = BigInt(new Date().getTime());

  const proposalId = BigInt(3);
  const proposalNeuronId = BigInt(1);

  const proposal: ProposalInfo = {
    id: proposalId,
    proposalTimestampSeconds,
    ballots: [
      {
        neuronId: proposalNeuronId,
        vote: Vote.Yes,
        votingPower: BigInt(1),
      },
    ],
  } as unknown as ProposalInfo;

  const ineligibleNeuronsDate: NeuronInfo[] = [
    {
      createdTimestampSeconds: proposalTimestampSeconds + BigInt(1),
      neuronId: proposalNeuronId,
      recentBallots: [],
    } as unknown as NeuronInfo,
  ];

  const ineligibleNeuronsTooShort: NeuronInfo[] = [
    {
      createdTimestampSeconds: proposalTimestampSeconds - BigInt(1),
      neuronId: BigInt(2),
      recentBallots: [],
    } as unknown as NeuronInfo,
  ];

  const eligibleNeuronsDate: NeuronInfo[] = [
    {
      createdTimestampSeconds: proposalTimestampSeconds - BigInt(1),
      neuronId: proposalNeuronId,
      recentBallots: [],
      votingPower: BigInt(1),
    } as unknown as NeuronInfo,
    {
      createdTimestampSeconds: proposalTimestampSeconds - BigInt(2),
      neuronId: proposalNeuronId + 1n,
      recentBallots: [],
      votingPower: BigInt(1),
    } as unknown as NeuronInfo,
    {
      createdTimestampSeconds: proposalTimestampSeconds - BigInt(3),
      neuronId: proposalNeuronId + 2n,
      recentBallots: [],
      votingPower: BigInt(1),
    } as unknown as NeuronInfo,
  ];

  it("should has an ineligible neuron because created after proposal", () => {
    const ineligible = ineligibleNeurons({
      proposal,
      neurons: ineligibleNeuronsDate,
    });
    expect(ineligible.length).toEqual(1);
  });

  it("should has an ineligible neuron because dissolve too short", () => {
    const ineligible = ineligibleNeurons({
      proposal,
      neurons: ineligibleNeuronsTooShort,
    });
    expect(ineligible.length).toEqual(1);
  });

  it("should has not ineligible neuron because empty", () => {
    const ineligible = ineligibleNeurons({ proposal, neurons: [] });
    expect(ineligible.length).toEqual(0);
  });

  it("should not have votable neurons because ineligible", () => {
    let votable = votableNeurons({
      proposal,
      neurons: ineligibleNeuronsDate,
    });
    expect(votable.length).toEqual(0);

    votable = votableNeurons({
      proposal,
      neurons: ineligibleNeuronsTooShort,
    });
    expect(votable.length).toEqual(0);
  });

  it("should not have votable neurons because already voted", () => {
    const votable = votableNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [
            {
              proposalId,
              vote: Vote.No,
            },
          ],
        },
      ],
    });
    expect(votable.length).toEqual(0);
  });

  it("should have votable neurons because not yet voted", () => {
    const votable = votableNeurons({
      proposal: {
        ...proposal,
        ballots: [
          {
            neuronId: eligibleNeuronsDate[0].neuronId,
            vote: Vote.Unspecified,
            votingPower: BigInt(1),
          },
        ],
      },
      neurons: [
        {
          ...eligibleNeuronsDate[0],
        },
      ],
    });
    expect(votable.length).toEqual(1);
  });

  it("should have votable neurons because never voted", () => {
    const votable = votableNeurons({
      proposal: {
        ...proposal,
        ballots: [
          {
            neuronId: eligibleNeuronsDate[0].neuronId,
            vote: Vote.Unspecified,
            votingPower: BigInt(1),
          },
        ],
      },
      neurons: [
        {
          ...eligibleNeuronsDate[0],
        },
      ],
    });
    expect(votable.length).toEqual(1);
  });

  it("should have votable neurons regardless of voting power", () => {
    const votable = votableNeurons({
      proposal: {
        ...proposal,
        ballots: [
          {
            neuronId: eligibleNeuronsDate[0].neuronId,
            vote: Vote.Unspecified,
            votingPower: BigInt(1),
          },
          {
            neuronId: eligibleNeuronsDate[1].neuronId,
            vote: Vote.Unspecified,
            votingPower: BigInt(1),
          },
          {
            neuronId: eligibleNeuronsDate[2].neuronId,
            vote: Vote.Unspecified,
            votingPower: BigInt(1),
          },
        ],
      },
      neurons: eligibleNeuronsDate,
    });
    expect(votable.length).toEqual(3);
  });

  it("should not have voted neurons because votable", () => {
    const voted = votedNeurons({
      proposal: {
        ...proposal,
        ballots: [
          {
            neuronId: eligibleNeuronsDate[0].neuronId,
            vote: Vote.Unspecified,
            votingPower: BigInt(1),
          },
        ],
      },
      neurons: [
        {
          ...eligibleNeuronsDate[0],
        },
      ],
    });
    expect(voted.length).toEqual(0);
  });

  it("should not have voted neurons because never voted", () => {
    const voted = votedNeurons({
      proposal: {
        ...proposal,
        ballots: [
          {
            neuronId: eligibleNeuronsDate[0].neuronId,
            vote: Vote.Unspecified,
            votingPower: BigInt(1),
          },
        ],
      },
      neurons: [
        {
          ...eligibleNeuronsDate[0],
        },
      ],
    });
    expect(voted.length).toEqual(0);
  });

  it("should have voted neurons because has voted", () => {
    const voted = votedNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [
            {
              proposalId,
              vote: Vote.No,
            },
          ],
        },
      ],
    });
    expect(voted.length).toEqual(1);
  });
});
