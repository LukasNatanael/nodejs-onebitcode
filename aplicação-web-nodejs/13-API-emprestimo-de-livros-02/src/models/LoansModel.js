const uuid       = require('uuid').v4
const HttpError  = require('../errors/HttpError')
const BooksModel = require('./BooksModel')
const UsersModel = require('./UsersModel')

const loans = [
    {
        id:     '1',
        userId: '1',
        bookId: '1',
        loanDate: new Date('2024-01-01'),
        returnDate: null,
        isReturned: null,
        isLate: true
    },
    {
        id:     '2',
        userId: '1',
        bookId: '2',
        loanDate: new Date('2020-01-01'),
        returnDate: null,
        isReturned: null,
        isLate: true
    }
]

class LoansModel {
    constructor( booksArray ) {
        this.loans = booksArray
    }

    getAll() {
        return this.loans
    }

    getById(id) {
        if ( typeof id !== 'string' ) throw new HttpError(400, 'Invalid fields!')
        const loan = this.loans.find( loan => loan.id === id )

        if (!loan) return null

        return loan
    }

    createLoan(user, book) {
        const userExists = UsersModel.getById( user.id )
        if (!userExists) throw new HttpError(404, 'User id not found!')

        const bookExists = BooksModel.getById( book.id )
        if(!bookExists) throw new HttpError(404, 'Book id not found!')

        const today      = new Date()
        const returnDate = new Date()
        returnDate.setDate( today.getDate() + 14 )
    
        const newLoan = {
            id: uuid(),
            userId: userExists.id,
            bookId: bookExists.id,
            loanDate: today,
            returnDate: returnDate,
            isReturned: false,
            isLate: false
        }

        this.loans.push( newLoan )

        userExists.loans.push( newLoan )

        BooksModel.takeBook( book.id )

        return newLoan
    }

    returnLoan(userId, loanId) {
        const loan = this.getById(loanId)
        if (!loan) throw new HttpError(404, 'Loan id not found!')

        if (loan.isReturned) throw HttpError(404, 'Loan already was returned!')

        const user = UsersModel.getById(userId)
        if (!user) throw new HttpError(404, 'User id not found!')

        if( user.id !== loan.userId ) throw new HttpError(400, 'The book was not rented to this user')

        const today = new Date()
        const limitDate = new Date(loan.returnDate)

        loan.isLate     = today > limitDate
        loan.returnDate = today

        BooksModel.returnBook(loan.bookId)
        
        this.deleteLoan(userId, loanId)
        
        return loan
    }

    deleteLoan(userId, loanId) {
        const loan = this.getById(loanId)
        if (!loan) throw new HttpError(404, 'Loan id not found!')

        let user = UsersModel.getById(userId)
        if (!user) throw new HttpError(404, 'User id not found!')           

        this.loans = this.loans.filter( loan => loan.id != loanId )

        user.loans = user.loans.filter( loan => loan.id != loanId )

        return loan
    }
}


module.exports = new LoansModel(loans)