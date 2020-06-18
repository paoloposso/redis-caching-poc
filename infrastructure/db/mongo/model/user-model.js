const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: String
    },
    document: {
      type: String
    },
    email: {
        type: String
    },
    addresses: [
        {
            street: {
                type: String
            }, 
            number: {
                type: String
            }, 
            zipCode: {
                type: String
            }, 
            city: {
                type: String
            }, 
            country: {
                type: String
            }, 
        }
    ]
  },
  { collection: "Users" }
);

const User = mongoose.model("users", user);

module.exports = User;
