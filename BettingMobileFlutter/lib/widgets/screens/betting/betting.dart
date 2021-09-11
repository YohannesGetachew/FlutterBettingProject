import 'package:BettingMobileFlutter/business_logic/user/user_bloc.dart';
import 'package:BettingMobileFlutter/business_logic/user/user_state.dart';
import 'package:BettingMobileFlutter/widgets/screens/betting/match/match.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class Betting extends StatelessWidget {
  Widget match() {
    return Match(
      leagueLogoLink:
          'https://res.cloudinary.com/dtz77duv8/image/upload/v1602853271/world_rhpjwu.png',
      startTime: '23/02/2021 23:0',
      participants: 'Atlético Madrid Vs Chelsea',
      marketsCount: '47',
    );
  }

  Widget build(BuildContext context) {
    return SingleChildScrollView(
        child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Column(
              children: [
                Padding(padding: EdgeInsets.all(10.0)),
                Text(
                  'Matches',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30.0),
                ),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
                Padding(padding: EdgeInsets.all(10.0)),
                match(),
              ],
            )));
  }
}
