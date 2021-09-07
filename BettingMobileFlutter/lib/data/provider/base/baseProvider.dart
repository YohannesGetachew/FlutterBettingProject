import 'package:BettingMobileFlutter/config/graphqlConfig.dart';
import 'package:graphql/client.dart';

class BaseGraphQLProvider {
  GraphQLClient client;
  BaseGraphQLProvider() {
    client = GraphQLConfig.client;
  }

  Future<QueryResult> performQuery(String query,
      {Map<String, dynamic> variables}) async {
    QueryOptions options =
        QueryOptions(documentNode: gql(query), variables: variables);
    final result = await client.query(options);
    return result;
  }

  Future<QueryResult> performMutation(String query,
      {Map<String, dynamic> variables}) async {
    MutationOptions options =
        MutationOptions(documentNode: gql(query), variables: variables);
    final result = await client.mutate(options);
    return result;
  }
}
