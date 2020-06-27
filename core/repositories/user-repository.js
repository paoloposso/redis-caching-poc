const userAdapter = require('../../infrastructure/db/mongo/user-adapter');

class UserRepository {
    
    constructor() {
        this.adapter = userAdapter;
    }

    insert(user) {
        return this.adapter.createUser(user);
    }

    getAll() {
        return this.adapter.getAll();
    }
}

module.exports = new UserRepository(userAdapter);