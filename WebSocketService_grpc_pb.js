// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var WebSocketService_pb = require('./WebSocketService_pb.js');

function serialize_com_yue_ws_service_GetUriRequest(arg) {
  if (!(arg instanceof WebSocketService_pb.GetUriRequest)) {
    throw new Error('Expected argument of type com.yue.ws.service.GetUriRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_GetUriRequest(buffer_arg) {
  return WebSocketService_pb.GetUriRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_service_GetUriResponse(arg) {
  if (!(arg instanceof WebSocketService_pb.GetUriResponse)) {
    throw new Error('Expected argument of type com.yue.ws.service.GetUriResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_GetUriResponse(buffer_arg) {
  return WebSocketService_pb.GetUriResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_service_broadcastRequest(arg) {
  if (!(arg instanceof WebSocketService_pb.broadcastRequest)) {
    throw new Error('Expected argument of type com.yue.ws.service.broadcastRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_broadcastRequest(buffer_arg) {
  return WebSocketService_pb.broadcastRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_service_broadcastResponse(arg) {
  if (!(arg instanceof WebSocketService_pb.broadcastResponse)) {
    throw new Error('Expected argument of type com.yue.ws.service.broadcastResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_broadcastResponse(buffer_arg) {
  return WebSocketService_pb.broadcastResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_service_checkExistRequest(arg) {
  if (!(arg instanceof WebSocketService_pb.checkExistRequest)) {
    throw new Error('Expected argument of type com.yue.ws.service.checkExistRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_checkExistRequest(buffer_arg) {
  return WebSocketService_pb.checkExistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_service_checkExistResponse(arg) {
  if (!(arg instanceof WebSocketService_pb.checkExistResponse)) {
    throw new Error('Expected argument of type com.yue.ws.service.checkExistResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_checkExistResponse(buffer_arg) {
  return WebSocketService_pb.checkExistResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_service_sendMsgRequest(arg) {
  if (!(arg instanceof WebSocketService_pb.sendMsgRequest)) {
    throw new Error('Expected argument of type com.yue.ws.service.sendMsgRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_sendMsgRequest(buffer_arg) {
  return WebSocketService_pb.sendMsgRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_yue_ws_service_sendMsgResponse(arg) {
  if (!(arg instanceof WebSocketService_pb.sendMsgResponse)) {
    throw new Error('Expected argument of type com.yue.ws.service.sendMsgResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_yue_ws_service_sendMsgResponse(buffer_arg) {
  return WebSocketService_pb.sendMsgResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WebSocketServiceService = exports.WebSocketServiceService = {
  getUriByUserId: {
    path: '/com.yue.ws.service.WebSocketService/getUriByUserId',
    requestStream: false,
    responseStream: false,
    requestType: WebSocketService_pb.GetUriRequest,
    responseType: WebSocketService_pb.GetUriResponse,
    requestSerialize: serialize_com_yue_ws_service_GetUriRequest,
    requestDeserialize: deserialize_com_yue_ws_service_GetUriRequest,
    responseSerialize: serialize_com_yue_ws_service_GetUriResponse,
    responseDeserialize: deserialize_com_yue_ws_service_GetUriResponse,
  },
  sendMsg: {
    path: '/com.yue.ws.service.WebSocketService/sendMsg',
    requestStream: false,
    responseStream: false,
    requestType: WebSocketService_pb.sendMsgRequest,
    responseType: WebSocketService_pb.sendMsgResponse,
    requestSerialize: serialize_com_yue_ws_service_sendMsgRequest,
    requestDeserialize: deserialize_com_yue_ws_service_sendMsgRequest,
    responseSerialize: serialize_com_yue_ws_service_sendMsgResponse,
    responseDeserialize: deserialize_com_yue_ws_service_sendMsgResponse,
  },
  broadcast: {
    path: '/com.yue.ws.service.WebSocketService/broadcast',
    requestStream: false,
    responseStream: false,
    requestType: WebSocketService_pb.broadcastRequest,
    responseType: WebSocketService_pb.broadcastResponse,
    requestSerialize: serialize_com_yue_ws_service_broadcastRequest,
    requestDeserialize: deserialize_com_yue_ws_service_broadcastRequest,
    responseSerialize: serialize_com_yue_ws_service_broadcastResponse,
    responseDeserialize: deserialize_com_yue_ws_service_broadcastResponse,
  },
  checkExist: {
    path: '/com.yue.ws.service.WebSocketService/checkExist',
    requestStream: false,
    responseStream: false,
    requestType: WebSocketService_pb.checkExistRequest,
    responseType: WebSocketService_pb.checkExistResponse,
    requestSerialize: serialize_com_yue_ws_service_checkExistRequest,
    requestDeserialize: deserialize_com_yue_ws_service_checkExistRequest,
    responseSerialize: serialize_com_yue_ws_service_checkExistResponse,
    responseDeserialize: deserialize_com_yue_ws_service_checkExistResponse,
  },
};

exports.WebSocketServiceClient = grpc.makeGenericClientConstructor(WebSocketServiceService);
