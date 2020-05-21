class User {
  final String email;
  final String role;
  final String accessToken;

  User({this.email, this.role, this.accessToken});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
        email: json['data']['email'],
        role: json['data']['role'],
        accessToken: json['accessToken']);
  }
}
