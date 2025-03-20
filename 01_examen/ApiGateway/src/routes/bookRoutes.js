// src/routes/bookRoutes.js
const express = require('express');
const serviceRegistry = require('../services/serviceRegistry');

const router = express.Router();
const bookService = serviceRegistry.getService('books');

// GET /api/books
router.get('/', async (req, res, next) => {
  try {
    const books = await bookService.get('', req.query);
    res.json(books);
  } catch (error) {
    next(error);
  }
});

// GET /api/books/:id
router.get('/:id', async (req, res, next) => {
  try {
    const book = await bookService.get(`/${req.params.id}`, req.query);
    res.json(book);
  } catch (error) {
    next(error);
  }
});

// POST /api/books
router.post('/', async (req, res, next) => {
  try {
    const newBook = await bookService.post('', req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
});

// PUT /api/books/:id
router.put('/:id', async (req, res, next) => {
  try {
    const updatedBook = await bookService.put(`/${req.params.id}`, req.body);
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/books/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await bookService.delete(`/${req.params.id}`);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;