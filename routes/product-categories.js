const express = require('express');
const router = express.Router();
const productCategoryService = require('../services/product-category.service');
const RestResponse = require('../models/rest-response');
const ProductCategory = require('../models/product-category');

router.get('/', async (req, res, next) => {
  const result = await productCategoryService.fetchAll();
  const categories = result.rows.map(row => new ProductCategory(row));
  res.json(RestResponse.ok(categories));
});

router.get('/view', async (req, res, next) => {
  const result = await productCategoryService.fetchAll();
  const categories = result.rows.map(row => new ProductCategory(row));
  res.render('product-categories', { title: 'Fetched Product Categories', data: categories });
});

module.exports = router;
