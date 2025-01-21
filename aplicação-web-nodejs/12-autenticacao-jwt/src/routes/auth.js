const express = require('express')
const users   = require('../models/users')
const jwt     = require('jsonwebtoken')

const authRouter = express.Router()

const superSecretPass = 'chave-super-secreta' //ia0sd9ia0dmom2o01239ans

authRouter.post('/register', (req, res) => {
    const { username, password } = req.body

    const userExists = users.find( user => user.username === username  )

    if (userExists) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const newUser = { username, password }
    users.push( newUser )

    res.status(201).json({ message: 'User registred with successful', userData: newUser })
})

authRouter.post('/login', (req, res) => {
    const { username, password } = req.body


    const userExists = users.find( user => user.username === username  )
    if (!userExists || userExists.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const payload = { username }
    const tokenConfigs = { expiresIn: '1h' }

    const token = jwt.sign( payload, superSecretPass, tokenConfigs )

    res.json({ token })
})

module.exports = authRouter