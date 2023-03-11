const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiry = process.env.TOKEN_EXPIRY;


exports.createToken = (user) => {
    try {
        const payload = {
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName
        }
        
        const token = jwt.sign(payload, secret,{expiresIn: expiry});

        return token
    } catch (error) {
        console.log(error);
        return null
    }
}


exports.decodeToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, secret)

        return decodedToken
    } catch (error) {
        console.log(error);
        return null
    }
}