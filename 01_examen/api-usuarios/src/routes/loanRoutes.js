const express = require('express');
const LoanController = require('../controllers/loanController');
const LoanService = require('../services/loanService');
const Loan = require('../models/Loan');

const router = express.Router();
const BOOK_API_URL = process.env.BOOK_API_URL || 'http://localhost:3000/books';
const loanService = new LoanService(Loan, BOOK_API_URL);
const loanController = new LoanController(loanService);

router.get('/', loanController.getAllLoans);
router.get('/:id', loanController.getLoanById);
router.post('/', loanController.createLoan);
router.put('/:id', loanController.updateLoan);
router.delete('/:id', loanController.deleteLoan);
router.patch('/:id/return', loanController.returnLoan);

module.exports = router;