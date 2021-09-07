import 'package:BettingMobileFlutter/widgets/screens/registration/registrationForm.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../layout/applicationBar.dart';
import '../../layout/bottomNavigationBar.dart';

class Registration extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'General betting',
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: ApplicationBar(),
        body: RegistrationForm(),
        bottomNavigationBar: CustomBottomNavigationBar(),
      ),
    );
  }
}
