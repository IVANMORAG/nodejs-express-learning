const { greet } = require("../Service/greetService");

const greetProtected = (req, res) => {
  // Obtener el ID del usuario del token
  const token = req.headers.authorization;
  const userId = token.split('-')[2];
  
  // Pasar el ID al servicio
  res.json(greet(userId));
};

module.exports = { greetProtected };