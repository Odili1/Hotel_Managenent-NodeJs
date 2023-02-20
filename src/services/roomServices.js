const roomModel = require('../models/roomsModel');


class RoomService{
    // create room
    async addRoom(data){
        return await roomModel.create(data)
    }

    // Update room
    async updateRoom(id, updatedData){
        return await roomModel.findByIdAndUpdate(id, updatedData, {new: true})
    }

    // Delete a Book
    async deleteRoom(id){
        return await roomModel.findByIdAndDelete(id)
    }

    // Get a single room
    async getRoom(filter){
        return await roomModel.findOne(filter)
    }

    // Get rooms
    async getRooms(filter){
        return await roomModel.find(filter)
    }
}

module.exports = new RoomService();