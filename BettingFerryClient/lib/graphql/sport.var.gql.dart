// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:BettingFerryClient/graphql/serializers.gql.dart' as _i1;
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'sport.var.gql.g.dart';

abstract class GFetchSportsVars
    implements Built<GFetchSportsVars, GFetchSportsVarsBuilder> {
  GFetchSportsVars._();

  factory GFetchSportsVars([Function(GFetchSportsVarsBuilder b) updates]) =
      _$GFetchSportsVars;

  static Serializer<GFetchSportsVars> get serializer =>
      _$gFetchSportsVarsSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GFetchSportsVars.serializer, this);
  static GFetchSportsVars fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GFetchSportsVars.serializer, json);
}
