import 'package:BettingMobileFlutter/widgets/screens/login/loginForm.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Login extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: SingleChildScrollView(
        child: LoginForm(),
      ),
      padding: EdgeInsets.all(15.0),
    );
  }
}
