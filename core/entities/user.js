const uuid = require('uuid').v4;

class User {
    /**
     * 
     * @param {string} document 
     * @param {string} name 
     * @param {string} email 
     * 
     */
    constructor (document, name, email) {
        this.document = document;
        this.name = name;
        this.email = email;

        this.addresses = new Array();
    }

    validate() {
        let err = [];
        if (!this.email) {
            err.push('Invalid email');
        }
        if (!this.name) {
            err.push('Name is required');
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

class Address {
    constructor (street, number, zipCode, city, country) {
        this.street = street;
        this.number = number;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }
}

module.exports = { 
    User,
    Address
};