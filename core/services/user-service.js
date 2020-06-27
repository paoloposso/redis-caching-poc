const userRepository = require('../repo/user-repository');
const { User } = require('../entities/user');

class UserService {

    constructor({cache}) {
        this.cacheRepo = cache;
    }

    async getAll() {
        const cacheKey = 'users';

        let users = await this.cacheRepo.getValue(cacheKey);

        if (users) {
            return { source: 'cache', data: JSON.parse(users) }
        }

        return userRepository.getAll().then(users => {
            this.cacheRepo.setValue(cacheKey, JSON.stringify(users));

            return { source: 'db', data: users };
        });
    }

    insert(req) {
        let user = new User(req.document, req.name, req.email);
        
        let err = user.validate();

        if(err.length > 0)
            return Promise.reject({errors: err});

        if(req.addresses) {
            req.addresses.forEach(address => {
                user.addAddress(address);
            });
        }

        user.generateId();
        
        return userRepository.insert(user);
    }
}

module.exports = UserService;