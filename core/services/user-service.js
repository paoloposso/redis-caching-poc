const fetch = require('node-fetch');
const userRepository = require('../repo/user-repository');
const { User, Address } = require('../entities/user');

class UserService {

    getAll() {
        return userRepository.getAll();
    }

    insert(req) {
        let user = new User(req.document, req.name, req.email);
        
        let err = user.validate();

        if(err.length > 0)
            return Promise.reject(err);

        if(req.addresses) {
            req.addresses.forEach(address => {
                user.addAddress(address);
            });
        }

        return userRepository.insert(user);
    }
}

module.exports = new UserService();