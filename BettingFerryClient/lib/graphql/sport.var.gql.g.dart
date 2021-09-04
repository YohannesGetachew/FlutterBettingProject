// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sport.var.gql.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

Serializer<GFetchSportsVars> _$gFetchSportsVarsSerializer =
    new _$GFetchSportsVarsSerializer();

class _$GFetchSportsVarsSerializer
    implements StructuredSerializer<GFetchSportsVars> {
  @override
  final Iterable<Type> types = const [GFetchSportsVars, _$GFetchSportsVars];
  @override
  final String wireName = 'GFetchSportsVars';

  @override
  Iterable<Object> serialize(Serializers serializers, GFetchSportsVars object,
      {FullType specifiedType = FullType.unspecified}) {
    return <Object>[];
  }

  @override
  GFetchSportsVars deserialize(
      Serializers serializers, Iterable<Object> serialized,
      {FullType specifiedType = FullType.unspecified}) {
    return new GFetchSportsVarsBuilder().build();
  }
}

class _$GFetchSportsVars extends GFetchSportsVars {
  factory _$GFetchSportsVars(
          [void Function(GFetchSportsVarsBuilder) updates]) =>
      (new GFetchSportsVarsBuilder()..update(updates)).build();

  _$GFetchSportsVars._() : super._();

  @override
  GFetchSportsVars rebuild(void Function(GFetchSportsVarsBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GFetchSportsVarsBuilder toBuilder() =>
      new GFetchSportsVarsBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GFetchSportsVars;
  }

  @override
  int get hashCode {
    return 402571873;
  }

  @override
  String toString() {
    return newBuiltValueToStringHelper('GFetchSportsVars').toString();
  }
}

class GFetchSportsVarsBuilder
    implements Builder<GFetchSportsVars, GFetchSportsVarsBuilder> {
  _$GFetchSportsVars _$v;

  GFetchSportsVarsBuilder();

  @override
  void replace(GFetchSportsVars other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$GFetchSportsVars;
  }

  @override
  void update(void Function(GFetchSportsVarsBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$GFetchSportsVars build() {
    final _$result = _$v ?? new _$GFetchSportsVars._();
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,always_specify_types,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
