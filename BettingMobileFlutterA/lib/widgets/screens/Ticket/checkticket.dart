import 'package:BettingMobileFlutter/widgets/shared/buttons/submitButton.dart';
import 'package:BettingMobileFlutter/widgets/shared/formElements/textField.dart';
import 'package:flutter/material.dart';

class CheckTicket extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(padding: EdgeInsets.all(10.0)),
        CustomTextField(
          label: 'Ticket ID',
          hintText: 'Enter ticket ID',
        ),
        Padding(padding: EdgeInsets.all(15.0)),
        SubmitButton(
          label: 'Check ticket',
          isSubmitting: false,
          onSubmit: () => {},
        ),
      ],
    );
  }
}
