const express         = require('express')
const UsersController = require('../controllers/UsersController')
const AuthMiddleware  = require('../middlewares/AuthMiddleware')
const usersRoutes     = express.Router()

usersRoutes.post('/login', UsersController.login )
usersRoutes.post('/register', UsersController.register )
usersRoutes.put('/update', AuthMiddleware.ensureAuth, UsersController.updateRegister )
usersRoutes.get('/loans', AuthMiddleware.ensureAuth,  UsersController.getLoans )

module.exports = usersRoutes