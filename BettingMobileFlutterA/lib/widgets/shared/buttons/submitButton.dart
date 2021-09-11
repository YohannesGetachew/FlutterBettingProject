import 'package:flutter/material.dart';

class SubmitButton extends StatelessWidget {
  final onSubmit;
  final String label;
  final bool isSubmitting;
  final Color bgColor;
  final Color textColor;

  SubmitButton(
      {this.onSubmit,
      this.label,
      this.isSubmitting,
      this.bgColor,
      this.textColor});

  Widget build(BuildContext context) {
    return FractionallySizedBox(
        widthFactor: 1,
        child: SizedBox(
            width: 50.0,
            height: 50.0,
            child: ElevatedButton(
              onPressed: onSubmit,
              child: getSubmitText(isSubmitting, label),
              style: ElevatedButton.styleFrom(
                  primary: bgColor != null ? bgColor : Color(0xffEEB20C),
                  onPrimary: textColor != null ? textColor : Colors.white),
            )));
  }

  Widget getSubmitText(isSubmitting, label) {
    if (isSubmitting) {
      return SizedBox(
          width: 15.0,
          height: 15.0,
          child: CircularProgressIndicator(
            valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
            strokeWidth: 2.0,
          ));
    }
    return Text(label);
  }
}
