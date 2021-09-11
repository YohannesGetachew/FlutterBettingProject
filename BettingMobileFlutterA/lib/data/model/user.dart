class User {
  String id;
  String createdAt;
  String updatedAt;
  String firstName;
  String lastName;
  String username;
  String usernameType;
  bool isVerified;
  bool isActive;
  bool isLocked;
  String role;
  double accountBalance;
  String profileImage;
  String belongsToShop;
  List<String> cashierPermissions;
  User(
      {this.id,
      this.createdAt,
      this.updatedAt,
      this.firstName,
      this.lastName,
      this.username,
      this.usernameType,
      this.isVerified,
      this.isActive,
      this.isLocked,
      this.role,
      this.accountBalance,
      this.profileImage,
      this.belongsToShop,
      this.cashierPermissions});

  User.fromJson(Map<String, dynamic> json) {
    id = json['_id'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    firstName = json['firstName'];
    lastName = json['lastName'];
    username = json['username'];
    usernameType = json['usernameType'];
    isVerified = json['isVerified'];
    isActive = json['isActive'];
    isLocked = json['isLocked'];
    role = json['role'];
    accountBalance = json['accountBalance'].toDouble();
    profileImage = json['profileImage'];
    belongsToShop = json['belongsToShop'];
    cashierPermissions = List.generate(json['cashierPermissions'].length,
        (index) => json['cashierPermissions'][index]);
  }

  Map toJson() {
    Map data = {};
    data['_id'] = id;
    data['createdAt'] = createdAt;
    data['updatedAt'] = updatedAt;
    data['firstName'] = firstName;
    data['lastName'] = lastName;
    data['username'] = username;
    data['usernameType'] = usernameType;
    data['isVerified'] = isVerified;
    data['isActive'] = isActive;
    data['isLocked'] = isLocked;
    data['role'] = role;
    data['accountBalance'] = accountBalance;
    data['profileImage'] = profileImage;
    data['belongsToShop'] = belongsToShop;
    data['cashierPermissions'] = List.generate(
        cashierPermissions?.length ?? 0, (index) => cashierPermissions[index]);
    return data;
  }
}
