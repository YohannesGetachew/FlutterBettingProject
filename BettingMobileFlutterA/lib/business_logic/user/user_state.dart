import 'package:BettingMobileFlutter/data/model/auth.dart';
import 'package:equatable/equatable.dart';

abstract class UserState extends Equatable {
  UserState();

  @override
  List<Object> get props => null;
}

class Loading extends UserState {
  Loading() : super();
}

class LoadDataSuccess extends UserState {
  final Auth authData;

  LoadDataSuccess(this.authData) : super();

  @override
  List<Object> get props => [authData];
}

class LoadDataFail extends UserState {
  final String error;

  LoadDataFail(this.error) : super();

  @override
  List<Object> get props => [error];
}
