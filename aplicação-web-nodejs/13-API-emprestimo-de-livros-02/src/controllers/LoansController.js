const BooksModel = require("../models/BooksModel");
const LoansModel = require("../models/LoansModel");
const HttpError  = require('../errors/HttpError')

class LoansController {

    getAllLoans(req, res) {
        const loans = LoansModel.getAll()
        return res.json(loans)
    }

    getLoanById(req, res) {
        const { id } = req.params
        const loan = LoansModel.getById(id)
        if (!loan) throw new HttpError(404, 'Loan id not found!')

        return res.json(loan)

    }

    createLoan(req, res) {
        const user = req.authUser
        const book = req.body
        
        const bookId = BooksModel.getById( book.bookId )
        if(!bookId) throw new HttpError(404, 'Book id not found!')

        const newLoan = LoansModel.createLoan( user, bookId )

        return res.json(newLoan)
    }
    
    returnLoan(req, res) {
        const { loanId } = req.body
        const { id }     = req.authUser

        const loan = LoansModel.returnLoan(id, loanId)
    
        return res.json(loan)

    }
    
    deleteLoan(req, res) {
        const { loanId } = req.body
        const loan = LoansModel.deleteLoan(loanId)

        return res.json(loan)

    }
}

module.exports = new LoansController()