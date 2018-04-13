var express = require('express');
var router = express.Router();
var MyModel= require('./model.js');

/* GET home page. */
router.post('/', function(req, res, next) {
  var doc= new MyModel({
    tag: req.body.tag,
    txt:req.body.txt,
    createTime:new Date().getTime()
  });
  console.log(req)
  doc.save(function(err,docs){
    if (err) {
      console.error('failed to save');
    }
    console.log(docs)
    res.redirect('/');
  });
});

module.exports = router;
