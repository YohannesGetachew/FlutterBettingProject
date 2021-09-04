import 'package:BettingMobileFlutter/widgets/screens/Ticket/betslip.dart';
import 'package:BettingMobileFlutter/widgets/screens/Ticket/checkticket.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class TicketTab extends StatefulWidget {
  @override
  _TicketTab createState() => _TicketTab();
}

class _TicketTab extends State<TicketTab> {
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 2,
        initialIndex: 0,
        child: Row(
          children: [
            
          ],
        ));
  }
}

// TabBar(tabs: <Widget>[
//               Tab(text: 'Bet Slip'),
//               Tab(text: 'check ticket')
//             ]),
//             TabBarView(
//               children: <Widget>[BetSlip(), CheckTicket()],
//             )
