import 'package:BettingMobileFlutter/business_logic/form/form_submission_status.dart';
import 'package:BettingMobileFlutter/business_logic/login/login_event.dart';
import 'package:BettingMobileFlutter/business_logic/login/login_state.dart';
import 'package:BettingMobileFlutter/data/repository/userRepository.dart';
import 'package:BettingMobileFlutter/data/response/baseReponse.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class LoginBloc extends Bloc<LoginEvent, LoginState> {
  final UserRepository userRepository;

  LoginBloc({this.userRepository}) : super();

  @override
  LoginState get initialState => LoginState();

  @override
  Stream<LoginState> mapEventToState(LoginEvent event) async* {
    if (event is LoginUserNameChanged) {
      yield state.setLoginState(username: event.username);
    } else if (event is LoginPasswordChanged) {
      yield state.setLoginState(password: event.password);
    } else if (event is LoginSubmitted) {
      yield state.setLoginState(formSubmissionStatus: FormSubmitting());
      try {
        BaseResponse loginResponse = await userRepository.login(
            username: event.username, password: event.password);
        yield state.setLoginState(
            formSubmissionStatus: FormSubmissionSuccess(),
            authData: loginResponse.data);
      } catch (exception) {
        yield state.setLoginState(
            formSubmissionStatus: FormSubmissionFailed(exception));
      }
    }
  }
}
