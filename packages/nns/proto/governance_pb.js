// source: governance.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var types_pb = require('./types_pb.js');
goog.object.extend(proto, types_pb);
var base_types_pb = require('./base_types_pb.js');
goog.object.extend(proto, base_types_pb);
var ledger_pb = require('./ledger_pb.js');
goog.object.extend(proto, ledger_pb);
var sns_swap_pb = require('./sns_swap_pb.js');
goog.object.extend(proto, sns_swap_pb);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.ChangeCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ApproveGenesisKYC', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Ballot', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.BallotInfo', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.ResultCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Empty', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ExecuteNnsFunction', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Governance', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.CommandCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.GovernanceError', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.GovernanceError.ErrorType', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.KnownNeuron', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.KnownNeuronData', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ListNeurons', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ListNeuronsResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ListProposalInfo', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ListProposalInfoResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.ByCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.CommandCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Configure', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.OperationCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Follow', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Merge', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.NeuronIdOrSubaccountCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.Split', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.CommandCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Motion', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.NetworkEconomics', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Neuron', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Neuron.DissolveStateCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Neuron.Followees', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.NeuronInfo', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.NeuronStakeTransfer', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.NeuronState', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.NnsFunction', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.NodeProvider', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Proposal', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Proposal.ActionCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ProposalData', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ProposalInfo', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ProposalRewardStatus', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.ProposalStatus', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.RewardEvent', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.RewardNodeProvider', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardModeCase', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.RewardNodeProviders', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.SetDefaultFollowees', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Tally', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Topic', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.UpdateNodeProvider', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.Vote', null, global);
goog.exportSymbol('proto.ic_nns_governance.pb.v1.WaitForQuietState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.NodeProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.NodeProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.NodeProvider.displayName = 'proto.ic_nns_governance.pb.v1.NodeProvider';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.UpdateNodeProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.UpdateNodeProvider.displayName = 'proto.ic_nns_governance.pb.v1.UpdateNodeProvider';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.BallotInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.BallotInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.BallotInfo.displayName = 'proto.ic_nns_governance.pb.v1.BallotInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.NeuronInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.NeuronInfo.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.NeuronInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.NeuronInfo.displayName = 'proto.ic_nns_governance.pb.v1.NeuronInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.NeuronStakeTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.displayName = 'proto.ic_nns_governance.pb.v1.NeuronStakeTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Neuron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.Neuron.repeatedFields_, proto.ic_nns_governance.pb.v1.Neuron.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Neuron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Neuron.displayName = 'proto.ic_nns_governance.pb.v1.Neuron';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.Neuron.Followees.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Neuron.Followees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Neuron.Followees.displayName = 'proto.ic_nns_governance.pb.v1.Neuron.Followees';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ExecuteNnsFunction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.displayName = 'proto.ic_nns_governance.pb.v1.ExecuteNnsFunction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Motion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Motion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Motion.displayName = 'proto.ic_nns_governance.pb.v1.Motion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ApproveGenesisKYC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.displayName = 'proto.ic_nns_governance.pb.v1.ApproveGenesisKYC';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.displayName = 'proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.RewardNodeProvider.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.RewardNodeProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.RewardNodeProvider.displayName = 'proto.ic_nns_governance.pb.v1.RewardNodeProvider';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.displayName = 'proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.displayName = 'proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.RewardNodeProviders.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.RewardNodeProviders, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.RewardNodeProviders.displayName = 'proto.ic_nns_governance.pb.v1.RewardNodeProviders';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.SetDefaultFollowees, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.SetDefaultFollowees.displayName = 'proto.ic_nns_governance.pb.v1.SetDefaultFollowees';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.displayName = 'proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Proposal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Proposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Proposal.displayName = 'proto.ic_nns_governance.pb.v1.Proposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Empty.displayName = 'proto.ic_nns_governance.pb.v1.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.Configure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.Configure';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.Split, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.Split.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.Split';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.Merge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.Merge';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.Follow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.Follow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.displayName = 'proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.GovernanceError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.GovernanceError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.GovernanceError.displayName = 'proto.ic_nns_governance.pb.v1.GovernanceError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Ballot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Ballot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Ballot.displayName = 'proto.ic_nns_governance.pb.v1.Ballot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Tally = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Tally, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Tally.displayName = 'proto.ic_nns_governance.pb.v1.Tally';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ProposalData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ProposalData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ProposalData.displayName = 'proto.ic_nns_governance.pb.v1.ProposalData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.WaitForQuietState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.WaitForQuietState.displayName = 'proto.ic_nns_governance.pb.v1.WaitForQuietState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ProposalInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ProposalInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ProposalInfo.displayName = 'proto.ic_nns_governance.pb.v1.ProposalInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.NetworkEconomics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.NetworkEconomics.displayName = 'proto.ic_nns_governance.pb.v1.NetworkEconomics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.RewardEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.RewardEvent.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.RewardEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.RewardEvent.displayName = 'proto.ic_nns_governance.pb.v1.RewardEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.KnownNeuron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.KnownNeuron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.KnownNeuron.displayName = 'proto.ic_nns_governance.pb.v1.KnownNeuron';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.KnownNeuronData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.KnownNeuronData.displayName = 'proto.ic_nns_governance.pb.v1.KnownNeuronData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Governance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.Governance.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Governance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Governance.displayName = 'proto.ic_nns_governance.pb.v1.Governance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.displayName = 'proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.displayName = 'proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ListProposalInfo.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ListProposalInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ListProposalInfo.displayName = 'proto.ic_nns_governance.pb.v1.ListProposalInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ListProposalInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.displayName = 'proto.ic_nns_governance.pb.v1.ListProposalInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ListNeurons = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ListNeurons.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ListNeurons, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ListNeurons.displayName = 'proto.ic_nns_governance.pb.v1.ListNeurons';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ListNeuronsResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ListNeuronsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ListNeuronsResponse.displayName = 'proto.ic_nns_governance.pb.v1.ListNeuronsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.displayName = 'proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.displayName = 'proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.displayName = 'proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.oneofGroups_);
};
goog.inherits(proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.displayName = 'proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.repeatedFields_, null);
};
goog.inherits(proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.displayName = 'proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.NodeProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.NodeProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NodeProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    rewardAccount: (f = msg.getRewardAccount()) && ledger_pb.AccountIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.NodeProvider;
  return proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.NodeProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new ledger_pb.AccountIdentifier;
      reader.readMessage(value,ledger_pb.AccountIdentifier.deserializeBinaryFromReader);
      msg.setRewardAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.NodeProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.NodeProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NodeProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getRewardAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ledger_pb.AccountIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.getId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ic_ledger.pb.v1.AccountIdentifier reward_account = 2;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.getRewardAccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, ledger_pb.AccountIdentifier, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.setRewardAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.clearRewardAccount = function() {
  return this.setRewardAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.NodeProvider.prototype.hasRewardAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.UpdateNodeProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.UpdateNodeProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    rewardAccount: (f = msg.getRewardAccount()) && ledger_pb.AccountIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.UpdateNodeProvider}
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.UpdateNodeProvider;
  return proto.ic_nns_governance.pb.v1.UpdateNodeProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.UpdateNodeProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.UpdateNodeProvider}
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ledger_pb.AccountIdentifier;
      reader.readMessage(value,ledger_pb.AccountIdentifier.deserializeBinaryFromReader);
      msg.setRewardAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.UpdateNodeProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.UpdateNodeProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRewardAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ledger_pb.AccountIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_ledger.pb.v1.AccountIdentifier reward_account = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.prototype.getRewardAccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, ledger_pb.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.UpdateNodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.prototype.setRewardAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.UpdateNodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.prototype.clearRewardAccount = function() {
  return this.setRewardAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.UpdateNodeProvider.prototype.hasRewardAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.BallotInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.BallotInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.BallotInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalId: (f = msg.getProposalId()) && types_pb.ProposalId.toObject(includeInstance, f),
    vote: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.BallotInfo}
 */
proto.ic_nns_governance.pb.v1.BallotInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.BallotInfo;
  return proto.ic_nns_governance.pb.v1.BallotInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.BallotInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.BallotInfo}
 */
proto.ic_nns_governance.pb.v1.BallotInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.ProposalId;
      reader.readMessage(value,types_pb.ProposalId.deserializeBinaryFromReader);
      msg.setProposalId(value);
      break;
    case 2:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.Vote} */ (reader.readEnum());
      msg.setVote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.BallotInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.BallotInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.BallotInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.ProposalId.serializeBinaryToWriter
    );
  }
  f = message.getVote();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.ProposalId proposal_id = 1;
 * @return {?proto.ic_nns_common.pb.v1.ProposalId}
 */
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.getProposalId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.ProposalId} */ (
    jspb.Message.getWrapperField(this, types_pb.ProposalId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.ProposalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.BallotInfo} returns this
*/
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.setProposalId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.BallotInfo} returns this
 */
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.clearProposalId = function() {
  return this.setProposalId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.hasProposalId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vote vote = 2;
 * @return {!proto.ic_nns_governance.pb.v1.Vote}
 */
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.getVote = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.Vote} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.Vote} value
 * @return {!proto.ic_nns_governance.pb.v1.BallotInfo} returns this
 */
proto.ic_nns_governance.pb.v1.BallotInfo.prototype.setVote = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.NeuronInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.NeuronInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    retrievedAtTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ageSeconds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dissolveDelaySeconds: jspb.Message.getFieldWithDefault(msg, 4, 0),
    recentBallotsList: jspb.Message.toObjectList(msg.getRecentBallotsList(),
    proto.ic_nns_governance.pb.v1.BallotInfo.toObject, includeInstance),
    votingPower: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 7, 0),
    stakeE8s: jspb.Message.getFieldWithDefault(msg, 8, 0),
    joinedCommunityFundTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 9, 0),
    knownNeuronData: (f = msg.getKnownNeuronData()) && proto.ic_nns_governance.pb.v1.KnownNeuronData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.NeuronInfo;
  return proto.ic_nns_governance.pb.v1.NeuronInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.NeuronInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRetrievedAtTimestampSeconds(value);
      break;
    case 2:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.NeuronState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAgeSeconds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolveDelaySeconds(value);
      break;
    case 5:
      var value = new proto.ic_nns_governance.pb.v1.BallotInfo;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.BallotInfo.deserializeBinaryFromReader);
      msg.addRecentBallots(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVotingPower(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedTimestampSeconds(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStakeE8s(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setJoinedCommunityFundTimestampSeconds(value);
      break;
    case 10:
      var value = new proto.ic_nns_governance.pb.v1.KnownNeuronData;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.KnownNeuronData.deserializeBinaryFromReader);
      msg.setKnownNeuronData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.NeuronInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.NeuronInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRetrievedAtTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAgeSeconds();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getDissolveDelaySeconds();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRecentBallotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ic_nns_governance.pb.v1.BallotInfo.serializeBinaryToWriter
    );
  }
  f = message.getVotingPower();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getCreatedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getStakeE8s();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getKnownNeuronData();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ic_nns_governance.pb.v1.KnownNeuronData.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 retrieved_at_timestamp_seconds = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getRetrievedAtTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setRetrievedAtTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional NeuronState state = 2;
 * @return {!proto.ic_nns_governance.pb.v1.NeuronState}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getState = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.NeuronState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.NeuronState} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 age_seconds = 3;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getAgeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setAgeSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 dissolve_delay_seconds = 4;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getDissolveDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setDissolveDelaySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated BallotInfo recent_ballots = 5;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.BallotInfo>}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getRecentBallotsList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.BallotInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.BallotInfo, 5));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.BallotInfo>} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
*/
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setRecentBallotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.BallotInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.BallotInfo}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.addRecentBallots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ic_nns_governance.pb.v1.BallotInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.clearRecentBallotsList = function() {
  return this.setRecentBallotsList([]);
};


/**
 * optional uint64 voting_power = 6;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setVotingPower = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 created_timestamp_seconds = 7;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getCreatedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setCreatedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 stake_e8s = 8;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getStakeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setStakeE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 joined_community_fund_timestamp_seconds = 9;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getJoinedCommunityFundTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setJoinedCommunityFundTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.clearJoinedCommunityFundTimestampSeconds = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.hasJoinedCommunityFundTimestampSeconds = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional KnownNeuronData known_neuron_data = 10;
 * @return {?proto.ic_nns_governance.pb.v1.KnownNeuronData}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.getKnownNeuronData = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.KnownNeuronData} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.KnownNeuronData, 10));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.KnownNeuronData|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
*/
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.setKnownNeuronData = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronInfo} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.clearKnownNeuronData = function() {
  return this.setKnownNeuronData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.NeuronInfo.prototype.hasKnownNeuronData = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferTimestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    from: (f = msg.getFrom()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    fromSubaccount: msg.getFromSubaccount_asB64(),
    toSubaccount: msg.getToSubaccount_asB64(),
    neuronStakeE8s: jspb.Message.getFieldWithDefault(msg, 5, 0),
    blockHeight: jspb.Message.getFieldWithDefault(msg, 6, 0),
    memo: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.NeuronStakeTransfer;
  return proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransferTimestamp(value);
      break;
    case 2:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFromSubaccount(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToSubaccount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronStakeE8s(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getFromSubaccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getToSubaccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getNeuronStakeE8s();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMemo();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 transfer_timestamp = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getTransferTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.setTransferTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ic_base_types.pb.v1.PrincipalId from = 2;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getFrom = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 2));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
*/
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes from_subaccount = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getFromSubaccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes from_subaccount = 3;
 * This is a type-conversion wrapper around `getFromSubaccount()`
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getFromSubaccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFromSubaccount()));
};


/**
 * optional bytes from_subaccount = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFromSubaccount()`
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getFromSubaccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFromSubaccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.setFromSubaccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes to_subaccount = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getToSubaccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes to_subaccount = 4;
 * This is a type-conversion wrapper around `getToSubaccount()`
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getToSubaccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToSubaccount()));
};


/**
 * optional bytes to_subaccount = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToSubaccount()`
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getToSubaccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToSubaccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.setToSubaccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional uint64 neuron_stake_e8s = 5;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getNeuronStakeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.setNeuronStakeE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 block_height = 6;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.setBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 memo = 7;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.getMemo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} returns this
 */
proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.prototype.setMemo = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.Neuron.repeatedFields_ = [4,12];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.Neuron.oneofGroups_ = [[9,10]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.DissolveStateCase = {
  DISSOLVE_STATE_NOT_SET: 0,
  WHEN_DISSOLVED_TIMESTAMP_SECONDS: 9,
  DISSOLVE_DELAY_SECONDS: 10
};

/**
 * @return {proto.ic_nns_governance.pb.v1.Neuron.DissolveStateCase}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getDissolveStateCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.Neuron.DissolveStateCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.Neuron.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Neuron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Neuron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Neuron.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && types_pb.NeuronId.toObject(includeInstance, f),
    account: msg.getAccount_asB64(),
    controller: (f = msg.getController()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    hotKeysList: jspb.Message.toObjectList(msg.getHotKeysList(),
    base_types_pb.PrincipalId.toObject, includeInstance),
    cachedNeuronStakeE8s: jspb.Message.getFieldWithDefault(msg, 5, 0),
    neuronFeesE8s: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createdTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 7, 0),
    agingSinceTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 8, 0),
    whenDissolvedTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 9, 0),
    dissolveDelaySeconds: jspb.Message.getFieldWithDefault(msg, 10, 0),
    followeesMap: (f = msg.getFolloweesMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.Neuron.Followees.toObject) : [],
    recentBallotsList: jspb.Message.toObjectList(msg.getRecentBallotsList(),
    proto.ic_nns_governance.pb.v1.BallotInfo.toObject, includeInstance),
    kycVerified: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    transfer: (f = msg.getTransfer()) && proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.toObject(includeInstance, f),
    maturityE8sEquivalent: jspb.Message.getFieldWithDefault(msg, 15, 0),
    notForProfit: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    joinedCommunityFundTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 17, 0),
    knownNeuronData: (f = msg.getKnownNeuronData()) && proto.ic_nns_governance.pb.v1.KnownNeuronData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron}
 */
proto.ic_nns_governance.pb.v1.Neuron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Neuron;
  return proto.ic_nns_governance.pb.v1.Neuron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Neuron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron}
 */
proto.ic_nns_governance.pb.v1.Neuron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccount(value);
      break;
    case 3:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setController(value);
      break;
    case 4:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.addHotKeys(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCachedNeuronStakeE8s(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronFeesE8s(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatedTimestampSeconds(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAgingSinceTimestampSeconds(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWhenDissolvedTimestampSeconds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolveDelaySeconds(value);
      break;
    case 11:
      var value = msg.getFolloweesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.Neuron.Followees.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.Neuron.Followees());
         });
      break;
    case 12:
      var value = new proto.ic_nns_governance.pb.v1.BallotInfo;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.BallotInfo.deserializeBinaryFromReader);
      msg.addRecentBallots(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKycVerified(value);
      break;
    case 14:
      var value = new proto.ic_nns_governance.pb.v1.NeuronStakeTransfer;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaturityE8sEquivalent(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNotForProfit(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setJoinedCommunityFundTimestampSeconds(value);
      break;
    case 18:
      var value = new proto.ic_nns_governance.pb.v1.KnownNeuronData;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.KnownNeuronData.deserializeBinaryFromReader);
      msg.setKnownNeuronData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Neuron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Neuron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Neuron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
  f = message.getAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getController();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getHotKeysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getCachedNeuronStakeE8s();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getNeuronFeesE8s();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getCreatedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getAgingSinceTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getFolloweesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.Neuron.Followees.serializeBinaryToWriter);
  }
  f = message.getRecentBallotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.ic_nns_governance.pb.v1.BallotInfo.serializeBinaryToWriter
    );
  }
  f = message.getKycVerified();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.serializeBinaryToWriter
    );
  }
  f = message.getMaturityE8sEquivalent();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
  f = message.getNotForProfit();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getKnownNeuronData();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ic_nns_governance.pb.v1.KnownNeuronData.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Neuron.Followees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Neuron.Followees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.toObject = function(includeInstance, msg) {
  var f, obj = {
    followeesList: jspb.Message.toObjectList(msg.getFolloweesList(),
    types_pb.NeuronId.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron.Followees}
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Neuron.Followees;
  return proto.ic_nns_governance.pb.v1.Neuron.Followees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Neuron.Followees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron.Followees}
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.addFollowees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Neuron.Followees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Neuron.Followees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFolloweesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ic_nns_common.pb.v1.NeuronId followees = 1;
 * @return {!Array<!proto.ic_nns_common.pb.v1.NeuronId>}
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.prototype.getFolloweesList = function() {
  return /** @type{!Array<!proto.ic_nns_common.pb.v1.NeuronId>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {!Array<!proto.ic_nns_common.pb.v1.NeuronId>} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron.Followees} returns this
*/
proto.ic_nns_governance.pb.v1.Neuron.Followees.prototype.setFolloweesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_nns_common.pb.v1.NeuronId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.prototype.addFollowees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_nns_common.pb.v1.NeuronId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron.Followees} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.Followees.prototype.clearFolloweesList = function() {
  return this.setFolloweesList([]);
};


/**
 * optional ic_nns_common.pb.v1.NeuronId id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
*/
proto.ic_nns_governance.pb.v1.Neuron.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes account = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes account = 2;
 * This is a type-conversion wrapper around `getAccount()`
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccount()));
};


/**
 * optional bytes account = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccount()`
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setAccount = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional ic_base_types.pb.v1.PrincipalId controller = 3;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getController = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 3));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
*/
proto.ic_nns_governance.pb.v1.Neuron.prototype.setController = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearController = function() {
  return this.setController(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.hasController = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ic_base_types.pb.v1.PrincipalId hot_keys = 4;
 * @return {!Array<!proto.ic_base_types.pb.v1.PrincipalId>}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getHotKeysList = function() {
  return /** @type{!Array<!proto.ic_base_types.pb.v1.PrincipalId>} */ (
    jspb.Message.getRepeatedWrapperField(this, base_types_pb.PrincipalId, 4));
};


/**
 * @param {!Array<!proto.ic_base_types.pb.v1.PrincipalId>} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
*/
proto.ic_nns_governance.pb.v1.Neuron.prototype.setHotKeysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ic_base_types.pb.v1.PrincipalId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.addHotKeys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ic_base_types.pb.v1.PrincipalId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearHotKeysList = function() {
  return this.setHotKeysList([]);
};


/**
 * optional uint64 cached_neuron_stake_e8s = 5;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getCachedNeuronStakeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setCachedNeuronStakeE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 neuron_fees_e8s = 6;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getNeuronFeesE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setNeuronFeesE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 created_timestamp_seconds = 7;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getCreatedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setCreatedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 aging_since_timestamp_seconds = 8;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getAgingSinceTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setAgingSinceTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 when_dissolved_timestamp_seconds = 9;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getWhenDissolvedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setWhenDissolvedTimestampSeconds = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.ic_nns_governance.pb.v1.Neuron.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearWhenDissolvedTimestampSeconds = function() {
  return jspb.Message.setOneofField(this, 9, proto.ic_nns_governance.pb.v1.Neuron.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.hasWhenDissolvedTimestampSeconds = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint64 dissolve_delay_seconds = 10;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getDissolveDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setDissolveDelaySeconds = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.ic_nns_governance.pb.v1.Neuron.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearDissolveDelaySeconds = function() {
  return jspb.Message.setOneofField(this, 10, proto.ic_nns_governance.pb.v1.Neuron.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.hasDissolveDelaySeconds = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * map<int32, Followees> followees = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron.Followees>}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getFolloweesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron.Followees>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.Neuron.Followees));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearFolloweesMap = function() {
  this.getFolloweesMap().clear();
  return this;};


/**
 * repeated BallotInfo recent_ballots = 12;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.BallotInfo>}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getRecentBallotsList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.BallotInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.BallotInfo, 12));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.BallotInfo>} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
*/
proto.ic_nns_governance.pb.v1.Neuron.prototype.setRecentBallotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.BallotInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.BallotInfo}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.addRecentBallots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.ic_nns_governance.pb.v1.BallotInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearRecentBallotsList = function() {
  return this.setRecentBallotsList([]);
};


/**
 * optional bool kyc_verified = 13;
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getKycVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setKycVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional NeuronStakeTransfer transfer = 14;
 * @return {?proto.ic_nns_governance.pb.v1.NeuronStakeTransfer}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getTransfer = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.NeuronStakeTransfer} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.NeuronStakeTransfer, 14));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.NeuronStakeTransfer|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
*/
proto.ic_nns_governance.pb.v1.Neuron.prototype.setTransfer = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint64 maturity_e8s_equivalent = 15;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getMaturityE8sEquivalent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setMaturityE8sEquivalent = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool not_for_profit = 16;
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getNotForProfit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setNotForProfit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional uint64 joined_community_fund_timestamp_seconds = 17;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getJoinedCommunityFundTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.setJoinedCommunityFundTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearJoinedCommunityFundTimestampSeconds = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.hasJoinedCommunityFundTimestampSeconds = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional KnownNeuronData known_neuron_data = 18;
 * @return {?proto.ic_nns_governance.pb.v1.KnownNeuronData}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.getKnownNeuronData = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.KnownNeuronData} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.KnownNeuronData, 18));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.KnownNeuronData|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
*/
proto.ic_nns_governance.pb.v1.Neuron.prototype.setKnownNeuronData = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Neuron} returns this
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.clearKnownNeuronData = function() {
  return this.setKnownNeuronData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Neuron.prototype.hasKnownNeuronData = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ExecuteNnsFunction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.toObject = function(includeInstance, msg) {
  var f, obj = {
    nnsFunction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ExecuteNnsFunction}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ExecuteNnsFunction;
  return proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ExecuteNnsFunction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ExecuteNnsFunction}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.NnsFunction} */ (reader.readEnum());
      msg.setNnsFunction(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ExecuteNnsFunction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNnsFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional NnsFunction nns_function = 1;
 * @return {!proto.ic_nns_governance.pb.v1.NnsFunction}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.getNnsFunction = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.NnsFunction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.NnsFunction} value
 * @return {!proto.ic_nns_governance.pb.v1.ExecuteNnsFunction} returns this
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.setNnsFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_nns_governance.pb.v1.ExecuteNnsFunction} returns this
 */
proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Motion.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Motion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Motion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Motion.toObject = function(includeInstance, msg) {
  var f, obj = {
    motionText: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Motion}
 */
proto.ic_nns_governance.pb.v1.Motion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Motion;
  return proto.ic_nns_governance.pb.v1.Motion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Motion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Motion}
 */
proto.ic_nns_governance.pb.v1.Motion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMotionText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Motion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Motion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Motion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Motion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMotionText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string motion_text = 1;
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.Motion.prototype.getMotionText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_nns_governance.pb.v1.Motion} returns this
 */
proto.ic_nns_governance.pb.v1.Motion.prototype.setMotionText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ApproveGenesisKYC} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.toObject = function(includeInstance, msg) {
  var f, obj = {
    principalsList: jspb.Message.toObjectList(msg.getPrincipalsList(),
    base_types_pb.PrincipalId.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ApproveGenesisKYC}
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ApproveGenesisKYC;
  return proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ApproveGenesisKYC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ApproveGenesisKYC}
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.addPrincipals(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ApproveGenesisKYC} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrincipalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ic_base_types.pb.v1.PrincipalId principals = 1;
 * @return {!Array<!proto.ic_base_types.pb.v1.PrincipalId>}
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.prototype.getPrincipalsList = function() {
  return /** @type{!Array<!proto.ic_base_types.pb.v1.PrincipalId>} */ (
    jspb.Message.getRepeatedWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {!Array<!proto.ic_base_types.pb.v1.PrincipalId>} value
 * @return {!proto.ic_nns_governance.pb.v1.ApproveGenesisKYC} returns this
*/
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.prototype.setPrincipalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_base_types.pb.v1.PrincipalId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.prototype.addPrincipals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_base_types.pb.v1.PrincipalId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ApproveGenesisKYC} returns this
 */
proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.prototype.clearPrincipalsList = function() {
  return this.setPrincipalsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.ChangeCase = {
  CHANGE_NOT_SET: 0,
  TO_ADD: 1,
  TO_REMOVE: 2
};

/**
 * @return {proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.ChangeCase}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.getChangeCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.ChangeCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    toAdd: (f = msg.getToAdd()) && proto.ic_nns_governance.pb.v1.NodeProvider.toObject(includeInstance, f),
    toRemove: (f = msg.getToRemove()) && proto.ic_nns_governance.pb.v1.NodeProvider.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider;
  return proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.NodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinaryFromReader);
      msg.setToAdd(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.NodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinaryFromReader);
      msg.setToRemove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToAdd();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.NodeProvider.serializeBinaryToWriter
    );
  }
  f = message.getToRemove();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.NodeProvider.serializeBinaryToWriter
    );
  }
};


/**
 * optional NodeProvider to_add = 1;
 * @return {?proto.ic_nns_governance.pb.v1.NodeProvider}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.getToAdd = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.NodeProvider} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.NodeProvider, 1));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.NodeProvider|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.setToAdd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.clearToAdd = function() {
  return this.setToAdd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.hasToAdd = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NodeProvider to_remove = 2;
 * @return {?proto.ic_nns_governance.pb.v1.NodeProvider}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.getToRemove = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.NodeProvider} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.NodeProvider, 2));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.NodeProvider|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.setToRemove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.clearToRemove = function() {
  return this.setToRemove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.prototype.hasToRemove = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.oneofGroups_ = [[4,5]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardModeCase = {
  REWARD_MODE_NOT_SET: 0,
  REWARD_TO_NEURON: 4,
  REWARD_TO_ACCOUNT: 5
};

/**
 * @return {proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardModeCase}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.getRewardModeCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardModeCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.RewardNodeProvider.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.RewardNodeProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeProvider: (f = msg.getNodeProvider()) && proto.ic_nns_governance.pb.v1.NodeProvider.toObject(includeInstance, f),
    amountE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    rewardToNeuron: (f = msg.getRewardToNeuron()) && proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.toObject(includeInstance, f),
    rewardToAccount: (f = msg.getRewardToAccount()) && proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.RewardNodeProvider;
  return proto.ic_nns_governance.pb.v1.RewardNodeProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.NodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinaryFromReader);
      msg.setNodeProvider(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountE8s(value);
      break;
    case 4:
      var value = new proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.deserializeBinaryFromReader);
      msg.setRewardToNeuron(value);
      break;
    case 5:
      var value = new proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.deserializeBinaryFromReader);
      msg.setRewardToAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.RewardNodeProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeProvider();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.NodeProvider.serializeBinaryToWriter
    );
  }
  f = message.getAmountE8s();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getRewardToNeuron();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.serializeBinaryToWriter
    );
  }
  f = message.getRewardToAccount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.toObject = function(includeInstance, msg) {
  var f, obj = {
    dissolveDelaySeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron;
  return proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolveDelaySeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDissolveDelaySeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 dissolve_delay_seconds = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.prototype.getDissolveDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron.prototype.setDissolveDelaySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    toAccount: (f = msg.getToAccount()) && ledger_pb.AccountIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount;
  return proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ledger_pb.AccountIdentifier;
      reader.readMessage(value,ledger_pb.AccountIdentifier.deserializeBinaryFromReader);
      msg.setToAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ledger_pb.AccountIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_ledger.pb.v1.AccountIdentifier to_account = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.prototype.getToAccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, ledger_pb.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount} returns this
*/
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.prototype.setToAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.prototype.clearToAccount = function() {
  return this.setToAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount.prototype.hasToAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NodeProvider node_provider = 1;
 * @return {?proto.ic_nns_governance.pb.v1.NodeProvider}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.getNodeProvider = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.NodeProvider} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.NodeProvider, 1));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.NodeProvider|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.setNodeProvider = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.clearNodeProvider = function() {
  return this.setNodeProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.hasNodeProvider = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount_e8s = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.getAmountE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.setAmountE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional RewardToNeuron reward_to_neuron = 4;
 * @return {?proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.getRewardToNeuron = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron, 4));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToNeuron|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.setRewardToNeuron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ic_nns_governance.pb.v1.RewardNodeProvider.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.clearRewardToNeuron = function() {
  return this.setRewardToNeuron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.hasRewardToNeuron = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RewardToAccount reward_to_account = 5;
 * @return {?proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.getRewardToAccount = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount, 5));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.RewardNodeProvider.RewardToAccount|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} returns this
*/
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.setRewardToAccount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ic_nns_governance.pb.v1.RewardNodeProvider.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.clearRewardToAccount = function() {
  return this.setRewardToAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProvider.prototype.hasRewardToAccount = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.RewardNodeProviders.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProviders} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.toObject = function(includeInstance, msg) {
  var f, obj = {
    rewardsList: jspb.Message.toObjectList(msg.getRewardsList(),
    proto.ic_nns_governance.pb.v1.RewardNodeProvider.toObject, includeInstance),
    useRegistryDerivedRewards: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProviders}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.RewardNodeProviders;
  return proto.ic_nns_governance.pb.v1.RewardNodeProviders.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProviders} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProviders}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.RewardNodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.RewardNodeProvider.deserializeBinaryFromReader);
      msg.addRewards(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseRegistryDerivedRewards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.RewardNodeProviders.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProviders} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRewardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.RewardNodeProvider.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated RewardNodeProvider rewards = 1;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.RewardNodeProvider>}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.getRewardsList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.RewardNodeProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.RewardNodeProvider, 1));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.RewardNodeProvider>} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProviders} returns this
*/
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.setRewardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.addRewards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_nns_governance.pb.v1.RewardNodeProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProviders} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.clearRewardsList = function() {
  return this.setRewardsList([]);
};


/**
 * optional bool use_registry_derived_rewards = 2;
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.getUseRegistryDerivedRewards = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProviders} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.setUseRegistryDerivedRewards = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProviders} returns this
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.clearUseRegistryDerivedRewards = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.RewardNodeProviders.prototype.hasUseRegistryDerivedRewards = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.SetDefaultFollowees.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.SetDefaultFollowees} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultFolloweesMap: (f = msg.getDefaultFolloweesMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.Neuron.Followees.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.SetDefaultFollowees}
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.SetDefaultFollowees;
  return proto.ic_nns_governance.pb.v1.SetDefaultFollowees.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.SetDefaultFollowees} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.SetDefaultFollowees}
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getDefaultFolloweesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.Neuron.Followees.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.Neuron.Followees());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.SetDefaultFollowees.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.SetDefaultFollowees} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultFolloweesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.Neuron.Followees.serializeBinaryToWriter);
  }
};


/**
 * map<int32, Neuron.Followees> default_followees = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron.Followees>}
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.prototype.getDefaultFolloweesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron.Followees>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.Neuron.Followees));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.SetDefaultFollowees} returns this
 */
proto.ic_nns_governance.pb.v1.SetDefaultFollowees.prototype.clearDefaultFolloweesMap = function() {
  this.getDefaultFolloweesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapCanisterId: (f = msg.getSwapCanisterId()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && sns_swap_pb.SetOpenTimeWindowRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow;
  return proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setSwapCanisterId(value);
      break;
    case 2:
      var value = new sns_swap_pb.SetOpenTimeWindowRequest;
      reader.readMessage(value,sns_swap_pb.SetOpenTimeWindowRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapCanisterId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      sns_swap_pb.SetOpenTimeWindowRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId swap_canister_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.getSwapCanisterId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} returns this
*/
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.setSwapCanisterId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} returns this
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.clearSwapCanisterId = function() {
  return this.setSwapCanisterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.hasSwapCanisterId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ic_sns_swap.pb.v1.SetOpenTimeWindowRequest request = 2;
 * @return {?proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.getRequest = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest} */ (
    jspb.Message.getWrapperField(this, sns_swap_pb.SetOpenTimeWindowRequest, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} returns this
*/
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} returns this
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_ = [[10,12,13,14,15,16,17,18,19,21,22]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.Proposal.ActionCase = {
  ACTION_NOT_SET: 0,
  MANAGE_NEURON: 10,
  MANAGE_NETWORK_ECONOMICS: 12,
  MOTION: 13,
  EXECUTE_NNS_FUNCTION: 14,
  APPROVE_GENESIS_KYC: 15,
  ADD_OR_REMOVE_NODE_PROVIDER: 16,
  REWARD_NODE_PROVIDER: 17,
  SET_DEFAULT_FOLLOWEES: 18,
  REWARD_NODE_PROVIDERS: 19,
  REGISTER_KNOWN_NEURON: 21,
  SET_SNS_TOKEN_SWAP_OPEN_TIME_WINDOW: 22
};

/**
 * @return {proto.ic_nns_governance.pb.v1.Proposal.ActionCase}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getActionCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.Proposal.ActionCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Proposal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Proposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Proposal.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 20, ""),
    summary: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    manageNeuron: (f = msg.getManageNeuron()) && proto.ic_nns_governance.pb.v1.ManageNeuron.toObject(includeInstance, f),
    manageNetworkEconomics: (f = msg.getManageNetworkEconomics()) && proto.ic_nns_governance.pb.v1.NetworkEconomics.toObject(includeInstance, f),
    motion: (f = msg.getMotion()) && proto.ic_nns_governance.pb.v1.Motion.toObject(includeInstance, f),
    executeNnsFunction: (f = msg.getExecuteNnsFunction()) && proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.toObject(includeInstance, f),
    approveGenesisKyc: (f = msg.getApproveGenesisKyc()) && proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.toObject(includeInstance, f),
    addOrRemoveNodeProvider: (f = msg.getAddOrRemoveNodeProvider()) && proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.toObject(includeInstance, f),
    rewardNodeProvider: (f = msg.getRewardNodeProvider()) && proto.ic_nns_governance.pb.v1.RewardNodeProvider.toObject(includeInstance, f),
    setDefaultFollowees: (f = msg.getSetDefaultFollowees()) && proto.ic_nns_governance.pb.v1.SetDefaultFollowees.toObject(includeInstance, f),
    rewardNodeProviders: (f = msg.getRewardNodeProviders()) && proto.ic_nns_governance.pb.v1.RewardNodeProviders.toObject(includeInstance, f),
    registerKnownNeuron: (f = msg.getRegisterKnownNeuron()) && proto.ic_nns_governance.pb.v1.KnownNeuron.toObject(includeInstance, f),
    setSnsTokenSwapOpenTimeWindow: (f = msg.getSetSnsTokenSwapOpenTimeWindow()) && proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal}
 */
proto.ic_nns_governance.pb.v1.Proposal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Proposal;
  return proto.ic_nns_governance.pb.v1.Proposal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Proposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal}
 */
proto.ic_nns_governance.pb.v1.Proposal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 10:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.deserializeBinaryFromReader);
      msg.setManageNeuron(value);
      break;
    case 12:
      var value = new proto.ic_nns_governance.pb.v1.NetworkEconomics;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NetworkEconomics.deserializeBinaryFromReader);
      msg.setManageNetworkEconomics(value);
      break;
    case 13:
      var value = new proto.ic_nns_governance.pb.v1.Motion;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Motion.deserializeBinaryFromReader);
      msg.setMotion(value);
      break;
    case 14:
      var value = new proto.ic_nns_governance.pb.v1.ExecuteNnsFunction;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.deserializeBinaryFromReader);
      msg.setExecuteNnsFunction(value);
      break;
    case 15:
      var value = new proto.ic_nns_governance.pb.v1.ApproveGenesisKYC;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.deserializeBinaryFromReader);
      msg.setApproveGenesisKyc(value);
      break;
    case 16:
      var value = new proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.deserializeBinaryFromReader);
      msg.setAddOrRemoveNodeProvider(value);
      break;
    case 17:
      var value = new proto.ic_nns_governance.pb.v1.RewardNodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.RewardNodeProvider.deserializeBinaryFromReader);
      msg.setRewardNodeProvider(value);
      break;
    case 18:
      var value = new proto.ic_nns_governance.pb.v1.SetDefaultFollowees;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.SetDefaultFollowees.deserializeBinaryFromReader);
      msg.setSetDefaultFollowees(value);
      break;
    case 19:
      var value = new proto.ic_nns_governance.pb.v1.RewardNodeProviders;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.RewardNodeProviders.deserializeBinaryFromReader);
      msg.setRewardNodeProviders(value);
      break;
    case 21:
      var value = new proto.ic_nns_governance.pb.v1.KnownNeuron;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.KnownNeuron.deserializeBinaryFromReader);
      msg.setRegisterKnownNeuron(value);
      break;
    case 22:
      var value = new proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.deserializeBinaryFromReader);
      msg.setSetSnsTokenSwapOpenTimeWindow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Proposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Proposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Proposal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getManageNeuron();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.serializeBinaryToWriter
    );
  }
  f = message.getManageNetworkEconomics();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ic_nns_governance.pb.v1.NetworkEconomics.serializeBinaryToWriter
    );
  }
  f = message.getMotion();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ic_nns_governance.pb.v1.Motion.serializeBinaryToWriter
    );
  }
  f = message.getExecuteNnsFunction();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ic_nns_governance.pb.v1.ExecuteNnsFunction.serializeBinaryToWriter
    );
  }
  f = message.getApproveGenesisKyc();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ic_nns_governance.pb.v1.ApproveGenesisKYC.serializeBinaryToWriter
    );
  }
  f = message.getAddOrRemoveNodeProvider();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider.serializeBinaryToWriter
    );
  }
  f = message.getRewardNodeProvider();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ic_nns_governance.pb.v1.RewardNodeProvider.serializeBinaryToWriter
    );
  }
  f = message.getSetDefaultFollowees();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ic_nns_governance.pb.v1.SetDefaultFollowees.serializeBinaryToWriter
    );
  }
  f = message.getRewardNodeProviders();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.ic_nns_governance.pb.v1.RewardNodeProviders.serializeBinaryToWriter
    );
  }
  f = message.getRegisterKnownNeuron();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.ic_nns_governance.pb.v1.KnownNeuron.serializeBinaryToWriter
    );
  }
  f = message.getSetSnsTokenSwapOpenTimeWindow();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 20;
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string summary = 1;
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ManageNeuron manage_neuron = 10;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getManageNeuron = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron, 10));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setManageNeuron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearManageNeuron = function() {
  return this.setManageNeuron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasManageNeuron = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional NetworkEconomics manage_network_economics = 12;
 * @return {?proto.ic_nns_governance.pb.v1.NetworkEconomics}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getManageNetworkEconomics = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.NetworkEconomics} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.NetworkEconomics, 12));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.NetworkEconomics|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setManageNetworkEconomics = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearManageNetworkEconomics = function() {
  return this.setManageNetworkEconomics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasManageNetworkEconomics = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Motion motion = 13;
 * @return {?proto.ic_nns_governance.pb.v1.Motion}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getMotion = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Motion} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Motion, 13));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Motion|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setMotion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearMotion = function() {
  return this.setMotion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasMotion = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ExecuteNnsFunction execute_nns_function = 14;
 * @return {?proto.ic_nns_governance.pb.v1.ExecuteNnsFunction}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getExecuteNnsFunction = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ExecuteNnsFunction} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ExecuteNnsFunction, 14));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ExecuteNnsFunction|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setExecuteNnsFunction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearExecuteNnsFunction = function() {
  return this.setExecuteNnsFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasExecuteNnsFunction = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ApproveGenesisKYC approve_genesis_kyc = 15;
 * @return {?proto.ic_nns_governance.pb.v1.ApproveGenesisKYC}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getApproveGenesisKyc = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ApproveGenesisKYC} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ApproveGenesisKYC, 15));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ApproveGenesisKYC|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setApproveGenesisKyc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearApproveGenesisKyc = function() {
  return this.setApproveGenesisKyc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasApproveGenesisKyc = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional AddOrRemoveNodeProvider add_or_remove_node_provider = 16;
 * @return {?proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getAddOrRemoveNodeProvider = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider, 16));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.AddOrRemoveNodeProvider|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setAddOrRemoveNodeProvider = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearAddOrRemoveNodeProvider = function() {
  return this.setAddOrRemoveNodeProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasAddOrRemoveNodeProvider = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RewardNodeProvider reward_node_provider = 17;
 * @return {?proto.ic_nns_governance.pb.v1.RewardNodeProvider}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getRewardNodeProvider = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.RewardNodeProvider} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.RewardNodeProvider, 17));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.RewardNodeProvider|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setRewardNodeProvider = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearRewardNodeProvider = function() {
  return this.setRewardNodeProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasRewardNodeProvider = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional SetDefaultFollowees set_default_followees = 18;
 * @return {?proto.ic_nns_governance.pb.v1.SetDefaultFollowees}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getSetDefaultFollowees = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.SetDefaultFollowees} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.SetDefaultFollowees, 18));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.SetDefaultFollowees|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setSetDefaultFollowees = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearSetDefaultFollowees = function() {
  return this.setSetDefaultFollowees(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasSetDefaultFollowees = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional RewardNodeProviders reward_node_providers = 19;
 * @return {?proto.ic_nns_governance.pb.v1.RewardNodeProviders}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getRewardNodeProviders = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.RewardNodeProviders} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.RewardNodeProviders, 19));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.RewardNodeProviders|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setRewardNodeProviders = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearRewardNodeProviders = function() {
  return this.setRewardNodeProviders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasRewardNodeProviders = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional KnownNeuron register_known_neuron = 21;
 * @return {?proto.ic_nns_governance.pb.v1.KnownNeuron}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getRegisterKnownNeuron = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.KnownNeuron} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.KnownNeuron, 21));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.KnownNeuron|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setRegisterKnownNeuron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearRegisterKnownNeuron = function() {
  return this.setRegisterKnownNeuron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasRegisterKnownNeuron = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional SetSnsTokenSwapOpenTimeWindow set_sns_token_swap_open_time_window = 22;
 * @return {?proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.getSetSnsTokenSwapOpenTimeWindow = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow, 22));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.SetSnsTokenSwapOpenTimeWindow|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
*/
proto.ic_nns_governance.pb.v1.Proposal.prototype.setSetSnsTokenSwapOpenTimeWindow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.ic_nns_governance.pb.v1.Proposal.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Proposal} returns this
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.clearSetSnsTokenSwapOpenTimeWindow = function() {
  return this.setSetSnsTokenSwapOpenTimeWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Proposal.prototype.hasSetSnsTokenSwapOpenTimeWindow = function() {
  return jspb.Message.getField(this, 22) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Empty}
 */
proto.ic_nns_governance.pb.v1.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Empty;
  return proto.ic_nns_governance.pb.v1.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Empty}
 */
proto.ic_nns_governance.pb.v1.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_ = [[11,12],[2,3,4,5,6,7,8,9,10,13,14]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.NeuronIdOrSubaccountCase = {
  NEURON_ID_OR_SUBACCOUNT_NOT_SET: 0,
  SUBACCOUNT: 11,
  NEURON_ID: 12
};

/**
 * @return {proto.ic_nns_governance.pb.v1.ManageNeuron.NeuronIdOrSubaccountCase}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getNeuronIdOrSubaccountCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.ManageNeuron.NeuronIdOrSubaccountCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.CommandCase = {
  COMMAND_NOT_SET: 0,
  CONFIGURE: 2,
  DISBURSE: 3,
  SPAWN: 4,
  FOLLOW: 5,
  MAKE_PROPOSAL: 6,
  REGISTER_VOTE: 7,
  SPLIT: 8,
  DISBURSE_TO_NEURON: 9,
  CLAIM_OR_REFRESH: 10,
  MERGE_MATURITY: 13,
  MERGE: 14
};

/**
 * @return {proto.ic_nns_governance.pb.v1.ManageNeuron.CommandCase}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getCommandCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.ManageNeuron.CommandCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && types_pb.NeuronId.toObject(includeInstance, f),
    subaccount: msg.getSubaccount_asB64(),
    neuronId: (f = msg.getNeuronId()) && types_pb.NeuronId.toObject(includeInstance, f),
    configure: (f = msg.getConfigure()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.toObject(includeInstance, f),
    disburse: (f = msg.getDisburse()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.toObject(includeInstance, f),
    spawn: (f = msg.getSpawn()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.toObject(includeInstance, f),
    follow: (f = msg.getFollow()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.toObject(includeInstance, f),
    makeProposal: (f = msg.getMakeProposal()) && proto.ic_nns_governance.pb.v1.Proposal.toObject(includeInstance, f),
    registerVote: (f = msg.getRegisterVote()) && proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.toObject(includeInstance, f),
    split: (f = msg.getSplit()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Split.toObject(includeInstance, f),
    disburseToNeuron: (f = msg.getDisburseToNeuron()) && proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.toObject(includeInstance, f),
    claimOrRefresh: (f = msg.getClaimOrRefresh()) && proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.toObject(includeInstance, f),
    mergeMaturity: (f = msg.getMergeMaturity()) && proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.toObject(includeInstance, f),
    merge: (f = msg.getMerge()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 11:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccount(value);
      break;
    case 12:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setNeuronId(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Configure;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.deserializeBinaryFromReader);
      msg.setConfigure(value);
      break;
    case 3:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.deserializeBinaryFromReader);
      msg.setDisburse(value);
      break;
    case 4:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.deserializeBinaryFromReader);
      msg.setSpawn(value);
      break;
    case 5:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Follow;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.deserializeBinaryFromReader);
      msg.setFollow(value);
      break;
    case 6:
      var value = new proto.ic_nns_governance.pb.v1.Proposal;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Proposal.deserializeBinaryFromReader);
      msg.setMakeProposal(value);
      break;
    case 7:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.deserializeBinaryFromReader);
      msg.setRegisterVote(value);
      break;
    case 8:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Split;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Split.deserializeBinaryFromReader);
      msg.setSplit(value);
      break;
    case 9:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.deserializeBinaryFromReader);
      msg.setDisburseToNeuron(value);
      break;
    case 10:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.deserializeBinaryFromReader);
      msg.setClaimOrRefresh(value);
      break;
    case 13:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.deserializeBinaryFromReader);
      msg.setMergeMaturity(value);
      break;
    case 14:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Merge;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.deserializeBinaryFromReader);
      msg.setMerge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBytes(
      11,
      f
    );
  }
  f = message.getNeuronId();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
  f = message.getConfigure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.serializeBinaryToWriter
    );
  }
  f = message.getDisburse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.serializeBinaryToWriter
    );
  }
  f = message.getSpawn();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.serializeBinaryToWriter
    );
  }
  f = message.getFollow();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.serializeBinaryToWriter
    );
  }
  f = message.getMakeProposal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_nns_governance.pb.v1.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getRegisterVote();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.serializeBinaryToWriter
    );
  }
  f = message.getSplit();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Split.serializeBinaryToWriter
    );
  }
  f = message.getDisburseToNeuron();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.serializeBinaryToWriter
    );
  }
  f = message.getClaimOrRefresh();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.serializeBinaryToWriter
    );
  }
  f = message.getMergeMaturity();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.serializeBinaryToWriter
    );
  }
  f = message.getMerge();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.toObject = function(includeInstance, msg) {
  var f, obj = {
    additionalDissolveDelaySeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAdditionalDissolveDelaySeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdditionalDissolveDelaySeconds();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 additional_dissolve_delay_seconds = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.prototype.getAdditionalDissolveDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.prototype.setAdditionalDissolveDelaySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    newHotKey: (f = msg.getNewHotKey()) && base_types_pb.PrincipalId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setNewHotKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewHotKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId new_hot_key = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.prototype.getNewHotKey = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.prototype.setNewHotKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.prototype.clearNewHotKey = function() {
  return this.setNewHotKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.prototype.hasNewHotKey = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    hotKeyToRemove: (f = msg.getHotKeyToRemove()) && base_types_pb.PrincipalId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setHotKeyToRemove(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHotKeyToRemove();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId hot_key_to_remove = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.prototype.getHotKeyToRemove = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.prototype.setHotKeyToRemove = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.prototype.clearHotKeyToRemove = function() {
  return this.setHotKeyToRemove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.prototype.hasHotKeyToRemove = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    dissolveTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolveTimestampSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDissolveTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 dissolve_timestamp_seconds = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.prototype.getDissolveTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.prototype.setDissolveTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_ = [[1,2,3,4,5,6,7,8]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.OperationCase = {
  OPERATION_NOT_SET: 0,
  INCREASE_DISSOLVE_DELAY: 1,
  START_DISSOLVING: 2,
  STOP_DISSOLVING: 3,
  ADD_HOT_KEY: 4,
  REMOVE_HOT_KEY: 5,
  SET_DISSOLVE_TIMESTAMP: 6,
  JOIN_COMMUNITY_FUND: 7,
  LEAVE_COMMUNITY_FUND: 8
};

/**
 * @return {proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.OperationCase}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getOperationCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.OperationCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.toObject = function(includeInstance, msg) {
  var f, obj = {
    increaseDissolveDelay: (f = msg.getIncreaseDissolveDelay()) && proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.toObject(includeInstance, f),
    startDissolving: (f = msg.getStartDissolving()) && proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.toObject(includeInstance, f),
    stopDissolving: (f = msg.getStopDissolving()) && proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.toObject(includeInstance, f),
    addHotKey: (f = msg.getAddHotKey()) && proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.toObject(includeInstance, f),
    removeHotKey: (f = msg.getRemoveHotKey()) && proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.toObject(includeInstance, f),
    setDissolveTimestamp: (f = msg.getSetDissolveTimestamp()) && proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.toObject(includeInstance, f),
    joinCommunityFund: (f = msg.getJoinCommunityFund()) && proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.toObject(includeInstance, f),
    leaveCommunityFund: (f = msg.getLeaveCommunityFund()) && proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.Configure;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.deserializeBinaryFromReader);
      msg.setIncreaseDissolveDelay(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.deserializeBinaryFromReader);
      msg.setStartDissolving(value);
      break;
    case 3:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.deserializeBinaryFromReader);
      msg.setStopDissolving(value);
      break;
    case 4:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.deserializeBinaryFromReader);
      msg.setAddHotKey(value);
      break;
    case 5:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.deserializeBinaryFromReader);
      msg.setRemoveHotKey(value);
      break;
    case 6:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.deserializeBinaryFromReader);
      msg.setSetDissolveTimestamp(value);
      break;
    case 7:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.deserializeBinaryFromReader);
      msg.setJoinCommunityFund(value);
      break;
    case 8:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.deserializeBinaryFromReader);
      msg.setLeaveCommunityFund(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncreaseDissolveDelay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay.serializeBinaryToWriter
    );
  }
  f = message.getStartDissolving();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving.serializeBinaryToWriter
    );
  }
  f = message.getStopDissolving();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving.serializeBinaryToWriter
    );
  }
  f = message.getAddHotKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey.serializeBinaryToWriter
    );
  }
  f = message.getRemoveHotKey();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey.serializeBinaryToWriter
    );
  }
  f = message.getSetDissolveTimestamp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp.serializeBinaryToWriter
    );
  }
  f = message.getJoinCommunityFund();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund.serializeBinaryToWriter
    );
  }
  f = message.getLeaveCommunityFund();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund.serializeBinaryToWriter
    );
  }
};


/**
 * optional IncreaseDissolveDelay increase_dissolve_delay = 1;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getIncreaseDissolveDelay = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay, 1));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.IncreaseDissolveDelay|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setIncreaseDissolveDelay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearIncreaseDissolveDelay = function() {
  return this.setIncreaseDissolveDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasIncreaseDissolveDelay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StartDissolving start_dissolving = 2;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getStartDissolving = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving, 2));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.StartDissolving|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setStartDissolving = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearStartDissolving = function() {
  return this.setStartDissolving(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasStartDissolving = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StopDissolving stop_dissolving = 3;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getStopDissolving = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving, 3));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.StopDissolving|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setStopDissolving = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearStopDissolving = function() {
  return this.setStopDissolving(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasStopDissolving = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AddHotKey add_hot_key = 4;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getAddHotKey = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey, 4));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.AddHotKey|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setAddHotKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearAddHotKey = function() {
  return this.setAddHotKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasAddHotKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RemoveHotKey remove_hot_key = 5;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getRemoveHotKey = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey, 5));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.RemoveHotKey|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setRemoveHotKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearRemoveHotKey = function() {
  return this.setRemoveHotKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasRemoveHotKey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SetDissolveTimestamp set_dissolve_timestamp = 6;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getSetDissolveTimestamp = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp, 6));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.SetDissolveTimestamp|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setSetDissolveTimestamp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearSetDissolveTimestamp = function() {
  return this.setSetDissolveTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasSetDissolveTimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional JoinCommunityFund join_community_fund = 7;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getJoinCommunityFund = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund, 7));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.JoinCommunityFund|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setJoinCommunityFund = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearJoinCommunityFund = function() {
  return this.setJoinCommunityFund(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasJoinCommunityFund = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional LeaveCommunityFund leave_community_fund = 8;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.getLeaveCommunityFund = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund, 8));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.LeaveCommunityFund|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.setLeaveCommunityFund = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.clearLeaveCommunityFund = function() {
  return this.setLeaveCommunityFund(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.prototype.hasLeaveCommunityFund = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: (f = msg.getAmount()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.toObject(includeInstance, f),
    toAccount: (f = msg.getToAccount()) && ledger_pb.AccountIdentifier.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 2:
      var value = new ledger_pb.AccountIdentifier;
      reader.readMessage(value,ledger_pb.AccountIdentifier.deserializeBinaryFromReader);
      msg.setToAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.serializeBinaryToWriter
    );
  }
  f = message.getToAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ledger_pb.AccountIdentifier.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.toObject = function(includeInstance, msg) {
  var f, obj = {
    e8s: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setE8s(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 e8s = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.prototype.getE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount.prototype.setE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Amount amount = 1;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.getAmount = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount, 1));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.Amount|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ic_ledger.pb.v1.AccountIdentifier to_account = 2;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.getToAccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, ledger_pb.AccountIdentifier, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.setToAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.clearToAccount = function() {
  return this.setToAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.prototype.hasToAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Split.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Split} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.toObject = function(includeInstance, msg) {
  var f, obj = {
    amountE8s: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Split}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.Split;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Split.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Split} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Split}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountE8s(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.Split.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Split} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmountE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 amount_e8s = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.prototype.getAmountE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Split} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Split.prototype.setAmountE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Merge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourceNeuronId: (f = msg.getSourceNeuronId()) && types_pb.NeuronId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Merge}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.Merge;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Merge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Merge}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setSourceNeuronId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Merge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourceNeuronId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.NeuronId source_neuron_id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.prototype.getSourceNeuronId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Merge} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.prototype.setSourceNeuronId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Merge} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.prototype.clearSourceNeuronId = function() {
  return this.setSourceNeuronId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.prototype.hasSourceNeuronId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.toObject = function(includeInstance, msg) {
  var f, obj = {
    newController: (f = msg.getNewController()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    nonce: jspb.Message.getFieldWithDefault(msg, 2, 0),
    percentageToSpawn: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setNewController(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPercentageToSpawn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewController();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId new_controller = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.getNewController = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.setNewController = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.clearNewController = function() {
  return this.setNewController(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.hasNewController = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 nonce = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.setNonce = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.clearNonce = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.hasNonce = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 percentage_to_spawn = 3;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.getPercentageToSpawn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.setPercentageToSpawn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.clearPercentageToSpawn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.prototype.hasPercentageToSpawn = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.toObject = function(includeInstance, msg) {
  var f, obj = {
    percentageToMerge: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPercentageToMerge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPercentageToMerge();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 percentage_to_merge = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.prototype.getPercentageToMerge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.prototype.setPercentageToMerge = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.toObject = function(includeInstance, msg) {
  var f, obj = {
    newController: (f = msg.getNewController()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    amountE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dissolveDelaySeconds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    kycVerified: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    nonce: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setNewController(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountE8s(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolveDelaySeconds(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKycVerified(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewController();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getAmountE8s();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDissolveDelaySeconds();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getKycVerified();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId new_controller = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.getNewController = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.setNewController = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.clearNewController = function() {
  return this.setNewController(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.hasNewController = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount_e8s = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.getAmountE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.setAmountE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 dissolve_delay_seconds = 3;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.getDissolveDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.setDissolveDelaySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool kyc_verified = 4;
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.getKycVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.setKycVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional uint64 nonce = 5;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, 0),
    followeesList: jspb.Message.toObjectList(msg.getFolloweesList(),
    types_pb.NeuronId.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.Follow;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.Topic} */ (reader.readEnum());
      msg.setTopic(value);
      break;
    case 2:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.addFollowees(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getFolloweesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional Topic topic = 1;
 * @return {!proto.ic_nns_governance.pb.v1.Topic}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.getTopic = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.Topic} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.Topic} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.setTopic = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated ic_nns_common.pb.v1.NeuronId followees = 2;
 * @return {!Array<!proto.ic_nns_common.pb.v1.NeuronId>}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.getFolloweesList = function() {
  return /** @type{!Array<!proto.ic_nns_common.pb.v1.NeuronId>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.NeuronId, 2));
};


/**
 * @param {!Array<!proto.ic_nns_common.pb.v1.NeuronId>} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.setFolloweesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ic_nns_common.pb.v1.NeuronId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.addFollowees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ic_nns_common.pb.v1.NeuronId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.Follow} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.Follow.prototype.clearFolloweesList = function() {
  return this.setFolloweesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposal: (f = msg.getProposal()) && types_pb.ProposalId.toObject(includeInstance, f),
    vote: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.ProposalId;
      reader.readMessage(value,types_pb.ProposalId.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 2:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.Vote} */ (reader.readEnum());
      msg.setVote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.ProposalId.serializeBinaryToWriter
    );
  }
  f = message.getVote();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.ProposalId proposal = 1;
 * @return {?proto.ic_nns_common.pb.v1.ProposalId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.getProposal = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.ProposalId} */ (
    jspb.Message.getWrapperField(this, types_pb.ProposalId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.ProposalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.setProposal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vote vote = 2;
 * @return {!proto.ic_nns_governance.pb.v1.Vote}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.getVote = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.Vote} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.Vote} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote.prototype.setVote = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.ByCase = {
  BY_NOT_SET: 0,
  MEMO: 1,
  MEMO_AND_CONTROLLER: 2,
  NEURON_ID_OR_SUBACCOUNT: 3
};

/**
 * @return {proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.ByCase}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.getByCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.ByCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memoAndController: (f = msg.getMemoAndController()) && proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.toObject(includeInstance, f),
    neuronIdOrSubaccount: (f = msg.getNeuronIdOrSubaccount()) && proto.ic_nns_governance.pb.v1.Empty.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemo(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.deserializeBinaryFromReader);
      msg.setMemoAndController(value);
      break;
    case 3:
      var value = new proto.ic_nns_governance.pb.v1.Empty;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Empty.deserializeBinaryFromReader);
      msg.setNeuronIdOrSubaccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMemoAndController();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.serializeBinaryToWriter
    );
  }
  f = message.getNeuronIdOrSubaccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_nns_governance.pb.v1.Empty.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    controller: (f = msg.getController()) && base_types_pb.PrincipalId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController;
  return proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemo(value);
      break;
    case 2:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setController(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemo();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getController();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 memo = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.getMemo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.setMemo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ic_base_types.pb.v1.PrincipalId controller = 2;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.getController = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 2));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.setController = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.clearController = function() {
  return this.setController(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController.prototype.hasController = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 memo = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.getMemo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.setMemo = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.clearMemo = function() {
  return jspb.Message.setOneofField(this, 1, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MemoAndController memo_and_controller = 2;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.getMemoAndController = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController, 2));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.MemoAndController|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.setMemoAndController = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.clearMemoAndController = function() {
  return this.setMemoAndController(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.hasMemoAndController = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Empty neuron_id_or_subaccount = 3;
 * @return {?proto.ic_nns_governance.pb.v1.Empty}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.getNeuronIdOrSubaccount = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Empty} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Empty, 3));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Empty|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.setNeuronIdOrSubaccount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.clearNeuronIdOrSubaccount = function() {
  return this.setNeuronIdOrSubaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.prototype.hasNeuronIdOrSubaccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ic_nns_common.pb.v1.NeuronId id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes subaccount = 11;
 * @return {!(string|Uint8Array)}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getSubaccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * optional bytes subaccount = 11;
 * This is a type-conversion wrapper around `getSubaccount()`
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getSubaccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccount()));
};


/**
 * optional bytes subaccount = 11;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccount()`
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getSubaccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setSubaccount = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearSubaccount = function() {
  return jspb.Message.setOneofField(this, 11, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasSubaccount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ic_nns_common.pb.v1.NeuronId neuron_id = 12;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getNeuronId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 12));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setNeuronId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearNeuronId = function() {
  return this.setNeuronId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasNeuronId = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Configure configure = 2;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Configure}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getConfigure = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure, 2));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Configure|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearConfigure = function() {
  return this.setConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasConfigure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Disburse disburse = 3;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getDisburse = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse, 3));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setDisburse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearDisburse = function() {
  return this.setDisburse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasDisburse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Spawn spawn = 4;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getSpawn = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn, 4));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setSpawn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearSpawn = function() {
  return this.setSpawn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasSpawn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Follow follow = 5;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Follow}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getFollow = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Follow} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Follow, 5));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Follow|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setFollow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearFollow = function() {
  return this.setFollow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasFollow = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Proposal make_proposal = 6;
 * @return {?proto.ic_nns_governance.pb.v1.Proposal}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getMakeProposal = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Proposal} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Proposal, 6));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Proposal|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setMakeProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearMakeProposal = function() {
  return this.setMakeProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasMakeProposal = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RegisterVote register_vote = 7;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getRegisterVote = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote, 7));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.RegisterVote|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setRegisterVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearRegisterVote = function() {
  return this.setRegisterVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasRegisterVote = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Split split = 8;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Split}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getSplit = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Split} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Split, 8));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Split|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setSplit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearSplit = function() {
  return this.setSplit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasSplit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DisburseToNeuron disburse_to_neuron = 9;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getDisburseToNeuron = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron, 9));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setDisburseToNeuron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearDisburseToNeuron = function() {
  return this.setDisburseToNeuron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasDisburseToNeuron = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ClaimOrRefresh claim_or_refresh = 10;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getClaimOrRefresh = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh, 10));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setClaimOrRefresh = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearClaimOrRefresh = function() {
  return this.setClaimOrRefresh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasClaimOrRefresh = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MergeMaturity merge_maturity = 13;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getMergeMaturity = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity, 13));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setMergeMaturity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearMergeMaturity = function() {
  return this.setMergeMaturity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasMergeMaturity = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Merge merge = 14;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Merge}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.getMerge = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Merge} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Merge, 14));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Merge|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.setMerge = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ic_nns_governance.pb.v1.ManageNeuron.oneofGroups_[1], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.clearMerge = function() {
  return this.setMerge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuron.prototype.hasMerge = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.CommandCase = {
  COMMAND_NOT_SET: 0,
  ERROR: 1,
  CONFIGURE: 2,
  DISBURSE: 3,
  SPAWN: 4,
  FOLLOW: 5,
  MAKE_PROPOSAL: 6,
  REGISTER_VOTE: 7,
  SPLIT: 8,
  DISBURSE_TO_NEURON: 9,
  CLAIM_OR_REFRESH: 10,
  MERGE_MATURITY: 11,
  MERGE: 12
};

/**
 * @return {proto.ic_nns_governance.pb.v1.ManageNeuronResponse.CommandCase}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getCommandCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.ManageNeuronResponse.CommandCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.ic_nns_governance.pb.v1.GovernanceError.toObject(includeInstance, f),
    configure: (f = msg.getConfigure()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.toObject(includeInstance, f),
    disburse: (f = msg.getDisburse()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.toObject(includeInstance, f),
    spawn: (f = msg.getSpawn()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.toObject(includeInstance, f),
    follow: (f = msg.getFollow()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.toObject(includeInstance, f),
    makeProposal: (f = msg.getMakeProposal()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.toObject(includeInstance, f),
    registerVote: (f = msg.getRegisterVote()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.toObject(includeInstance, f),
    split: (f = msg.getSplit()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.toObject(includeInstance, f),
    disburseToNeuron: (f = msg.getDisburseToNeuron()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.toObject(includeInstance, f),
    claimOrRefresh: (f = msg.getClaimOrRefresh()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.toObject(includeInstance, f),
    mergeMaturity: (f = msg.getMergeMaturity()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.toObject(includeInstance, f),
    merge: (f = msg.getMerge()) && proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.GovernanceError;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.GovernanceError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.deserializeBinaryFromReader);
      msg.setConfigure(value);
      break;
    case 3:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.deserializeBinaryFromReader);
      msg.setDisburse(value);
      break;
    case 4:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.deserializeBinaryFromReader);
      msg.setSpawn(value);
      break;
    case 5:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.deserializeBinaryFromReader);
      msg.setFollow(value);
      break;
    case 6:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.deserializeBinaryFromReader);
      msg.setMakeProposal(value);
      break;
    case 7:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.deserializeBinaryFromReader);
      msg.setRegisterVote(value);
      break;
    case 8:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.deserializeBinaryFromReader);
      msg.setSplit(value);
      break;
    case 9:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.deserializeBinaryFromReader);
      msg.setDisburseToNeuron(value);
      break;
    case 10:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.deserializeBinaryFromReader);
      msg.setClaimOrRefresh(value);
      break;
    case 11:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.deserializeBinaryFromReader);
      msg.setMergeMaturity(value);
      break;
    case 12:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.deserializeBinaryFromReader);
      msg.setMerge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.GovernanceError.serializeBinaryToWriter
    );
  }
  f = message.getConfigure();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.serializeBinaryToWriter
    );
  }
  f = message.getDisburse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.serializeBinaryToWriter
    );
  }
  f = message.getSpawn();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.serializeBinaryToWriter
    );
  }
  f = message.getFollow();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.serializeBinaryToWriter
    );
  }
  f = message.getMakeProposal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.serializeBinaryToWriter
    );
  }
  f = message.getRegisterVote();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.serializeBinaryToWriter
    );
  }
  f = message.getSplit();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.serializeBinaryToWriter
    );
  }
  f = message.getDisburseToNeuron();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.serializeBinaryToWriter
    );
  }
  f = message.getClaimOrRefresh();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.serializeBinaryToWriter
    );
  }
  f = message.getMergeMaturity();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.serializeBinaryToWriter
    );
  }
  f = message.getMerge();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferBlockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransferBlockHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferBlockHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 transfer_block_height = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.prototype.getTransferBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse.prototype.setTransferBlockHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    createdNeuronId: (f = msg.getCreatedNeuronId()) && types_pb.NeuronId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setCreatedNeuronId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedNeuronId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.NeuronId created_neuron_id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.prototype.getCreatedNeuronId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.prototype.setCreatedNeuronId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.prototype.clearCreatedNeuronId = function() {
  return this.setCreatedNeuronId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse.prototype.hasCreatedNeuronId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    mergedMaturityE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newStakeE8s: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMergedMaturityE8s(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNewStakeE8s(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMergedMaturityE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNewStakeE8s();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 merged_maturity_e8s = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.prototype.getMergedMaturityE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.prototype.setMergedMaturityE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 new_stake_e8s = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.prototype.getNewStakeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse.prototype.setNewStakeE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalId: (f = msg.getProposalId()) && types_pb.ProposalId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.ProposalId;
      reader.readMessage(value,types_pb.ProposalId.deserializeBinaryFromReader);
      msg.setProposalId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.ProposalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.ProposalId proposal_id = 1;
 * @return {?proto.ic_nns_common.pb.v1.ProposalId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.prototype.getProposalId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.ProposalId} */ (
    jspb.Message.getWrapperField(this, types_pb.ProposalId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.ProposalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.prototype.setProposalId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.prototype.clearProposalId = function() {
  return this.setProposalId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse.prototype.hasProposalId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    createdNeuronId: (f = msg.getCreatedNeuronId()) && types_pb.NeuronId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setCreatedNeuronId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedNeuronId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.NeuronId created_neuron_id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.prototype.getCreatedNeuronId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.prototype.setCreatedNeuronId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.prototype.clearCreatedNeuronId = function() {
  return this.setCreatedNeuronId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse.prototype.hasCreatedNeuronId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    createdNeuronId: (f = msg.getCreatedNeuronId()) && types_pb.NeuronId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setCreatedNeuronId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedNeuronId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.NeuronId created_neuron_id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.prototype.getCreatedNeuronId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.prototype.setCreatedNeuronId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.prototype.clearCreatedNeuronId = function() {
  return this.setCreatedNeuronId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse.prototype.hasCreatedNeuronId = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    refreshedNeuronId: (f = msg.getRefreshedNeuronId()) && types_pb.NeuronId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse;
  return proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setRefreshedNeuronId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefreshedNeuronId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.NeuronId refreshed_neuron_id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.prototype.getRefreshedNeuronId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.prototype.setRefreshedNeuronId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.prototype.clearRefreshedNeuronId = function() {
  return this.setRefreshedNeuronId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse.prototype.hasRefreshedNeuronId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GovernanceError error = 1;
 * @return {?proto.ic_nns_governance.pb.v1.GovernanceError}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getError = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.GovernanceError} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.GovernanceError, 1));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.GovernanceError|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConfigureResponse configure = 2;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getConfigure = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse, 2));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ConfigureResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearConfigure = function() {
  return this.setConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasConfigure = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DisburseResponse disburse = 3;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getDisburse = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse, 3));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setDisburse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearDisburse = function() {
  return this.setDisburse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasDisburse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SpawnResponse spawn = 4;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getSpawn = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse, 4));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SpawnResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setSpawn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearSpawn = function() {
  return this.setSpawn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasSpawn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional FollowResponse follow = 5;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getFollow = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse, 5));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.FollowResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setFollow = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearFollow = function() {
  return this.setFollow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasFollow = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MakeProposalResponse make_proposal = 6;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getMakeProposal = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse, 6));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MakeProposalResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setMakeProposal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearMakeProposal = function() {
  return this.setMakeProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasMakeProposal = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RegisterVoteResponse register_vote = 7;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getRegisterVote = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse, 7));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.RegisterVoteResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setRegisterVote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearRegisterVote = function() {
  return this.setRegisterVote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasRegisterVote = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SplitResponse split = 8;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getSplit = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse, 8));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.SplitResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setSplit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearSplit = function() {
  return this.setSplit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasSplit = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DisburseToNeuronResponse disburse_to_neuron = 9;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getDisburseToNeuron = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse, 9));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.DisburseToNeuronResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setDisburseToNeuron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearDisburseToNeuron = function() {
  return this.setDisburseToNeuron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasDisburseToNeuron = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ClaimOrRefreshResponse claim_or_refresh = 10;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getClaimOrRefresh = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse, 10));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.ClaimOrRefreshResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setClaimOrRefresh = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearClaimOrRefresh = function() {
  return this.setClaimOrRefresh(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasClaimOrRefresh = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MergeMaturityResponse merge_maturity = 11;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getMergeMaturity = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse, 11));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeMaturityResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setMergeMaturity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearMergeMaturity = function() {
  return this.setMergeMaturity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasMergeMaturity = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional MergeResponse merge = 12;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.getMerge = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse, 12));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuronResponse.MergeResponse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.setMerge = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ic_nns_governance.pb.v1.ManageNeuronResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ManageNeuronResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.clearMerge = function() {
  return this.setMerge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ManageNeuronResponse.prototype.hasMerge = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.GovernanceError.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.GovernanceError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.GovernanceError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.GovernanceError.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.GovernanceError}
 */
proto.ic_nns_governance.pb.v1.GovernanceError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.GovernanceError;
  return proto.ic_nns_governance.pb.v1.GovernanceError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.GovernanceError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.GovernanceError}
 */
proto.ic_nns_governance.pb.v1.GovernanceError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.GovernanceError.ErrorType} */ (reader.readEnum());
      msg.setErrorType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.GovernanceError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.GovernanceError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.GovernanceError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.GovernanceError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.GovernanceError.ErrorType = {
  ERROR_TYPE_UNSPECIFIED: 0,
  ERROR_TYPE_OK: 1,
  ERROR_TYPE_UNAVAILABLE: 2,
  ERROR_TYPE_NOT_AUTHORIZED: 3,
  ERROR_TYPE_NOT_FOUND: 4,
  ERROR_TYPE_INVALID_COMMAND: 5,
  ERROR_TYPE_REQUIRES_NOT_DISSOLVING: 6,
  ERROR_TYPE_REQUIRES_DISSOLVING: 7,
  ERROR_TYPE_REQUIRES_DISSOLVED: 8,
  ERROR_TYPE_HOT_KEY: 9,
  ERROR_TYPE_RESOURCE_EXHAUSTED: 10,
  ERROR_TYPE_PRECONDITION_FAILED: 11,
  ERROR_TYPE_EXTERNAL: 12,
  ERROR_TYPE_LEDGER_UPDATE_ONGOING: 13,
  ERROR_TYPE_INSUFFICIENT_FUNDS: 14,
  ERROR_TYPE_INVALID_PRINCIPAL: 15,
  ERROR_TYPE_INVALID_PROPOSAL: 16,
  ERROR_TYPE_ALREADY_JOINED_COMMUNITY_FUND: 17,
  ERROR_TYPE_NOT_IN_THE_COMMUNITY_FUND: 18
};

/**
 * optional ErrorType error_type = 1;
 * @return {!proto.ic_nns_governance.pb.v1.GovernanceError.ErrorType}
 */
proto.ic_nns_governance.pb.v1.GovernanceError.prototype.getErrorType = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.GovernanceError.ErrorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.GovernanceError.ErrorType} value
 * @return {!proto.ic_nns_governance.pb.v1.GovernanceError} returns this
 */
proto.ic_nns_governance.pb.v1.GovernanceError.prototype.setErrorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.GovernanceError.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_nns_governance.pb.v1.GovernanceError} returns this
 */
proto.ic_nns_governance.pb.v1.GovernanceError.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Ballot.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Ballot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Ballot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Ballot.toObject = function(includeInstance, msg) {
  var f, obj = {
    vote: jspb.Message.getFieldWithDefault(msg, 1, 0),
    votingPower: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Ballot}
 */
proto.ic_nns_governance.pb.v1.Ballot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Ballot;
  return proto.ic_nns_governance.pb.v1.Ballot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Ballot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Ballot}
 */
proto.ic_nns_governance.pb.v1.Ballot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.Vote} */ (reader.readEnum());
      msg.setVote(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVotingPower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Ballot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Ballot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Ballot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Ballot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVote();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getVotingPower();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional Vote vote = 1;
 * @return {!proto.ic_nns_governance.pb.v1.Vote}
 */
proto.ic_nns_governance.pb.v1.Ballot.prototype.getVote = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.Vote} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.Vote} value
 * @return {!proto.ic_nns_governance.pb.v1.Ballot} returns this
 */
proto.ic_nns_governance.pb.v1.Ballot.prototype.setVote = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint64 voting_power = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Ballot.prototype.getVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Ballot} returns this
 */
proto.ic_nns_governance.pb.v1.Ballot.prototype.setVotingPower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Tally.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Tally} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Tally.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    yes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    no: jspb.Message.getFieldWithDefault(msg, 3, 0),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Tally}
 */
proto.ic_nns_governance.pb.v1.Tally.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Tally;
  return proto.ic_nns_governance.pb.v1.Tally.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Tally} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Tally}
 */
proto.ic_nns_governance.pb.v1.Tally.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setYes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Tally.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Tally} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Tally.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getYes();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getNo();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 timestamp_seconds = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.getTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Tally} returns this
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.setTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 yes = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.getYes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Tally} returns this
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.setYes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 no = 3;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.getNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Tally} returns this
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.setNo = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 total = 4;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Tally} returns this
 */
proto.ic_nns_governance.pb.v1.Tally.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ProposalData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ProposalData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ProposalData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && types_pb.ProposalId.toObject(includeInstance, f),
    proposer: (f = msg.getProposer()) && types_pb.NeuronId.toObject(includeInstance, f),
    rejectCostE8s: jspb.Message.getFieldWithDefault(msg, 3, 0),
    proposal: (f = msg.getProposal()) && proto.ic_nns_governance.pb.v1.Proposal.toObject(includeInstance, f),
    proposalTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ballotsMap: (f = msg.getBallotsMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.Ballot.toObject) : [],
    latestTally: (f = msg.getLatestTally()) && proto.ic_nns_governance.pb.v1.Tally.toObject(includeInstance, f),
    decidedTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 8, 0),
    executedTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 12, 0),
    failedTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 13, 0),
    failureReason: (f = msg.getFailureReason()) && proto.ic_nns_governance.pb.v1.GovernanceError.toObject(includeInstance, f),
    rewardEventRound: jspb.Message.getFieldWithDefault(msg, 14, 0),
    waitForQuietState: (f = msg.getWaitForQuietState()) && proto.ic_nns_governance.pb.v1.WaitForQuietState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData}
 */
proto.ic_nns_governance.pb.v1.ProposalData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ProposalData;
  return proto.ic_nns_governance.pb.v1.ProposalData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ProposalData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData}
 */
proto.ic_nns_governance.pb.v1.ProposalData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.ProposalId;
      reader.readMessage(value,types_pb.ProposalId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setProposer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRejectCostE8s(value);
      break;
    case 4:
      var value = new proto.ic_nns_governance.pb.v1.Proposal;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Proposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposalTimestampSeconds(value);
      break;
    case 6:
      var value = msg.getBallotsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readFixed64, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.Ballot.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.Ballot());
         });
      break;
    case 7:
      var value = new proto.ic_nns_governance.pb.v1.Tally;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Tally.deserializeBinaryFromReader);
      msg.setLatestTally(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecidedTimestampSeconds(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExecutedTimestampSeconds(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFailedTimestampSeconds(value);
      break;
    case 15:
      var value = new proto.ic_nns_governance.pb.v1.GovernanceError;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.GovernanceError.deserializeBinaryFromReader);
      msg.setFailureReason(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRewardEventRound(value);
      break;
    case 16:
      var value = new proto.ic_nns_governance.pb.v1.WaitForQuietState;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.WaitForQuietState.deserializeBinaryFromReader);
      msg.setWaitForQuietState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ProposalData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ProposalData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ProposalData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.ProposalId.serializeBinaryToWriter
    );
  }
  f = message.getProposer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
  f = message.getRejectCostE8s();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_nns_governance.pb.v1.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getProposalTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getBallotsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeFixed64, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.Ballot.serializeBinaryToWriter);
  }
  f = message.getLatestTally();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_nns_governance.pb.v1.Tally.serializeBinaryToWriter
    );
  }
  f = message.getDecidedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getExecutedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getFailedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getFailureReason();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ic_nns_governance.pb.v1.GovernanceError.serializeBinaryToWriter
    );
  }
  f = message.getRewardEventRound();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getWaitForQuietState();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ic_nns_governance.pb.v1.WaitForQuietState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.ProposalId id = 1;
 * @return {?proto.ic_nns_common.pb.v1.ProposalId}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.ProposalId} */ (
    jspb.Message.getWrapperField(this, types_pb.ProposalId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.ProposalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ic_nns_common.pb.v1.NeuronId proposer = 2;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getProposer = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 2));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setProposer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.clearProposer = function() {
  return this.setProposer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.hasProposer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 reject_cost_e8s = 3;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getRejectCostE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setRejectCostE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Proposal proposal = 4;
 * @return {?proto.ic_nns_governance.pb.v1.Proposal}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getProposal = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Proposal} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Proposal, 4));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Proposal|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setProposal = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 proposal_timestamp_seconds = 5;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getProposalTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setProposalTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * map<fixed64, Ballot> ballots = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Ballot>}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getBallotsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Ballot>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.Ballot));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.clearBallotsMap = function() {
  this.getBallotsMap().clear();
  return this;};


/**
 * optional Tally latest_tally = 7;
 * @return {?proto.ic_nns_governance.pb.v1.Tally}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getLatestTally = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Tally} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Tally, 7));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Tally|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setLatestTally = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.clearLatestTally = function() {
  return this.setLatestTally(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.hasLatestTally = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 decided_timestamp_seconds = 8;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getDecidedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setDecidedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 executed_timestamp_seconds = 12;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getExecutedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setExecutedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 failed_timestamp_seconds = 13;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getFailedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setFailedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional GovernanceError failure_reason = 15;
 * @return {?proto.ic_nns_governance.pb.v1.GovernanceError}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getFailureReason = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.GovernanceError} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.GovernanceError, 15));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.GovernanceError|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setFailureReason = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.clearFailureReason = function() {
  return this.setFailureReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.hasFailureReason = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint64 reward_event_round = 14;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getRewardEventRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setRewardEventRound = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional WaitForQuietState wait_for_quiet_state = 16;
 * @return {?proto.ic_nns_governance.pb.v1.WaitForQuietState}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.getWaitForQuietState = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.WaitForQuietState} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.WaitForQuietState, 16));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.WaitForQuietState|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalData.prototype.setWaitForQuietState = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalData} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.clearWaitForQuietState = function() {
  return this.setWaitForQuietState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalData.prototype.hasWaitForQuietState = function() {
  return jspb.Message.getField(this, 16) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.WaitForQuietState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.WaitForQuietState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentDeadlineTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.WaitForQuietState}
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.WaitForQuietState;
  return proto.ic_nns_governance.pb.v1.WaitForQuietState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.WaitForQuietState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.WaitForQuietState}
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCurrentDeadlineTimestampSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.WaitForQuietState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.WaitForQuietState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentDeadlineTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 current_deadline_timestamp_seconds = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.prototype.getCurrentDeadlineTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.WaitForQuietState} returns this
 */
proto.ic_nns_governance.pb.v1.WaitForQuietState.prototype.setCurrentDeadlineTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ProposalInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ProposalInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && types_pb.ProposalId.toObject(includeInstance, f),
    proposer: (f = msg.getProposer()) && types_pb.NeuronId.toObject(includeInstance, f),
    rejectCostE8s: jspb.Message.getFieldWithDefault(msg, 3, 0),
    proposal: (f = msg.getProposal()) && proto.ic_nns_governance.pb.v1.Proposal.toObject(includeInstance, f),
    proposalTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ballotsMap: (f = msg.getBallotsMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.Ballot.toObject) : [],
    latestTally: (f = msg.getLatestTally()) && proto.ic_nns_governance.pb.v1.Tally.toObject(includeInstance, f),
    decidedTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 8, 0),
    executedTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 12, 0),
    failedTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 13, 0),
    failureReason: (f = msg.getFailureReason()) && proto.ic_nns_governance.pb.v1.GovernanceError.toObject(includeInstance, f),
    rewardEventRound: jspb.Message.getFieldWithDefault(msg, 14, 0),
    topic: jspb.Message.getFieldWithDefault(msg, 15, 0),
    status: jspb.Message.getFieldWithDefault(msg, 16, 0),
    rewardStatus: jspb.Message.getFieldWithDefault(msg, 17, 0),
    deadlineTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 19, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ProposalInfo;
  return proto.ic_nns_governance.pb.v1.ProposalInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ProposalInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.ProposalId;
      reader.readMessage(value,types_pb.ProposalId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setProposer(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRejectCostE8s(value);
      break;
    case 4:
      var value = new proto.ic_nns_governance.pb.v1.Proposal;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Proposal.deserializeBinaryFromReader);
      msg.setProposal(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposalTimestampSeconds(value);
      break;
    case 6:
      var value = msg.getBallotsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readFixed64, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.Ballot.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.Ballot());
         });
      break;
    case 7:
      var value = new proto.ic_nns_governance.pb.v1.Tally;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Tally.deserializeBinaryFromReader);
      msg.setLatestTally(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecidedTimestampSeconds(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExecutedTimestampSeconds(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFailedTimestampSeconds(value);
      break;
    case 18:
      var value = new proto.ic_nns_governance.pb.v1.GovernanceError;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.GovernanceError.deserializeBinaryFromReader);
      msg.setFailureReason(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRewardEventRound(value);
      break;
    case 15:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.Topic} */ (reader.readEnum());
      msg.setTopic(value);
      break;
    case 16:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.ProposalStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 17:
      var value = /** @type {!proto.ic_nns_governance.pb.v1.ProposalRewardStatus} */ (reader.readEnum());
      msg.setRewardStatus(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDeadlineTimestampSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ProposalInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ProposalInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.ProposalId.serializeBinaryToWriter
    );
  }
  f = message.getProposer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
  f = message.getRejectCostE8s();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getProposal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_nns_governance.pb.v1.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getProposalTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getBallotsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeFixed64, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.Ballot.serializeBinaryToWriter);
  }
  f = message.getLatestTally();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_nns_governance.pb.v1.Tally.serializeBinaryToWriter
    );
  }
  f = message.getDecidedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getExecutedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getFailedTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getFailureReason();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ic_nns_governance.pb.v1.GovernanceError.serializeBinaryToWriter
    );
  }
  f = message.getRewardEventRound();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getTopic();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getRewardStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeUint64(
      19,
      f
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.ProposalId id = 1;
 * @return {?proto.ic_nns_common.pb.v1.ProposalId}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.ProposalId} */ (
    jspb.Message.getWrapperField(this, types_pb.ProposalId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.ProposalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ic_nns_common.pb.v1.NeuronId proposer = 2;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getProposer = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 2));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setProposer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.clearProposer = function() {
  return this.setProposer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.hasProposer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 reject_cost_e8s = 3;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getRejectCostE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setRejectCostE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Proposal proposal = 4;
 * @return {?proto.ic_nns_governance.pb.v1.Proposal}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getProposal = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Proposal} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Proposal, 4));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Proposal|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setProposal = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.clearProposal = function() {
  return this.setProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.hasProposal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 proposal_timestamp_seconds = 5;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getProposalTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setProposalTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * map<fixed64, Ballot> ballots = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Ballot>}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getBallotsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Ballot>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.Ballot));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.clearBallotsMap = function() {
  this.getBallotsMap().clear();
  return this;};


/**
 * optional Tally latest_tally = 7;
 * @return {?proto.ic_nns_governance.pb.v1.Tally}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getLatestTally = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Tally} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Tally, 7));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Tally|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setLatestTally = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.clearLatestTally = function() {
  return this.setLatestTally(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.hasLatestTally = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 decided_timestamp_seconds = 8;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getDecidedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setDecidedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 executed_timestamp_seconds = 12;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getExecutedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setExecutedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 failed_timestamp_seconds = 13;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getFailedTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setFailedTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional GovernanceError failure_reason = 18;
 * @return {?proto.ic_nns_governance.pb.v1.GovernanceError}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getFailureReason = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.GovernanceError} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.GovernanceError, 18));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.GovernanceError|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
*/
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setFailureReason = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.clearFailureReason = function() {
  return this.setFailureReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.hasFailureReason = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint64 reward_event_round = 14;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getRewardEventRound = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setRewardEventRound = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional Topic topic = 15;
 * @return {!proto.ic_nns_governance.pb.v1.Topic}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getTopic = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.Topic} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.Topic} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setTopic = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional ProposalStatus status = 16;
 * @return {!proto.ic_nns_governance.pb.v1.ProposalStatus}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getStatus = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.ProposalStatus} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.ProposalStatus} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional ProposalRewardStatus reward_status = 17;
 * @return {!proto.ic_nns_governance.pb.v1.ProposalRewardStatus}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getRewardStatus = function() {
  return /** @type {!proto.ic_nns_governance.pb.v1.ProposalRewardStatus} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.ProposalRewardStatus} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setRewardStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional uint64 deadline_timestamp_seconds = 19;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.getDeadlineTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.setDeadlineTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.clearDeadlineTimestampSeconds = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ProposalInfo.prototype.hasDeadlineTimestampSeconds = function() {
  return jspb.Message.getField(this, 19) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.NetworkEconomics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.NetworkEconomics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.toObject = function(includeInstance, msg) {
  var f, obj = {
    rejectCostE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    neuronMinimumStakeE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    neuronManagementFeePerProposalE8s: jspb.Message.getFieldWithDefault(msg, 4, 0),
    minimumIcpXdrRate: jspb.Message.getFieldWithDefault(msg, 5, 0),
    neuronSpawnDissolveDelaySeconds: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maximumNodeProviderRewardsE8s: jspb.Message.getFieldWithDefault(msg, 8, 0),
    transactionFeeE8s: jspb.Message.getFieldWithDefault(msg, 9, 0),
    maxProposalsToKeepPerTopic: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.NetworkEconomics;
  return proto.ic_nns_governance.pb.v1.NetworkEconomics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.NetworkEconomics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRejectCostE8s(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronMinimumStakeE8s(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronManagementFeePerProposalE8s(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinimumIcpXdrRate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronSpawnDissolveDelaySeconds(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaximumNodeProviderRewardsE8s(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransactionFeeE8s(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxProposalsToKeepPerTopic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.NetworkEconomics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.NetworkEconomics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRejectCostE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNeuronMinimumStakeE8s();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getNeuronManagementFeePerProposalE8s();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMinimumIcpXdrRate();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getNeuronSpawnDissolveDelaySeconds();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getMaximumNodeProviderRewardsE8s();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getTransactionFeeE8s();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getMaxProposalsToKeepPerTopic();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional uint64 reject_cost_e8s = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getRejectCostE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setRejectCostE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 neuron_minimum_stake_e8s = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getNeuronMinimumStakeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setNeuronMinimumStakeE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 neuron_management_fee_per_proposal_e8s = 4;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getNeuronManagementFeePerProposalE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setNeuronManagementFeePerProposalE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 minimum_icp_xdr_rate = 5;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getMinimumIcpXdrRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setMinimumIcpXdrRate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 neuron_spawn_dissolve_delay_seconds = 6;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getNeuronSpawnDissolveDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setNeuronSpawnDissolveDelaySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 maximum_node_provider_rewards_e8s = 8;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getMaximumNodeProviderRewardsE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setMaximumNodeProviderRewardsE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 transaction_fee_e8s = 9;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getTransactionFeeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setTransactionFeeE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 max_proposals_to_keep_per_topic = 10;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.getMaxProposalsToKeepPerTopic = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.NetworkEconomics} returns this
 */
proto.ic_nns_governance.pb.v1.NetworkEconomics.prototype.setMaxProposalsToKeepPerTopic = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.RewardEvent.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.RewardEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.RewardEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    dayAfterGenesis: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actualTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    settledProposalsList: jspb.Message.toObjectList(msg.getSettledProposalsList(),
    types_pb.ProposalId.toObject, includeInstance),
    distributedE8sEquivalent: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.RewardEvent}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.RewardEvent;
  return proto.ic_nns_governance.pb.v1.RewardEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.RewardEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.RewardEvent}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDayAfterGenesis(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setActualTimestampSeconds(value);
      break;
    case 3:
      var value = new types_pb.ProposalId;
      reader.readMessage(value,types_pb.ProposalId.deserializeBinaryFromReader);
      msg.addSettledProposals(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDistributedE8sEquivalent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.RewardEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.RewardEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.RewardEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDayAfterGenesis();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getActualTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSettledProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      types_pb.ProposalId.serializeBinaryToWriter
    );
  }
  f = message.getDistributedE8sEquivalent();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 day_after_genesis = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.getDayAfterGenesis = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardEvent} returns this
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.setDayAfterGenesis = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 actual_timestamp_seconds = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.getActualTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardEvent} returns this
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.setActualTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated ic_nns_common.pb.v1.ProposalId settled_proposals = 3;
 * @return {!Array<!proto.ic_nns_common.pb.v1.ProposalId>}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.getSettledProposalsList = function() {
  return /** @type{!Array<!proto.ic_nns_common.pb.v1.ProposalId>} */ (
    jspb.Message.getRepeatedWrapperField(this, types_pb.ProposalId, 3));
};


/**
 * @param {!Array<!proto.ic_nns_common.pb.v1.ProposalId>} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardEvent} returns this
*/
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.setSettledProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ic_nns_common.pb.v1.ProposalId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_common.pb.v1.ProposalId}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.addSettledProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ic_nns_common.pb.v1.ProposalId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.RewardEvent} returns this
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.clearSettledProposalsList = function() {
  return this.setSettledProposalsList([]);
};


/**
 * optional uint64 distributed_e8s_equivalent = 4;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.getDistributedE8sEquivalent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.RewardEvent} returns this
 */
proto.ic_nns_governance.pb.v1.RewardEvent.prototype.setDistributedE8sEquivalent = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.KnownNeuron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.KnownNeuron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && types_pb.NeuronId.toObject(includeInstance, f),
    knownNeuronData: (f = msg.getKnownNeuronData()) && proto.ic_nns_governance.pb.v1.KnownNeuronData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuron}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.KnownNeuron;
  return proto.ic_nns_governance.pb.v1.KnownNeuron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.KnownNeuron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuron}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.KnownNeuronData;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.KnownNeuronData.deserializeBinaryFromReader);
      msg.setKnownNeuronData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.KnownNeuron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.KnownNeuron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
  f = message.getKnownNeuronData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.KnownNeuronData.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_nns_common.pb.v1.NeuronId id = 1;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.getId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 1));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional KnownNeuronData known_neuron_data = 2;
 * @return {?proto.ic_nns_governance.pb.v1.KnownNeuronData}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.getKnownNeuronData = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.KnownNeuronData} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.KnownNeuronData, 2));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.KnownNeuronData|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuron} returns this
*/
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.setKnownNeuronData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuron} returns this
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.clearKnownNeuronData = function() {
  return this.setKnownNeuronData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.KnownNeuron.prototype.hasKnownNeuronData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.KnownNeuronData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.KnownNeuronData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuronData}
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.KnownNeuronData;
  return proto.ic_nns_governance.pb.v1.KnownNeuronData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.KnownNeuronData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuronData}
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.KnownNeuronData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.KnownNeuronData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuronData} returns this
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuronData} returns this
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuronData} returns this
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.KnownNeuronData.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.Governance.repeatedFields_ = [3,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Governance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Governance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Governance.toObject = function(includeInstance, msg) {
  var f, obj = {
    neuronsMap: (f = msg.getNeuronsMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.Neuron.toObject) : [],
    proposalsMap: (f = msg.getProposalsMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.ProposalData.toObject) : [],
    toClaimTransfersList: jspb.Message.toObjectList(msg.getToClaimTransfersList(),
    proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.toObject, includeInstance),
    waitForQuietThresholdSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0),
    economics: (f = msg.getEconomics()) && proto.ic_nns_governance.pb.v1.NetworkEconomics.toObject(includeInstance, f),
    latestRewardEvent: (f = msg.getLatestRewardEvent()) && proto.ic_nns_governance.pb.v1.RewardEvent.toObject(includeInstance, f),
    inFlightCommandsMap: (f = msg.getInFlightCommandsMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.toObject) : [],
    genesisTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 11, 0),
    nodeProvidersList: jspb.Message.toObjectList(msg.getNodeProvidersList(),
    proto.ic_nns_governance.pb.v1.NodeProvider.toObject, includeInstance),
    defaultFolloweesMap: (f = msg.getDefaultFolloweesMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.Neuron.Followees.toObject) : [],
    shortVotingPeriodSeconds: jspb.Message.getFieldWithDefault(msg, 14, 0),
    metrics: (f = msg.getMetrics()) && proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.toObject(includeInstance, f),
    mostRecentMonthlyNodeProviderRewards: (f = msg.getMostRecentMonthlyNodeProviderRewards()) && proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Governance}
 */
proto.ic_nns_governance.pb.v1.Governance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Governance;
  return proto.ic_nns_governance.pb.v1.Governance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Governance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Governance}
 */
proto.ic_nns_governance.pb.v1.Governance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getNeuronsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readFixed64, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.Neuron.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.Neuron());
         });
      break;
    case 2:
      var value = msg.getProposalsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.ProposalData.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.ProposalData());
         });
      break;
    case 3:
      var value = new proto.ic_nns_governance.pb.v1.NeuronStakeTransfer;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.deserializeBinaryFromReader);
      msg.addToClaimTransfers(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWaitForQuietThresholdSeconds(value);
      break;
    case 8:
      var value = new proto.ic_nns_governance.pb.v1.NetworkEconomics;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NetworkEconomics.deserializeBinaryFromReader);
      msg.setEconomics(value);
      break;
    case 9:
      var value = new proto.ic_nns_governance.pb.v1.RewardEvent;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.RewardEvent.deserializeBinaryFromReader);
      msg.setLatestRewardEvent(value);
      break;
    case 10:
      var value = msg.getInFlightCommandsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readFixed64, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand());
         });
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGenesisTimestampSeconds(value);
      break;
    case 12:
      var value = new proto.ic_nns_governance.pb.v1.NodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinaryFromReader);
      msg.addNodeProviders(value);
      break;
    case 13:
      var value = msg.getDefaultFolloweesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.Neuron.Followees.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.Neuron.Followees());
         });
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setShortVotingPeriodSeconds(value);
      break;
    case 15:
      var value = new proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 16:
      var value = new proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.deserializeBinaryFromReader);
      msg.setMostRecentMonthlyNodeProviderRewards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Governance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Governance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Governance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeuronsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeFixed64, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.Neuron.serializeBinaryToWriter);
  }
  f = message.getProposalsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.ProposalData.serializeBinaryToWriter);
  }
  f = message.getToClaimTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ic_nns_governance.pb.v1.NeuronStakeTransfer.serializeBinaryToWriter
    );
  }
  f = message.getWaitForQuietThresholdSeconds();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getEconomics();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ic_nns_governance.pb.v1.NetworkEconomics.serializeBinaryToWriter
    );
  }
  f = message.getLatestRewardEvent();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ic_nns_governance.pb.v1.RewardEvent.serializeBinaryToWriter
    );
  }
  f = message.getInFlightCommandsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeFixed64, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.serializeBinaryToWriter);
  }
  f = message.getGenesisTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getNodeProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.ic_nns_governance.pb.v1.NodeProvider.serializeBinaryToWriter
    );
  }
  f = message.getDefaultFolloweesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.Neuron.Followees.serializeBinaryToWriter);
  }
  f = message.getShortVotingPeriodSeconds();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.serializeBinaryToWriter
    );
  }
  f = message.getMostRecentMonthlyNodeProviderRewards();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.serializeBinaryToWriter
    );
  }
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_ = [[2,3,4,5,7,8,9,10]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.CommandCase = {
  COMMAND_NOT_SET: 0,
  DISBURSE: 2,
  SPLIT: 3,
  SPAWN: 4,
  DISBURSE_TO_NEURON: 5,
  MERGE_MATURITY: 7,
  CLAIM_OR_REFRESH_NEURON: 8,
  CONFIGURE: 9,
  MERGE: 10
};

/**
 * @return {proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.CommandCase}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getCommandCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.CommandCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    disburse: (f = msg.getDisburse()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.toObject(includeInstance, f),
    split: (f = msg.getSplit()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Split.toObject(includeInstance, f),
    spawn: (f = msg.getSpawn()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.toObject(includeInstance, f),
    disburseToNeuron: (f = msg.getDisburseToNeuron()) && proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.toObject(includeInstance, f),
    mergeMaturity: (f = msg.getMergeMaturity()) && proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.toObject(includeInstance, f),
    claimOrRefreshNeuron: (f = msg.getClaimOrRefreshNeuron()) && proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.toObject(includeInstance, f),
    configure: (f = msg.getConfigure()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.toObject(includeInstance, f),
    merge: (f = msg.getMerge()) && proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand;
  return proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.deserializeBinaryFromReader);
      msg.setDisburse(value);
      break;
    case 3:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Split;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Split.deserializeBinaryFromReader);
      msg.setSplit(value);
      break;
    case 4:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.deserializeBinaryFromReader);
      msg.setSpawn(value);
      break;
    case 5:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.deserializeBinaryFromReader);
      msg.setDisburseToNeuron(value);
      break;
    case 7:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.deserializeBinaryFromReader);
      msg.setMergeMaturity(value);
      break;
    case 8:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.deserializeBinaryFromReader);
      msg.setClaimOrRefreshNeuron(value);
      break;
    case 9:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Configure;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.deserializeBinaryFromReader);
      msg.setConfigure(value);
      break;
    case 10:
      var value = new proto.ic_nns_governance.pb.v1.ManageNeuron.Merge;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.deserializeBinaryFromReader);
      msg.setMerge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDisburse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse.serializeBinaryToWriter
    );
  }
  f = message.getSplit();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Split.serializeBinaryToWriter
    );
  }
  f = message.getSpawn();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn.serializeBinaryToWriter
    );
  }
  f = message.getDisburseToNeuron();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron.serializeBinaryToWriter
    );
  }
  f = message.getMergeMaturity();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity.serializeBinaryToWriter
    );
  }
  f = message.getClaimOrRefreshNeuron();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh.serializeBinaryToWriter
    );
  }
  f = message.getConfigure();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Configure.serializeBinaryToWriter
    );
  }
  f = message.getMerge();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ic_nns_governance.pb.v1.ManageNeuron.Merge.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ManageNeuron.Disburse disburse = 2;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getDisburse = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse, 2));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Disburse|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setDisburse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearDisburse = function() {
  return this.setDisburse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasDisburse = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ManageNeuron.Split split = 3;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Split}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getSplit = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Split} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Split, 3));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Split|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setSplit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearSplit = function() {
  return this.setSplit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasSplit = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ManageNeuron.Spawn spawn = 4;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getSpawn = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn, 4));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Spawn|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setSpawn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearSpawn = function() {
  return this.setSpawn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasSpawn = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ManageNeuron.DisburseToNeuron disburse_to_neuron = 5;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getDisburseToNeuron = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron, 5));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.DisburseToNeuron|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setDisburseToNeuron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearDisburseToNeuron = function() {
  return this.setDisburseToNeuron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasDisburseToNeuron = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ManageNeuron.MergeMaturity merge_maturity = 7;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getMergeMaturity = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity, 7));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.MergeMaturity|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setMergeMaturity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearMergeMaturity = function() {
  return this.setMergeMaturity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasMergeMaturity = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ManageNeuron.ClaimOrRefresh claim_or_refresh_neuron = 8;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getClaimOrRefreshNeuron = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh, 8));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.ClaimOrRefresh|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setClaimOrRefreshNeuron = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearClaimOrRefreshNeuron = function() {
  return this.setClaimOrRefreshNeuron(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasClaimOrRefreshNeuron = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ManageNeuron.Configure configure = 9;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Configure}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getConfigure = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Configure} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Configure, 9));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Configure|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setConfigure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearConfigure = function() {
  return this.setConfigure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasConfigure = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ManageNeuron.Merge merge = 10;
 * @return {?proto.ic_nns_governance.pb.v1.ManageNeuron.Merge}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.getMerge = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.ManageNeuron.Merge} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.ManageNeuron.Merge, 10));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.ManageNeuron.Merge|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.setMerge = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.clearMerge = function() {
  return this.setMerge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand.prototype.hasMerge = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalSupplyIcp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dissolvingNeuronsCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dissolvingNeuronsE8sBucketsMap: (f = msg.getDissolvingNeuronsE8sBucketsMap()) ? f.toObject(includeInstance, undefined) : [],
    dissolvingNeuronsCountBucketsMap: (f = msg.getDissolvingNeuronsCountBucketsMap()) ? f.toObject(includeInstance, undefined) : [],
    notDissolvingNeuronsCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    notDissolvingNeuronsE8sBucketsMap: (f = msg.getNotDissolvingNeuronsE8sBucketsMap()) ? f.toObject(includeInstance, undefined) : [],
    notDissolvingNeuronsCountBucketsMap: (f = msg.getNotDissolvingNeuronsCountBucketsMap()) ? f.toObject(includeInstance, undefined) : [],
    dissolvedNeuronsCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    dissolvedNeuronsE8s: jspb.Message.getFieldWithDefault(msg, 10, 0),
    garbageCollectableNeuronsCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    neuronsWithInvalidStakeCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    totalStakedE8s: jspb.Message.getFieldWithDefault(msg, 13, 0),
    neuronsWithLessThan6MonthsDissolveDelayCount: jspb.Message.getFieldWithDefault(msg, 14, 0),
    neuronsWithLessThan6MonthsDissolveDelayE8s: jspb.Message.getFieldWithDefault(msg, 15, 0),
    communityFundTotalStakedE8s: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics;
  return proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalSupplyIcp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolvingNeuronsCount(value);
      break;
    case 4:
      var value = msg.getDissolvingNeuronsE8sBucketsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readDouble, null, 0, 0.0);
         });
      break;
    case 5:
      var value = msg.getDissolvingNeuronsCountBucketsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readUint64, null, 0, 0);
         });
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNotDissolvingNeuronsCount(value);
      break;
    case 7:
      var value = msg.getNotDissolvingNeuronsE8sBucketsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readDouble, null, 0, 0.0);
         });
      break;
    case 8:
      var value = msg.getNotDissolvingNeuronsCountBucketsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readUint64, null, 0, 0);
         });
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolvedNeuronsCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolvedNeuronsE8s(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGarbageCollectableNeuronsCount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsWithInvalidStakeCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalStakedE8s(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsWithLessThan6MonthsDissolveDelayCount(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsWithLessThan6MonthsDissolveDelayE8s(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCommunityFundTotalStakedE8s(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTotalSupplyIcp();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDissolvingNeuronsCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getDissolvingNeuronsE8sBucketsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getDissolvingNeuronsCountBucketsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeUint64);
  }
  f = message.getNotDissolvingNeuronsCount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getNotDissolvingNeuronsE8sBucketsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getNotDissolvingNeuronsCountBucketsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeUint64);
  }
  f = message.getDissolvedNeuronsCount();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getDissolvedNeuronsE8s();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getGarbageCollectableNeuronsCount();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getNeuronsWithInvalidStakeCount();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getTotalStakedE8s();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getNeuronsWithLessThan6MonthsDissolveDelayCount();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getNeuronsWithLessThan6MonthsDissolveDelayE8s();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
  f = message.getCommunityFundTotalStakedE8s();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
};


/**
 * optional uint64 timestamp_seconds = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 total_supply_icp = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getTotalSupplyIcp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setTotalSupplyIcp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 dissolving_neurons_count = 3;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getDissolvingNeuronsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setDissolvingNeuronsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<uint64, double> dissolving_neurons_e8s_buckets = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getDissolvingNeuronsE8sBucketsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.clearDissolvingNeuronsE8sBucketsMap = function() {
  this.getDissolvingNeuronsE8sBucketsMap().clear();
  return this;};


/**
 * map<uint64, uint64> dissolving_neurons_count_buckets = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getDissolvingNeuronsCountBucketsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.clearDissolvingNeuronsCountBucketsMap = function() {
  this.getDissolvingNeuronsCountBucketsMap().clear();
  return this;};


/**
 * optional uint64 not_dissolving_neurons_count = 6;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getNotDissolvingNeuronsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setNotDissolvingNeuronsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * map<uint64, double> not_dissolving_neurons_e8s_buckets = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getNotDissolvingNeuronsE8sBucketsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.clearNotDissolvingNeuronsE8sBucketsMap = function() {
  this.getNotDissolvingNeuronsE8sBucketsMap().clear();
  return this;};


/**
 * map<uint64, uint64> not_dissolving_neurons_count_buckets = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getNotDissolvingNeuronsCountBucketsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.clearNotDissolvingNeuronsCountBucketsMap = function() {
  this.getNotDissolvingNeuronsCountBucketsMap().clear();
  return this;};


/**
 * optional uint64 dissolved_neurons_count = 9;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getDissolvedNeuronsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setDissolvedNeuronsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 dissolved_neurons_e8s = 10;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getDissolvedNeuronsE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setDissolvedNeuronsE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 garbage_collectable_neurons_count = 11;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getGarbageCollectableNeuronsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setGarbageCollectableNeuronsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 neurons_with_invalid_stake_count = 12;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getNeuronsWithInvalidStakeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setNeuronsWithInvalidStakeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 total_staked_e8s = 13;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getTotalStakedE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setTotalStakedE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 neurons_with_less_than_6_months_dissolve_delay_count = 14;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getNeuronsWithLessThan6MonthsDissolveDelayCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setNeuronsWithLessThan6MonthsDissolveDelayCount = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint64 neurons_with_less_than_6_months_dissolve_delay_e8s = 15;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getNeuronsWithLessThan6MonthsDissolveDelayE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setNeuronsWithLessThan6MonthsDissolveDelayE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint64 community_fund_total_staked_e8s = 16;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.getCommunityFundTotalStakedE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics.prototype.setCommunityFundTotalStakedE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * map<fixed64, Neuron> neurons = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron>}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getNeuronsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.Neuron));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearNeuronsMap = function() {
  this.getNeuronsMap().clear();
  return this;};


/**
 * map<uint64, ProposalData> proposals = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.ProposalData>}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getProposalsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.ProposalData>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.ProposalData));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearProposalsMap = function() {
  this.getProposalsMap().clear();
  return this;};


/**
 * repeated NeuronStakeTransfer to_claim_transfers = 3;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer>}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getToClaimTransfersList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.NeuronStakeTransfer, 3));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer>} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.prototype.setToClaimTransfersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.NeuronStakeTransfer}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.addToClaimTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ic_nns_governance.pb.v1.NeuronStakeTransfer, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearToClaimTransfersList = function() {
  return this.setToClaimTransfersList([]);
};


/**
 * optional uint64 wait_for_quiet_threshold_seconds = 5;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getWaitForQuietThresholdSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.setWaitForQuietThresholdSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional NetworkEconomics economics = 8;
 * @return {?proto.ic_nns_governance.pb.v1.NetworkEconomics}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getEconomics = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.NetworkEconomics} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.NetworkEconomics, 8));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.NetworkEconomics|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.prototype.setEconomics = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearEconomics = function() {
  return this.setEconomics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.hasEconomics = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RewardEvent latest_reward_event = 9;
 * @return {?proto.ic_nns_governance.pb.v1.RewardEvent}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getLatestRewardEvent = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.RewardEvent} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.RewardEvent, 9));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.RewardEvent|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.prototype.setLatestRewardEvent = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearLatestRewardEvent = function() {
  return this.setLatestRewardEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.hasLatestRewardEvent = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * map<fixed64, NeuronInFlightCommand> in_flight_commands = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand>}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getInFlightCommandsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.Governance.NeuronInFlightCommand));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearInFlightCommandsMap = function() {
  this.getInFlightCommandsMap().clear();
  return this;};


/**
 * optional uint64 genesis_timestamp_seconds = 11;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getGenesisTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.setGenesisTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * repeated NodeProvider node_providers = 12;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.NodeProvider>}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getNodeProvidersList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.NodeProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.NodeProvider, 12));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.NodeProvider>} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.prototype.setNodeProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.NodeProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.addNodeProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.ic_nns_governance.pb.v1.NodeProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearNodeProvidersList = function() {
  return this.setNodeProvidersList([]);
};


/**
 * map<int32, Neuron.Followees> default_followees = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron.Followees>}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getDefaultFolloweesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.Neuron.Followees>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.Neuron.Followees));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearDefaultFolloweesMap = function() {
  this.getDefaultFolloweesMap().clear();
  return this;};


/**
 * optional uint64 short_voting_period_seconds = 14;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getShortVotingPeriodSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.setShortVotingPeriodSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional GovernanceCachedMetrics metrics = 15;
 * @return {?proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getMetrics = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics, 15));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.Governance.GovernanceCachedMetrics|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional MostRecentMonthlyNodeProviderRewards most_recent_monthly_node_provider_rewards = 16;
 * @return {?proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.getMostRecentMonthlyNodeProviderRewards = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards, 16));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
*/
proto.ic_nns_governance.pb.v1.Governance.prototype.setMostRecentMonthlyNodeProviderRewards = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.Governance} returns this
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.clearMostRecentMonthlyNodeProviderRewards = function() {
  return this.setMostRecentMonthlyNodeProviderRewards(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.Governance.prototype.hasMostRecentMonthlyNodeProviderRewards = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ListProposalInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ListProposalInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    beforeProposal: (f = msg.getBeforeProposal()) && types_pb.ProposalId.toObject(includeInstance, f),
    excludeTopicList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    includeRewardStatusList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    includeStatusList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ListProposalInfo;
  return proto.ic_nns_governance.pb.v1.ListProposalInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ListProposalInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 2:
      var value = new types_pb.ProposalId;
      reader.readMessage(value,types_pb.ProposalId.deserializeBinaryFromReader);
      msg.setBeforeProposal(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.ic_nns_governance.pb.v1.Topic>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addExcludeTopic(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<!proto.ic_nns_governance.pb.v1.ProposalRewardStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIncludeRewardStatus(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<!proto.ic_nns_governance.pb.v1.ProposalStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIncludeStatus(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ListProposalInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ListProposalInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBeforeProposal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.ProposalId.serializeBinaryToWriter
    );
  }
  f = message.getExcludeTopicList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getIncludeRewardStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
  f = message.getIncludeStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ic_nns_common.pb.v1.ProposalId before_proposal = 2;
 * @return {?proto.ic_nns_common.pb.v1.ProposalId}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.getBeforeProposal = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.ProposalId} */ (
    jspb.Message.getWrapperField(this, types_pb.ProposalId, 2));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.ProposalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
*/
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.setBeforeProposal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.clearBeforeProposal = function() {
  return this.setBeforeProposal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.hasBeforeProposal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Topic exclude_topic = 3;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.Topic>}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.getExcludeTopicList = function() {
  return /** @type {!Array<!proto.ic_nns_governance.pb.v1.Topic>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.Topic>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.setExcludeTopicList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.Topic} value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.addExcludeTopic = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.clearExcludeTopicList = function() {
  return this.setExcludeTopicList([]);
};


/**
 * repeated ProposalRewardStatus include_reward_status = 4;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.ProposalRewardStatus>}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.getIncludeRewardStatusList = function() {
  return /** @type {!Array<!proto.ic_nns_governance.pb.v1.ProposalRewardStatus>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.ProposalRewardStatus>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.setIncludeRewardStatusList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.ProposalRewardStatus} value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.addIncludeRewardStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.clearIncludeRewardStatusList = function() {
  return this.setIncludeRewardStatusList([]);
};


/**
 * repeated ProposalStatus include_status = 5;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.ProposalStatus>}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.getIncludeStatusList = function() {
  return /** @type {!Array<!proto.ic_nns_governance.pb.v1.ProposalStatus>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.ProposalStatus>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.setIncludeStatusList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.ProposalStatus} value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.addIncludeStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfo} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfo.prototype.clearIncludeStatusList = function() {
  return this.setIncludeStatusList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ListProposalInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    proposalInfoList: jspb.Message.toObjectList(msg.getProposalInfoList(),
    proto.ic_nns_governance.pb.v1.ProposalInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfoResponse}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ListProposalInfoResponse;
  return proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ListProposalInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfoResponse}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.ProposalInfo;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.ProposalInfo.deserializeBinaryFromReader);
      msg.addProposalInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ListProposalInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProposalInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.ProposalInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ProposalInfo proposal_info = 1;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.ProposalInfo>}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.prototype.getProposalInfoList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.ProposalInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.ProposalInfo, 1));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.ProposalInfo>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfoResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.prototype.setProposalInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.ProposalInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.ProposalInfo}
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.prototype.addProposalInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_nns_governance.pb.v1.ProposalInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListProposalInfoResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ListProposalInfoResponse.prototype.clearProposalInfoList = function() {
  return this.setProposalInfoList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ListNeurons.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ListNeurons.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ListNeurons} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListNeurons.toObject = function(includeInstance, msg) {
  var f, obj = {
    neuronIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    includeNeuronsReadableByCaller: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ListNeurons}
 */
proto.ic_nns_governance.pb.v1.ListNeurons.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ListNeurons;
  return proto.ic_nns_governance.pb.v1.ListNeurons.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ListNeurons} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ListNeurons}
 */
proto.ic_nns_governance.pb.v1.ListNeurons.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFixed64() : [reader.readFixed64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addNeuronIds(values[i]);
      }
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeNeuronsReadableByCaller(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ListNeurons.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ListNeurons} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListNeurons.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeuronIdsList();
  if (f.length > 0) {
    writer.writePackedFixed64(
      1,
      f
    );
  }
  f = message.getIncludeNeuronsReadableByCaller();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated fixed64 neuron_ids = 1;
 * @return {!Array<number>}
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.getNeuronIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListNeurons} returns this
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.setNeuronIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.ListNeurons} returns this
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.addNeuronIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListNeurons} returns this
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.clearNeuronIdsList = function() {
  return this.setNeuronIdsList([]);
};


/**
 * optional bool include_neurons_readable_by_caller = 2;
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.getIncludeNeuronsReadableByCaller = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_nns_governance.pb.v1.ListNeurons} returns this
 */
proto.ic_nns_governance.pb.v1.ListNeurons.prototype.setIncludeNeuronsReadableByCaller = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ListNeuronsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    neuronInfosMap: (f = msg.getNeuronInfosMap()) ? f.toObject(includeInstance, proto.ic_nns_governance.pb.v1.NeuronInfo.toObject) : [],
    fullNeuronsList: jspb.Message.toObjectList(msg.getFullNeuronsList(),
    proto.ic_nns_governance.pb.v1.Neuron.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse}
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ListNeuronsResponse;
  return proto.ic_nns_governance.pb.v1.ListNeuronsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse}
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getNeuronInfosMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readFixed64, jspb.BinaryReader.prototype.readMessage, proto.ic_nns_governance.pb.v1.NeuronInfo.deserializeBinaryFromReader, 0, new proto.ic_nns_governance.pb.v1.NeuronInfo());
         });
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.Neuron;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.Neuron.deserializeBinaryFromReader);
      msg.addFullNeurons(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ListNeuronsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeuronInfosMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeFixed64, jspb.BinaryWriter.prototype.writeMessage, proto.ic_nns_governance.pb.v1.NeuronInfo.serializeBinaryToWriter);
  }
  f = message.getFullNeuronsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.Neuron.serializeBinaryToWriter
    );
  }
};


/**
 * map<fixed64, NeuronInfo> neuron_infos = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.NeuronInfo>}
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.getNeuronInfosMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.ic_nns_governance.pb.v1.NeuronInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.ic_nns_governance.pb.v1.NeuronInfo));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.clearNeuronInfosMap = function() {
  this.getNeuronInfosMap().clear();
  return this;};


/**
 * repeated Neuron full_neurons = 2;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.Neuron>}
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.getFullNeuronsList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.Neuron>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.Neuron, 2));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.Neuron>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.setFullNeuronsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.Neuron=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.Neuron}
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.addFullNeurons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ic_nns_governance.pb.v1.Neuron, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListNeuronsResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ListNeuronsResponse.prototype.clearFullNeuronsList = function() {
  return this.setFullNeuronsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    knownNeuronsList: jspb.Message.toObjectList(msg.getKnownNeuronsList(),
    proto.ic_nns_governance.pb.v1.KnownNeuron.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse}
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse;
  return proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse}
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.KnownNeuron;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.KnownNeuron.deserializeBinaryFromReader);
      msg.addKnownNeurons(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKnownNeuronsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.KnownNeuron.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KnownNeuron known_neurons = 1;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.KnownNeuron>}
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.prototype.getKnownNeuronsList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.KnownNeuron>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.KnownNeuron, 1));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.KnownNeuron>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.prototype.setKnownNeuronsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.KnownNeuron=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.KnownNeuron}
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.prototype.addKnownNeurons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_nns_governance.pb.v1.KnownNeuron, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ListKnownNeuronsResponse.prototype.clearKnownNeuronsList = function() {
  return this.setKnownNeuronsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeProvidersList: jspb.Message.toObjectList(msg.getNodeProvidersList(),
    proto.ic_nns_governance.pb.v1.NodeProvider.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse}
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse;
  return proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse}
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.NodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.NodeProvider.deserializeBinaryFromReader);
      msg.addNodeProviders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.NodeProvider.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NodeProvider node_providers = 1;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.NodeProvider>}
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.prototype.getNodeProvidersList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.NodeProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.NodeProvider, 1));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.NodeProvider>} value
 * @return {!proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.prototype.setNodeProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.NodeProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.NodeProvider}
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.prototype.addNodeProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_nns_governance.pb.v1.NodeProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ListNodeProvidersResponse.prototype.clearNodeProvidersList = function() {
  return this.setNodeProvidersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    controller: (f = msg.getController()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    memo: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount;
  return proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setController(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getController();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId controller = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.getController = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount} returns this
*/
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.setController = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount} returns this
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.clearController = function() {
  return this.setController(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.hasController = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 memo = 2;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.getMemo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount} returns this
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccount.prototype.setMemo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  ERROR: 1,
  NEURON_ID: 2
};

/**
 * @return {proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.ResultCase}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.getResultCase = function() {
  return /** @type {proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && proto.ic_nns_governance.pb.v1.GovernanceError.toObject(includeInstance, f),
    neuronId: (f = msg.getNeuronId()) && types_pb.NeuronId.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse;
  return proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_nns_governance.pb.v1.GovernanceError;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.GovernanceError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = new types_pb.NeuronId;
      reader.readMessage(value,types_pb.NeuronId.deserializeBinaryFromReader);
      msg.setNeuronId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_nns_governance.pb.v1.GovernanceError.serializeBinaryToWriter
    );
  }
  f = message.getNeuronId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      types_pb.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional GovernanceError error = 1;
 * @return {?proto.ic_nns_governance.pb.v1.GovernanceError}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.getError = function() {
  return /** @type{?proto.ic_nns_governance.pb.v1.GovernanceError} */ (
    jspb.Message.getWrapperField(this, proto.ic_nns_governance.pb.v1.GovernanceError, 1));
};


/**
 * @param {?proto.ic_nns_governance.pb.v1.GovernanceError|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ic_nns_common.pb.v1.NeuronId neuron_id = 2;
 * @return {?proto.ic_nns_common.pb.v1.NeuronId}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.getNeuronId = function() {
  return /** @type{?proto.ic_nns_common.pb.v1.NeuronId} */ (
    jspb.Message.getWrapperField(this, types_pb.NeuronId, 2));
};


/**
 * @param {?proto.ic_nns_common.pb.v1.NeuronId|undefined} value
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse} returns this
*/
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.setNeuronId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse} returns this
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.clearNeuronId = function() {
  return this.setNeuronId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_nns_governance.pb.v1.ClaimOrRefreshNeuronFromAccountResponse.prototype.hasNeuronId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rewardsList: jspb.Message.toObjectList(msg.getRewardsList(),
    proto.ic_nns_governance.pb.v1.RewardNodeProvider.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards}
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards;
  return proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards}
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new proto.ic_nns_governance.pb.v1.RewardNodeProvider;
      reader.readMessage(value,proto.ic_nns_governance.pb.v1.RewardNodeProvider.deserializeBinaryFromReader);
      msg.addRewards(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRewardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ic_nns_governance.pb.v1.RewardNodeProvider.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 timestamp = 1;
 * @return {number}
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards} returns this
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RewardNodeProvider rewards = 2;
 * @return {!Array<!proto.ic_nns_governance.pb.v1.RewardNodeProvider>}
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.getRewardsList = function() {
  return /** @type{!Array<!proto.ic_nns_governance.pb.v1.RewardNodeProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_nns_governance.pb.v1.RewardNodeProvider, 2));
};


/**
 * @param {!Array<!proto.ic_nns_governance.pb.v1.RewardNodeProvider>} value
 * @return {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards} returns this
*/
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.setRewardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ic_nns_governance.pb.v1.RewardNodeProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_nns_governance.pb.v1.RewardNodeProvider}
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.addRewards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ic_nns_governance.pb.v1.RewardNodeProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards} returns this
 */
proto.ic_nns_governance.pb.v1.MostRecentMonthlyNodeProviderRewards.prototype.clearRewardsList = function() {
  return this.setRewardsList([]);
};


/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.Topic = {
  TOPIC_UNSPECIFIED: 0,
  TOPIC_NEURON_MANAGEMENT: 1,
  TOPIC_EXCHANGE_RATE: 2,
  TOPIC_NETWORK_ECONOMICS: 3,
  TOPIC_GOVERNANCE: 4,
  TOPIC_NODE_ADMIN: 5,
  TOPIC_PARTICIPANT_MANAGEMENT: 6,
  TOPIC_SUBNET_MANAGEMENT: 7,
  TOPIC_NETWORK_CANISTER_MANAGEMENT: 8,
  TOPIC_KYC: 9,
  TOPIC_NODE_PROVIDER_REWARDS: 10,
  TOPIC_SNS_DECENTRALIZATION_SALE: 11
};

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.NeuronState = {
  NEURON_STATE_UNSPECIFIED: 0,
  NEURON_STATE_NOT_DISSOLVING: 1,
  NEURON_STATE_DISSOLVING: 2,
  NEURON_STATE_DISSOLVED: 3
};

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.Vote = {
  VOTE_UNSPECIFIED: 0,
  VOTE_YES: 1,
  VOTE_NO: 2
};

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.NnsFunction = {
  NNS_FUNCTION_UNSPECIFIED: 0,
  NNS_FUNCTION_CREATE_SUBNET: 1,
  NNS_FUNCTION_ADD_NODE_TO_SUBNET: 2,
  NNS_FUNCTION_NNS_CANISTER_INSTALL: 3,
  NNS_FUNCTION_NNS_CANISTER_UPGRADE: 4,
  NNS_FUNCTION_BLESS_REPLICA_VERSION: 5,
  NNS_FUNCTION_RECOVER_SUBNET: 6,
  NNS_FUNCTION_UPDATE_CONFIG_OF_SUBNET: 7,
  NNS_FUNCTION_ASSIGN_NOID: 8,
  NNS_FUNCTION_NNS_ROOT_UPGRADE: 9,
  NNS_FUNCTION_ICP_XDR_CONVERSION_RATE: 10,
  NNS_FUNCTION_UPDATE_SUBNET_REPLICA_VERSION: 11,
  NNS_FUNCTION_CLEAR_PROVISIONAL_WHITELIST: 12,
  NNS_FUNCTION_REMOVE_NODES_FROM_SUBNET: 13,
  NNS_FUNCTION_SET_AUTHORIZED_SUBNETWORKS: 14,
  NNS_FUNCTION_SET_FIREWALL_CONFIG: 15,
  NNS_FUNCTION_UPDATE_NODE_OPERATOR_CONFIG: 16,
  NNS_FUNCTION_STOP_OR_START_NNS_CANISTER: 17,
  NNS_FUNCTION_REMOVE_NODES: 18,
  NNS_FUNCTION_UNINSTALL_CODE: 19,
  NNS_FUNCTION_UPDATE_NODE_REWARDS_TABLE: 20,
  NNS_FUNCTION_ADD_OR_REMOVE_DATA_CENTERS: 21,
  NNS_FUNCTION_UPDATE_UNASSIGNED_NODES_CONFIG: 22,
  NNS_FUNCTION_REMOVE_NODE_OPERATORS: 23,
  NNS_FUNCTION_REROUTE_CANISTER_RANGES: 24,
  NNS_FUNCTION_ADD_FIREWALL_RULES: 25,
  NNS_FUNCTION_REMOVE_FIREWALL_RULES: 26,
  NNS_FUNCTION_UPDATE_FIREWALL_RULES: 27,
  NNS_FUNCTION_PREPARE_CANISTER_MIGRATION: 28,
  NNS_FUNCTION_COMPLETE_CANISTER_MIGRATION: 29
};

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ProposalStatus = {
  PROPOSAL_STATUS_UNSPECIFIED: 0,
  PROPOSAL_STATUS_OPEN: 1,
  PROPOSAL_STATUS_REJECTED: 2,
  PROPOSAL_STATUS_ADOPTED: 3,
  PROPOSAL_STATUS_EXECUTED: 4,
  PROPOSAL_STATUS_FAILED: 5
};

/**
 * @enum {number}
 */
proto.ic_nns_governance.pb.v1.ProposalRewardStatus = {
  PROPOSAL_REWARD_STATUS_UNSPECIFIED: 0,
  PROPOSAL_REWARD_STATUS_ACCEPT_VOTES: 1,
  PROPOSAL_REWARD_STATUS_READY_TO_SETTLE: 2,
  PROPOSAL_REWARD_STATUS_SETTLED: 3,
  PROPOSAL_REWARD_STATUS_INELIGIBLE: 4
};

goog.object.extend(exports, proto.ic_nns_governance.pb.v1);
