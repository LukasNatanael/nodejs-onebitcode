const UsersModel = require("../models/UsersModel")
const HttpError  = require('../errors/HttpError')

class AdminController {

    getAllUsers(req, res) {
        const users = UsersModel.getAll()
        return res.json( users )
    }

    getUserById(req ,res) {
        const { id } = req.params
        const user = UsersModel.getById(id)
        if (!user) throw new HttpError(404, 'User id not found!')

        return res.json( user )
    }
    
    registerUser(req, res) {
        const { name, email, pass, role } = req.body

        const newUser = UsersModel.registerUser(name, email, pass, role)

        return res.json({ id: newUser.id, name: newUser.name })
    }
    
    updateUserData(req, res) {
        const { id } = req.params
        const { name, email, pass, role } = req.body

        const fieldsToUpdate = {}

        if (name)  fieldsToUpdate.name  = name
        if (email) fieldsToUpdate.email = email
        if (pass)  fieldsToUpdate.pass  = pass
        if (role)  fieldsToUpdate.role  = role
        
        UsersModel.updateData(id, fieldsToUpdate)
        fieldsToUpdate.role = undefined

        return res.json( {upadatedFields: fieldsToUpdate} )
    }
    
    deleteUser(req, res) {
        const { id } = req.params
        const user = UsersModel.deleteUser(id)

        return res.json( user )
    }
}

module.exports = new AdminController()