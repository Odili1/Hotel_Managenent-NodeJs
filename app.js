const express = require("express");
const connectDB = require("./src/database/mongo");
const routes = require('./src/routes/indexRoute')
const {config} = require('dotenv');
config()


// Connect DB
connectDB()

// Initialize Express
const app = express();

// Initialize Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Main Middlewares
app.use('/api/v1', routes)

// Port
const port = process.env.PORT || 4000;

// Connect to Server
app.listen(port, ()=>{
  console.log(`Server is up and running on port ${port}`);
})
