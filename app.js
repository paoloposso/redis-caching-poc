const express = require('express');
const { registerUserActions } = require('./api/user-controller');

const app = express();
app.use(express.json());

registerUserActions(app);

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

console.log('env', process.env.NODE_ENV);

module.exports = { app };