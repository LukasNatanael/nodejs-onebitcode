const express         = require('express')
const AdminController = require('../controllers/AdminController')
const AuthMiddleware  = require('../middlewares/AuthMiddleware')
const adminsRoutes    = express.Router()


adminsRoutes.get('/users',               AuthMiddleware.ensureIsAdmin, AdminController.getAllUsers)
adminsRoutes.post('/users/register',     AuthMiddleware.ensureIsAdmin, AdminController.registerUser)
adminsRoutes.put('/users/update/:id',    AuthMiddleware.ensureIsAdmin, AdminController.updateUserData)
adminsRoutes.delete('/users/delete/:id', AuthMiddleware.ensureIsAdmin, AdminController.deleteUser)
adminsRoutes.post('/users/:id',          AuthMiddleware.ensureIsAdmin, AdminController.getUserById)

module.exports = adminsRoutes