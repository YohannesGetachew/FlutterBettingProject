// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:BettingFerryClient/graphql/schema.schema.gql.dart' as _i1;
import 'package:BettingFerryClient/graphql/serializers.gql.dart' as _i2;
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'users.var.gql.g.dart';

abstract class GFetchUsersVars
    implements Built<GFetchUsersVars, GFetchUsersVarsBuilder> {
  GFetchUsersVars._();

  factory GFetchUsersVars([Function(GFetchUsersVarsBuilder b) updates]) =
      _$GFetchUsersVars;

  @nullable
  String get firstName;
  @nullable
  String get lastName;
  @nullable
  String get username;
  @nullable
  _i1.GRole get role;
  static Serializer<GFetchUsersVars> get serializer =>
      _$gFetchUsersVarsSerializer;
  Map<String, dynamic> toJson() =>
      _i2.serializers.serializeWith(GFetchUsersVars.serializer, this);
  static GFetchUsersVars fromJson(Map<String, dynamic> json) =>
      _i2.serializers.deserializeWith(GFetchUsersVars.serializer, json);
}
