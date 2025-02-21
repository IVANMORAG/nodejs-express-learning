const { getAllUsers, login } = require("../Service/authService");

const getUsers = (req, res) => {
  res.json(getAllUsers());
};

const loginController = (req, res) => {
  const { username, password } = req.body;
  const respuesta = login(username, password);
  
  if (respuesta.token) {
    res.json({ token: respuesta.token });
  } else {
    res.status(401).json({ message: respuesta.message });
  }
};

module.exports = { getUsers, loginController };