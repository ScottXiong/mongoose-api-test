var express = require('express');
var router = express.Router();
var MyModel= require('./model.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(MyModel)
  var doc= new MyModel({
    tag: 'polite',
    txt:"Attached is the ai file for the flat art of the PDQ.  Thank you in advance for everything!  And, thank you for your patience."
  });
  doc.save(function(err,docs){
    if (err) {
      console.error('failed to save');
    }
    console.log(docs)
    res.render('insert', { title: 'insert' });
  });
});

module.exports = router;
