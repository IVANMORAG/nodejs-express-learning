const app = require('./app');
const connectDatabase = require('./config/database');

const PORT = process.env.PORT || 4000;

// Conectar a la base de datos antes de iniciar el servidor
connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
});