// src/routes/userRoutes.js
const express = require('express');
const serviceRegistry = require('../services/serviceRegistry');

const router = express.Router();
const userService = serviceRegistry.getService('users');

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await userService.get('', req.query);
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await userService.get(`/${req.params.id}`, req.query);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// POST /api/users
router.post('/', async (req, res, next) => {
  try {
    const newUser = await userService.post('', req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id
router.put('/:id', async (req, res, next) => {
  try {
    const updatedUser = await userService.put(`/${req.params.id}`, req.body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await userService.delete(`/${req.params.id}`);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
