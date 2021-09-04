// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:BettingFerryClient/graphql/serializers.gql.dart' as _i6;
import 'package:BettingFerryClient/graphql/users.ast.gql.dart' as _i5;
import 'package:BettingFerryClient/graphql/users.data.gql.dart' as _i2;
import 'package:BettingFerryClient/graphql/users.var.gql.dart' as _i3;
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';
import 'package:ferry_exec/ferry_exec.dart' as _i1;
import 'package:gql_exec/gql_exec.dart' as _i4;

part 'users.req.gql.g.dart';

abstract class GFetchUsersReq
    implements
        Built<GFetchUsersReq, GFetchUsersReqBuilder>,
        _i1.OperationRequest<_i2.GFetchUsersData, _i3.GFetchUsersVars> {
  GFetchUsersReq._();

  factory GFetchUsersReq([Function(GFetchUsersReqBuilder b) updates]) =
      _$GFetchUsersReq;

  static void _initializeBuilder(GFetchUsersReqBuilder b) => b
    ..operation =
        _i4.Operation(document: _i5.document, operationName: 'FetchUsers')
    ..executeOnListen = true;
  _i3.GFetchUsersVars get vars;
  _i4.Operation get operation;
  _i4.Request get execRequest =>
      _i4.Request(operation: operation, variables: vars.toJson());
  @nullable
  String get requestId;
  @nullable
  @BuiltValueField(serialize: false)
  _i2.GFetchUsersData Function(_i2.GFetchUsersData, _i2.GFetchUsersData)
      get updateResult;
  @nullable
  _i2.GFetchUsersData get optimisticResponse;
  @nullable
  String get updateCacheHandlerKey;
  @nullable
  Map<String, dynamic> get updateCacheHandlerContext;
  @nullable
  _i1.FetchPolicy get fetchPolicy;
  @nullable
  bool get executeOnListen;
  @override
  _i2.GFetchUsersData parseData(Map<String, dynamic> json) =>
      _i2.GFetchUsersData.fromJson(json);
  static Serializer<GFetchUsersReq> get serializer =>
      _$gFetchUsersReqSerializer;
  Map<String, dynamic> toJson() =>
      _i6.serializers.serializeWith(GFetchUsersReq.serializer, this);
  static GFetchUsersReq fromJson(Map<String, dynamic> json) =>
      _i6.serializers.deserializeWith(GFetchUsersReq.serializer, json);
}
