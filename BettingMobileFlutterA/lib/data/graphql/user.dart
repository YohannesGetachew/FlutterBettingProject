String getUsersQuery = r'''
query GetUsers(
    $firstName: String
    $lastName: String
    $username: String
    $role: Role
  ) {
    users(
      firstName: $firstName
      lastName: $lastName
      username: $username
      role: $role
    ) {
      _id
      firstName
      lastName
      username
      isVerified
      isActive
      profileImage
      createdAt
      updatedAt
      belongsToShop
      cashierPermissions
      role
      usernameType
      accountBalance
    }
  }
''';

String loginMutation = r''' 
mutation Login($username: String!, $password: String!) {
    login(loginInput: { username: $username, password: $password }) {
      accessToken
      tokenType
      expiresIn
    }
  }
''';

String isUserExistQuery = r''' 
  query IsUserExists($phoneNumber: String!) {
    isUserExists(phoneNumber: $phoneNumber) {
      _id
      firstName
      lastName
      username
      isVerified
      isActive
      profileImage
      createdAt
      updatedAt
      belongsToShop
      cashierPermissions
      role
      usernameType
      accountBalance
    }
  }
''';
