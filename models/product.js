class Product {
  constructor(data) {
    this.productId = data.PRODUCT_ID;
    this.productName = data.PRODUCT_NAME;
    this.description = data.DESCRIPTION;
    this.standardCost = data.STANDARD_COST;
    this.listPrice = data.LIST_PRICE;
    this.categoryId = data.CATEGORY_ID;
  }
}

module.exports = Product;
