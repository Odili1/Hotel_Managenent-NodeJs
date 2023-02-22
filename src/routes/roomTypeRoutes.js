const router = require('express').Router();
const RoomTypeControllers = require('../controllers/roomTypeControllers')

router.post('/', RoomTypeControllers.addRoomType)
router.delete('/:id', RoomTypeControllers.deleteRoomType)
router.get('/', RoomTypeControllers.getRoomTypes)

module.exports = router;