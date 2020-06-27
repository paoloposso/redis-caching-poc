const bcrypt = require('bcrypt-promisify');
const { promisify } = require('util');

const saltRounds = 12;

class HashingService {

    getHash = async (password) => {
        return await bcrypt.hash(password, saltRounds)
    }
}

module.exports = new HashingService();