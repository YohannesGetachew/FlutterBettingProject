import 'package:BettingMobileFlutter/widgets/screens/Ticket/ticket.dart';
import 'package:BettingMobileFlutter/widgets/screens/betting/betting.dart';
import 'package:BettingMobileFlutter/widgets/screens/home/home.dart';
import 'package:BettingMobileFlutter/widgets/screens/login/login.dart';
import 'package:BettingMobileFlutter/widgets/screens/registration/registration.dart';
import 'package:flutter/material.dart';

class Routes {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => Home(Betting()));
      case '/registration':
        return MaterialPageRoute(builder: (_) => Home(Registration()));
      case '/login':
        return MaterialPageRoute(builder: (_) => Home(Login()));
      case '/ticket':
        return MaterialPageRoute(builder: (_) => Home(Ticket()));
      default:
        return MaterialPageRoute(
            builder: (_) => Scaffold(
                  body: Center(
                      child: Text('No route defined for ${settings.name}')),
                ));
    }
  }
}
