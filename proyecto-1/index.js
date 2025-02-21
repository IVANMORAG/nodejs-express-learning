const express = require("express");
const authRouter = require("./routes/authRoutes");
const greetRouter = require("./routes/greetRoutes");
const cors = require("cors");
const connectDB = require('./config/database');
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Crear instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/greet", greetRouter);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});