const express = require('express')
const authRouter = require('./routes/auth')
const protectedRouter = require('./routes/protect')

const app = express()

app.use( express.json() )
app.use( '/auth', authRouter )
app.use( '/protected', protectedRouter )

const port = process.env.port || 3000

console.clear()
app.listen(port, () => console.log(`Your server is running in: \nhttp://localhost:${port}`))