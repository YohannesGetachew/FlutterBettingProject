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
