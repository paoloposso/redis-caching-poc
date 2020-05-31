const redis = require('redis');
const {promisify} = require('util');

const client = redis.createClient(process.env.REDIS_PORT || 6379);

client.on('error', (err) => {
    console.error(err);
});

class Caching {

    getValue(key) {
        const get = promisify(client.get).bind(client);
        return get(key);
    }

    setValue(key, value) {
        client.setex(key, 3600, value);
    }
}

module.exports = new Caching();