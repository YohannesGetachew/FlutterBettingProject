import 'package:BettingMobileFlutter/data/provider/base/baseProvider.dart';
import 'package:graphql/client.dart';
import 'package:BettingMobileFlutter/data/graphql/league.dart';

class LeagueProvider extends BaseGraphQLProvider {
  Future<QueryResult> getLeaguesRaw(variables) async {
    final leaguesRaw = await performQuery(leaguesQuery, variables: variables);
    return leaguesRaw;
  }
}
