# nns-js

A library for interfacing with the Internet Computer's Network Nervous System.

[![npm version](https://img.shields.io/npm/v/@dfinity/nns.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/nns) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can use `nns-js` by installing it in your project.

```bash
npm i @dfinity/nns
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

Most features are provided through the use of classes. For example, querying the list of neurons controlled by the caller with the `governance` canister:

```ts
import { GovernanceCanister } from "@dfinity/nns";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: HOST,
});

const { listNeurons } = GovernanceCanister.create({
  agent,
  canisterId: MY_GOVERNANCE_CANISTER_ID,
});

const myNeurons = await listNeurons({ certified: false });
```

To execute this on a local environment, you will need to fetch the root key when initializing the agent. Additionally, you might need to adapt the port. The following snippet also demonstrates how you can inline a canister ID as well.

```typescript
import { GovernanceCanister } from "@dfinity/nns";
import { Principal } from "@dfinity/principal";
import { createAgent } from "@dfinity/utils";

const agent = await createAgent({
  identity,
  host: "http://localhost:8000",
  fetchRootKey: true,
});

const { listNeurons } = GovernanceCanister.create({
  agent,
  canisterId: Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai"),
});

const myNeurons = await listNeurons({ certified: false });
```

## Features

`nns-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [ineligibleNeurons](#gear-ineligibleneurons)
- [votableNeurons](#gear-votableneurons)
- [votedNeurons](#gear-votedneurons)
- [memoToNeuronSubaccount](#gear-memotoneuronsubaccount)
- [memoToNeuronAccountIdentifier](#gear-memotoneuronaccountidentifier)

#### :gear: ineligibleNeurons

Filter the neurons that are ineligible to vote to a proposal.

This feature needs the ballots of the proposal to contains accurate data.
If the proposal has settled, as the ballots of the proposal are emptied for archive purpose, the function might return a list of ineligible neurons that are actually neurons that have not voted but would have been eligible.

Long story short, check the status of the proposal before using this function.

| Function            | Type                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `ineligibleNeurons` | `({ neurons, proposal, }: { neurons: NeuronInfo[]; proposal: ProposalInfo; }) => NeuronInfo[]` |

Parameters:

- `params.neurons`: The neurons to filter.
- `params.proposal`: The proposal to match against the selected neurons.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L37)

#### :gear: votableNeurons

Filter the neurons that can vote for a proposal - i.e. the neurons that have not voted yet and are eligible

| Function         | Type                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| `votableNeurons` | `({ neurons, proposal, }: { neurons: NeuronInfo[]; proposal: ProposalInfo; }) => NeuronInfo[]` |

Parameters:

- `params.neurons`: The neurons to filter.
- `params.proposal`: The proposal to match against the selected neurons.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L66)

#### :gear: votedNeurons

Filter the neurons that have voted for a proposal.

| Function       | Type                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `votedNeurons` | `({ neurons, proposal, }: { neurons: NeuronInfo[]; proposal: ProposalInfo; }) => NeuronInfo[]` |

Parameters:

- `params.neurons`: The neurons to filter.
- `params.proposal`: The proposal for which some neurons might have already voted.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L89)

#### :gear: memoToNeuronSubaccount

| Function                 | Type                                                                              |
| ------------------------ | --------------------------------------------------------------------------------- |
| `memoToNeuronSubaccount` | `({ controller, memo, }: { controller: Principal; memo: bigint; }) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L101)

#### :gear: memoToNeuronAccountIdentifier

| Function                        | Type                                                                                                                                            |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `memoToNeuronAccountIdentifier` | `({ controller, memo, governanceCanisterId, }: { controller: Principal; memo: bigint; governanceCanisterId: Principal; }) => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L122)

### :factory: GenesisTokenCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/genesis_token.canister.ts#L9)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                            |
| -------- | --------------------------------------------------------------- |
| `create` | `(options?: CanisterOptions<_SERVICE>) => GenesisTokenCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/genesis_token.canister.ts#L14)

#### Methods

- [claimNeurons](#gear-claimneurons)

##### :gear: claimNeurons

| Method         | Type                                                            |
| -------------- | --------------------------------------------------------------- |
| `claimNeurons` | `({ hexPubKey, }: { hexPubKey: string; }) => Promise<bigint[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/genesis_token.canister.ts#L27)

### :factory: GovernanceCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L97)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                          |
| -------- | ------------------------------------------------------------- |
| `create` | `(options?: GovernanceCanisterOptions) => GovernanceCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L112)

#### Methods

- [listNeurons](#gear-listneurons)
- [listKnownNeurons](#gear-listknownneurons)
- [getLastestRewardEvent](#gear-getlastestrewardevent)
- [listProposals](#gear-listproposals)
- [stakeNeuron](#gear-stakeneuron)
- [increaseDissolveDelay](#gear-increasedissolvedelay)
- [setDissolveDelay](#gear-setdissolvedelay)
- [startDissolving](#gear-startdissolving)
- [stopDissolving](#gear-stopdissolving)
- [joinCommunityFund](#gear-joincommunityfund)
- [autoStakeMaturity](#gear-autostakematurity)
- [leaveCommunityFund](#gear-leavecommunityfund)
- [setVisibility](#gear-setvisibility)
- [setNodeProviderAccount](#gear-setnodeprovideraccount)
- [mergeNeurons](#gear-mergeneurons)
- [simulateMergeNeurons](#gear-simulatemergeneurons)
- [splitNeuron](#gear-splitneuron)
- [getProposal](#gear-getproposal)
- [makeProposal](#gear-makeproposal)
- [registerVote](#gear-registervote)
- [setFollowees](#gear-setfollowees)
- [disburse](#gear-disburse)
- [refreshVotingPower](#gear-refreshvotingpower)
- [mergeMaturity](#gear-mergematurity)
- [stakeMaturity](#gear-stakematurity)
- [spawnNeuron](#gear-spawnneuron)
- [addHotkey](#gear-addhotkey)
- [removeHotkey](#gear-removehotkey)
- [claimOrRefreshNeuronFromAccount](#gear-claimorrefreshneuronfromaccount)
- [claimOrRefreshNeuron](#gear-claimorrefreshneuron)
- [getNeuron](#gear-getneuron)
- [getNetworkEconomicsParameters](#gear-getnetworkeconomicsparameters)
- [disburseMaturity](#gear-disbursematurity)

##### :gear: listNeurons

Returns the list of neurons controlled by the caller.

If an array of neuron IDs is provided, precisely those neurons will be fetched.

If `certified` is true, the request is fetched as an update call, otherwise
it is fetched using a query call.

The backend treats `includeEmptyNeurons` as false if absent.

The response from the canister might be paginated. In this case, all pages will be fetched in parallel and
combined into a single return value.

| Method        | Type                                                                                                                                                                                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `listNeurons` | `({ certified, neuronIds, includeEmptyNeurons, includePublicNeurons, neuronSubaccounts, }: { certified: boolean; neuronIds?: bigint[] or undefined; includeEmptyNeurons?: boolean or undefined; includePublicNeurons?: boolean or undefined; neuronSubaccounts?: NeuronSubaccount[] or undefined; }) => Promise<...>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L155)

##### :gear: listKnownNeurons

Returns the list of neurons who have been approved by the community to
appear as the default followee options.

If `certified` is true, the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method             | Type                                              |
| ------------------ | ------------------------------------------------- |
| `listKnownNeurons` | `(certified?: boolean) => Promise<KnownNeuron[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L288)

##### :gear: getLastestRewardEvent

Returns the latest reward event.

If `certified` is true, the request is fetched as an update call, otherwise
it's fetched using a query call.

| Method                  | Type                                            |
| ----------------------- | ----------------------------------------------- |
| `getLastestRewardEvent` | `(certified?: boolean) => Promise<RewardEvent>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L310)

##### :gear: listProposals

Returns the list of proposals made for the community to vote on,
paginated and filtered by the request.

If `certified` is true (default), the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method          | Type                                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `listProposals` | `({ request, certified, }: { request: ListProposalsRequest; certified?: boolean or undefined; }) => Promise<ListProposalsResponse>` |

Parameters:

- `request`: the options to list the proposals (limit number of results, topics to search for, etc.)
- `certified`: query or update calls

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L323)

##### :gear: stakeNeuron

| Method        | Type                                                                                                                                                                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stakeNeuron` | `({ stake, principal, fromSubAccount, ledgerCanister, createdAt, fee, }: { stake: bigint; principal: Principal; fromSubAccount?: number[] or undefined; ledgerCanister: LedgerCanister; createdAt?: bigint or undefined; fee?: bigint or undefined; }) => Promise<...>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L342)

##### :gear: increaseDissolveDelay

Increases dissolve delay of a neuron

| Method                  | Type                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `increaseDissolveDelay` | `({ neuronId, additionalDissolveDelaySeconds, }: { neuronId: bigint; additionalDissolveDelaySeconds: number; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L403)

##### :gear: setDissolveDelay

Sets dissolve delay of a neuron.
The new date is now + dissolveDelaySeconds.

| Method             | Type                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `setDissolveDelay` | `({ neuronId, dissolveDelaySeconds, }: { neuronId: bigint; dissolveDelaySeconds: number; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L429)

##### :gear: startDissolving

Start dissolving process of a neuron

| Method            | Type                                  |
| ----------------- | ------------------------------------- |
| `startDissolving` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L452)

##### :gear: stopDissolving

Stop dissolving process of a neuron

| Method           | Type                                  |
| ---------------- | ------------------------------------- |
| `stopDissolving` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L466)

##### :gear: joinCommunityFund

Neuron joins the community fund

| Method              | Type                                  |
| ------------------- | ------------------------------------- |
| `joinCommunityFund` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L480)

##### :gear: autoStakeMaturity

Changes auto-stake maturity for this Neuron. While on, auto-stake maturity will cause all the maturity generated by voting rewards to this neuron to be automatically staked and contribute to the voting power of the neuron.

| Method              | Type                                                                   |
| ------------------- | ---------------------------------------------------------------------- |
| `autoStakeMaturity` | `(params: { neuronId: bigint; autoStake: boolean; }) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to request a change of the auto stake feature
- `autoStake`: `true` to enable the auto-stake maturity for this neuron, `false` to turn it off

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L498)

##### :gear: leaveCommunityFund

Neuron leaves the community fund

| Method               | Type                                  |
| -------------------- | ------------------------------------- |
| `leaveCommunityFund` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L513)

##### :gear: setVisibility

Set visibility of a neuron

| Method          | Type                                                                |
| --------------- | ------------------------------------------------------------------- |
| `setVisibility` | `(neuronId: bigint, visibility: NeuronVisibility) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L528)

##### :gear: setNodeProviderAccount

Sets node provider reward account.
Where the reward is paid to.

| Method                   | Type                                           |
| ------------------------ | ---------------------------------------------- |
| `setNodeProviderAccount` | `(accountIdentifier: string) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L548)

##### :gear: mergeNeurons

Merge two neurons

| Method         | Type                                                                              |
| -------------- | --------------------------------------------------------------------------------- |
| `mergeNeurons` | `(request: { sourceNeuronId: bigint; targetNeuronId: bigint; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L568)

##### :gear: simulateMergeNeurons

Simulate merging two neurons

| Method                 | Type                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `simulateMergeNeurons` | `(request: { sourceNeuronId: bigint; targetNeuronId: bigint; }) => Promise<NeuronInfo>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L585)

##### :gear: splitNeuron

Splits a neuron creating a new one

| Method        | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| `splitNeuron` | `({ neuronId, amount, }: { neuronId: bigint; amount: bigint; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L630)

##### :gear: getProposal

Returns single proposal info

If `certified` is true (default), the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method        | Type                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `getProposal` | `({ proposalId, certified, }: { proposalId: bigint; certified?: boolean or undefined; }) => Promise<ProposalInfo or undefined>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L670)

##### :gear: makeProposal

Create new proposal

| Method         | Type                                                             |
| -------------- | ---------------------------------------------------------------- |
| `makeProposal` | `(request: MakeProposalRequest) => Promise<bigint or undefined>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L688)

##### :gear: registerVote

Registers vote for a proposal from the neuron passed.

| Method         | Type                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `registerVote` | `({ neuronId, vote, proposalId, }: { neuronId: bigint; vote: Vote; proposalId: bigint; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L709)

##### :gear: setFollowees

Edit neuron followees per topic

| Method         | Type                                              |
| -------------- | ------------------------------------------------- |
| `setFollowees` | `(followRequest: FollowRequest) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L731)

##### :gear: disburse

Disburse neuron on Account

| Method     | Type                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `disburse` | `({ neuronId, toAccountId, amount, }: { neuronId: bigint; toAccountId?: string or undefined; amount?: bigint or undefined; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L746)

##### :gear: refreshVotingPower

Refreshes voting power of a neuron
(Resets the `votingPowerRefreshedTimestampSeconds`
parameter of the neuron to the current time).

| Method               | Type                                                      |
| -------------------- | --------------------------------------------------------- |
| `refreshVotingPower` | `({ neuronId, }: { neuronId: bigint; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L782)

##### :gear: mergeMaturity

Merge Maturity of a neuron

| Method          | Type                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| `mergeMaturity` | `({ neuronId, percentageToMerge, }: { neuronId: bigint; percentageToMerge: number; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L804)

##### :gear: stakeMaturity

Stake the maturity of a neuron.

| Method          | Type                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| `stakeMaturity` | `({ neuronId, percentageToStake, }: { neuronId: bigint; percentageToStake?: number or undefined; }) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to stake the maturity
- `percentageToStake`: Optional. Percentage of the current maturity to stake. If not provided, all of the neuron's current maturity will be staked.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L833)

##### :gear: spawnNeuron

Merge Maturity of a neuron

| Method        | Type                                                                                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `spawnNeuron` | `({ neuronId, percentageToSpawn, newController, nonce, }: { neuronId: bigint; percentageToSpawn?: number or undefined; newController?: Principal or undefined; nonce?: bigint or undefined; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L855)

##### :gear: addHotkey

Add hotkey to neuron

| Method      | Type                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------ |
| `addHotkey` | `({ neuronId, principal, }: { neuronId: bigint; principal: Principal; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L902)

##### :gear: removeHotkey

Remove hotkey to neuron

| Method         | Type                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------ |
| `removeHotkey` | `({ neuronId, principal, }: { neuronId: bigint; principal: Principal; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L922)

##### :gear: claimOrRefreshNeuronFromAccount

Gets the NeuronID of a newly created neuron.

| Method                            | Type                                                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `claimOrRefreshNeuronFromAccount` | `({ memo, controller, }: { memo: bigint; controller?: Principal or undefined; }) => Promise<bigint or undefined>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L940)

##### :gear: claimOrRefreshNeuron

Refreshes neuron and returns neuronId when successful
Uses query call only.

| Method                 | Type                                                                     |
| ---------------------- | ------------------------------------------------------------------------ |
| `claimOrRefreshNeuron` | `(request: ClaimOrRefreshNeuronRequest) => Promise<bigint or undefined>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L971)

##### :gear: getNeuron

Return the data of the neuron provided as id.

| Method      | Type                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| `getNeuron` | `({ certified, neuronId, }: { certified: boolean; neuronId: bigint; }) => Promise<NeuronInfo or undefined>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L996)

##### :gear: getNetworkEconomicsParameters

Return the [Network Economics](https://github.com/dfinity/ic/blob/d90e934eb440c730d44d9d9b1ece2cc3f9505d05/rs/nns/governance/proto/ic_nns_governance/pb/v1/governance.proto#L1847).

| Method                          | Type                                                                     |
| ------------------------------- | ------------------------------------------------------------------------ |
| `getNetworkEconomicsParameters` | `({ certified, }: { certified: boolean; }) => Promise<NetworkEconomics>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L1017)

##### :gear: disburseMaturity

Disburses a neuron's maturity (always certified).
Reference: https://github.com/dfinity/ic/blob/ca2be53acf413bb92478ee7694ac0fb92af07030/rs/sns/governance/src/governance.rs#L1614

| Method             | Type                                                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disburseMaturity` | `({ neuronId, percentageToDisburse, toAccountIdentifier, }: { neuronId: bigint; percentageToDisburse: number; toAccountIdentifier?: string or undefined; }) => Promise<void>` |

Parameters:

- `params.neuronId`: The id of the neuron for which to disburse maturity
- `params.percentageToDisburse`: The percentage of the neuron's maturity to disburse, between 1 and 100 (inclusive).
- `params.accountIdentifier`: Optional. The account identifier to which the maturity will be disbursed. If not provided, the maturity will be disbursed to the caller's Main account.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L1045)

### :factory: SnsWasmCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/sns_wasm.canister.ts#L10)

#### Static Methods

- [create](#gear-create)

##### :gear: create

| Method   | Type                                                       |
| -------- | ---------------------------------------------------------- |
| `create` | `(options?: CanisterOptions<_SERVICE>) => SnsWasmCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/sns_wasm.canister.ts#L16)

#### Methods

- [listSnses](#gear-listsnses)

##### :gear: listSnses

| Method      | Type                                                                                |
| ----------- | ----------------------------------------------------------------------------------- |
| `listSnses` | `({ certified, }: { certified?: boolean or undefined; }) => Promise<DeployedSns[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/sns_wasm.canister.ts#L29)

<!-- TSDOC_END -->
