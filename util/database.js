const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://aadiUserAdmin:699zZESpPArbx9D@cluster0.6tkr2.mongodb.net/<dbname>?retryWrites=true&w=majority'
  )
    .then(result => {
      console.log('Connected!');
      callback(result);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;