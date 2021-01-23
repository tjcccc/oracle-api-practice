const connect = require('../connect');

const fetchAllQuery = `SELECT * FROM OT.PRODUCTS ORDER BY PRODUCT_ID ASC FETCH FIRST 30 ROWS ONLY`;

const productsService = {
  fetchAll: async () => {
    return connect.withQuery(fetchAllQuery);
  }
}

module.exports = productsService;
