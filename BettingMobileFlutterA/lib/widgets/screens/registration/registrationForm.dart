import 'package:BettingMobileFlutter/business_logic/user/user_bloc.dart';
import 'package:BettingMobileFlutter/business_logic/user/user_state.dart';
import 'package:BettingMobileFlutter/data/model/auth.dart';
import 'package:BettingMobileFlutter/widgets/shared/buttons/customTextButton.dart';
import 'package:BettingMobileFlutter/widgets/shared/buttons/submitButton.dart';
import 'package:BettingMobileFlutter/widgets/shared/formElements/textField.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class RegistrationForm extends StatefulWidget {
  @override
  _RegistrationForm createState() => _RegistrationForm();
}

class _RegistrationForm extends State<RegistrationForm> {
  //Auth data;
  final double fieldPadding = 20.0;
  bool isTermsChecked = false;

  GlobalKey<FormState> formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Form(
        key: formKey,
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Center(
            child: Text('Register',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 35.0)),
          ),
          Padding(padding: EdgeInsets.only(bottom: 25.0)),
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
          Padding(padding: EdgeInsets.only(bottom: 5.0)),
          CheckboxListTile(
            title: Text('I agree to all terms an conditions'),
            value: isTermsChecked,
            onChanged: (newValue) {
              setState(() {
                isTermsChecked = !isTermsChecked;
              });
            },
            controlAffinity: ListTileControlAffinity.leading,
            activeColor: Colors.green,
            // checkColor: Colors.blue,
          ),
          SubmitButton(
              onSubmit: handleSubmit, label: 'Register', isSubmitting: false),
          Padding(padding: EdgeInsets.only(bottom: 7.0)),
          CustomTextButton(
              text: 'Already have an account? Sign in', onPressed: () => {}),
        ]));
  }

  void handleSubmit({isTermsChecked, setTermsError}) {
    return validateForm();
  }

  void validateForm({isTermsChecked, setTermsError}) => {
        if (formKey.currentState.validate())
          {print('/////validated////')}
        else
          {print('/////not validated////')}
      };
}

// submitted
// checked

// BlocBuilder<UserBloc, UserState>(
//       builder: (BuildContext context, UserState state) {
        // if (state is Loading) {
        //   return Scaffold(
        //     // appBar: _buildAppBar(),
        //     body: LinearProgressIndicator(),
        //   );
        // } else if (state is LoadDataFail) {
        //   return Scaffold(
        //     // appBar: _buildAppBar(),
        //     body: Center(child: Text(state.error)),
        //   );
        // } else {
        //   // data = (state as LoadDataSuccess).authData;
        //   return Scaffold(
        //     // appBar: _buildAppBar(),
        //     body: Text("worked"),
        //   );
        // }
//       },
//     );
