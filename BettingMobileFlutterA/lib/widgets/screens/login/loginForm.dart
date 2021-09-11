import 'package:BettingMobileFlutter/business_logic/user/user_bloc.dart';
import 'package:BettingMobileFlutter/business_logic/user/user_event.dart';
import 'package:BettingMobileFlutter/business_logic/user/user_state.dart';
import 'package:BettingMobileFlutter/widgets/shared/buttons/submitButton.dart';
import 'package:BettingMobileFlutter/widgets/shared/buttons/customTextButton.dart';
import 'package:BettingMobileFlutter/widgets/shared/formElements/textField.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class LoginForm extends StatefulWidget {
  @override
  _LoginForm createState() => _LoginForm();
}

class _LoginForm extends State<LoginForm> {
  final double fieldpadding = 20.0;
  final userBloc = UserBloc();
  String username;
  String password;
  GlobalKey<FormState> formKey = GlobalKey<FormState>();
  Widget build(BuildContext context) {
    return BlocBuilder<UserBloc, UserState>(
      bloc: userBloc,
      builder: (BuildContext context, UserState state) {
        // if (state is Loading) {
        //   return LinearProgressIndicator();
        // if (state is LoadDataFail) {
        //   return Center(child: Text('Login Failed'));
        // } else {
        // data = (state as LoadDataSuccess).authData;
        return Form(
            key: formKey,
            child:
                Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Center(
                child: Text('Login',
                    style:
                        TextStyle(fontWeight: FontWeight.bold, fontSize: 35.0)),
              ),
              state is LoadDataFail
                  ? AlertDialog(title: Text('Login Failed Please try again !'))
                  : Container(),
              Padding(padding: EdgeInsets.only(bottom: 25.0)),
              CustomTextField(
                  label: 'Phone Number',
                  hintText: 'Provide a phone number',
                  fieldType: fieldTypes.NUMBER,
                  onSaved: (value) {
                    username = value;
                  }),
              Padding(padding: EdgeInsets.only(bottom: fieldpadding)),
              CustomTextField(
                  label: 'Password',
                  hintText: 'Provide your password',
                  fieldType: fieldTypes.PASSWORD,
                  onSaved: (value) {
                    password = value;
                  }),
              Padding(padding: EdgeInsets.only(bottom: fieldpadding)),
              SubmitButton(
                  onSubmit: () => handleSubmit((username, password) =>
                      userBloc..add(LoginEvent(username, password))),
                  label: 'Login',
                  isSubmitting: false),
              Padding(padding: EdgeInsets.only(bottom: 7.0)),
              Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                CustomTextButton(
                    text: 'Forgot password ?', onPressed: () => {}),
                CustomTextButton(
                    text: 'Don\'t have an account? Signup', onPressed: () => {})
              ]),
            ]));
        // }
      },
    );
  }

  void handleSubmit(loginEvent) {
    if (formKey.currentState.validate()) {
      formKey.currentState.save();
      loginEvent(username, password);
      Navigator.pushNamed(context, '/');
    } else {
      print("not validated");
    }
  }
}
