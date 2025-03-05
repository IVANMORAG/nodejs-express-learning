const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config.js")
const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
