const { app } = require('./app');
const { connectToMongoDb } = require('./infrastructure/db/mongo/mongo-connect');

connectToMongoDb('userstest');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));