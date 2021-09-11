import 'package:BettingMobileFlutter/business_logic/login/login_bloc.dart';
import 'package:BettingMobileFlutter/business_logic/login/login_state.dart';
import 'package:BettingMobileFlutter/business_logic/user/user_bloc.dart';
import 'package:BettingMobileFlutter/business_logic/user/user_state.dart';
import 'package:BettingMobileFlutter/data/model/auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class ApplicationBar extends StatelessWidget implements PreferredSizeWidget {
  // final UserBloc userBloc = UserBloc();
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<LoginBloc, LoginState>(
        builder: (BuildContext loginBlocContext, LoginState loginState) {
      return AppBar(
        title: Image.asset(
          'assets/soccer-ball.png',
          width: 35.0,
        ),
        backgroundColor: Color(0xff1F282F),
        elevation: 6.0,
        actions: [getIcons(loginState.authData != null, context)],
      );
    });
  }

  Widget getIcons(isLoggedIn, context) {
    if (isLoggedIn) {
      return IconButton(icon: Icon(Icons.person), onPressed: () => {});
    }
    return Row(children: [
      IconButton(
          icon: Icon(Icons.login),
          onPressed: () {
            Navigator.pop(context);
            return Navigator.pushNamed(context, '/login', arguments: null);
          }),
      IconButton(
          icon: Icon(Icons.add),
          onPressed: () {
            Navigator.pop(context);
            Navigator.pushNamed(context, '/registration', arguments: null);
          }),
    ]);
  }

  @override
  Size get preferredSize =>
      new Size.fromHeight(new AppBar().preferredSize.height);
}
