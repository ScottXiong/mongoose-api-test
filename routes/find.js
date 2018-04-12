var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('find', { title: 'dashboard' });
  MyModel.findOne(function(error, result) { console.log('haha'+1) });
    res.render('find', { title: 'insert' });
  });

module.exports = router;
