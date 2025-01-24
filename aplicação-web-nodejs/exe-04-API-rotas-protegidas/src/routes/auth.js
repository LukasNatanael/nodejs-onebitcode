const express = require('express')
const jwt     = require('jsonwebtoken')
const users   = require('../models/users')

const authRouter = express.Router()
const secretPass = '908as7d9hanye1q239eyuq80dhias'

const findUserByName = (username) => {
    const user = users.find( user => user.name === username )
    if (!user) {
        return res.json({ message: 'User not found' })
    }

    return user
}
const findUserByEmail = (email) => {
    const user = users.find( user => user.email === email )
    return user
}

// auth/login
authRouter.get('/login', (req, res) => {
    const { name, email, pass } = req.body

    const user = findUserByEmail(email)

    if (!user || user.pass !== pass) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const payload = { name, email }
    const options = { expiresIn: '30m' }

    const token = jwt.sign( payload, secretPass, options )

    console.log( token )
    res.json({ message: `Hello ${user.name}. Welcome to login page!`})
})

// auth/register
authRouter.get('/register', (req, res) => {
    const { name, email, pass } = req.body

    const user = findUserByEmail(email)

    if (user) {
        res.status(401).json({ message: 'Invalid credentials' })
    }

    const newUser = { name, email, pass }
    users.push( newUser )

    res.json({ message: `Hello ${name}! You have been registered successfully.`, userData: newUser})
})

module.exports = authRouter