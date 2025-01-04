const express = require('express')
const path    = require('node:path')
const router  = require('./routes')
const session = require('express-session')

const app     = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', path.join( __dirname, 'views' ))
app.use( express.urlencoded({ extended: true }) )

app.use(express.static('public'))

app.use( session({
    secret: 'palavra-chave-secreta', //9iu0123n9cen8023u0ejqskd01
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}) )
app.use(router)

console.clear()
app.listen( PORT, console.log(`Your server is running in: \nhttp://localhost:${PORT}`) )