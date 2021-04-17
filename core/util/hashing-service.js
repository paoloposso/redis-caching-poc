const bcrypt = require('bcrypt');

const saltRounds = 12;

class HashingService {

    getHash = async (password) => {
        return await bcrypt.hash(password, saltRounds)
    }
}

module.exports = new HashingService();