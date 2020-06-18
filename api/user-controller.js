// const express = require('express');
const userService = require('../core/services/user-service');
const cache = require('../infrastructure/caching/redis/cache-service');

const registerUserActions = (app) => {
    app.get('/users/all', (req, res) => {
        res.json(userService.getAll());
    });

    app.post('/user', (req, res) => {
        res.json(userService.insert(req.body));
    });
}

module.exports = {
    registerUserActions
}