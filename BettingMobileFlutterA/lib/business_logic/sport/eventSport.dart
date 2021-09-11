import 'package:equatable/equatable.dart';

abstract class SportEvent extends Equatable {
  SportEvent();

  @override
  List<Object> get props => null;
}

class FetchSportData extends SportEvent {
  final String query;
  // final Map<String, dynamic> variables;

  FetchSportData(this.query) : super();

  @override
  List<Object> get props => [query];
}
