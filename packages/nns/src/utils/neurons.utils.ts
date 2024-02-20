import type { Principal } from "@dfinity/principal";
import {
  arrayOfNumberToUint8Array,
  asciiStringToByteArray,
} from "@dfinity/utils";
import { sha256 } from "@noble/hashes/sha256";
import type { Vote } from "../enums/governance.enums";
import type {
  Ballot,
  BallotInfo,
  NeuronInfo,
  ProposalId,
  ProposalInfo,
} from "../types/governance_converters";

const voteForProposal = ({
  recentBallots,
  proposalId,
}: {
  recentBallots: BallotInfo[];
  proposalId: ProposalId | undefined;
}): Vote | undefined => {
  if (!proposalId) {
    return undefined;
  }

  const ballot: BallotInfo | undefined = recentBallots.find(
    ({ proposalId: id }: BallotInfo) => id === proposalId,
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
  const { id: proposalId } = proposal;

  return neurons.filter(
    ({ recentBallots, neuronId }: NeuronInfo) =>
      voteForProposal({ recentBallots, proposalId }) === undefined &&
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
  proposal: { id: proposalId },
}: {
  neurons: NeuronInfo[];
  proposal: ProposalInfo;
}): NeuronInfo[] =>
  neurons.filter(
    ({ recentBallots }: NeuronInfo) =>
      voteForProposal({ recentBallots, proposalId }) !== undefined,
  );

export const getNeuronStakeSubAccountBytes = (
  nonce: Uint8Array,
  principal: Principal,
): Uint8Array => {
  const padding = asciiStringToByteArray("neuron-stake");
  const shaObj = sha256.create();
  shaObj.update(
    arrayOfNumberToUint8Array([
      0x0c,
      ...padding,
      ...principal.toUint8Array(),
      ...nonce,
    ]),
  );
  return shaObj.digest();
};
