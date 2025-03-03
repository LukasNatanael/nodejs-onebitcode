const BooksModel = require("../models/BooksModel")

class BooksController {

    getAllBooks(req, res) {
        const books = BooksModel.getAll()
        return res.json( books )
    }

    getBookById(req ,res) {
        const { id } = req.params
        const book = BooksModel.getById(id)

        return res.json( book )
    }
    
    registerBook(req, res) {
        const { title, author, quantityAvaliable } = req.body

        const newBook = BooksModel.registerBook( title, author, quantityAvaliable )

        return res.json({ id: newBook.id, title: newBook.title })
    }
    
    updateBookData(req, res) {
        const { id } = req.params
        const { title, author, quantityAvaliable,  } = req.body

        const fieldsToUpdate = {}

        if (title)             fieldsToUpdate.title  = title
        if (author)            fieldsToUpdate.author = author
        if (quantityAvaliable) fieldsToUpdate.quantityAvaliable  = quantityAvaliable
        
        BooksModel.updateData(id, fieldsToUpdate)

        return res.json( {upadatedFields: fieldsToUpdate} )
    }
    
    deleteBook(req, res) {
        const { id } = req.params
        const book = BooksModel.deleteBook(id)

        return res.json( book )
    }
}

module.exports = new BooksController()