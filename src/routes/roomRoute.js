const router = require('express').Router();
const roomControllers = require('../controllers/roomController')



router.patch('/:id', roomControllers.editRoom)
router.post('/', roomControllers.addRoom)
router.delete('/:id', roomControllers.deleteRoom)
router.get('/:id', roomControllers.getSingleRoom)
router.get('/', roomControllers.getRooms)

module.exports = router;