const roomServices = require('../services/roomServices');
const RoomService = require('../services/roomServices');

// Create Rooms
exports.addRoom = async(req, res) => {
  try {
    // const RoomId = req.params.id
    const newRoom = req.body;

    // check if room already exists
    const existingRoom = await RoomService.getRoom({name: newRoom.name})

    if (existingRoom) res.status(403).json({
      success: false,
      message: 'Room already exists'
    })

    const addedRoom = await RoomService.addRoom(newRoom);
    return res.status(200).json({
      success: true,
      message: 'Room added successfully',
      room: addedRoom
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error
    })
  }


}

// Update Rooms
exports.editRoom = async(req, res) => {
  try {
    const roomId = req.params.id;
    const newRoom = req.body
    const existingRoom = await RoomService.getRoom({_id: roomId});
    if (!existingRoom){
      return res.status(404).json({
        success: false,
        message: 'Room not found'
      })
    }

    const editedRoom = await RoomService.updateRoom(roomId, newRoom);
    return res.status(200).json({
      success: true,
      message: 'Room updated successfully',
      room: editedRoom
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error'
    })
  } 
}

// Delete Room
exports.deleteRoom = async(req, res) => {
  try {
    const roomId = req.params.id

    // check if room exists
    const existingRoom = await RoomService.getRoom({_id: roomId});
    if (!existingRoom) res.status(404).json({
      success: false,
      message: 'Room not found'
    })

    // delete room if found
    const deletedRoom = await RoomService.deleteRoom(roomId);
    return res.status(200).json({
      success: true,
      message: 'Room deleted successfully'
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error
    })
  }
}

// Fetch a single Room
exports.getSingleRoom = async(req, res) => {
  try {
    const roomId = req.params.id

    // find book
    const room = await RoomService.getRoom({_id: roomId});

    // check if it exists
    if (!room) res.status(404).json({
      success: false,
      message: 'Book not found'
    })

    return res.status(200).json({
      success: true,
      message: 'Book found',
      room: room
    })
  } catch (error) {
   return res.status(500).json({
    success: false,
    message: 'Server error',
    error: error
   }) 
  }
}

// Fetch many rooms
exports.getRooms = async(req, res) => {
  try {
    const conditions = {};

    if (req.params.search) conditions.name = req.params.search;
    if (req.params.roomType) conditions.roomType = req.params.roomType;
    if (req.params.min-price) conditions.minPrice = {$gte: req.params.min-price};
    if (req.params.maxPrice) conditions.maxPrice = req.params.maxPrice;

    // fetch rooms
    const rooms = await RoomService.getRooms(conditions)

    // check if room found
    if (!rooms) res.status(404).json({
      success: false,
      message: 'Rooms not found'
    })

    return res.status(200).json({
      success: true,
      message: 'Room found successfully',
      rooms: rooms
    })
  } catch (error) {
    return res.status(50).json({
      succes: false,
      message: 'Server error',
      error: error
    })    
  }
}