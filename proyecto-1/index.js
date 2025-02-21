const express = require("express");
const authRouter = require("./routes/authRoutes");
const greetRouter = require("./routes/greetRoutes");
const cors = require("cors");
const PORT = 3000;
const {users} = require("./data") 

// Crear instancia del servidor
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter)
app.use("/greet", greetRouter)

app.listen(PORT, ()=>{
    console.log("Sevver rinning in https://localhost:"+PORT)
});




