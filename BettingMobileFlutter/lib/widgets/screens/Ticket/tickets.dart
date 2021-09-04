import 'package:BettingMobileFlutter/widgets/screens/Ticket/tickettab.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../layout/applicationBar.dart';
import '../../layout/bottomNavigationBar.dart';

class Tickets extends StatelessWidget{
  @override
  Widget build (BuildContext context){
    return MaterialApp(
      title: 'BEtting ticket',
      home:  Scaffold(
        appBar: ApplicationBar(),
        body: TicketTab(),
        bottomNavigationBar: CustomBottomNavigationBar()
      )
    );
  }
}
