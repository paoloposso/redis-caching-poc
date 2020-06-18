// const express = require('express');
const PhotosService = require('../core/services/photo-service');
const cache = require('../infrastructure/caching/redis/cache-service');

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