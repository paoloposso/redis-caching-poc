const userRepository = require('../repositories/user-repository');
const { User } = require('../entities/user');

class UserService {

    cacheKey = 'users';

    constructor({cache}) {
        this.cacheRepo = cache;
    }

    async getAll() {

        let users = JSON.parse(await this.cacheRepo.getValue(this.cacheKey));

        if (users && users.length > 0) {
            return { source: 'cache', users }
        }

        return userRepository.getAll().then(users => {
            this.cacheRepo.setValue(this.cacheKey, JSON.stringify(users));

            return { source: 'db', users };
        });
    }

    async insert(req) {

        let user = new User(req.document, req.name, req.email, req.password);

        let err = user.validateCreation();
        
        if(err.length > 0)
            return Promise.reject({errors: err});
        
        await user.generateHashedPassword(req.password);

        if(req.addresses) {
            req.addresses.forEach(address => {
                user.addAddress(address);
            });
        }

        user.generateId();
        
        return userRepository.insert(user).then(() => {
            
            //updating cache database
            userRepository.getAll().then(users => {
                this.cacheRepo.setValue(this.cacheKey, JSON.stringify(users));
            });

            return user;
        });
    }
}

module.exports = UserService;