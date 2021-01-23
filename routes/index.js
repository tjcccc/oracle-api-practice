const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send('Hello, Oracle.');
  res.render('index', { title: 'Oracle API Practice' })
  next();
});

module.exports = router;
