class Market {
  String id;
  String createdAt;
  String updatedAt;
  String apiId;
  String name;
  double order;
  bool isAvailable;
  Market(
      {this.id,
      this.createdAt,
      this.updatedAt,
      this.id,
      this.name,
      this.order,
      this.isAvailable});

  Market.fromJson(Map<String, dynamic> json) {
    id = json['_id'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    apiId = json['id'];
    name = json['name'];
    order = json['order'];
    isAvailable = json['isAvailable'];
  }

  Map toJson() {
    Map data = {};
    data['_id'] = id;
    data['createdAt'] = createdAt;
    data['updatedAt'] = updatedAt;
    data['id'] = apiId;
    data['name'] = name;
    data['order'] = order;
    data['isAvailable'] = isAvailable;
    return data;
  }
}
