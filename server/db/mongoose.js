var mongoose = require('mongoose');
//the url
var url = 'mongodb://localhost:27017/TodoApp';
//connecting
mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = { mongoose};