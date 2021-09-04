import 'package:BettingFerryClient/graphql/schema.schema.gql.dart'
    show
        GAdvertisementDTO,
        GAppDto,
        GBetDTO,
        GBetSettlement,
        GCashierPermission,
        GContactDTO,
        GCountryDTO,
        GDepositRequestDto,
        GEvidenceType,
        GFixtureDTO,
        GIncidentType,
        GLeagueDTO,
        GLocationDTO,
        GLoginDto,
        GMarketDTO,
        GPlacerType,
        GRole,
        GScoreboardStatus,
        GShopDto,
        GSportDTO,
        GTicketDTO,
        GTicketStatus,
        GTransactionDTO,
        GTransactionType,
        GTransferSource,
        GUpdateDepositRequestDto,
        GUpdateShopDTO,
        GUpdateTicketDTO,
        GUpload,
        GUserDto,
        GUserUpdateDTO,
        GUsernameType;
import 'package:BettingFerryClient/graphql/sport.data.gql.dart'
    show GFetchSportsData, GFetchSportsData_sports;
import 'package:BettingFerryClient/graphql/sport.req.gql.dart'
    show GFetchSportsReq;
import 'package:BettingFerryClient/graphql/sport.var.gql.dart'
    show GFetchSportsVars;
import 'package:BettingFerryClient/graphql/users.data.gql.dart'
    show GFetchUsersData, GFetchUsersData_users;
import 'package:BettingFerryClient/graphql/users.req.gql.dart'
    show GFetchUsersReq;
import 'package:BettingFerryClient/graphql/users.var.gql.dart'
    show GFetchUsersVars;
import 'package:built_collection/built_collection.dart';
import 'package:built_value/serializer.dart';
import 'package:built_value/standard_json_plugin.dart' show StandardJsonPlugin;
import 'package:gql_code_builder/src/serializers/operation_serializer.dart'
    show OperationSerializer;

part 'serializers.gql.g.dart';

final SerializersBuilder _serializersBuilder = _$serializers.toBuilder()
  ..add(OperationSerializer())
  ..addPlugin(StandardJsonPlugin());
@SerializersFor([
  GAdvertisementDTO,
  GAppDto,
  GBetDTO,
  GBetSettlement,
  GCashierPermission,
  GContactDTO,
  GCountryDTO,
  GDepositRequestDto,
  GEvidenceType,
  GFetchSportsData,
  GFetchSportsData_sports,
  GFetchSportsReq,
  GFetchSportsVars,
  GFetchUsersData,
  GFetchUsersData_users,
  GFetchUsersReq,
  GFetchUsersVars,
  GFixtureDTO,
  GIncidentType,
  GLeagueDTO,
  GLocationDTO,
  GLoginDto,
  GMarketDTO,
  GPlacerType,
  GRole,
  GScoreboardStatus,
  GShopDto,
  GSportDTO,
  GTicketDTO,
  GTicketStatus,
  GTransactionDTO,
  GTransactionType,
  GTransferSource,
  GUpdateDepositRequestDto,
  GUpdateShopDTO,
  GUpdateTicketDTO,
  GUpload,
  GUserDto,
  GUserUpdateDTO,
  GUsernameType
])
final Serializers serializers = _serializersBuilder.build();
