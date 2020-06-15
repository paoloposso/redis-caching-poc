// const express = require('express');
const PhotosService = require('../services/photo-service');
const cache = require('../adapters-internal/caching-redis/redis-caching');

const service = new PhotosService({ cache });

const registerPhotoActions = async (app) => {
    app.get('/photos', async (req, res) => {
        let photos = await service.getAll();
    
        res.json(photos);
    });
}

module.exports = {
    registerPhotoActions
}