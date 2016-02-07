var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("sending image...");
  res.send("<img src='/images/picture.png'>");     
});

module.exports = router;