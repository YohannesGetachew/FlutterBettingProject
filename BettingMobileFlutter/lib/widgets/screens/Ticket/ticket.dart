import 'package:BettingMobileFlutter/widgets/screens/Ticket/ticketTab.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Ticket extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: TicketTab(),
        color: Color(0xff25323B),
        padding: EdgeInsets.fromLTRB(10.0, 0, 10.0, 0));
  }
}
