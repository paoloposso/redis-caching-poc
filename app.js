const express = require('express');
const { registerPhotoActions } = require('./api/photos-controller');
const { registerUserActions } = require('./api/user-controller');
const { connectToMongoDb } = require('./infrastructure/db/mongo/mongo-connect');

const app = express();
app.use(express.json());

connectToMongoDb();

registerPhotoActions(app);
registerUserActions(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening on port', port)
});
