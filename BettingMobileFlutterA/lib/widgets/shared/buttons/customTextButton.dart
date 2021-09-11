import 'package:flutter/material.dart';

class CustomTextButton extends StatelessWidget {
  final String text;
  final onPressed;

  CustomTextButton({this.text, this.onPressed});

  Widget build(BuildContext context) {
    return TextButton(onPressed: onPressed, child: Text(text));
  }
}
