// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if (err) {
        console.log('Unable to connect to mongodb server');
        return;
    }
    console.log('Connected to mongodb server');
    var db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID("5c24ad3fbde5f91cf83c5fe7")}).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
      console.log('Todos Count:', count);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

    //client.close();
});
