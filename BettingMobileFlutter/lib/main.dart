import 'package:BettingMobileFlutter/config/graphqlConfig.dart';
import 'package:BettingMobileFlutter/data/repository/userRepository.dart';
import 'package:BettingMobileFlutter/widgets/routes/routes.dart';
import 'package:BettingMobileFlutter/widgets/screens/betting/betting.dart';
import 'package:BettingMobileFlutter/widgets/screens/home/home.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() async {
  GraphQLConfig();
  runApp(RepositoryProvider(
    create: (BuildContext context) => UserRepository(),
    child: MaterialApp(
      onGenerateRoute: Routes.generateRoute,
      initialRoute: '/',
      debugShowCheckedModeBanner: false,
      home: Home(Betting()),
    ),
  ));
}

// runApp(BlocProvider<UserBloc>(
//       create: (BuildContext context) => UserBloc(),
//       child: MaterialApp(
// onGenerateRoute: Routes.generateRoute,
// initialRoute: '/',
// debugShowCheckedModeBanner: false,
// home: Home(Betting()),
//       )));
