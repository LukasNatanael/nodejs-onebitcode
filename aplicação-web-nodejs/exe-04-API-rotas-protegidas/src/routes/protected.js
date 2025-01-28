const express = require('express')
const authMiddleware = require('../middlewares/auth-middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const user = req.authenticatedUser

    if (user.position === 'admin') {
        return res.json({ message: `Bem-vindo(a) ${user.name}, está é uma área exclusiva para administradores.` })
    }

    res.json({ message: `Você está em uma área protegida. Bem-vindo(a), ${user.name}` })
})

module.exports = protectedRouter