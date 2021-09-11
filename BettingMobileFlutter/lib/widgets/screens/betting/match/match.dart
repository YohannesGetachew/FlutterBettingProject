import 'package:flutter/material.dart';

class Match extends StatelessWidget {
  final String leagueLogoLink;
  final String startTime;
  final String participants;
  final String marketsCount;

  Match(
      {this.leagueLogoLink,
      this.startTime,
      this.participants,
      this.marketsCount});

  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
          Image(image: NetworkImage(leagueLogoLink)),
          Text(startTime)
        ]),
        Padding(padding: EdgeInsets.all(3.0)),
        Text(participants),
        Padding(padding: EdgeInsets.all(3.0)),
        FractionallySizedBox(
            widthFactor: 1,
            child: ElevatedButton(
              child: Text('$marketsCount+'),
              onPressed: () => {},
              style: ElevatedButton.styleFrom(
                  primary: Color(0xffd6d6d6), onPrimary: Colors.black),
            ))
      ],
    );
  }
}
