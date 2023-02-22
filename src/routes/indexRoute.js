const router = require('express').Router()
const roomRoute = require('./roomRoute');
const roomTypeRoute = require('./roomTypeRoutes')

// Routes for Rooms
router.use('/rooms', roomRoute)

// Routes for Room-Types
router.use('/room-types', roomTypeRoute)

module.exports = router;