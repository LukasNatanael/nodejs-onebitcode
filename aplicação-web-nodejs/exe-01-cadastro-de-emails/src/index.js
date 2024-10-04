// importando módulos necessários
const express = require('express')
const path    = require('node:path')

// >> criando servidor
const app = express()

// >> criando "banco de dados"
let emails = []

// <----- configurando express e EJS ----->

// >> informando interpretador e pasta de páginas
app.set('view engine', 'ejs')
app.set('views', path.join( __dirname + '/views'))

// >> renderiza a estilização de forma estática
app.use(express.static('public'))

// >> setando interprtador de dados que são enviados pela url
app.use(express.urlencoded({ extended: true }))

// >> criando rotas
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/signup', (req, res) => {
    const { email } = req.body

    if (email != '') {
        emails.push(email)
        res.redirect('/home')
    }
    res.redirect('/')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/emails', (req, res) => {
    res.render('emails', { emails: emails })
})


app.post('/emails/delete', (req, res) => {
    const { email } = req.body
    emails = emails.filter( item => item != email )

    res.redirect('/emails')
})

// >> monitorando e "ouvindo" rotas
const PORT = 3000
app.listen(PORT, (req, res) => console.log(`Server rodando em: http://localhost:${PORT}`))