// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

    if (err) {
        console.log('Unable to connect to mongodb server');
        return;
    }
    console.log('Connected to mongodb server');

    var db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
      name: 'Madhav Kauntia',
      age: 20,
      location: 'Mango, Jamshedpur'
    }, (err, result) => {
      if (err) {
        return console.log('Unable to insert', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});
