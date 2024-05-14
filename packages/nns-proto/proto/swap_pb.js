// source: swap.proto
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
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var base_types_pb = require('./base_types_pb.js');
goog.object.extend(proto, base_types_pb);
var nervous_system_pb = require('./nervous_system_pb.js');
goog.object.extend(proto, nervous_system_pb);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.BuyerState', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.CanisterCallError', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.CfInvestment', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.CfNeuron', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.CfParticipant', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.DerivedState', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.DirectInvestment', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.Type', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.ResultCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.FinalizeSwapRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.FinalizeSwapResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetBuyerStateRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetBuyerStateResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetDerivedStateRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetDerivedStateResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetInitRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetInitResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetLifecycleRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetLifecycleResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetOpenTicketRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetOpenTicketResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.Type', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.ResultCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetSaleParametersRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetSaleParametersResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetStateRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GetStateResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GovernanceError', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.GovernanceError.ErrorType', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ICRC1Account', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.Init', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.Lifecycle', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.LinearScalingCoefficient', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NeuronId', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NeuronsFundParticipants', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NewSaleTicketRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NewSaleTicketResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.Type', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.ResultCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.OpenRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.OpenResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.Params', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.Participant', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.PossibilityCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetDappControllersCallResult', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.PossibilityCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetDappControllersRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetDappControllersResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetModeCallResult', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetModeCallResult.PossibilityCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.ResultCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.PossibilityCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.ResultCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.ResultCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.PossibilityCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SnsNeuronRecipe', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.ClaimedStatus', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.InvestorCase', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.Swap', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.SweepResult', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.Ticket', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.TimeWindow', null, global);
goog.exportSymbol('proto.ic_sns_swap.pb.v1.TransferableAmount', null, global);
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
proto.ic_sns_swap.pb.v1.Swap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.Swap.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.Swap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.Swap.displayName = 'proto.ic_sns_swap.pb.v1.Swap';
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
proto.ic_sns_swap.pb.v1.Init = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.Init.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.Init, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.Init.displayName = 'proto.ic_sns_swap.pb.v1.Init';
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
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.displayName = 'proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints';
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
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.displayName = 'proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction';
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
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.LinearScalingCoefficient, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.displayName = 'proto.ic_sns_swap.pb.v1.LinearScalingCoefficient';
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
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NeuronsFundParticipants, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.displayName = 'proto.ic_sns_swap.pb.v1.NeuronsFundParticipants';
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
proto.ic_sns_swap.pb.v1.CfNeuron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.CfNeuron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.CfNeuron.displayName = 'proto.ic_sns_swap.pb.v1.CfNeuron';
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
proto.ic_sns_swap.pb.v1.CfParticipant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.CfParticipant.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.CfParticipant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.CfParticipant.displayName = 'proto.ic_sns_swap.pb.v1.CfParticipant';
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
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.displayName = 'proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters';
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
proto.ic_sns_swap.pb.v1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.Params.displayName = 'proto.ic_sns_swap.pb.v1.Params';
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
proto.ic_sns_swap.pb.v1.TransferableAmount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.TransferableAmount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.TransferableAmount.displayName = 'proto.ic_sns_swap.pb.v1.TransferableAmount';
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
proto.ic_sns_swap.pb.v1.BuyerState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.BuyerState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.BuyerState.displayName = 'proto.ic_sns_swap.pb.v1.BuyerState';
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
proto.ic_sns_swap.pb.v1.DirectInvestment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.DirectInvestment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.DirectInvestment.displayName = 'proto.ic_sns_swap.pb.v1.DirectInvestment';
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
proto.ic_sns_swap.pb.v1.CfInvestment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.CfInvestment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.CfInvestment.displayName = 'proto.ic_sns_swap.pb.v1.CfInvestment';
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
proto.ic_sns_swap.pb.v1.TimeWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.TimeWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.TimeWindow.displayName = 'proto.ic_sns_swap.pb.v1.TimeWindow';
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
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SnsNeuronRecipe, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.displayName = 'proto.ic_sns_swap.pb.v1.SnsNeuronRecipe';
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
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.displayName = 'proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes';
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
proto.ic_sns_swap.pb.v1.OpenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.OpenRequest.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.OpenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.OpenRequest.displayName = 'proto.ic_sns_swap.pb.v1.OpenRequest';
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
proto.ic_sns_swap.pb.v1.OpenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.OpenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.OpenResponse.displayName = 'proto.ic_sns_swap.pb.v1.OpenResponse';
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
proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest';
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
proto.ic_sns_swap.pb.v1.GetStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetStateRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetStateRequest';
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
proto.ic_sns_swap.pb.v1.GetStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetStateResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetStateResponse';
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
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetBuyerStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetBuyerStateRequest';
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
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetBuyerStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetBuyerStateResponse';
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
proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest';
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
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse';
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
proto.ic_sns_swap.pb.v1.DerivedState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.DerivedState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.DerivedState.displayName = 'proto.ic_sns_swap.pb.v1.DerivedState';
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
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.displayName = 'proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest';
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
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.displayName = 'proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse';
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
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.displayName = 'proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest';
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
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.displayName = 'proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse';
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
proto.ic_sns_swap.pb.v1.FinalizeSwapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.FinalizeSwapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.displayName = 'proto.ic_sns_swap.pb.v1.FinalizeSwapRequest';
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
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.FinalizeSwapResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.displayName = 'proto.ic_sns_swap.pb.v1.FinalizeSwapResponse';
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
proto.ic_sns_swap.pb.v1.SweepResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SweepResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SweepResult.displayName = 'proto.ic_sns_swap.pb.v1.SweepResult';
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
proto.ic_sns_swap.pb.v1.SetModeCallResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SetModeCallResult.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetModeCallResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetModeCallResult.displayName = 'proto.ic_sns_swap.pb.v1.SetModeCallResult';
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
proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.displayName = 'proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult';
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
proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.displayName = 'proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest';
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
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.displayName = 'proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse';
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
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetDappControllersCallResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.displayName = 'proto.ic_sns_swap.pb.v1.SetDappControllersCallResult';
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.displayName = 'proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult';
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.displayName = 'proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error';
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
proto.ic_sns_swap.pb.v1.SetDappControllersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.SetDappControllersRequest.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetDappControllersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetDappControllersRequest.displayName = 'proto.ic_sns_swap.pb.v1.SetDappControllersRequest';
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
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.displayName = 'proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds';
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
proto.ic_sns_swap.pb.v1.SetDappControllersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.SetDappControllersResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetDappControllersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetDappControllersResponse.displayName = 'proto.ic_sns_swap.pb.v1.SetDappControllersResponse';
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
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.displayName = 'proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate';
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
proto.ic_sns_swap.pb.v1.GovernanceError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GovernanceError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GovernanceError.displayName = 'proto.ic_sns_swap.pb.v1.GovernanceError';
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.displayName = 'proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation';
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.displayName = 'proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed';
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.displayName = 'proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron';
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.displayName = 'proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok';
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
proto.ic_sns_swap.pb.v1.NeuronId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NeuronId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NeuronId.displayName = 'proto.ic_sns_swap.pb.v1.NeuronId';
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
proto.ic_sns_swap.pb.v1.CanisterCallError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.CanisterCallError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.CanisterCallError.displayName = 'proto.ic_sns_swap.pb.v1.CanisterCallError';
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.displayName = 'proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest';
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.displayName = 'proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse';
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.displayName = 'proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok';
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.displayName = 'proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err';
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
proto.ic_sns_swap.pb.v1.GetLifecycleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetLifecycleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetLifecycleRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetLifecycleRequest';
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
proto.ic_sns_swap.pb.v1.GetLifecycleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetLifecycleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetLifecycleResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetLifecycleResponse';
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
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest';
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
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse';
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
proto.ic_sns_swap.pb.v1.GetInitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetInitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetInitRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetInitRequest';
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
proto.ic_sns_swap.pb.v1.GetInitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetInitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetInitResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetInitResponse';
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
proto.ic_sns_swap.pb.v1.GetDerivedStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetDerivedStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetDerivedStateRequest';
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
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetDerivedStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetDerivedStateResponse';
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
proto.ic_sns_swap.pb.v1.ICRC1Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ICRC1Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ICRC1Account.displayName = 'proto.ic_sns_swap.pb.v1.ICRC1Account';
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
proto.ic_sns_swap.pb.v1.Ticket = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.Ticket, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.Ticket.displayName = 'proto.ic_sns_swap.pb.v1.Ticket';
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
proto.ic_sns_swap.pb.v1.GetOpenTicketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetOpenTicketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetOpenTicketRequest';
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetOpenTicketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetOpenTicketResponse';
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.displayName = 'proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok';
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.displayName = 'proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err';
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
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NewSaleTicketRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.displayName = 'proto.ic_sns_swap.pb.v1.NewSaleTicketRequest';
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.oneofGroups_);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NewSaleTicketResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.displayName = 'proto.ic_sns_swap.pb.v1.NewSaleTicketResponse';
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.displayName = 'proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok';
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.displayName = 'proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err';
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.displayName = 'proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount';
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
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.displayName = 'proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest';
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
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.displayName = 'proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse';
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
proto.ic_sns_swap.pb.v1.Participant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.Participant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.Participant.displayName = 'proto.ic_sns_swap.pb.v1.Participant';
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
proto.ic_sns_swap.pb.v1.GetSaleParametersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetSaleParametersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.displayName = 'proto.ic_sns_swap.pb.v1.GetSaleParametersRequest';
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
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.GetSaleParametersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.displayName = 'proto.ic_sns_swap.pb.v1.GetSaleParametersResponse';
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
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.displayName = 'proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest';
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
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.displayName = 'proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse';
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
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.displayName = 'proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest';
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
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.displayName = 'proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse';
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
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.displayName = 'proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest';
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
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.displayName = 'proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.Swap.repeatedFields_ = [5,7];



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
proto.ic_sns_swap.pb.v1.Swap.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.Swap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.Swap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Swap.toObject = function(includeInstance, msg) {
  var f, obj = {
    lifecycle: jspb.Message.getFieldWithDefault(msg, 3, 0),
    init: (f = msg.getInit()) && proto.ic_sns_swap.pb.v1.Init.toObject(includeInstance, f),
    params: (f = msg.getParams()) && proto.ic_sns_swap.pb.v1.Params.toObject(includeInstance, f),
    cfParticipantsList: jspb.Message.toObjectList(msg.getCfParticipantsList(),
    proto.ic_sns_swap.pb.v1.CfParticipant.toObject, includeInstance),
    buyersMap: (f = msg.getBuyersMap()) ? f.toObject(includeInstance, proto.ic_sns_swap.pb.v1.BuyerState.toObject) : [],
    neuronRecipesList: jspb.Message.toObjectList(msg.getNeuronRecipesList(),
    proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.toObject, includeInstance),
    openSnsTokenSwapProposalId: jspb.Message.getFieldWithDefault(msg, 9, 0),
    finalizeSwapInProgress: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    decentralizationSaleOpenTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 11, 0),
    decentralizationSwapTerminationTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 21, 0),
    nextTicketId: jspb.Message.getFieldWithDefault(msg, 12, 0),
    purgeOldTicketsLastCompletionTimestampNanoseconds: jspb.Message.getFieldWithDefault(msg, 13, 0),
    purgeOldTicketsNextPrincipal: msg.getPurgeOldTicketsNextPrincipal_asB64(),
    alreadyTriedToAutoFinalize: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    autoFinalizeSwapResponse: (f = msg.getAutoFinalizeSwapResponse()) && proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.toObject(includeInstance, f),
    directParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 19, 0),
    neuronsFundParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 20, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.Swap}
 */
proto.ic_sns_swap.pb.v1.Swap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.Swap;
  return proto.ic_sns_swap.pb.v1.Swap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.Swap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.Swap}
 */
proto.ic_sns_swap.pb.v1.Swap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {!proto.ic_sns_swap.pb.v1.Lifecycle} */ (reader.readEnum());
      msg.setLifecycle(value);
      break;
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Init;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Init.deserializeBinaryFromReader);
      msg.setInit(value);
      break;
    case 4:
      var value = new proto.ic_sns_swap.pb.v1.Params;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 5:
      var value = new proto.ic_sns_swap.pb.v1.CfParticipant;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CfParticipant.deserializeBinaryFromReader);
      msg.addCfParticipants(value);
      break;
    case 6:
      var value = msg.getBuyersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.ic_sns_swap.pb.v1.BuyerState.deserializeBinaryFromReader, "", new proto.ic_sns_swap.pb.v1.BuyerState());
         });
      break;
    case 7:
      var value = new proto.ic_sns_swap.pb.v1.SnsNeuronRecipe;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.deserializeBinaryFromReader);
      msg.addNeuronRecipes(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpenSnsTokenSwapProposalId(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinalizeSwapInProgress(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecentralizationSaleOpenTimestampSeconds(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecentralizationSwapTerminationTimestampSeconds(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNextTicketId(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPurgeOldTicketsLastCompletionTimestampNanoseconds(value);
      break;
    case 14:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPurgeOldTicketsNextPrincipal(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlreadyTriedToAutoFinalize(value);
      break;
    case 18:
      var value = new proto.ic_sns_swap.pb.v1.FinalizeSwapResponse;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.deserializeBinaryFromReader);
      msg.setAutoFinalizeSwapResponse(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDirectParticipationIcpE8s(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsFundParticipationIcpE8s(value);
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
proto.ic_sns_swap.pb.v1.Swap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.Swap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.Swap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Swap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLifecycle();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getInit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Init.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_sns_swap.pb.v1.Params.serializeBinaryToWriter
    );
  }
  f = message.getCfParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.ic_sns_swap.pb.v1.CfParticipant.serializeBinaryToWriter
    );
  }
  f = message.getBuyersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.ic_sns_swap.pb.v1.BuyerState.serializeBinaryToWriter);
  }
  f = message.getNeuronRecipesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBytes(
      14,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getAutoFinalizeSwapResponse();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint64(
      20,
      f
    );
  }
};


/**
 * optional Lifecycle lifecycle = 3;
 * @return {!proto.ic_sns_swap.pb.v1.Lifecycle}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getLifecycle = function() {
  return /** @type {!proto.ic_sns_swap.pb.v1.Lifecycle} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.Lifecycle} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setLifecycle = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional Init init = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Init}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getInit = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Init} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Init, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Init|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
*/
proto.ic_sns_swap.pb.v1.Swap.prototype.setInit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearInit = function() {
  return this.setInit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasInit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Params params = 4;
 * @return {?proto.ic_sns_swap.pb.v1.Params}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getParams = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Params} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Params, 4));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Params|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
*/
proto.ic_sns_swap.pb.v1.Swap.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasParams = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CfParticipant cf_participants = 5;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getCfParticipantsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.CfParticipant, 5));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
*/
proto.ic_sns_swap.pb.v1.Swap.prototype.setCfParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.CfParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.addCfParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ic_sns_swap.pb.v1.CfParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearCfParticipantsList = function() {
  return this.setCfParticipantsList([]);
};


/**
 * map<string, BuyerState> buyers = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.ic_sns_swap.pb.v1.BuyerState>}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getBuyersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.ic_sns_swap.pb.v1.BuyerState>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.ic_sns_swap.pb.v1.BuyerState));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearBuyersMap = function() {
  this.getBuyersMap().clear();
  return this;
};


/**
 * repeated SnsNeuronRecipe neuron_recipes = 7;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe>}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getNeuronRecipesList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe, 7));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe>} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
*/
proto.ic_sns_swap.pb.v1.Swap.prototype.setNeuronRecipesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.addNeuronRecipes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearNeuronRecipesList = function() {
  return this.setNeuronRecipesList([]);
};


/**
 * optional uint64 open_sns_token_swap_proposal_id = 9;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getOpenSnsTokenSwapProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setOpenSnsTokenSwapProposalId = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearOpenSnsTokenSwapProposalId = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasOpenSnsTokenSwapProposalId = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool finalize_swap_in_progress = 10;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getFinalizeSwapInProgress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setFinalizeSwapInProgress = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearFinalizeSwapInProgress = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasFinalizeSwapInProgress = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 decentralization_sale_open_timestamp_seconds = 11;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getDecentralizationSaleOpenTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setDecentralizationSaleOpenTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearDecentralizationSaleOpenTimestampSeconds = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasDecentralizationSaleOpenTimestampSeconds = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint64 decentralization_swap_termination_timestamp_seconds = 21;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getDecentralizationSwapTerminationTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setDecentralizationSwapTerminationTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearDecentralizationSwapTerminationTimestampSeconds = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasDecentralizationSwapTerminationTimestampSeconds = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional uint64 next_ticket_id = 12;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getNextTicketId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setNextTicketId = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearNextTicketId = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasNextTicketId = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint64 purge_old_tickets_last_completion_timestamp_nanoseconds = 13;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getPurgeOldTicketsLastCompletionTimestampNanoseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setPurgeOldTicketsLastCompletionTimestampNanoseconds = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearPurgeOldTicketsLastCompletionTimestampNanoseconds = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasPurgeOldTicketsLastCompletionTimestampNanoseconds = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bytes purge_old_tickets_next_principal = 14;
 * @return {!(string|Uint8Array)}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getPurgeOldTicketsNextPrincipal = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * optional bytes purge_old_tickets_next_principal = 14;
 * This is a type-conversion wrapper around `getPurgeOldTicketsNextPrincipal()`
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getPurgeOldTicketsNextPrincipal_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPurgeOldTicketsNextPrincipal()));
};


/**
 * optional bytes purge_old_tickets_next_principal = 14;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPurgeOldTicketsNextPrincipal()`
 * @return {!Uint8Array}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getPurgeOldTicketsNextPrincipal_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPurgeOldTicketsNextPrincipal()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setPurgeOldTicketsNextPrincipal = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearPurgeOldTicketsNextPrincipal = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasPurgeOldTicketsNextPrincipal = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional bool already_tried_to_auto_finalize = 17;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getAlreadyTriedToAutoFinalize = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setAlreadyTriedToAutoFinalize = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearAlreadyTriedToAutoFinalize = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasAlreadyTriedToAutoFinalize = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional FinalizeSwapResponse auto_finalize_swap_response = 18;
 * @return {?proto.ic_sns_swap.pb.v1.FinalizeSwapResponse}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getAutoFinalizeSwapResponse = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.FinalizeSwapResponse, 18));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.FinalizeSwapResponse|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
*/
proto.ic_sns_swap.pb.v1.Swap.prototype.setAutoFinalizeSwapResponse = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearAutoFinalizeSwapResponse = function() {
  return this.setAutoFinalizeSwapResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasAutoFinalizeSwapResponse = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint64 direct_participation_icp_e8s = 19;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint64 neurons_fund_participation_icp_e8s = 20;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.getNeuronsFundParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.setNeuronsFundParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Swap} returns this
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.clearNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Swap.prototype.hasNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.Init.repeatedFields_ = [11];



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
proto.ic_sns_swap.pb.v1.Init.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.Init.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.Init} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Init.toObject = function(includeInstance, msg) {
  var f, obj = {
    nnsGovernanceCanisterId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    snsGovernanceCanisterId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    snsLedgerCanisterId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    icpLedgerCanisterId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    snsRootCanisterId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    fallbackControllerPrincipalIdsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    transactionFeeE8s: jspb.Message.getFieldWithDefault(msg, 13, 0),
    neuronMinimumStakeE8s: jspb.Message.getFieldWithDefault(msg, 14, 0),
    confirmationText: jspb.Message.getFieldWithDefault(msg, 15, ""),
    restrictedCountries: (f = msg.getRestrictedCountries()) && nervous_system_pb.Countries.toObject(includeInstance, f),
    minParticipants: jspb.Message.getFieldWithDefault(msg, 17, 0),
    minIcpE8s: jspb.Message.getFieldWithDefault(msg, 18, 0),
    maxIcpE8s: jspb.Message.getFieldWithDefault(msg, 19, 0),
    minDirectParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 30, 0),
    maxDirectParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 31, 0),
    minParticipantIcpE8s: jspb.Message.getFieldWithDefault(msg, 20, 0),
    maxParticipantIcpE8s: jspb.Message.getFieldWithDefault(msg, 21, 0),
    swapStartTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 22, 0),
    swapDueTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 23, 0),
    snsTokenE8s: jspb.Message.getFieldWithDefault(msg, 24, 0),
    neuronBasketConstructionParameters: (f = msg.getNeuronBasketConstructionParameters()) && proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.toObject(includeInstance, f),
    nnsProposalId: jspb.Message.getFieldWithDefault(msg, 26, 0),
    neuronsFundParticipants: (f = msg.getNeuronsFundParticipants()) && proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.toObject(includeInstance, f),
    shouldAutoFinalize: jspb.Message.getBooleanFieldWithDefault(msg, 28, false),
    neuronsFundParticipationConstraints: (f = msg.getNeuronsFundParticipationConstraints()) && proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.toObject(includeInstance, f),
    neuronsFundParticipation: jspb.Message.getBooleanFieldWithDefault(msg, 32, false)
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
 * @return {!proto.ic_sns_swap.pb.v1.Init}
 */
proto.ic_sns_swap.pb.v1.Init.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.Init;
  return proto.ic_sns_swap.pb.v1.Init.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.Init} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.Init}
 */
proto.ic_sns_swap.pb.v1.Init.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNnsGovernanceCanisterId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnsGovernanceCanisterId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnsLedgerCanisterId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcpLedgerCanisterId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setSnsRootCanisterId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addFallbackControllerPrincipalIds(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransactionFeeE8s(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronMinimumStakeE8s(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfirmationText(value);
      break;
    case 16:
      var value = new nervous_system_pb.Countries;
      reader.readMessage(value,nervous_system_pb.Countries.deserializeBinaryFromReader);
      msg.setRestrictedCountries(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinParticipants(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinIcpE8s(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxIcpE8s(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinDirectParticipationIcpE8s(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxDirectParticipationIcpE8s(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinParticipantIcpE8s(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxParticipantIcpE8s(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSwapStartTimestampSeconds(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSwapDueTimestampSeconds(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSnsTokenE8s(value);
      break;
    case 25:
      var value = new proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.deserializeBinaryFromReader);
      msg.setNeuronBasketConstructionParameters(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNnsProposalId(value);
      break;
    case 27:
      var value = new proto.ic_sns_swap.pb.v1.NeuronsFundParticipants;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.deserializeBinaryFromReader);
      msg.setNeuronsFundParticipants(value);
      break;
    case 28:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShouldAutoFinalize(value);
      break;
    case 29:
      var value = new proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.deserializeBinaryFromReader);
      msg.setNeuronsFundParticipationConstraints(value);
      break;
    case 32:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeuronsFundParticipation(value);
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
proto.ic_sns_swap.pb.v1.Init.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.Init.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.Init} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Init.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNnsGovernanceCanisterId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSnsGovernanceCanisterId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSnsLedgerCanisterId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIcpLedgerCanisterId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSnsRootCanisterId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getFallbackControllerPrincipalIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getRestrictedCountries();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      nervous_system_pb.Countries.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeUint64(
      18,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeUint64(
      30,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeUint64(
      31,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeUint64(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeUint64(
      24,
      f
    );
  }
  f = message.getNeuronBasketConstructionParameters();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 26));
  if (f != null) {
    writer.writeUint64(
      26,
      f
    );
  }
  f = message.getNeuronsFundParticipants();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 28));
  if (f != null) {
    writer.writeBool(
      28,
      f
    );
  }
  f = message.getNeuronsFundParticipationConstraints();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 32));
  if (f != null) {
    writer.writeBool(
      32,
      f
    );
  }
};


/**
 * optional string nns_governance_canister_id = 1;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getNnsGovernanceCanisterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setNnsGovernanceCanisterId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sns_governance_canister_id = 2;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getSnsGovernanceCanisterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setSnsGovernanceCanisterId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sns_ledger_canister_id = 3;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getSnsLedgerCanisterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setSnsLedgerCanisterId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string icp_ledger_canister_id = 4;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getIcpLedgerCanisterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setIcpLedgerCanisterId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sns_root_canister_id = 12;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getSnsRootCanisterId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setSnsRootCanisterId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * repeated string fallback_controller_principal_ids = 11;
 * @return {!Array<string>}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getFallbackControllerPrincipalIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setFallbackControllerPrincipalIdsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.addFallbackControllerPrincipalIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearFallbackControllerPrincipalIdsList = function() {
  return this.setFallbackControllerPrincipalIdsList([]);
};


/**
 * optional uint64 transaction_fee_e8s = 13;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getTransactionFeeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setTransactionFeeE8s = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearTransactionFeeE8s = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasTransactionFeeE8s = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint64 neuron_minimum_stake_e8s = 14;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getNeuronMinimumStakeE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setNeuronMinimumStakeE8s = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearNeuronMinimumStakeE8s = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasNeuronMinimumStakeE8s = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string confirmation_text = 15;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getConfirmationText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setConfirmationText = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearConfirmationText = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasConfirmationText = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ic_nervous_system.pb.v1.Countries restricted_countries = 16;
 * @return {?proto.ic_nervous_system.pb.v1.Countries}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getRestrictedCountries = function() {
  return /** @type{?proto.ic_nervous_system.pb.v1.Countries} */ (
    jspb.Message.getWrapperField(this, nervous_system_pb.Countries, 16));
};


/**
 * @param {?proto.ic_nervous_system.pb.v1.Countries|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
*/
proto.ic_sns_swap.pb.v1.Init.prototype.setRestrictedCountries = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearRestrictedCountries = function() {
  return this.setRestrictedCountries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasRestrictedCountries = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional uint32 min_participants = 17;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getMinParticipants = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setMinParticipants = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearMinParticipants = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasMinParticipants = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional uint64 min_icp_e8s = 18;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getMinIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setMinIcpE8s = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearMinIcpE8s = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasMinIcpE8s = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional uint64 max_icp_e8s = 19;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getMaxIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setMaxIcpE8s = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearMaxIcpE8s = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasMaxIcpE8s = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint64 min_direct_participation_icp_e8s = 30;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getMinDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setMinDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearMinDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasMinDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional uint64 max_direct_participation_icp_e8s = 31;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getMaxDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setMaxDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearMaxDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasMaxDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional uint64 min_participant_icp_e8s = 20;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getMinParticipantIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setMinParticipantIcpE8s = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearMinParticipantIcpE8s = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasMinParticipantIcpE8s = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional uint64 max_participant_icp_e8s = 21;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getMaxParticipantIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setMaxParticipantIcpE8s = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearMaxParticipantIcpE8s = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasMaxParticipantIcpE8s = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional uint64 swap_start_timestamp_seconds = 22;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getSwapStartTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setSwapStartTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearSwapStartTimestampSeconds = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasSwapStartTimestampSeconds = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional uint64 swap_due_timestamp_seconds = 23;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getSwapDueTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setSwapDueTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearSwapDueTimestampSeconds = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasSwapDueTimestampSeconds = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional uint64 sns_token_e8s = 24;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getSnsTokenE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setSnsTokenE8s = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearSnsTokenE8s = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasSnsTokenE8s = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional NeuronBasketConstructionParameters neuron_basket_construction_parameters = 25;
 * @return {?proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getNeuronBasketConstructionParameters = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters, 25));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
*/
proto.ic_sns_swap.pb.v1.Init.prototype.setNeuronBasketConstructionParameters = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearNeuronBasketConstructionParameters = function() {
  return this.setNeuronBasketConstructionParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasNeuronBasketConstructionParameters = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional uint64 nns_proposal_id = 26;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getNnsProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setNnsProposalId = function(value) {
  return jspb.Message.setField(this, 26, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearNnsProposalId = function() {
  return jspb.Message.setField(this, 26, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasNnsProposalId = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional NeuronsFundParticipants neurons_fund_participants = 27;
 * @return {?proto.ic_sns_swap.pb.v1.NeuronsFundParticipants}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getNeuronsFundParticipants = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.NeuronsFundParticipants} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.NeuronsFundParticipants, 27));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.NeuronsFundParticipants|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
*/
proto.ic_sns_swap.pb.v1.Init.prototype.setNeuronsFundParticipants = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearNeuronsFundParticipants = function() {
  return this.setNeuronsFundParticipants(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasNeuronsFundParticipants = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional bool should_auto_finalize = 28;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getShouldAutoFinalize = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 28, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setShouldAutoFinalize = function(value) {
  return jspb.Message.setField(this, 28, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearShouldAutoFinalize = function() {
  return jspb.Message.setField(this, 28, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasShouldAutoFinalize = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional NeuronsFundParticipationConstraints neurons_fund_participation_constraints = 29;
 * @return {?proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getNeuronsFundParticipationConstraints = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints, 29));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
*/
proto.ic_sns_swap.pb.v1.Init.prototype.setNeuronsFundParticipationConstraints = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearNeuronsFundParticipationConstraints = function() {
  return this.setNeuronsFundParticipationConstraints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasNeuronsFundParticipationConstraints = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional bool neurons_fund_participation = 32;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.getNeuronsFundParticipation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 32, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.setNeuronsFundParticipation = function(value) {
  return jspb.Message.setField(this, 32, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Init} returns this
 */
proto.ic_sns_swap.pb.v1.Init.prototype.clearNeuronsFundParticipation = function() {
  return jspb.Message.setField(this, 32, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Init.prototype.hasNeuronsFundParticipation = function() {
  return jspb.Message.getField(this, 32) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.repeatedFields_ = [3];



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
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
    minDirectParticipationThresholdIcpE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxNeuronsFundParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    coefficientIntervalsList: jspb.Message.toObjectList(msg.getCoefficientIntervalsList(),
    proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.toObject, includeInstance),
    idealMatchedParticipationFunction: (f = msg.getIdealMatchedParticipationFunction()) && proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints;
  return proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinDirectParticipationThresholdIcpE8s(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxNeuronsFundParticipationIcpE8s(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.LinearScalingCoefficient;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.deserializeBinaryFromReader);
      msg.addCoefficientIntervals(value);
      break;
    case 4:
      var value = new proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.deserializeBinaryFromReader);
      msg.setIdealMatchedParticipationFunction(value);
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
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCoefficientIntervalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.serializeBinaryToWriter
    );
  }
  f = message.getIdealMatchedParticipationFunction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 min_direct_participation_threshold_icp_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.getMinDirectParticipationThresholdIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.setMinDirectParticipationThresholdIcpE8s = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.clearMinDirectParticipationThresholdIcpE8s = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.hasMinDirectParticipationThresholdIcpE8s = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 max_neurons_fund_participation_icp_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.getMaxNeuronsFundParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.setMaxNeuronsFundParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.clearMaxNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.hasMaxNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated LinearScalingCoefficient coefficient_intervals = 3;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient>}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.getCoefficientIntervalsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.LinearScalingCoefficient, 3));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient>} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
*/
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.setCoefficientIntervalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.addCoefficientIntervals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ic_sns_swap.pb.v1.LinearScalingCoefficient, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.clearCoefficientIntervalsList = function() {
  return this.setCoefficientIntervalsList([]);
};


/**
 * optional IdealMatchedParticipationFunction ideal_matched_participation_function = 4;
 * @return {?proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.getIdealMatchedParticipationFunction = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction, 4));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
*/
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.setIdealMatchedParticipationFunction = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.clearIdealMatchedParticipationFunction = function() {
  return this.setIdealMatchedParticipationFunction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipationConstraints.prototype.hasIdealMatchedParticipationFunction = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedRepresentation: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction}
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction;
  return proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction}
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerializedRepresentation(value);
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
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string serialized_representation = 1;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.prototype.getSerializedRepresentation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction} returns this
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.prototype.setSerializedRepresentation = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction} returns this
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.prototype.clearSerializedRepresentation = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.IdealMatchedParticipationFunction.prototype.hasSerializedRepresentation = function() {
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
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromDirectParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toDirectParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    slopeNumerator: jspb.Message.getFieldWithDefault(msg, 3, 0),
    slopeDenominator: jspb.Message.getFieldWithDefault(msg, 4, 0),
    interceptIcpE8s: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.LinearScalingCoefficient;
  return proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFromDirectParticipationIcpE8s(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setToDirectParticipationIcpE8s(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSlopeNumerator(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSlopeDenominator(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInterceptIcpE8s(value);
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
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
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
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 from_direct_participation_icp_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.getFromDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.setFromDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.clearFromDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.hasFromDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 to_direct_participation_icp_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.getToDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.setToDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.clearToDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.hasToDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 slope_numerator = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.getSlopeNumerator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.setSlopeNumerator = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.clearSlopeNumerator = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.hasSlopeNumerator = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 slope_denominator = 4;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.getSlopeDenominator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.setSlopeDenominator = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.clearSlopeDenominator = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.hasSlopeDenominator = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 intercept_icp_e8s = 5;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.getInterceptIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.setInterceptIcpE8s = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.LinearScalingCoefficient} returns this
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.clearInterceptIcpE8s = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.LinearScalingCoefficient.prototype.hasInterceptIcpE8s = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.repeatedFields_ = [1];



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
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipants} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.toObject = function(includeInstance, msg) {
  var f, obj = {
    cfParticipantsList: jspb.Message.toObjectList(msg.getCfParticipantsList(),
    proto.ic_sns_swap.pb.v1.CfParticipant.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipants}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NeuronsFundParticipants;
  return proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipants} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipants}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.CfParticipant;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CfParticipant.deserializeBinaryFromReader);
      msg.addCfParticipants(value);
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
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipants} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCfParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.CfParticipant.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CfParticipant cf_participants = 1;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.prototype.getCfParticipantsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.CfParticipant, 1));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipants} returns this
*/
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.prototype.setCfParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.CfParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant}
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.prototype.addCfParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_sns_swap.pb.v1.CfParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronsFundParticipants} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronsFundParticipants.prototype.clearCfParticipantsList = function() {
  return this.setCfParticipantsList([]);
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
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.CfNeuron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.CfNeuron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CfNeuron.toObject = function(includeInstance, msg) {
  var f, obj = {
    nnsNeuronId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    amountIcpE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hasCreatedNeuronRecipes: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.ic_sns_swap.pb.v1.CfNeuron}
 */
proto.ic_sns_swap.pb.v1.CfNeuron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.CfNeuron;
  return proto.ic_sns_swap.pb.v1.CfNeuron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.CfNeuron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.CfNeuron}
 */
proto.ic_sns_swap.pb.v1.CfNeuron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setNnsNeuronId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountIcpE8s(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasCreatedNeuronRecipes(value);
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
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.CfNeuron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.CfNeuron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CfNeuron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNnsNeuronId();
  if (f !== 0) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = message.getAmountIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional fixed64 nns_neuron_id = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.getNnsNeuronId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.CfNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.setNnsNeuronId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 amount_icp_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.getAmountIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.CfNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.setAmountIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool has_created_neuron_recipes = 3;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.getHasCreatedNeuronRecipes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.CfNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.setHasCreatedNeuronRecipes = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.CfNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.clearHasCreatedNeuronRecipes = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.CfNeuron.prototype.hasHasCreatedNeuronRecipes = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.CfParticipant.repeatedFields_ = [2];



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
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.CfParticipant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.CfParticipant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CfParticipant.toObject = function(includeInstance, msg) {
  var f, obj = {
    hotkeyPrincipal: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cfNeuronsList: jspb.Message.toObjectList(msg.getCfNeuronsList(),
    proto.ic_sns_swap.pb.v1.CfNeuron.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant}
 */
proto.ic_sns_swap.pb.v1.CfParticipant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.CfParticipant;
  return proto.ic_sns_swap.pb.v1.CfParticipant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.CfParticipant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant}
 */
proto.ic_sns_swap.pb.v1.CfParticipant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHotkeyPrincipal(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.CfNeuron;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CfNeuron.deserializeBinaryFromReader);
      msg.addCfNeurons(value);
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
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.CfParticipant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.CfParticipant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CfParticipant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHotkeyPrincipal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCfNeuronsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.CfNeuron.serializeBinaryToWriter
    );
  }
};


/**
 * optional string hotkey_principal = 1;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.getHotkeyPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant} returns this
 */
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.setHotkeyPrincipal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CfNeuron cf_neurons = 2;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.CfNeuron>}
 */
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.getCfNeuronsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.CfNeuron>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.CfNeuron, 2));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.CfNeuron>} value
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant} returns this
*/
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.setCfNeuronsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.CfNeuron=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.CfNeuron}
 */
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.addCfNeurons = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ic_sns_swap.pb.v1.CfNeuron, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant} returns this
 */
proto.ic_sns_swap.pb.v1.CfParticipant.prototype.clearCfNeuronsList = function() {
  return this.setCfNeuronsList([]);
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
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    count: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dissolveDelayIntervalSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters}
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters;
  return proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters}
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolveDelayIntervalSeconds(value);
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
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDissolveDelayIntervalSeconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 count = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 dissolve_delay_interval_seconds = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.prototype.getDissolveDelayIntervalSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.prototype.setDissolveDelayIntervalSeconds = function(value) {
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
proto.ic_sns_swap.pb.v1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    minParticipants: jspb.Message.getFieldWithDefault(msg, 1, 0),
    minIcpE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    maxIcpE8s: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minDirectParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 10, 0),
    maxDirectParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 11, 0),
    minParticipantIcpE8s: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxParticipantIcpE8s: jspb.Message.getFieldWithDefault(msg, 5, 0),
    swapDueTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 6, 0),
    snsTokenE8s: jspb.Message.getFieldWithDefault(msg, 7, 0),
    neuronBasketConstructionParameters: (f = msg.getNeuronBasketConstructionParameters()) && proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.toObject(includeInstance, f),
    saleDelaySeconds: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.Params}
 */
proto.ic_sns_swap.pb.v1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.Params;
  return proto.ic_sns_swap.pb.v1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.Params}
 */
proto.ic_sns_swap.pb.v1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinParticipants(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinIcpE8s(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxIcpE8s(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinDirectParticipationIcpE8s(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxDirectParticipationIcpE8s(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinParticipantIcpE8s(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxParticipantIcpE8s(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSwapDueTimestampSeconds(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSnsTokenE8s(value);
      break;
    case 8:
      var value = new proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.deserializeBinaryFromReader);
      msg.setNeuronBasketConstructionParameters(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSaleDelaySeconds(value);
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
proto.ic_sns_swap.pb.v1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinParticipants();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMinIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getMaxIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      3,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getMinParticipantIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMaxParticipantIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSwapDueTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getSnsTokenE8s();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getNeuronBasketConstructionParameters();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * optional uint32 min_participants = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getMinParticipants = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setMinParticipants = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 min_icp_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getMinIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setMinIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 max_icp_e8s = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getMaxIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setMaxIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 min_direct_participation_icp_e8s = 10;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getMinDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setMinDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.clearMinDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.hasMinDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 max_direct_participation_icp_e8s = 11;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getMaxDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setMaxDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.clearMaxDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.hasMaxDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint64 min_participant_icp_e8s = 4;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getMinParticipantIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setMinParticipantIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 max_participant_icp_e8s = 5;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getMaxParticipantIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setMaxParticipantIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 swap_due_timestamp_seconds = 6;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getSwapDueTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setSwapDueTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 sns_token_e8s = 7;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getSnsTokenE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setSnsTokenE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional NeuronBasketConstructionParameters neuron_basket_construction_parameters = 8;
 * @return {?proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getNeuronBasketConstructionParameters = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters, 8));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.NeuronBasketConstructionParameters|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
*/
proto.ic_sns_swap.pb.v1.Params.prototype.setNeuronBasketConstructionParameters = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.clearNeuronBasketConstructionParameters = function() {
  return this.setNeuronBasketConstructionParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.hasNeuronBasketConstructionParameters = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 sale_delay_seconds = 9;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.getSaleDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.setSaleDelaySeconds = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Params} returns this
 */
proto.ic_sns_swap.pb.v1.Params.prototype.clearSaleDelaySeconds = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Params.prototype.hasSaleDelaySeconds = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.TransferableAmount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.TransferableAmount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.toObject = function(includeInstance, msg) {
  var f, obj = {
    amountE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    transferStartTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    transferSuccessTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 3, 0),
    amountTransferredE8s: jspb.Message.getFieldWithDefault(msg, 4, 0),
    transferFeePaidE8s: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.TransferableAmount;
  return proto.ic_sns_swap.pb.v1.TransferableAmount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.TransferableAmount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransferStartTimestampSeconds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransferSuccessTimestampSeconds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountTransferredE8s(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTransferFeePaidE8s(value);
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
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.TransferableAmount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.TransferableAmount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmountE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTransferStartTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTransferSuccessTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 amount_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.getAmountE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount} returns this
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.setAmountE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 transfer_start_timestamp_seconds = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.getTransferStartTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount} returns this
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.setTransferStartTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 transfer_success_timestamp_seconds = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.getTransferSuccessTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount} returns this
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.setTransferSuccessTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 amount_transferred_e8s = 4;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.getAmountTransferredE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount} returns this
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.setAmountTransferredE8s = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount} returns this
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.clearAmountTransferredE8s = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.hasAmountTransferredE8s = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 transfer_fee_paid_e8s = 5;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.getTransferFeePaidE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount} returns this
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.setTransferFeePaidE8s = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.TransferableAmount} returns this
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.clearTransferFeePaidE8s = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.TransferableAmount.prototype.hasTransferFeePaidE8s = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.ic_sns_swap.pb.v1.BuyerState.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.BuyerState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.BuyerState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.BuyerState.toObject = function(includeInstance, msg) {
  var f, obj = {
    icp: (f = msg.getIcp()) && proto.ic_sns_swap.pb.v1.TransferableAmount.toObject(includeInstance, f),
    hasCreatedNeuronRecipes: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.ic_sns_swap.pb.v1.BuyerState}
 */
proto.ic_sns_swap.pb.v1.BuyerState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.BuyerState;
  return proto.ic_sns_swap.pb.v1.BuyerState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.BuyerState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.BuyerState}
 */
proto.ic_sns_swap.pb.v1.BuyerState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
      var value = new proto.ic_sns_swap.pb.v1.TransferableAmount;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.TransferableAmount.deserializeBinaryFromReader);
      msg.setIcp(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasCreatedNeuronRecipes(value);
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
proto.ic_sns_swap.pb.v1.BuyerState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.BuyerState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.BuyerState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.BuyerState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIcp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_sns_swap.pb.v1.TransferableAmount.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional TransferableAmount icp = 5;
 * @return {?proto.ic_sns_swap.pb.v1.TransferableAmount}
 */
proto.ic_sns_swap.pb.v1.BuyerState.prototype.getIcp = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.TransferableAmount} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.TransferableAmount, 5));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.TransferableAmount|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.BuyerState} returns this
*/
proto.ic_sns_swap.pb.v1.BuyerState.prototype.setIcp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.BuyerState} returns this
 */
proto.ic_sns_swap.pb.v1.BuyerState.prototype.clearIcp = function() {
  return this.setIcp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.BuyerState.prototype.hasIcp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool has_created_neuron_recipes = 6;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.BuyerState.prototype.getHasCreatedNeuronRecipes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.BuyerState} returns this
 */
proto.ic_sns_swap.pb.v1.BuyerState.prototype.setHasCreatedNeuronRecipes = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.BuyerState} returns this
 */
proto.ic_sns_swap.pb.v1.BuyerState.prototype.clearHasCreatedNeuronRecipes = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.BuyerState.prototype.hasHasCreatedNeuronRecipes = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.ic_sns_swap.pb.v1.DirectInvestment.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.DirectInvestment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.DirectInvestment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.DirectInvestment.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerPrincipal: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ic_sns_swap.pb.v1.DirectInvestment}
 */
proto.ic_sns_swap.pb.v1.DirectInvestment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.DirectInvestment;
  return proto.ic_sns_swap.pb.v1.DirectInvestment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.DirectInvestment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.DirectInvestment}
 */
proto.ic_sns_swap.pb.v1.DirectInvestment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyerPrincipal(value);
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
proto.ic_sns_swap.pb.v1.DirectInvestment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.DirectInvestment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.DirectInvestment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.DirectInvestment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyerPrincipal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string buyer_principal = 1;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.DirectInvestment.prototype.getBuyerPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.DirectInvestment} returns this
 */
proto.ic_sns_swap.pb.v1.DirectInvestment.prototype.setBuyerPrincipal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.ic_sns_swap.pb.v1.CfInvestment.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.CfInvestment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.CfInvestment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CfInvestment.toObject = function(includeInstance, msg) {
  var f, obj = {
    hotkeyPrincipal: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nnsNeuronId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.CfInvestment}
 */
proto.ic_sns_swap.pb.v1.CfInvestment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.CfInvestment;
  return proto.ic_sns_swap.pb.v1.CfInvestment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.CfInvestment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.CfInvestment}
 */
proto.ic_sns_swap.pb.v1.CfInvestment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHotkeyPrincipal(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setNnsNeuronId(value);
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
proto.ic_sns_swap.pb.v1.CfInvestment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.CfInvestment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.CfInvestment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CfInvestment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHotkeyPrincipal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNnsNeuronId();
  if (f !== 0) {
    writer.writeFixed64(
      2,
      f
    );
  }
};


/**
 * optional string hotkey_principal = 1;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.CfInvestment.prototype.getHotkeyPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.CfInvestment} returns this
 */
proto.ic_sns_swap.pb.v1.CfInvestment.prototype.setHotkeyPrincipal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed64 nns_neuron_id = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.CfInvestment.prototype.getNnsNeuronId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.CfInvestment} returns this
 */
proto.ic_sns_swap.pb.v1.CfInvestment.prototype.setNnsNeuronId = function(value) {
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
proto.ic_sns_swap.pb.v1.TimeWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.TimeWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.TimeWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.TimeWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.TimeWindow}
 */
proto.ic_sns_swap.pb.v1.TimeWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.TimeWindow;
  return proto.ic_sns_swap.pb.v1.TimeWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.TimeWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.TimeWindow}
 */
proto.ic_sns_swap.pb.v1.TimeWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStartTimestampSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEndTimestampSeconds(value);
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
proto.ic_sns_swap.pb.v1.TimeWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.TimeWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.TimeWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.TimeWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEndTimestampSeconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 start_timestamp_seconds = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.TimeWindow.prototype.getStartTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.TimeWindow} returns this
 */
proto.ic_sns_swap.pb.v1.TimeWindow.prototype.setStartTimestampSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 end_timestamp_seconds = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.TimeWindow.prototype.getEndTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.TimeWindow} returns this
 */
proto.ic_sns_swap.pb.v1.TimeWindow.prototype.setEndTimestampSeconds = function(value) {
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
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.InvestorCase = {
  INVESTOR_NOT_SET: 0,
  DIRECT: 2,
  COMMUNITY_FUND: 3
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.InvestorCase}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.getInvestorCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.InvestorCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.toObject = function(includeInstance, msg) {
  var f, obj = {
    sns: (f = msg.getSns()) && proto.ic_sns_swap.pb.v1.TransferableAmount.toObject(includeInstance, f),
    direct: (f = msg.getDirect()) && proto.ic_sns_swap.pb.v1.DirectInvestment.toObject(includeInstance, f),
    communityFund: (f = msg.getCommunityFund()) && proto.ic_sns_swap.pb.v1.CfInvestment.toObject(includeInstance, f),
    neuronAttributes: (f = msg.getNeuronAttributes()) && proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.toObject(includeInstance, f),
    claimedStatus: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SnsNeuronRecipe;
  return proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.TransferableAmount;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.TransferableAmount.deserializeBinaryFromReader);
      msg.setSns(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.DirectInvestment;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.DirectInvestment.deserializeBinaryFromReader);
      msg.setDirect(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.CfInvestment;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CfInvestment.deserializeBinaryFromReader);
      msg.setCommunityFund(value);
      break;
    case 4:
      var value = new proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.deserializeBinaryFromReader);
      msg.setNeuronAttributes(value);
      break;
    case 5:
      var value = /** @type {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.ClaimedStatus} */ (reader.readEnum());
      msg.setClaimedStatus(value);
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
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSns();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.TransferableAmount.serializeBinaryToWriter
    );
  }
  f = message.getDirect();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.DirectInvestment.serializeBinaryToWriter
    );
  }
  f = message.getCommunityFund();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.CfInvestment.serializeBinaryToWriter
    );
  }
  f = message.getNeuronAttributes();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.ClaimedStatus} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.ClaimedStatus = {
  CLAIMED_STATUS_UNSPECIFIED: 0,
  CLAIMED_STATUS_PENDING: 1,
  CLAIMED_STATUS_SUCCESS: 2,
  CLAIMED_STATUS_FAILED: 3,
  CLAIMED_STATUS_INVALID: 4
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.repeatedFields_ = [3];



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
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dissolveDelaySeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    followeesList: jspb.Message.toObjectList(msg.getFolloweesList(),
    proto.ic_sns_swap.pb.v1.NeuronId.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes;
  return proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDissolveDelaySeconds(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.NeuronId;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NeuronId.deserializeBinaryFromReader);
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
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemo();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getDissolveDelaySeconds();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFolloweesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.NeuronId.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 memo = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.getMemo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.setMemo = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 dissolve_delay_seconds = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.getDissolveDelaySeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.setDissolveDelaySeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated NeuronId followees = 3;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.NeuronId>}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.getFolloweesList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.NeuronId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.NeuronId, 3));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.NeuronId>} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} returns this
*/
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.setFolloweesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.NeuronId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.NeuronId}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.addFollowees = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ic_sns_swap.pb.v1.NeuronId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes.prototype.clearFolloweesList = function() {
  return this.setFolloweesList([]);
};


/**
 * optional TransferableAmount sns = 1;
 * @return {?proto.ic_sns_swap.pb.v1.TransferableAmount}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.getSns = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.TransferableAmount} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.TransferableAmount, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.TransferableAmount|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
*/
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.setSns = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.clearSns = function() {
  return this.setSns(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.hasSns = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DirectInvestment direct = 2;
 * @return {?proto.ic_sns_swap.pb.v1.DirectInvestment}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.getDirect = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.DirectInvestment} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.DirectInvestment, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.DirectInvestment|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
*/
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.setDirect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.clearDirect = function() {
  return this.setDirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.hasDirect = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CfInvestment community_fund = 3;
 * @return {?proto.ic_sns_swap.pb.v1.CfInvestment}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.getCommunityFund = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.CfInvestment} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.CfInvestment, 3));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.CfInvestment|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
*/
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.setCommunityFund = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.clearCommunityFund = function() {
  return this.setCommunityFund(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.hasCommunityFund = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional NeuronAttributes neuron_attributes = 4;
 * @return {?proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.getNeuronAttributes = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes, 4));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.NeuronAttributes|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
*/
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.setNeuronAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.clearNeuronAttributes = function() {
  return this.setNeuronAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.hasNeuronAttributes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ClaimedStatus claimed_status = 5;
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.ClaimedStatus}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.getClaimedStatus = function() {
  return /** @type {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.ClaimedStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.ClaimedStatus} value
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.setClaimedStatus = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe} returns this
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.clearClaimedStatus = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.prototype.hasClaimedStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.OpenRequest.repeatedFields_ = [2];



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
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.OpenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.OpenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.OpenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && proto.ic_sns_swap.pb.v1.Params.toObject(includeInstance, f),
    cfParticipantsList: jspb.Message.toObjectList(msg.getCfParticipantsList(),
    proto.ic_sns_swap.pb.v1.CfParticipant.toObject, includeInstance),
    openSnsTokenSwapProposalId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.OpenRequest;
  return proto.ic_sns_swap.pb.v1.OpenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.OpenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Params;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.CfParticipant;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CfParticipant.deserializeBinaryFromReader);
      msg.addCfParticipants(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpenSnsTokenSwapProposalId(value);
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
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.OpenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.OpenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.OpenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Params.serializeBinaryToWriter
    );
  }
  f = message.getCfParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.CfParticipant.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Params}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.getParams = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Params} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Params, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Params|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest} returns this
*/
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest} returns this
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated CfParticipant cf_participants = 2;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.getCfParticipantsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.CfParticipant, 2));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} value
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest} returns this
*/
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.setCfParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.CfParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.addCfParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ic_sns_swap.pb.v1.CfParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest} returns this
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.clearCfParticipantsList = function() {
  return this.setCfParticipantsList([]);
};


/**
 * optional uint64 open_sns_token_swap_proposal_id = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.getOpenSnsTokenSwapProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest} returns this
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.setOpenSnsTokenSwapProposalId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.OpenRequest} returns this
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.clearOpenSnsTokenSwapProposalId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.OpenRequest.prototype.hasOpenSnsTokenSwapProposalId = function() {
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
proto.ic_sns_swap.pb.v1.OpenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.OpenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.OpenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.OpenResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.OpenResponse}
 */
proto.ic_sns_swap.pb.v1.OpenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.OpenResponse;
  return proto.ic_sns_swap.pb.v1.OpenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.OpenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.OpenResponse}
 */
proto.ic_sns_swap.pb.v1.OpenResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.OpenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.OpenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.OpenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.OpenResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest}
 */
proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest;
  return proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest}
 */
proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetCanisterStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetStateRequest}
 */
proto.ic_sns_swap.pb.v1.GetStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetStateRequest;
  return proto.ic_sns_swap.pb.v1.GetStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetStateRequest}
 */
proto.ic_sns_swap.pb.v1.GetStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetStateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    swap: (f = msg.getSwap()) && proto.ic_sns_swap.pb.v1.Swap.toObject(includeInstance, f),
    derived: (f = msg.getDerived()) && proto.ic_sns_swap.pb.v1.DerivedState.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetStateResponse}
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetStateResponse;
  return proto.ic_sns_swap.pb.v1.GetStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetStateResponse}
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Swap;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Swap.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.DerivedState;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.DerivedState.deserializeBinaryFromReader);
      msg.setDerived(value);
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
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Swap.serializeBinaryToWriter
    );
  }
  f = message.getDerived();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.DerivedState.serializeBinaryToWriter
    );
  }
};


/**
 * optional Swap swap = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Swap}
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.getSwap = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Swap} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Swap, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Swap|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetStateResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DerivedState derived = 2;
 * @return {?proto.ic_sns_swap.pb.v1.DerivedState}
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.getDerived = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.DerivedState} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.DerivedState, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.DerivedState|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetStateResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.setDerived = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.clearDerived = function() {
  return this.setDerived(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetStateResponse.prototype.hasDerived = function() {
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
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyerStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    principalId: (f = msg.getPrincipalId()) && base_types_pb.PrincipalId.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateRequest}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetBuyerStateRequest;
  return proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyerStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateRequest}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setPrincipalId(value);
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
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyerStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrincipalId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId principal_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.prototype.getPrincipalId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateRequest} returns this
*/
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.prototype.setPrincipalId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateRequest} returns this
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.prototype.clearPrincipalId = function() {
  return this.setPrincipalId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateRequest.prototype.hasPrincipalId = function() {
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
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyerStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerState: (f = msg.getBuyerState()) && proto.ic_sns_swap.pb.v1.BuyerState.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateResponse}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetBuyerStateResponse;
  return proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyerStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateResponse}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.BuyerState;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.BuyerState.deserializeBinaryFromReader);
      msg.setBuyerState(value);
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
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyerStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyerState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.BuyerState.serializeBinaryToWriter
    );
  }
};


/**
 * optional BuyerState buyer_state = 1;
 * @return {?proto.ic_sns_swap.pb.v1.BuyerState}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.prototype.getBuyerState = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.BuyerState} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.BuyerState, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.BuyerState|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.prototype.setBuyerState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyerStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.prototype.clearBuyerState = function() {
  return this.setBuyerState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetBuyerStateResponse.prototype.hasBuyerState = function() {
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
proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest}
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest;
  return proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest}
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyersTotal: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse}
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse;
  return proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse}
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyersTotal(value);
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
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyersTotal();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 buyers_total = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.prototype.getBuyersTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetBuyersTotalResponse.prototype.setBuyersTotal = function(value) {
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
proto.ic_sns_swap.pb.v1.DerivedState.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.DerivedState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.DerivedState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.DerivedState.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerTotalIcpE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    directParticipantCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cfParticipantCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cfNeuronCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    snsTokensPerIcp: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    directParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 6, 0),
    neuronsFundParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState}
 */
proto.ic_sns_swap.pb.v1.DerivedState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.DerivedState;
  return proto.ic_sns_swap.pb.v1.DerivedState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.DerivedState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState}
 */
proto.ic_sns_swap.pb.v1.DerivedState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerTotalIcpE8s(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDirectParticipantCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCfParticipantCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCfNeuronCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSnsTokensPerIcp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDirectParticipationIcpE8s(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsFundParticipationIcpE8s(value);
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
proto.ic_sns_swap.pb.v1.DerivedState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.DerivedState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.DerivedState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.DerivedState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyerTotalIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSnsTokensPerIcp();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 buyer_total_icp_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.getBuyerTotalIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.setBuyerTotalIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 direct_participant_count = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.getDirectParticipantCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.setDirectParticipantCount = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.clearDirectParticipantCount = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.hasDirectParticipantCount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 cf_participant_count = 4;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.getCfParticipantCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.setCfParticipantCount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.clearCfParticipantCount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.hasCfParticipantCount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 cf_neuron_count = 5;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.getCfNeuronCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.setCfNeuronCount = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.clearCfNeuronCount = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.hasCfNeuronCount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional float sns_tokens_per_icp = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.getSnsTokensPerIcp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.setSnsTokensPerIcp = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional uint64 direct_participation_icp_e8s = 6;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.getDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.setDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.clearDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.hasDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 neurons_fund_participation_icp_e8s = 7;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.getNeuronsFundParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.setNeuronsFundParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.DerivedState} returns this
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.clearNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.DerivedState.prototype.hasNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    openTimeWindow: (f = msg.getOpenTimeWindow()) && proto.ic_sns_swap.pb.v1.TimeWindow.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest}
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest;
  return proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest}
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.TimeWindow;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.TimeWindow.deserializeBinaryFromReader);
      msg.setOpenTimeWindow(value);
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
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenTimeWindow();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.TimeWindow.serializeBinaryToWriter
    );
  }
};


/**
 * optional TimeWindow open_time_window = 1;
 * @return {?proto.ic_sns_swap.pb.v1.TimeWindow}
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.prototype.getOpenTimeWindow = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.TimeWindow} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.TimeWindow, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.TimeWindow|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest} returns this
*/
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.prototype.setOpenTimeWindow = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest} returns this
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.prototype.clearOpenTimeWindow = function() {
  return this.setOpenTimeWindow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowRequest.prototype.hasOpenTimeWindow = function() {
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
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse}
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse;
  return proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse}
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetOpenTimeWindowResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyer: jspb.Message.getFieldWithDefault(msg, 1, ""),
    confirmationText: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest;
  return proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyer(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfirmationText(value);
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
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBuyer();
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
 * optional string buyer = 1;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.getBuyer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest} returns this
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.setBuyer = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string confirmation_text = 2;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.getConfirmationText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest} returns this
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.setConfirmationText = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest} returns this
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.clearConfirmationText = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensRequest.prototype.hasConfirmationText = function() {
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
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    icpAcceptedParticipationE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    icpLedgerAccountBalanceE8s: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse;
  return proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIcpAcceptedParticipationE8s(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIcpLedgerAccountBalanceE8s(value);
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
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIcpAcceptedParticipationE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIcpLedgerAccountBalanceE8s();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 icp_accepted_participation_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.prototype.getIcpAcceptedParticipationE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse} returns this
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.prototype.setIcpAcceptedParticipationE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 icp_ledger_account_balance_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.prototype.getIcpLedgerAccountBalanceE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse} returns this
 */
proto.ic_sns_swap.pb.v1.RefreshBuyerTokensResponse.prototype.setIcpLedgerAccountBalanceE8s = function(value) {
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
proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.FinalizeSwapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapRequest}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.FinalizeSwapRequest;
  return proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.FinalizeSwapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapRequest}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.FinalizeSwapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sweepIcpResult: (f = msg.getSweepIcpResult()) && proto.ic_sns_swap.pb.v1.SweepResult.toObject(includeInstance, f),
    sweepSnsResult: (f = msg.getSweepSnsResult()) && proto.ic_sns_swap.pb.v1.SweepResult.toObject(includeInstance, f),
    claimNeuronResult: (f = msg.getClaimNeuronResult()) && proto.ic_sns_swap.pb.v1.SweepResult.toObject(includeInstance, f),
    setModeCallResult: (f = msg.getSetModeCallResult()) && proto.ic_sns_swap.pb.v1.SetModeCallResult.toObject(includeInstance, f),
    setDappControllersCallResult: (f = msg.getSetDappControllersCallResult()) && proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.toObject(includeInstance, f),
    settleCommunityFundParticipationResult: (f = msg.getSettleCommunityFundParticipationResult()) && proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.toObject(includeInstance, f),
    createSnsNeuronRecipesResult: (f = msg.getCreateSnsNeuronRecipesResult()) && proto.ic_sns_swap.pb.v1.SweepResult.toObject(includeInstance, f),
    settleNeuronsFundParticipationResult: (f = msg.getSettleNeuronsFundParticipationResult()) && proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.toObject(includeInstance, f),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.FinalizeSwapResponse;
  return proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SweepResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SweepResult.deserializeBinaryFromReader);
      msg.setSweepIcpResult(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.SweepResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SweepResult.deserializeBinaryFromReader);
      msg.setSweepSnsResult(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.SweepResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SweepResult.deserializeBinaryFromReader);
      msg.setClaimNeuronResult(value);
      break;
    case 4:
      var value = new proto.ic_sns_swap.pb.v1.SetModeCallResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SetModeCallResult.deserializeBinaryFromReader);
      msg.setSetModeCallResult(value);
      break;
    case 5:
      var value = new proto.ic_sns_swap.pb.v1.SetDappControllersCallResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.deserializeBinaryFromReader);
      msg.setSetDappControllersCallResult(value);
      break;
    case 6:
      var value = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.deserializeBinaryFromReader);
      msg.setSettleCommunityFundParticipationResult(value);
      break;
    case 8:
      var value = new proto.ic_sns_swap.pb.v1.SweepResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SweepResult.deserializeBinaryFromReader);
      msg.setCreateSnsNeuronRecipesResult(value);
      break;
    case 9:
      var value = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.deserializeBinaryFromReader);
      msg.setSettleNeuronsFundParticipationResult(value);
      break;
    case 7:
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
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSweepIcpResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SweepResult.serializeBinaryToWriter
    );
  }
  f = message.getSweepSnsResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.SweepResult.serializeBinaryToWriter
    );
  }
  f = message.getClaimNeuronResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.SweepResult.serializeBinaryToWriter
    );
  }
  f = message.getSetModeCallResult();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_sns_swap.pb.v1.SetModeCallResult.serializeBinaryToWriter
    );
  }
  f = message.getSetDappControllersCallResult();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.serializeBinaryToWriter
    );
  }
  f = message.getSettleCommunityFundParticipationResult();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.serializeBinaryToWriter
    );
  }
  f = message.getCreateSnsNeuronRecipesResult();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ic_sns_swap.pb.v1.SweepResult.serializeBinaryToWriter
    );
  }
  f = message.getSettleNeuronsFundParticipationResult();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional SweepResult sweep_icp_result = 1;
 * @return {?proto.ic_sns_swap.pb.v1.SweepResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getSweepIcpResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SweepResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SweepResult, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SweepResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setSweepIcpResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearSweepIcpResult = function() {
  return this.setSweepIcpResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasSweepIcpResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SweepResult sweep_sns_result = 2;
 * @return {?proto.ic_sns_swap.pb.v1.SweepResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getSweepSnsResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SweepResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SweepResult, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SweepResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setSweepSnsResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearSweepSnsResult = function() {
  return this.setSweepSnsResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasSweepSnsResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SweepResult claim_neuron_result = 3;
 * @return {?proto.ic_sns_swap.pb.v1.SweepResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getClaimNeuronResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SweepResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SweepResult, 3));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SweepResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setClaimNeuronResult = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearClaimNeuronResult = function() {
  return this.setClaimNeuronResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasClaimNeuronResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SetModeCallResult set_mode_call_result = 4;
 * @return {?proto.ic_sns_swap.pb.v1.SetModeCallResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getSetModeCallResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SetModeCallResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SetModeCallResult, 4));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SetModeCallResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setSetModeCallResult = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearSetModeCallResult = function() {
  return this.setSetModeCallResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasSetModeCallResult = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SetDappControllersCallResult set_dapp_controllers_call_result = 5;
 * @return {?proto.ic_sns_swap.pb.v1.SetDappControllersCallResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getSetDappControllersCallResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SetDappControllersCallResult, 5));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SetDappControllersCallResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setSetDappControllersCallResult = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearSetDappControllersCallResult = function() {
  return this.setSetDappControllersCallResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasSetDappControllersCallResult = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SettleCommunityFundParticipationResult settle_community_fund_participation_result = 6;
 * @return {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getSettleCommunityFundParticipationResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult, 6));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setSettleCommunityFundParticipationResult = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearSettleCommunityFundParticipationResult = function() {
  return this.setSettleCommunityFundParticipationResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasSettleCommunityFundParticipationResult = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SweepResult create_sns_neuron_recipes_result = 8;
 * @return {?proto.ic_sns_swap.pb.v1.SweepResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getCreateSnsNeuronRecipesResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SweepResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SweepResult, 8));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SweepResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setCreateSnsNeuronRecipesResult = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearCreateSnsNeuronRecipesResult = function() {
  return this.setCreateSnsNeuronRecipesResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasCreateSnsNeuronRecipesResult = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SettleNeuronsFundParticipationResult settle_neurons_fund_participation_result = 9;
 * @return {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getSettleNeuronsFundParticipationResult = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult, 9));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
*/
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setSettleNeuronsFundParticipationResult = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearSettleNeuronsFundParticipationResult = function() {
  return this.setSettleNeuronsFundParticipationResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasSettleNeuronsFundParticipationResult = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string error_message = 7;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} returns this
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.prototype.hasErrorMessage = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.ic_sns_swap.pb.v1.SweepResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SweepResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SweepResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SweepResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, 0),
    failure: jspb.Message.getFieldWithDefault(msg, 2, 0),
    skipped: jspb.Message.getFieldWithDefault(msg, 3, 0),
    invalid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    globalFailures: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.SweepResult}
 */
proto.ic_sns_swap.pb.v1.SweepResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SweepResult;
  return proto.ic_sns_swap.pb.v1.SweepResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SweepResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SweepResult}
 */
proto.ic_sns_swap.pb.v1.SweepResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFailure(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSkipped(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInvalid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGlobalFailures(value);
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
proto.ic_sns_swap.pb.v1.SweepResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SweepResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SweepResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SweepResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFailure();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSkipped();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getInvalid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getGlobalFailures();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 success = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.getSuccess = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SweepResult} returns this
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 failure = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.getFailure = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SweepResult} returns this
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.setFailure = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 skipped = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.getSkipped = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SweepResult} returns this
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.setSkipped = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 invalid = 4;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.getInvalid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SweepResult} returns this
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.setInvalid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 global_failures = 5;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.getGlobalFailures = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SweepResult} returns this
 */
proto.ic_sns_swap.pb.v1.SweepResult.prototype.setGlobalFailures = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.PossibilityCase = {
  POSSIBILITY_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SetModeCallResult.PossibilityCase}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.getPossibilityCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SetModeCallResult.PossibilityCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SetModeCallResult.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetModeCallResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetModeCallResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.CanisterCallError.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetModeCallResult;
  return proto.ic_sns_swap.pb.v1.SetModeCallResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetModeCallResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.CanisterCallError;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetModeCallResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetModeCallResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.CanisterCallError.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult;
  return proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional SetModeResult ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SetModeCallResult.SetModeResult|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult} returns this
*/
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.SetModeCallResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult} returns this
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CanisterCallError err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.CanisterCallError}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.CanisterCallError} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.CanisterCallError, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.CanisterCallError|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult} returns this
*/
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SetModeCallResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetModeCallResult} returns this
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetModeCallResult.prototype.hasErr = function() {
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
proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest;
  return proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.PossibilityCase = {
  POSSIBILITY_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.PossibilityCase}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.getPossibilityCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.PossibilityCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.SetDappControllersResponse.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.CanisterCallError.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse;
  return proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SetDappControllersResponse;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SetDappControllersResponse.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.CanisterCallError;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SetDappControllersResponse.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.CanisterCallError.serializeBinaryToWriter
    );
  }
};


/**
 * optional SetDappControllersResponse ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.SetDappControllersResponse}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SetDappControllersResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SetDappControllersResponse, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SetDappControllersResponse|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse} returns this
*/
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse} returns this
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CanisterCallError err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.CanisterCallError}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.CanisterCallError} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.CanisterCallError, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.CanisterCallError|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse} returns this
*/
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse} returns this
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.RestoreDappControllersResponse.prototype.hasErr = function() {
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
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.PossibilityCase = {
  POSSIBILITY_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.PossibilityCase}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.getPossibilityCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.PossibilityCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.SetDappControllersResponse.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.CanisterCallError.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetDappControllersCallResult;
  return proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SetDappControllersResponse;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SetDappControllersResponse.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.CanisterCallError;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SetDappControllersResponse.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.CanisterCallError.serializeBinaryToWriter
    );
  }
};


/**
 * optional SetDappControllersResponse ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.SetDappControllersResponse}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SetDappControllersResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SetDappControllersResponse, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SetDappControllersResponse|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CanisterCallError err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.CanisterCallError}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.CanisterCallError} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.CanisterCallError, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.CanisterCallError|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersCallResult} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersCallResult.prototype.hasErr = function() {
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.PossibilityCase = {
  POSSIBILITY_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.PossibilityCase}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.getPossibilityCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.PossibilityCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.CanisterCallError.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult;
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.CanisterCallError;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.CanisterCallError.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    governanceError: (f = msg.getGovernanceError()) && proto.ic_sns_swap.pb.v1.GovernanceError.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response;
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.GovernanceError;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.GovernanceError.deserializeBinaryFromReader);
      msg.setGovernanceError(value);
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGovernanceError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.GovernanceError.serializeBinaryToWriter
    );
  }
};


/**
 * optional GovernanceError governance_error = 1;
 * @return {?proto.ic_sns_swap.pb.v1.GovernanceError}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.prototype.getGovernanceError = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.GovernanceError} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.GovernanceError, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.GovernanceError|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response} returns this
*/
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.prototype.setGovernanceError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.prototype.clearGovernanceError = function() {
  return this.setGovernanceError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response.prototype.hasGovernanceError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Response ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.Response|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} returns this
*/
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CanisterCallError err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.CanisterCallError}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.CanisterCallError} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.CanisterCallError, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.CanisterCallError|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} returns this
*/
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipationResult.prototype.hasErr = function() {
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.PossibilityCase = {
  POSSIBILITY_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.PossibilityCase}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.getPossibilityCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.PossibilityCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.toObject = function(includeInstance, msg) {
  var f, obj = {
    neuronsFundParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    neuronsFundNeuronsCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsFundParticipationIcpE8s(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsFundNeuronsCount(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 neurons_fund_participation_icp_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.getNeuronsFundParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.setNeuronsFundParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.clearNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.hasNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 neurons_fund_neurons_count = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.getNeuronsFundNeuronsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.setNeuronsFundNeuronsCount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.clearNeuronsFundNeuronsCount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok.prototype.hasNeuronsFundNeuronsCount = function() {
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ok ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Ok|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Error err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.Error|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResult.prototype.hasErr = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.repeatedFields_ = [2];



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
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetDappControllersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    canisterIds: (f = msg.getCanisterIds()) && proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.toObject(includeInstance, f),
    controllerPrincipalIdsList: jspb.Message.toObjectList(msg.getControllerPrincipalIdsList(),
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
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetDappControllersRequest;
  return proto.ic_sns_swap.pb.v1.SetDappControllersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.deserializeBinaryFromReader);
      msg.setCanisterIds(value);
      break;
    case 2:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.addControllerPrincipalIds(value);
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
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetDappControllersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanisterIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.serializeBinaryToWriter
    );
  }
  f = message.getControllerPrincipalIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.repeatedFields_ = [1];



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
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.toObject = function(includeInstance, msg) {
  var f, obj = {
    canisterIdsList: jspb.Message.toObjectList(msg.getCanisterIdsList(),
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
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds;
  return proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.addCanisterIds(value);
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
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanisterIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ic_base_types.pb.v1.PrincipalId canister_ids = 1;
 * @return {!Array<!proto.ic_base_types.pb.v1.PrincipalId>}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.prototype.getCanisterIdsList = function() {
  return /** @type{!Array<!proto.ic_base_types.pb.v1.PrincipalId>} */ (
    jspb.Message.getRepeatedWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {!Array<!proto.ic_base_types.pb.v1.PrincipalId>} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.prototype.setCanisterIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_base_types.pb.v1.PrincipalId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.prototype.addCanisterIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_base_types.pb.v1.PrincipalId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds.prototype.clearCanisterIdsList = function() {
  return this.setCanisterIdsList([]);
};


/**
 * optional CanisterIds canister_ids = 1;
 * @return {?proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.getCanisterIds = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SetDappControllersRequest.CanisterIds|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.setCanisterIds = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.clearCanisterIds = function() {
  return this.setCanisterIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.hasCanisterIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ic_base_types.pb.v1.PrincipalId controller_principal_ids = 2;
 * @return {!Array<!proto.ic_base_types.pb.v1.PrincipalId>}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.getControllerPrincipalIdsList = function() {
  return /** @type{!Array<!proto.ic_base_types.pb.v1.PrincipalId>} */ (
    jspb.Message.getRepeatedWrapperField(this, base_types_pb.PrincipalId, 2));
};


/**
 * @param {!Array<!proto.ic_base_types.pb.v1.PrincipalId>} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.setControllerPrincipalIdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ic_base_types.pb.v1.PrincipalId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.addControllerPrincipalIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ic_base_types.pb.v1.PrincipalId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersRequest} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersRequest.prototype.clearControllerPrincipalIdsList = function() {
  return this.setControllerPrincipalIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.repeatedFields_ = [1];



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
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetDappControllersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    failedUpdatesList: jspb.Message.toObjectList(msg.getFailedUpdatesList(),
    proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetDappControllersResponse;
  return proto.ic_sns_swap.pb.v1.SetDappControllersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.deserializeBinaryFromReader);
      msg.addFailedUpdates(value);
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
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetDappControllersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFailedUpdatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    dappCanisterId: (f = msg.getDappCanisterId()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.CanisterCallError.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate;
  return proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setDappCanisterId(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.CanisterCallError;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDappCanisterId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.CanisterCallError.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId dapp_canister_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.getDappCanisterId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.setDappCanisterId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.clearDappCanisterId = function() {
  return this.setDappCanisterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.hasDappCanisterId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CanisterCallError err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.CanisterCallError}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.CanisterCallError} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.CanisterCallError, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.CanisterCallError|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.setErr = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate.prototype.hasErr = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated FailedUpdate failed_updates = 1;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate>}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.prototype.getFailedUpdatesList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate, 1));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate>} value
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse} returns this
*/
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.prototype.setFailedUpdatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate}
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.prototype.addFailedUpdates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_sns_swap.pb.v1.SetDappControllersResponse.FailedUpdate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.SetDappControllersResponse} returns this
 */
proto.ic_sns_swap.pb.v1.SetDappControllersResponse.prototype.clearFailedUpdatesList = function() {
  return this.setFailedUpdatesList([]);
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
proto.ic_sns_swap.pb.v1.GovernanceError.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GovernanceError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GovernanceError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GovernanceError.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GovernanceError}
 */
proto.ic_sns_swap.pb.v1.GovernanceError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GovernanceError;
  return proto.ic_sns_swap.pb.v1.GovernanceError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GovernanceError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GovernanceError}
 */
proto.ic_sns_swap.pb.v1.GovernanceError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_sns_swap.pb.v1.GovernanceError.ErrorType} */ (reader.readEnum());
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
proto.ic_sns_swap.pb.v1.GovernanceError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GovernanceError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GovernanceError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GovernanceError.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GovernanceError.ErrorType = {
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
 * @return {!proto.ic_sns_swap.pb.v1.GovernanceError.ErrorType}
 */
proto.ic_sns_swap.pb.v1.GovernanceError.prototype.getErrorType = function() {
  return /** @type {!proto.ic_sns_swap.pb.v1.GovernanceError.ErrorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.GovernanceError.ErrorType} value
 * @return {!proto.ic_sns_swap.pb.v1.GovernanceError} returns this
 */
proto.ic_sns_swap.pb.v1.GovernanceError.prototype.setErrorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.GovernanceError.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.GovernanceError} returns this
 */
proto.ic_sns_swap.pb.v1.GovernanceError.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.ResultCase = {
  RESULT_NOT_SET: 0,
  COMMITTED: 2,
  ABORTED: 3
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.ResultCase}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.getResultCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.toObject = function(includeInstance, msg) {
  var f, obj = {
    openSnsTokenSwapProposalId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    committed: (f = msg.getCommitted()) && proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.toObject(includeInstance, f),
    aborted: (f = msg.getAborted()) && proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation;
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpenSnsTokenSwapProposalId(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.deserializeBinaryFromReader);
      msg.setCommitted(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.deserializeBinaryFromReader);
      msg.setAborted(value);
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCommitted();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.serializeBinaryToWriter
    );
  }
  f = message.getAborted();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.toObject = function(includeInstance, msg) {
  var f, obj = {
    snsGovernanceCanisterId: (f = msg.getSnsGovernanceCanisterId()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    totalDirectContributionIcpE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalNeuronsFundContributionIcpE8s: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed;
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setSnsGovernanceCanisterId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalDirectContributionIcpE8s(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalNeuronsFundContributionIcpE8s(value);
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnsGovernanceCanisterId();
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
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId sns_governance_canister_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.getSnsGovernanceCanisterId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} returns this
*/
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.setSnsGovernanceCanisterId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.clearSnsGovernanceCanisterId = function() {
  return this.setSnsGovernanceCanisterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.hasSnsGovernanceCanisterId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 total_direct_contribution_icp_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.getTotalDirectContributionIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.setTotalDirectContributionIcpE8s = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.clearTotalDirectContributionIcpE8s = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.hasTotalDirectContributionIcpE8s = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 total_neurons_fund_contribution_icp_e8s = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.getTotalNeuronsFundContributionIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.setTotalNeuronsFundContributionIcpE8s = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.clearTotalNeuronsFundContributionIcpE8s = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed.prototype.hasTotalNeuronsFundContributionIcpE8s = function() {
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted;
  return proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional uint64 open_sns_token_swap_proposal_id = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.getOpenSnsTokenSwapProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.setOpenSnsTokenSwapProposalId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.clearOpenSnsTokenSwapProposalId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.hasOpenSnsTokenSwapProposalId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Committed committed = 2;
 * @return {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.getCommitted = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Committed|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} returns this
*/
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.setCommitted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.clearCommitted = function() {
  return this.setCommitted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.hasCommitted = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Aborted aborted = 3;
 * @return {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.getAborted = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted, 3));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.Aborted|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} returns this
*/
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.setAborted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation} returns this
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.clearAborted = function() {
  return this.setAborted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleCommunityFundParticipation.prototype.hasAborted = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.ResultCase = {
  RESULT_NOT_SET: 0,
  COMMITTED: 2,
  ABORTED: 3
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.ResultCase}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.getResultCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    nnsProposalId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    committed: (f = msg.getCommitted()) && proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.toObject(includeInstance, f),
    aborted: (f = msg.getAborted()) && proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNnsProposalId(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.deserializeBinaryFromReader);
      msg.setCommitted(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.deserializeBinaryFromReader);
      msg.setAborted(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCommitted();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.serializeBinaryToWriter
    );
  }
  f = message.getAborted();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.toObject = function(includeInstance, msg) {
  var f, obj = {
    snsGovernanceCanisterId: (f = msg.getSnsGovernanceCanisterId()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    totalDirectParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalNeuronsFundParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setSnsGovernanceCanisterId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalDirectParticipationIcpE8s(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalNeuronsFundParticipationIcpE8s(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnsGovernanceCanisterId();
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
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId sns_governance_canister_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.getSnsGovernanceCanisterId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.setSnsGovernanceCanisterId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.clearSnsGovernanceCanisterId = function() {
  return this.setSnsGovernanceCanisterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.hasSnsGovernanceCanisterId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 total_direct_participation_icp_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.getTotalDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.setTotalDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.clearTotalDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.hasTotalDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 total_neurons_fund_participation_icp_e8s = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.getTotalNeuronsFundParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.setTotalNeuronsFundParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.clearTotalNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed.prototype.hasTotalNeuronsFundParticipationIcpE8s = function() {
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional uint64 nns_proposal_id = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.getNnsProposalId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.setNnsProposalId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.clearNnsProposalId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.hasNnsProposalId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Committed committed = 2;
 * @return {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.getCommitted = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Committed|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.setCommitted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.clearCommitted = function() {
  return this.setCommitted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.hasCommitted = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Aborted aborted = 3;
 * @return {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.getAborted = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted, 3));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.Aborted|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.setAborted = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.clearAborted = function() {
  return this.setAborted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationRequest.prototype.hasAborted = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  ERR: 1,
  OK: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.ResultCase}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.getResultCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.GovernanceError.toObject(includeInstance, f),
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.GovernanceError;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.GovernanceError.deserializeBinaryFromReader);
      msg.setErr(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.deserializeBinaryFromReader);
      msg.setOk(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.GovernanceError.serializeBinaryToWriter
    );
  }
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.toObject = function(includeInstance, msg) {
  var f, obj = {
    nnsNeuronId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    amountIcpE8s: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hotkeyPrincipal: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isCapped: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNnsNeuronId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountIcpE8s(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHotkeyPrincipal(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCapped(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional uint64 nns_neuron_id = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.getNnsNeuronId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.setNnsNeuronId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.clearNnsNeuronId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.hasNnsNeuronId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amount_icp_e8s = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.getAmountIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.setAmountIcpE8s = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.clearAmountIcpE8s = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.hasAmountIcpE8s = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string hotkey_principal = 3;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.getHotkeyPrincipal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.setHotkeyPrincipal = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.clearHotkeyPrincipal = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.hasHotkeyPrincipal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_capped = 4;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.getIsCapped = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.setIsCapped = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.clearIsCapped = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.prototype.hasIsCapped = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.repeatedFields_ = [1];



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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.toObject = function(includeInstance, msg) {
  var f, obj = {
    neuronsFundNeuronPortionsList: jspb.Message.toObjectList(msg.getNeuronsFundNeuronPortionsList(),
    proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok;
  return proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.deserializeBinaryFromReader);
      msg.addNeuronsFundNeuronPortions(value);
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
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNeuronsFundNeuronPortionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NeuronsFundNeuron neurons_fund_neuron_portions = 1;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron>}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.prototype.getNeuronsFundNeuronPortionsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron, 1));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron>} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.prototype.setNeuronsFundNeuronPortionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.prototype.addNeuronsFundNeuronPortions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.NeuronsFundNeuron, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok.prototype.clearNeuronsFundNeuronPortionsList = function() {
  return this.setNeuronsFundNeuronPortionsList([]);
};


/**
 * optional GovernanceError err = 1;
 * @return {?proto.ic_sns_swap.pb.v1.GovernanceError}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.GovernanceError} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.GovernanceError, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.GovernanceError|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.hasErr = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ok ok = 2;
 * @return {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.Ok|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse} returns this
*/
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse} returns this
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.SettleNeuronsFundParticipationResponse.prototype.hasOk = function() {
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
proto.ic_sns_swap.pb.v1.NeuronId.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NeuronId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NeuronId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ic_sns_swap.pb.v1.NeuronId}
 */
proto.ic_sns_swap.pb.v1.NeuronId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NeuronId;
  return proto.ic_sns_swap.pb.v1.NeuronId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NeuronId}
 */
proto.ic_sns_swap.pb.v1.NeuronId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
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
proto.ic_sns_swap.pb.v1.NeuronId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NeuronId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NeuronId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NeuronId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_sns_swap.pb.v1.NeuronId.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.NeuronId.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ic_sns_swap.pb.v1.NeuronId.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_sns_swap.pb.v1.NeuronId} returns this
 */
proto.ic_sns_swap.pb.v1.NeuronId.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.CanisterCallError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.CanisterCallError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.ic_sns_swap.pb.v1.CanisterCallError}
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.CanisterCallError;
  return proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.CanisterCallError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.CanisterCallError}
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
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
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.CanisterCallError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.CanisterCallError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.CanisterCallError} returns this
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.CanisterCallError} returns this
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.CanisterCallError} returns this
 */
proto.ic_sns_swap.pb.v1.CanisterCallError.prototype.setDescription = function(value) {
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcePrincipalId: (f = msg.getSourcePrincipalId()) && base_types_pb.PrincipalId.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest;
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setSourcePrincipalId(value);
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcePrincipalId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId source_principal_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.prototype.getSourcePrincipalId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest} returns this
*/
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.prototype.setSourcePrincipalId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.prototype.clearSourcePrincipalId = function() {
  return this.setSourcePrincipalId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpRequest.prototype.hasSourcePrincipalId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.ResultCase}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.getResultCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse;
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok;
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockHeight(value);
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 block_height = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.prototype.setBlockHeight = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.prototype.clearBlockHeight = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok.prototype.hasBlockHeight = function() {
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err;
  return proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.Type} */ (reader.readEnum());
      msg.setErrorType(value);
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
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.Type} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_INVALID_REQUEST: 1,
  TYPE_PRECONDITION: 2,
  TYPE_EXTERNAL: 3
};

/**
 * optional Type error_type = 1;
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.Type}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.getErrorType = function() {
  return /** @type {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.Type} value
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.setErrorType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.clearErrorType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.hasErrorType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ok ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Ok|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse} returns this
*/
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Err err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.Err|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse} returns this
*/
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse} returns this
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ErrorRefundIcpResponse.prototype.hasErr = function() {
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
proto.ic_sns_swap.pb.v1.GetLifecycleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetLifecycleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetLifecycleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetLifecycleRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleRequest}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetLifecycleRequest;
  return proto.ic_sns_swap.pb.v1.GetLifecycleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetLifecycleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleRequest}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetLifecycleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetLifecycleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetLifecycleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetLifecycleRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetLifecycleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    lifecycle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    decentralizationSaleOpenTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
    decentralizationSwapTerminationTimestampSeconds: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetLifecycleResponse;
  return proto.ic_sns_swap.pb.v1.GetLifecycleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_sns_swap.pb.v1.Lifecycle} */ (reader.readEnum());
      msg.setLifecycle(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecentralizationSaleOpenTimestampSeconds(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDecentralizationSwapTerminationTimestampSeconds(value);
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
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetLifecycleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ic_sns_swap.pb.v1.Lifecycle} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
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
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Lifecycle lifecycle = 1;
 * @return {!proto.ic_sns_swap.pb.v1.Lifecycle}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.getLifecycle = function() {
  return /** @type {!proto.ic_sns_swap.pb.v1.Lifecycle} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.Lifecycle} value
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.setLifecycle = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.clearLifecycle = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.hasLifecycle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 decentralization_sale_open_timestamp_seconds = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.getDecentralizationSaleOpenTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.setDecentralizationSaleOpenTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.clearDecentralizationSaleOpenTimestampSeconds = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.hasDecentralizationSaleOpenTimestampSeconds = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 decentralization_swap_termination_timestamp_seconds = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.getDecentralizationSwapTerminationTimestampSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.setDecentralizationSwapTerminationTimestampSeconds = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetLifecycleResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.clearDecentralizationSwapTerminationTimestampSeconds = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetLifecycleResponse.prototype.hasDecentralizationSwapTerminationTimestampSeconds = function() {
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
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest;
  return proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isAutoFinalizeEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    hasAutoFinalizeBeenAttempted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    autoFinalizeSwapResponse: (f = msg.getAutoFinalizeSwapResponse()) && proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse;
  return proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAutoFinalizeEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasAutoFinalizeBeenAttempted(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.FinalizeSwapResponse;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.deserializeBinaryFromReader);
      msg.setAutoFinalizeSwapResponse(value);
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
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAutoFinalizeSwapResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.FinalizeSwapResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool is_auto_finalize_enabled = 1;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.getIsAutoFinalizeEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.setIsAutoFinalizeEnabled = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.clearIsAutoFinalizeEnabled = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.hasIsAutoFinalizeEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool has_auto_finalize_been_attempted = 2;
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.getHasAutoFinalizeBeenAttempted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.setHasAutoFinalizeBeenAttempted = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.clearHasAutoFinalizeBeenAttempted = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.hasHasAutoFinalizeBeenAttempted = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional FinalizeSwapResponse auto_finalize_swap_response = 3;
 * @return {?proto.ic_sns_swap.pb.v1.FinalizeSwapResponse}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.getAutoFinalizeSwapResponse = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.FinalizeSwapResponse} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.FinalizeSwapResponse, 3));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.FinalizeSwapResponse|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.setAutoFinalizeSwapResponse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.clearAutoFinalizeSwapResponse = function() {
  return this.setAutoFinalizeSwapResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetAutoFinalizationStatusResponse.prototype.hasAutoFinalizeSwapResponse = function() {
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
proto.ic_sns_swap.pb.v1.GetInitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetInitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetInitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetInitRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetInitRequest}
 */
proto.ic_sns_swap.pb.v1.GetInitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetInitRequest;
  return proto.ic_sns_swap.pb.v1.GetInitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetInitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetInitRequest}
 */
proto.ic_sns_swap.pb.v1.GetInitRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetInitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetInitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetInitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetInitRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetInitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetInitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetInitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetInitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    init: (f = msg.getInit()) && proto.ic_sns_swap.pb.v1.Init.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetInitResponse}
 */
proto.ic_sns_swap.pb.v1.GetInitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetInitResponse;
  return proto.ic_sns_swap.pb.v1.GetInitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetInitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetInitResponse}
 */
proto.ic_sns_swap.pb.v1.GetInitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Init;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Init.deserializeBinaryFromReader);
      msg.setInit(value);
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
proto.ic_sns_swap.pb.v1.GetInitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetInitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetInitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetInitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Init.serializeBinaryToWriter
    );
  }
};


/**
 * optional Init init = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Init}
 */
proto.ic_sns_swap.pb.v1.GetInitResponse.prototype.getInit = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Init} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Init, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Init|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetInitResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetInitResponse.prototype.setInit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetInitResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetInitResponse.prototype.clearInit = function() {
  return this.setInit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetInitResponse.prototype.hasInit = function() {
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
proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetDerivedStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateRequest}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetDerivedStateRequest;
  return proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetDerivedStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateRequest}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetDerivedStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    buyerTotalIcpE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    directParticipantCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cfParticipantCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    cfNeuronCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    snsTokensPerIcp: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    directParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 6, 0),
    neuronsFundParticipationIcpE8s: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetDerivedStateResponse;
  return proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerTotalIcpE8s(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDirectParticipantCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCfParticipantCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCfNeuronCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSnsTokensPerIcp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDirectParticipationIcpE8s(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNeuronsFundParticipationIcpE8s(value);
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
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional uint64 buyer_total_icp_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.getBuyerTotalIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.setBuyerTotalIcpE8s = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.clearBuyerTotalIcpE8s = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.hasBuyerTotalIcpE8s = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 direct_participant_count = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.getDirectParticipantCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.setDirectParticipantCount = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.clearDirectParticipantCount = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.hasDirectParticipantCount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 cf_participant_count = 4;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.getCfParticipantCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.setCfParticipantCount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.clearCfParticipantCount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.hasCfParticipantCount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 cf_neuron_count = 5;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.getCfNeuronCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.setCfNeuronCount = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.clearCfNeuronCount = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.hasCfNeuronCount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double sns_tokens_per_icp = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.getSnsTokensPerIcp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.setSnsTokensPerIcp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.clearSnsTokensPerIcp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.hasSnsTokensPerIcp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 direct_participation_icp_e8s = 6;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.getDirectParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.setDirectParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.clearDirectParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.hasDirectParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 neurons_fund_participation_icp_e8s = 7;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.getNeuronsFundParticipationIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.setNeuronsFundParticipationIcpE8s = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetDerivedStateResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.clearNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetDerivedStateResponse.prototype.hasNeuronsFundParticipationIcpE8s = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ICRC1Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ICRC1Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: (f = msg.getOwner()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    subaccount: msg.getSubaccount_asB64()
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
 * @return {!proto.ic_sns_swap.pb.v1.ICRC1Account}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ICRC1Account;
  return proto.ic_sns_swap.pb.v1.ICRC1Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ICRC1Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ICRC1Account}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccount(value);
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
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ICRC1Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ICRC1Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId owner = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.getOwner = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.ICRC1Account} returns this
*/
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ICRC1Account} returns this
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes subaccount = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.getSubaccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes subaccount = 2;
 * This is a type-conversion wrapper around `getSubaccount()`
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.getSubaccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccount()));
};


/**
 * optional bytes subaccount = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccount()`
 * @return {!Uint8Array}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.getSubaccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_sns_swap.pb.v1.ICRC1Account} returns this
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.setSubaccount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ICRC1Account} returns this
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.clearSubaccount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ICRC1Account.prototype.hasSubaccount = function() {
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
proto.ic_sns_swap.pb.v1.Ticket.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.Ticket.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.Ticket} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Ticket.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticketId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    account: (f = msg.getAccount()) && proto.ic_sns_swap.pb.v1.ICRC1Account.toObject(includeInstance, f),
    amountIcpE8s: jspb.Message.getFieldWithDefault(msg, 3, 0),
    creationTime: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.Ticket}
 */
proto.ic_sns_swap.pb.v1.Ticket.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.Ticket;
  return proto.ic_sns_swap.pb.v1.Ticket.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.Ticket} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.Ticket}
 */
proto.ic_sns_swap.pb.v1.Ticket.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicketId(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.ICRC1Account;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.ICRC1Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountIcpE8s(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreationTime(value);
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
proto.ic_sns_swap.pb.v1.Ticket.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.Ticket.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.Ticket} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Ticket.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicketId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.ICRC1Account.serializeBinaryToWriter
    );
  }
  f = message.getAmountIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCreationTime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional uint64 ticket_id = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.getTicketId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Ticket} returns this
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.setTicketId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ICRC1Account account = 2;
 * @return {?proto.ic_sns_swap.pb.v1.ICRC1Account}
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.getAccount = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.ICRC1Account} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.ICRC1Account, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.ICRC1Account|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Ticket} returns this
*/
proto.ic_sns_swap.pb.v1.Ticket.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Ticket} returns this
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 amount_icp_e8s = 3;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.getAmountIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Ticket} returns this
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.setAmountIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 creation_time = 4;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.getCreationTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.Ticket} returns this
 */
proto.ic_sns_swap.pb.v1.Ticket.prototype.setCreationTime = function(value) {
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
proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketRequest}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetOpenTicketRequest;
  return proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketRequest}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.ResultCase}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.getResultCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetOpenTicketResponse;
  return proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: (f = msg.getTicket()) && proto.ic_sns_swap.pb.v1.Ticket.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok;
  return proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Ticket;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ticket ticket = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Ticket}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.prototype.getTicket = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Ticket, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Ticket|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok} returns this
*/
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok.prototype.hasTicket = function() {
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorType: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err;
  return proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.Type} */ (reader.readEnum());
      msg.setErrorType(value);
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
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.Type} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_SALE_NOT_OPEN: 1,
  TYPE_SALE_CLOSED: 2
};

/**
 * optional Type error_type = 1;
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.Type}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.prototype.getErrorType = function() {
  return /** @type {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.Type} value
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.prototype.setErrorType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.prototype.clearErrorType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err.prototype.hasErrorType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Ok ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Ok|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Err err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.Err|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetOpenTicketResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetOpenTicketResponse.prototype.hasErr = function() {
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
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    amountIcpE8s: jspb.Message.getFieldWithDefault(msg, 1, 0),
    subaccount: msg.getSubaccount_asB64()
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
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NewSaleTicketRequest;
  return proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountIcpE8s(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubaccount(value);
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
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmountIcpE8s();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional uint64 amount_icp_e8s = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.getAmountIcpE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.setAmountIcpE8s = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes subaccount = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.getSubaccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes subaccount = 2;
 * This is a type-conversion wrapper around `getSubaccount()`
 * @return {string}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.getSubaccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubaccount()));
};


/**
 * optional bytes subaccount = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubaccount()`
 * @return {!Uint8Array}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.getSubaccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubaccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.setSubaccount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketRequest} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.clearSubaccount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketRequest.prototype.hasSubaccount = function() {
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  OK: 1,
  ERR: 2
};

/**
 * @return {proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.ResultCase}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.getResultCase = function() {
  return /** @type {proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.oneofGroups_[0]));
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.toObject(includeInstance, f),
    err: (f = msg.getErr()) && proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NewSaleTicketResponse;
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.deserializeBinaryFromReader);
      msg.setErr(value);
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.serializeBinaryToWriter
    );
  }
  f = message.getErr();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.serializeBinaryToWriter
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: (f = msg.getTicket()) && proto.ic_sns_swap.pb.v1.Ticket.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok;
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Ticket;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ticket ticket = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Ticket}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.prototype.getTicket = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Ticket, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Ticket|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok} returns this
*/
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok.prototype.hasTicket = function() {
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    invalidUserAmount: (f = msg.getInvalidUserAmount()) && proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.toObject(includeInstance, f),
    existingTicket: (f = msg.getExistingTicket()) && proto.ic_sns_swap.pb.v1.Ticket.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err;
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.Type} */ (reader.readEnum());
      msg.setErrorType(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.deserializeBinaryFromReader);
      msg.setInvalidUserAmount(value);
      break;
    case 3:
      var value = new proto.ic_sns_swap.pb.v1.Ticket;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Ticket.deserializeBinaryFromReader);
      msg.setExistingTicket(value);
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInvalidUserAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.serializeBinaryToWriter
    );
  }
  f = message.getExistingTicket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_sns_swap.pb.v1.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_SALE_NOT_OPEN: 1,
  TYPE_SALE_CLOSED: 2,
  TYPE_TICKET_EXISTS: 3,
  TYPE_INVALID_USER_AMOUNT: 4,
  TYPE_INVALID_SUBACCOUNT: 5,
  TYPE_INVALID_PRINCIPAL: 6
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.toObject = function(includeInstance, msg) {
  var f, obj = {
    minAmountIcpE8sIncluded: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxAmountIcpE8sIncluded: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount;
  return proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinAmountIcpE8sIncluded(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxAmountIcpE8sIncluded(value);
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
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinAmountIcpE8sIncluded();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMaxAmountIcpE8sIncluded();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 min_amount_icp_e8s_included = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.prototype.getMinAmountIcpE8sIncluded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.prototype.setMinAmountIcpE8sIncluded = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 max_amount_icp_e8s_included = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.prototype.getMaxAmountIcpE8sIncluded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount.prototype.setMaxAmountIcpE8sIncluded = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Type error_type = 1;
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.Type}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.getErrorType = function() {
  return /** @type {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.Type} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.setErrorType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional InvalidUserAmount invalid_user_amount = 2;
 * @return {?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.getInvalidUserAmount = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.InvalidUserAmount|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} returns this
*/
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.setInvalidUserAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.clearInvalidUserAmount = function() {
  return this.setInvalidUserAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.hasInvalidUserAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Ticket existing_ticket = 3;
 * @return {?proto.ic_sns_swap.pb.v1.Ticket}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.getExistingTicket = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Ticket, 3));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Ticket|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} returns this
*/
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.setExistingTicket = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.clearExistingTicket = function() {
  return this.setExistingTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err.prototype.hasExistingTicket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Ok ok = 1;
 * @return {?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.getOk = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Ok|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse} returns this
*/
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Err err = 2;
 * @return {?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.getErr = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.Err|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse} returns this
*/
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.setErr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NewSaleTicketResponse} returns this
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.clearErr = function() {
  return this.setErr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NewSaleTicketResponse.prototype.hasErr = function() {
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
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest;
  return proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
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
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 offset = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.clearOffset = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsRequest.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.repeatedFields_ = [1];



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
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    proto.ic_sns_swap.pb.v1.Participant.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse;
  return proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Participant;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Participant.deserializeBinaryFromReader);
      msg.addParticipants(value);
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
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Participant.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Participant participants = 1;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.Participant>}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.Participant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.Participant, 1));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.Participant>} value
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse} returns this
*/
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.Participant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.Participant}
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_sns_swap.pb.v1.Participant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse} returns this
 */
proto.ic_sns_swap.pb.v1.ListDirectParticipantsResponse.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
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
proto.ic_sns_swap.pb.v1.Participant.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.Participant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.Participant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Participant.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantId: (f = msg.getParticipantId()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    participation: (f = msg.getParticipation()) && proto.ic_sns_swap.pb.v1.BuyerState.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.Participant}
 */
proto.ic_sns_swap.pb.v1.Participant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.Participant;
  return proto.ic_sns_swap.pb.v1.Participant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.Participant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.Participant}
 */
proto.ic_sns_swap.pb.v1.Participant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setParticipantId(value);
      break;
    case 2:
      var value = new proto.ic_sns_swap.pb.v1.BuyerState;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.BuyerState.deserializeBinaryFromReader);
      msg.setParticipation(value);
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
proto.ic_sns_swap.pb.v1.Participant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.Participant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.Participant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.Participant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getParticipation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_sns_swap.pb.v1.BuyerState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId participant_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_sns_swap.pb.v1.Participant.prototype.getParticipantId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Participant} returns this
*/
proto.ic_sns_swap.pb.v1.Participant.prototype.setParticipantId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Participant} returns this
 */
proto.ic_sns_swap.pb.v1.Participant.prototype.clearParticipantId = function() {
  return this.setParticipantId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Participant.prototype.hasParticipantId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BuyerState participation = 2;
 * @return {?proto.ic_sns_swap.pb.v1.BuyerState}
 */
proto.ic_sns_swap.pb.v1.Participant.prototype.getParticipation = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.BuyerState} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.BuyerState, 2));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.BuyerState|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.Participant} returns this
*/
proto.ic_sns_swap.pb.v1.Participant.prototype.setParticipation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.Participant} returns this
 */
proto.ic_sns_swap.pb.v1.Participant.prototype.clearParticipation = function() {
  return this.setParticipation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.Participant.prototype.hasParticipation = function() {
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
proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetSaleParametersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.GetSaleParametersRequest}
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetSaleParametersRequest;
  return proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetSaleParametersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetSaleParametersRequest}
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetSaleParametersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.GetSaleParametersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && proto.ic_sns_swap.pb.v1.Params.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.GetSaleParametersResponse}
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.GetSaleParametersResponse;
  return proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.GetSaleParametersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.GetSaleParametersResponse}
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Params;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Params.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.GetSaleParametersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Params}
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.prototype.getParams = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Params} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Params, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Params|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.GetSaleParametersResponse} returns this
*/
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.GetSaleParametersResponse} returns this
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.GetSaleParametersResponse.prototype.hasParams = function() {
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
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest;
  return proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
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
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.clearOffset = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsRequest.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.repeatedFields_ = [1];



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
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    cfParticipantsList: jspb.Message.toObjectList(msg.getCfParticipantsList(),
    proto.ic_sns_swap.pb.v1.CfParticipant.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse;
  return proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.CfParticipant;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.CfParticipant.deserializeBinaryFromReader);
      msg.addCfParticipants(value);
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
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCfParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.CfParticipant.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CfParticipant cf_participants = 1;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.prototype.getCfParticipantsList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.CfParticipant, 1));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.CfParticipant>} value
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse} returns this
*/
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.prototype.setCfParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.CfParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.CfParticipant}
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.prototype.addCfParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_sns_swap.pb.v1.CfParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse} returns this
 */
proto.ic_sns_swap.pb.v1.ListCommunityFundParticipantsResponse.prototype.clearCfParticipantsList = function() {
  return this.setCfParticipantsList([]);
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
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest;
  return proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOffset(value);
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
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint32 limit = 1;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 offset = 2;
 * @return {number}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.setOffset = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest} returns this
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.clearOffset = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesRequest.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.repeatedFields_ = [1];



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
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    snsNeuronRecipesList: jspb.Message.toObjectList(msg.getSnsNeuronRecipesList(),
    proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.toObject, includeInstance)
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
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse;
  return proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.SnsNeuronRecipe;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.deserializeBinaryFromReader);
      msg.addSnsNeuronRecipes(value);
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
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSnsNeuronRecipesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.SnsNeuronRecipe.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SnsNeuronRecipe sns_neuron_recipes = 1;
 * @return {!Array<!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe>}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.prototype.getSnsNeuronRecipesList = function() {
  return /** @type{!Array<!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe, 1));
};


/**
 * @param {!Array<!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe>} value
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse} returns this
*/
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.prototype.setSnsNeuronRecipesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_sns_swap.pb.v1.SnsNeuronRecipe}
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.prototype.addSnsNeuronRecipes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_sns_swap.pb.v1.SnsNeuronRecipe, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse} returns this
 */
proto.ic_sns_swap.pb.v1.ListSnsNeuronRecipesResponse.prototype.clearSnsNeuronRecipesList = function() {
  return this.setSnsNeuronRecipesList([]);
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
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest}
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest;
  return proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest}
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ticket: (f = msg.getTicket()) && proto.ic_sns_swap.pb.v1.Ticket.toObject(includeInstance, f)
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
 * @return {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse}
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse;
  return proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse}
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_sns_swap.pb.v1.Ticket;
      reader.readMessage(value,proto.ic_sns_swap.pb.v1.Ticket.deserializeBinaryFromReader);
      msg.setTicket(value);
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
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_sns_swap.pb.v1.Ticket.serializeBinaryToWriter
    );
  }
};


/**
 * optional Ticket ticket = 1;
 * @return {?proto.ic_sns_swap.pb.v1.Ticket}
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.prototype.getTicket = function() {
  return /** @type{?proto.ic_sns_swap.pb.v1.Ticket} */ (
    jspb.Message.getWrapperField(this, proto.ic_sns_swap.pb.v1.Ticket, 1));
};


/**
 * @param {?proto.ic_sns_swap.pb.v1.Ticket|undefined} value
 * @return {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse} returns this
*/
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.prototype.setTicket = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse} returns this
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.prototype.clearTicket = function() {
  return this.setTicket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_sns_swap.pb.v1.NotifyPaymentFailureResponse.prototype.hasTicket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * @enum {number}
 */
proto.ic_sns_swap.pb.v1.Lifecycle = {
  LIFECYCLE_UNSPECIFIED: 0,
  LIFECYCLE_PENDING: 1,
  LIFECYCLE_ADOPTED: 5,
  LIFECYCLE_OPEN: 2,
  LIFECYCLE_COMMITTED: 3,
  LIFECYCLE_ABORTED: 4
};

goog.object.extend(exports, proto.ic_sns_swap.pb.v1);
