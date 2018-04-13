var express = require('express');
var router = express.Router();
var MyModel=require('./model.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  MyModel.find(function(error, result) {
    if (error) {
      console.error('查询数据库失败');
    }else{
      console.log('result:',typeof(result));
      console.log(result['txt']);

      var data={
        code:200,
        result
      }
      console.log(typeof(data.result))
      res.render('find', { title: 'admin',data});
    }
  });
});

module.exports = router;
