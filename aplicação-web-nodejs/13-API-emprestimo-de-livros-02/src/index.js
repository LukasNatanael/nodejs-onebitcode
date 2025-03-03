// importando váriáveis de ambiente
require('dotenv').config()

const express         = require('express')
const errorMiddleware = require('./middlewares/error-middleware')
const userRoutes      = require('./routes/users-routes')
const adminRoutes     = require('./routes/admins-routes')
const bookRoutes      = require('./routes/books-routes')
const loansRoutes     = require('./routes/loans-routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use( express.json() )
app.use(userRoutes)
app.use(adminRoutes)
app.use(bookRoutes)
app.use(loansRoutes)

app.use( errorMiddleware )

app.listen( PORT, () => {
    console.clear()
    console.log(`Your server is running in: \nhttp://localhost:${PORT}`)
} )

