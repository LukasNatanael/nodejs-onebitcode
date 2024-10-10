const express = require('express')
const path    = require('node:path')
const routes = require('./src/routes')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

app.use( express.urlencoded({ extended: true }) )
app.use( express.static('public') )
app.use(routes)

console.clear()
app.listen(PORT, console.log(`Server is running in:\nhttp://localhost:${PORT}`))