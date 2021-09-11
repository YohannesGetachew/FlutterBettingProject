import 'package:BettingMobileFlutter/data/model/auth.dart';
import 'package:BettingMobileFlutter/data/model/login_response.dart';
import 'package:BettingMobileFlutter/data/model/user.dart';
import 'package:BettingMobileFlutter/data/provider/user/userProvider.dart';
import 'package:BettingMobileFlutter/data/response/baseReponse.dart';

class UserRepository {
  UserProvider userProvider;

  UserRepository() {
    userProvider = UserProvider();
  }

  Future<BaseResponse> getUsers() async {
    final usersRaw = await userProvider.getUsersRaw();
    if (usersRaw.hasException)
      return BaseResponse.handleResponseErrors(usersRaw);
    final usersRawData = usersRaw.data['users'];
    List<User> users =
        usersRawData.map((user) => User.fromJson(user)).toList().cast<User>();
    return BaseResponse(data: users, hasException: false);
  }

  Future<BaseResponse> isUserExist({username}) async {
    final userExistRaw = await userProvider
        .isUserExist(<String, dynamic>{'phoneNumber': username});
    if (userExistRaw.hasException) {
      return BaseResponse.handleResponseErrors(userExistRaw,
          customErrorMessage: 'Error logging in, user not found');
    }
    final loggedInUser = userExistRaw.data['isUserExists'];
    User user = User.fromJson(loggedInUser);
    return BaseResponse(data: user, hasException: false);
  }

  Future<BaseResponse> login({username, password}) async {
    final loggedInDataRaw = await userProvider
        .login(<String, dynamic>{'username': username, 'password': password});
    if (loggedInDataRaw.hasException) {
      // return BaseResponse.handleResponseErrors(loggedInDataRaw,
      //     customErrorMessage: 'Error logging in');
      throw Exception('Failed to login');
    }

    final BaseResponse userExistResponse =
        await isUserExist(username: username);

    final loggedInData = loggedInDataRaw.data['login'];
    LoginResponse loginResponse = LoginResponse.fromJson(loggedInData);

    return BaseResponse(
        data: Auth(loginResponse: loginResponse, user: userExistResponse.data),
        hasException: false);
  }
}
