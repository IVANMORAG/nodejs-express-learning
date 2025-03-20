// src/routes/loanRoutes.js
const express = require('express');
const serviceRegistry = require('../services/serviceRegistry');

const router = express.Router();
const loanService = serviceRegistry.getService('loans');

// GET /api/loans
router.get('/', async (req, res, next) => {
  try {
    const loans = await loanService.get('', req.query);
    res.json(loans);
  } catch (error) {
    next(error);
  }
});

// GET /api/loans/:id
router.get('/:id', async (req, res, next) => {
  try {
    const loan = await loanService.get(`/${req.params.id}`, req.query);
    res.json(loan);
  } catch (error) {
    next(error);
  }
});

// POST /api/loans
router.post('/', async (req, res, next) => {
  try {
    const newLoan = await loanService.post('', req.body);
    res.status(201).json(newLoan);
  } catch (error) {
    next(error);
  }
});

// PUT /api/loans/:id
router.put('/:id', async (req, res, next) => {
  try {
    const updatedLoan = await loanService.put(`/${req.params.id}`, req.body);
    res.json(updatedLoan);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/loans/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await loanService.delete(`/${req.params.id}`);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// PATCH /api/loans/:id/return
router.patch('/:id/return', async (req, res, next) => {
  try {
    const returnedLoan = await loanService.patch(`/${req.params.id}/return`, req.body);
    res.json(returnedLoan);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
