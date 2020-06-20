const app = require('./app');
const { connectToMongoDb } = require('./infrastructure/db/mongo/mongo-connect');

connectToMongoDb('userstest');

app.listen(port, () => console.log(`Listening on port ${port}`));