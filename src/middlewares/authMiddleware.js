const jwt = require('../services/jwtServices');
const {decodeToken} = require('../services/jwtServices')

exports.authenticateUsers = async(req, res, next) => {
    // Check if there's an authorization header
    if (!req.header.authorization){
        return res.status(401).json({
            message: 'Authorization header required'
        })
    }

    // Check if the authorization token is valid
    const splittedHeader = req.header.authorization.split(' ');
    console.log(splittedHeader);
    if (splittedHeader[0] !== 'Bearer'){
        return res.status(401).json({
            message: 'Authorization token format is Bearer <token>'
        })
    }
    const authToken = splittedHeader[1];

    // decode token
    const decodedToken = decodeToken(authToken);
    if (!decodedToken){
        return res.status(500).json({
            messaage: 'Invalid authorization token. please login'
        })
    }

    req.user = decodedToken;

    // Allow user to continue with the request
    next()
}


exports.checkIfAdmin = (req, res, next) => {
    // Check if user role is 'admin'
    if (req.user.role !== 'admin'){
        return 'This route is restricted'
    }

    next()
}