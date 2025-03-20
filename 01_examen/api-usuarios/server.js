require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const loanRoutes = require('./src/routes/loanRoutes');
const { connectDB } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 4001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);

app.listen(PORT, () => {
  console.log(`Servidor de usuarios y préstamos ejecutándose en puerto ${PORT}`);
});