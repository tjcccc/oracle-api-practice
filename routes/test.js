var express = require('express');
var router = express.Router();
var connect = require('../connect');

router.get('/test', function(req, res, next) {
  connect.test().then(result => {
    res.send(result);
    next();
  })
});

module.exports = router;
