const userAdapter = require('../../infrastructure/db/mongo/user-adapter');

class UserRepository {
    
    constructor() {
        this.adapter = userAdapter;
    }

    insert(user) {
        this.adapter.createUser(user);
        console.log(user);
    }

    getAll() {
        return this.adapter.getAll();
    }
}

module.exports = new UserRepository();