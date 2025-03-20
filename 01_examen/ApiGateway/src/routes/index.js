// src/routes/index.js
const express = require('express');
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');
const loanRoutes = require('./loanRoutes');
const { requestLogger } = require('../middleware/requestLogger');

const router = express.Router();

// Middleware para loguear todas las peticiones
router.use(requestLogger);

// Rutas de cada servicio
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/loans', loanRoutes);

// Ruta para verificar estado del API Gateway
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;