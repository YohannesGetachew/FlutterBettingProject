// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sport.data.gql.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

Serializer<GFetchSportsData> _$gFetchSportsDataSerializer =
    new _$GFetchSportsDataSerializer();
Serializer<GFetchSportsData_sports> _$gFetchSportsDataSportsSerializer =
    new _$GFetchSportsData_sportsSerializer();

class _$GFetchSportsDataSerializer
    implements StructuredSerializer<GFetchSportsData> {
  @override
  final Iterable<Type> types = const [GFetchSportsData, _$GFetchSportsData];
  @override
  final String wireName = 'GFetchSportsData';

  @override
  Iterable<Object> serialize(Serializers serializers, GFetchSportsData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      '__typename',
      serializers.serialize(object.G__typename,
          specifiedType: const FullType(String)),
      'sports',
      serializers.serialize(object.sports,
          specifiedType: const FullType(
              BuiltList, const [const FullType(GFetchSportsData_sports)])),
    ];

    return result;
  }

  @override
  GFetchSportsData deserialize(
      Serializers serializers, Iterable<Object> serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new GFetchSportsDataBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case '__typename':
          result.G__typename = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'sports':
          result.sports.replace(serializers.deserialize(value,
              specifiedType: const FullType(BuiltList, const [
                const FullType(GFetchSportsData_sports)
              ])) as BuiltList<Object>);
          break;
      }
    }

    return result.build();
  }
}

class _$GFetchSportsData_sportsSerializer
    implements StructuredSerializer<GFetchSportsData_sports> {
  @override
  final Iterable<Type> types = const [
    GFetchSportsData_sports,
    _$GFetchSportsData_sports
  ];
  @override
  final String wireName = 'GFetchSportsData_sports';

  @override
  Iterable<Object> serialize(
      Serializers serializers, GFetchSportsData_sports object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      '__typename',
      serializers.serialize(object.G__typename,
          specifiedType: const FullType(String)),
      '_id',
      serializers.serialize(object.G_id, specifiedType: const FullType(String)),
      'name',
      serializers.serialize(object.name, specifiedType: const FullType(String)),
    ];
    if (object.id != null) {
      result
        ..add('id')
        ..add(serializers.serialize(object.id,
            specifiedType: const FullType(String)));
    }
    if (object.order != null) {
      result
        ..add('order')
        ..add(serializers.serialize(object.order,
            specifiedType: const FullType(double)));
    }
    return result;
  }

  @override
  GFetchSportsData_sports deserialize(
      Serializers serializers, Iterable<Object> serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new GFetchSportsData_sportsBuilder();

    final iterator = serialized.iterator;
    while (iterator.moveNext()) {
      final key = iterator.current as String;
      iterator.moveNext();
      final dynamic value = iterator.current;
      switch (key) {
        case '__typename':
          result.G__typename = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case '_id':
          result.G_id = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'id':
          result.id = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'name':
          result.name = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'order':
          result.order = serializers.deserialize(value,
              specifiedType: const FullType(double)) as double;
          break;
      }
    }

    return result.build();
  }
}

class _$GFetchSportsData extends GFetchSportsData {
  @override
  final String G__typename;
  @override
  final BuiltList<GFetchSportsData_sports> sports;

  factory _$GFetchSportsData(
          [void Function(GFetchSportsDataBuilder) updates]) =>
      (new GFetchSportsDataBuilder()..update(updates)).build();

  _$GFetchSportsData._({this.G__typename, this.sports}) : super._() {
    if (G__typename == null) {
      throw new BuiltValueNullFieldError('GFetchSportsData', 'G__typename');
    }
    if (sports == null) {
      throw new BuiltValueNullFieldError('GFetchSportsData', 'sports');
    }
  }

  @override
  GFetchSportsData rebuild(void Function(GFetchSportsDataBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GFetchSportsDataBuilder toBuilder() =>
      new GFetchSportsDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GFetchSportsData &&
        G__typename == other.G__typename &&
        sports == other.sports;
  }

  @override
  int get hashCode {
    return $jf($jc($jc(0, G__typename.hashCode), sports.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('GFetchSportsData')
          ..add('G__typename', G__typename)
          ..add('sports', sports))
        .toString();
  }
}

class GFetchSportsDataBuilder
    implements Builder<GFetchSportsData, GFetchSportsDataBuilder> {
  _$GFetchSportsData _$v;

  String _G__typename;
  String get G__typename => _$this._G__typename;
  set G__typename(String G__typename) => _$this._G__typename = G__typename;

  ListBuilder<GFetchSportsData_sports> _sports;
  ListBuilder<GFetchSportsData_sports> get sports =>
      _$this._sports ??= new ListBuilder<GFetchSportsData_sports>();
  set sports(ListBuilder<GFetchSportsData_sports> sports) =>
      _$this._sports = sports;

  GFetchSportsDataBuilder() {
    GFetchSportsData._initializeBuilder(this);
  }

  GFetchSportsDataBuilder get _$this {
    if (_$v != null) {
      _G__typename = _$v.G__typename;
      _sports = _$v.sports?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GFetchSportsData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$GFetchSportsData;
  }

  @override
  void update(void Function(GFetchSportsDataBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$GFetchSportsData build() {
    _$GFetchSportsData _$result;
    try {
      _$result = _$v ??
          new _$GFetchSportsData._(
              G__typename: G__typename, sports: sports.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'sports';
        sports.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'GFetchSportsData', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$GFetchSportsData_sports extends GFetchSportsData_sports {
  @override
  final String G__typename;
  @override
  final String G_id;
  @override
  final String id;
  @override
  final String name;
  @override
  final double order;

  factory _$GFetchSportsData_sports(
          [void Function(GFetchSportsData_sportsBuilder) updates]) =>
      (new GFetchSportsData_sportsBuilder()..update(updates)).build();

  _$GFetchSportsData_sports._(
      {this.G__typename, this.G_id, this.id, this.name, this.order})
      : super._() {
    if (G__typename == null) {
      throw new BuiltValueNullFieldError(
          'GFetchSportsData_sports', 'G__typename');
    }
    if (G_id == null) {
      throw new BuiltValueNullFieldError('GFetchSportsData_sports', 'G_id');
    }
    if (name == null) {
      throw new BuiltValueNullFieldError('GFetchSportsData_sports', 'name');
    }
  }

  @override
  GFetchSportsData_sports rebuild(
          void Function(GFetchSportsData_sportsBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GFetchSportsData_sportsBuilder toBuilder() =>
      new GFetchSportsData_sportsBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GFetchSportsData_sports &&
        G__typename == other.G__typename &&
        G_id == other.G_id &&
        id == other.id &&
        name == other.name &&
        order == other.order;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc($jc($jc($jc(0, G__typename.hashCode), G_id.hashCode), id.hashCode),
            name.hashCode),
        order.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('GFetchSportsData_sports')
          ..add('G__typename', G__typename)
          ..add('G_id', G_id)
          ..add('id', id)
          ..add('name', name)
          ..add('order', order))
        .toString();
  }
}

class GFetchSportsData_sportsBuilder
    implements
        Builder<GFetchSportsData_sports, GFetchSportsData_sportsBuilder> {
  _$GFetchSportsData_sports _$v;

  String _G__typename;
  String get G__typename => _$this._G__typename;
  set G__typename(String G__typename) => _$this._G__typename = G__typename;

  String _G_id;
  String get G_id => _$this._G_id;
  set G_id(String G_id) => _$this._G_id = G_id;

  String _id;
  String get id => _$this._id;
  set id(String id) => _$this._id = id;

  String _name;
  String get name => _$this._name;
  set name(String name) => _$this._name = name;

  double _order;
  double get order => _$this._order;
  set order(double order) => _$this._order = order;

  GFetchSportsData_sportsBuilder() {
    GFetchSportsData_sports._initializeBuilder(this);
  }

  GFetchSportsData_sportsBuilder get _$this {
    if (_$v != null) {
      _G__typename = _$v.G__typename;
      _G_id = _$v.G_id;
      _id = _$v.id;
      _name = _$v.name;
      _order = _$v.order;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GFetchSportsData_sports other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$GFetchSportsData_sports;
  }

  @override
  void update(void Function(GFetchSportsData_sportsBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$GFetchSportsData_sports build() {
    final _$result = _$v ??
        new _$GFetchSportsData_sports._(
            G__typename: G__typename,
            G_id: G_id,
            id: id,
            name: name,
            order: order);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,always_specify_types,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
