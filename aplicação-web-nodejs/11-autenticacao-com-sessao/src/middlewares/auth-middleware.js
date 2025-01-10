const authMiddleware = (req, res, next) => {
    if (req.session.autenticated) {
        next()
    }
    else {
        console.log('Você precisa estar logado para acessar essa página!')
        res.redirect('/')
    }
}

const ensureUserIsAdmin = ( req, res, next ) => {
    if ( req.session.currentUser.role !== 'admin' ) {
        return res.redirect('/dashboard')
    }
    next()
}

module.exports = { authMiddleware, ensureUserIsAdmin}