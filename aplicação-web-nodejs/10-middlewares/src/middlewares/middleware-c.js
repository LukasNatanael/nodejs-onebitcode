module.exports = middlewareC = (req, res, next) => {
    console.log('Executando middlewareC')
    req.middlewareC = 'OK'
    next()
}