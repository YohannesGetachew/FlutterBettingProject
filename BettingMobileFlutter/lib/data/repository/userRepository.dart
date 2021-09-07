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
    print(users);
    return BaseResponse(data: users, hasException: false);
  }
}
