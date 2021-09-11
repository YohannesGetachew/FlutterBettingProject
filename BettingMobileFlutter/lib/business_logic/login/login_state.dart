import 'package:BettingMobileFlutter/business_logic/form/form_submission_status.dart';
import 'package:BettingMobileFlutter/data/model/auth.dart';

class LoginState {
  final String username;
  final String password;
  final FormSubmissionStatus formSubmissionStatus;
  final Auth authData;

  LoginState(
      {this.username = '',
      this.password = '',
      this.formSubmissionStatus = const InitialFormSubmissionStatus(),
      this.authData});

  LoginState setLoginState(
      {String username,
      String password,
      FormSubmissionStatus formSubmissionStatus,
      Auth authData}) {
    return LoginState(
        username: username ?? this.username,
        password: this.password,
        formSubmissionStatus: formSubmissionStatus ?? this.formSubmissionStatus,
        authData: authData ?? this.authData);
  }
}
