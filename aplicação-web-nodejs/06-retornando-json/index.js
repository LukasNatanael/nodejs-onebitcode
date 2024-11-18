const express = require('express')
const gamesController = require('./controllers/games-controller')
const app = express()

// utilizado para interpretar json nas requisições e API
app.use( express.json() )

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json( { message: 'Hello world!' } )
})

app.get('/games', gamesController.index)
app.get('/games/:id', gamesController.show)
app.post('/games', gamesController.save)
app.post('/games/:id/genre', gamesController.addGenre)

console.clear()
app.listen(PORT, console.log(`Server is running in: \nhttp://localhost:${PORT}`))