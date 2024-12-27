const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000
app.use( express.json() )
app.use( routes )

console.clear()
app.listen( PORT, console.log(`Your server is running in: \nhttp://localhost:${PORT}`) )
