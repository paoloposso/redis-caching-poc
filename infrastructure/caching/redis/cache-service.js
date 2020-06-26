const redis = require('redis');
const {promisify} = require('util');

class CacheServer {

    constructor() {
        const port = process.env.REDIS_URL || 'localhost:6379';

        this.client = redis.createClient()

        this.client.on('error', (err) => {
            console.error(err);
        });

        this.client.on('ready', () => {
            console.log('Redis connected on port', port);
        });
    }

    getValue(key) {
        const get = promisify(this.client.get).bind(this.client);
        return get(key);
    }

    setValue(key, value) {
        this.client.setex(key, 3600, value);
    }
}

module.exports = new CacheServer();