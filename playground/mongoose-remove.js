
//import the models
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const  {Todo}  = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
// console.log('Result', result);
// });


var id = "59d0ee0594419597aa671281";

Todo.findOneAndRemove({_id: id}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove(id).then((todo) => {
// console.log(todo);
// });





