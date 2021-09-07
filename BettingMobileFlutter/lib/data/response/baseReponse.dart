import 'package:graphql/client.dart';

class BaseResponse {
  Map<dynamic, OperationException> exception;
  bool hasException = false;
  // bool isLoading;
  dynamic data;
  String customError;

  BaseResponse(
      {this.hasException,
      this.exception,
      // this.isLoading,
      this.data,
      this.customError});

  static BaseResponse handleResponseErrors(data, {customErrorMessage}) {
    if (data.exception.graphqlErrors) {
      print('graphQLErrors: ${data.exception.graphqlErrors.toString()}');
      print('clientErrors: ${data.exception.clientException.toString()}');
      return BaseResponse(
          hasException: true,
          customError:
              customErrorMessage ? customErrorMessage : "Something went wrong");
    } else {
      return BaseResponse(
          hasException: true,
          customError: customErrorMessage
              ? customErrorMessage
              : "Network error occured");
    }
  }
}
