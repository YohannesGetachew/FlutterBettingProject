import 'package:BettingMobileFlutter/business_logic/sport/blocSport.dart';
import 'package:BettingMobileFlutter/business_logic/sport/sport.dart';
import 'package:BettingMobileFlutter/data/model/user.dart';
import 'package:BettingMobileFlutter/widgets/shared/formElements/textField.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class RegistrationForm extends StatefulWidget {
  @override
  _RegistrationForm createState() => _RegistrationForm();
}

class _RegistrationForm extends State<RegistrationForm> {
  final double fieldPadding = 10.0;
  List<User> data = [];
  GlobalKey<FormState> formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<SportBloc, SportState>(
      builder: (BuildContext context, SportState state) {
        if (state is Loading) {
          return Scaffold(
            // appBar: _buildAppBar(),
            body: LinearProgressIndicator(),
          );
        } else if (state is LoadDataFail) {
          return Scaffold(
            // appBar: _buildAppBar(),
            body: Center(child: Text(state.error)),
          );
        } else {
          data = (state as LoadDataSuccess).data;
          return Scaffold(
            // appBar: _buildAppBar(),
            body: Text(data[1].firstName),
          );
        }
      },
    );
    // return Form(
    //     key: formKey,
    //     child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
    //       Text(
    //         'Registration',
    //       ),
    //       Padding(padding: EdgeInsets.only(bottom: 20.0)),
    //       CustomTextField(
    //         hintText: 'Enter First Name',
    //         label: 'First Name',
    //         fieldType: fieldTypes.NAME,
    //       ),
    //       Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
    //       CustomTextField(
    //         hintText: 'Enter LastName',
    //         label: 'Last Name',
    //         fieldType: fieldTypes.NAME,
    //       ),
    //       Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
    //       CustomTextField(
    //           hintText: 'Enter Phone Number',
    //           label: 'Phone Number',
    //           fieldType: fieldTypes.NUMBER),
    //       Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
    //       CustomTextField(
    //         hintText: 'Enter Password',
    //         label: 'Password',
    //         fieldType: fieldTypes.PASSWORD,
    //       ),
    //       Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
    //       CustomTextField(
    //         hintText: 'Confirm Password',
    //         label: 'Confirm Password',
    //         fieldType: fieldTypes.PASSWORD,
    //       ),
    //       Padding(padding: EdgeInsets.only(bottom: fieldPadding)),
    //       ElevatedButton(onPressed: handleSubmit, child: null)
    //     ]));
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
