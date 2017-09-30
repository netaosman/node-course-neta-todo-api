//import the mongo lib.
// const MongoClient = require('mongodb').MongoClient;

//another code for the first line:
const {MongoClient, ObjectID} = require('mongodb');

//the url, create a name for the database or connect for exist (TodoApp).
var url = 'mongodb://localhost:27017/TodoApp';
//connect to the datbase:
MongoClient.connect(url, (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todo').find({
    //     _id: new ObjectID('59cfa9d0439870b301d40b92')
    // }).toArray().then((docs) =>{
    //     console.log('Todo: ');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fatch todo', err);
    // })


    // db.collection('Todo').find().count().then((count) => {
    //     console.log('Todo count: ');
    //     console.log(count);
    // }, (err) =>{
    //     console.log('Unable to fatch todo', err);
    // });

    db.collection('Users').find({name: 'Neta'}).toArray().then((docs) => {
        console.log('Todo: ');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable...');
    });

    // db.close();
});