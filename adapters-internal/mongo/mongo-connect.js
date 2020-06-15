const mongoose = require('mongoose');

module.exports.connectToMongoDb = () => {

    let mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/testdb';

    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(mongoDB, { useNewUrlParser: true }).then(cnn => console.log(`Mongoose connected to port`, cnn.connections[0].port));

    mongoose.Promise = global.Promise;

    let db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
}