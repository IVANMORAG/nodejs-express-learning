const mongoose = require('mongoose');

// URI de conexión - se tomará de variables de entorno en producción
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/api-auth';

// Opciones de conexión
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, options);
    console.log('MongoDB conectado exitosamente');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;