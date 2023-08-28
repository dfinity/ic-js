# nns-js

A library for interfacing with the Internet Computer's Network Nervous System.

[![npm version](https://img.shields.io/npm/v/@dfinity/nns.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/nns) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
  - [AccountIdentifier](#factory-accountidentifier)
  - [SubAccount](#factory-subaccount)
  - [GenesisTokenCanister](#factory-genesistokencanister)
  - [ICP](#factory-icp)
  - [LedgerCanister](#factory-ledgercanister)
  - [GovernanceCanister](#factory-governancecanister)
  - [SnsWasmCanister](#factory-snswasmcanister)

## Installation

You can use `nns-js` by installing it in your project.

```bash
npm i @dfinity/nns
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils @dfinity/nns-proto
```

## Usage

Most features are provided through the use of classes. e.g. querying the `ledger` for an account balance in a NodeJS context can be developed as following:

```ts
import { AccountIdentifier, LedgerCanister } from "@dfinity/nns";

// If not running in browser, add polyfill of `window.fetch` for agent-js to work.
import fetch from "cross-fetch";
global.fetch = fetch;

const main = async () => {
  const ledger = LedgerCanister.create();

  const accountIdentifier = AccountIdentifier.fromHex(
    "efa01544f509c56dd85449edf2381244a48fad1ede5183836229c00ab00d52df",
  );

  const balance = await ledger.accountBalance({ accountIdentifier });

  console.log(`Balance: ${balance}`);
};

await main();
```

## Features

`nns-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [ineligibleNeurons](#gear-ineligibleneurons)
- [votableNeurons](#gear-votableneurons)
- [votedNeurons](#gear-votedneurons)

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

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L39)

#### :gear: votableNeurons

Filter the neurons that can vote for a proposal - i.e. the neurons that have not voted yet and are eligible

| Function         | Type                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| `votableNeurons` | `({ neurons, proposal, }: { neurons: NeuronInfo[]; proposal: ProposalInfo; }) => NeuronInfo[]` |

Parameters:

- `params.neurons`: The neurons to filter.
- `params.proposal`: The proposal to match against the selected neurons.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L68)

#### :gear: votedNeurons

Filter the neurons that have voted for a proposal.

| Function       | Type                                                                                                               |
| -------------- | ------------------------------------------------------------------------------------------------------------------ |
| `votedNeurons` | `({ neurons, proposal: { id: proposalId }, }: { neurons: NeuronInfo[]; proposal: ProposalInfo; }) => NeuronInfo[]` |

Parameters:

- `params.neurons`: The neurons to filter.
- `params.proposal`: The proposal for which some neurons might have already voted.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/utils/neurons.utils.ts#L94)

### :factory: AccountIdentifier

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L13)

#### Methods

- [fromHex](#gear-fromhex)
- [fromPrincipal](#gear-fromprincipal)
- [toProto](#gear-toproto)
- [toHex](#gear-tohex)
- [toUint8Array](#gear-touint8array)
- [toNumbers](#gear-tonumbers)
- [toAccountIdentifierHash](#gear-toaccountidentifierhash)

##### :gear: fromHex

| Method    | Type                                 |
| --------- | ------------------------------------ |
| `fromHex` | `(hex: string) => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L16)

##### :gear: fromPrincipal

| Method          | Type                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| `fromPrincipal` | `({ principal, subAccount, }: { principal: Principal; subAccount?: SubAccount; }) => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L20)

##### :gear: toProto

| Method    | Type                               |
| --------- | ---------------------------------- |
| `toProto` | `() => Promise<AccountIdentifier>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L49)

##### :gear: toHex

| Method  | Type           |
| ------- | -------------- |
| `toHex` | `() => string` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L57)

##### :gear: toUint8Array

| Method         | Type               |
| -------------- | ------------------ |
| `toUint8Array` | `() => Uint8Array` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L61)

##### :gear: toNumbers

| Method      | Type             |
| ----------- | ---------------- |
| `toNumbers` | `() => number[]` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L65)

##### :gear: toAccountIdentifierHash

| Method                    | Type                      |
| ------------------------- | ------------------------- |
| `toAccountIdentifierHash` | `() => AccountIdentifier` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L69)

### :factory: SubAccount

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L76)

#### Methods

- [fromBytes](#gear-frombytes)
- [fromPrincipal](#gear-fromprincipal)
- [fromID](#gear-fromid)
- [toUint8Array](#gear-touint8array)

##### :gear: fromBytes

| Method      | Type                                         |
| ----------- | -------------------------------------------- |
| `fromBytes` | `(bytes: Uint8Array) => SubAccount or Error` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L79)

##### :gear: fromPrincipal

| Method          | Type                                   |
| --------------- | -------------------------------------- |
| `fromPrincipal` | `(principal: Principal) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L87)

##### :gear: fromID

| Method   | Type                         |
| -------- | ---------------------------- |
| `fromID` | `(id: number) => SubAccount` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L100)

##### :gear: toUint8Array

| Method         | Type               |
| -------------- | ------------------ |
| `toUint8Array` | `() => Uint8Array` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/account_identifier.ts#L112)

### :factory: GenesisTokenCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/genesis_token.canister.ts#L9)

#### Methods

- [create](#gear-create)
- [claimNeurons](#gear-claimneurons)

##### :gear: create

| Method   | Type                                                            |
| -------- | --------------------------------------------------------------- |
| `create` | `(options?: CanisterOptions<_SERVICE>) => GenesisTokenCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/genesis_token.canister.ts#L14)

##### :gear: claimNeurons

| Method         | Type                                                            |
| -------------- | --------------------------------------------------------------- |
| `claimNeurons` | `({ hexPubKey, }: { hexPubKey: string; }) => Promise<bigint[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/genesis_token.canister.ts#L27)

### :factory: LedgerCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L27)

#### Methods

- [create](#gear-create)
- [accountBalance](#gear-accountbalance)
- [transactionFee](#gear-transactionfee)
- [transfer](#gear-transfer)

##### :gear: create

| Method   | Type                                                  |
| -------- | ----------------------------------------------------- |
| `create` | `(options?: LedgerCanisterOptions) => LedgerCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L38)

##### :gear: accountBalance

Returns the balance of the specified account identifier.

If `certified` is true, the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method           | Type                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `accountBalance` | `({ accountIdentifier, certified, }: { accountIdentifier: AccountIdentifier; certified?: boolean; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L70)

##### :gear: transactionFee

Returns the transaction fee of the ledger canister

| Method           | Type                    |
| ---------------- | ----------------------- |
| `transactionFee` | `() => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L94)

##### :gear: transfer

Transfer ICP from the caller to the destination `accountIdentifier`.
Returns the index of the block containing the tx if it was successful.

| Method     | Type                                            |
| ---------- | ----------------------------------------------- |
| `transfer` | `(request: TransferRequest) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/ledger.canister.ts#L107)

### :factory: GovernanceCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L107)

#### Methods

- [create](#gear-create)
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
- [setNodeProviderAccount](#gear-setnodeprovideraccount)
- [mergeNeurons](#gear-mergeneurons)
- [simulateMergeNeurons](#gear-simulatemergeneurons)
- [splitNeuron](#gear-splitneuron)
- [getProposal](#gear-getproposal)
- [makeProposal](#gear-makeproposal)
- [registerVote](#gear-registervote)
- [setFollowees](#gear-setfollowees)
- [disburse](#gear-disburse)
- [mergeMaturity](#gear-mergematurity)
- [stakeMaturity](#gear-stakematurity)
- [spawnNeuron](#gear-spawnneuron)
- [addHotkey](#gear-addhotkey)
- [removeHotkey](#gear-removehotkey)
- [claimOrRefreshNeuronFromAccount](#gear-claimorrefreshneuronfromaccount)
- [claimOrRefreshNeuron](#gear-claimorrefreshneuron)
- [getNeuron](#gear-getneuron)

##### :gear: create

| Method   | Type                                                          |
| -------- | ------------------------------------------------------------- |
| `create` | `(options?: GovernanceCanisterOptions) => GovernanceCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L122)

##### :gear: listNeurons

Returns the list of neurons controlled by the caller.

If an array of neuron IDs is provided, precisely those neurons will be fetched.

If `certified` is true, the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method        | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `listNeurons` | `({ certified, neuronIds, }: { certified: boolean; neuronIds?: bigint[]; }) => Promise<NeuronInfo[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L154)

##### :gear: listKnownNeurons

Returns the list of neurons who have been approved by the community to
appear as the default followee options.

If `certified` is true, the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method             | Type                                              |
| ------------------ | ------------------------------------------------- |
| `listKnownNeurons` | `(certified?: boolean) => Promise<KnownNeuron[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L186)

##### :gear: getLastestRewardEvent

Returns the latest reward event.

If `certified` is true, the request is fetched as an update call, otherwise
it's fetched using a query call.

| Method                  | Type                                            |
| ----------------------- | ----------------------------------------------- |
| `getLastestRewardEvent` | `(certified?: boolean) => Promise<RewardEvent>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L209)

##### :gear: listProposals

Returns the list of proposals made for the community to vote on,
paginated and filtered by the request.

If `certified` is true (default), the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method          | Type                                                                                                                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `listProposals` | `({ request, certified, }: { request: ListProposalsRequest; certified?: boolean; }) => Promise<ListProposalsResponse>` |

Parameters:

- `request`: the options to list the proposals (limit number of results, topics to search for, etc.)
- `certified`: query or update calls

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L225)

##### :gear: stakeNeuron

| Method        | Type                                                                                                                                                                                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stakeNeuron` | `({ stake, principal, fromSubAccount, ledgerCanister, createdAt, fee, }: { stake: bigint; principal: Principal; fromSubAccount?: number[]; ledgerCanister: LedgerCanister; createdAt?: bigint; fee?: bigint; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L245)

##### :gear: increaseDissolveDelay

Increases dissolve delay of a neuron

| Method                  | Type                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `increaseDissolveDelay` | `({ neuronId, additionalDissolveDelaySeconds, }: { neuronId: bigint; additionalDissolveDelaySeconds: number; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L306)

##### :gear: setDissolveDelay

Sets dissolve delay of a neuron.
The new date is now + dissolveDelaySeconds.

| Method             | Type                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `setDissolveDelay` | `({ neuronId, dissolveDelaySeconds, }: { neuronId: bigint; dissolveDelaySeconds: number; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L338)

##### :gear: startDissolving

Start dissolving process of a neuron

| Method            | Type                                  |
| ----------------- | ------------------------------------- |
| `startDissolving` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L361)

##### :gear: stopDissolving

Stop dissolving process of a neuron

| Method           | Type                                  |
| ---------------- | ------------------------------------- |
| `stopDissolving` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L378)

##### :gear: joinCommunityFund

Neuron joins the community fund

| Method              | Type                                  |
| ------------------- | ------------------------------------- |
| `joinCommunityFund` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L395)

##### :gear: autoStakeMaturity

Changes auto-stake maturity for this Neuron. While on, auto-stake maturity will cause all the maturity generated by voting rewards to this neuron to be automatically staked and contribute to the voting power of the neuron.

| Method              | Type                                                                   |
| ------------------- | ---------------------------------------------------------------------- |
| `autoStakeMaturity` | `(params: { neuronId: bigint; autoStake: boolean; }) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to request a change of the auto stake feature
- `autoStake`: `true` to enable the auto-stake maturity for this neuron, `false` to turn it off

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L417)

##### :gear: leaveCommunityFund

Neuron leaves the community fund

| Method               | Type                                  |
| -------------------- | ------------------------------------- |
| `leaveCommunityFund` | `(neuronId: bigint) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L431)

##### :gear: setNodeProviderAccount

Sets node provider reward account.
Where the reward is paid to.

| Method                   | Type                                           |
| ------------------------ | ---------------------------------------------- |
| `setNodeProviderAccount` | `(accountIdentifier: string) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L448)

##### :gear: mergeNeurons

Merge two neurons

| Method         | Type                                                                              |
| -------------- | --------------------------------------------------------------------------------- |
| `mergeNeurons` | `(request: { sourceNeuronId: bigint; targetNeuronId: bigint; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L468)

##### :gear: simulateMergeNeurons

Simulate merging two neurons

| Method                 | Type                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `simulateMergeNeurons` | `(request: { sourceNeuronId: bigint; targetNeuronId: bigint; }) => Promise<NeuronInfo>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L485)

##### :gear: splitNeuron

Splits a neuron creating a new one

| Method        | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| `splitNeuron` | `({ neuronId, amount, }: { neuronId: bigint; amount: bigint; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L530)

##### :gear: getProposal

Returns single proposal info

If `certified` is true (default), the request is fetched as an update call, otherwise
it is fetched using a query call.

| Method        | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| `getProposal` | `({ proposalId, certified, }: { proposalId: bigint; certified?: boolean; }) => Promise<ProposalInfo>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L570)

##### :gear: makeProposal

Create new proposal

| Method         | Type                                              |
| -------------- | ------------------------------------------------- |
| `makeProposal` | `(request: MakeProposalRequest) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L587)

##### :gear: registerVote

Registers vote for a proposal from the neuron passed.

| Method         | Type                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `registerVote` | `({ neuronId, vote, proposalId, }: { neuronId: bigint; vote: Vote; proposalId: bigint; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L602)

##### :gear: setFollowees

Edit neuron followees per topic

| Method         | Type                                              |
| -------------- | ------------------------------------------------- |
| `setFollowees` | `(followRequest: FollowRequest) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L624)

##### :gear: disburse

Disburse neuron on Account

| Method     | Type                                                                                                                  |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| `disburse` | `({ neuronId, toAccountId, amount, }: { neuronId: bigint; toAccountId?: string; amount?: bigint; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L639)

##### :gear: mergeMaturity

Merge Maturity of a neuron

| Method          | Type                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| `mergeMaturity` | `({ neuronId, percentageToMerge, }: { neuronId: bigint; percentageToMerge: number; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L678)

##### :gear: stakeMaturity

Stake the maturity of a neuron.

| Method          | Type                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| `stakeMaturity` | `({ neuronId, percentageToStake, }: { neuronId: bigint; percentageToStake?: number; }) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to stake the maturity
- `percentageToStake`: Optional. Percentage of the current maturity to stake. If not provided, all of the neuron's current maturity will be staked.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L711)

##### :gear: spawnNeuron

Merge Maturity of a neuron

| Method        | Type                                                                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spawnNeuron` | `({ neuronId, percentageToSpawn, newController, nonce, }: { neuronId: bigint; percentageToSpawn?: number; newController?: Principal; nonce?: bigint; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L733)

##### :gear: addHotkey

Add hotkey to neuron

| Method      | Type                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------ |
| `addHotkey` | `({ neuronId, principal, }: { neuronId: bigint; principal: Principal; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L787)

##### :gear: removeHotkey

Remove hotkey to neuron

| Method         | Type                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------ |
| `removeHotkey` | `({ neuronId, principal, }: { neuronId: bigint; principal: Principal; }) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L811)

##### :gear: claimOrRefreshNeuronFromAccount

Gets the NeuronID of a newly created neuron.

| Method                            | Type                                                                                    |
| --------------------------------- | --------------------------------------------------------------------------------------- |
| `claimOrRefreshNeuronFromAccount` | `({ memo, controller, }: { memo: bigint; controller?: Principal; }) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L832)

##### :gear: claimOrRefreshNeuron

Refreshes neuron and returns neuronId when successful
Uses query call only.

| Method                 | Type                                                        |
| ---------------------- | ----------------------------------------------------------- |
| `claimOrRefreshNeuron` | `(request: ClaimOrRefreshNeuronRequest) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L863)

##### :gear: getNeuron

Return the data of the neuron provided as id.

| Method      | Type                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------- |
| `getNeuron` | `({ certified, neuronId, }: { certified: boolean; neuronId: bigint; }) => Promise<NeuronInfo>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/governance.canister.ts#L905)

### :factory: ICP

We don't extend to keep `fromE8s` and `fromString` as backwards compatible.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/icp.ts#L14)

#### Methods

- [fromE8s](#gear-frome8s)
- [fromString](#gear-fromstring)
- [toE8s](#gear-toe8s)
- [toProto](#gear-toproto)

##### :gear: fromE8s

| Method    | Type                      |
| --------- | ------------------------- |
| `fromE8s` | `(amount: bigint) => ICP` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/icp.ts#L20)

##### :gear: fromString

Initialize from a string. Accepted formats:

1234567.8901
1'234'567.8901
1,234,567.8901

| Method       | Type                                                |
| ------------ | --------------------------------------------------- |
| `fromString` | `(amount: string) => ICP or FromStringToTokenError` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/icp.ts#L31)

##### :gear: toE8s

| Method  | Type           |
| ------- | -------------- |
| `toE8s` | `() => bigint` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/icp.ts#L39)

##### :gear: toProto

| Method    | Type                   |
| --------- | ---------------------- |
| `toProto` | `() => Promise<ICPTs>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/icp.ts#L43)

### :factory: SnsWasmCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/sns_wasm.canister.ts#L10)

#### Methods

- [create](#gear-create)
- [listSnses](#gear-listsnses)

##### :gear: create

| Method   | Type                                                       |
| -------- | ---------------------------------------------------------- |
| `create` | `(options?: CanisterOptions<_SERVICE>) => SnsWasmCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/sns_wasm.canister.ts#L16)

##### :gear: listSnses

| Method      | Type                                                                   |
| ----------- | ---------------------------------------------------------------------- |
| `listSnses` | `({ certified, }: { certified?: boolean; }) => Promise<DeployedSns[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/nns/src/sns_wasm.canister.ts#L29)

<!-- TSDOC_END -->
