var express = require('express');
var router = express.Router();
var MyModel=require('./model.js')
/* GET home page. */

function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
     var c = str.charCodeAt(i);
    //单字节加1
     if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
       len++;
     }
     else {
      len+=2;
     }
    }
    return len;
}

router.get('/', function(req, res, next) {
  MyModel.find(function(error, result) {
    if (error) {
      console.error('查询数据库失败');
    }else{
      console.log('result:',typeof(result));

     Object.keys(result).forEach((i)=>{
       var str=result[i].txt
       if (strlen(str)>240) {
         result[i].txt=result[i].txt.slice(0,240)+'...'
       }else {
         result[i].txt=result[i].txt
       }
       console.log('xx',result[i])
     })
      var data={
        code:200,
        result
      }
      res.render('find', { title: 'admin',data});
    }
  });
});

module.exports = router;
