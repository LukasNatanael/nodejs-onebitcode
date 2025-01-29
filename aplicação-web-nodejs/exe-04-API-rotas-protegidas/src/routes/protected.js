const express = require('express')
const authMiddleware = require('../middlewares/auth-middleware')
const { users, findUserByEmail} = require('../models/users')

const protectedRouter = express.Router()

// GET -> auth/dashboard/admin
protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const user = req.authenticatedUser

    if (user.position === 'admin') {
        return res.json({ message: `Bem-vindo(a) ${user.name}, está é uma área exclusiva para administradores. Abaixo está uma lista dos usuários cadastrados na plataforma.`, registredUsers: users  })
    }

    res.json({ message: `Você está em uma área protegida. Bem-vindo(a), ${user.name}` })
})


// POST -> auth/dashboard/admin
protectedRouter.post( '/dashboard/admin', authMiddleware, (req, res) => {
    const autenticatedUser = req.authenticatedUser
    
    if (autenticatedUser.position !== 'admin') {
        return res.status(401).json({ message: 'Essa é uma área exclusiva para adiministradores! Por favor, retorne a página dos usuários comuns.' })
    }

    const { name, email, pass, position } = req.body
    let user = findUserByEmail(email)

    if (!user) {

        if ( !name || !email || !pass ) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        
        const newUser = { name, email, pass, position }
        users.push( newUser )

        return res.json({ message: `${name} agora faz parte dos usuários. Seu cargo atual é: ${position}`})

    }
    
    // criar validação para evitar a utilização do mesmo e-mail
    if (name) {
        user.name = name
    }
    if (email) {
        user.email = email
    }
    if (pass) {
        user.pass = pass
    }
    if (position) {
        user.position = position
    }

    res.json({ message: `Olá ${autenticatedUser.name}, aqui você pode administrar todos os usuários. Criar novos, exclui-los e alterar o cargo de cada um.`, user })

})

module.exports = protectedRouter