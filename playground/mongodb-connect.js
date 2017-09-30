//import the mongo lib.
// const MongoClient = require('mongodb').MongoClient;

//another code for the first line:
const {MongoClient} = require('mongodb');

//the url, create a name for the database or connect for exist (TodoApp).
var url = 'mongodb://localhost:27017/TodoApp';
//connect to the datbase:
MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todo').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));

    // });

    db.collection('Users').insertOne({
        name: 'Neta',
        age: 25,
        location: 'Israel'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops);
    });

    db.close();
});