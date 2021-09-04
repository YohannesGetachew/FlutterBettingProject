// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'users.data.gql.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

Serializer<GFetchUsersData> _$gFetchUsersDataSerializer =
    new _$GFetchUsersDataSerializer();
Serializer<GFetchUsersData_users> _$gFetchUsersDataUsersSerializer =
    new _$GFetchUsersData_usersSerializer();

class _$GFetchUsersDataSerializer
    implements StructuredSerializer<GFetchUsersData> {
  @override
  final Iterable<Type> types = const [GFetchUsersData, _$GFetchUsersData];
  @override
  final String wireName = 'GFetchUsersData';

  @override
  Iterable<Object> serialize(Serializers serializers, GFetchUsersData object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      '__typename',
      serializers.serialize(object.G__typename,
          specifiedType: const FullType(String)),
      'users',
      serializers.serialize(object.users,
          specifiedType: const FullType(
              BuiltList, const [const FullType(GFetchUsersData_users)])),
    ];

    return result;
  }

  @override
  GFetchUsersData deserialize(
      Serializers serializers, Iterable<Object> serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new GFetchUsersDataBuilder();

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
        case 'users':
          result.users.replace(serializers.deserialize(value,
                  specifiedType: const FullType(
                      BuiltList, const [const FullType(GFetchUsersData_users)]))
              as BuiltList<Object>);
          break;
      }
    }

    return result.build();
  }
}

class _$GFetchUsersData_usersSerializer
    implements StructuredSerializer<GFetchUsersData_users> {
  @override
  final Iterable<Type> types = const [
    GFetchUsersData_users,
    _$GFetchUsersData_users
  ];
  @override
  final String wireName = 'GFetchUsersData_users';

  @override
  Iterable<Object> serialize(
      Serializers serializers, GFetchUsersData_users object,
      {FullType specifiedType = FullType.unspecified}) {
    final result = <Object>[
      '__typename',
      serializers.serialize(object.G__typename,
          specifiedType: const FullType(String)),
      'firstName',
      serializers.serialize(object.firstName,
          specifiedType: const FullType(String)),
      'lastName',
      serializers.serialize(object.lastName,
          specifiedType: const FullType(String)),
      'username',
      serializers.serialize(object.username,
          specifiedType: const FullType(String)),
      'isVerified',
      serializers.serialize(object.isVerified,
          specifiedType: const FullType(bool)),
      'isActive',
      serializers.serialize(object.isActive,
          specifiedType: const FullType(bool)),
      'role',
      serializers.serialize(object.role,
          specifiedType: const FullType(_i2.GRole)),
      'accountBalance',
      serializers.serialize(object.accountBalance,
          specifiedType: const FullType(double)),
      'profileImage',
      serializers.serialize(object.profileImage,
          specifiedType: const FullType(String)),
      'cashierPermissions',
      serializers.serialize(object.cashierPermissions,
          specifiedType: const FullType(
              BuiltList, const [const FullType(_i2.GCashierPermission)])),
    ];
    if (object.G_id != null) {
      result
        ..add('_id')
        ..add(serializers.serialize(object.G_id,
            specifiedType: const FullType(String)));
    }
    if (object.createdAt != null) {
      result
        ..add('createdAt')
        ..add(serializers.serialize(object.createdAt,
            specifiedType: const FullType(String)));
    }
    if (object.belongsToShop != null) {
      result
        ..add('belongsToShop')
        ..add(serializers.serialize(object.belongsToShop,
            specifiedType: const FullType(String)));
    }
    return result;
  }

  @override
  GFetchUsersData_users deserialize(
      Serializers serializers, Iterable<Object> serialized,
      {FullType specifiedType = FullType.unspecified}) {
    final result = new GFetchUsersData_usersBuilder();

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
        case 'isVerified':
          result.isVerified = serializers.deserialize(value,
              specifiedType: const FullType(bool)) as bool;
          break;
        case 'isActive':
          result.isActive = serializers.deserialize(value,
              specifiedType: const FullType(bool)) as bool;
          break;
        case 'role':
          result.role = serializers.deserialize(value,
              specifiedType: const FullType(_i2.GRole)) as _i2.GRole;
          break;
        case 'accountBalance':
          result.accountBalance = serializers.deserialize(value,
              specifiedType: const FullType(double)) as double;
          break;
        case 'profileImage':
          result.profileImage = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'createdAt':
          result.createdAt = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'belongsToShop':
          result.belongsToShop = serializers.deserialize(value,
              specifiedType: const FullType(String)) as String;
          break;
        case 'cashierPermissions':
          result.cashierPermissions.replace(serializers.deserialize(value,
              specifiedType: const FullType(BuiltList, const [
                const FullType(_i2.GCashierPermission)
              ])) as BuiltList<Object>);
          break;
      }
    }

    return result.build();
  }
}

class _$GFetchUsersData extends GFetchUsersData {
  @override
  final String G__typename;
  @override
  final BuiltList<GFetchUsersData_users> users;

  factory _$GFetchUsersData([void Function(GFetchUsersDataBuilder) updates]) =>
      (new GFetchUsersDataBuilder()..update(updates)).build();

  _$GFetchUsersData._({this.G__typename, this.users}) : super._() {
    if (G__typename == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData', 'G__typename');
    }
    if (users == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData', 'users');
    }
  }

  @override
  GFetchUsersData rebuild(void Function(GFetchUsersDataBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GFetchUsersDataBuilder toBuilder() =>
      new GFetchUsersDataBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GFetchUsersData &&
        G__typename == other.G__typename &&
        users == other.users;
  }

  @override
  int get hashCode {
    return $jf($jc($jc(0, G__typename.hashCode), users.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('GFetchUsersData')
          ..add('G__typename', G__typename)
          ..add('users', users))
        .toString();
  }
}

class GFetchUsersDataBuilder
    implements Builder<GFetchUsersData, GFetchUsersDataBuilder> {
  _$GFetchUsersData _$v;

  String _G__typename;
  String get G__typename => _$this._G__typename;
  set G__typename(String G__typename) => _$this._G__typename = G__typename;

  ListBuilder<GFetchUsersData_users> _users;
  ListBuilder<GFetchUsersData_users> get users =>
      _$this._users ??= new ListBuilder<GFetchUsersData_users>();
  set users(ListBuilder<GFetchUsersData_users> users) => _$this._users = users;

  GFetchUsersDataBuilder() {
    GFetchUsersData._initializeBuilder(this);
  }

  GFetchUsersDataBuilder get _$this {
    if (_$v != null) {
      _G__typename = _$v.G__typename;
      _users = _$v.users?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GFetchUsersData other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$GFetchUsersData;
  }

  @override
  void update(void Function(GFetchUsersDataBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$GFetchUsersData build() {
    _$GFetchUsersData _$result;
    try {
      _$result = _$v ??
          new _$GFetchUsersData._(
              G__typename: G__typename, users: users.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'users';
        users.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'GFetchUsersData', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

class _$GFetchUsersData_users extends GFetchUsersData_users {
  @override
  final String G__typename;
  @override
  final String G_id;
  @override
  final String firstName;
  @override
  final String lastName;
  @override
  final String username;
  @override
  final bool isVerified;
  @override
  final bool isActive;
  @override
  final _i2.GRole role;
  @override
  final double accountBalance;
  @override
  final String profileImage;
  @override
  final String createdAt;
  @override
  final String belongsToShop;
  @override
  final BuiltList<_i2.GCashierPermission> cashierPermissions;

  factory _$GFetchUsersData_users(
          [void Function(GFetchUsersData_usersBuilder) updates]) =>
      (new GFetchUsersData_usersBuilder()..update(updates)).build();

  _$GFetchUsersData_users._(
      {this.G__typename,
      this.G_id,
      this.firstName,
      this.lastName,
      this.username,
      this.isVerified,
      this.isActive,
      this.role,
      this.accountBalance,
      this.profileImage,
      this.createdAt,
      this.belongsToShop,
      this.cashierPermissions})
      : super._() {
    if (G__typename == null) {
      throw new BuiltValueNullFieldError(
          'GFetchUsersData_users', 'G__typename');
    }
    if (firstName == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData_users', 'firstName');
    }
    if (lastName == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData_users', 'lastName');
    }
    if (username == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData_users', 'username');
    }
    if (isVerified == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData_users', 'isVerified');
    }
    if (isActive == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData_users', 'isActive');
    }
    if (role == null) {
      throw new BuiltValueNullFieldError('GFetchUsersData_users', 'role');
    }
    if (accountBalance == null) {
      throw new BuiltValueNullFieldError(
          'GFetchUsersData_users', 'accountBalance');
    }
    if (profileImage == null) {
      throw new BuiltValueNullFieldError(
          'GFetchUsersData_users', 'profileImage');
    }
    if (cashierPermissions == null) {
      throw new BuiltValueNullFieldError(
          'GFetchUsersData_users', 'cashierPermissions');
    }
  }

  @override
  GFetchUsersData_users rebuild(
          void Function(GFetchUsersData_usersBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GFetchUsersData_usersBuilder toBuilder() =>
      new GFetchUsersData_usersBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GFetchUsersData_users &&
        G__typename == other.G__typename &&
        G_id == other.G_id &&
        firstName == other.firstName &&
        lastName == other.lastName &&
        username == other.username &&
        isVerified == other.isVerified &&
        isActive == other.isActive &&
        role == other.role &&
        accountBalance == other.accountBalance &&
        profileImage == other.profileImage &&
        createdAt == other.createdAt &&
        belongsToShop == other.belongsToShop &&
        cashierPermissions == other.cashierPermissions;
  }

  @override
  int get hashCode {
    return $jf($jc(
        $jc(
            $jc(
                $jc(
                    $jc(
                        $jc(
                            $jc(
                                $jc(
                                    $jc(
                                        $jc(
                                            $jc(
                                                $jc(
                                                    $jc(0,
                                                        G__typename.hashCode),
                                                    G_id.hashCode),
                                                firstName.hashCode),
                                            lastName.hashCode),
                                        username.hashCode),
                                    isVerified.hashCode),
                                isActive.hashCode),
                            role.hashCode),
                        accountBalance.hashCode),
                    profileImage.hashCode),
                createdAt.hashCode),
            belongsToShop.hashCode),
        cashierPermissions.hashCode));
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper('GFetchUsersData_users')
          ..add('G__typename', G__typename)
          ..add('G_id', G_id)
          ..add('firstName', firstName)
          ..add('lastName', lastName)
          ..add('username', username)
          ..add('isVerified', isVerified)
          ..add('isActive', isActive)
          ..add('role', role)
          ..add('accountBalance', accountBalance)
          ..add('profileImage', profileImage)
          ..add('createdAt', createdAt)
          ..add('belongsToShop', belongsToShop)
          ..add('cashierPermissions', cashierPermissions))
        .toString();
  }
}

class GFetchUsersData_usersBuilder
    implements Builder<GFetchUsersData_users, GFetchUsersData_usersBuilder> {
  _$GFetchUsersData_users _$v;

  String _G__typename;
  String get G__typename => _$this._G__typename;
  set G__typename(String G__typename) => _$this._G__typename = G__typename;

  String _G_id;
  String get G_id => _$this._G_id;
  set G_id(String G_id) => _$this._G_id = G_id;

  String _firstName;
  String get firstName => _$this._firstName;
  set firstName(String firstName) => _$this._firstName = firstName;

  String _lastName;
  String get lastName => _$this._lastName;
  set lastName(String lastName) => _$this._lastName = lastName;

  String _username;
  String get username => _$this._username;
  set username(String username) => _$this._username = username;

  bool _isVerified;
  bool get isVerified => _$this._isVerified;
  set isVerified(bool isVerified) => _$this._isVerified = isVerified;

  bool _isActive;
  bool get isActive => _$this._isActive;
  set isActive(bool isActive) => _$this._isActive = isActive;

  _i2.GRole _role;
  _i2.GRole get role => _$this._role;
  set role(_i2.GRole role) => _$this._role = role;

  double _accountBalance;
  double get accountBalance => _$this._accountBalance;
  set accountBalance(double accountBalance) =>
      _$this._accountBalance = accountBalance;

  String _profileImage;
  String get profileImage => _$this._profileImage;
  set profileImage(String profileImage) => _$this._profileImage = profileImage;

  String _createdAt;
  String get createdAt => _$this._createdAt;
  set createdAt(String createdAt) => _$this._createdAt = createdAt;

  String _belongsToShop;
  String get belongsToShop => _$this._belongsToShop;
  set belongsToShop(String belongsToShop) =>
      _$this._belongsToShop = belongsToShop;

  ListBuilder<_i2.GCashierPermission> _cashierPermissions;
  ListBuilder<_i2.GCashierPermission> get cashierPermissions =>
      _$this._cashierPermissions ??= new ListBuilder<_i2.GCashierPermission>();
  set cashierPermissions(
          ListBuilder<_i2.GCashierPermission> cashierPermissions) =>
      _$this._cashierPermissions = cashierPermissions;

  GFetchUsersData_usersBuilder() {
    GFetchUsersData_users._initializeBuilder(this);
  }

  GFetchUsersData_usersBuilder get _$this {
    if (_$v != null) {
      _G__typename = _$v.G__typename;
      _G_id = _$v.G_id;
      _firstName = _$v.firstName;
      _lastName = _$v.lastName;
      _username = _$v.username;
      _isVerified = _$v.isVerified;
      _isActive = _$v.isActive;
      _role = _$v.role;
      _accountBalance = _$v.accountBalance;
      _profileImage = _$v.profileImage;
      _createdAt = _$v.createdAt;
      _belongsToShop = _$v.belongsToShop;
      _cashierPermissions = _$v.cashierPermissions?.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GFetchUsersData_users other) {
    if (other == null) {
      throw new ArgumentError.notNull('other');
    }
    _$v = other as _$GFetchUsersData_users;
  }

  @override
  void update(void Function(GFetchUsersData_usersBuilder) updates) {
    if (updates != null) updates(this);
  }

  @override
  _$GFetchUsersData_users build() {
    _$GFetchUsersData_users _$result;
    try {
      _$result = _$v ??
          new _$GFetchUsersData_users._(
              G__typename: G__typename,
              G_id: G_id,
              firstName: firstName,
              lastName: lastName,
              username: username,
              isVerified: isVerified,
              isActive: isActive,
              role: role,
              accountBalance: accountBalance,
              profileImage: profileImage,
              createdAt: createdAt,
              belongsToShop: belongsToShop,
              cashierPermissions: cashierPermissions.build());
    } catch (_) {
      String _$failedField;
      try {
        _$failedField = 'cashierPermissions';
        cashierPermissions.build();
      } catch (e) {
        throw new BuiltValueNestedFieldError(
            'GFetchUsersData_users', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: always_put_control_body_on_new_line,always_specify_types,annotate_overrides,avoid_annotating_with_dynamic,avoid_as,avoid_catches_without_on_clauses,avoid_returning_this,lines_longer_than_80_chars,omit_local_variable_types,prefer_expression_function_bodies,sort_constructors_first,test_types_in_equals,unnecessary_const,unnecessary_new
