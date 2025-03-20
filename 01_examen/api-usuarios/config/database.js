const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Desactivar strictQuery para mayor compatibilidad
    mongoose.set('strictQuery', false);
    
    // Usar opciones adicionales que pueden ayudar con la conexión
    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin'
    };
    
    // Intentar conexión con opciones explícitas
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://admin:password@localhost:27017/library-loans', connectionOptions);
    
    console.log('Conexión a MongoDB establecida correctamente');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };