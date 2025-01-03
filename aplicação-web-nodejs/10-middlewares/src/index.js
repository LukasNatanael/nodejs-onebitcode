const express = require('express')
const middlewareC = require('./middlewares/middleware-c')
const app     = express()
const PORT = 3000

/*
    A ordem da declaração dos middlewares são *- MUITO IMPORTANTES -* pois, ele é executado linha a linha
*/

app.use( middlewareC )

app.use((req, res, next) => {
    console.log('Executando middlewareA')
    req.middlewareA = 'OK'
    next()
})

const middlewareB = (req, res, next) => {
    console.log('Executando middlewareB')
    req.middlewareB = 'OK'
    next()
}

app.get('/testeA', (req, res) => {
    console.log({ a: req.middlewareA, b: req.middlewareB })
    throw new Error('Rota A não está respondendo!')
    res.end()
})

app.get('/testeB', middlewareB, (req, res) => {
    console.log({ a: req.middlewareA, b: req.middlewareB})
    throw new Error('Erro genérico na rota B')
    res.end()
})

// middlewares que tratam erros recebem por padrão 4 argumentos
app.use((err, req, res, next) => {
    if (err) {
        console.log( err.message )
        return res.status(400).json({ message: err.message })
    }
    next()
})

app.listen(PORT, console.log(`Server running in: \nhttp://localhost:${PORT}`))