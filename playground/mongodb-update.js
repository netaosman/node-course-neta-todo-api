//import the mongo lib.
// const MongoClient = require('mongodb').MongoClient;

//another code for the first line:
const { MongoClient, ObjectID } = require('mongodb');

//the url, create a name for the database or connect for exist (TodoApp).
var url = 'mongodb://localhost:27017/TodoApp';
//connect to the datbase:
MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

db.collection('Todo').findOneAndUpdate({
    _id: new ObjectID('59cfa9d0439870b301d40b92')
}, {
   $set:{
   completed: true
   }
}, {
    returnOrigenal: false
}).then((result) => {
    console.log(result);
});
    // db.close();
});