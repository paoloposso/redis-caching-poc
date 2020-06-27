const { app } = require('./app');
const { connectToMongoDb } = require('./infrastructure/db/mongo/mongo-connect');

connectToMongoDb();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));