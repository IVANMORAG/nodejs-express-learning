// src/app.js
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Ha ocurrido un error en el servidor',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

module.exports = app;
