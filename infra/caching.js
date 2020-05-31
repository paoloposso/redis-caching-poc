class Caching {

    constructor (cache) {
        this.cache = cache;
    }

    /**
     * 
     * @param {string} key 
     */
    getValue(key) {
        return this.cache.getValue(key);
    }

    /**
     * 
     * @param {string} key 
     * @param {string} value 
     * @param {int} ttl 
     */
    setValue(key, value) {
        this.cache.setValue(key, value);
    }
}

module.exports = Caching;