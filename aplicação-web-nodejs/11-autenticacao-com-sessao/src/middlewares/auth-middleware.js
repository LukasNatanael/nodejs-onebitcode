const authMiddleware = (req, res, next) => {
    if (req.session.autenticated) {
        next()
    }
    else {
        console.log('Você precisa estar logado para acessar essa página!')
        res.redirect('/')
    }
}

module.exports = authMiddleware