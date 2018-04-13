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
var str1="Font Awesome为您提供可缩放的矢量图标，您可以使用CSS所提供的所有特性对它们进行更改，包括：大小、颜色、阴影或者其"
var str="Part of a complete node.js series, including the usage of Express.js and much more! Mongoose is an extremely ";
console.log(strlen(str1))
