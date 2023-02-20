const router = require('express').Router()
const roomRoute = require('./roomRoute');


router.use('/rooms', roomRoute);