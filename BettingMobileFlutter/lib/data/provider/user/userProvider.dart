import 'package:BettingMobileFlutter/data/graphql/user.dart';
import 'package:BettingMobileFlutter/data/provider/base/baseProvider.dart';
import 'package:graphql/client.dart';

class UserProvider extends BaseGraphQLProvider {
  Future<QueryResult> getUsersRaw() async {
    final usersData = await performQuery(getUsersQuery);
    return usersData;
  }
}
