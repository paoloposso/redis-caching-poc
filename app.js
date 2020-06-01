const express = require('express');
const PhotosService = require('./services/photo-service');
const cache = require('./infra/redis-caching');

const app = express();

const service = new PhotosService({ cache });

app.get('/photos', async (req, res) => {
    let photos = await service.getAll();

    res.json(photos);
});

app.listen(3000, () => {
    console.log('Server listening on port: ', 3000)
});