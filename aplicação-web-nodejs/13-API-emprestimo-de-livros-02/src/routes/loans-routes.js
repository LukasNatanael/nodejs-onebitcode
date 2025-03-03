const express         = require('express')
const LoansController = require('../controllers/LoansController')
const AuthMiddleware  = require('../middlewares/AuthMiddleware')
const loansRoutes     = express.Router()

loansRoutes.get('/loans/all',               AuthMiddleware.ensureIsAdmin, LoansController.getAllLoans)
loansRoutes.post('/loans/create',           AuthMiddleware.ensureAuth, LoansController.createLoan)
loansRoutes.post('/loans/return',           AuthMiddleware.ensureAuth, LoansController.returnLoan)
loansRoutes.delete('/loans/delete',         AuthMiddleware.ensureIsAdmin, LoansController.deleteLoan)
loansRoutes.post('/loans/:id',              AuthMiddleware.ensureIsAdmin, LoansController.getLoanById)


module.exports = loansRoutes