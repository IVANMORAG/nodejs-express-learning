
const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb://admin:password@localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;