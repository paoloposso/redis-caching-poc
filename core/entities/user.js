class User {
    /**
     * 
     * @param {string} document 
     * @param {string} name 
     * @param {string} id 
     * @param {[Address]} addresses 
     * @param {string} email 
     * 
     */
    constructor (document, name, id, addresses, email){}
}

class Address {
    constructor (street, number, zipCode, city, country){}
}

module.exports = { 
    User,
    Address
};