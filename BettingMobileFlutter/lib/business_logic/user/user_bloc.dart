import 'package:BettingMobileFlutter/business_logic/user/user_event.dart';
import 'package:BettingMobileFlutter/business_logic/user/user_state.dart';
import 'package:BettingMobileFlutter/data/repository/leaguesRepository.dart';
import 'package:BettingMobileFlutter/data/response/baseReponse.dart';
import 'package:BettingMobileFlutter/data/repository/userRepository.dart';
import 'package:bloc/bloc.dart';

class UserBloc extends Bloc<UserEvent, UserState> {
  UserRepository repository;
  LeagueRepository leagueRepo;

  UserBloc() {
    repository = UserRepository();
    leagueRepo = LeagueRepository();
  }

  @override
  UserState get initialState => Loading();

  @override
  Stream<UserState> mapEventToState(UserEvent event) async* {
    if (event is LoginEvent) {
      yield* _mapFetchHomeDataToStates(event);
    }
  }

  Stream<UserState> _mapFetchHomeDataToStates(LoginEvent event) async* {
    try {
      final BaseResponse loginResult = await repository.login(
          username: event.username, password: event.password);
      print(loginResult.data.user.firstName);
      if (loginResult.hasException) {
        yield LoadDataFail(loginResult.customError);
      } else if (loginResult.data.user.role != 'CUSTOMER') {
        yield LoadDataFail(loginResult.customError);
      } else {
        yield LoadDataSuccess(loginResult.data);
      }
    } catch (e) {
      print(e);
      yield LoadDataFail(e.toString());
    }
  }
}
