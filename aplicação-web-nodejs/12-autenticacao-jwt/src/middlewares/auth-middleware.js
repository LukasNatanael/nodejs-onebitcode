const jwt   = require('jsonwebtoken')
const users = require('../models/users')

const superSecretPass = 'chave-super-secreta' //ia0sd9ia0dmom2o01239ans

const authMiddleware = ( req, res, next ) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is required' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify( token, superSecretPass )
        const user = users.find( user => user.username === decodedToken.username  )
        if (!user) {
            return res.status(401).json({ message: 'Invalid user' })        

        }
        req.authenticatedUser = user

        next()
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid token' })        

    }

}

module.exports = authMiddleware