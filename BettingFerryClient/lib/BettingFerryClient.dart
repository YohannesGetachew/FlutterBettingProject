import 'package:ferry/ferry.dart';
import 'package:gql_http_link/gql_http_link.dart';

export 'graphql/sport.req.gql.dart';
export 'graphql/users.req.gql.dart';
export 'graphql/users.var.gql.dart';
export 'graphql/sport.data.gql.dart';

Client initClient(String url) {
  final link = HttpLink(url);
  final client = Client(link: link);
  return client;
}
