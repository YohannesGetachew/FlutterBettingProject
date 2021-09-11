import 'package:BettingMobileFlutter/widgets/layout/applicationBar.dart';
import 'package:BettingMobileFlutter/widgets/layout/bottomNavigationBar.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  final Widget bodyWidget;
  @override
  State<StatefulWidget> createState() => _Home();

  Home(this.bodyWidget);
}

class _Home extends State<Home> {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: ApplicationBar(),
      body: widget.bodyWidget,
      bottomNavigationBar: CustomBottomNavigationBar(),
    );
  }
}
