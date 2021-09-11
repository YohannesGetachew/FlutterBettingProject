import 'package:BettingMobileFlutter/widgets/screens/home/home.dart';
import 'package:BettingMobileFlutter/widgets/screens/registration/registrationForm.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Registration extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: SingleChildScrollView(child: RegistrationForm()),
      padding: EdgeInsets.all(15.0),
    );
  }
}
