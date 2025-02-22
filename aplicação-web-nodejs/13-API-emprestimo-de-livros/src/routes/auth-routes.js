const express = require('express')
const AuthController = require('../controllers/auth-controller')
const AuthMiddleware = require('../middlewares/auth-middleware')
const authRouter = express.Router()

authRouter.post('/register', AuthController.register)
authRouter.post('/login'   , AuthController.login)

module.exports = authRouter