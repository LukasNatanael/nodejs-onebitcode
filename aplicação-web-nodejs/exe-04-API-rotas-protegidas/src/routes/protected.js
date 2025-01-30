const express = require('express')
const authMiddleware = require('../middlewares/auth-middleware')
let { users, findUserByEmail, deleteUserByEmail } = require('../models/users')

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

    let { name, email, pass, position } = req.body
    let user = findUserByEmail(email)

    if (!user) {

        if ( !name || !email || !pass ) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        
        position = !position ? 'standard': position
        const newUser = { name, email, pass, position }
        users.push( newUser )

        return res.json({ message: `${name} agora faz parte dos usuários. Seu cargo atual é: ${position}`})

    }
    
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

    res.json({ message: `Os dados de ${user.name} foram atualizados`, currentUser: user })

})

// DELETE -> auth/dashboard/admin/:user
protectedRouter.delete( '/dashboard/admin/:user', authMiddleware, (req, res) => {
    const autenticatedUser = req.authenticatedUser
    
    if (autenticatedUser.position !== 'admin') {
        return res.status(401).json({ message: 'Essa é uma área exclusiva para adiministradores! Por favor, retorne a página dos usuários comuns.' })
    }

    const userToDeleteEmail = req.params.user
    const user = findUserByEmail( userToDeleteEmail )
    
    if (!userToDeleteEmail || !user) {
        return res.json({ message: 'Forneça o e-mail do usuário a ser deletado!' })
    }
    
    users = deleteUserByEmail(userToDeleteEmail)

    return res.json({ message: `${user.name} já não faz mais parte da lista de usuários!`, email: user.email })

})

module.exports = protectedRouter