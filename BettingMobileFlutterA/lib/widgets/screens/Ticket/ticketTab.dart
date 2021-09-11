import 'package:BettingMobileFlutter/widgets/screens/Ticket/betslip.dart';
import 'package:BettingMobileFlutter/widgets/screens/Ticket/checkticket.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class TicketTab extends StatefulWidget {
  @override
  _TicketTab createState() => _TicketTab();
}

class _TicketTab extends State<TicketTab> with SingleTickerProviderStateMixin {
  TabController _tabController;

  @override
  void initState() {
    _tabController = new TabController(length: 2, vsync: this);
    super.initState();
  }

  Widget build(BuildContext context) {
    return Column(children: [
      TabBar(
          controller: _tabController,
          labelColor: Colors.white,
          indicator: BoxDecoration(color: Color(0xffDEB124)),
          tabs: [Tab(text: 'Bet slip'), Tab(text: 'Check ticket')]),
      Expanded(
          child: TabBarView(controller: _tabController, children: [
        SingleChildScrollView(child: BetSlip()),
        SingleChildScrollView(child: CheckTicket())
      ]))
    ]);
  }
}

// TabBar(tabs: <Widget>[
//               Tab(text: 'Bet Slip'),
//               Tab(text: 'check ticket')
//             ]),
//             TabBarView(
//               children: <Widget>[BetSlip(), CheckTicket()],
//             )
