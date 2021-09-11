import 'package:flutter/material.dart';

class CustomBottomNavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      backgroundColor: Color(0xffCE9222),
      selectedItemColor: Color(0xff243243),
      onTap: (val) {
        Navigator.pop(context);
        if (val == 0) {
          return Navigator.pushNamed(context, '/login');
        } else if (val == 1) {
          return Navigator.pushNamed(context, '/ticket');
        } else {
          return Navigator.pushNamed(context, '/registration');
        }
      },
      items: [
        BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
            backgroundColor: Color(0xff1F282F)),
        BottomNavigationBarItem(
            icon: Icon(Icons.description),
            label: 'Ticket',
            backgroundColor: Color(0xff1F282F)),
        BottomNavigationBarItem(
            icon: Icon(Icons.contact_mail),
            label: 'Contact us',
            backgroundColor: Color(0xff1F282F))
      ],
    );
  }
}
