const express = require('express');
const { registerPhotoActions } = require('./api/photos-controller');
const { registerUserActions } = require('./api/user-controller');

const app = express();
app.use(express.json());

registerPhotoActions(app);
registerUserActions(app);

const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = { app };