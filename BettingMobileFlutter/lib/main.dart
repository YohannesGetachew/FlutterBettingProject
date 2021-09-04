import 'package:BettingMobileFlutter/widgets/screens/Ticket/tickets.dart';
import 'package:BettingMobileFlutter/widgets/screens/login/login.dart';
import 'package:flutter/material.dart';
import 'package:get_it/get_it.dart';
import 'package:BettingFerryClient/BettingFerryClient.dart';

void main() {
  // GetIt.instance.registerSingleton(initClient('http://10.0.2.2:9852/graphql'));
  runApp(Login());
}
