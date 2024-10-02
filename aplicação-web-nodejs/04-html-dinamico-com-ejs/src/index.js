const express = require('express')
const path    = require('node:path')

const app = express()
const PORT = 3000

const storedUsers = []

// configuração EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))

// configuração do body
app.use(express.urlencoded({ extended: true }))

// renderizando pagina principal
app.get('/', (req, res) => {
    const title   = 'Homepage'
    const content = 'Conteúdo dinâmico inserido com EJS'

    // <%= %> -> é utilizado para exibir variaveis na página, uma forma de retornar os valores delas (retornar um conteúdo)
    // <% %>  -> é utilizado para inserir códigos js como: condições, loops e outros códigos JS (não retornar nada)
    res.render('index', { title, content})
})

// renderizando pagina de registro
app.get('/form', (req,res) => {
    res.render('form')
})

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    storedUsers.push({ name: username, pass: password })

    if (username === 'Lukas Natanael' && password == '11111111') {
        res.redirect('/admin')
    }
    else {
        res.redirect('/users')
    }
})

app.get('/users', (req, res) => {
    res.render('users', { users: storedUsers })
})

app.get('/admin', (req, res) => {
    res.render('admin')
})



app.listen( PORT, () => console.log(`Server rodando em: http://localhost:${PORT}`) )