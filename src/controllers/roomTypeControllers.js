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
        if (req.query.name) conditions.name = req.query.name;

        const roomTypes = await RoomTypeService.getRoomTypes(conditions);

        if (!roomTypes) res.status(404).json({
            success: false,
            message: 'Room Type not found'
        })

        return res.status(200).json({
            success: true,
            message: 'Room-Types found',
            roomType: roomTypes
        })
    } catch (error) {
        console.error('Server error', error)
    }
}

exports.deleteRoomType = async(req, res) => {
    try {
        const roomId = req.params.id;

        // get roomtypes
        const roomTypes = await RoomTypeService.getRoomTypes({});

        // check if it exists
        if (!roomTypes.some(el => el.id == roomId)){
            return res.status(404).json({
                success: false,
                message: 'Room-Type not found'
            })
        }

        // delete roomtype
        RoomTypeService.deleteRoomType(roomId);
        return res.status(200).json({
            success: true,
            message: 'Room-Type deleted successfully',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error
        })
    }
}