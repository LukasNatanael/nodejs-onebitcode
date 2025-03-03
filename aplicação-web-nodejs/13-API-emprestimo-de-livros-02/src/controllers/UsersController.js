const HttpError  = require("../errors/HttpError")
const UsersModel = require("../models/UsersModel")
const jwt        = require('jsonwebtoken')
const bcrypt     = require('bcrypt')

class UsersController {

    // POST /register
    register(req, res) {
        const { name, email, pass } = req.body

        const newUser = UsersModel.registerUser(name, email, pass)

        return res.json({ id: newUser.id, name: newUser.name })

    }

    // POST /login
    login(req, res) {
        const { email, pass } = req.body

        if ( typeof email !== 'string' || typeof pass !== 'string'  ) throw new HttpError(400, 'Invalid fields!')

        const user = UsersModel.getByEmail( email )
        if (!user) throw new HttpError(404, 'User not found!')

        const isValidPass = bcrypt.compareSync( pass, user.pass )

        if (!isValidPass) {
            throw new HttpError(400, 'Invalid credentials!')
        }

        const payload      = { id: user.id }
        const secretKey    = process.env.JWT_SECRET
        const tokenConfigs = { expiresIn: '1d' }

        const token = jwt.sign( payload, secretKey, tokenConfigs)

        return res.json({ token })
    }

    updateRegister(req, res) {
        const { name, email, pass } = req.body
        const { id } = req.authUser

        const fieldsToUpdate = {}

        if (name)  fieldsToUpdate.name  = name
        if (email) fieldsToUpdate.email = email
        if (pass)  fieldsToUpdate.pass  = pass

        UsersModel.updateData(id, fieldsToUpdate)
        fieldsToUpdate.role = undefined
        
        return res.json( {upadatedFields: fieldsToUpdate} )
    }

    getLoans(req, res) {
        const { id } = req.authUser

        const loans = UsersModel.getLoans(id)

        return res.json({ userLoans: loans })
    }

}


module.exports = new UsersController()