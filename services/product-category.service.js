const connect = require('../connect');

const fetchAllQuery = `SELECT * FROM OT.PRODUCT_CATEGORIES ORDER BY CATEGORY_ID ASC`;

const productCategoryService = {
  fetchAll: async () => {
    return connect.withQuery(fetchAllQuery);
  }
}

module.exports = productCategoryService;
