const roomTypeModel = require('../models/roomTypeModel');

class roomTypeService{
    
    // create roomtype
    async addRoomType(data){
        return await roomTypeModel.create(data)
    }

    // get all room types
    async getRoomTypes(id){
        return await roomTypeModel.findById(id)
    }
}

module.exports = new roomTypeService();