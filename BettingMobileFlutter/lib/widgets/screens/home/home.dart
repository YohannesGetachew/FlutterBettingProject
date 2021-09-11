import 'package:BettingMobileFlutter/business_logic/login/login_bloc.dart';
import 'package:BettingMobileFlutter/data/repository/userRepository.dart';
import 'package:BettingMobileFlutter/widgets/layout/applicationBar.dart';
import 'package:BettingMobileFlutter/widgets/layout/bottomNavigationBar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:provider/provider.dart';

class Home extends StatefulWidget {
  final Widget bodyWidget;
  @override
  State<StatefulWidget> createState() => _Home();

  Home(this.bodyWidget);
}

class _Home extends State<Home> {
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (BuildContext context) =>
          LoginBloc(userRepository: context.read<UserRepository>()),
      child: Scaffold(
        appBar: ApplicationBar(),
        body: widget.bodyWidget,
        bottomNavigationBar: CustomBottomNavigationBar(),
      ),
    );
  }
}
