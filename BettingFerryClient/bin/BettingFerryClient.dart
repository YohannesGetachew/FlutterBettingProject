import 'package:BettingFerryClient/BettingFerryClient.dart';

void main(List<String> arguments) {
  final sportReq = GFetchSportsReq();
  final client = initClient('http://localhost:9852/graphql');

  client.request(sportReq).listen((response) {
    final results = response.data.sports;
    if (results.isNotEmpty) {
      print(results);
    }
  });
}

// final userReq = GFetchUsersReq((b) => b..vars.firstName = 'ezedin');
// final client = initClient('http://localhost:9852/graphql');

// client.request(userReq).listen((response) {
//   final results = response.data.users;
//   if (results.isNotEmpty) {
//     print(results);
//   }
// });
