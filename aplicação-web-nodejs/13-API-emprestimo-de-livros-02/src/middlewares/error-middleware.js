const HttpError = require("../errors/HttpError");
    
function errorMiddleware(error, req, res, next) {
    if (error) {
        if (error instanceof HttpError) {
            return res.status( error.status ).json({ message: error.message })
        }
        return res.status(400).json({ message: error.message })
    }

    next()

}

module.exports = errorMiddleware