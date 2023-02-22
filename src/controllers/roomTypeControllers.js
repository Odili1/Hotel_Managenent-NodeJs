const RoomTypeService = require('../services/roomTypeServices');


exports.addRoomType = async(req, res) => {
    try {
        const newRoomType = req.body;
    
        const addedRoomType = await RoomTypeService.addRoomType(newRoomType);
        return res.status(200).json({
            success: true,
            message: 'RoomType Added Successfully',
            roomType: addedRoomType
        })
        
    } catch (error) {
        console.error('Server Error', error)
    }
}

exports.getRoomTypes = async(req, res) => {
    try {
        const conditions = {};
        if (req.params.name) conditions.name = req.params.name;

        const roomTypes = await RoomTypeService.getRoomTypes({});

        return res.status(200).json({
            success: true,
            message: 'Room-Types found',
            roomType: roomTypes
        })
    } catch (error) {
        console.error('Server error', error)
    }
}