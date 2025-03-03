const HttpError  = require("../errors/HttpError")
const jwt        = require('jsonwebtoken')
const UsersModel = require("../models/UsersModel")

class AuthMiddleware {

    ensureAuth( req, res, next ) {
        const authHeader = req.headers.authorization

        if(!authHeader) throw new HttpError(401, 'Unauthorized!')

        const token = authHeader.split(' ')[1]
        const secretKey = process.env.JWT_SECRET

        try {
            const { id } = jwt.verify( token, secretKey )
            const user = UsersModel.getById(id)
            if (!user) throw new HttpError(404, 'User id not found!')

            req.authUser = user
            next()
        }
        catch (error) {
            throw new HttpError(401, 'Invalid token!')
        }
    }

    ensureIsAdmin(req, res, next) {
        const authHeader = req.headers.authorization

        if(!authHeader) throw new HttpError(401, 'Unauthorized!')

        const token = authHeader.split(' ')[1]
        const secretKey = process.env.JWT_SECRET

        try {
            const { id } = jwt.verify( token, secretKey )
            const user = UsersModel.getById(id)
            if (!user) throw new HttpError(404, 'User id not found!')

            if (user.role !== 'admin') throw new HttpError(401, 'You will need to be an admin to access this area!')

            req.authUser = user
            next()
        }
        catch (error) {
            throw new HttpError(401, 'Invalid token!')
        }
    }
}

module.exports = new AuthMiddleware()