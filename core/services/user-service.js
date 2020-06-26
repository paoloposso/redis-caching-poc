const userRepository = require('../repo/user-repository');
const { User } = require('../entities/user');

class UserService {

    getAll() {
        return userRepository.getAll();
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

module.exports = new UserService();