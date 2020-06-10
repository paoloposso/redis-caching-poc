const redis = require('redis');
const {promisify} = require('util');

const client = redis.createClient(process.env.REDIS_PORT || 6379, process.env.REDIS_HOST || 'localhost');

class RedisCache {

    getValue(key) {
        const get = promisify(client.get).bind(client);
        return get(key);
    }

    setValue(key, value) {
        client.setex(key, 3600, value);
    }
}

client.on('error', (err) => {
    console.error(err);
});

client.on('ready', () => {
    console.log(`Redis connected on port ${process.env.REDIS_PORT}`);
});

module.exports = new RedisCache();