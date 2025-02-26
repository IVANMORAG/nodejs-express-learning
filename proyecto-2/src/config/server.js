const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler } = require('../middlewares/errorHandler');

// Configuración del servidor Express
const configureServer = (app) => {
  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  
  // Rutas
  const userRoutes = require('../routes/userRoutes');
  app.use('/api/users', userRoutes);
  
  // Ruta de prueba
  app.get('/', (req, res) => {
    res.json({ message: 'API de usuarios funcionando correctamente' });
  });
  
  // Middleware de manejo de errores
  app.use(errorHandler);
  
  return app;
};

module.exports = { configureServer };