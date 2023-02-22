const mongoose = require('mongoose');
const {config} = require('dotenv');
config();

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URI, ()=> {
            console.log('Database connected!')
        })
    }
    catch (error) {
        console.error('Database error', error)
    }
}

module.exports = connectDB;