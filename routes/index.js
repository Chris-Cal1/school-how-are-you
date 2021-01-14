var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index');
});

router.post('/pageTwo', function(req, res, next) {
  req.session.name = req.body.firstName;
  
  res.render('you', { name: req.session.name });
});

router.get('/pageTree', function(req, res, next) {
  
  
  res.render('youagain', { name: req.session.name });
});

module.exports = router;
