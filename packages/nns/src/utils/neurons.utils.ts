import { Vote } from "../enums/governance.enums";
import type { NeuronId } from "../types/common";
import type {
  Ballot,
  NeuronInfo,
  ProposalInfo,
} from "../types/governance_converters";

const voteForProposal = ({
  ballots,
  neuronId,
}: {
  ballots: Ballot[];
  neuronId: NeuronId | undefined;
}): Vote | undefined => {
  if (!neuronId) {
    return undefined;
  }

  const ballot: Ballot | undefined = ballots.find(
    ({ neuronId: id }) => id === neuronId,
  );
  return ballot?.vote;
};

/**
 * Filter the neurons that are ineligible to vote to a proposal.
 *
 * This feature needs the ballots of the proposal to contains accurate data.
 * If the proposal has settled, as the ballots of the proposal are emptied for archive purpose, the function might return a list of ineligible neurons that are actually neurons that have not voted but would have been eligible.
 *
 * Long story short, check the status of the proposal before using this function.
 *
 * @param {neurons; proposal;} params
 * @param params.neurons The neurons to filter.
 * @param params.proposal The proposal to match against the selected neurons.
 */
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
        ({ neuronId: ballotNeuronId }: Ballot) => ballotNeuronId === neuronId,
      ) === undefined;

    return createdSinceProposal || dissolveTooShort;
  });
};

/**
 * Filter the neurons that can vote for a proposal - i.e. the neurons that have not voted yet and are eligible
 *
 * @param {neurons; proposal;} params
 * @param params.neurons The neurons to filter.
 * @param params.proposal The proposal to match against the selected neurons.
 */
export const votableNeurons = ({
  neurons,
  proposal,
}: {
  neurons: NeuronInfo[];
  proposal: ProposalInfo;
}): NeuronInfo[] => {
  const { ballots } = proposal;

  return neurons.filter(
    ({ neuronId }: NeuronInfo) =>
      voteForProposal({ ballots, neuronId }) === Vote.Unspecified &&
      ineligibleNeurons({ neurons, proposal }).find(
        ({ neuronId: ineligibleNeuronId }: NeuronInfo) =>
          ineligibleNeuronId === neuronId,
      ) === undefined,
  );
};

/**
 * Filter the neurons that have voted for a proposal.
 *
 * @param {neurons; proposal;} params
 * @param params.neurons The neurons to filter.
 * @param params.proposal The proposal for which some neurons might have already voted.
 */
export const votedNeurons = ({
  neurons,
  proposal: { ballots },
}: {
  neurons: NeuronInfo[];
  proposal: ProposalInfo;
}): NeuronInfo[] =>
  neurons.filter(
    ({ neuronId }: NeuronInfo) =>
      voteForProposal({ ballots, neuronId }) !== Vote.Unspecified,
  );
