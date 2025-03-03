const express         = require('express')
const AuthMiddleware  = require('../middlewares/AuthMiddleware')
const BooksController = require('../controllers/BooksController')
const booksRoutes     = express.Router()


booksRoutes.get('/books',               BooksController.getAllBooks)
booksRoutes.post('/books/register',     AuthMiddleware.ensureIsAdmin, BooksController.registerBook)
booksRoutes.put('/books/update/:id',    AuthMiddleware.ensureIsAdmin, BooksController.updateBookData)
booksRoutes.delete('/books/delete/:id', AuthMiddleware.ensureIsAdmin, BooksController.deleteBook)
booksRoutes.post('/books/:id',          BooksController.getBookById)

module.exports = booksRoutes