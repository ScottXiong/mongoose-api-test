var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/test");
var schema = new mongoose.Schema({ tag: 'string', txt: 'string' });
var MyModel= mongoose.model('English_sentences', schema);
module.exports = MyModel;
