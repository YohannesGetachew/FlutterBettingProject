// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:BettingFerryClient/graphql/serializers.gql.dart' as _i1;
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'sport.data.gql.g.dart';

abstract class GFetchSportsData
    implements Built<GFetchSportsData, GFetchSportsDataBuilder> {
  GFetchSportsData._();

  factory GFetchSportsData([Function(GFetchSportsDataBuilder b) updates]) =
      _$GFetchSportsData;

  static void _initializeBuilder(GFetchSportsDataBuilder b) =>
      b..G__typename = 'Query';
  @BuiltValueField(wireName: '__typename')
  String get G__typename;
  BuiltList<GFetchSportsData_sports> get sports;
  static Serializer<GFetchSportsData> get serializer =>
      _$gFetchSportsDataSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GFetchSportsData.serializer, this);
  static GFetchSportsData fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GFetchSportsData.serializer, json);
}

abstract class GFetchSportsData_sports
    implements Built<GFetchSportsData_sports, GFetchSportsData_sportsBuilder> {
  GFetchSportsData_sports._();

  factory GFetchSportsData_sports(
          [Function(GFetchSportsData_sportsBuilder b) updates]) =
      _$GFetchSportsData_sports;

  static void _initializeBuilder(GFetchSportsData_sportsBuilder b) =>
      b..G__typename = 'Sport';
  @BuiltValueField(wireName: '__typename')
  String get G__typename;
  @BuiltValueField(wireName: '_id')
  String get G_id;
  @nullable
  String get id;
  String get name;
  @nullable
  double get order;
  static Serializer<GFetchSportsData_sports> get serializer =>
      _$gFetchSportsDataSportsSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GFetchSportsData_sports.serializer, this);
  static GFetchSportsData_sports fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GFetchSportsData_sports.serializer, json);
}
