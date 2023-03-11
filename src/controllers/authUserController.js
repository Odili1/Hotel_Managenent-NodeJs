const userServices = require('../services/userSevices');
const bcrypt = require('bcrypt');
const {createToken} = require('../services/jwtServices')


exports.registerUser = async(req, res) => {
    try {
        // Check if user already exists
        const checkUser = await userServices.findUser({userName: req.userName});
        if (checkUser) {
            return res.status(404).json({
                success: false,
                message: 'a user with this username already exists'
            })
        }
    
        // Create User if none exists
        const newUser = await userServices.createUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName
        });
        
        // Hash User's Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Save password to db
        newUser.password = hashedPassword;
        newUser.save();

        // create token for the new User
        const token = createToken(newUser);
        if (!token){
            return res.status(400).json({
                message: 'Sorry, we could not authenticate you, please login'
            })
        }
        
        return res.status(200).json({
            success: true,
            message: 'User registration successful',
            token
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error
        })
    }
}


// Login User
exports.loginUser = async(req, res) => {
    try {
        // check if username exists
        const foundUser = await userServices.findUser({userName: req.body.userName});
        if (!foundUser){
            return res.status(401).json({
                message: 'incorrect username'
            })
        }

        // check if password is correct
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match){
            return res.status(401).json({
                message: 'incorrect password'
            })
        }

        // create token
        const token = createToken(foundUser)
        if (!token){
            return res.status(500).json({
                message: 'Sorry... could not authenticate you. please Sign Up'
            })
        } 

        // Send Token to Use
        return res.status(200).json({
            success: true,
            message: 'User Logged In',
            token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error
        })
    }
}


exports.deleteUser = async(req, res) => {
    const userId = req.params.id
    try {
        // check if username exists
        const foundUser = await userServices.findUser({userName: req.body.userName});
        if (!foundUser){
            return res.status(401).json({
                message: 'UserName found'
            })
        }

        // Delete User
        const deletedUser = await userServices.deleteUser({_id: userId});

        return res.status(200).json({
            message: 'This user has been deleted',
            deletedUser
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


// view users
exports.viewUsers = async(req, res) => {
    try {
        const conditions = {}
        // fetch users
        const users = await userServices.getUsers(conditions)

        // check if room found
        if (!users) res.status(404).json({
        success: false,
        message: 'Users not found'
        })

        return res.status(200).json({
        success: true,
        message: 'Users found successfully',
        users: users
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}