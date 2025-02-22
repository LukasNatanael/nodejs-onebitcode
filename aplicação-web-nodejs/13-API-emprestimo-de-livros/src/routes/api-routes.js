const express = require('express')
const BooksController = require('../controllers/books-controller')
const loansController = require('../controllers/loans-controller')
const { ensureAuth } = require('../middlewares/auth-middleware')
const apiRouter = express.Router()

apiRouter.get('/books',         BooksController.getAllBooks)
apiRouter.get('/books/:id',     BooksController.getBookById)

apiRouter.post('/books'  , BooksController.createBook)
apiRouter.put('/books/:id'   , BooksController.updateBook)
apiRouter.delete('/books/:id', BooksController.deleteBook)

apiRouter.get('/loans', loansController.getAll)
apiRouter.get('/loans/:id', loansController.show)
apiRouter.post('/loans', ensureAuth, loansController.save)
apiRouter.post('/loans/:id/return', loansController.return)

module.exports = apiRouter