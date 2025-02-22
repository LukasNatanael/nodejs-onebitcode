const booksModel = require('./books-model')
const uuid = require('uuid').v4
const HttpError = require('../errors/HttpError')


const loans = [
    {
        id:         '1',
        userId:     '1',
        bookId:     '1',
        loanDate:   new Date('2024-01-01'),
        returnDate: null,
        isReturned: false,
        isLate:     true
    },
]

class LoansModel {
    constructor(loansObject) {
        this.loans = loansObject        
    }

    getAllLoans() {
        return this.loans 
    }

    getLoanById(id) {
        const loan = this.loans.find( loan => loan.id === id )
        if(!loan) return null

        return loan
    }

    createLoan(user, book) {
        if (book.quantityAvaliable < 1) throw new HttpError(400, 'There are no copies available!')

        const today      = new Date()
        const returnDate = new Date()
        returnDate.setDate( today.getDate() + 14 )

        const newLoan = {
            id: uuid(),
            userId:     user.id,
            bookId:     book.id,
            loanDate:   today,
            returnDate: returnDate,
            isReturned: false,
            isLate:     false
        }
        
        this.loans.push( newLoan )

        booksModel.takeBook(book.id)

        return newLoan
    }
    
    returnLoan(id) {
        const loan = this.getLoanById(id) 

        if (!loan) return null

        if (loan.isReturned) return null

        const today = new Date()
        const limitDate = new Date( loan.returnDate )
        
        loan.isLate = today > limitDate
        loan.returnDate = today
        
        booksModel.returnBook( loan.bookId )
        this.deleteLoan(id)

        return loan
    }
    
    deleteLoan(id) {
        const loan = this.getLoanById(id) 
        this.loans = this.loans.filter( loan => loan.id != id)
        if(!loan) return new HttpError(401, 'Book not found!')

        return loan

    }
}


module.exports = new LoansModel(loans)