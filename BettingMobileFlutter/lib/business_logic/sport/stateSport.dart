import 'package:equatable/equatable.dart';

abstract class SportState extends Equatable {
  SportState();

  @override
  List<Object> get props => null;
}

class Loading extends SportState {
  Loading() : super();
}

class LoadDataSuccess extends SportState {
  final dynamic data;

  LoadDataSuccess(this.data) : super();

  @override
  List<Object> get props => data;
}

class LoadDataFail extends SportState {
  final dynamic error;

  LoadDataFail(this.error) : super();

  @override
  List<Object> get props => error;
}
