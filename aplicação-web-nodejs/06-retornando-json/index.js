const express = require('express')
const gamesController = require('./controllers/games-controller')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json( { message: 'Hello world!' } )
})

app.get('/games', gamesController.index)
app.get('/games/:id', gamesController.show)

console.clear()
app.listen(PORT, console.log(`Server is running in: \nhttp://localhost:${PORT}`))