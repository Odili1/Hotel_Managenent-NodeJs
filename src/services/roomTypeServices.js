const roomTypeModel = require('../models/roomTypeModel');

class roomTypeService{
    
    // create roomtype
    async addRoomType(data){
        return await roomTypeModel.create(data)
    }

    // get all room types
    async getRoomTypes(filter){
        return await roomTypeModel.find(filter)
    }

    // delete room type
    async deleteRoomType(id){
        return await roomTypeModel.findByIdAndDelete(id)
    }
}

module.exports = new roomTypeService();