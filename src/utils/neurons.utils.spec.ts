import { NeuronInfo, ProposalInfo, Vote } from "../types/governance_converters";
import {
  ineligibleNeurons,
  notVotedNeurons,
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
        vote: Vote.YES,
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

  it("should not have not voted neurons because ineligible", () => {
    let notVoted = notVotedNeurons({
      proposal,
      neurons: ineligibleNeuronsDate,
    });
    expect(notVoted.length).toEqual(0);

    notVoted = notVotedNeurons({
      proposal,
      neurons: ineligibleNeuronsTooShort,
    });
    expect(notVoted.length).toEqual(0);
  });

  it("should not have not voted neurons because already voted", () => {
    const notVoted = notVotedNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [
            {
              proposalId,
              vote: Vote.NO,
            },
          ],
        },
      ],
    });
    expect(notVoted.length).toEqual(0);
  });

  it("should have not voted neurons because not yet voted", () => {
    const notVoted = notVotedNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [
            {
              proposalId: BigInt(4),
              vote: Vote.NO,
            },
          ],
        },
      ],
    });
    expect(notVoted.length).toEqual(1);
  });

  it("should have not voted neurons because never voted", () => {
    const notVoted = notVotedNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [],
        },
      ],
    });
    expect(notVoted.length).toEqual(1);
  });

  it("should not have voted neurons because not voted", () => {
    const voted = votedNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [
            {
              proposalId: BigInt(4),
              vote: Vote.NO,
            },
          ],
        },
      ],
    });
    expect(voted.length).toEqual(0);
  });

  it("should not have voted neurons because never voted", () => {
    const voted = votedNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [],
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
              vote: Vote.NO,
            },
          ],
        },
      ],
    });
    expect(voted.length).toEqual(1);
  });

  it("should have votable neurons only with voting power", () => {
    const votable = votableNeurons({
      proposal,
      neurons: [
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [],
          votingPower: BigInt(0),
        },
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [],
          votingPower: BigInt(1),
        },
        {
          ...eligibleNeuronsDate[0],
          recentBallots: [],
          votingPower: BigInt(0),
        },
      ],
    });
    expect(votable.length).toEqual(1);
    expect(votable[0].votingPower).toEqual(BigInt(1));
  });
});
