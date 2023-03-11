const router = require('express').Router()
const roomRoute = require('./roomRoute');
const roomTypeRoute = require('./roomTypeRoutes');
const userRoute = require('./userRoute');
const {authenticateUsers, checkIfAdmin} = require('../middlewares/authMiddleware');


// Routes for Rooms
router.use('/rooms', authenticateUsers, roomRoute)

// Routes for Room-Types
router.use('/room-types', authenticateUsers, checkIfAdmin, roomTypeRoute)

// Routes for Users
router.use('/auth', userRoute)

module.exports = router;