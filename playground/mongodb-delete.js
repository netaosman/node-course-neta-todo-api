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

    //deleteMany
    db.collection('Todo').deleteMany({text: 'eat lunch'}).then((result) =>{
        console.log(result);
    })

    //deleteOne
    db.collection('Todo').deleteOne({ text: 'eat lunch' }).then((result) => {
        console.log(result);
    })

    //findOneDelete
    db.collection('Todo').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    })

    // db.close();
});