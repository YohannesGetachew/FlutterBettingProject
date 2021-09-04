// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:BettingFerryClient/graphql/schema.schema.gql.dart' as _i2;
import 'package:BettingFerryClient/graphql/serializers.gql.dart' as _i1;
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'users.data.gql.g.dart';

abstract class GFetchUsersData
    implements Built<GFetchUsersData, GFetchUsersDataBuilder> {
  GFetchUsersData._();

  factory GFetchUsersData([Function(GFetchUsersDataBuilder b) updates]) =
      _$GFetchUsersData;

  static void _initializeBuilder(GFetchUsersDataBuilder b) =>
      b..G__typename = 'Query';
  @BuiltValueField(wireName: '__typename')
  String get G__typename;
  BuiltList<GFetchUsersData_users> get users;
  static Serializer<GFetchUsersData> get serializer =>
      _$gFetchUsersDataSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GFetchUsersData.serializer, this);
  static GFetchUsersData fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GFetchUsersData.serializer, json);
}

abstract class GFetchUsersData_users
    implements Built<GFetchUsersData_users, GFetchUsersData_usersBuilder> {
  GFetchUsersData_users._();

  factory GFetchUsersData_users(
          [Function(GFetchUsersData_usersBuilder b) updates]) =
      _$GFetchUsersData_users;

  static void _initializeBuilder(GFetchUsersData_usersBuilder b) =>
      b..G__typename = 'User';
  @BuiltValueField(wireName: '__typename')
  String get G__typename;
  @nullable
  @BuiltValueField(wireName: '_id')
  String get G_id;
  String get firstName;
  String get lastName;
  String get username;
  bool get isVerified;
  bool get isActive;
  _i2.GRole get role;
  double get accountBalance;
  String get profileImage;
  @nullable
  String get createdAt;
  @nullable
  String get belongsToShop;
  BuiltList<_i2.GCashierPermission> get cashierPermissions;
  static Serializer<GFetchUsersData_users> get serializer =>
      _$gFetchUsersDataUsersSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GFetchUsersData_users.serializer, this);
  static GFetchUsersData_users fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GFetchUsersData_users.serializer, json);
}
