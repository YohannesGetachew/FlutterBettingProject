// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:BettingFerryClient/graphql/serializers.gql.dart' as _i6;
import 'package:BettingFerryClient/graphql/sport.ast.gql.dart' as _i5;
import 'package:BettingFerryClient/graphql/sport.data.gql.dart' as _i2;
import 'package:BettingFerryClient/graphql/sport.var.gql.dart' as _i3;
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';
import 'package:ferry_exec/ferry_exec.dart' as _i1;
import 'package:gql_exec/gql_exec.dart' as _i4;

part 'sport.req.gql.g.dart';

abstract class GFetchSportsReq
    implements
        Built<GFetchSportsReq, GFetchSportsReqBuilder>,
        _i1.OperationRequest<_i2.GFetchSportsData, _i3.GFetchSportsVars> {
  GFetchSportsReq._();

  factory GFetchSportsReq([Function(GFetchSportsReqBuilder b) updates]) =
      _$GFetchSportsReq;

  static void _initializeBuilder(GFetchSportsReqBuilder b) => b
    ..operation =
        _i4.Operation(document: _i5.document, operationName: 'FetchSports')
    ..executeOnListen = true;
  _i3.GFetchSportsVars get vars;
  _i4.Operation get operation;
  _i4.Request get execRequest =>
      _i4.Request(operation: operation, variables: vars.toJson());
  @nullable
  String get requestId;
  @nullable
  @BuiltValueField(serialize: false)
  _i2.GFetchSportsData Function(_i2.GFetchSportsData, _i2.GFetchSportsData)
      get updateResult;
  @nullable
  _i2.GFetchSportsData get optimisticResponse;
  @nullable
  String get updateCacheHandlerKey;
  @nullable
  Map<String, dynamic> get updateCacheHandlerContext;
  @nullable
  _i1.FetchPolicy get fetchPolicy;
  @nullable
  bool get executeOnListen;
  @override
  _i2.GFetchSportsData parseData(Map<String, dynamic> json) =>
      _i2.GFetchSportsData.fromJson(json);
  static Serializer<GFetchSportsReq> get serializer =>
      _$gFetchSportsReqSerializer;
  Map<String, dynamic> toJson() =>
      _i6.serializers.serializeWith(GFetchSportsReq.serializer, this);
  static GFetchSportsReq fromJson(Map<String, dynamic> json) =>
      _i6.serializers.deserializeWith(GFetchSportsReq.serializer, json);
}
