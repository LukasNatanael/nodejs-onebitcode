const HttpError = require("../errors/HttpError")
const jwt       = require('jsonwebtoken')
const usersModel = require("../models/users-model")
class AuthMiddleware {

    ensureAuth( req, res, next ) {
        const authHeader = req.headers.authorization

        // if(!authHeader) return new HttpError( 401, 'Unauthorized!' )
        if(!authHeader) return res.status(401).json({ message: 'Unauthorized!' })
        
        const token = authHeader.split(' ')[1]
        const secretKey = process.env.JWT_KEY

        try {

            const { id } = jwt.verify( token, secretKey )
            const user = usersModel.findUserById(id)
            
            // if(!user) return new HttpError( 404, 'User not found!' )
            if(!user) return res.status(404).json({ message: 'User not found!' })
                req.authUser = user
            next()
        }
        catch (error) {
            // return new HttpError(401, 'Invalid token!')
            return res.status(401).json({ message: 'Invalid token!' })
        }
    }
}

module.exports = new AuthMiddleware()