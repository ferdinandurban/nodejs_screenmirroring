var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var date = new Date()
  res.render('index', { title: 'KMLE Wcc Screencasting ' + date });
});

setInterval(function(){
  var client = require('scp2');
  client.scp({
    // host: '192.168.10.143',
    host: '10.0.1.13',
    username: 'omapuser',
    password: 'omapuser',
    path: '/home/omapuser/Pictures/picture.png'
  }, './public/images/', function(err) {
    if(err) throw err;
    else {
      console.log("picture copied.");
    }
  });
}, 1000);


module.exports = router;
