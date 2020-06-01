const fetch = require('node-fetch');

class PhotoService {

    constructor({cache}) {
        this.cacheRepo = cache;
    }

    async getAll() {
        const cacheKey = 'user:photos1';

        let photos = await this.cacheRepo.getValue(cacheKey);

        if (photos) {
            return { source: 'cache', data: JSON.parse(photos) };
        } else {
            let resp = await fetch('https://jsonplaceholder.typicode.com/photos');
            let responseBody = await resp.json();

            this.cacheRepo.setValue(cacheKey, JSON.stringify(responseBody));

            return { source: 'api', data: responseBody };
        }
    }
}

module.exports = PhotoService;