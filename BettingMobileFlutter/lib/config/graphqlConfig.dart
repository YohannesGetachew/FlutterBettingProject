import 'package:graphql/client.dart';

class GraphQLConfig {
  static GraphQLClient client;

  GraphQLConfig() {
    HttpLink link = HttpLink(uri: 'http://10.0.2.2:9852/graphql');
    client = GraphQLClient(link: link, cache: InMemoryCache());
  }

  static void initClient() {
    HttpLink link = HttpLink(uri: 'http://10.10.2.2:9852/graphqql');
    GraphQLClient(link: link, cache: InMemoryCache());
  }
}
