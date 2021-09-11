import 'package:BettingMobileFlutter/data/model/auth.dart';
import 'package:equatable/equatable.dart';

abstract class UserEvent extends Equatable {
  UserEvent();

  @override
  List<Object> get props => null;
}

class LoginEvent extends UserEvent {
  final String username;
  final String password;
  // final Map<String, dynamic> variables;

  LoginEvent(this.username, this.password) : super();

  @override
  List<Object> get props => [username, password];
}
