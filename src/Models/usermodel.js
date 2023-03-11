const {Schema, model} = require('mongoose');


const userModel = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
    },
    role:{
        type: String,
        enum: ['guest', 'admin'],
        default: 'guest'
    }
})

module.exports = model('user', userModel);