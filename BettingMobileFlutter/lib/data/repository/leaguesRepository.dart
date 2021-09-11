import 'package:BettingMobileFlutter/data/provider/league/leagueProvider.dart';
import 'package:graphql/client.dart';

class LeagueRepository {
  LeagueProvider _leagueProvider;
  LeagueRepository() {
    _leagueProvider = LeagueProvider();
  }
  Future<QueryResult> getLeagues() async {
    final leagues =
        await _leagueProvider.getLeaguesRaw(<String, dynamic>{'isTop': true});
    if (leagues.hasException) {
      print(leagues.exception);
    }
    if (leagues.data != null) {
      var newLeagues = [];
      leagues.data['leagues'].forEach((league) {
        var tempFixtures = [];
        var tempLeague = league;
        league['fixtures'].forEach((fixture) => {
              if (fixture['basicOdds']['more'] != 0) {tempFixtures.add(fixture)}
            });
        tempLeague['fixtures'] = tempFixtures;
        newLeagues.add(tempLeague);
      });
      print(newLeagues);
    }
    return leagues;
  }
}
