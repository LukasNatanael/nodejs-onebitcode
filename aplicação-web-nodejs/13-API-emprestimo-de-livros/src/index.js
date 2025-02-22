require('dotenv').config()
const express = require('express')
const authRoutes = require('./routes/auth-routes')
const apiRoutes = require('./routes/api-routes')
const errorMiddleware = require('./middlewares/error-middleware')
const app     = express()

app.use(express.json())
app.use('/auth', authRoutes)
app.use('/api' , apiRoutes)

app.use( errorMiddleware )

const PORT = process.env.PORT || 3000

app.listen( PORT, () => {
    console.clear()
    console.log(`Your server is running in: \nhttp://localhost:${PORT}`)
} )