const express = require('express');
const PhotosService = require('./services/photo-service');
const cache = require('./adapters-internal/caching-redis/redis-caching');
const { registerPhotoActions } = require('./api/photos-controller');
const { connectToMongoDb } = require('./adapters-internal/mongo/mongo-connect');

const app = express();

connectToMongoDb();

registerPhotoActions(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening on port', port)
});
