const express = require('express');
const { registerPhotoActions } = require('./api/photos-controller');
const { registerUserActions } = require('./api/user-controller');

const app = express();
app.use(express.json());

registerPhotoActions(app);
registerUserActions(app);

module.exports = { app };