const jwt   = require('jsonwebtoken')
const users = require('../models/users')

const secretPass = '908as7d9hanye1q239eyuq80dhias'

const authMiddleware = ( req, res, next ) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Bem-vindo visitante! Para ter acesso a área exclusiva de membros registre-se na plataforma.' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify( token, secretPass )
        
        const user = users.find( user => user.email === decodedToken.email )
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