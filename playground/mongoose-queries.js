
//import the models
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const  {Todo}  = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');


var id = '59d0d45a94419597aa670c21';

// var id = '59cff6759aea0f600c4ad550';

//check if the id is valid.
// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// //find all the document
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
// //find one document
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
// //find doc by id
// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((err) => console.log(err));

User.findById(id).then((user) => {
    if (!user) {
       return console.log('ID not found');
    }
    console.log('Todo by id', user);
}, (err) => {
    console.log(err);
});

