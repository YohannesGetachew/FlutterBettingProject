class LoginResponse {
  String accessToken;
  String refreshToken;
  String tokenType;
  double expiresIn;
  LoginResponse(
      {this.accessToken, this.refreshToken, this.tokenType, this.expiresIn});

  LoginResponse.fromJson(Map<String, dynamic> json) {
    accessToken = json['accessToken'];
    refreshToken = json['refreshToken'];
    tokenType = json['tokenType'];
    expiresIn = json['expiresIn'].toDouble();
  }

  Map toJson() {
    Map data = {};
    data['accessToken'] = accessToken;
    data['refreshToken'] = refreshToken;
    data['tokenType'] = tokenType;
    data['expiresIn'] = expiresIn;
    return data;
  }
}
