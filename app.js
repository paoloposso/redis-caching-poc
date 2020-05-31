const express = require('express');
const fetch = require('node-fetch');
const Caching = require('./infra/caching');
const rediscaching = require('./infra/impl/redis-caching');

const cache = new Caching(rediscaching);

const app = express();

app.get('/photos', (req, res) => {
    const cacheKey = 'user:photos1';

    let photos = await cache.getValue(cacheKey);

    if (photos) {
        return res.json({ source: 'cache', data: JSON.parse(photos) });
    } else {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => {
                cache.setValue(cacheKey, JSON.stringify(photos));
                return res.json({ source: 'api', data: photos });
            })
            .catch(error => {
                console.log(error);
                return res.json(error.toString());
            });
    }
});

app.listen(3000, () => {
    console.log('Server listening on port: ', 3000)
});