import 'package:BettingFerryClient/graphql/sport.data.gql.dart';
import 'package:BettingFerryClient/graphql/sport.var.gql.dart';
import 'package:BettingMobileFlutter/widgets/layout/applicationBar.dart';
import 'package:BettingMobileFlutter/widgets/layout/bottomNavigationBar.dart';
import 'package:ferry/ferry.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:ferry_flutter/ferry_flutter.dart';
import 'package:BettingFerryClient/BettingFerryClient.dart';
import 'package:get_it/get_it.dart';

class Login extends StatelessWidget {
  final client = initClient('http://10.0.2.2:9852/graphql');
  final sportsRequest = GFetchSportsReq();
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'login to bet',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: ApplicationBar(),
        body: Operation(
            client: client,
            operationRequest: sportsRequest,
            builder: (BuildContext context,
                OperationResponse<GFetchSportsData, GFetchSportsVars>
                    response) {
              if (response.loading) {
                print('/.............sports');
                print(response);
                return Text('Loading');
              }
              if (response.hasErrors) {
                return Text('error');
              }
              print('/.............out');
              final sports = response.data.sports;
              print(sports);

              return ListView.builder(
                itemCount: sports.length,
                itemBuilder: (context, index) => ListTile(
                  leading: Text(sports[index].id),
                  title: Text(sports[index].name),
                  subtitle: Text(sports[index].name),
                ),
              );
            }),
        bottomNavigationBar: CustomBottomNavigationBar(),
      ),
    );
  }
}

// ListView.builder(
//                 itemCount: sports.length,
//                 itemBuilder: (context, index) => ListTile(
//                   leading: Text(sports[index].id),
//                   title: Text(sports[index].name),
//                   subtitle: Text(sports[index].name),
//                 ),
//               );

// MaterialApp(
// title: 'login to bet',
// debugShowCheckedModeBanner: false,
// home: Scaffold(
// appBar: ApplicationBar(),
// body: LoginForm(),
// bottomNavigationBar: CustomBottomNavigationBar(),),
// )
