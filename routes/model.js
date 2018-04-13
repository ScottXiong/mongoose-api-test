var mongoose=require('mongoose');
mongoose.connect("mongodb://45.32.73.24/test");
var schema = new mongoose.Schema({
  tag: 'string',
  txt: 'string',
  createTime:'date'
});
var MyModel= mongoose.model('English_sentences', schema);
module.exports = MyModel;
