const HttpError = require('../errors/HttpError')
const uuid      = require('uuid').v4

const books = [
    {
        id:     '1',
        title:  'Lógica de Programação e Algoritmos com JavaScript',
        author: 'Edécio Fernando Iepsen',
        quantityAvaliable: 2,
    },
    {
        id:     '2',
        title:  'Pense em Python: Pense Como um Cientista da Computação',
        author: 'Allen B. Downey',
        quantityAvaliable: 4,
    },
    {
        id:     '3',
        title:  'O Programador Pragmático: De Aprendiz a Mestre',
        author: 'Andy Hunt e Dave Thomas',
        quantityAvaliable: 3,
    },
]

class BooksModel {
    constructor(booksArray) {
        this.books = booksArray
    }

    getAll() {
        return this.books
    }
    
    getById(id) {
        if ( typeof id !== 'string' ) throw new HttpError(400, 'Invalid fields!')

        const book = this.books.find( book => book.id == id )
        if (!book) return null

        return book
    }

    getByTitle(title) {
        if ( typeof title !== 'string' ) throw new HttpError(400, 'Invalid fields!')

        const book = this.books.find( user => user.title == title )
        if (!book) return null

        return book
    }

    registerBook(title, author, quantityAvaliable) {

        if (
            typeof title  != 'string' ||
            typeof author != 'string' ||
            typeof quantityAvaliable  != 'number'
        ) throw new HttpError(406, 'Invalid fields')

        const bookExists = this.getByTitle(title)

        if (bookExists && author === bookExists.author) {
            bookExists.quantityAvaliable += quantityAvaliable
            return bookExists
        }

        const newBook = {
            id:                uuid(),
            title:             title,
            author:            author,
            quantityAvaliable: quantityAvaliable
        }

        this.books.push(newBook)
        return newBook
    }
    
    updateData(id, updatedData) {
        const book = this.getById(id)
        if(!book) throw new HttpError(404, 'Book id not found!')

        const bookIndex = this.books.findIndex( book => book.id == id )

        const title              = updatedData.title
        const author             = updatedData.author
        const quantityAvaliable  = updatedData.quantityAvaliable 
            
        if (
            title && typeof title   != 'string' ||
            author && typeof author != 'string' ||
            quantityAvaliable && typeof quantityAvaliable   != 'number'
        ) throw new HttpError(406, 'Invalid fields')

        this.books[bookIndex] = { ...book, ...updatedData }

        return this.books[bookIndex]
    }

    deleteBook(id) {
        const book = this.getById(id)
        if(!book) throw new HttpError(404, 'Book id not found!')
        
        this.books = this.books.filter( book => book.id != id )

        return book
    }

    takeBook(id) {
        const book = this.getById(id)
        if(!book) throw new HttpError(404, 'Book id not found!')

        if (book.quantityAvaliable < 1) throw new HttpError(400, 'There are no copies available!')

        book.quantityAvaliable -= 1
    }

    returnBook(id) {
        const book = this.getById(id)
        if(!book) throw new HttpError(404, 'Book id not found!')

        book.quantityAvaliable += 1
    }
}

module.exports = new BooksModel(books)