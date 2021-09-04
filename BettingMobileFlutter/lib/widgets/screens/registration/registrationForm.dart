import 'package:BettingMobileFlutter/widgets/shared/formElements/textField.dart';
import 'package:flutter/material.dart';

class RegistrationForm extends StatefulWidget {
  @override
  _RegistrationForm createState() => _RegistrationForm();
}

class _RegistrationForm extends State<RegistrationForm> {
  final double fieldPadding = 10.0;

  GlobalKey<FormState> formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Form(
        key: formKey,
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(
            'Registration',
          ),
          Padding(padding: EdgeInsets.only(bottom: 20.0)),
          CustomTextField(
            hintText: 'Enter First Name',
            label: 'First Name',
            fieldType: fieldTypes.NAME,
          ),
          Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
          CustomTextField(
            hintText: 'Enter LastName',
            label: 'Last Name',
            fieldType: fieldTypes.NAME,
          ),
          Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
          CustomTextField(
              hintText: 'Enter Phone Number',
              label: 'Phone Number',
              fieldType: fieldTypes.NUMBER),
          Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
          CustomTextField(
            hintText: 'Enter Password',
            label: 'Password',
            fieldType: fieldTypes.PASSWORD,
          ),
          Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
          CustomTextField(
            hintText: 'Confirm Password',
            label: 'Confirm Password',
            fieldType: fieldTypes.PASSWORD,
          ),
          Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
          ElevatedButton(onPressed: handleSubmit, child: null)
        ]));
  }

  void handleSubmit() {
    return validateForm();
  }

  void validateForm() => {
        if (formKey.currentState.validate())
          {print('/////validated////')}
        else
          {print('/////not validated////')}
      };
}
