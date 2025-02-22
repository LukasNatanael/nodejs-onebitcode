const HttpError  = require("../errors/HttpError")
const users      = require("../models/users-model")
const jwt        = require('jsonwebtoken')
const bcrypt     = require('bcrypt')

class AuthController {

    register( req, res ) {
        const { name, email, password } = req.body
    
        if ( typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
            // return new HttpError( 400, 'Invalid fields!' )
            return res.status(400).json({ message:'Invalid fields!' })
        }
        
        const registeredUser = users.registerUser( name, email, password )
        
        if (!registeredUser) {
            // return new HttpError( 400, 'E-mail already in use!' )
            return res.status(400).json({ message: 'E-mail already in use!' })
        }

        return res.status(201).json( { ...registeredUser, password:undefined, role:undefined } )
    }
    
    login( req, res ) {
        const { email, password } = req.body

        const user = users.findUserByEmail(email)

        if (!user) {
            // return new HttpError( 400, 'User not found!' )
            return res.status(400).json({ message: 'User not found!' })
        }
        const isValidPassword = bcrypt.compareSync( password, user.password )
        if ( !isValidPassword ) {
            // return new HttpError( 400, 'Invalid credentials!' )
            return res.status(400).json({ message: 'Invalid credentials!' })
        }

        const payload = { id: user.id, name: user.name }
        const tokenConfigs = { expiresIn: '1d' }
        const secretKey = process.env.JWT_KEY

        const token = jwt.sign( payload, secretKey, tokenConfigs )

        return res.json({ token })

    }
}

module.exports = new AuthController()