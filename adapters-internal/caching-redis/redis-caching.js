const redis = require('redis');
const {promisify} = require('util');

// const port = process.env.REDIS_PORT || 32652;
// const host = process.env.REDIS_HOST || '192.168.39.130';

class RedisCache {

    constructor() {
        const port = process.env.REDIS_PORT || 6379;
        const host = process.env.REDIS_HOST || 'localhost';

        this.client = redis.createClient(port, host);

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

module.exports = new RedisCache();