var express = require('express');
var router = express.Router();
var connect = require('../connect');

router.get('/test', function(req, res, next) {
  connect.run().then(result => {
    res.send(result);
  })
});

module.exports = router;
