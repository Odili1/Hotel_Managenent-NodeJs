const { deleteUser } = require('../controllers/authUserController');
const UserModel = require('../models/usermodel');

class userServices{
    async createUser(data){
        return await UserModel.create(data);
    }

    async findUser(filter){
        return await UserModel.findOne(filter);
    }

    async deleteUser(filter){
        return await UserModel.findOneAndDelete(filter);
    }

    async getUsers(data){
        return await UserModel.find(data);
    }
}


module.exports = new userServices()