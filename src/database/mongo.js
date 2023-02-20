const mongoose = require('mongoose');
const { DATABASE } = require("./constants")

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(DATABASE.MONGO_URI, ()=> {
            console.log('connected to DB!')
        })
    }
    catch (error) {
        console.error('Database error', error)
    }
}

module.exports = connectDB;