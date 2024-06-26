// source: ledger.proto
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
goog.exportSymbol('proto.ic_ledger.pb.v1.Account', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.AccountBalanceRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.AccountBalanceResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.AccountIdentifier', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Approve', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.ArchiveAddRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.ArchiveAddResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.ArchiveIndexEntry', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.ArchiveIndexResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.ArchiveInit', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Block', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.BlockIndex', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.BlockRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.BlockResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.BlockResponse.BlockContentCase', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Burn', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Certification', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.CyclesNotificationResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.CyclesNotificationResponse.ResponseCase', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.EncodedBlock', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.EncodedBlocks', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.GetBlocksRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.GetBlocksResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.GetBlocksResponse.GetBlocksContentCase', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.GetNodesRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.GetNodesResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Hash', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Icrc1Memo', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.IterBlocksRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.IterBlocksResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.LedgerArchiveRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.LedgerInit', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.LedgerUpgrade', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Memo', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Mint', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.NotifyRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.NotifyResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Payment', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Refund', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Send', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Send.ExtensionCase', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.SendRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.SendResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Subaccount', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TimeStamp', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TipOfChainRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TipOfChainResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Tokens', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.ToppedUp', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TotalSupplyRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TotalSupplyResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Transaction', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.Transaction.TransferCase', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TransactionNotificationRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TransactionNotificationResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TransferFeeRequest', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TransferFeeResponse', null, global);
goog.exportSymbol('proto.ic_ledger.pb.v1.TransferFrom', null, global);
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
proto.ic_ledger.pb.v1.LedgerInit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_ledger.pb.v1.LedgerInit.repeatedFields_, null);
};
goog.inherits(proto.ic_ledger.pb.v1.LedgerInit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.LedgerInit.displayName = 'proto.ic_ledger.pb.v1.LedgerInit';
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
proto.ic_ledger.pb.v1.LedgerUpgrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.LedgerUpgrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.LedgerUpgrade.displayName = 'proto.ic_ledger.pb.v1.LedgerUpgrade';
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
proto.ic_ledger.pb.v1.SendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.SendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.SendRequest.displayName = 'proto.ic_ledger.pb.v1.SendRequest';
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
proto.ic_ledger.pb.v1.SendResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.SendResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.SendResponse.displayName = 'proto.ic_ledger.pb.v1.SendResponse';
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
proto.ic_ledger.pb.v1.NotifyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.NotifyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.NotifyRequest.displayName = 'proto.ic_ledger.pb.v1.NotifyRequest';
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
proto.ic_ledger.pb.v1.NotifyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.NotifyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.NotifyResponse.displayName = 'proto.ic_ledger.pb.v1.NotifyResponse';
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
proto.ic_ledger.pb.v1.TransactionNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TransactionNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TransactionNotificationRequest.displayName = 'proto.ic_ledger.pb.v1.TransactionNotificationRequest';
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
proto.ic_ledger.pb.v1.TransactionNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TransactionNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TransactionNotificationResponse.displayName = 'proto.ic_ledger.pb.v1.TransactionNotificationResponse';
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
proto.ic_ledger.pb.v1.CyclesNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_ledger.pb.v1.CyclesNotificationResponse.oneofGroups_);
};
goog.inherits(proto.ic_ledger.pb.v1.CyclesNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.CyclesNotificationResponse.displayName = 'proto.ic_ledger.pb.v1.CyclesNotificationResponse';
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
proto.ic_ledger.pb.v1.AccountBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.AccountBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.AccountBalanceRequest.displayName = 'proto.ic_ledger.pb.v1.AccountBalanceRequest';
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
proto.ic_ledger.pb.v1.AccountBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.AccountBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.AccountBalanceResponse.displayName = 'proto.ic_ledger.pb.v1.AccountBalanceResponse';
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
proto.ic_ledger.pb.v1.TipOfChainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TipOfChainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TipOfChainRequest.displayName = 'proto.ic_ledger.pb.v1.TipOfChainRequest';
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
proto.ic_ledger.pb.v1.TipOfChainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TipOfChainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TipOfChainResponse.displayName = 'proto.ic_ledger.pb.v1.TipOfChainResponse';
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
proto.ic_ledger.pb.v1.TotalSupplyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TotalSupplyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TotalSupplyRequest.displayName = 'proto.ic_ledger.pb.v1.TotalSupplyRequest';
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
proto.ic_ledger.pb.v1.TotalSupplyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TotalSupplyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TotalSupplyResponse.displayName = 'proto.ic_ledger.pb.v1.TotalSupplyResponse';
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
proto.ic_ledger.pb.v1.LedgerArchiveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.LedgerArchiveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.LedgerArchiveRequest.displayName = 'proto.ic_ledger.pb.v1.LedgerArchiveRequest';
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
proto.ic_ledger.pb.v1.BlockRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.BlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.BlockRequest.displayName = 'proto.ic_ledger.pb.v1.BlockRequest';
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
proto.ic_ledger.pb.v1.EncodedBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.EncodedBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.EncodedBlock.displayName = 'proto.ic_ledger.pb.v1.EncodedBlock';
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
proto.ic_ledger.pb.v1.BlockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_ledger.pb.v1.BlockResponse.oneofGroups_);
};
goog.inherits(proto.ic_ledger.pb.v1.BlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.BlockResponse.displayName = 'proto.ic_ledger.pb.v1.BlockResponse';
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
proto.ic_ledger.pb.v1.GetBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.GetBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.GetBlocksRequest.displayName = 'proto.ic_ledger.pb.v1.GetBlocksRequest';
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
proto.ic_ledger.pb.v1.Refund = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Refund, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Refund.displayName = 'proto.ic_ledger.pb.v1.Refund';
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
proto.ic_ledger.pb.v1.ToppedUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.ToppedUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.ToppedUp.displayName = 'proto.ic_ledger.pb.v1.ToppedUp';
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
proto.ic_ledger.pb.v1.EncodedBlocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_ledger.pb.v1.EncodedBlocks.repeatedFields_, null);
};
goog.inherits(proto.ic_ledger.pb.v1.EncodedBlocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.EncodedBlocks.displayName = 'proto.ic_ledger.pb.v1.EncodedBlocks';
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
proto.ic_ledger.pb.v1.GetBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_ledger.pb.v1.GetBlocksResponse.oneofGroups_);
};
goog.inherits(proto.ic_ledger.pb.v1.GetBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.GetBlocksResponse.displayName = 'proto.ic_ledger.pb.v1.GetBlocksResponse';
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
proto.ic_ledger.pb.v1.IterBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.IterBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.IterBlocksRequest.displayName = 'proto.ic_ledger.pb.v1.IterBlocksRequest';
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
proto.ic_ledger.pb.v1.IterBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_ledger.pb.v1.IterBlocksResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_ledger.pb.v1.IterBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.IterBlocksResponse.displayName = 'proto.ic_ledger.pb.v1.IterBlocksResponse';
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
proto.ic_ledger.pb.v1.ArchiveIndexEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.ArchiveIndexEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.ArchiveIndexEntry.displayName = 'proto.ic_ledger.pb.v1.ArchiveIndexEntry';
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
proto.ic_ledger.pb.v1.ArchiveIndexResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_ledger.pb.v1.ArchiveIndexResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_ledger.pb.v1.ArchiveIndexResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.ArchiveIndexResponse.displayName = 'proto.ic_ledger.pb.v1.ArchiveIndexResponse';
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
proto.ic_ledger.pb.v1.ArchiveInit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.ArchiveInit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.ArchiveInit.displayName = 'proto.ic_ledger.pb.v1.ArchiveInit';
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
proto.ic_ledger.pb.v1.ArchiveAddRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_ledger.pb.v1.ArchiveAddRequest.repeatedFields_, null);
};
goog.inherits(proto.ic_ledger.pb.v1.ArchiveAddRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.ArchiveAddRequest.displayName = 'proto.ic_ledger.pb.v1.ArchiveAddRequest';
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
proto.ic_ledger.pb.v1.ArchiveAddResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.ArchiveAddResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.ArchiveAddResponse.displayName = 'proto.ic_ledger.pb.v1.ArchiveAddResponse';
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
proto.ic_ledger.pb.v1.GetNodesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.GetNodesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.GetNodesRequest.displayName = 'proto.ic_ledger.pb.v1.GetNodesRequest';
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
proto.ic_ledger.pb.v1.GetNodesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_ledger.pb.v1.GetNodesResponse.repeatedFields_, null);
};
goog.inherits(proto.ic_ledger.pb.v1.GetNodesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.GetNodesResponse.displayName = 'proto.ic_ledger.pb.v1.GetNodesResponse';
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
proto.ic_ledger.pb.v1.Tokens = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Tokens, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Tokens.displayName = 'proto.ic_ledger.pb.v1.Tokens';
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
proto.ic_ledger.pb.v1.Payment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Payment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Payment.displayName = 'proto.ic_ledger.pb.v1.Payment';
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
proto.ic_ledger.pb.v1.BlockIndex = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.BlockIndex, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.BlockIndex.displayName = 'proto.ic_ledger.pb.v1.BlockIndex';
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
proto.ic_ledger.pb.v1.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Block.displayName = 'proto.ic_ledger.pb.v1.Block';
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
proto.ic_ledger.pb.v1.Hash = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Hash, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Hash.displayName = 'proto.ic_ledger.pb.v1.Hash';
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
proto.ic_ledger.pb.v1.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Account.displayName = 'proto.ic_ledger.pb.v1.Account';
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
proto.ic_ledger.pb.v1.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_ledger.pb.v1.Transaction.oneofGroups_);
};
goog.inherits(proto.ic_ledger.pb.v1.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Transaction.displayName = 'proto.ic_ledger.pb.v1.Transaction';
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
proto.ic_ledger.pb.v1.Send = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ic_ledger.pb.v1.Send.oneofGroups_);
};
goog.inherits(proto.ic_ledger.pb.v1.Send, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Send.displayName = 'proto.ic_ledger.pb.v1.Send';
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
proto.ic_ledger.pb.v1.TransferFrom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TransferFrom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TransferFrom.displayName = 'proto.ic_ledger.pb.v1.TransferFrom';
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
proto.ic_ledger.pb.v1.Approve = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Approve, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Approve.displayName = 'proto.ic_ledger.pb.v1.Approve';
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
proto.ic_ledger.pb.v1.Mint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Mint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Mint.displayName = 'proto.ic_ledger.pb.v1.Mint';
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
proto.ic_ledger.pb.v1.Burn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Burn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Burn.displayName = 'proto.ic_ledger.pb.v1.Burn';
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
proto.ic_ledger.pb.v1.AccountIdentifier = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.AccountIdentifier, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.AccountIdentifier.displayName = 'proto.ic_ledger.pb.v1.AccountIdentifier';
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
proto.ic_ledger.pb.v1.Subaccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Subaccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Subaccount.displayName = 'proto.ic_ledger.pb.v1.Subaccount';
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
proto.ic_ledger.pb.v1.Memo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Memo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Memo.displayName = 'proto.ic_ledger.pb.v1.Memo';
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
proto.ic_ledger.pb.v1.Icrc1Memo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Icrc1Memo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Icrc1Memo.displayName = 'proto.ic_ledger.pb.v1.Icrc1Memo';
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
proto.ic_ledger.pb.v1.TimeStamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TimeStamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TimeStamp.displayName = 'proto.ic_ledger.pb.v1.TimeStamp';
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
proto.ic_ledger.pb.v1.Certification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.Certification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.Certification.displayName = 'proto.ic_ledger.pb.v1.Certification';
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
proto.ic_ledger.pb.v1.TransferFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TransferFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TransferFeeRequest.displayName = 'proto.ic_ledger.pb.v1.TransferFeeRequest';
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
proto.ic_ledger.pb.v1.TransferFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_ledger.pb.v1.TransferFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_ledger.pb.v1.TransferFeeResponse.displayName = 'proto.ic_ledger.pb.v1.TransferFeeResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_ledger.pb.v1.LedgerInit.repeatedFields_ = [2];



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
proto.ic_ledger.pb.v1.LedgerInit.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.LedgerInit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.LedgerInit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.LedgerInit.toObject = function(includeInstance, msg) {
  var f, obj = {
    mintingAccount: (f = msg.getMintingAccount()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f),
    initialValuesList: jspb.Message.toObjectList(msg.getInitialValuesList(),
    proto.ic_ledger.pb.v1.Account.toObject, includeInstance),
    archiveCanister: (f = msg.getArchiveCanister()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    maxMessageSizeBytes: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ic_ledger.pb.v1.LedgerInit}
 */
proto.ic_ledger.pb.v1.LedgerInit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.LedgerInit;
  return proto.ic_ledger.pb.v1.LedgerInit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.LedgerInit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.LedgerInit}
 */
proto.ic_ledger.pb.v1.LedgerInit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setMintingAccount(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.Account;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Account.deserializeBinaryFromReader);
      msg.addInitialValues(value);
      break;
    case 3:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setArchiveCanister(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxMessageSizeBytes(value);
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
proto.ic_ledger.pb.v1.LedgerInit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.LedgerInit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.LedgerInit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.LedgerInit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMintingAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getInitialValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.Account.serializeBinaryToWriter
    );
  }
  f = message.getArchiveCanister();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getMaxMessageSizeBytes();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional AccountIdentifier minting_account = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.getMintingAccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.LedgerInit} returns this
*/
proto.ic_ledger.pb.v1.LedgerInit.prototype.setMintingAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.LedgerInit} returns this
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.clearMintingAccount = function() {
  return this.setMintingAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.hasMintingAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Account initial_values = 2;
 * @return {!Array<!proto.ic_ledger.pb.v1.Account>}
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.getInitialValuesList = function() {
  return /** @type{!Array<!proto.ic_ledger.pb.v1.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_ledger.pb.v1.Account, 2));
};


/**
 * @param {!Array<!proto.ic_ledger.pb.v1.Account>} value
 * @return {!proto.ic_ledger.pb.v1.LedgerInit} returns this
*/
proto.ic_ledger.pb.v1.LedgerInit.prototype.setInitialValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ic_ledger.pb.v1.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_ledger.pb.v1.Account}
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.addInitialValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ic_ledger.pb.v1.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_ledger.pb.v1.LedgerInit} returns this
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.clearInitialValuesList = function() {
  return this.setInitialValuesList([]);
};


/**
 * optional ic_base_types.pb.v1.PrincipalId archive_canister = 3;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.getArchiveCanister = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 3));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_ledger.pb.v1.LedgerInit} returns this
*/
proto.ic_ledger.pb.v1.LedgerInit.prototype.setArchiveCanister = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.LedgerInit} returns this
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.clearArchiveCanister = function() {
  return this.setArchiveCanister(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.hasArchiveCanister = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 max_message_size_bytes = 4;
 * @return {number}
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.getMaxMessageSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.LedgerInit} returns this
 */
proto.ic_ledger.pb.v1.LedgerInit.prototype.setMaxMessageSizeBytes = function(value) {
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
proto.ic_ledger.pb.v1.LedgerUpgrade.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.LedgerUpgrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.LedgerUpgrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.LedgerUpgrade.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.LedgerUpgrade}
 */
proto.ic_ledger.pb.v1.LedgerUpgrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.LedgerUpgrade;
  return proto.ic_ledger.pb.v1.LedgerUpgrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.LedgerUpgrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.LedgerUpgrade}
 */
proto.ic_ledger.pb.v1.LedgerUpgrade.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.LedgerUpgrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.LedgerUpgrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.LedgerUpgrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.LedgerUpgrade.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_ledger.pb.v1.SendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.SendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.SendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.SendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: (f = msg.getMemo()) && proto.ic_ledger.pb.v1.Memo.toObject(includeInstance, f),
    payment: (f = msg.getPayment()) && proto.ic_ledger.pb.v1.Payment.toObject(includeInstance, f),
    maxFee: (f = msg.getMaxFee()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f),
    fromSubaccount: (f = msg.getFromSubaccount()) && proto.ic_ledger.pb.v1.Subaccount.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && proto.ic_ledger.pb.v1.BlockIndex.toObject(includeInstance, f),
    createdAtTime: (f = msg.getCreatedAtTime()) && proto.ic_ledger.pb.v1.TimeStamp.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.SendRequest}
 */
proto.ic_ledger.pb.v1.SendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.SendRequest;
  return proto.ic_ledger.pb.v1.SendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.SendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.SendRequest}
 */
proto.ic_ledger.pb.v1.SendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Memo;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Memo.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.Payment;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Payment.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setMaxFee(value);
      break;
    case 4:
      var value = new proto.ic_ledger.pb.v1.Subaccount;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Subaccount.deserializeBinaryFromReader);
      msg.setFromSubaccount(value);
      break;
    case 5:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 6:
      var value = new proto.ic_ledger.pb.v1.BlockIndex;
      reader.readMessage(value,proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new proto.ic_ledger.pb.v1.TimeStamp;
      reader.readMessage(value,proto.ic_ledger.pb.v1.TimeStamp.deserializeBinaryFromReader);
      msg.setCreatedAtTime(value);
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
proto.ic_ledger.pb.v1.SendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.SendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.SendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.SendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Memo.serializeBinaryToWriter
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.Payment.serializeBinaryToWriter
    );
  }
  f = message.getMaxFee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getFromSubaccount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_ledger.pb.v1.Subaccount.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAtTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_ledger.pb.v1.TimeStamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Memo memo = 1;
 * @return {?proto.ic_ledger.pb.v1.Memo}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.getMemo = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Memo} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Memo, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Memo|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
*/
proto.ic_ledger.pb.v1.SendRequest.prototype.setMemo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.clearMemo = function() {
  return this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Payment payment = 2;
 * @return {?proto.ic_ledger.pb.v1.Payment}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.getPayment = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Payment} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Payment, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Payment|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
*/
proto.ic_ledger.pb.v1.SendRequest.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Tokens max_fee = 3;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.getMaxFee = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
*/
proto.ic_ledger.pb.v1.SendRequest.prototype.setMaxFee = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.clearMaxFee = function() {
  return this.setMaxFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.hasMaxFee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Subaccount from_subaccount = 4;
 * @return {?proto.ic_ledger.pb.v1.Subaccount}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.getFromSubaccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Subaccount} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Subaccount, 4));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Subaccount|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
*/
proto.ic_ledger.pb.v1.SendRequest.prototype.setFromSubaccount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.clearFromSubaccount = function() {
  return this.setFromSubaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.hasFromSubaccount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AccountIdentifier to = 5;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.getTo = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 5));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
*/
proto.ic_ledger.pb.v1.SendRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BlockIndex created_at = 6;
 * @return {?proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.getCreatedAt = function() {
  return /** @type{?proto.ic_ledger.pb.v1.BlockIndex} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.BlockIndex, 6));
};


/**
 * @param {?proto.ic_ledger.pb.v1.BlockIndex|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
*/
proto.ic_ledger.pb.v1.SendRequest.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TimeStamp created_at_time = 7;
 * @return {?proto.ic_ledger.pb.v1.TimeStamp}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.getCreatedAtTime = function() {
  return /** @type{?proto.ic_ledger.pb.v1.TimeStamp} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.TimeStamp, 7));
};


/**
 * @param {?proto.ic_ledger.pb.v1.TimeStamp|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
*/
proto.ic_ledger.pb.v1.SendRequest.prototype.setCreatedAtTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendRequest} returns this
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.clearCreatedAtTime = function() {
  return this.setCreatedAtTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendRequest.prototype.hasCreatedAtTime = function() {
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
proto.ic_ledger.pb.v1.SendResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.SendResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.SendResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.SendResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultingHeight: (f = msg.getResultingHeight()) && proto.ic_ledger.pb.v1.BlockIndex.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.SendResponse}
 */
proto.ic_ledger.pb.v1.SendResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.SendResponse;
  return proto.ic_ledger.pb.v1.SendResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.SendResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.SendResponse}
 */
proto.ic_ledger.pb.v1.SendResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.BlockIndex;
      reader.readMessage(value,proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader);
      msg.setResultingHeight(value);
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
proto.ic_ledger.pb.v1.SendResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.SendResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.SendResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.SendResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultingHeight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockIndex resulting_height = 1;
 * @return {?proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.SendResponse.prototype.getResultingHeight = function() {
  return /** @type{?proto.ic_ledger.pb.v1.BlockIndex} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.BlockIndex, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.BlockIndex|undefined} value
 * @return {!proto.ic_ledger.pb.v1.SendResponse} returns this
*/
proto.ic_ledger.pb.v1.SendResponse.prototype.setResultingHeight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.SendResponse} returns this
 */
proto.ic_ledger.pb.v1.SendResponse.prototype.clearResultingHeight = function() {
  return this.setResultingHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.SendResponse.prototype.hasResultingHeight = function() {
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
proto.ic_ledger.pb.v1.NotifyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.NotifyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.NotifyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.NotifyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockHeight: (f = msg.getBlockHeight()) && proto.ic_ledger.pb.v1.BlockIndex.toObject(includeInstance, f),
    maxFee: (f = msg.getMaxFee()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f),
    fromSubaccount: (f = msg.getFromSubaccount()) && proto.ic_ledger.pb.v1.Subaccount.toObject(includeInstance, f),
    toCanister: (f = msg.getToCanister()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    toSubaccount: (f = msg.getToSubaccount()) && proto.ic_ledger.pb.v1.Subaccount.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest}
 */
proto.ic_ledger.pb.v1.NotifyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.NotifyRequest;
  return proto.ic_ledger.pb.v1.NotifyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.NotifyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest}
 */
proto.ic_ledger.pb.v1.NotifyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.BlockIndex;
      reader.readMessage(value,proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader);
      msg.setBlockHeight(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setMaxFee(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Subaccount;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Subaccount.deserializeBinaryFromReader);
      msg.setFromSubaccount(value);
      break;
    case 4:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setToCanister(value);
      break;
    case 5:
      var value = new proto.ic_ledger.pb.v1.Subaccount;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Subaccount.deserializeBinaryFromReader);
      msg.setToSubaccount(value);
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
proto.ic_ledger.pb.v1.NotifyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.NotifyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.NotifyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.NotifyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter
    );
  }
  f = message.getMaxFee();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getFromSubaccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Subaccount.serializeBinaryToWriter
    );
  }
  f = message.getToCanister();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getToSubaccount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_ledger.pb.v1.Subaccount.serializeBinaryToWriter
    );
  }
};


/**
 * optional BlockIndex block_height = 1;
 * @return {?proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.getBlockHeight = function() {
  return /** @type{?proto.ic_ledger.pb.v1.BlockIndex} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.BlockIndex, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.BlockIndex|undefined} value
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
*/
proto.ic_ledger.pb.v1.NotifyRequest.prototype.setBlockHeight = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.clearBlockHeight = function() {
  return this.setBlockHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.hasBlockHeight = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Tokens max_fee = 2;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.getMaxFee = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
*/
proto.ic_ledger.pb.v1.NotifyRequest.prototype.setMaxFee = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.clearMaxFee = function() {
  return this.setMaxFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.hasMaxFee = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Subaccount from_subaccount = 3;
 * @return {?proto.ic_ledger.pb.v1.Subaccount}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.getFromSubaccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Subaccount} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Subaccount, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Subaccount|undefined} value
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
*/
proto.ic_ledger.pb.v1.NotifyRequest.prototype.setFromSubaccount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.clearFromSubaccount = function() {
  return this.setFromSubaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.hasFromSubaccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ic_base_types.pb.v1.PrincipalId to_canister = 4;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.getToCanister = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 4));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
*/
proto.ic_ledger.pb.v1.NotifyRequest.prototype.setToCanister = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.clearToCanister = function() {
  return this.setToCanister(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.hasToCanister = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Subaccount to_subaccount = 5;
 * @return {?proto.ic_ledger.pb.v1.Subaccount}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.getToSubaccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Subaccount} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Subaccount, 5));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Subaccount|undefined} value
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
*/
proto.ic_ledger.pb.v1.NotifyRequest.prototype.setToSubaccount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.NotifyRequest} returns this
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.clearToSubaccount = function() {
  return this.setToSubaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.NotifyRequest.prototype.hasToSubaccount = function() {
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
proto.ic_ledger.pb.v1.NotifyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.NotifyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.NotifyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.NotifyResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.NotifyResponse}
 */
proto.ic_ledger.pb.v1.NotifyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.NotifyResponse;
  return proto.ic_ledger.pb.v1.NotifyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.NotifyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.NotifyResponse}
 */
proto.ic_ledger.pb.v1.NotifyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.NotifyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.NotifyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.NotifyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.NotifyResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TransactionNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    fromSubaccount: (f = msg.getFromSubaccount()) && proto.ic_ledger.pb.v1.Subaccount.toObject(includeInstance, f),
    to: (f = msg.getTo()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    toSubaccount: (f = msg.getToSubaccount()) && proto.ic_ledger.pb.v1.Subaccount.toObject(includeInstance, f),
    blockHeight: (f = msg.getBlockHeight()) && proto.ic_ledger.pb.v1.BlockIndex.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f),
    memo: (f = msg.getMemo()) && proto.ic_ledger.pb.v1.Memo.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TransactionNotificationRequest;
  return proto.ic_ledger.pb.v1.TransactionNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.Subaccount;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Subaccount.deserializeBinaryFromReader);
      msg.setFromSubaccount(value);
      break;
    case 3:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = new proto.ic_ledger.pb.v1.Subaccount;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Subaccount.deserializeBinaryFromReader);
      msg.setToSubaccount(value);
      break;
    case 5:
      var value = new proto.ic_ledger.pb.v1.BlockIndex;
      reader.readMessage(value,proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader);
      msg.setBlockHeight(value);
      break;
    case 6:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 7:
      var value = new proto.ic_ledger.pb.v1.Memo;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Memo.deserializeBinaryFromReader);
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
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TransactionNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getFromSubaccount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.Subaccount.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getToSubaccount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_ledger.pb.v1.Subaccount.serializeBinaryToWriter
    );
  }
  f = message.getBlockHeight();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_ledger.pb.v1.Memo.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId from = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.getFrom = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
*/
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Subaccount from_subaccount = 2;
 * @return {?proto.ic_ledger.pb.v1.Subaccount}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.getFromSubaccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Subaccount} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Subaccount, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Subaccount|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
*/
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.setFromSubaccount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.clearFromSubaccount = function() {
  return this.setFromSubaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.hasFromSubaccount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ic_base_types.pb.v1.PrincipalId to = 3;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.getTo = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 3));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
*/
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Subaccount to_subaccount = 4;
 * @return {?proto.ic_ledger.pb.v1.Subaccount}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.getToSubaccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Subaccount} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Subaccount, 4));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Subaccount|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
*/
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.setToSubaccount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.clearToSubaccount = function() {
  return this.setToSubaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.hasToSubaccount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional BlockIndex block_height = 5;
 * @return {?proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.getBlockHeight = function() {
  return /** @type{?proto.ic_ledger.pb.v1.BlockIndex} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.BlockIndex, 5));
};


/**
 * @param {?proto.ic_ledger.pb.v1.BlockIndex|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
*/
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.setBlockHeight = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.clearBlockHeight = function() {
  return this.setBlockHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.hasBlockHeight = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Tokens amount = 6;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.getAmount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 6));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
*/
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Memo memo = 7;
 * @return {?proto.ic_ledger.pb.v1.Memo}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.getMemo = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Memo} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Memo, 7));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Memo|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
*/
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.setMemo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationRequest} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.clearMemo = function() {
  return this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransactionNotificationRequest.prototype.hasMemo = function() {
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
proto.ic_ledger.pb.v1.TransactionNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TransactionNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TransactionNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: msg.getResponse_asB64()
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
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationResponse}
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TransactionNotificationResponse;
  return proto.ic_ledger.pb.v1.TransactionNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TransactionNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationResponse}
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResponse(value);
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
proto.ic_ledger.pb.v1.TransactionNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TransactionNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TransactionNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes response = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.prototype.getResponse = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes response = 1;
 * This is a type-conversion wrapper around `getResponse()`
 * @return {string}
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.prototype.getResponse_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResponse()));
};


/**
 * optional bytes response = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResponse()`
 * @return {!Uint8Array}
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.prototype.getResponse_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResponse()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_ledger.pb.v1.TransactionNotificationResponse} returns this
 */
proto.ic_ledger.pb.v1.TransactionNotificationResponse.prototype.setResponse = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  CREATED_CANISTER_ID: 1,
  REFUND: 2,
  TOPPED_UP: 3
};

/**
 * @return {proto.ic_ledger.pb.v1.CyclesNotificationResponse.ResponseCase}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.getResponseCase = function() {
  return /** @type {proto.ic_ledger.pb.v1.CyclesNotificationResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.ic_ledger.pb.v1.CyclesNotificationResponse.oneofGroups_[0]));
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
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.CyclesNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    createdCanisterId: (f = msg.getCreatedCanisterId()) && base_types_pb.PrincipalId.toObject(includeInstance, f),
    refund: (f = msg.getRefund()) && proto.ic_ledger.pb.v1.Refund.toObject(includeInstance, f),
    toppedUp: (f = msg.getToppedUp()) && proto.ic_ledger.pb.v1.ToppedUp.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.CyclesNotificationResponse;
  return proto.ic_ledger.pb.v1.CyclesNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setCreatedCanisterId(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.Refund;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Refund.deserializeBinaryFromReader);
      msg.setRefund(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.ToppedUp;
      reader.readMessage(value,proto.ic_ledger.pb.v1.ToppedUp.deserializeBinaryFromReader);
      msg.setToppedUp(value);
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
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.CyclesNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCreatedCanisterId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
  f = message.getRefund();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.Refund.serializeBinaryToWriter
    );
  }
  f = message.getToppedUp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.ToppedUp.serializeBinaryToWriter
    );
  }
};


/**
 * optional ic_base_types.pb.v1.PrincipalId created_canister_id = 1;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.getCreatedCanisterId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} returns this
*/
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.setCreatedCanisterId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_ledger.pb.v1.CyclesNotificationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} returns this
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.clearCreatedCanisterId = function() {
  return this.setCreatedCanisterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.hasCreatedCanisterId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Refund refund = 2;
 * @return {?proto.ic_ledger.pb.v1.Refund}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.getRefund = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Refund} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Refund, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Refund|undefined} value
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} returns this
*/
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.setRefund = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_ledger.pb.v1.CyclesNotificationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} returns this
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.clearRefund = function() {
  return this.setRefund(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.hasRefund = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ToppedUp topped_up = 3;
 * @return {?proto.ic_ledger.pb.v1.ToppedUp}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.getToppedUp = function() {
  return /** @type{?proto.ic_ledger.pb.v1.ToppedUp} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.ToppedUp, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.ToppedUp|undefined} value
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} returns this
*/
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.setToppedUp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_ledger.pb.v1.CyclesNotificationResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.CyclesNotificationResponse} returns this
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.clearToppedUp = function() {
  return this.setToppedUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.CyclesNotificationResponse.prototype.hasToppedUp = function() {
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
proto.ic_ledger.pb.v1.AccountBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.AccountBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.AccountBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.AccountBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceRequest}
 */
proto.ic_ledger.pb.v1.AccountBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.AccountBalanceRequest;
  return proto.ic_ledger.pb.v1.AccountBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.AccountBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceRequest}
 */
proto.ic_ledger.pb.v1.AccountBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setAccount(value);
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
proto.ic_ledger.pb.v1.AccountBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.AccountBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.AccountBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.AccountBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountIdentifier account = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.AccountBalanceRequest.prototype.getAccount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceRequest} returns this
*/
proto.ic_ledger.pb.v1.AccountBalanceRequest.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceRequest} returns this
 */
proto.ic_ledger.pb.v1.AccountBalanceRequest.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.AccountBalanceRequest.prototype.hasAccount = function() {
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
proto.ic_ledger.pb.v1.AccountBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.AccountBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.AccountBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.AccountBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: (f = msg.getBalance()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceResponse}
 */
proto.ic_ledger.pb.v1.AccountBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.AccountBalanceResponse;
  return proto.ic_ledger.pb.v1.AccountBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.AccountBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceResponse}
 */
proto.ic_ledger.pb.v1.AccountBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setBalance(value);
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
proto.ic_ledger.pb.v1.AccountBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.AccountBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.AccountBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.AccountBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tokens balance = 1;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.AccountBalanceResponse.prototype.getBalance = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceResponse} returns this
*/
proto.ic_ledger.pb.v1.AccountBalanceResponse.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.AccountBalanceResponse} returns this
 */
proto.ic_ledger.pb.v1.AccountBalanceResponse.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.AccountBalanceResponse.prototype.hasBalance = function() {
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
proto.ic_ledger.pb.v1.TipOfChainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TipOfChainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TipOfChainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TipOfChainRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.TipOfChainRequest}
 */
proto.ic_ledger.pb.v1.TipOfChainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TipOfChainRequest;
  return proto.ic_ledger.pb.v1.TipOfChainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TipOfChainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TipOfChainRequest}
 */
proto.ic_ledger.pb.v1.TipOfChainRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.TipOfChainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TipOfChainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TipOfChainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TipOfChainRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TipOfChainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TipOfChainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    certification: (f = msg.getCertification()) && proto.ic_ledger.pb.v1.Certification.toObject(includeInstance, f),
    chainLength: (f = msg.getChainLength()) && proto.ic_ledger.pb.v1.BlockIndex.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.TipOfChainResponse}
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TipOfChainResponse;
  return proto.ic_ledger.pb.v1.TipOfChainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TipOfChainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TipOfChainResponse}
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Certification;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Certification.deserializeBinaryFromReader);
      msg.setCertification(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.BlockIndex;
      reader.readMessage(value,proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader);
      msg.setChainLength(value);
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
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TipOfChainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TipOfChainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCertification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Certification.serializeBinaryToWriter
    );
  }
  f = message.getChainLength();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional Certification certification = 1;
 * @return {?proto.ic_ledger.pb.v1.Certification}
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.getCertification = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Certification} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Certification, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Certification|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TipOfChainResponse} returns this
*/
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.setCertification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TipOfChainResponse} returns this
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.clearCertification = function() {
  return this.setCertification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.hasCertification = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BlockIndex chain_length = 2;
 * @return {?proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.getChainLength = function() {
  return /** @type{?proto.ic_ledger.pb.v1.BlockIndex} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.BlockIndex, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.BlockIndex|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TipOfChainResponse} returns this
*/
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.setChainLength = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TipOfChainResponse} returns this
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.clearChainLength = function() {
  return this.setChainLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TipOfChainResponse.prototype.hasChainLength = function() {
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
proto.ic_ledger.pb.v1.TotalSupplyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TotalSupplyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TotalSupplyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TotalSupplyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.TotalSupplyRequest}
 */
proto.ic_ledger.pb.v1.TotalSupplyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TotalSupplyRequest;
  return proto.ic_ledger.pb.v1.TotalSupplyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TotalSupplyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TotalSupplyRequest}
 */
proto.ic_ledger.pb.v1.TotalSupplyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.TotalSupplyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TotalSupplyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TotalSupplyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TotalSupplyRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_ledger.pb.v1.TotalSupplyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TotalSupplyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TotalSupplyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TotalSupplyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalSupply: (f = msg.getTotalSupply()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.TotalSupplyResponse}
 */
proto.ic_ledger.pb.v1.TotalSupplyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TotalSupplyResponse;
  return proto.ic_ledger.pb.v1.TotalSupplyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TotalSupplyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TotalSupplyResponse}
 */
proto.ic_ledger.pb.v1.TotalSupplyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setTotalSupply(value);
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
proto.ic_ledger.pb.v1.TotalSupplyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TotalSupplyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TotalSupplyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TotalSupplyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalSupply();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tokens total_supply = 1;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.TotalSupplyResponse.prototype.getTotalSupply = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TotalSupplyResponse} returns this
*/
proto.ic_ledger.pb.v1.TotalSupplyResponse.prototype.setTotalSupply = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TotalSupplyResponse} returns this
 */
proto.ic_ledger.pb.v1.TotalSupplyResponse.prototype.clearTotalSupply = function() {
  return this.setTotalSupply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TotalSupplyResponse.prototype.hasTotalSupply = function() {
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
proto.ic_ledger.pb.v1.LedgerArchiveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.LedgerArchiveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.LedgerArchiveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.LedgerArchiveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && proto.ic_ledger.pb.v1.TimeStamp.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.LedgerArchiveRequest}
 */
proto.ic_ledger.pb.v1.LedgerArchiveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.LedgerArchiveRequest;
  return proto.ic_ledger.pb.v1.LedgerArchiveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.LedgerArchiveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.LedgerArchiveRequest}
 */
proto.ic_ledger.pb.v1.LedgerArchiveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.TimeStamp;
      reader.readMessage(value,proto.ic_ledger.pb.v1.TimeStamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
proto.ic_ledger.pb.v1.LedgerArchiveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.LedgerArchiveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.LedgerArchiveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.LedgerArchiveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.TimeStamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional TimeStamp timestamp = 1;
 * @return {?proto.ic_ledger.pb.v1.TimeStamp}
 */
proto.ic_ledger.pb.v1.LedgerArchiveRequest.prototype.getTimestamp = function() {
  return /** @type{?proto.ic_ledger.pb.v1.TimeStamp} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.TimeStamp, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.TimeStamp|undefined} value
 * @return {!proto.ic_ledger.pb.v1.LedgerArchiveRequest} returns this
*/
proto.ic_ledger.pb.v1.LedgerArchiveRequest.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.LedgerArchiveRequest} returns this
 */
proto.ic_ledger.pb.v1.LedgerArchiveRequest.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.LedgerArchiveRequest.prototype.hasTimestamp = function() {
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
proto.ic_ledger.pb.v1.BlockRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.BlockRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.BlockRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.BlockRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.BlockRequest}
 */
proto.ic_ledger.pb.v1.BlockRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.BlockRequest;
  return proto.ic_ledger.pb.v1.BlockRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.BlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.BlockRequest}
 */
proto.ic_ledger.pb.v1.BlockRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.BlockRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.BlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.BlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.BlockRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockHeight();
  if (f !== 0) {
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
proto.ic_ledger.pb.v1.BlockRequest.prototype.getBlockHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.BlockRequest} returns this
 */
proto.ic_ledger.pb.v1.BlockRequest.prototype.setBlockHeight = function(value) {
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
proto.ic_ledger.pb.v1.EncodedBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.EncodedBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.EncodedBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.EncodedBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: msg.getBlock_asB64()
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
 * @return {!proto.ic_ledger.pb.v1.EncodedBlock}
 */
proto.ic_ledger.pb.v1.EncodedBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.EncodedBlock;
  return proto.ic_ledger.pb.v1.EncodedBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.EncodedBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.EncodedBlock}
 */
proto.ic_ledger.pb.v1.EncodedBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlock(value);
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
proto.ic_ledger.pb.v1.EncodedBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.EncodedBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.EncodedBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.EncodedBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes block = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_ledger.pb.v1.EncodedBlock.prototype.getBlock = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes block = 1;
 * This is a type-conversion wrapper around `getBlock()`
 * @return {string}
 */
proto.ic_ledger.pb.v1.EncodedBlock.prototype.getBlock_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlock()));
};


/**
 * optional bytes block = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlock()`
 * @return {!Uint8Array}
 */
proto.ic_ledger.pb.v1.EncodedBlock.prototype.getBlock_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlock()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_ledger.pb.v1.EncodedBlock} returns this
 */
proto.ic_ledger.pb.v1.EncodedBlock.prototype.setBlock = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_ledger.pb.v1.BlockResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_ledger.pb.v1.BlockResponse.BlockContentCase = {
  BLOCK_CONTENT_NOT_SET: 0,
  BLOCK: 1,
  CANISTER_ID: 2
};

/**
 * @return {proto.ic_ledger.pb.v1.BlockResponse.BlockContentCase}
 */
proto.ic_ledger.pb.v1.BlockResponse.prototype.getBlockContentCase = function() {
  return /** @type {proto.ic_ledger.pb.v1.BlockResponse.BlockContentCase} */(jspb.Message.computeOneofCase(this, proto.ic_ledger.pb.v1.BlockResponse.oneofGroups_[0]));
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
proto.ic_ledger.pb.v1.BlockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.BlockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.BlockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.BlockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: (f = msg.getBlock()) && proto.ic_ledger.pb.v1.EncodedBlock.toObject(includeInstance, f),
    canisterId: (f = msg.getCanisterId()) && base_types_pb.PrincipalId.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.BlockResponse}
 */
proto.ic_ledger.pb.v1.BlockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.BlockResponse;
  return proto.ic_ledger.pb.v1.BlockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.BlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.BlockResponse}
 */
proto.ic_ledger.pb.v1.BlockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.EncodedBlock;
      reader.readMessage(value,proto.ic_ledger.pb.v1.EncodedBlock.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 2:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setCanisterId(value);
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
proto.ic_ledger.pb.v1.BlockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.BlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.BlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.BlockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.EncodedBlock.serializeBinaryToWriter
    );
  }
  f = message.getCanisterId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional EncodedBlock block = 1;
 * @return {?proto.ic_ledger.pb.v1.EncodedBlock}
 */
proto.ic_ledger.pb.v1.BlockResponse.prototype.getBlock = function() {
  return /** @type{?proto.ic_ledger.pb.v1.EncodedBlock} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.EncodedBlock, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.EncodedBlock|undefined} value
 * @return {!proto.ic_ledger.pb.v1.BlockResponse} returns this
*/
proto.ic_ledger.pb.v1.BlockResponse.prototype.setBlock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_ledger.pb.v1.BlockResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.BlockResponse} returns this
 */
proto.ic_ledger.pb.v1.BlockResponse.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.BlockResponse.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ic_base_types.pb.v1.PrincipalId canister_id = 2;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.BlockResponse.prototype.getCanisterId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 2));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_ledger.pb.v1.BlockResponse} returns this
*/
proto.ic_ledger.pb.v1.BlockResponse.prototype.setCanisterId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_ledger.pb.v1.BlockResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.BlockResponse} returns this
 */
proto.ic_ledger.pb.v1.BlockResponse.prototype.clearCanisterId = function() {
  return this.setCanisterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.BlockResponse.prototype.hasCanisterId = function() {
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
proto.ic_ledger.pb.v1.GetBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.GetBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.GetBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    length: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_ledger.pb.v1.GetBlocksRequest}
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.GetBlocksRequest;
  return proto.ic_ledger.pb.v1.GetBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.GetBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.GetBlocksRequest}
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLength(value);
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
proto.ic_ledger.pb.v1.GetBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.GetBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.GetBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 start = 1;
 * @return {number}
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.GetBlocksRequest} returns this
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 length = 2;
 * @return {number}
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.GetBlocksRequest} returns this
 */
proto.ic_ledger.pb.v1.GetBlocksRequest.prototype.setLength = function(value) {
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
proto.ic_ledger.pb.v1.Refund.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Refund.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Refund} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Refund.toObject = function(includeInstance, msg) {
  var f, obj = {
    refund: (f = msg.getRefund()) && proto.ic_ledger.pb.v1.BlockIndex.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ic_ledger.pb.v1.Refund}
 */
proto.ic_ledger.pb.v1.Refund.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Refund;
  return proto.ic_ledger.pb.v1.Refund.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Refund} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Refund}
 */
proto.ic_ledger.pb.v1.Refund.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.ic_ledger.pb.v1.BlockIndex;
      reader.readMessage(value,proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader);
      msg.setRefund(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.ic_ledger.pb.v1.Refund.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Refund.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Refund} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Refund.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefund();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional BlockIndex refund = 2;
 * @return {?proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.Refund.prototype.getRefund = function() {
  return /** @type{?proto.ic_ledger.pb.v1.BlockIndex} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.BlockIndex, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.BlockIndex|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Refund} returns this
*/
proto.ic_ledger.pb.v1.Refund.prototype.setRefund = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Refund} returns this
 */
proto.ic_ledger.pb.v1.Refund.prototype.clearRefund = function() {
  return this.setRefund(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Refund.prototype.hasRefund = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.ic_ledger.pb.v1.Refund.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_ledger.pb.v1.Refund} returns this
 */
proto.ic_ledger.pb.v1.Refund.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.ic_ledger.pb.v1.ToppedUp.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.ToppedUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.ToppedUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ToppedUp.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.ToppedUp}
 */
proto.ic_ledger.pb.v1.ToppedUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.ToppedUp;
  return proto.ic_ledger.pb.v1.ToppedUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.ToppedUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.ToppedUp}
 */
proto.ic_ledger.pb.v1.ToppedUp.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.ToppedUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.ToppedUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.ToppedUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ToppedUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_ledger.pb.v1.EncodedBlocks.repeatedFields_ = [1];



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
proto.ic_ledger.pb.v1.EncodedBlocks.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.EncodedBlocks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.EncodedBlocks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.EncodedBlocks.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.ic_ledger.pb.v1.EncodedBlock.toObject, includeInstance)
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
 * @return {!proto.ic_ledger.pb.v1.EncodedBlocks}
 */
proto.ic_ledger.pb.v1.EncodedBlocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.EncodedBlocks;
  return proto.ic_ledger.pb.v1.EncodedBlocks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.EncodedBlocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.EncodedBlocks}
 */
proto.ic_ledger.pb.v1.EncodedBlocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.EncodedBlock;
      reader.readMessage(value,proto.ic_ledger.pb.v1.EncodedBlock.deserializeBinaryFromReader);
      msg.addBlocks(value);
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
proto.ic_ledger.pb.v1.EncodedBlocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.EncodedBlocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.EncodedBlocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.EncodedBlocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.EncodedBlock.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EncodedBlock blocks = 1;
 * @return {!Array<!proto.ic_ledger.pb.v1.EncodedBlock>}
 */
proto.ic_ledger.pb.v1.EncodedBlocks.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.ic_ledger.pb.v1.EncodedBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_ledger.pb.v1.EncodedBlock, 1));
};


/**
 * @param {!Array<!proto.ic_ledger.pb.v1.EncodedBlock>} value
 * @return {!proto.ic_ledger.pb.v1.EncodedBlocks} returns this
*/
proto.ic_ledger.pb.v1.EncodedBlocks.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_ledger.pb.v1.EncodedBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_ledger.pb.v1.EncodedBlock}
 */
proto.ic_ledger.pb.v1.EncodedBlocks.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_ledger.pb.v1.EncodedBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_ledger.pb.v1.EncodedBlocks} returns this
 */
proto.ic_ledger.pb.v1.EncodedBlocks.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.GetBlocksContentCase = {
  GET_BLOCKS_CONTENT_NOT_SET: 0,
  BLOCKS: 1,
  ERROR: 2
};

/**
 * @return {proto.ic_ledger.pb.v1.GetBlocksResponse.GetBlocksContentCase}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.getGetBlocksContentCase = function() {
  return /** @type {proto.ic_ledger.pb.v1.GetBlocksResponse.GetBlocksContentCase} */(jspb.Message.computeOneofCase(this, proto.ic_ledger.pb.v1.GetBlocksResponse.oneofGroups_[0]));
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
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.GetBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.GetBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocks: (f = msg.getBlocks()) && proto.ic_ledger.pb.v1.EncodedBlocks.toObject(includeInstance, f),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ic_ledger.pb.v1.GetBlocksResponse}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.GetBlocksResponse;
  return proto.ic_ledger.pb.v1.GetBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.GetBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.GetBlocksResponse}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.EncodedBlocks;
      reader.readMessage(value,proto.ic_ledger.pb.v1.EncodedBlocks.deserializeBinaryFromReader);
      msg.setBlocks(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
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
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.GetBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.GetBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocks();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.EncodedBlocks.serializeBinaryToWriter
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
 * optional EncodedBlocks blocks = 1;
 * @return {?proto.ic_ledger.pb.v1.EncodedBlocks}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.getBlocks = function() {
  return /** @type{?proto.ic_ledger.pb.v1.EncodedBlocks} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.EncodedBlocks, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.EncodedBlocks|undefined} value
 * @return {!proto.ic_ledger.pb.v1.GetBlocksResponse} returns this
*/
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.setBlocks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_ledger.pb.v1.GetBlocksResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.GetBlocksResponse} returns this
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.clearBlocks = function() {
  return this.setBlocks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.hasBlocks = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_ledger.pb.v1.GetBlocksResponse} returns this
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ic_ledger.pb.v1.GetBlocksResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.GetBlocksResponse} returns this
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.clearError = function() {
  return jspb.Message.setOneofField(this, 2, proto.ic_ledger.pb.v1.GetBlocksResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.GetBlocksResponse.prototype.hasError = function() {
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
proto.ic_ledger.pb.v1.IterBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.IterBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.IterBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, 0),
    length: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_ledger.pb.v1.IterBlocksRequest}
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.IterBlocksRequest;
  return proto.ic_ledger.pb.v1.IterBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.IterBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.IterBlocksRequest}
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLength(value);
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
proto.ic_ledger.pb.v1.IterBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.IterBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.IterBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 start = 1;
 * @return {number}
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.IterBlocksRequest} returns this
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 length = 2;
 * @return {number}
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.IterBlocksRequest} returns this
 */
proto.ic_ledger.pb.v1.IterBlocksRequest.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.repeatedFields_ = [1];



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
proto.ic_ledger.pb.v1.IterBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.IterBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.IterBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.ic_ledger.pb.v1.EncodedBlock.toObject, includeInstance)
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
 * @return {!proto.ic_ledger.pb.v1.IterBlocksResponse}
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.IterBlocksResponse;
  return proto.ic_ledger.pb.v1.IterBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.IterBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.IterBlocksResponse}
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.EncodedBlock;
      reader.readMessage(value,proto.ic_ledger.pb.v1.EncodedBlock.deserializeBinaryFromReader);
      msg.addBlocks(value);
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
proto.ic_ledger.pb.v1.IterBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.IterBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.IterBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.EncodedBlock.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EncodedBlock blocks = 1;
 * @return {!Array<!proto.ic_ledger.pb.v1.EncodedBlock>}
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.ic_ledger.pb.v1.EncodedBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_ledger.pb.v1.EncodedBlock, 1));
};


/**
 * @param {!Array<!proto.ic_ledger.pb.v1.EncodedBlock>} value
 * @return {!proto.ic_ledger.pb.v1.IterBlocksResponse} returns this
*/
proto.ic_ledger.pb.v1.IterBlocksResponse.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_ledger.pb.v1.EncodedBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_ledger.pb.v1.EncodedBlock}
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_ledger.pb.v1.EncodedBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_ledger.pb.v1.IterBlocksResponse} returns this
 */
proto.ic_ledger.pb.v1.IterBlocksResponse.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
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
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.ArchiveIndexEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.ArchiveIndexEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    heightFrom: jspb.Message.getFieldWithDefault(msg, 1, 0),
    heightTo: jspb.Message.getFieldWithDefault(msg, 2, 0),
    canisterId: (f = msg.getCanisterId()) && base_types_pb.PrincipalId.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexEntry}
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.ArchiveIndexEntry;
  return proto.ic_ledger.pb.v1.ArchiveIndexEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.ArchiveIndexEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexEntry}
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeightFrom(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeightTo(value);
      break;
    case 3:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.setCanisterId(value);
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
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.ArchiveIndexEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.ArchiveIndexEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeightFrom();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getHeightTo();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCanisterId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 height_from = 1;
 * @return {number}
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.getHeightFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexEntry} returns this
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.setHeightFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 height_to = 2;
 * @return {number}
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.getHeightTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexEntry} returns this
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.setHeightTo = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ic_base_types.pb.v1.PrincipalId canister_id = 3;
 * @return {?proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.getCanisterId = function() {
  return /** @type{?proto.ic_base_types.pb.v1.PrincipalId} */ (
    jspb.Message.getWrapperField(this, base_types_pb.PrincipalId, 3));
};


/**
 * @param {?proto.ic_base_types.pb.v1.PrincipalId|undefined} value
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexEntry} returns this
*/
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.setCanisterId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexEntry} returns this
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.clearCanisterId = function() {
  return this.setCanisterId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.ArchiveIndexEntry.prototype.hasCanisterId = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.repeatedFields_ = [1];



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
proto.ic_ledger.pb.v1.ArchiveIndexResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.ArchiveIndexResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.ArchiveIndexResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.ic_ledger.pb.v1.ArchiveIndexEntry.toObject, includeInstance)
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
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexResponse}
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.ArchiveIndexResponse;
  return proto.ic_ledger.pb.v1.ArchiveIndexResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.ArchiveIndexResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexResponse}
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.ArchiveIndexEntry;
      reader.readMessage(value,proto.ic_ledger.pb.v1.ArchiveIndexEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
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
proto.ic_ledger.pb.v1.ArchiveIndexResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.ArchiveIndexResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.ArchiveIndexResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.ArchiveIndexEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ArchiveIndexEntry entries = 1;
 * @return {!Array<!proto.ic_ledger.pb.v1.ArchiveIndexEntry>}
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.ic_ledger.pb.v1.ArchiveIndexEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_ledger.pb.v1.ArchiveIndexEntry, 1));
};


/**
 * @param {!Array<!proto.ic_ledger.pb.v1.ArchiveIndexEntry>} value
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexResponse} returns this
*/
proto.ic_ledger.pb.v1.ArchiveIndexResponse.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_ledger.pb.v1.ArchiveIndexEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexEntry}
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_ledger.pb.v1.ArchiveIndexEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_ledger.pb.v1.ArchiveIndexResponse} returns this
 */
proto.ic_ledger.pb.v1.ArchiveIndexResponse.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
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
proto.ic_ledger.pb.v1.ArchiveInit.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.ArchiveInit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.ArchiveInit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveInit.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeMaxMemorySizeBytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxMessageSizeBytes: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ic_ledger.pb.v1.ArchiveInit}
 */
proto.ic_ledger.pb.v1.ArchiveInit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.ArchiveInit;
  return proto.ic_ledger.pb.v1.ArchiveInit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.ArchiveInit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.ArchiveInit}
 */
proto.ic_ledger.pb.v1.ArchiveInit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNodeMaxMemorySizeBytes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxMessageSizeBytes(value);
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
proto.ic_ledger.pb.v1.ArchiveInit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.ArchiveInit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.ArchiveInit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveInit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeMaxMemorySizeBytes();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getMaxMessageSizeBytes();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 node_max_memory_size_bytes = 1;
 * @return {number}
 */
proto.ic_ledger.pb.v1.ArchiveInit.prototype.getNodeMaxMemorySizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.ArchiveInit} returns this
 */
proto.ic_ledger.pb.v1.ArchiveInit.prototype.setNodeMaxMemorySizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 max_message_size_bytes = 2;
 * @return {number}
 */
proto.ic_ledger.pb.v1.ArchiveInit.prototype.getMaxMessageSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.ArchiveInit} returns this
 */
proto.ic_ledger.pb.v1.ArchiveInit.prototype.setMaxMessageSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.repeatedFields_ = [1];



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
proto.ic_ledger.pb.v1.ArchiveAddRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.ArchiveAddRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.ArchiveAddRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    proto.ic_ledger.pb.v1.Block.toObject, includeInstance)
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
 * @return {!proto.ic_ledger.pb.v1.ArchiveAddRequest}
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.ArchiveAddRequest;
  return proto.ic_ledger.pb.v1.ArchiveAddRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.ArchiveAddRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.ArchiveAddRequest}
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Block;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Block.deserializeBinaryFromReader);
      msg.addBlocks(value);
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
proto.ic_ledger.pb.v1.ArchiveAddRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.ArchiveAddRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.ArchiveAddRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Block.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Block blocks = 1;
 * @return {!Array<!proto.ic_ledger.pb.v1.Block>}
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.ic_ledger.pb.v1.Block>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_ledger.pb.v1.Block, 1));
};


/**
 * @param {!Array<!proto.ic_ledger.pb.v1.Block>} value
 * @return {!proto.ic_ledger.pb.v1.ArchiveAddRequest} returns this
*/
proto.ic_ledger.pb.v1.ArchiveAddRequest.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_ledger.pb.v1.Block=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_ledger.pb.v1.Block}
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_ledger.pb.v1.Block, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_ledger.pb.v1.ArchiveAddRequest} returns this
 */
proto.ic_ledger.pb.v1.ArchiveAddRequest.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
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
proto.ic_ledger.pb.v1.ArchiveAddResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.ArchiveAddResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.ArchiveAddResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveAddResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.ArchiveAddResponse}
 */
proto.ic_ledger.pb.v1.ArchiveAddResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.ArchiveAddResponse;
  return proto.ic_ledger.pb.v1.ArchiveAddResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.ArchiveAddResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.ArchiveAddResponse}
 */
proto.ic_ledger.pb.v1.ArchiveAddResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.ArchiveAddResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.ArchiveAddResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.ArchiveAddResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.ArchiveAddResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_ledger.pb.v1.GetNodesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.GetNodesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.GetNodesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetNodesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.GetNodesRequest}
 */
proto.ic_ledger.pb.v1.GetNodesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.GetNodesRequest;
  return proto.ic_ledger.pb.v1.GetNodesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.GetNodesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.GetNodesRequest}
 */
proto.ic_ledger.pb.v1.GetNodesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.GetNodesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.GetNodesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.GetNodesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetNodesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_ledger.pb.v1.GetNodesResponse.repeatedFields_ = [1];



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
proto.ic_ledger.pb.v1.GetNodesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.GetNodesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.GetNodesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetNodesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
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
 * @return {!proto.ic_ledger.pb.v1.GetNodesResponse}
 */
proto.ic_ledger.pb.v1.GetNodesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.GetNodesResponse;
  return proto.ic_ledger.pb.v1.GetNodesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.GetNodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.GetNodesResponse}
 */
proto.ic_ledger.pb.v1.GetNodesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new base_types_pb.PrincipalId;
      reader.readMessage(value,base_types_pb.PrincipalId.deserializeBinaryFromReader);
      msg.addNodes(value);
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
proto.ic_ledger.pb.v1.GetNodesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.GetNodesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.GetNodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.GetNodesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      base_types_pb.PrincipalId.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ic_base_types.pb.v1.PrincipalId nodes = 1;
 * @return {!Array<!proto.ic_base_types.pb.v1.PrincipalId>}
 */
proto.ic_ledger.pb.v1.GetNodesResponse.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.ic_base_types.pb.v1.PrincipalId>} */ (
    jspb.Message.getRepeatedWrapperField(this, base_types_pb.PrincipalId, 1));
};


/**
 * @param {!Array<!proto.ic_base_types.pb.v1.PrincipalId>} value
 * @return {!proto.ic_ledger.pb.v1.GetNodesResponse} returns this
*/
proto.ic_ledger.pb.v1.GetNodesResponse.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_base_types.pb.v1.PrincipalId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_ledger.pb.v1.GetNodesResponse.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_base_types.pb.v1.PrincipalId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_ledger.pb.v1.GetNodesResponse} returns this
 */
proto.ic_ledger.pb.v1.GetNodesResponse.prototype.clearNodesList = function() {
  return this.setNodesList([]);
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
proto.ic_ledger.pb.v1.Tokens.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Tokens.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Tokens} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Tokens.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Tokens.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Tokens;
  return proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Tokens} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.Tokens.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Tokens} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_ledger.pb.v1.Tokens.prototype.getE8s = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.Tokens} returns this
 */
proto.ic_ledger.pb.v1.Tokens.prototype.setE8s = function(value) {
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
proto.ic_ledger.pb.v1.Payment.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Payment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Payment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Payment.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiverGets: (f = msg.getReceiverGets()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Payment}
 */
proto.ic_ledger.pb.v1.Payment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Payment;
  return proto.ic_ledger.pb.v1.Payment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Payment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Payment}
 */
proto.ic_ledger.pb.v1.Payment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setReceiverGets(value);
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
proto.ic_ledger.pb.v1.Payment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Payment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Payment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Payment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiverGets();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tokens receiver_gets = 1;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Payment.prototype.getReceiverGets = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Payment} returns this
*/
proto.ic_ledger.pb.v1.Payment.prototype.setReceiverGets = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Payment} returns this
 */
proto.ic_ledger.pb.v1.Payment.prototype.clearReceiverGets = function() {
  return this.setReceiverGets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Payment.prototype.hasReceiverGets = function() {
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
proto.ic_ledger.pb.v1.BlockIndex.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.BlockIndex.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.BlockIndex} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.BlockIndex.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.BlockIndex.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.BlockIndex;
  return proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.BlockIndex} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
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
proto.ic_ledger.pb.v1.BlockIndex.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.BlockIndex} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 height = 1;
 * @return {number}
 */
proto.ic_ledger.pb.v1.BlockIndex.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.BlockIndex} returns this
 */
proto.ic_ledger.pb.v1.BlockIndex.prototype.setHeight = function(value) {
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
proto.ic_ledger.pb.v1.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    parentHash: (f = msg.getParentHash()) && proto.ic_ledger.pb.v1.Hash.toObject(includeInstance, f),
    timestamp: (f = msg.getTimestamp()) && proto.ic_ledger.pb.v1.TimeStamp.toObject(includeInstance, f),
    transaction: (f = msg.getTransaction()) && proto.ic_ledger.pb.v1.Transaction.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Block}
 */
proto.ic_ledger.pb.v1.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Block;
  return proto.ic_ledger.pb.v1.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Block}
 */
proto.ic_ledger.pb.v1.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Hash;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Hash.deserializeBinaryFromReader);
      msg.setParentHash(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.TimeStamp;
      reader.readMessage(value,proto.ic_ledger.pb.v1.TimeStamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Transaction;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Transaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
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
proto.ic_ledger.pb.v1.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParentHash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Hash.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.TimeStamp.serializeBinaryToWriter
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional Hash parent_hash = 1;
 * @return {?proto.ic_ledger.pb.v1.Hash}
 */
proto.ic_ledger.pb.v1.Block.prototype.getParentHash = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Hash} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Hash, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Hash|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Block} returns this
*/
proto.ic_ledger.pb.v1.Block.prototype.setParentHash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Block} returns this
 */
proto.ic_ledger.pb.v1.Block.prototype.clearParentHash = function() {
  return this.setParentHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Block.prototype.hasParentHash = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TimeStamp timestamp = 2;
 * @return {?proto.ic_ledger.pb.v1.TimeStamp}
 */
proto.ic_ledger.pb.v1.Block.prototype.getTimestamp = function() {
  return /** @type{?proto.ic_ledger.pb.v1.TimeStamp} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.TimeStamp, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.TimeStamp|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Block} returns this
*/
proto.ic_ledger.pb.v1.Block.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Block} returns this
 */
proto.ic_ledger.pb.v1.Block.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Block.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Transaction transaction = 3;
 * @return {?proto.ic_ledger.pb.v1.Transaction}
 */
proto.ic_ledger.pb.v1.Block.prototype.getTransaction = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Transaction} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Transaction, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Transaction|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Block} returns this
*/
proto.ic_ledger.pb.v1.Block.prototype.setTransaction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Block} returns this
 */
proto.ic_ledger.pb.v1.Block.prototype.clearTransaction = function() {
  return this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Block.prototype.hasTransaction = function() {
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
proto.ic_ledger.pb.v1.Hash.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Hash.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Hash} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Hash.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64()
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
 * @return {!proto.ic_ledger.pb.v1.Hash}
 */
proto.ic_ledger.pb.v1.Hash.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Hash;
  return proto.ic_ledger.pb.v1.Hash.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Hash} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Hash}
 */
proto.ic_ledger.pb.v1.Hash.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
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
proto.ic_ledger.pb.v1.Hash.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Hash.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Hash} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Hash.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_ledger.pb.v1.Hash.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.ic_ledger.pb.v1.Hash.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.ic_ledger.pb.v1.Hash.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_ledger.pb.v1.Hash} returns this
 */
proto.ic_ledger.pb.v1.Hash.prototype.setHash = function(value) {
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
proto.ic_ledger.pb.v1.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: (f = msg.getIdentifier()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f),
    balance: (f = msg.getBalance()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Account}
 */
proto.ic_ledger.pb.v1.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Account;
  return proto.ic_ledger.pb.v1.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Account}
 */
proto.ic_ledger.pb.v1.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setBalance(value);
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
proto.ic_ledger.pb.v1.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountIdentifier identifier = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.Account.prototype.getIdentifier = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Account} returns this
*/
proto.ic_ledger.pb.v1.Account.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Account} returns this
 */
proto.ic_ledger.pb.v1.Account.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Account.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Tokens balance = 2;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Account.prototype.getBalance = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Account} returns this
*/
proto.ic_ledger.pb.v1.Account.prototype.setBalance = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Account} returns this
 */
proto.ic_ledger.pb.v1.Account.prototype.clearBalance = function() {
  return this.setBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Account.prototype.hasBalance = function() {
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
proto.ic_ledger.pb.v1.Transaction.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ic_ledger.pb.v1.Transaction.TransferCase = {
  TRANSFER_NOT_SET: 0,
  BURN: 1,
  MINT: 2,
  SEND: 3
};

/**
 * @return {proto.ic_ledger.pb.v1.Transaction.TransferCase}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getTransferCase = function() {
  return /** @type {proto.ic_ledger.pb.v1.Transaction.TransferCase} */(jspb.Message.computeOneofCase(this, proto.ic_ledger.pb.v1.Transaction.oneofGroups_[0]));
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
proto.ic_ledger.pb.v1.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    burn: (f = msg.getBurn()) && proto.ic_ledger.pb.v1.Burn.toObject(includeInstance, f),
    mint: (f = msg.getMint()) && proto.ic_ledger.pb.v1.Mint.toObject(includeInstance, f),
    send: (f = msg.getSend()) && proto.ic_ledger.pb.v1.Send.toObject(includeInstance, f),
    memo: (f = msg.getMemo()) && proto.ic_ledger.pb.v1.Memo.toObject(includeInstance, f),
    icrc1Memo: (f = msg.getIcrc1Memo()) && proto.ic_ledger.pb.v1.Icrc1Memo.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && proto.ic_ledger.pb.v1.BlockIndex.toObject(includeInstance, f),
    createdAtTime: (f = msg.getCreatedAtTime()) && proto.ic_ledger.pb.v1.TimeStamp.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Transaction}
 */
proto.ic_ledger.pb.v1.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Transaction;
  return proto.ic_ledger.pb.v1.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Transaction}
 */
proto.ic_ledger.pb.v1.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Burn;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Burn.deserializeBinaryFromReader);
      msg.setBurn(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.Mint;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Mint.deserializeBinaryFromReader);
      msg.setMint(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Send;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Send.deserializeBinaryFromReader);
      msg.setSend(value);
      break;
    case 4:
      var value = new proto.ic_ledger.pb.v1.Memo;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Memo.deserializeBinaryFromReader);
      msg.setMemo(value);
      break;
    case 7:
      var value = new proto.ic_ledger.pb.v1.Icrc1Memo;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Icrc1Memo.deserializeBinaryFromReader);
      msg.setIcrc1Memo(value);
      break;
    case 5:
      var value = new proto.ic_ledger.pb.v1.BlockIndex;
      reader.readMessage(value,proto.ic_ledger.pb.v1.BlockIndex.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new proto.ic_ledger.pb.v1.TimeStamp;
      reader.readMessage(value,proto.ic_ledger.pb.v1.TimeStamp.deserializeBinaryFromReader);
      msg.setCreatedAtTime(value);
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
proto.ic_ledger.pb.v1.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBurn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Burn.serializeBinaryToWriter
    );
  }
  f = message.getMint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.Mint.serializeBinaryToWriter
    );
  }
  f = message.getSend();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Send.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_ledger.pb.v1.Memo.serializeBinaryToWriter
    );
  }
  f = message.getIcrc1Memo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ic_ledger.pb.v1.Icrc1Memo.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_ledger.pb.v1.BlockIndex.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAtTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_ledger.pb.v1.TimeStamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Burn burn = 1;
 * @return {?proto.ic_ledger.pb.v1.Burn}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getBurn = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Burn} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Burn, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Burn|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
*/
proto.ic_ledger.pb.v1.Transaction.prototype.setBurn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ic_ledger.pb.v1.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
 */
proto.ic_ledger.pb.v1.Transaction.prototype.clearBurn = function() {
  return this.setBurn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.hasBurn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Mint mint = 2;
 * @return {?proto.ic_ledger.pb.v1.Mint}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getMint = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Mint} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Mint, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Mint|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
*/
proto.ic_ledger.pb.v1.Transaction.prototype.setMint = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ic_ledger.pb.v1.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
 */
proto.ic_ledger.pb.v1.Transaction.prototype.clearMint = function() {
  return this.setMint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.hasMint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Send send = 3;
 * @return {?proto.ic_ledger.pb.v1.Send}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getSend = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Send} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Send, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Send|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
*/
proto.ic_ledger.pb.v1.Transaction.prototype.setSend = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ic_ledger.pb.v1.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
 */
proto.ic_ledger.pb.v1.Transaction.prototype.clearSend = function() {
  return this.setSend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.hasSend = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Memo memo = 4;
 * @return {?proto.ic_ledger.pb.v1.Memo}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getMemo = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Memo} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Memo, 4));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Memo|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
*/
proto.ic_ledger.pb.v1.Transaction.prototype.setMemo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
 */
proto.ic_ledger.pb.v1.Transaction.prototype.clearMemo = function() {
  return this.setMemo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Icrc1Memo icrc1_memo = 7;
 * @return {?proto.ic_ledger.pb.v1.Icrc1Memo}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getIcrc1Memo = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Icrc1Memo} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Icrc1Memo, 7));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Icrc1Memo|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
*/
proto.ic_ledger.pb.v1.Transaction.prototype.setIcrc1Memo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
 */
proto.ic_ledger.pb.v1.Transaction.prototype.clearIcrc1Memo = function() {
  return this.setIcrc1Memo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.hasIcrc1Memo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BlockIndex created_at = 5;
 * @return {?proto.ic_ledger.pb.v1.BlockIndex}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getCreatedAt = function() {
  return /** @type{?proto.ic_ledger.pb.v1.BlockIndex} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.BlockIndex, 5));
};


/**
 * @param {?proto.ic_ledger.pb.v1.BlockIndex|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
*/
proto.ic_ledger.pb.v1.Transaction.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
 */
proto.ic_ledger.pb.v1.Transaction.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TimeStamp created_at_time = 6;
 * @return {?proto.ic_ledger.pb.v1.TimeStamp}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.getCreatedAtTime = function() {
  return /** @type{?proto.ic_ledger.pb.v1.TimeStamp} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.TimeStamp, 6));
};


/**
 * @param {?proto.ic_ledger.pb.v1.TimeStamp|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
*/
proto.ic_ledger.pb.v1.Transaction.prototype.setCreatedAtTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Transaction} returns this
 */
proto.ic_ledger.pb.v1.Transaction.prototype.clearCreatedAtTime = function() {
  return this.setCreatedAtTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Transaction.prototype.hasCreatedAtTime = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ic_ledger.pb.v1.Send.oneofGroups_ = [[5,6]];

/**
 * @enum {number}
 */
proto.ic_ledger.pb.v1.Send.ExtensionCase = {
  EXTENSION_NOT_SET: 0,
  APPROVE: 5,
  TRANSFER_FROM: 6
};

/**
 * @return {proto.ic_ledger.pb.v1.Send.ExtensionCase}
 */
proto.ic_ledger.pb.v1.Send.prototype.getExtensionCase = function() {
  return /** @type {proto.ic_ledger.pb.v1.Send.ExtensionCase} */(jspb.Message.computeOneofCase(this, proto.ic_ledger.pb.v1.Send.oneofGroups_[0]));
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
proto.ic_ledger.pb.v1.Send.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Send.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Send} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Send.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f),
    maxFee: (f = msg.getMaxFee()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f),
    approve: (f = msg.getApprove()) && proto.ic_ledger.pb.v1.Approve.toObject(includeInstance, f),
    transferFrom: (f = msg.getTransferFrom()) && proto.ic_ledger.pb.v1.TransferFrom.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Send}
 */
proto.ic_ledger.pb.v1.Send.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Send;
  return proto.ic_ledger.pb.v1.Send.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Send} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Send}
 */
proto.ic_ledger.pb.v1.Send.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 4:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setMaxFee(value);
      break;
    case 5:
      var value = new proto.ic_ledger.pb.v1.Approve;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Approve.deserializeBinaryFromReader);
      msg.setApprove(value);
      break;
    case 6:
      var value = new proto.ic_ledger.pb.v1.TransferFrom;
      reader.readMessage(value,proto.ic_ledger.pb.v1.TransferFrom.deserializeBinaryFromReader);
      msg.setTransferFrom(value);
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
proto.ic_ledger.pb.v1.Send.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Send.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Send} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Send.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getMaxFee();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getApprove();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ic_ledger.pb.v1.Approve.serializeBinaryToWriter
    );
  }
  f = message.getTransferFrom();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ic_ledger.pb.v1.TransferFrom.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountIdentifier from = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.Send.prototype.getFrom = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
*/
proto.ic_ledger.pb.v1.Send.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
 */
proto.ic_ledger.pb.v1.Send.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Send.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccountIdentifier to = 2;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.Send.prototype.getTo = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
*/
proto.ic_ledger.pb.v1.Send.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
 */
proto.ic_ledger.pb.v1.Send.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Send.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Tokens amount = 3;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Send.prototype.getAmount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
*/
proto.ic_ledger.pb.v1.Send.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
 */
proto.ic_ledger.pb.v1.Send.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Send.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Tokens max_fee = 4;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Send.prototype.getMaxFee = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 4));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
*/
proto.ic_ledger.pb.v1.Send.prototype.setMaxFee = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
 */
proto.ic_ledger.pb.v1.Send.prototype.clearMaxFee = function() {
  return this.setMaxFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Send.prototype.hasMaxFee = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Approve approve = 5;
 * @return {?proto.ic_ledger.pb.v1.Approve}
 */
proto.ic_ledger.pb.v1.Send.prototype.getApprove = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Approve} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Approve, 5));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Approve|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
*/
proto.ic_ledger.pb.v1.Send.prototype.setApprove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ic_ledger.pb.v1.Send.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
 */
proto.ic_ledger.pb.v1.Send.prototype.clearApprove = function() {
  return this.setApprove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Send.prototype.hasApprove = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TransferFrom transfer_from = 6;
 * @return {?proto.ic_ledger.pb.v1.TransferFrom}
 */
proto.ic_ledger.pb.v1.Send.prototype.getTransferFrom = function() {
  return /** @type{?proto.ic_ledger.pb.v1.TransferFrom} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.TransferFrom, 6));
};


/**
 * @param {?proto.ic_ledger.pb.v1.TransferFrom|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
*/
proto.ic_ledger.pb.v1.Send.prototype.setTransferFrom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ic_ledger.pb.v1.Send.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Send} returns this
 */
proto.ic_ledger.pb.v1.Send.prototype.clearTransferFrom = function() {
  return this.setTransferFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Send.prototype.hasTransferFrom = function() {
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
proto.ic_ledger.pb.v1.TransferFrom.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TransferFrom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TransferFrom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransferFrom.toObject = function(includeInstance, msg) {
  var f, obj = {
    spender: (f = msg.getSpender()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.TransferFrom}
 */
proto.ic_ledger.pb.v1.TransferFrom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TransferFrom;
  return proto.ic_ledger.pb.v1.TransferFrom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TransferFrom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TransferFrom}
 */
proto.ic_ledger.pb.v1.TransferFrom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setSpender(value);
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
proto.ic_ledger.pb.v1.TransferFrom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TransferFrom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TransferFrom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransferFrom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpender();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountIdentifier spender = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.TransferFrom.prototype.getSpender = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransferFrom} returns this
*/
proto.ic_ledger.pb.v1.TransferFrom.prototype.setSpender = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransferFrom} returns this
 */
proto.ic_ledger.pb.v1.TransferFrom.prototype.clearSpender = function() {
  return this.setSpender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransferFrom.prototype.hasSpender = function() {
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
proto.ic_ledger.pb.v1.Approve.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Approve.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Approve} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Approve.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowance: (f = msg.getAllowance()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f),
    expiresAt: (f = msg.getExpiresAt()) && proto.ic_ledger.pb.v1.TimeStamp.toObject(includeInstance, f),
    expectedAllowance: (f = msg.getExpectedAllowance()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Approve}
 */
proto.ic_ledger.pb.v1.Approve.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Approve;
  return proto.ic_ledger.pb.v1.Approve.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Approve} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Approve}
 */
proto.ic_ledger.pb.v1.Approve.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setAllowance(value);
      break;
    case 2:
      var value = new proto.ic_ledger.pb.v1.TimeStamp;
      reader.readMessage(value,proto.ic_ledger.pb.v1.TimeStamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setExpectedAllowance(value);
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
proto.ic_ledger.pb.v1.Approve.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Approve.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Approve} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Approve.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.TimeStamp.serializeBinaryToWriter
    );
  }
  f = message.getExpectedAllowance();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tokens allowance = 1;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Approve.prototype.getAllowance = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Approve} returns this
*/
proto.ic_ledger.pb.v1.Approve.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Approve} returns this
 */
proto.ic_ledger.pb.v1.Approve.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Approve.prototype.hasAllowance = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TimeStamp expires_at = 2;
 * @return {?proto.ic_ledger.pb.v1.TimeStamp}
 */
proto.ic_ledger.pb.v1.Approve.prototype.getExpiresAt = function() {
  return /** @type{?proto.ic_ledger.pb.v1.TimeStamp} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.TimeStamp, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.TimeStamp|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Approve} returns this
*/
proto.ic_ledger.pb.v1.Approve.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Approve} returns this
 */
proto.ic_ledger.pb.v1.Approve.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Approve.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Tokens expected_allowance = 3;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Approve.prototype.getExpectedAllowance = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Approve} returns this
*/
proto.ic_ledger.pb.v1.Approve.prototype.setExpectedAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Approve} returns this
 */
proto.ic_ledger.pb.v1.Approve.prototype.clearExpectedAllowance = function() {
  return this.setExpectedAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Approve.prototype.hasExpectedAllowance = function() {
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
proto.ic_ledger.pb.v1.Mint.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Mint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Mint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Mint.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: (f = msg.getTo()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Mint}
 */
proto.ic_ledger.pb.v1.Mint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Mint;
  return proto.ic_ledger.pb.v1.Mint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Mint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Mint}
 */
proto.ic_ledger.pb.v1.Mint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setAmount(value);
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
proto.ic_ledger.pb.v1.Mint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Mint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Mint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Mint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountIdentifier to = 2;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.Mint.prototype.getTo = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 2));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Mint} returns this
*/
proto.ic_ledger.pb.v1.Mint.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Mint} returns this
 */
proto.ic_ledger.pb.v1.Mint.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Mint.prototype.hasTo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Tokens amount = 3;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Mint.prototype.getAmount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Mint} returns this
*/
proto.ic_ledger.pb.v1.Mint.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Mint} returns this
 */
proto.ic_ledger.pb.v1.Mint.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Mint.prototype.hasAmount = function() {
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
proto.ic_ledger.pb.v1.Burn.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Burn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Burn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Burn.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: (f = msg.getFrom()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f),
    spender: (f = msg.getSpender()) && proto.ic_ledger.pb.v1.AccountIdentifier.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.Burn}
 */
proto.ic_ledger.pb.v1.Burn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Burn;
  return proto.ic_ledger.pb.v1.Burn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Burn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Burn}
 */
proto.ic_ledger.pb.v1.Burn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 4:
      var value = new proto.ic_ledger.pb.v1.AccountIdentifier;
      reader.readMessage(value,proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader);
      msg.setSpender(value);
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
proto.ic_ledger.pb.v1.Burn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Burn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Burn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Burn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
  f = message.getSpender();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountIdentifier from = 1;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.Burn.prototype.getFrom = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Burn} returns this
*/
proto.ic_ledger.pb.v1.Burn.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Burn} returns this
 */
proto.ic_ledger.pb.v1.Burn.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Burn.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Tokens amount = 3;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.Burn.prototype.getAmount = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 3));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Burn} returns this
*/
proto.ic_ledger.pb.v1.Burn.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Burn} returns this
 */
proto.ic_ledger.pb.v1.Burn.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Burn.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AccountIdentifier spender = 4;
 * @return {?proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.Burn.prototype.getSpender = function() {
  return /** @type{?proto.ic_ledger.pb.v1.AccountIdentifier} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.AccountIdentifier, 4));
};


/**
 * @param {?proto.ic_ledger.pb.v1.AccountIdentifier|undefined} value
 * @return {!proto.ic_ledger.pb.v1.Burn} returns this
*/
proto.ic_ledger.pb.v1.Burn.prototype.setSpender = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.Burn} returns this
 */
proto.ic_ledger.pb.v1.Burn.prototype.clearSpender = function() {
  return this.setSpender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.Burn.prototype.hasSpender = function() {
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
proto.ic_ledger.pb.v1.AccountIdentifier.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.AccountIdentifier.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.AccountIdentifier} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.AccountIdentifier.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: msg.getHash_asB64()
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
 * @return {!proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.AccountIdentifier;
  return proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.AccountIdentifier} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.AccountIdentifier}
 */
proto.ic_ledger.pb.v1.AccountIdentifier.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
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
proto.ic_ledger.pb.v1.AccountIdentifier.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.AccountIdentifier} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.AccountIdentifier.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_ledger.pb.v1.AccountIdentifier.prototype.getHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hash = 1;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.ic_ledger.pb.v1.AccountIdentifier.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.ic_ledger.pb.v1.AccountIdentifier.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_ledger.pb.v1.AccountIdentifier} returns this
 */
proto.ic_ledger.pb.v1.AccountIdentifier.prototype.setHash = function(value) {
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
proto.ic_ledger.pb.v1.Subaccount.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Subaccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Subaccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Subaccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    subAccount: msg.getSubAccount_asB64()
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
 * @return {!proto.ic_ledger.pb.v1.Subaccount}
 */
proto.ic_ledger.pb.v1.Subaccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Subaccount;
  return proto.ic_ledger.pb.v1.Subaccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Subaccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Subaccount}
 */
proto.ic_ledger.pb.v1.Subaccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSubAccount(value);
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
proto.ic_ledger.pb.v1.Subaccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Subaccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Subaccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Subaccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubAccount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes sub_account = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_ledger.pb.v1.Subaccount.prototype.getSubAccount = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes sub_account = 1;
 * This is a type-conversion wrapper around `getSubAccount()`
 * @return {string}
 */
proto.ic_ledger.pb.v1.Subaccount.prototype.getSubAccount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSubAccount()));
};


/**
 * optional bytes sub_account = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSubAccount()`
 * @return {!Uint8Array}
 */
proto.ic_ledger.pb.v1.Subaccount.prototype.getSubAccount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSubAccount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_ledger.pb.v1.Subaccount} returns this
 */
proto.ic_ledger.pb.v1.Subaccount.prototype.setSubAccount = function(value) {
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
proto.ic_ledger.pb.v1.Memo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Memo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Memo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Memo.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ic_ledger.pb.v1.Memo}
 */
proto.ic_ledger.pb.v1.Memo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Memo;
  return proto.ic_ledger.pb.v1.Memo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Memo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Memo}
 */
proto.ic_ledger.pb.v1.Memo.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.Memo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Memo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Memo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Memo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemo();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 memo = 1;
 * @return {number}
 */
proto.ic_ledger.pb.v1.Memo.prototype.getMemo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.Memo} returns this
 */
proto.ic_ledger.pb.v1.Memo.prototype.setMemo = function(value) {
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
proto.ic_ledger.pb.v1.Icrc1Memo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Icrc1Memo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Icrc1Memo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Icrc1Memo.toObject = function(includeInstance, msg) {
  var f, obj = {
    memo: msg.getMemo_asB64()
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
 * @return {!proto.ic_ledger.pb.v1.Icrc1Memo}
 */
proto.ic_ledger.pb.v1.Icrc1Memo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Icrc1Memo;
  return proto.ic_ledger.pb.v1.Icrc1Memo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Icrc1Memo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Icrc1Memo}
 */
proto.ic_ledger.pb.v1.Icrc1Memo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
proto.ic_ledger.pb.v1.Icrc1Memo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Icrc1Memo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Icrc1Memo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Icrc1Memo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemo_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes memo = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_ledger.pb.v1.Icrc1Memo.prototype.getMemo = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes memo = 1;
 * This is a type-conversion wrapper around `getMemo()`
 * @return {string}
 */
proto.ic_ledger.pb.v1.Icrc1Memo.prototype.getMemo_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMemo()));
};


/**
 * optional bytes memo = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMemo()`
 * @return {!Uint8Array}
 */
proto.ic_ledger.pb.v1.Icrc1Memo.prototype.getMemo_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMemo()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_ledger.pb.v1.Icrc1Memo} returns this
 */
proto.ic_ledger.pb.v1.Icrc1Memo.prototype.setMemo = function(value) {
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
proto.ic_ledger.pb.v1.TimeStamp.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TimeStamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TimeStamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TimeStamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampNanos: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ic_ledger.pb.v1.TimeStamp}
 */
proto.ic_ledger.pb.v1.TimeStamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TimeStamp;
  return proto.ic_ledger.pb.v1.TimeStamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TimeStamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TimeStamp}
 */
proto.ic_ledger.pb.v1.TimeStamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampNanos(value);
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
proto.ic_ledger.pb.v1.TimeStamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TimeStamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TimeStamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TimeStamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampNanos();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 timestamp_nanos = 1;
 * @return {number}
 */
proto.ic_ledger.pb.v1.TimeStamp.prototype.getTimestampNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ic_ledger.pb.v1.TimeStamp} returns this
 */
proto.ic_ledger.pb.v1.TimeStamp.prototype.setTimestampNanos = function(value) {
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
proto.ic_ledger.pb.v1.Certification.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.Certification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.Certification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Certification.toObject = function(includeInstance, msg) {
  var f, obj = {
    certification: msg.getCertification_asB64()
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
 * @return {!proto.ic_ledger.pb.v1.Certification}
 */
proto.ic_ledger.pb.v1.Certification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.Certification;
  return proto.ic_ledger.pb.v1.Certification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.Certification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.Certification}
 */
proto.ic_ledger.pb.v1.Certification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCertification(value);
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
proto.ic_ledger.pb.v1.Certification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.Certification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.Certification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.Certification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCertification_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes certification = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_ledger.pb.v1.Certification.prototype.getCertification = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes certification = 1;
 * This is a type-conversion wrapper around `getCertification()`
 * @return {string}
 */
proto.ic_ledger.pb.v1.Certification.prototype.getCertification_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCertification()));
};


/**
 * optional bytes certification = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCertification()`
 * @return {!Uint8Array}
 */
proto.ic_ledger.pb.v1.Certification.prototype.getCertification_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCertification()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_ledger.pb.v1.Certification} returns this
 */
proto.ic_ledger.pb.v1.Certification.prototype.setCertification = function(value) {
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
proto.ic_ledger.pb.v1.TransferFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TransferFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TransferFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransferFeeRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ic_ledger.pb.v1.TransferFeeRequest}
 */
proto.ic_ledger.pb.v1.TransferFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TransferFeeRequest;
  return proto.ic_ledger.pb.v1.TransferFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TransferFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TransferFeeRequest}
 */
proto.ic_ledger.pb.v1.TransferFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ic_ledger.pb.v1.TransferFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TransferFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TransferFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransferFeeRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.ic_ledger.pb.v1.TransferFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_ledger.pb.v1.TransferFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_ledger.pb.v1.TransferFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransferFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transferFee: (f = msg.getTransferFee()) && proto.ic_ledger.pb.v1.Tokens.toObject(includeInstance, f)
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
 * @return {!proto.ic_ledger.pb.v1.TransferFeeResponse}
 */
proto.ic_ledger.pb.v1.TransferFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_ledger.pb.v1.TransferFeeResponse;
  return proto.ic_ledger.pb.v1.TransferFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_ledger.pb.v1.TransferFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_ledger.pb.v1.TransferFeeResponse}
 */
proto.ic_ledger.pb.v1.TransferFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_ledger.pb.v1.Tokens;
      reader.readMessage(value,proto.ic_ledger.pb.v1.Tokens.deserializeBinaryFromReader);
      msg.setTransferFee(value);
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
proto.ic_ledger.pb.v1.TransferFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_ledger.pb.v1.TransferFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_ledger.pb.v1.TransferFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_ledger.pb.v1.TransferFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransferFee();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ic_ledger.pb.v1.Tokens.serializeBinaryToWriter
    );
  }
};


/**
 * optional Tokens transfer_fee = 1;
 * @return {?proto.ic_ledger.pb.v1.Tokens}
 */
proto.ic_ledger.pb.v1.TransferFeeResponse.prototype.getTransferFee = function() {
  return /** @type{?proto.ic_ledger.pb.v1.Tokens} */ (
    jspb.Message.getWrapperField(this, proto.ic_ledger.pb.v1.Tokens, 1));
};


/**
 * @param {?proto.ic_ledger.pb.v1.Tokens|undefined} value
 * @return {!proto.ic_ledger.pb.v1.TransferFeeResponse} returns this
*/
proto.ic_ledger.pb.v1.TransferFeeResponse.prototype.setTransferFee = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ic_ledger.pb.v1.TransferFeeResponse} returns this
 */
proto.ic_ledger.pb.v1.TransferFeeResponse.prototype.clearTransferFee = function() {
  return this.setTransferFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ic_ledger.pb.v1.TransferFeeResponse.prototype.hasTransferFee = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.ic_ledger.pb.v1);
