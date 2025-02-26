require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/database');
const { configureServer } = require('./config/server');

// Crear la aplicación Express
const app = express();

// Configurar el servidor
configureServer(app);

// Conectar a la base de datos
connectDB();

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
  console.log('Error no manejado:', err);
  // Cierre limpio del servidor
  server.close(() => process.exit(1));
});