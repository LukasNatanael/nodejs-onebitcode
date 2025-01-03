const express = require('express')
const uploadMiddlewares = require('../middlewares/upload-middleware')
const app = express()

app.use( express.static('public') )
// "image" é o name do input no HTML
app.post('/upload', uploadMiddlewares.single('image'), (req, res) => {
    console.log( req.file, req.body )
    res.json({ message: 'Arquivo salvo com sucesso!' })
})

const PORT = 3000
app.listen(PORT, console.log(`Your server is running in: \nhttp://localhost:3000`))