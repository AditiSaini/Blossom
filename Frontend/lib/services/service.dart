import 'dart:convert';
import 'package:http/http.dart' as http;
import '../user.dart';

String url = 'http://192.168.1.101:3000/login';

Future<User> login(String email, String password) async {
  print("Username: " + email);
  print("Password: " + password);
  var response =
      await http.post(url, body: {'email': email, 'password': password});

  if (response.statusCode == 200) {
    print(response.body);
    return User.fromJson(json.decode(response.body));
  } else {
    throw Exception('Failed to login');
  }
}
