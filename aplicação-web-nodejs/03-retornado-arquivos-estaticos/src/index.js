const express = require('express')

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.listen(PORT, () => console.log(`Servidor iniciado em: http://localhost:${PORT}`))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})