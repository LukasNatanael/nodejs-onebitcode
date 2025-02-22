const uuid = require('uuid').v4
const HttpError = require('../errors/HttpError')

const books = [
    {
        id: '1',
        title: 'Código limpo: Habilidades Práticas do Agile Software',
        author: 'Robert C. Martin',
        quantityAvaliable: 4
    },
    {
        id: '2',
        title: 'Automatize Tarefas Maçantes com Python: Programação Prática Para Verdadeiros Iniciantes',
        author: 'Al Sweigart',
        quantityAvaliable: 3
    }
]

class BooksModel {
    constructor( books ) {
        this.books = books
    }

    getAll() {
        return this.books.map( book => ({ id: book.id, title: book.title }) )
    }
    
    getById(id) {
        const book = this.books.find( book => book.id === id )
        if(!book) throw new HttpError(400, 'Book not found!')
        // if(!book) throw Error('Book not found!')

        return book
    }
    
    getByTitle(title) {
        const book = this.books.find( book => book.title === title )
        if(!book) return new HttpError(400, 'Book title not found!')
    
        return book
        
    }

    getByAuthor(author) {
        const books = this.books.filter( book => book.author === author )
        if(!books) throw Error('Author not found!')
    
        return books
    }

    createBook( title, author, quantityAvaliable ) {

        if( typeof title !== 'string' || typeof author !== 'string' || typeof quantityAvaliable !== 'number' ) {
            return new HttpError( 400, 'Invalid fields!' )
            // throw Error('Invalid fields!')

        }

        const bookExists = this.getByTitle(title)

        if(!bookExists || bookExists.author !== author) {
            const newBook = {
                id:                 uuid(),
                title:              title,
                author:             author,
                quantityAvaliable:  quantityAvaliable
            }
            
            this.books.push(newBook)
            return newBook
        }

        bookExists.quantityAvaliable += quantityAvaliable
        const book = {
            title: bookExists.title,
            author: bookExists.author,
            quantityAvaliable: bookExists.quantityAvaliable
        }
        console.log( book )

        return book
    }

    updateBook(id, updatedBook) {
        const bookIndex = this.books.findIndex( book => book.id == id )
        if(bookIndex == -1) {
            return new HttpError(401, 'Book not found!')
            // throw Error('Book not found!')
        }

        this.books[bookIndex] = { ...this.books[bookIndex], ...updatedBook }

        return this.books[bookIndex]
        
    }

    deleteBook(id) {
        const book = this.getById(id)

        if(!book) return new HttpError(401, 'Book not found!')
        
        this.books = this.books.filter( book => book.id !== id )

        return book
    }

    takeBook(id) {
        const book = this.getById(id)
        
        if (book.quantityAvaliable < 1) throw new HttpError(400, 'There are no copies available!')
        book.quantityAvaliable -= 1
    }

    returnBook(id) {
        const book = this.getById(id)
        book.quantityAvaliable += 1

    }

}

module.exports = new BooksModel(books)