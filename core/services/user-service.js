const fetch = require('node-fetch');
const userRepository = require('../repo/user-repository');

class UserService {

    getAll() {
        return userRepository.getAll();
    }

    insert(user) {
        userRepository.insert(user);
    }
}

module.exports = new UserService();