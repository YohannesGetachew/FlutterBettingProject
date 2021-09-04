// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'users.var.gql.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

Serializer<GFetchUsersVars> _$gFetchUsersVarsSerializer =
    new _$GFetchUsersVarsSerializer();

class _$GFetchUsersVarsSerializer
    implements StructuredSerializer<GFetchUsersVars> {
  @override
  final Iterable<Type> types = const [GFetchUsersVars, _$GFetchUsersVars];
  @override
  final String wireName = 'GFetchUsersVars';

  @override
  Iterable<Object> serialize(Serializers serializers, GFetchUsersVars object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[];
    if (object.firstName != null) {
      result
        ..add('firstName')
        ..add(serializers.serialize(object.firstName,
            specifiedType: const FullType(String)));
    }
    if (object.lastName != null) {
      result
        ..add('lastName')
        ..add(serializers.serialize(object.lastName,
            specifiedType: const FullType(String)));
    }
    if (object.username != null) {
      result
        ..add('username')
        ..add(serializers.serialize(object.username,
            specifiedType: const FullType(String)));
    }
    if (object.role != null) {
      result
        ..add('role')
        ..add(serializers.serialize(object.role,
            specifiedType: const FullType(_i1.GRole)));
    }
    return result;
  }

  @override
  GFetchUsersVars deserialize(
      Serializers serializers, Iterable<Object> serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new GFetchUsersVarsBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case 'firstName':
          result.firstName = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'lastName':
          result.lastName = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'username':
          result.username = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'role':
          result.role = serializers.deserialize(value,
              specifiedType: const FullType(_i1.GRole)) as _i1.GRole;
          break;
      }
    }

    return result.build();
  }
}

class _$GFetchUsersVars extends GFetchUsersVars {
  @override
  final String firstName;
  @override
  final String lastName;
  @override
  final String username;
  @override
  final _i1.GRole role;

  factory _$GFetchUsersVars([void Function(GFetchUsersVarsBuilder) updates]) =>
      (new GFetchUsersVarsBuilder()..update(updates)).build();

  _$GFetchUsersVars._({this.firstName, this.lastName, this.username, this.role})
      : super._();

  @override
  GFetchUsersVars rebuild(void Function(GFetchUsersVarsBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GFetchUsersVarsBuilder toBuilder() =>
      new GFetchUsersVarsBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GFetchUsersVars &&
        firstName == other.firstName &&
        lastName == other.lastName &&
        username == other.username &&
        role == other.role;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc($jc($jc(0, firstName.hashCode), lastName.hashCode),
            username.hashCode),
        role.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('GFetchUsersVars')
          ..add('firstName', firstName)
          ..add('lastName', lastName)
          ..add('username', username)
          ..add('role', role))
        .toString();
  }
}

class GFetchUsersVarsBuilder
    implements Builder<GFetchUsersVars, GFetchUsersVarsBuilder> {
  _$GFetchUsersVars _$v;

  String _firstName;
  String get firstName => _$this._firstName;
  set firstName(String firstName) => _$this._firstName = firstName;

  String _lastName;
  String get lastName => _$this._lastName;
  set lastName(String lastName) => _$this._lastName = lastName;

  String _username;
  String get username => _$this._username;
  set username(String username) => _$this._username = username;

  _i1.GRole _role;
  _i1.GRole get role => _$this._role;
  set role(_i1.GRole role) => _$this._role = role;

  GFetchUsersVarsBuilder();

  GFetchUsersVarsBuilder get _$this {
    if (_$v != null) {
      _firstName = _$v.firstName;
      _lastName = _$v.lastName;
      _username = _$v.username;
      _role = _$v.role;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GFetchUsersVars other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$GFetchUsersVars;
  }

  @override
  void update(void Function(GFetchUsersVarsBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$GFetchUsersVars build() {
    final _$result = _$v ??
        new _$GFetchUsersVars._(
            firstName: firstName,
            lastName: lastName,
            username: username,
            role: role);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,always_specify_types,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
