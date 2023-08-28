# sns-js

A library for interfacing with a Service Nervous System (SNS) project.

[![npm version](https://img.shields.io/npm/v/@dfinity/sns.svg?logo=npm)](https://www.npmjs.com/package/@dfinity/sns) [![GitHub license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

You can use `sns-js` by installing it in your project.

```bash
npm i @dfinity/sns
```

The bundle needs peer dependencies, be sure that following resources are available in your project as well.

```bash
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils @dfinity/ledger
```

## Usage

`sns-js` can be utilized with two distinct approaches. The first approach is explorative, where you only need to provide the SNS root canister ID of your project to initialize a wrapper that handles routing the calls to the appropriate canister. This means having a single entry point for all functions. The second approach, which is more common, involves instantiating the specific canisters you require.

### Explorative way

The `explorative` approach has the advantage to simplify the code but, implies more costs as it queries the `root` canister for the list of canister IDs of the Sns project upon initialization.

```ts
const snsWrapper: SnsWrapper = await initSnsWrapper({
  rootOptions: {
    canisterId: rootCanisterId,
  },
  agent,
  certified,
});

const { metadata: meta, swapState } = wrapper;
const [metadata, token] = await meta({});

console.log("Summary data:", metadata, token);
```

### Descriptive way

The descriptive approach limits the scope of the features but, is more verbose.

```ts
const { metadata: governanceMetadata } = SnsGovernanceCanister.create({
  agent,
  canisterId: rootCanisterId,
});
const metadata = await governanceMetadata({ certified: true });

console.log("Summary data:", metadata);
```

## Features

`sns-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [initSnsWrapper](#gear-initsnswrapper)

#### :gear: initSnsWrapper

Lookup for the canister ids of a Sns and initialize the wrapper to access its features.

| Function         | Type             |
| ---------------- | ---------------- |
| `initSnsWrapper` | `InitSnsWrapper` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.ts#L33)

### :factory: SnsGovernanceCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L62)

#### Methods

- [create](#gear-create)
- [listNeurons](#gear-listneurons)
- [listProposals](#gear-listproposals)
- [getProposal](#gear-getproposal)
- [listNervousSystemFunctions](#gear-listnervoussystemfunctions)
- [metadata](#gear-metadata)
- [nervousSystemParameters](#gear-nervoussystemparameters)
- [getNeuron](#gear-getneuron)
- [queryNeuron](#gear-queryneuron)
- [manageNeuron](#gear-manageneuron)
- [addNeuronPermissions](#gear-addneuronpermissions)
- [removeNeuronPermissions](#gear-removeneuronpermissions)
- [splitNeuron](#gear-splitneuron)
- [disburse](#gear-disburse)
- [startDissolving](#gear-startdissolving)
- [stopDissolving](#gear-stopdissolving)
- [stakeMaturity](#gear-stakematurity)
- [disburseMaturity](#gear-disbursematurity)
- [autoStakeMaturity](#gear-autostakematurity)
- [setDissolveTimestamp](#gear-setdissolvetimestamp)
- [increaseDissolveDelay](#gear-increasedissolvedelay)
- [setTopicFollowees](#gear-settopicfollowees)
- [registerVote](#gear-registervote)
- [refreshNeuron](#gear-refreshneuron)
- [claimNeuron](#gear-claimneuron)

##### :gear: create

Instantiate a canister to interact with the governance of a Sns project.

| Method   | Type                                                               |
| -------- | ------------------------------------------------------------------ |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsGovernanceCanister` |

Parameters:

- `options`: Miscellaneous options to initialize the canister. Its ID being the only mandatory parammeter.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L68)

##### :gear: listNeurons

List the neurons of the Sns

| Method        | Type                                                  |
| ------------- | ----------------------------------------------------- |
| `listNeurons` | `(params: SnsListNeuronsParams) => Promise<Neuron[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L82)

##### :gear: listProposals

List the proposals of the Sns

| Method          | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `listProposals` | `(params: SnsListProposalsParams) => Promise<ProposalData[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L96)

##### :gear: getProposal

Get the proposal of the Sns

| Method        | Type                                                      |
| ------------- | --------------------------------------------------------- |
| `getProposal` | `(params: SnsGetProposalParams) => Promise<ProposalData>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L110)

##### :gear: listNervousSystemFunctions

List Nervous System Functions
Neurons can follow other neurons in specific Nervous System Functions.

| Method                       | Type                                                                   |
| ---------------------------- | ---------------------------------------------------------------------- |
| `listNervousSystemFunctions` | `(params: QueryParams) => Promise<ListNervousSystemFunctionsResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L129)

##### :gear: metadata

Get the Sns metadata (title, description, etc.)

| Method     | Type                                                    |
| ---------- | ------------------------------------------------------- |
| `metadata` | `(params: QueryParams) => Promise<GetMetadataResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L137)

##### :gear: nervousSystemParameters

Get the Sns nervous system parameters (default followees, max dissolve delay, max number of neurons, etc.)

| Method                    | Type                                                        |
| ------------------------- | ----------------------------------------------------------- |
| `nervousSystemParameters` | `(params: QueryParams) => Promise<NervousSystemParameters>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L143)

##### :gear: getNeuron

Get the neuron of the Sns

| Method      | Type                                              |
| ----------- | ------------------------------------------------- |
| `getNeuron` | `(params: SnsGetNeuronParams) => Promise<Neuron>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L151)

##### :gear: queryNeuron

Same as `getNeuron` but returns undefined instead of raising error when not found.

| Method        | Type                                              |
| ------------- | ------------------------------------------------- |
| `queryNeuron` | `(params: SnsGetNeuronParams) => Promise<Neuron>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L169)

##### :gear: manageNeuron

Manage neuron. For advanced users.

| Method         | Type                                                       |
| -------------- | ---------------------------------------------------------- |
| `manageNeuron` | `(request: ManageNeuron) => Promise<ManageNeuronResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L189)

##### :gear: addNeuronPermissions

Add permissions to a neuron for a specific principal

| Method                 | Type                                                    |
| ---------------------- | ------------------------------------------------------- |
| `addNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L202)

##### :gear: removeNeuronPermissions

Remove permissions to a neuron for a specific principal

| Method                    | Type                                                    |
| ------------------------- | ------------------------------------------------------- |
| `removeNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L212)

##### :gear: splitNeuron

Split neuron

| Method        | Type                                                  |
| ------------- | ----------------------------------------------------- |
| `splitNeuron` | `(params: SnsSplitNeuronParams) => Promise<NeuronId>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L222)

##### :gear: disburse

Disburse neuron on Account

| Method     | Type                                                 |
| ---------- | ---------------------------------------------------- |
| `disburse` | `(params: SnsDisburseNeuronParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L253)

##### :gear: startDissolving

Start dissolving process of a neuron

| Method            | Type                                    |
| ----------------- | --------------------------------------- |
| `startDissolving` | `(neuronId: NeuronId) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L261)

##### :gear: stopDissolving

Stop dissolving process of a neuron

| Method           | Type                                    |
| ---------------- | --------------------------------------- |
| `stopDissolving` | `(neuronId: NeuronId) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L269)

##### :gear: stakeMaturity

Stake the maturity of a neuron.

| Method          | Type                                                                                |
| --------------- | ----------------------------------------------------------------------------------- |
| `stakeMaturity` | `({ neuronId, percentageToStake, }: SnsNeuronStakeMaturityParams) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to stake the maturity
- `percentageToStake`: Optional. Percentage of the current maturity to stake. If not provided, all of the neuron's current maturity will be staked.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L281)

##### :gear: disburseMaturity

Disburse the maturity of a neuron.

| Method             | Type                                                         |
| ------------------ | ------------------------------------------------------------ |
| `disburseMaturity` | `(params: SnsNeuronDisburseMaturityParams) => Promise<void>` |

Parameters:

- `toAccount. Account`: to disburse maturity.
- `neuronId`: The id of the neuron for which to disburse the maturity
- `percentageToDisburse`: What percentage of the available maturity to disburse.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L302)

##### :gear: autoStakeMaturity

Changes auto-stake maturity for a Neuron.

| Method              | Type                                                          |
| ------------------- | ------------------------------------------------------------- |
| `autoStakeMaturity` | `(params: SnsNeuronAutoStakeMaturityParams) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to request a change of the auto stake feature
- `autoStake`: `true` to enable the auto-stake maturity for this neuron, `false` to turn it off

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L318)

##### :gear: setDissolveTimestamp

Increase dissolve delay of a neuron

| Method                 | Type                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `setDissolveTimestamp` | `(params: SnsSetDissolveTimestampParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L328)

##### :gear: increaseDissolveDelay

Increase dissolve delay of a neuron

| Method                  | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `increaseDissolveDelay` | `(params: SnsIncreaseDissolveDelayParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L338)

##### :gear: setTopicFollowees

Sets followees of a neuron for a specific Nervous System Function (topic)

| Method              | Type                                              |
| ------------------- | ------------------------------------------------- |
| `setTopicFollowees` | `(params: SnsSetTopicFollowees) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L348)

##### :gear: registerVote

Registers vote for a proposal from the neuron passed.

| Method         | Type                                               |
| -------------- | -------------------------------------------------- |
| `registerVote` | `(params: SnsRegisterVoteParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L356)

##### :gear: refreshNeuron

Refresh neuron

| Method          | Type                                    |
| --------------- | --------------------------------------- |
| `refreshNeuron` | `(neuronId: NeuronId) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L364)

##### :gear: claimNeuron

Claim neuron

| Method        | Type                                                                             |
| ------------- | -------------------------------------------------------------------------------- |
| `claimNeuron` | `({ memo, controller, subaccount, }: SnsClaimNeuronParams) => Promise<NeuronId>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/governance.canister.ts#L374)

### :factory: SnsRootCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/root.canister.ts#L10)

#### Methods

- [create](#gear-create)
- [listSnsCanisters](#gear-listsnscanisters)

##### :gear: create

| Method   | Type                                                         |
| -------- | ------------------------------------------------------------ |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsRootCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/root.canister.ts#L11)

##### :gear: listSnsCanisters

List the canisters that are part of the Sns.

Source code: https://github.com/dfinity/ic/blob/master/rs/sns/root/src/lib.rs

| Method             | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| `listSnsCanisters` | `({ certified, }: { certified?: boolean; }) => Promise<ListSnsCanistersResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/root.canister.ts#L32)

### :factory: SnsSwapCanister

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L31)

#### Methods

- [create](#gear-create)
- [state](#gear-state)
- [notifyPaymentFailure](#gear-notifypaymentfailure)
- [notifyParticipation](#gear-notifyparticipation)
- [getUserCommitment](#gear-getusercommitment)
- [getDerivedState](#gear-getderivedstate)
- [getSaleParameters](#gear-getsaleparameters)
- [getOpenTicket](#gear-getopenticket)
- [newSaleTicket](#gear-newsaleticket)
- [getLifecycle](#gear-getlifecycle)
- [getFinalizationStatus](#gear-getfinalizationstatus)

##### :gear: create

| Method   | Type                                                         |
| -------- | ------------------------------------------------------------ |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsSwapCanister` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L32)

##### :gear: state

Get the state of the swap

| Method  | Type                                                 |
| ------- | ---------------------------------------------------- |
| `state` | `(params: QueryParams) => Promise<GetStateResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L46)

##### :gear: notifyPaymentFailure

Notify of the payment failure to remove the ticket

| Method                 | Type                    |
| ---------------------- | ----------------------- |
| `notifyPaymentFailure` | `() => Promise<Ticket>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L52)

##### :gear: notifyParticipation

Notify of the user participating in the swap

| Method                | Type                                                                         |
| --------------------- | ---------------------------------------------------------------------------- |
| `notifyParticipation` | `(params: RefreshBuyerTokensRequest) => Promise<RefreshBuyerTokensResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L62)

##### :gear: getUserCommitment

Get user commitment

| Method              | Type                                                                    |
| ------------------- | ----------------------------------------------------------------------- |
| `getUserCommitment` | `(params: GetBuyerStateRequest and QueryParams) => Promise<BuyerState>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L70)

##### :gear: getDerivedState

Get sale buyers state

| Method            | Type                                                                |
| ----------------- | ------------------------------------------------------------------- |
| `getDerivedState` | `({ certified, }: QueryParams) => Promise<GetDerivedStateResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L82)

##### :gear: getSaleParameters

Get sale parameters

| Method              | Type                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| `getSaleParameters` | `({ certified, }: QueryParams) => Promise<GetSaleParametersResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L91)

##### :gear: getOpenTicket

Return a sale ticket if created and not yet removed (payment flow)

| Method          | Type                                       |
| --------------- | ------------------------------------------ |
| `getOpenTicket` | `(params: QueryParams) => Promise<Ticket>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L100)

##### :gear: newSaleTicket

Create a sale ticket (payment flow)

| Method          | Type                                               |
| --------------- | -------------------------------------------------- |
| `newSaleTicket` | `(params: NewSaleTicketParams) => Promise<Ticket>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L117)

##### :gear: getLifecycle

Get sale lifecycle state

| Method         | Type                                                     |
| -------------- | -------------------------------------------------------- |
| `getLifecycle` | `(params: QueryParams) => Promise<GetLifecycleResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L142)

##### :gear: getFinalizationStatus

Get sale lifecycle state

| Method                  | Type                                                                  |
| ----------------------- | --------------------------------------------------------------------- |
| `getFinalizationStatus` | `(params: QueryParams) => Promise<GetAutoFinalizationStatusResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/swap.canister.ts#L149)

### :factory: SnsWrapper

Sns wrapper - notably used by NNS-dapp - ease the access to a particular Sns.
It knows all the Sns' canisters, wrap and enhance their available features.
A wrapper either performs query or update calls.

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L84)

#### Constructors

`public`: Constructor to instantiate a Sns

Parameters:

- `__0`

#### Methods

- [listNeurons](#gear-listneurons)
- [listProposals](#gear-listproposals)
- [getProposal](#gear-getproposal)
- [listNervousSystemFunctions](#gear-listnervoussystemfunctions)
- [metadata](#gear-metadata)
- [nervousSystemParameters](#gear-nervoussystemparameters)
- [ledgerMetadata](#gear-ledgermetadata)
- [transactionFee](#gear-transactionfee)
- [totalTokensSupply](#gear-totaltokenssupply)
- [balance](#gear-balance)
- [transfer](#gear-transfer)
- [getNeuron](#gear-getneuron)
- [queryNeuron](#gear-queryneuron)
- [nextNeuronAccount](#gear-nextneuronaccount)
- [stakeNeuron](#gear-stakeneuron)
- [increaseStakeNeuron](#gear-increasestakeneuron)
- [getNeuronBalance](#gear-getneuronbalance)
- [addNeuronPermissions](#gear-addneuronpermissions)
- [refreshNeuron](#gear-refreshneuron)
- [claimNeuron](#gear-claimneuron)
- [removeNeuronPermissions](#gear-removeneuronpermissions)
- [splitNeuron](#gear-splitneuron)
- [disburse](#gear-disburse)
- [startDissolving](#gear-startdissolving)
- [stopDissolving](#gear-stopdissolving)
- [setDissolveTimestamp](#gear-setdissolvetimestamp)
- [increaseDissolveDelay](#gear-increasedissolvedelay)
- [setTopicFollowees](#gear-settopicfollowees)
- [registerVote](#gear-registervote)
- [swapState](#gear-swapstate)
- [notifyPaymentFailure](#gear-notifypaymentfailure)
- [notifyParticipation](#gear-notifyparticipation)
- [getUserCommitment](#gear-getusercommitment)
- [getOpenTicket](#gear-getopenticket)
- [newSaleTicket](#gear-newsaleticket)
- [getLifecycle](#gear-getlifecycle)
- [getFinalizationStatus](#gear-getfinalizationstatus)
- [getSaleParameters](#gear-getsaleparameters)
- [getDerivedState](#gear-getderivedstate)
- [getTransactions](#gear-gettransactions)
- [stakeMaturity](#gear-stakematurity)
- [disburseMaturity](#gear-disbursematurity)
- [autoStakeMaturity](#gear-autostakematurity)

##### :gear: listNeurons

| Method        | Type                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| `listNeurons` | `(params: Omit<SnsListNeuronsParams, "certified">) => Promise<Neuron[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L130)

##### :gear: listProposals

| Method          | Type                                                                             |
| --------------- | -------------------------------------------------------------------------------- |
| `listProposals` | `(params: Omit<SnsListProposalsParams, "certified">) => Promise<ProposalData[]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L134)

##### :gear: getProposal

| Method        | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| `getProposal` | `(params: Omit<SnsGetProposalParams, "certified">) => Promise<ProposalData>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L139)

##### :gear: listNervousSystemFunctions

| Method                       | Type                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `listNervousSystemFunctions` | `(params: Omit<QueryParams, "certified">) => Promise<ListNervousSystemFunctionsResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L144)

##### :gear: metadata

| Method     | Type                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| `metadata` | `(params: Omit<QueryParams, "certified">) => Promise<[GetMetadataResponse, IcrcTokenMetadataResponse]>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L149)

##### :gear: nervousSystemParameters

| Method                    | Type                                                                           |
| ------------------------- | ------------------------------------------------------------------------------ |
| `nervousSystemParameters` | `(params: Omit<QueryParams, "certified">) => Promise<NervousSystemParameters>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L157)

##### :gear: ledgerMetadata

| Method           | Type                                                                             |
| ---------------- | -------------------------------------------------------------------------------- |
| `ledgerMetadata` | `(params: Omit<QueryParams, "certified">) => Promise<IcrcTokenMetadataResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L162)

##### :gear: transactionFee

| Method           | Type                                                          |
| ---------------- | ------------------------------------------------------------- |
| `transactionFee` | `(params: Omit<QueryParams, "certified">) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L167)

##### :gear: totalTokensSupply

| Method              | Type                                                          |
| ------------------- | ------------------------------------------------------------- |
| `totalTokensSupply` | `(params: Omit<QueryParams, "certified">) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L172)

##### :gear: balance

| Method    | Type                                                            |
| --------- | --------------------------------------------------------------- |
| `balance` | `(params: Omit<BalanceParams, "certified">) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L177)

##### :gear: transfer

| Method     | Type                                          |
| ---------- | --------------------------------------------- |
| `transfer` | `(params: TransferParams) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L181)

##### :gear: getNeuron

| Method      | Type                                                                 |
| ----------- | -------------------------------------------------------------------- |
| `getNeuron` | `(params: Omit<SnsGetNeuronParams, "certified">) => Promise<Neuron>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L184)

##### :gear: queryNeuron

| Method        | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| `queryNeuron` | `(params: Omit<SnsGetNeuronParams, "certified">) => Promise<Neuron>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L188)

##### :gear: nextNeuronAccount

Returns the subaccount of the next neuron to be created.

The neuron account is a subaccount of the governance canister.
The subaccount is derived from the controller and an ascending index.

‼️ The id of the neuron is the subaccount (neuron ID = subaccount) ‼️.

If the neuron does not exist for that subaccount, then we use it for the next neuron.

The index is used in the memo of the transfer and when claiming the neuron.
This is how the backend can identify which neuron is being claimed.

| Method              | Type                                                                           |
| ------------------- | ------------------------------------------------------------------------------ |
| `nextNeuronAccount` | `(controller: Principal) => Promise<{ account: IcrcAccount; index: bigint; }>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L209)

##### :gear: stakeNeuron

Stakes a neuron.

This is a convenient method that transfers the stake to the neuron subaccount and then claims the neuron.

⚠️ This feature is provided as it without warranty. It does not implement any additional checks of the validity of the payment flow - e.g. it does not handle refund nor retries claiming the neuron in case of errors.

| Method        | Type                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------ |
| `stakeNeuron` | `({ stakeE8s, source, controller, createdAt, fee, }: SnsStakeNeuronParams) => Promise<NeuronId>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L256)

##### :gear: increaseStakeNeuron

Increase the stake of a neuron.

This is a convenient method that transfers the stake to the neuron subaccount and then refresh the neuron.

⚠️ This feature is provided as it without warranty. It does not implement any additional checks of the validity of the payment flow - e.g. it does not handle refund nor calls refresh again in case of errors.

| Method                | Type                                                                               |
| --------------------- | ---------------------------------------------------------------------------------- |
| `increaseStakeNeuron` | `({ stakeE8s, source, neuronId, }: SnsIncreaseStakeNeuronParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L304)

##### :gear: getNeuronBalance

| Method             | Type                                      |
| ------------------ | ----------------------------------------- |
| `getNeuronBalance` | `(neuronId: NeuronId) => Promise<bigint>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L323)

##### :gear: addNeuronPermissions

| Method                 | Type                                                    |
| ---------------------- | ------------------------------------------------------- |
| `addNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L332)

##### :gear: refreshNeuron

| Method          | Type                                    |
| --------------- | --------------------------------------- |
| `refreshNeuron` | `(neuronId: NeuronId) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L336)

##### :gear: claimNeuron

| Method        | Type                                                  |
| ------------- | ----------------------------------------------------- |
| `claimNeuron` | `(params: SnsClaimNeuronParams) => Promise<NeuronId>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L340)

##### :gear: removeNeuronPermissions

| Method                    | Type                                                    |
| ------------------------- | ------------------------------------------------------- |
| `removeNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L344)

##### :gear: splitNeuron

| Method        | Type                                                  |
| ------------- | ----------------------------------------------------- |
| `splitNeuron` | `(params: SnsSplitNeuronParams) => Promise<NeuronId>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L349)

##### :gear: disburse

| Method     | Type                                                 |
| ---------- | ---------------------------------------------------- |
| `disburse` | `(params: SnsDisburseNeuronParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L353)

##### :gear: startDissolving

| Method            | Type                                    |
| ----------------- | --------------------------------------- |
| `startDissolving` | `(neuronId: NeuronId) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L357)

##### :gear: stopDissolving

| Method           | Type                                    |
| ---------------- | --------------------------------------- |
| `stopDissolving` | `(neuronId: NeuronId) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L361)

##### :gear: setDissolveTimestamp

| Method                 | Type                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `setDissolveTimestamp` | `(params: SnsSetDissolveTimestampParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L365)

##### :gear: increaseDissolveDelay

| Method                  | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `increaseDissolveDelay` | `(params: SnsIncreaseDissolveDelayParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L370)

##### :gear: setTopicFollowees

| Method              | Type                                              |
| ------------------- | ------------------------------------------------- |
| `setTopicFollowees` | `(params: SnsSetTopicFollowees) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L375)

##### :gear: registerVote

| Method         | Type                                               |
| -------------- | -------------------------------------------------- |
| `registerVote` | `(params: SnsRegisterVoteParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L379)

##### :gear: swapState

| Method      | Type                                                                    |
| ----------- | ----------------------------------------------------------------------- |
| `swapState` | `(params: Omit<QueryParams, "certified">) => Promise<GetStateResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L382)

##### :gear: notifyPaymentFailure

Returns the ticket if a ticket was found for the caller and the ticket
was removed successfully. Returns None if no ticket was found for the caller.
Only the owner of a ticket can remove it.

Always certified

| Method                 | Type                    |
| ---------------------- | ----------------------- |
| `notifyPaymentFailure` | `() => Promise<Ticket>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L395)

##### :gear: notifyParticipation

| Method                | Type                                                                         |
| --------------------- | ---------------------------------------------------------------------------- |
| `notifyParticipation` | `(params: RefreshBuyerTokensRequest) => Promise<RefreshBuyerTokensResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L399)

##### :gear: getUserCommitment

| Method              | Type                                                    |
| ------------------- | ------------------------------------------------------- |
| `getUserCommitment` | `(params: GetBuyerStateRequest) => Promise<BuyerState>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L404)

##### :gear: getOpenTicket

| Method          | Type                                                          |
| --------------- | ------------------------------------------------------------- |
| `getOpenTicket` | `(params: Omit<QueryParams, "certified">) => Promise<Ticket>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L409)

##### :gear: newSaleTicket

| Method          | Type                                               |
| --------------- | -------------------------------------------------- |
| `newSaleTicket` | `(params: NewSaleTicketParams) => Promise<Ticket>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L415)

##### :gear: getLifecycle

| Method         | Type                                                                        |
| -------------- | --------------------------------------------------------------------------- |
| `getLifecycle` | `(params: Omit<QueryParams, "certified">) => Promise<GetLifecycleResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L418)

##### :gear: getFinalizationStatus

| Method                  | Type                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| `getFinalizationStatus` | `(params: Omit<QueryParams, "certified">) => Promise<GetAutoFinalizationStatusResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L423)

##### :gear: getSaleParameters

| Method              | Type                                                                             |
| ------------------- | -------------------------------------------------------------------------------- |
| `getSaleParameters` | `(params: Omit<QueryParams, "certified">) => Promise<GetSaleParametersResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L428)

##### :gear: getDerivedState

| Method            | Type                                                                           |
| ----------------- | ------------------------------------------------------------------------------ |
| `getDerivedState` | `(params: Omit<QueryParams, "certified">) => Promise<GetDerivedStateResponse>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L433)

##### :gear: getTransactions

| Method            | Type                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| `getTransactions` | `(params: GetAccountTransactionsParams) => Promise<GetTransactions>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L439)

##### :gear: stakeMaturity

| Method          | Type                                                      |
| --------------- | --------------------------------------------------------- |
| `stakeMaturity` | `(params: SnsNeuronStakeMaturityParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L444)

##### :gear: disburseMaturity

| Method             | Type                                                         |
| ------------------ | ------------------------------------------------------------ |
| `disburseMaturity` | `(params: SnsNeuronDisburseMaturityParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L448)

##### :gear: autoStakeMaturity

| Method              | Type                                                          |
| ------------------- | ------------------------------------------------------------- |
| `autoStakeMaturity` | `(params: SnsNeuronAutoStakeMaturityParams) => Promise<void>` |

[:link: Source](https://github.com/dfinity/ic-js/tree/main/packages/sns/src/sns.wrapper.ts#L452)

<!-- TSDOC_END -->
