const userServices = require('../services/userSevices');
const bcrypt = require('bcrypt');
const {createToken} = require('../services/jwtServices');

let password = 'Admin234'

exports.createAdmin = async() => {
    try {
        // Check if admin account has already been created
        const foundAdmin = await userServices.findUser({role: 'admin'});

        if (foundAdmin) {
            return 'Admin account already exists'
        }

        const newAdmin = userServices.createUser({
            firstName: 'precious',
            lastName: 'Kalu',
            userName: 'nicole',     
            role: 'admin'   
        })

        // Hash admin's password
        const salt = await bcrypt.genSalt(10)();
        const hashedPassword = await bcrypt.hash(password);

        // Save password to db
        newAdmin.password = hashedPassword;
        newAdmin.save(newAdmin);

        return 'Admin account created';
    } catch (error) {
        return 'Internal Server Error'
    }
}