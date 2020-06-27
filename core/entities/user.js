const uuid = require('uuid').v4;
const Address = require('./address');
const hashingService = require('../util/hashing-service');

class User {
    /**
     * 
     * @param {string} document 
     * @param {string} name 
     * @param {string} email 
     * @param {string} password 
     * 
     */
    constructor (document, name, email, password) {
        this.document = document;
        this.name = name;
        this.email = email;
        this.password = password;

        this.addresses = [];
    }

    async generateHashedPassword(password) {
        this.password = await hashingService.getHash(password);
    }

    validateCreation() {
        let err = [];
        if (!this.email) {
            err.push('Invalid email');
        }
        if (!this.name) {
            err.push('Name is required');
        }
        if (!this.password) {
            err.push('Password is required');
        }

        return err;
    }

    generateId() {
        this.uuid = uuid();
    }
    
    /**
     * 
     * @param {Address} address 
     */
    addAddress(address) {
        this.addresses.push(new Address(address.street, address.number, address.zipCode, address.city, address.country));
    }
}



module.exports = { 
    User,
    Address
};