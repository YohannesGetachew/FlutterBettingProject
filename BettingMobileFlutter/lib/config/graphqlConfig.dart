import 'package:graphql/client.dart';

class GraphQLConfig {
  static GraphQLClient client;
  final String remoteApi = 'https://api-birrbet.herokuapp.com/graphql';
  final String localApi = 'http://10.0.2.2:9852/graphql';
  GraphQLConfig() {
    HttpLink link = HttpLink(uri: localApi);
    client = GraphQLClient(link: link, cache: InMemoryCache());
  }

  static void initClient() {
    HttpLink link = HttpLink(uri: 'http://10.10.2.2:9852/graphqql');
    GraphQLClient(link: link, cache: InMemoryCache());
  }
}
