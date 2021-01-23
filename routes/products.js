const express = require('express');
const router = express.Router();
const productsService = require('../services/products.service');
const RestResponse = require('../models/rest-response');
const Product = require('../models/product');

router.get('/', async (req, res, next) => {
  const result = await productsService.fetchAll();
  const products = result.rows.map(row => new Product(row));
  res.json(RestResponse.ok(products));
});

router.get('/view', async (req, res, next) => {
  const result = await productsService.fetchAll();
  const products = result.rows.map(row => new Product(row));
  res.render('products', { title: 'Fetched Products', data: products });
});

module.exports = router;
