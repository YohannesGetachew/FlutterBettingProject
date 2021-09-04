import 'package:BettingMobileFlutter/widgets/shared/formElements/textField.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LoginForm extends StatefulWidget {
  @override
  _LoginForm createState() => _LoginForm();
}

class _LoginForm extends State<LoginForm> {
  final double fieldpadding = 10.0;
  GlobalKey<FormState> formKey = GlobalKey<FormState>();
  Widget build(BuildContext context) {
    return Form(
        key: formKey,
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('Login'),
          Padding(padding: EdgeInsets.only(bottom: fieldpadding)),
          CustomTextField(
            label: 'Phone Number',
            hintText: 'Provide a phone number',
            fieldType: fieldTypes.NUMBER,
          ),
          Padding(padding: EdgeInsets.only(bottom: fieldpadding)),
          CustomTextField(
            label: 'Password',
            hintText: 'Provide your password',
            fieldType: fieldTypes.PASSWORD,
          ),
          Padding(padding: EdgeInsets.only(bottom: fieldpadding)),
          ElevatedButton(onPressed: handleSubmit, child: null)
        ]));
  }

  void handleSubmit() {
    return validateForm();
  }

  void validateForm() {
    if (formKey.currentState.validate()) {
      print('validated');
    } else {
      print("not validated");
    }
  }
}
