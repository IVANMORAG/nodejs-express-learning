const express = require("express");
const authRouter = require("./routes/authRoutes");
const cors = require("cors");
const PORT = 3001; // Cambiado a 3001 para no conflictuar con el servicio de usuarios

// Crear la instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRouter);

app.listen(PORT, () => {
    console.log("Servidor de autenticación ejecutándose en http://localhost:" + PORT);
});