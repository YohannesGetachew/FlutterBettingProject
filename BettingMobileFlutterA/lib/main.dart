import 'package:BettingMobileFlutter/business_logic/user/user_bloc.dart';
import 'package:BettingMobileFlutter/config/graphqlConfig.dart';
import 'package:BettingMobileFlutter/widgets/routes/routes.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() async {
  GraphQLConfig();
  print('configured');
  runApp(BlocProvider<UserBloc>(
      create: (BuildContext context) => UserBloc(),
      child: MaterialApp(home: Center(child: Text('hello'))
          // onGenerateRoute: Routes.generateRoute,
          // initialRoute: '/',
          // debugShowCheckedModeBanner: false,
          // home: Home(Betting()),
          )));
}
