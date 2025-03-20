// src/routes/bookRoutes.js
const express = require('express');
const BookController = require('../controllers/bookController');
const BookService = require('../services/bookService');
const Book = require('../models/Book');

const router = express.Router();
const bookService = new BookService(Book);
const bookController = new BookController(bookService);

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;