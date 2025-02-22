const HttpError = require("../errors/HttpError")
const booksModel = require("../models/books-model")

class BooksController {

    // GET /api/books
    getAllBooks(req, res) {
        const books = booksModel.getAll()

        return res.json( books )
    }
    
    // GET /api/books/:id
    getBookById(req, res) {
        const { id } = req.params
        const book = booksModel.getById(id)
        
        return res.json( book )
    }
    
    // POST /api/books
    createBook(req, res) {
        const { title, author, quantityAvaliable } = req.body

        if ( typeof title !== 'string' || typeof author !== 'string' || typeof quantityAvaliable !== 'number' ) {
            // return new HttpError( 400, 'Invalid fields!' )
            return res.status(400).json({ message: 'Invalid fields!' })
        }

        const newBook = booksModel.createBook( title, author, quantityAvaliable )

        return res.json( newBook )
    }
    
    // PUT /api/books/:id
    updateBook(req, res) {
        const { id } = req.params
        const { title, author, quantityAvaliable } = req.body
        const fieldsToUpdate = {}

        if (title || typeof title === 'string') fieldsToUpdate.title = title 
        if (author || typeof author === 'string') fieldsToUpdate.author = author 
        if (quantityAvaliable || typeof quantityAvaliable === 'number') fieldsToUpdate.quantityAvaliable = quantityAvaliable 

        const updatedBook = booksModel.updateBook(id, fieldsToUpdate)

        return res.json(updatedBook)

    }
    
    // DELETE /api/books/:id
    deleteBook(req, res) {
        const { id } = req.params
        const deletedBook = booksModel.deleteBook(id)

        return res.json(deletedBook)

    }
}

module.exports = new BooksController()