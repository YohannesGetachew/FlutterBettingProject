import 'package:BettingMobileFlutter/business_logic/sport/eventSport.dart';
import 'package:BettingMobileFlutter/business_logic/sport/stateSport.dart';
import 'package:BettingMobileFlutter/data/response/baseReponse.dart';
import 'package:BettingMobileFlutter/data/repository/userRepository.dart';
import 'package:bloc/bloc.dart';

class SportBloc extends Bloc<SportEvent, SportState> {
  UserRepository repository;

  SportBloc() {
    repository = UserRepository();
  }

  @override
  SportState get initialState => Loading();

  @override
  Stream<SportState> mapEventToState(SportEvent event) async* {
    if (event is FetchSportData) {
      yield* _mapFetchHomeDataToStates(event);
    }
  }

  Stream<SportState> _mapFetchHomeDataToStates(FetchSportData event) async* {
    final query = event.query;
    // final variables = event.variables ?? null;

    try {
      final BaseResponse result = await repository.getUsers();

      if (result.hasException) {
        yield LoadDataFail(result.customError);
      } else {
        // print(result.data);
        yield LoadDataSuccess(result.data);
      }
    } catch (e) {
      print(e);
      yield LoadDataFail(e.toString());
    }
  }
}
