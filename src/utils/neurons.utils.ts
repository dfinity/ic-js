import type {
  Ballot,
  BallotInfo,
  NeuronInfo,
  ProposalId,
  ProposalInfo,
  Vote,
} from "../types/governance_converters";

const voteForProposal = ({
  recentBallots,
  proposalId,
}: {
  recentBallots: BallotInfo[];
  proposalId: ProposalId | undefined;
}): Vote | undefined => {
  const ballot: BallotInfo | undefined = recentBallots.find(
    ({ proposalId: id }: BallotInfo) =>
      proposalId !== undefined && id === proposalId
  );
  return ballot?.vote;
};

export const ineligibleNeurons = ({
  neurons,
  proposal,
}: {
  neurons: NeuronInfo[];
  proposal: ProposalInfo;
}): NeuronInfo[] => {
  const { ballots, proposalTimestampSeconds } = proposal;

  return neurons.filter(({ createdTimestampSeconds, neuronId }: NeuronInfo) => {
    const createdSinceProposal: boolean =
      createdTimestampSeconds > proposalTimestampSeconds;

    const dissolveTooShort: boolean =
      ballots.find(
        ({ neuronId: ballotNeuronId }: Ballot) => ballotNeuronId === neuronId
      ) === undefined;

    return createdSinceProposal || dissolveTooShort;
  });
};

export const notVotedNeurons = ({
  neurons,
  proposal,
}: {
  neurons: NeuronInfo[];
  proposal: ProposalInfo;
}): NeuronInfo[] => {
  const { id: proposalId } = proposal;

  return neurons.filter(
    ({ recentBallots, neuronId }: NeuronInfo) =>
      voteForProposal({ recentBallots, proposalId }) === undefined &&
      ineligibleNeurons({ neurons, proposal }).find(
        ({ neuronId: ineligibleNeuronId }: NeuronInfo) =>
          ineligibleNeuronId === neuronId
      ) === undefined
  );
};

export const votedNeurons = ({
  neurons,
  proposal,
}: {
  neurons: NeuronInfo[];
  proposal: ProposalInfo;
}): NeuronInfo[] => {
  const { id: proposalId } = proposal;

  return neurons.filter(
    ({ recentBallots }: NeuronInfo) =>
      voteForProposal({ recentBallots, proposalId }) !== undefined
  );
};
