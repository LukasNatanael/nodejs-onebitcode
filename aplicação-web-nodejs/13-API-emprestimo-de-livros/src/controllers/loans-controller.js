const HttpError = require('../errors/HttpError')
const booksModel = require('../models/books-model')
const loansModel = require('../models/loan-model')

class LoansController {

    // GET /api/loans
    getAll(req, res) {
        const loans = loansModel.getAllLoans()

        return res.json(loans)
    }

    // GET /api/loans/:id
    show(req, res) {
        const { id } = req.params

        if( typeof id !== 'string') throw new HttpError( 400, 'Invalid fields!' )

        const loan = loansModel.getLoanById(id)
        if(!loan) throw new HttpError(404, 'Loan not found!')
            
        return res.json(loan)

        // throw new HttpError(400, 'There are no copies available!')

    }

    // POST /api/loans
    save(req, res) {
        const user = req.authUser
        const { bookId } = req.body

        if ( typeof bookId !== 'string' ) throw new HttpError( 400, 'Book ID invalid!' )

        const book = booksModel.getById(bookId)

        if (!book) throw new HttpError(404, 'Book not found!')

        const newLoan = loansModel.createLoan(user, book)
        return res.json( newLoan )
    }

    // POST /api/loans/:id/return
    return(req, res) {
        const { id } = req.params
        const loan = loansModel.returnLoan(id)

        if (!loan) throw new HttpError(400, 'There are no more copies of this book to be returned!')
        res.json(loan)


    }
    
}

module.exports = new LoansController()