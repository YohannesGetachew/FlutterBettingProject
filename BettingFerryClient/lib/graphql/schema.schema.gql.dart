// GENERATED CODE - DO NOT MODIFY BY HAND

import 'package:BettingFerryClient/graphql/serializers.gql.dart' as _i1;
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';
import 'package:gql_code_builder/src/serializers/default_scalar_serializer.dart'
    as _i2;

part 'schema.schema.gql.g.dart';

class GBetSettlement extends EnumClass {
  const GBetSettlement._(String name) : super(name);

  static const GBetSettlement Cancelled = _$gBetSettlementCancelled;

  static const GBetSettlement HalfLost = _$gBetSettlementHalfLost;

  static const GBetSettlement HalfWon = _$gBetSettlementHalfWon;

  static const GBetSettlement Loser = _$gBetSettlementLoser;

  static const GBetSettlement Refund = _$gBetSettlementRefund;

  static const GBetSettlement Winner = _$gBetSettlementWinner;

  static Serializer<GBetSettlement> get serializer =>
      _$gBetSettlementSerializer;
  static BuiltSet<GBetSettlement> get values => _$gBetSettlementValues;
  static GBetSettlement valueOf(String name) => _$gBetSettlementValueOf(name);
}

class GCashierPermission extends EnumClass {
  const GCashierPermission._(String name) : super(name);

  static const GCashierPermission CREATE_DEPOSIT =
      _$gCashierPermissionCREATE_DEPOSIT;

  static const GCashierPermission CREATE_WITHDRAWAL =
      _$gCashierPermissionCREATE_WITHDRAWAL;

  static const GCashierPermission HANDLE_DEPOSIT_REQUEST =
      _$gCashierPermissionHANDLE_DEPOSIT_REQUEST;

  static const GCashierPermission PLACE_TICKETS =
      _$gCashierPermissionPLACE_TICKETS;

  static Serializer<GCashierPermission> get serializer =>
      _$gCashierPermissionSerializer;
  static BuiltSet<GCashierPermission> get values => _$gCashierPermissionValues;
  static GCashierPermission valueOf(String name) =>
      _$gCashierPermissionValueOf(name);
}

class GEvidenceType extends EnumClass {
  const GEvidenceType._(String name) : super(name);

  static const GEvidenceType TRANSACTION_ID = _$gEvidenceTypeTRANSACTION_ID;

  static const GEvidenceType TRANSACTION_PICTURE =
      _$gEvidenceTypeTRANSACTION_PICTURE;

  static Serializer<GEvidenceType> get serializer => _$gEvidenceTypeSerializer;
  static BuiltSet<GEvidenceType> get values => _$gEvidenceTypeValues;
  static GEvidenceType valueOf(String name) => _$gEvidenceTypeValueOf(name);
}

class GIncidentType extends EnumClass {
  const GIncidentType._(String name) : super(name);

  static const GIncidentType Baseball_Hits = _$gIncidentTypeBaseball_Hits;

  static const GIncidentType Basketball_Fouls = _$gIncidentTypeBasketball_Fouls;

  static const GIncidentType Basketball_Free_throws =
      _$gIncidentTypeBasketball_Free_throws;

  static const GIncidentType Basketball_Three_points =
      _$gIncidentTypeBasketball_Three_points;

  static const GIncidentType Basketball_Time_outs =
      _$gIncidentTypeBasketball_Time_outs;

  static const GIncidentType Basketball_Two_points =
      _$gIncidentTypeBasketball_Two_points;

  static const GIncidentType Football_Corners = _$gIncidentTypeFootball_Corners;

  static const GIncidentType Football_Goal = _$gIncidentTypeFootball_Goal;

  static const GIncidentType Football_Missed_penalty =
      _$gIncidentTypeFootball_Missed_penalty;

  static const GIncidentType Football_Own_goal =
      _$gIncidentTypeFootball_Own_goal;

  static const GIncidentType Football_Penalties =
      _$gIncidentTypeFootball_Penalties;

  static const GIncidentType Football_Penalty_goal =
      _$gIncidentTypeFootball_Penalty_goal;

  static const GIncidentType Football_Red_cards =
      _$gIncidentTypeFootball_Red_cards;

  static const GIncidentType Football_Substitutions =
      _$gIncidentTypeFootball_Substitutions;

  static const GIncidentType Football_Yellow_cards =
      _$gIncidentTypeFootball_Yellow_cards;

  static const GIncidentType IceHockey_Penalties =
      _$gIncidentTypeIceHockey_Penalties;

  static const GIncidentType Tennis_Aces = _$gIncidentTypeTennis_Aces;

  static const GIncidentType Tennis_Double_faults =
      _$gIncidentTypeTennis_Double_faults;

  static const GIncidentType Tennis_First_serve_wins =
      _$gIncidentTypeTennis_First_serve_wins;

  static Serializer<GIncidentType> get serializer => _$gIncidentTypeSerializer;
  static BuiltSet<GIncidentType> get values => _$gIncidentTypeValues;
  static GIncidentType valueOf(String name) => _$gIncidentTypeValueOf(name);
}

class GPlacerType extends EnumClass {
  const GPlacerType._(String name) : super(name);

  static const GPlacerType CASHIER = _$gPlacerTypeCASHIER;

  static const GPlacerType CUSTOMER = _$gPlacerTypeCUSTOMER;

  static const GPlacerType GUEST = _$gPlacerTypeGUEST;

  static Serializer<GPlacerType> get serializer => _$gPlacerTypeSerializer;
  static BuiltSet<GPlacerType> get values => _$gPlacerTypeValues;
  static GPlacerType valueOf(String name) => _$gPlacerTypeValueOf(name);
}

class GRole extends EnumClass {
  const GRole._(String name) : super(name);

  static const GRole ADMIN = _$gRoleADMIN;

  static const GRole CASHIER = _$gRoleCASHIER;

  static const GRole CUSTOMER = _$gRoleCUSTOMER;

  static const GRole SUPER_ADMIN = _$gRoleSUPER_ADMIN;

  static Serializer<GRole> get serializer => _$gRoleSerializer;
  static BuiltSet<GRole> get values => _$gRoleValues;
  static GRole valueOf(String name) => _$gRoleValueOf(name);
}

class GScoreboardStatus extends EnumClass {
  const GScoreboardStatus._(String name) : super(name);

  static const GScoreboardStatus Abandoned = _$gScoreboardStatusAbandoned;

  static const GScoreboardStatus About_to_start =
      _$gScoreboardStatusAbout_to_start;

  static const GScoreboardStatus Cancelled = _$gScoreboardStatusCancelled;

  static const GScoreboardStatus Coverage_lost =
      _$gScoreboardStatusCoverage_lost;

  static const GScoreboardStatus Finished = _$gScoreboardStatusFinished;

  static const GScoreboardStatus In_progress = _$gScoreboardStatusIn_progress;

  static const GScoreboardStatus Interrupted = _$gScoreboardStatusInterrupted;

  static const GScoreboardStatus Not_started_yet =
      _$gScoreboardStatusNot_started_yet;

  static const GScoreboardStatus Postponed = _$gScoreboardStatusPostponed;

  static Serializer<GScoreboardStatus> get serializer =>
      _$gScoreboardStatusSerializer;
  static BuiltSet<GScoreboardStatus> get values => _$gScoreboardStatusValues;
  static GScoreboardStatus valueOf(String name) =>
      _$gScoreboardStatusValueOf(name);
}

class GTicketStatus extends EnumClass {
  const GTicketStatus._(String name) : super(name);

  static const GTicketStatus LOSE = _$gTicketStatusLOSE;

  static const GTicketStatus PENDING = _$gTicketStatusPENDING;

  static const GTicketStatus WIN = _$gTicketStatusWIN;

  static Serializer<GTicketStatus> get serializer => _$gTicketStatusSerializer;
  static BuiltSet<GTicketStatus> get values => _$gTicketStatusValues;
  static GTicketStatus valueOf(String name) => _$gTicketStatusValueOf(name);
}

class GTransactionType extends EnumClass {
  const GTransactionType._(String name) : super(name);

  static const GTransactionType DEPOSIT = _$gTransactionTypeDEPOSIT;

  static const GTransactionType WITHDRAW = _$gTransactionTypeWITHDRAW;

  static Serializer<GTransactionType> get serializer =>
      _$gTransactionTypeSerializer;
  static BuiltSet<GTransactionType> get values => _$gTransactionTypeValues;
  static GTransactionType valueOf(String name) =>
      _$gTransactionTypeValueOf(name);
}

class GTransferSource extends EnumClass {
  const GTransferSource._(String name) : super(name);

  static const GTransferSource AMOLE = _$gTransferSourceAMOLE;

  static const GTransferSource BANK = _$gTransferSourceBANK;

  static const GTransferSource CBE = _$gTransferSourceCBE;

  static const GTransferSource MBIRR = _$gTransferSourceMBIRR;

  static Serializer<GTransferSource> get serializer =>
      _$gTransferSourceSerializer;
  static BuiltSet<GTransferSource> get values => _$gTransferSourceValues;
  static GTransferSource valueOf(String name) => _$gTransferSourceValueOf(name);
}

class GUsernameType extends EnumClass {
  const GUsernameType._(String name) : super(name);

  static const GUsernameType EMAIL = _$gUsernameTypeEMAIL;

  static const GUsernameType PHONE = _$gUsernameTypePHONE;

  static Serializer<GUsernameType> get serializer => _$gUsernameTypeSerializer;
  static BuiltSet<GUsernameType> get values => _$gUsernameTypeValues;
  static GUsernameType valueOf(String name) => _$gUsernameTypeValueOf(name);
}

abstract class GAdvertisementDTO
    implements Built<GAdvertisementDTO, GAdvertisementDTOBuilder> {
  GAdvertisementDTO._();

  factory GAdvertisementDTO([Function(GAdvertisementDTOBuilder b) updates]) =
      _$GAdvertisementDTO;

  @nullable
  String get id;
  String get imagePath;
  @nullable
  String get name;
  @nullable
  String get position;
  static Serializer<GAdvertisementDTO> get serializer =>
      _$gAdvertisementDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GAdvertisementDTO.serializer, this);
  static GAdvertisementDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GAdvertisementDTO.serializer, json);
}

abstract class GAppDto implements Built<GAppDto, GAppDtoBuilder> {
  GAppDto._();

  factory GAppDto([Function(GAppDtoBuilder b) updates]) = _$GAppDto;

  BuiltList<GAdvertisementDTO> get advertisements;
  @nullable
  String get appLogo;
  @nullable
  String get appName;
  @nullable
  double get bookmaker;
  @nullable
  double get commissionRate;
  @nullable
  double get maxStake;
  @nullable
  double get maxWin;
  @nullable
  double get minStake;
  @nullable
  String get rules;
  @nullable
  double get vatRate;
  @nullable
  double get withdrawalLimit;
  static Serializer<GAppDto> get serializer => _$gAppDtoSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GAppDto.serializer, this);
  static GAppDto fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GAppDto.serializer, json);
}

abstract class GBetDTO implements Built<GBetDTO, GBetDTOBuilder> {
  GBetDTO._();

  factory GBetDTO([Function(GBetDTOBuilder b) updates]) = _$GBetDTO;

  String get betId;
  String get fixtureId;
  String get fixtureName;
  double get oddValue;
  String get type;
  String get value;
  static Serializer<GBetDTO> get serializer => _$gBetDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GBetDTO.serializer, this);
  static GBetDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GBetDTO.serializer, json);
}

abstract class GContactDTO implements Built<GContactDTO, GContactDTOBuilder> {
  GContactDTO._();

  factory GContactDTO([Function(GContactDTOBuilder b) updates]) = _$GContactDTO;

  String get type;
  String get value;
  static Serializer<GContactDTO> get serializer => _$gContactDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GContactDTO.serializer, this);
  static GContactDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GContactDTO.serializer, json);
}

abstract class GCountryDTO implements Built<GCountryDTO, GCountryDTOBuilder> {
  GCountryDTO._();

  factory GCountryDTO([Function(GCountryDTOBuilder b) updates]) = _$GCountryDTO;

  @nullable
  bool get isAvailable;
  @nullable
  double get order;
  static Serializer<GCountryDTO> get serializer => _$gCountryDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GCountryDTO.serializer, this);
  static GCountryDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GCountryDTO.serializer, json);
}

abstract class GDepositRequestDto
    implements Built<GDepositRequestDto, GDepositRequestDtoBuilder> {
  GDepositRequestDto._();

  factory GDepositRequestDto([Function(GDepositRequestDtoBuilder b) updates]) =
      _$GDepositRequestDto;

  String get evidence;
  GEvidenceType get evidenceType;
  String get transferSource;
  static Serializer<GDepositRequestDto> get serializer =>
      _$gDepositRequestDtoSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GDepositRequestDto.serializer, this);
  static GDepositRequestDto fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GDepositRequestDto.serializer, json);
}

abstract class GFixtureDTO implements Built<GFixtureDTO, GFixtureDTOBuilder> {
  GFixtureDTO._();

  factory GFixtureDTO([Function(GFixtureDTOBuilder b) updates]) = _$GFixtureDTO;

  bool get isAvailable;
  static Serializer<GFixtureDTO> get serializer => _$gFixtureDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GFixtureDTO.serializer, this);
  static GFixtureDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GFixtureDTO.serializer, json);
}

abstract class GLeagueDTO implements Built<GLeagueDTO, GLeagueDTOBuilder> {
  GLeagueDTO._();

  factory GLeagueDTO([Function(GLeagueDTOBuilder b) updates]) = _$GLeagueDTO;

  @nullable
  bool get isAvailable;
  @nullable
  bool get isTop;
  static Serializer<GLeagueDTO> get serializer => _$gLeagueDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GLeagueDTO.serializer, this);
  static GLeagueDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GLeagueDTO.serializer, json);
}

abstract class GLocationDTO
    implements Built<GLocationDTO, GLocationDTOBuilder> {
  GLocationDTO._();

  factory GLocationDTO([Function(GLocationDTOBuilder b) updates]) =
      _$GLocationDTO;

  double get lat;
  double get lon;
  static Serializer<GLocationDTO> get serializer => _$gLocationDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GLocationDTO.serializer, this);
  static GLocationDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GLocationDTO.serializer, json);
}

abstract class GLoginDto implements Built<GLoginDto, GLoginDtoBuilder> {
  GLoginDto._();

  factory GLoginDto([Function(GLoginDtoBuilder b) updates]) = _$GLoginDto;

  String get password;
  String get username;
  static Serializer<GLoginDto> get serializer => _$gLoginDtoSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GLoginDto.serializer, this);
  static GLoginDto fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GLoginDto.serializer, json);
}

abstract class GMarketDTO implements Built<GMarketDTO, GMarketDTOBuilder> {
  GMarketDTO._();

  factory GMarketDTO([Function(GMarketDTOBuilder b) updates]) = _$GMarketDTO;

  bool get isAvailable;
  static Serializer<GMarketDTO> get serializer => _$gMarketDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GMarketDTO.serializer, this);
  static GMarketDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GMarketDTO.serializer, json);
}

abstract class GShopDto implements Built<GShopDto, GShopDtoBuilder> {
  GShopDto._();

  factory GShopDto([Function(GShopDtoBuilder b) updates]) = _$GShopDto;

  String get adminId;
  String get branchName;
  BuiltList<GContactDTO> get contacts;
  @nullable
  bool get isActive;
  @nullable
  GLocationDTO get location;
  static Serializer<GShopDto> get serializer => _$gShopDtoSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GShopDto.serializer, this);
  static GShopDto fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GShopDto.serializer, json);
}

abstract class GSportDTO implements Built<GSportDTO, GSportDTOBuilder> {
  GSportDTO._();

  factory GSportDTO([Function(GSportDTOBuilder b) updates]) = _$GSportDTO;

  bool get isAvailable;
  @nullable
  double get order;
  static Serializer<GSportDTO> get serializer => _$gSportDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GSportDTO.serializer, this);
  static GSportDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GSportDTO.serializer, json);
}

abstract class GTicketDTO implements Built<GTicketDTO, GTicketDTOBuilder> {
  GTicketDTO._();

  factory GTicketDTO([Function(GTicketDTOBuilder b) updates]) = _$GTicketDTO;

  BuiltList<GBetDTO> get bets;
  double get stake;
  static Serializer<GTicketDTO> get serializer => _$gTicketDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GTicketDTO.serializer, this);
  static GTicketDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GTicketDTO.serializer, json);
}

abstract class GTransactionDTO
    implements Built<GTransactionDTO, GTransactionDTOBuilder> {
  GTransactionDTO._();

  factory GTransactionDTO([Function(GTransactionDTOBuilder b) updates]) =
      _$GTransactionDTO;

  double get amount;
  String get customer;
  GTransactionType get type;
  static Serializer<GTransactionDTO> get serializer =>
      _$gTransactionDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GTransactionDTO.serializer, this);
  static GTransactionDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GTransactionDTO.serializer, json);
}

abstract class GUpdateDepositRequestDto
    implements
        Built<GUpdateDepositRequestDto, GUpdateDepositRequestDtoBuilder> {
  GUpdateDepositRequestDto._();

  factory GUpdateDepositRequestDto(
          [Function(GUpdateDepositRequestDtoBuilder b) updates]) =
      _$GUpdateDepositRequestDto;

  double get amount;
  static Serializer<GUpdateDepositRequestDto> get serializer =>
      _$gUpdateDepositRequestDtoSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GUpdateDepositRequestDto.serializer, this);
  static GUpdateDepositRequestDto fromJson(Map<String, dynamic> json) =>
      _i1.serializers
          .deserializeWith(GUpdateDepositRequestDto.serializer, json);
}

abstract class GUpdateShopDTO
    implements Built<GUpdateShopDTO, GUpdateShopDTOBuilder> {
  GUpdateShopDTO._();

  factory GUpdateShopDTO([Function(GUpdateShopDTOBuilder b) updates]) =
      _$GUpdateShopDTO;

  @nullable
  String get adminId;
  @nullable
  String get branchName;
  BuiltList<GContactDTO> get contacts;
  @nullable
  bool get isActive;
  @nullable
  GLocationDTO get location;
  static Serializer<GUpdateShopDTO> get serializer =>
      _$gUpdateShopDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GUpdateShopDTO.serializer, this);
  static GUpdateShopDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GUpdateShopDTO.serializer, json);
}

abstract class GUpdateTicketDTO
    implements Built<GUpdateTicketDTO, GUpdateTicketDTOBuilder> {
  GUpdateTicketDTO._();

  factory GUpdateTicketDTO([Function(GUpdateTicketDTOBuilder b) updates]) =
      _$GUpdateTicketDTO;

  @nullable
  bool get isPlaced;
  @nullable
  double get stake;
  static Serializer<GUpdateTicketDTO> get serializer =>
      _$gUpdateTicketDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GUpdateTicketDTO.serializer, this);
  static GUpdateTicketDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GUpdateTicketDTO.serializer, json);
}

abstract class GUserDto implements Built<GUserDto, GUserDtoBuilder> {
  GUserDto._();

  factory GUserDto([Function(GUserDtoBuilder b) updates]) = _$GUserDto;

  @nullable
  String get belongsToShop;
  BuiltList<GCashierPermission> get cashierPermissions;
  String get firstName;
  String get lastName;
  String get password;
  @nullable
  GRole get role;
  String get username;
  static Serializer<GUserDto> get serializer => _$gUserDtoSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GUserDto.serializer, this);
  static GUserDto fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GUserDto.serializer, json);
}

abstract class GUserUpdateDTO
    implements Built<GUserUpdateDTO, GUserUpdateDTOBuilder> {
  GUserUpdateDTO._();

  factory GUserUpdateDTO([Function(GUserUpdateDTOBuilder b) updates]) =
      _$GUserUpdateDTO;

  @nullable
  String get belongsToShop;
  BuiltList<GCashierPermission> get cashierPermissions;
  @nullable
  String get firstName;
  @nullable
  String get lastName;
  @nullable
  String get password;
  @nullable
  GRole get role;
  @nullable
  String get username;
  static Serializer<GUserUpdateDTO> get serializer =>
      _$gUserUpdateDTOSerializer;
  Map<String, dynamic> toJson() =>
      _i1.serializers.serializeWith(GUserUpdateDTO.serializer, this);
  static GUserUpdateDTO fromJson(Map<String, dynamic> json) =>
      _i1.serializers.deserializeWith(GUserUpdateDTO.serializer, json);
}

abstract class GUpload implements Built<GUpload, GUploadBuilder> {
  GUpload._();

  factory GUpload([String value]) =>
      _$GUpload((b) => value != null ? (b..value = value) : b);

  String get value;
  @BuiltValueSerializer(custom: true)
  static Serializer<GUpload> get serializer =>
      _i2.DefaultScalarSerializer<GUpload>(
          (Object serialized) => GUpload(serialized));
}
