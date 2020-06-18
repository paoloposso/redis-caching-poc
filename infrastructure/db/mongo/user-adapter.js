const { User } = require('../../../core/entities/user');
const UserModel = require('./model/user-model');

class UserAdapter {

    /**
     * 
     * @param {User} user
     */
    createUser(user) {
        let userModel = new UserModel(user);
        return userModel.save();
    }

    async getAll() {
        return await UserModel.find({});
    }
}

module.exports = new UserAdapter();