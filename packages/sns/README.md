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
npm i @dfinity/agent @dfinity/candid @dfinity/principal @dfinity/utils
```

## Usage

`sns-js` can be used with two distinctive approaches. One explorative way, in which you only provide the `root` canister ID of your project to initialize a wrapper that takes care of routing the queries to the appropriate canister - i.e. one single entry for all functions, or another more common way in which you instantiate the canisters you need.

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
const { metadata: ledgerMetadata } = SnsLedgerCanister.create({
  agent,
  canisterId: rootCanisterId,
});
const metadata = await governanceMetadata({ certified: true });
const token = await ledgerMetadata({ certified: true });

console.log("Summary data:", metadata, token);
```

## Features

`sns-js` implements following features:

<!-- TSDOC_START -->

### :toolbox: Functions

- [initSnsWrapper](#gear-initsnswrapper)
- [encodeSnsAccount](#gear-encodesnsaccount)
- [decodeSnsAccount](#gear-decodesnsaccount)

#### :gear: initSnsWrapper

Lookup for the canister ids of a Sns and initialize the wrapper to access its features.

| Function         | Type             |
| ---------------- | ---------------- |
| `initSnsWrapper` | `InitSnsWrapper` |

#### :gear: encodeSnsAccount

Encodes an SNS account into a string.
Formatting Reference: https://github.com/dfinity/ICRC-1/pull/55/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R238

| Function           | Type                                            |
| ------------------ | ----------------------------------------------- |
| `encodeSnsAccount` | `({ owner, subaccount }: SnsAccount) => string` |

Parameters:

- `snsAccount`: : Principal, subaccount?: Uint8Array }

#### :gear: decodeSnsAccount

Decodes a string into an SNS account.
Formatting Reference: https://github.com/dfinity/ICRC-1/pull/55/files#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5R268

| Function           | Type                                    |
| ------------------ | --------------------------------------- |
| `decodeSnsAccount` | `(accountString: string) => SnsAccount` |

Parameters:

- `snsAccountString`: string

### :factory: SnsGovernanceCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [listNeurons](#gear-listneurons)
- [listNervousSystemFunctions](#gear-listnervoussystemfunctions)
- [metadata](#gear-metadata)
- [nervousSystemParameters](#gear-nervoussystemparameters)
- [getNeuron](#gear-getneuron)
- [queryNeuron](#gear-queryneuron)
- [manageNeuron](#gear-manageneuron)
- [addNeuronPermissions](#gear-addneuronpermissions)
- [removeNeuronPermissions](#gear-removeneuronpermissions)
- [disburse](#gear-disburse)
- [startDissolving](#gear-startdissolving)
- [stopDissolving](#gear-stopdissolving)
- [stakeMaturity](#gear-stakematurity)
- [autoStakeMaturity](#gear-autostakematurity)
- [setDissolveTimestamp](#gear-setdissolvetimestamp)
- [increaseDissolveDelay](#gear-increasedissolvedelay)
- [setTopicFollowees](#gear-settopicfollowees)
- [refreshNeuron](#gear-refreshneuron)
- [claimNeuron](#gear-claimneuron)

##### :gear: create

Instantiate a canister to interact with the governance of a Sns project.

| Method   | Type                                                               |
| -------- | ------------------------------------------------------------------ |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsGovernanceCanister` |

Parameters:

- `options`: Miscellaneous options to initialize the canister. Its ID being the only mandatory parammeter.

##### :gear: listNeurons

List the neurons of the Sns

| Method        | Type                                                  |
| ------------- | ----------------------------------------------------- |
| `listNeurons` | `(params: SnsListNeuronsParams) => Promise<Neuron[]>` |

##### :gear: listNervousSystemFunctions

List Nervous System Functions
Neurons can follow other neurons in specific Nervous System Functions.

| Method                       | Type                                                                   |
| ---------------------------- | ---------------------------------------------------------------------- |
| `listNervousSystemFunctions` | `(params: QueryParams) => Promise<ListNervousSystemFunctionsResponse>` |

##### :gear: metadata

Get the Sns metadata (title, description, etc.)

| Method     | Type                                                    |
| ---------- | ------------------------------------------------------- |
| `metadata` | `(params: QueryParams) => Promise<GetMetadataResponse>` |

##### :gear: nervousSystemParameters

Get the Sns nervous system parameters (default followees, max dissolve delay, max number of neurons, etc.)

| Method                    | Type                                                        |
| ------------------------- | ----------------------------------------------------------- |
| `nervousSystemParameters` | `(params: QueryParams) => Promise<NervousSystemParameters>` |

##### :gear: getNeuron

Get the neuron of the Sns

| Method      | Type                                                              |
| ----------- | ----------------------------------------------------------------- |
| `getNeuron` | `(params: SnsGetNeuronParams and QueryParams) => Promise<Neuron>` |

##### :gear: queryNeuron

Same as `getNeuron` but returns undefined instead of raising error when not found.

| Method        | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| `queryNeuron` | `(params: SnsGetNeuronParams and QueryParams) => Promise<Neuron>` |

##### :gear: manageNeuron

Manage neuron. For advanced users.

| Method         | Type                                                       |
| -------------- | ---------------------------------------------------------- |
| `manageNeuron` | `(request: ManageNeuron) => Promise<ManageNeuronResponse>` |

##### :gear: addNeuronPermissions

Add permissions to a neuron for a specific principal

| Method                 | Type                                                    |
| ---------------------- | ------------------------------------------------------- |
| `addNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

##### :gear: removeNeuronPermissions

Remove permissions to a neuron for a specific principal

| Method                    | Type                                                    |
| ------------------------- | ------------------------------------------------------- |
| `removeNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

##### :gear: disburse

Disburse neuron on Account

| Method     | Type                                                 |
| ---------- | ---------------------------------------------------- |
| `disburse` | `(params: SnsDisburseNeuronParams) => Promise<void>` |

##### :gear: startDissolving

Start dissolving process of a neuron

| Method            | Type                                    |
| ----------------- | --------------------------------------- |
| `startDissolving` | `(neuronId: NeuronId) => Promise<void>` |

##### :gear: stopDissolving

Stop dissolving process of a neuron

| Method           | Type                                    |
| ---------------- | --------------------------------------- |
| `stopDissolving` | `(neuronId: NeuronId) => Promise<void>` |

##### :gear: stakeMaturity

Stake the maturity of a neuron.

| Method          | Type                                                                                |
| --------------- | ----------------------------------------------------------------------------------- |
| `stakeMaturity` | `({ neuronId, percentageToStake, }: SnsNeuronStakeMaturityParams) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to stake the maturity
- `percentageToStake`: Optional. Percentage of the current maturity to stake. If not provided, all of the neuron's current maturity will be staked.

##### :gear: autoStakeMaturity

Changes auto-stake maturity for a Neuron.

| Method              | Type                                                          |
| ------------------- | ------------------------------------------------------------- |
| `autoStakeMaturity` | `(params: SnsNeuronAutoStakeMaturityParams) => Promise<void>` |

Parameters:

- `neuronId`: The id of the neuron for which to request a change of the auto stake feature
- `autoStake`: `true` to enable the auto-stake maturity for this neuron, `false` to turn it off

##### :gear: setDissolveTimestamp

Increase dissolve delay of a neuron

| Method                 | Type                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `setDissolveTimestamp` | `(params: SnsSetDissolveTimestampParams) => Promise<void>` |

##### :gear: increaseDissolveDelay

Increase dissolve delay of a neuron

| Method                  | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `increaseDissolveDelay` | `(params: SnsIncreaseDissolveDelayParams) => Promise<void>` |

##### :gear: setTopicFollowees

Sets followees of a neuron for a specific Nervous System Function (topic)

| Method              | Type                                              |
| ------------------- | ------------------------------------------------- |
| `setTopicFollowees` | `(params: SnsSetTopicFollowees) => Promise<void>` |

##### :gear: refreshNeuron

Refresh neuron

| Method          | Type                                    |
| --------------- | --------------------------------------- |
| `refreshNeuron` | `(neuronId: NeuronId) => Promise<void>` |

##### :gear: claimNeuron

Claim neuron

| Method        | Type                                                                             |
| ------------- | -------------------------------------------------------------------------------- |
| `claimNeuron` | `({ memo, controller, subaccount, }: SnsClaimNeuronParams) => Promise<NeuronId>` |

### :factory: SnsLedgerCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [metadata](#gear-metadata)
- [transactionFee](#gear-transactionfee)
- [balance](#gear-balance)
- [transfer](#gear-transfer)

##### :gear: create

| Method   | Type                                                           |
| -------- | -------------------------------------------------------------- |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsLedgerCanister` |

##### :gear: metadata

The token metadata (name, symbol, etc.).

| Method     | Type                                                         |
| ---------- | ------------------------------------------------------------ |
| `metadata` | `(params: QueryParams) => Promise<SnsTokenMetadataResponse>` |

##### :gear: transactionFee

The ledger transaction fees.

| Method           | Type                                       |
| ---------------- | ------------------------------------------ |
| `transactionFee` | `(params: QueryParams) => Promise<bigint>` |

##### :gear: balance

Returns the balance of the given account.

| Method    | Type                                         |
| --------- | -------------------------------------------- |
| `balance` | `(params: BalanceParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to get the balance of an account.

##### :gear: transfer

Transfers tokens from the sender to the given account.

| Method     | Type                                          |
| ---------- | --------------------------------------------- |
| `transfer` | `(params: TransferParams) => Promise<bigint>` |

Parameters:

- `params`: The parameters to transfer tokens.

### :factory: SnsRootCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [listSnsCanisters](#gear-listsnscanisters)

##### :gear: create

| Method   | Type                                                         |
| -------- | ------------------------------------------------------------ |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsRootCanister` |

##### :gear: listSnsCanisters

List the canisters that are part of the Sns.

Source code: https://github.com/dfinity/ic/blob/master/rs/sns/root/src/lib.rs

| Method             | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| `listSnsCanisters` | `({ certified, }: { certified?: boolean; }) => Promise<ListSnsCanistersResponse>` |

### :factory: SnsIndexCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [getTransactions](#gear-gettransactions)

##### :gear: create

| Method   | Type                                                          |
| -------- | ------------------------------------------------------------- |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsIndexCanister` |

##### :gear: getTransactions

Get the transactions of an account

Always certified.
`get_account_transactions` needs to be called with an update
because the index canisters makes a call to the ledger canister to get the transaction data.
Index Canister only holds the transactions ids in state, not the whole transaction data.

| Method            | Type                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| `getTransactions` | `(params: GetAccountTransactionsParams) => Promise<GetTransactions>` |

### :factory: SnsSwapCanister

#### Constructors

`public`

Parameters:

- `id`
- `service`
- `certifiedService`

#### Methods

- [create](#gear-create)
- [state](#gear-state)
- [notifyParticipation](#gear-notifyparticipation)
- [getUserCommitment](#gear-getusercommitment)

##### :gear: create

| Method   | Type                                                         |
| -------- | ------------------------------------------------------------ |
| `create` | `(options: SnsCanisterOptions<_SERVICE>) => SnsSwapCanister` |

##### :gear: state

Get the state of the swap

| Method  | Type                                                 |
| ------- | ---------------------------------------------------- |
| `state` | `(params: QueryParams) => Promise<GetStateResponse>` |

##### :gear: notifyParticipation

Notify of the user participating in the swap

| Method                | Type                                                   |
| --------------------- | ------------------------------------------------------ |
| `notifyParticipation` | `(params: RefreshBuyerTokensRequest) => Promise<void>` |

##### :gear: getUserCommitment

Get user commitment

| Method              | Type                                                                    |
| ------------------- | ----------------------------------------------------------------------- |
| `getUserCommitment` | `(params: GetBuyerStateRequest and QueryParams) => Promise<BuyerState>` |

### :factory: SnsWrapper

Sns wrapper - notably used by NNS-dapp - ease the access to a particular Sns.
It knows all the Sns' canisters, wrap and enhance their available features.
A wrapper either performs query or update calls.

#### Constructors

`public`: Constructor to instantiate a Sns

Parameters:

- `__0`

#### Methods

- [listNeurons](#gear-listneurons)
- [listNervousSystemFunctions](#gear-listnervoussystemfunctions)
- [metadata](#gear-metadata)
- [nervousSystemParameters](#gear-nervoussystemparameters)
- [ledgerMetadata](#gear-ledgermetadata)
- [transactionFee](#gear-transactionfee)
- [balance](#gear-balance)
- [transfer](#gear-transfer)
- [getNeuron](#gear-getneuron)
- [queryNeuron](#gear-queryneuron)
- [nextNeuronAccount](#gear-nextneuronaccount)
- [stakeNeuron](#gear-stakeneuron)
- [getNeuronBalance](#gear-getneuronbalance)
- [addNeuronPermissions](#gear-addneuronpermissions)
- [refreshNeuron](#gear-refreshneuron)
- [claimNeuron](#gear-claimneuron)
- [removeNeuronPermissions](#gear-removeneuronpermissions)
- [disburse](#gear-disburse)
- [startDissolving](#gear-startdissolving)
- [stopDissolving](#gear-stopdissolving)
- [setDissolveTimestamp](#gear-setdissolvetimestamp)
- [increaseDissolveDelay](#gear-increasedissolvedelay)
- [setTopicFollowees](#gear-settopicfollowees)
- [swapState](#gear-swapstate)
- [notifyParticipation](#gear-notifyparticipation)
- [getUserCommitment](#gear-getusercommitment)
- [getTransactions](#gear-gettransactions)
- [stakeMaturity](#gear-stakematurity)
- [autoStakeMaturity](#gear-autostakematurity)

##### :gear: listNeurons

| Method        | Type                                                                     |
| ------------- | ------------------------------------------------------------------------ |
| `listNeurons` | `(params: Omit<SnsListNeuronsParams, "certified">) => Promise<Neuron[]>` |

##### :gear: listNervousSystemFunctions

| Method                       | Type                                                                                      |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `listNervousSystemFunctions` | `(params: Omit<QueryParams, "certified">) => Promise<ListNervousSystemFunctionsResponse>` |

##### :gear: metadata

| Method     | Type                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| `metadata` | `(params: Omit<QueryParams, "certified">) => Promise<[GetMetadataResponse, SnsTokenMetadataResponse]>` |

##### :gear: nervousSystemParameters

| Method                    | Type                                                                           |
| ------------------------- | ------------------------------------------------------------------------------ |
| `nervousSystemParameters` | `(params: Omit<QueryParams, "certified">) => Promise<NervousSystemParameters>` |

##### :gear: ledgerMetadata

| Method           | Type                                                                            |
| ---------------- | ------------------------------------------------------------------------------- |
| `ledgerMetadata` | `(params: Omit<QueryParams, "certified">) => Promise<SnsTokenMetadataResponse>` |

##### :gear: transactionFee

| Method           | Type                                                          |
| ---------------- | ------------------------------------------------------------- |
| `transactionFee` | `(params: Omit<QueryParams, "certified">) => Promise<bigint>` |

##### :gear: balance

| Method    | Type                                                            |
| --------- | --------------------------------------------------------------- |
| `balance` | `(params: Omit<BalanceParams, "certified">) => Promise<bigint>` |

##### :gear: transfer

| Method     | Type                                          |
| ---------- | --------------------------------------------- |
| `transfer` | `(params: TransferParams) => Promise<bigint>` |

##### :gear: getNeuron

| Method      | Type                                                                 |
| ----------- | -------------------------------------------------------------------- |
| `getNeuron` | `(params: Omit<SnsGetNeuronParams, "certified">) => Promise<Neuron>` |

##### :gear: queryNeuron

| Method        | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| `queryNeuron` | `(params: Omit<SnsGetNeuronParams, "certified">) => Promise<Neuron>` |

##### :gear: nextNeuronAccount

Returns the subaccount of the next neuron to be created.

The neuron account is a subaccount of the governance canister.
The subaccount is derived from the controller and an ascending index.
The id of the neuron is the subaccount.
If the neuron does not exist for that subaccount, then we use it for the next neuron.

The index is used in the memo of the transfer and when claiming the neuron.
This is how the backend can identify which neuron is being claimed.

| Method              | Type                                                                          |
| ------------------- | ----------------------------------------------------------------------------- |
| `nextNeuronAccount` | `(controller: Principal) => Promise<{ account: SnsAccount; index: bigint; }>` |

##### :gear: stakeNeuron

Stakes a neuron.

This is a convenient method that transfers the stake to the neuron subaccount and then claims the neuron.

| Method        | Type                                                                             |
| ------------- | -------------------------------------------------------------------------------- |
| `stakeNeuron` | `({ stakeE8s, source, controller, }: SnsStakeNeuronParams) => Promise<NeuronId>` |

##### :gear: getNeuronBalance

| Method             | Type                                      |
| ------------------ | ----------------------------------------- |
| `getNeuronBalance` | `(neuronId: NeuronId) => Promise<bigint>` |

##### :gear: addNeuronPermissions

| Method                 | Type                                                    |
| ---------------------- | ------------------------------------------------------- |
| `addNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

##### :gear: refreshNeuron

| Method          | Type                                    |
| --------------- | --------------------------------------- |
| `refreshNeuron` | `(neuronId: NeuronId) => Promise<void>` |

##### :gear: claimNeuron

| Method        | Type                                                  |
| ------------- | ----------------------------------------------------- |
| `claimNeuron` | `(params: SnsClaimNeuronParams) => Promise<NeuronId>` |

##### :gear: removeNeuronPermissions

| Method                    | Type                                                    |
| ------------------------- | ------------------------------------------------------- |
| `removeNeuronPermissions` | `(params: SnsNeuronPermissionsParams) => Promise<void>` |

##### :gear: disburse

| Method     | Type                                                 |
| ---------- | ---------------------------------------------------- |
| `disburse` | `(params: SnsDisburseNeuronParams) => Promise<void>` |

##### :gear: startDissolving

| Method            | Type                                    |
| ----------------- | --------------------------------------- |
| `startDissolving` | `(neuronId: NeuronId) => Promise<void>` |

##### :gear: stopDissolving

| Method           | Type                                    |
| ---------------- | --------------------------------------- |
| `stopDissolving` | `(neuronId: NeuronId) => Promise<void>` |

##### :gear: setDissolveTimestamp

| Method                 | Type                                                       |
| ---------------------- | ---------------------------------------------------------- |
| `setDissolveTimestamp` | `(params: SnsSetDissolveTimestampParams) => Promise<void>` |

##### :gear: increaseDissolveDelay

| Method                  | Type                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `increaseDissolveDelay` | `(params: SnsIncreaseDissolveDelayParams) => Promise<void>` |

##### :gear: setTopicFollowees

| Method              | Type                                              |
| ------------------- | ------------------------------------------------- |
| `setTopicFollowees` | `(params: SnsSetTopicFollowees) => Promise<void>` |

##### :gear: swapState

| Method      | Type                                                                    |
| ----------- | ----------------------------------------------------------------------- |
| `swapState` | `(params: Omit<QueryParams, "certified">) => Promise<GetStateResponse>` |

##### :gear: notifyParticipation

| Method                | Type                                                   |
| --------------------- | ------------------------------------------------------ |
| `notifyParticipation` | `(params: RefreshBuyerTokensRequest) => Promise<void>` |

##### :gear: getUserCommitment

| Method              | Type                                                    |
| ------------------- | ------------------------------------------------------- |
| `getUserCommitment` | `(params: GetBuyerStateRequest) => Promise<BuyerState>` |

##### :gear: getTransactions

| Method            | Type                                                                 |
| ----------------- | -------------------------------------------------------------------- |
| `getTransactions` | `(params: GetAccountTransactionsParams) => Promise<GetTransactions>` |

##### :gear: stakeMaturity

| Method          | Type                                                      |
| --------------- | --------------------------------------------------------- |
| `stakeMaturity` | `(params: SnsNeuronStakeMaturityParams) => Promise<void>` |

##### :gear: autoStakeMaturity

| Method              | Type                                                          |
| ------------------- | ------------------------------------------------------------- |
| `autoStakeMaturity` | `(params: SnsNeuronAutoStakeMaturityParams) => Promise<void>` |

<!-- TSDOC_END -->
