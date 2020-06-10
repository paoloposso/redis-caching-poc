const express = require('express');
const PhotosService = require('./services/photo-service');
const cache = require('./adapters-internal/caching/redis-caching');

const app = express();

const service = new PhotosService({ cache });

app.get('/photos', async (req, res) => {
    let photos = await service.getAll();

    res.json(photos);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server listening on port', port)
});
