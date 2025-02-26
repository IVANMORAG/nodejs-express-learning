const { validationResult } = require('express-validator');

// Middleware para capturar errores de validación
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Middleware para manejar errores generales
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Errores específicos
  if (err.message === 'Usuario no encontrado') {
    return res.status(404).json({ message: err.message });
  }
  if (err.message.includes('ya existe') || err.message.includes('ya está en uso')) {
    return res.status(409).json({ message: err.message });
  }
  
  // Error de validación de mongoose
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      message: 'Error de validación',
      errors: Object.values(err.errors).map(e => e.message)
    });
  }
  
  // Error de ID inválido de mongoose
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(400).json({ message: 'ID de formato inválido' });
  }
  
  // Error general
  res.status(500).json({ message: 'Error interno del servidor' });
};

module.exports = {
  validateRequest,
  errorHandler
};