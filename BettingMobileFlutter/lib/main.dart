import 'package:BettingMobileFlutter/business_logic/sport/blocSport.dart';
import 'package:BettingMobileFlutter/business_logic/sport/sport.dart';
import 'package:BettingMobileFlutter/config/graphqlConfig.dart';
import 'package:BettingMobileFlutter/data/graphql/sport.dart';
import 'package:BettingMobileFlutter/data/graphql/user.dart';
import 'package:BettingMobileFlutter/widgets/screens/registration/registration.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

void main() async {
  GraphQLConfig();
  print('configured');
  runApp(BlocProvider<SportBloc>(
    create: (BuildContext context) =>
        SportBloc()..add(FetchSportData(getUsersQuery)),
    child: Registration(),
  ));
}
