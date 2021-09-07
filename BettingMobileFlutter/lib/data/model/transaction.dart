import 'package:BettingMobileFlutter/data/model/user.dart';
// import 'package:BettingMobileFlutter/data/model/tempModels/shop.dart';

class Transaction {
  String id;
  String createdAt;
  String updatedAt;
  String type;
  double amount;
  User customer;
  User cashier;
  double balanceAfterTransaction;
  // Shop shop;
  Transaction({
    this.id,
    this.createdAt,
    this.updatedAt,
    this.type,
    this.amount,
    this.customer,
    this.cashier,
    this.balanceAfterTransaction,
    // this.shop
  });

  Transaction.fromJson(Map<String, dynamic> json) {
    id = json['_id'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    type = json['type'];
    amount = json['amount'];
    customer =
        json['customer'] != null ? User.fromJson(json['customer']) : null;
    cashier = json['cashier'] != null ? User.fromJson(json['cashier']) : null;
    balanceAfterTransaction = json['balanceAfterTransaction'];
    // shop = json['shop'] != null ? Shop.fromJson(json['shop']) : null;
  }

  Map toJson() {
    Map data = {};
    data['_id'] = id;
    data['createdAt'] = createdAt;
    data['updatedAt'] = updatedAt;
    data['type'] = type;
    data['amount'] = amount;
    data['customer'] = customer?.toJson();
    data['cashier'] = cashier?.toJson();
    data['balanceAfterTransaction'] = balanceAfterTransaction;
    // data['shop'] = shop?.toJson();
    return data;
  }
}
