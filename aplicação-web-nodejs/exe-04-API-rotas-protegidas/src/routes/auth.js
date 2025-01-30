const express = require('express')
const jwt     = require('jsonwebtoken')
const { users, findUserByEmail}   = require('../models/users')

const authRouter = express.Router()
const secretPass = '908as7d9hanye1q239eyuq80dhias'



// POST -> auth/login
authRouter.post('/login', (req, res) => {
    const { email, pass } = req.body

    const user = findUserByEmail(email)

    if (!user || user.pass !== pass || !email || !pass) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const payload = { name: user.name, email }
    const options = { expiresIn: '10m' }

    const token = jwt.sign( payload, secretPass, options )

    res.json({ token })
})

// POST -> auth/register
authRouter.post('/register', (req, res) => {
    const { name, email, pass } = req.body

    const user = findUserByEmail(email)

    if (user || !name || !email || !pass) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }
    
    const newUser = { name, email, pass, position: 'standard' }
    users.push( newUser )

    const payload = { name, email }
    const options = { expiresIn: '10m' }

    const token = jwt.sign( payload, secretPass, options )

    console.log( token )

    res.json({ message: `Hello ${name}! You have been registered successfully.`, token: token})
})

module.exports = authRouter