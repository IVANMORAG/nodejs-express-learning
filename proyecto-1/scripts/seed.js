const mongoose = require('mongoose');
const User = require('../models/User');
const connectDB = require('../config/database');

// Datos iniciales
const initialUsers = [
  {
    username: "usuario1",
    password: "password1"
  },
  {
    username: "usuario2",
    password: "password2"
  }
];

// Función para sembrar datos
const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Limpiar la colección de usuarios
    await User.deleteMany({});
    
    // Insertar usuarios iniciales
    await User.insertMany(initialUsers);
    
    console.log('Base de datos inicializada con éxito');
    process.exit(0);
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
};

// Ejecutar la función
seedDatabase();