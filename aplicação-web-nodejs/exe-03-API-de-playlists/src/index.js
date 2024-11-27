const express = require('express')
const path    = require('node:path')
const routes  = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

// pegar dados JSON
// app.use( express.json() )

// pegar PARÂMETROS na URL
app.use( express.urlencoded({ extended: true }) )

app.use( express.static('public') )
app.use( routes )

app.set( 'view engine', 'ejs' )
app.set( 'views', path.join(__dirname, 'views') )


console.clear()
app.listen(PORT, console.log(`Server is running in: \nhttp://localhost:${PORT}`))