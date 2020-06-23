const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    document: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
      type: String
    },
    addresses: {
      default: [
        {
            street: {
                type: String,
                required: true
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
      ],
      type: Array
    }
  },
  { collection: "Users" }
);

user.index({name: 1, password: 1});

const User = mongoose.model("users", user);

module.exports = User;
