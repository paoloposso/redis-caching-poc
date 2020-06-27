const express = require('express');
const { registerPhotoActions } = require('./api/photos-controller');
const { registerUserActions } = require('./api/user-controller');

const app = express();
app.use(express.json());

registerPhotoActions(app);
registerUserActions(app);

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

module.exports = { app };