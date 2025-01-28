const express = require('express')
const authRouter = require('./routes/auth')
const protectedRouter = require('./routes/protected')

const app  = express()
const PORT = process.env.PORT || 3000

app.use( express.json() )
app.use( '/auth', authRouter )
app.use( '/protected', protectedRouter )

app.listen( PORT, () => {
    console.clear()
    console.log(`Your server is running in: \nhttp://localhost:${PORT}`)
})